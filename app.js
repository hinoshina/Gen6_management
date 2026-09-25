// app.js
// 画面ロジック（検索・並び替え・カード描画・モーダル編集など）。
// 6gen_management.html のインライン<script>部分をそのまま分離したもの（挙動は変更していない）。
// 依存: gen6-constants.js（固定データ）, gen6-initial-instances.js（初期データ）

  // データ読み込み
  // 固定データ（species / natures / abilityTypeResistances / typeChart）は
  // gen6-constants.js から読み込む（このファイル自体にはデータを直接書かない）。
  // ユーザー編集対象データ（instances）は IndexedDB（gen6-db.js の Gen6DB）から非同期で読み込み、
  // 読み込み完了後に initApp() の中で DATA.instances へ設定する（起動シーケンスは末尾を参照）。
  const DATA = {
    species: SPECIES_DATA,
    natures: NATURES_DATA,
    abilityTypeResistances: ABILITY_TYPE_RESISTANCES,
    typeChart: TYPE_CHART,
    // IndexedDBからの読み込みが完了するまでの間は空配列にしておく（未読み込み状態でrenderListが
    // 呼ばれても例外にならないようにするため）。
    instances: []
  };
  // ユーティリティ
  const statsOrder = ['H','A','B','C','D','S'];

  // ひらがな/カタカナを区別せずに検索できる正規化（NFKC, カタカナ->ひらがな）
  function normalizeForSearch(s){
    let str = String(s || '').normalize('NFKC').trim();
    // カタカナ -> ひらがな
    str = str.replace(/[\u30A1-\u30F6]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0x60));
    return str;
  }

  function getSpecies(name){
    return DATA.species[name];
  }

  // 種族値キー(H/A/B/C/D/S) <-> baseStatsキー(hp/atk/def/spa/spd/spe) の対応
  const statKeyMap = {H:'hp',A:'atk',B:'def',C:'spa',D:'spd',S:'spe'};

  // タイプ名に対応する背景色を要素に適用する（TYPE_COLORSに無いタイプは何もしない＝従来どおりの見た目のまま）。
  // 背景色を設定した場合は文字色を白にする。
  function applyTypeColorStyle(el, typeName){
    const hex = (typeof TYPE_COLORS !== 'undefined') ? TYPE_COLORS[typeName] : null;
    if(hex){
      el.style.backgroundColor = '#' + hex;
      el.style.color = '#fff';
    }
  }

  // 技名に対応する（MOVES_DATA上の）タイプの背景色を要素に適用する。
  // MOVES_DATAに存在しない技名（空欄や未登録の技）には何もしない。
  function applyMoveColorStyle(el, moveName){
    const moveInfo = (typeof MOVES_DATA !== 'undefined') ? MOVES_DATA[moveName] : null;
    if(moveInfo && moveInfo.type){
      applyTypeColorStyle(el, moveInfo.type);
    }
  }

  // インスタンスの道具からメガ関連グループを判定（X専用/Y専用/汎用メガ/該当なし）
  function computeItemGroup(inst){
    const itemRaw = ((inst && inst.item) || '').toLowerCase();
    if(!itemRaw) return null;
    if(/x/i.test(itemRaw) && /ナイト|メガ|ストーン|stone|mega/i.test(itemRaw)) return 'megaX';
    if(/y/i.test(itemRaw) && /ナイト|メガ|ストーン|stone|mega/i.test(itemRaw)) return 'megaY';
    if(/ナイト|メガ|メガストーン|ストーン|stone|mega/i.test(itemRaw)) return 'mega';
    return null;
  }

  // baseName の種族データが持つ forms/formButtons から、条件に合う現在のフォーム名を解決する
  // opts: { isMega: boolean, itemGroup: 'megaX'|'megaY'|'mega'|null, formChoice: 'shield'|'blade'|null }
  function pickFormName(baseName, opts){
    opts = opts || {};
    const sp = DATA.species[baseName];
    if(!sp || !sp.forms || sp.forms.length <= 1) return baseName;
    const forms = sp.forms;
    const formButtons = sp.formButtons || [];
    const megaCandidates = forms.filter(n => DATA.species[n] && DATA.species[n].stage === 'メガ');
    if(opts.isMega && megaCandidates.length){
      if(opts.itemGroup === 'megaX'){
        const f = megaCandidates.find(n=>/X/i.test(n)); if(f) return f;
      }
      if(opts.itemGroup === 'megaY'){
        const f = megaCandidates.find(n=>/Y/i.test(n)); if(f) return f;
      }
      return megaCandidates[0];
    }
    if(opts.formChoice){
      const idx = formButtons.findIndex(lbl => (opts.formChoice==='shield' && lbl==='盾') || (opts.formChoice==='blade' && lbl==='剣'));
      if(idx>=0 && forms[idx]) return forms[idx];
    }
    return baseName;
  }

  // 性格補正: up=1.1 down=0.9 else 1.0
  function natureMult(nature, stat){
    const nd = DATA.natures[nature];
    if(!nd) return 1;
    if(nd.up===stat) return 1.1;
    if(nd.down===stat) return 0.9;
    return 1;
  }

  // 実数値計算（6世代/50レベルなど一般式）
  function calcStat(base, iv, ev, level, statKey, nature){
    if(statKey==='H'){
      // HP
      return Math.floor(((2*base + iv + Math.floor(ev/4)) * level)/100) + level + 10;
    } else {
      const raw = Math.floor(((2*base + iv + Math.floor(ev/4)) * level)/100) + 5;
      return Math.floor(raw * natureMult(nature, statKey));
    }
  }

  // レンダリング
  const listEl = document.getElementById('list');
  const qEl = document.getElementById('q');
  const advSortFieldEl = document.getElementById('adv-sort-field');
  const advSortDirBtn = document.getElementById('adv-sort-dir');
  const filterTypeEl = document.getElementById('filter-type');
  const resetBtn = document.getElementById('reset');

  // タイプフィルタ: 固定順で選択肢を作成（五十音順ベースに指定）
  const typesOrder = ['ノーマル','ほのお','みず','でんき','くさ','こおり','かくとう','どく','じめん','ひこう','エスパー','むし','いわ','ゴースト','ドラゴン','あく','はがね','フェアリー'];
  if(filterTypeEl){
    typesOrder.forEach(t=>{ const o = document.createElement('option'); o.value = t; o.textContent = t; filterTypeEl.appendChild(o); });
  }

  // 詳細検索パネルのトグル（表示は検索ボックス群とソート群の間に現れる）
  const toggleAdvBtn = document.getElementById('toggle-advanced');
  const advPanel = document.getElementById('advanced-search');
  if(toggleAdvBtn && advPanel){
    toggleAdvBtn.addEventListener('click', ()=>{
      const isOpen = advPanel.style.display !== 'none';
      if(isOpen){
        advPanel.style.display = 'none';
        advPanel.setAttribute('aria-hidden','true');
        toggleAdvBtn.setAttribute('aria-expanded','false');
        toggleAdvBtn.textContent = '＋絞り込み';
      } else {
        advPanel.style.display = 'block';
        advPanel.setAttribute('aria-hidden','false');
        toggleAdvBtn.setAttribute('aria-expanded','true');
        toggleAdvBtn.textContent = '－絞り込み';
      }
    });
  }

  // 詳細ラジオの既定値を明示（AND を既定に）
  try{
    const tAnd = document.querySelector('input[name="type-mode"][value="AND"]'); if(tAnd) tAnd.checked = true;
    const mAnd = document.querySelector('input[name="move-mode"][value="AND"]'); if(mAnd) mAnd.checked = true;
  }catch(e){/* silent */}

  // メモトグルボタン: 初期はオフ（灰色）。オンならメモを検索対象に含める
  const memoToggleBtn = document.getElementById('memo-toggle');
  if(memoToggleBtn){
    memoToggleBtn.addEventListener('click', ()=>{
      const isOn = memoToggleBtn.classList.toggle('active');
      memoToggleBtn.setAttribute('aria-pressed', isOn ? 'true' : 'false');
      // toggle appearance
      if(isOn){ memoToggleBtn.classList.remove('btn','secondary'); memoToggleBtn.classList.add('btn'); }
      else { memoToggleBtn.classList.remove('btn'); memoToggleBtn.classList.add('btn','secondary'); }
      renderList();
    });
  }

  // prepare suggestion arrays (used instead of native datalist)
  function ensureDatalists(){
    try{
      window.SUGGEST = window.SUGGEST || {};
      window.SUGGEST.species = Object.keys(DATA.species || {});
      window.SUGGEST.abilities = Array.from(new Set((DATA.instances||[]).map(i=>i.ability).filter(Boolean))).sort();
      // 技の候補は MOVES_DATA（技データ）のみから作る。
      // 既存インスタンスの技欄にMOVES_DATAに無い技名が入っていても、候補には出さない。
      window.SUGGEST.moves = Object.keys((typeof MOVES_DATA !== 'undefined' ? MOVES_DATA : {})).sort();
      window.SUGGEST.types = typesOrder.slice();
    }catch(e){ console.warn('ensureDatalists failed', e); }
  }
  // 初回呼び出しは DATA.instances の読み込み完了後（initApp 内）で行う。
  // ※ ability/moves の候補一覧は instances 由来のため、読み込み前に呼んでも空になるだけ。

  // インスタンスがメガ扱いかどうかを判定（_form が現在メガのフォームを指しているか、道具名にメガ/ナイト等が含まれるか）
  function instHasMega(inst, sp){
    try{
      if(!inst) return false;
      if(inst._form){
        const e = DATA.species[inst._form];
        if(e && e.stage === 'メガ') return true;
      }
      const item = (inst.item||'').toString();
      if(!item) return false;
      return /メガ|ナイト|ストーン|stone|mega/i.test(item);
    }catch(e){ return false; }
  }

  // タイプ相性を計算する関数（攻撃タイプ vs 防御側のタイプ複数 + 特性）
  function calcTypeEffectiveness(attackType, defenderTypes, ability){
    if(!attackType || !defenderTypes || !defenderTypes.length) return 1;
    const chart = DATA.typeChart || {};
    const atkRow = chart[attackType] || {};
    let multiplier = 1;
    // 各防御タイプに対する倍率を掛け合わせる
    defenderTypes.forEach(defType => {
      const m = atkRow[defType];
      if(m !== undefined) multiplier *= m;
    });
    // 特性による補正
    if(ability && DATA.abilityTypeResistances && DATA.abilityTypeResistances[ability]){
      const abilityMod = DATA.abilityTypeResistances[ability][attackType];
      if(abilityMod !== undefined) multiplier = abilityMod;
    }
    return multiplier;
  }

  // build 4 type rows and 4 move rows templates
  function makeTypeRow(i){
    const row = document.createElement('div'); row.style.display='flex'; row.style.gap='6px'; row.style.alignItems='center';
    // clear button (×) to wipe this row's inputs
    const clearBtn = document.createElement('button'); clearBtn.type = 'button'; clearBtn.className = 'small'; clearBtn.textContent = '×'; clearBtn.title = 'クリア';
    row.appendChild(clearBtn);
    const txt = document.createElement('input'); txt.placeholder = 'タイプ'; txt.style.flex = '1'; txt.onfocus = function(){ this.select(); }; row.appendChild(txt);
    const sel = document.createElement('select'); sel.innerHTML = '<option value="match">一致</option><option value="exclude">除外</option><option value="4">4倍弱点</option><option value="2">2倍弱点</option><option value="1">等倍</option><option value="0.5">半減</option><option value="0.25">1/4</option><option value="0">無効</option>';
    row.appendChild(sel);
    const comparator = document.createElement('select'); comparator.innerHTML = '<option value="-">-</option><option value=">=">以上</option><option value="<=">以下</option>'; comparator.style.display = 'none'; row.appendChild(comparator);
    sel.addEventListener('change', ()=>{ if(['4','2','1','0.5','0.25','0'].includes(sel.value)) comparator.style.display='inline-block'; else comparator.style.display='none'; if(typeof renderList==='function') renderList(); });
    clearBtn.addEventListener('click', ()=>{ txt.value=''; sel.value='match'; comparator.value='-'; comparator.style.display='none'; if(typeof renderList==='function') renderList(); });
    // 直接入力やセレクト変更で再フィルタ
    txt.addEventListener('input', ()=>{ if(typeof renderList==='function') renderList(); });
    return row;
  }
  const trContainer = document.getElementById('type-rows'); if(trContainer){ for(let i=0;i<4;i++) trContainer.appendChild(makeTypeRow(i)); }
  // create 4 move inputs arranged 2 per row (grid with 2 columns)
  const mvContainer = document.getElementById('move-rows');
  if(mvContainer){
    mvContainer.style.display='grid';
    mvContainer.style.gridTemplateColumns='1fr 1fr';
    mvContainer.style.gap='6px';
    for(let i=0;i<4;i++){
      const cell = document.createElement('div');
      cell.style.display='flex'; cell.style.gap='6px'; cell.style.alignItems='center';
      const txt = document.createElement('input'); txt.placeholder='技'; txt.style.flex='1'; txt.onfocus = function(){ this.select(); };
      const clearBtn = document.createElement('button'); clearBtn.type='button'; clearBtn.className='small'; clearBtn.textContent='×'; clearBtn.title='クリア';
      clearBtn.addEventListener('click', ()=>{ txt.value=''; if(typeof renderList==='function') renderList(); });
      // typing into move input should re-filter
      txt.addEventListener('input', ()=>{ if(typeof renderList==='function') renderList(); });
      cell.appendChild(clearBtn);
      cell.appendChild(txt);
      mvContainer.appendChild(cell);
    }
  }

  // --- Autocomplete suggestion UI ---------------------------------
  // Attach suggestion dropdowns to inputs (adv-name, adv-ability, move inputs, modal編集欄など)
  // onSelect: 候補をクリックした際のコールバック（省略時は既存どおり検索リストを再描画する）
  function attachSuggestionsToInput(input, items, onSelect){
    if(!input || !items || !items.length) return;
    const handleSelect = (typeof onSelect === 'function') ? onSelect : (()=>{ if(typeof renderList === 'function') renderList(); });
    input.setAttribute('autocomplete','off');
    let box = document.createElement('div'); box.className = 'suggestions'; box.style.display = 'none'; document.body.appendChild(box);
    let selIndex = -1;
    function updatePosition(){
      try{
        const r = input.getBoundingClientRect();
        box.style.minWidth = Math.max(120, input.offsetWidth) + 'px';
        box.style.left = (r.left + window.scrollX) + 'px';
        box.style.top = (r.bottom + window.scrollY) + 'px';
      }catch(e){/* ignore */}
    }
    function hide(){ box.style.display = 'none'; selIndex = -1; }
    function show(list){
      box.innerHTML = '';
      if(!list || !list.length){ hide(); return; }
      const slice = list.slice(0, 50);
      slice.forEach((it, i)=>{
        const d = document.createElement('div'); d.className = 'suggestion-item'; d.textContent = it;
        d.addEventListener('mousedown', (ev)=>{ ev.preventDefault(); input.value = it; hide(); handleSelect(it); });
        box.appendChild(d);
      });
      updatePosition(); box.style.display = 'block'; selIndex = -1;
    }
    function updateActive(nodes){ nodes.forEach(n=>n.classList.remove('active')); if(selIndex>=0 && nodes[selIndex]) nodes[selIndex].classList.add('active'); }

    input.addEventListener('input', ()=>{
      const q = normalizeForSearch(input.value).toLowerCase().trim();
      if(!q){ hide(); return; }
      // 前方一致を優先し、続けて部分一致を並べる（ダメージ計算機と同じ並び順）
      const starts = [];
      const contains = [];
      items.forEach(it=>{
        const norm = normalizeForSearch(it).toLowerCase();
        if(norm.startsWith(q)) starts.push(it);
        else if(norm.includes(q)) contains.push(it);
      });
      show(starts.concat(contains));
    });
    input.addEventListener('keydown', (ev)=>{
      if(box.style.display === 'none') return;
      const nodes = box.querySelectorAll('.suggestion-item');
      if(ev.key === 'ArrowDown'){ ev.preventDefault(); selIndex = Math.min(selIndex+1, nodes.length-1); updateActive(nodes); }
      else if(ev.key === 'ArrowUp'){ ev.preventDefault(); selIndex = Math.max(selIndex-1, 0); updateActive(nodes); }
      else if(ev.key === 'Enter'){ if(selIndex>=0 && nodes[selIndex]){ ev.preventDefault(); nodes[selIndex].dispatchEvent(new MouseEvent('mousedown')); } hide(); }
      else if(ev.key === 'Escape'){ hide(); }
    });
    input.addEventListener('blur', ()=>{ setTimeout(hide, 150); });
    input.addEventListener('focus', ()=>{
      const q = normalizeForSearch(input.value).toLowerCase().trim();
      if(!q) return;
      const starts = [];
      const contains = [];
      items.forEach(it=>{
        const norm = normalizeForSearch(it).toLowerCase();
        if(norm.startsWith(q)) starts.push(it);
        else if(norm.includes(q)) contains.push(it);
      });
      show(starts.concat(contains));
    });
    window.addEventListener('resize', ()=>{ if(box.style.display !== 'none') updatePosition(); });
  }

  // prepare lists for suggestions
  function initSuggestionLists(){
    try{
      const speciesList = (window.SUGGEST && window.SUGGEST.species) ? window.SUGGEST.species : Object.keys(DATA.species || {});
      const abilitiesList = (window.SUGGEST && window.SUGGEST.abilities) ? window.SUGGEST.abilities : Array.from(new Set((DATA.instances||[]).map(i=>i.ability).filter(Boolean))).sort();
      const movesList = (window.SUGGEST && window.SUGGEST.moves) ? window.SUGGEST.moves : Object.keys((typeof MOVES_DATA !== 'undefined' ? MOVES_DATA : {})).sort();
      const typesList = (window.SUGGEST && window.SUGGEST.types) ? window.SUGGEST.types : typesOrder.slice();
      // attach to the two main advanced inputs
      const advName = document.getElementById('adv-name'); if(advName) attachSuggestionsToInput(advName, speciesList);
      const advAbility = document.getElementById('adv-ability'); if(advAbility) attachSuggestionsToInput(advAbility, abilitiesList);
      // attach to any move inputs (current move-rows inputs)
      document.querySelectorAll('#move-rows input').forEach(inp=> attachSuggestionsToInput(inp, movesList));
      // attach to type inputs
      document.querySelectorAll('#type-rows input').forEach(inp=> attachSuggestionsToInput(inp, typesList));
    }catch(e){ console.warn('initSuggestionLists failed', e); }
  }
  // 初回呼び出しは DATA.instances の読み込み完了後（initApp 内）で行う。


  function renderList(){
    listEl.innerHTML='';
    const q = qEl ? normalizeForSearch(qEl.value).toLowerCase().trim() : '';
    const filterType = filterTypeEl ? filterTypeEl.value : '';
    // build sortKey from adv-sort-field + adv-sort-dir
    let sortKey = 'dex_asc';
    try{
      const dir = (advSortDirBtn && advSortDirBtn.dataset && advSortDirBtn.dataset.dir === 'asc') ? 'asc' : 'desc';
      if(advSortFieldEl){
        const f = advSortFieldEl.value || 'dex';
        if(f === 'dex') sortKey = `dex_${dir}`;
        else if(f === 'AorC') sortKey = `AorC_${dir}`;
        else if(f === 'S') sortKey = `spe_${dir}`;
        else if(f === 'A') sortKey = `atk_${dir}`;
        else if(f === 'C') sortKey = `spa_${dir}`;
        else sortKey = `${f}_${dir}`;
      }
    }catch(e){ sortKey = 'dex_asc'; }

    let items = DATA.instances.slice();

    // フィルタ: メイン検索 + 詳細検索パネルの条件を適用
    items = items.filter(inst=>{
      const sp = getSpecies(inst.species);
      if(!sp) return false;

      // basic type select (legacy) still supported
      if(filterType && !sp.types.includes(filterType)) return false;

      // read advanced inputs
      const advName = (document.getElementById('adv-name') || {}).value || '';
      const advAbility = (document.getElementById('adv-ability') || {}).value || '';
      const advMemo = (document.getElementById('adv-memo') || {}).value || '';
      const advMega = (document.getElementById('adv-mega') || {}).value || '-';
      const typeMode = (document.querySelector('input[name="type-mode"]:checked') || {}).value || 'AND';
      const moveMode = (document.querySelector('input[name="move-mode"]:checked') || {}).value || 'AND';

      // categories
      const catNormal = !!document.getElementById('cat-normal') && document.getElementById('cat-normal').checked;
      const catUb = !!document.getElementById('cat-ub') && document.getElementById('cat-ub').checked;
      const catLegend = !!document.getElementById('cat-legend') && document.getElementById('cat-legend').checked;
      const catMyth = !!document.getElementById('cat-myth') && document.getElementById('cat-myth').checked;
      const catRaised = !!document.getElementById('cat-raised') && document.getElementById('cat-raised').checked;
      const catUnraised = !!document.getElementById('cat-unraised') && document.getElementById('cat-unraised').checked;

      // category kind matching: build allowed kinds set if any checked
      const allowedKinds = new Set();
      if(catNormal) allowedKinds.add('一般');
      if(catUb) allowedKinds.add('準伝');
      if(catLegend) allowedKinds.add('伝説');
      if(catMyth) allowedKinds.add('幻');
      if(allowedKinds.size > 0){
        const k = sp.kind || '';
        if(!Array.from(allowedKinds).some(a=> (k||'').indexOf(a) !== -1)) return false;
      }

      // raised filter: use explicit inst.raised (0=未育成,1=育成済み)
      if(typeof inst.raised === 'undefined') inst.raised = 0;
      // if exactly one of the two checkboxes is checked, filter accordingly
      if((catRaised && !catUnraised) && inst.raised !== 1) return false;
      if((catUnraised && !catRaised) && inst.raised !== 0) return false;

      // adv mega filter: インスタンス単位で判定する（_form が指すフォームがメガか、または道具名から判定）
      if(advMega === 'only'){
        if(!instHasMega(inst, sp)) return false;
      } else if(advMega === 'exclude'){
        if(instHasMega(inst, sp)) return false;
      }

      // adv name / ability / memo
      const normNameQ = normalizeForSearch((advName||'')).toLowerCase().trim();
      if(normNameQ){ if(!normalizeForSearch(inst.species||'').toLowerCase().includes(normNameQ)) return false; }
      const normAbilityQ = normalizeForSearch((advAbility||'')).toLowerCase().trim();
      if(normAbilityQ){
        // メガシンカ状態の特性も検索対象に含める
        const abilityAdvState = getAdvFilterFormState();
        const abilityItemGroup = computeItemGroup(inst);
        const abilityIsMega = abilityAdvState.isMega && hasMegaStone(inst);
        const abilityResolvedName = pickFormName(inst.species, {isMega: abilityIsMega, itemGroup: abilityItemGroup, formChoice: abilityAdvState.form});
        const abilityResolvedEntry = DATA.species[abilityResolvedName];
        let searchAbility = inst.ability || '';
        if(abilityResolvedEntry && abilityResolvedEntry.stage === 'メガ' && abilityResolvedEntry.abilities && abilityResolvedEntry.abilities[0]){
          searchAbility = abilityResolvedEntry.abilities[0];
        }
        if(!normalizeForSearch(searchAbility).toLowerCase().includes(normAbilityQ)) return false;
      }
      const normMemoQ = normalizeForSearch((advMemo||'')).toLowerCase().trim();
      if(normMemoQ){ if(!normalizeForSearch(inst.memo||'').toLowerCase().includes(normMemoQ)) return false; }

      // type rows
      const typeRows = Array.from(document.querySelectorAll('#type-rows > div')).map(row=>{
        const txt = (row.querySelector('input')||{}).value || '';
        const selects = row.querySelectorAll('select');
        const sel = (selects[0]||{}).value || 'match';
        const comparator = (selects[1]||{}).value || '-';
        return {txt: txt.trim(), sel, comparator};
      }).filter(r=>r.txt);
      if(typeRows.length>0){
        // メガシンカ/フォルム状態のタイプと特性を取得
        const filterAdvState = getAdvFilterFormState();
        const filterItemGroup = computeItemGroup(inst);
        const filterIsMega = filterAdvState.isMega && hasMegaStone(inst);
        const filterResolvedName = pickFormName(inst.species, {isMega: filterIsMega, itemGroup: filterItemGroup, formChoice: filterAdvState.form});
        const filterResolvedEntry = DATA.species[filterResolvedName] || sp;
        let searchTypes = filterResolvedEntry.types || sp?.types || [];
        let searchAbility = inst.ability || '';
        if(filterResolvedEntry && filterResolvedEntry.stage === 'メガ' && filterResolvedEntry.abilities && filterResolvedEntry.abilities[0]){
          searchAbility = filterResolvedEntry.abilities[0];
        }
        
        const typeChecks = typeRows.map(r=>{
          const tnorm = normalizeForSearch(r.txt).toLowerCase();
          // 一致・除外の場合は従来通り
          if(r.sel === 'match'){
            return searchTypes.some(tt=> normalizeForSearch(tt).toLowerCase() === tnorm || normalizeForSearch(tt).toLowerCase().includes(tnorm));
          }
          if(r.sel === 'exclude'){
            return !searchTypes.some(tt=> normalizeForSearch(tt).toLowerCase() === tnorm || normalizeForSearch(tt).toLowerCase().includes(tnorm));
          }
          // 相性計算（4倍, 2倍, 等倍, 半減, 1/4, 無効）
          // 攻撃タイプを検索（入力値から推測）
          const attackType = typesOrder.find(t => normalizeForSearch(t).toLowerCase().includes(tnorm) || normalizeForSearch(t).toLowerCase() === tnorm);
          if(!attackType) return false; // タイプが見つからない場合はマッチしない
          const effectiveness = calcTypeEffectiveness(attackType, searchTypes, searchAbility);
          const targetValue = parseFloat(r.sel);
          if(isNaN(targetValue)) return false;
          // 比較演算子による判定
          if(r.comparator === '>='){ return effectiveness >= targetValue; }
          else if(r.comparator === '<='){ return effectiveness <= targetValue; }
          else { return effectiveness === targetValue; } // 比較子なし（-）は完全一致
        });
        if(typeMode === 'AND'){ if(!typeChecks.every(Boolean)) return false; }
        else { if(!typeChecks.some(Boolean)) return false; }
      }

      // move rows
      const moveRows = Array.from(document.querySelectorAll('#move-rows input')).map(i=> (i.value||'').trim()).filter(Boolean);
      if(moveRows.length>0){
        const moveChecks = moveRows.map(mv=>{
          const qmv = normalizeForSearch(mv).toLowerCase();
          return (inst.moves||[]).some(mm=> normalizeForSearch(mm).toLowerCase().includes(qmv));
        });
        if(moveMode === 'AND'){ if(!moveChecks.every(Boolean)) return false; }
        else { if(!moveChecks.some(Boolean)) return false; }
      }

      // main q (global text search)
      if(q){
        const includeMemo = (memoToggleBtn && memoToggleBtn.classList.contains('active'));
        // メガシンカ/フォルム状態のタイプと特性を取得
        const globalAdvState = getAdvFilterFormState();
        const globalItemGroup = computeItemGroup(inst);
        const globalIsMega = globalAdvState.isMega && hasMegaStone(inst);
        const globalResolvedName = pickFormName(inst.species, {isMega: globalIsMega, itemGroup: globalItemGroup, formChoice: globalAdvState.form});
        const globalResolvedEntry = DATA.species[globalResolvedName] || sp;
        let globalSearchTypes = globalResolvedEntry.types || sp?.types || [];
        let globalSearchAbility = inst.ability || '';
        if(globalResolvedEntry && globalResolvedEntry.stage === 'メガ' && globalResolvedEntry.abilities && globalResolvedEntry.abilities[0]){
          globalSearchAbility = globalResolvedEntry.abilities[0];
        }
        
        const textParts = [inst.nickname||'', inst.species||'', inst.item||'', globalSearchAbility, (inst.moves||[]).join(' '), inst.tags||''];
        if(includeMemo) textParts.push(inst.memo||'');
        textParts.push(globalSearchTypes.join(' '));
        const rawText = textParts.join(' ');
        const normText = normalizeForSearch(rawText).toLowerCase();
        if(!normText.includes(q)) return false;
      }

      return true;
    });

    // ソート
    items.sort((a,b)=>{
      if(sortKey.startsWith('dex')){
        const sa = getSpecies(a.species);
        const sb = getSpecies(b.species);
        const da = sa ? sa.dexNo : 0;
        const db = sb ? sb.dexNo : 0;
        return sortKey.endsWith('asc') ? da - db : db - da;
      }
      if(sortKey.startsWith('name')){
        return sortKey.endsWith('asc') ? a.species.localeCompare(b.species,'ja') : b.species.localeCompare(a.species,'ja');
      }
      // AorC: AかCのうち高い方を比較する
      if(sortKey.startsWith('AorC')){
        const vaA = renderComputedStats(a);
        const vbA = renderComputedStats(b);
        const ma = Math.max(vaA.A || 0, vaA.C || 0);
        const mb = Math.max(vbA.A || 0, vbA.C || 0);
        // detect asc/desc suffix
        if(sortKey.endsWith('_asc')) return ma - mb;
        return mb - ma;
      }
      // stat desc for common ones
      const map = {hp:'H', atk:'A', spa:'C', spe:'S'};
      for(const k in map){
        if(sortKey.startsWith(k)){
          const key = map[k];
          const va = renderComputedStats(a)[key];
          const vb = renderComputedStats(b)[key];
          if(sortKey.endsWith('_asc')) return va - vb;
          return vb - va;
          return vb - va; // desc by default in options
        }
      }
      return 0;
    });

    // レンダリング各カード
    items.forEach(inst=>{
      const sp = getSpecies(inst.species);
      const card = document.createElement('div'); card.className='card'; card.dataset.instanceId = String(inst.id);
      const top = document.createElement('div'); top.className='row';
      const left = document.createElement('div');
      // 新しいカード構成: 左7 右2
      const inner = document.createElement('div'); inner.className = 'card-inner';
      const leftCol = document.createElement('div'); leftCol.className = 'card-left';
      const rightCol = document.createElement('div'); rightCol.className = 'card-right';

  // types (縦並び) と 種族名を横並びに配置（タイプの右にポケモン名）
  // 詳細検索のメガボタン状態を反映してタイプを決定
  const advStateForTypes = getAdvFilterFormState();
  const itemGroupForCard = computeItemGroup(inst);
  const isMegaForCard = advStateForTypes.isMega && hasMegaStone(inst);
  const resolvedFormNameForCard = pickFormName(inst.species, {isMega: isMegaForCard, itemGroup: itemGroupForCard, formChoice: advStateForTypes.form});
  const resolvedEntryForCard = DATA.species[resolvedFormNameForCard] || sp;
  let displayTypes = resolvedEntryForCard.types || sp?.types || [];
  const typesStack = document.createElement('div'); typesStack.className = 'types-stack';
  displayTypes.forEach(t=>{ const d = document.createElement('div'); d.textContent = t; applyTypeColorStyle(d, t); typesStack.appendChild(d); });
  // 固定幅のタイプ領域の右に名前領域を置く（名前位置がタイプの長さで動かない）
  const nameEl = document.createElement('div'); nameEl.className = 'card-name'; nameEl.style.fontSize='16px'; nameEl.textContent = inst.species;
  const headerRow = document.createElement('div'); headerRow.style.display = 'flex'; headerRow.style.alignItems = 'center'; headerRow.style.gap = '8px';
  headerRow.appendChild(typesStack); headerRow.appendChild(nameEl);
  leftCol.appendChild(headerRow);

      // 技と特性/道具の固定配置
      const movesArea = document.createElement('div'); movesArea.className = 'moves-area';
      const leftMovesCol = document.createElement('div'); leftMovesCol.className = 'moves-col';
      const rightMovesCol = document.createElement('div'); rightMovesCol.className = 'moves-col';

      // 特性は左列の上に表示（メガシンカ状態を反映）
      let displayAbility = inst.ability || '';
      if(resolvedEntryForCard && resolvedEntryForCard.stage === 'メガ' && resolvedEntryForCard.abilities && resolvedEntryForCard.abilities[0]){
        displayAbility = resolvedEntryForCard.abilities[0];
      }
      const abilityEl = document.createElement('div'); abilityEl.className='ability-item'; abilityEl.textContent = displayAbility;
      leftMovesCol.appendChild(abilityEl);

      // 道具は右列の上に表示
      const itemEl = document.createElement('div'); itemEl.className='ability-item'; itemEl.textContent = inst.item || '';
      rightMovesCol.appendChild(itemEl);

      // 技を対応する列に配置 (1->left,2->right,3->left,4->right)
      for(let i=0;i<4;i++){
        const mv = inst.moves[i] || '';
        const mvEl = document.createElement('div'); mvEl.className='move'; mvEl.textContent = mv;
        applyMoveColorStyle(mvEl, mv);
        if(i%2===0) leftMovesCol.appendChild(mvEl); else rightMovesCol.appendChild(mvEl);
      }

      movesArea.appendChild(leftMovesCol); movesArea.appendChild(rightMovesCol);
      leftCol.appendChild(movesArea);

      // right カラム: 種族値 / 努力値 / 実数値 表
      const computed = renderComputedStats(inst);
      const table = document.createElement('table'); table.className='stats-table';
      // header
      const thead = document.createElement('thead'); thead.innerHTML = '<tr><td>種</td><td>努</td><td>実</td></tr>';
      table.appendChild(thead);
      const tbodyStats = document.createElement('tbody');
      // base selection: 詳細検索の盾/剣・メガボタン状態を反映（resolvedEntryForCard を利用）
      let baseSrc = resolvedEntryForCard.baseStats || sp?.baseStats || {};
      // 各能力行を追加 (H,A,B,C,D,S)
      ['H','A','B','C','D','S'].forEach(k=>{
        const tr = document.createElement('tr');
        const b = baseSrc[statKeyMap[k]] || 0;
        const ev = (inst.ev && inst.ev[k]) || 0;
        const val = computed[k];
        // 実数値セルに性格に応じたクラスを付与（stat-value up/down/none）
        tr.innerHTML = `<td style="text-align:right">${b}</td><td style="text-align:right">${ev}</td><td style="text-align:right" class="stat-value ${getNatureMarkClass(inst.nature,k)}">${val}</td>`;
        tbodyStats.appendChild(tr);
      });
      table.appendChild(tbodyStats);
      rightCol.appendChild(table);

      inner.appendChild(leftCol); inner.appendChild(rightCol);

      // スワイプ（右から左）すると削除ボタンが現れるようにするためのラッパー構造
      const swipeContent = document.createElement('div'); swipeContent.className = 'card-swipe-content';
      swipeContent.appendChild(inner);

      const deleteBtn = document.createElement('button');
      deleteBtn.type = 'button';
      deleteBtn.className = 'card-delete-btn';
      deleteBtn.textContent = '削除';
      deleteBtn.addEventListener('click', (ev)=>{
        ev.stopPropagation();
        const displayName = inst._form || inst.species;
        const confirmed = window.confirm(`${displayName}を削除しますか？`);
        if(confirmed){
          deleteInstanceById(inst.id);
        } else {
          closeSwipe(swipeContent);
        }
      });

      card.appendChild(deleteBtn);
      card.appendChild(swipeContent);
      attachCardSwipeHandlers(swipeContent, inst);

      listEl.appendChild(card);
    });
  }

  // ============================================================
  // カードのスワイプ削除（右から左にドラッグすると削除ボタンが現れる）
  // ============================================================
  const SWIPE_REVEAL_WIDTH = 76; // 削除ボタンの表示幅(px)。CSSの.card-delete-btnと合わせる
  let openSwipeContent = null; // 現在スワイプで開いている（削除ボタンが見えている）カードのcontent要素

  function closeSwipe(contentEl){
    if(!contentEl) return;
    contentEl.style.transform = 'translateX(0px)';
    contentEl.dataset.swipeOpen = '0';
    if(openSwipeContent === contentEl) openSwipeContent = null;
  }

  function attachCardSwipeHandlers(contentEl, inst){
    let dragging = false;
    let moved = false;
    let startX = 0;
    let baseX = 0; // ドラッグ開始時点で既に開いていた場合のオフセット

    function clamp(x){ return Math.max(-SWIPE_REVEAL_WIDTH, Math.min(0, x)); }
    function isOpen(){ return contentEl.dataset.swipeOpen === '1'; }

    contentEl.addEventListener('pointerdown', (ev)=>{
      dragging = true; moved = false;
      startX = ev.clientX;
      baseX = isOpen() ? -SWIPE_REVEAL_WIDTH : 0;
      contentEl.style.transition = 'none';
      try{ contentEl.setPointerCapture(ev.pointerId); }catch(e){ /* 一部環境では未対応 */ }
    });
    contentEl.addEventListener('pointermove', (ev)=>{
      if(!dragging) return;
      const dx = ev.clientX - startX;
      if(Math.abs(dx) > 6) moved = true;
      const next = clamp(baseX + dx);
      contentEl.style.transform = `translateX(${next}px)`;
    });
    function endDrag(ev){
      if(!dragging) return;
      dragging = false;
      contentEl.style.transition = '';
      const dx = (ev.clientX || 0) - startX;
      const finalX = clamp(baseX + dx);
      if(finalX <= -SWIPE_REVEAL_WIDTH / 2){
        contentEl.style.transform = `translateX(${-SWIPE_REVEAL_WIDTH}px)`;
        contentEl.dataset.swipeOpen = '1';
        if(openSwipeContent && openSwipeContent !== contentEl) closeSwipe(openSwipeContent);
        openSwipeContent = contentEl;
      } else {
        closeSwipe(contentEl);
      }
    }
    contentEl.addEventListener('pointerup', endDrag);
    contentEl.addEventListener('pointercancel', endDrag);

    // クリックで詳細モーダル（ただし、ドラッグ操作の直後や、既に開いている状態でのタップは
    // モーダルを開かず「閉じる」動作だけにする）
    contentEl.addEventListener('click', ()=>{
      if(moved){ moved = false; return; }
      if(isOpen()){ closeSwipe(contentEl); return; }
      openModal(inst);
    });
  }

  // 個体データを一覧・IndexedDBの両方から削除する
  function deleteInstanceById(id){
    const idx = DATA.instances.findIndex(x=>x.id===id);
    if(idx>=0) DATA.instances.splice(idx,1);
    if(typeof Gen6DB !== 'undefined'){
      Gen6DB.deleteInstance(id).catch((err)=>{ console.error('個体データの削除に失敗しました', err); });
    }
    openSwipeContent = null;
    renderList();
  }

  // 実数値を返す（キャッシュしない簡易版）
  // 詳細検索エリアの盾/剣・メガボタン状態を取得するヘルパー
  function getAdvFilterFormState(){
    // 盾/剣ボタン: 盾がアクティブなら 'shield'、剣がアクティブなら 'blade'
    const formBtns = document.querySelectorAll('#adv-form-buttons .btn');
    let formState = 'shield'; // 初期値は盾
    if(formBtns.length >= 2){
      if(formBtns[0].classList.contains('active')) formState = 'shield';
      else if(formBtns[1].classList.contains('active')) formState = 'blade';
    }
    // 通常/メガボタン（盾/剣と同じ2ボタン方式）: 2番目（メガ）がアクティブならtrue
    const megaBtns = document.querySelectorAll('#adv-mega-buttons .btn');
    let isMega = false;
    if(megaBtns.length >= 2){
      isMega = megaBtns[1].classList.contains('active');
    }
    return { form: formState, isMega };
  }

  // インスタンスがメガストーンを所持しているか判定
  function hasMegaStone(inst){
    if(!inst.item) return false;
    const item = inst.item.toLowerCase();
    // メガストーンの判定（「メガストーン」を含むか、特定の形式）
    return item.includes('メガストーン');
  }

  function renderComputedStats(inst){
    // フォーム解決の優先度：
    // 1. inst._form が指定されている場合（モーダル内編集）→ それを使用
    // 2. inst._form がない場合 → 詳細検索パネルのメガボタン/盾・剣ボタン状態を参照
    let resolvedName = inst.species;
    if(inst._form){
      resolvedName = inst._form;
    } else {
      const advState = getAdvFilterFormState();
      const itemGroup = computeItemGroup(inst);
      const isMega = advState.isMega && hasMegaStone(inst);
      resolvedName = pickFormName(inst.species, {isMega, itemGroup, formChoice: advState.form});
    }
    const sp = DATA.species[resolvedName] || DATA.species[inst.species];
    const baseStats = (sp && sp.baseStats) ? sp.baseStats : {hp:0,atk:0,def:0,spa:0,spd:0,spe:0};

    const level = inst.level || 50;
    const res = {};
    statsOrder.forEach(k=>{
      const b = baseStats[statKeyMap[k]]||0;
      const ivraw = inst.iv[k];
      const iv = (ivraw==='×'||ivraw==='x'||ivraw==='X') ? 31 : Number(ivraw||0);
      const ev = Number((inst.ev && inst.ev[k])||0);
      res[k] = calcStat(b, iv, ev, level, k, inst.nature);
    });
    return res;
  }

  function getNatureMarkClass(nature, statKey){
    // 元の DATA.natures を利用する方式に戻す
    const nd = DATA.natures[nature];
    if(!nd) return 'none';
    if(nd.up===statKey) return 'up';
    if(nd.down===statKey) return 'down';
    return 'none';
  }

  // ============================================================
  // 編集モード用: 努力値・個体値・実数値・性格の相互変換ロジック
  // （ダメージ計算機ファイルの同等処理を、このアプリのデータ構造に合わせて移植したもの）
  // ============================================================

  // baseStats のキー(hp/atk/...) <-> 種族値/実数値テーブルのキー(H/A/...) の逆引き
  const letterKeyMap = {hp:'H', atk:'A', def:'B', spa:'C', spd:'D', spe:'S'};

  // 「無補正」ボタンで設定する代表の性格（がんばりや/すなお/てれや/きまぐれ/まじめ は全て無補正で同義）
  const NEUTRAL_NATURE_NAME = 'まじめ';

  // 性格名から上昇/下降ステータス（H/A/B/C/D/S、無補正は null）を取り出す
  function getNatureUpDown(natureName){
    const nd = DATA.natures[natureName];
    if(!nd) return { up: null, down: null };
    return {
      up: (nd.up === 'null' || !nd.up) ? null : nd.up,
      down: (nd.down === 'null' || !nd.down) ? null : nd.down,
    };
  }

  // 上昇/下降ステータス（H/A/B/C/D/S）の組み合わせに一致する性格名を探す
  function findNatureName(upLetter, downLetter){
    const names = Object.keys(DATA.natures);
    for(const name of names){
      const nd = getNatureUpDown(name);
      if(nd.up === upLetter && nd.down === downLetter) return name;
    }
    return null;
  }

  // 指定EVでの実数値を計算する（種族値・個体値・レベル・性格は inst の現在値を使用）
  function computeRealForStat(inst, statLetter, evOverride){
    const resolvedName = inst._form || inst.species;
    const sp = DATA.species[resolvedName] || DATA.species[inst.species];
    if(!sp || !sp.baseStats) return null;
    const base = sp.baseStats[statKeyMap[statLetter]] || 0;
    const level = inst.level || 50;
    const ivRaw = inst.iv ? inst.iv[statLetter] : undefined;
    const iv = (typeof ivRaw === 'number' && !isNaN(ivRaw)) ? ivRaw : 31;
    const ev = (typeof evOverride === 'number') ? evOverride : Number((inst.ev && inst.ev[statLetter]) || 0);
    return calcStat(base, iv, ev, level, statLetter, inst.nature);
  }

  // 実数値 >= targetReal を満たす最小のEV(0〜252)を二分探索で求める。範囲外なら null。
  function findMinEvForReal(inst, statLetter, targetReal){
    const minReal = computeRealForStat(inst, statLetter, 0);
    const maxReal = computeRealForStat(inst, statLetter, 252);
    if(minReal === null || maxReal === null) return null;
    if(targetReal < minReal || targetReal > maxReal) return null;
    let lo = 0, hi = 252, ans = null;
    while(lo <= hi){
      const mid = Math.floor((lo + hi) / 2);
      const r = computeRealForStat(inst, statLetter, mid);
      if(r >= targetReal){ ans = mid; hi = mid - 1; } else { lo = mid + 1; }
    }
    return ans;
  }

  // 性格の上昇補正(+10%)により、value+1 は実現できるが value（11n-1）はどのEVでも実現できない、
  // という「到達不能値」かどうかを判定する
  function isUnattainableByNatureUp(inst, statLetter, value){
    const nd = getNatureUpDown(inst.nature);
    if(nd.up !== statLetter) return false;
    if((value + 1) % 11 !== 0) return false;
    return findMinEvForReal(inst, statLetter, value + 1) !== null;
  }

  // EV を直接編集した場合の実数値再計算（表示のミスマッチは解消される）
  function applyEvDirectEdit(inst, statLetter, newEv){
    const ev = Math.max(0, Math.min(252, Math.round(Number(newEv) || 0)));
    if(!inst.ev) inst.ev = {};
    inst.ev[statLetter] = ev;
    if(inst._evRealMismatch) delete inst._evRealMismatch[statLetter];
  }

  // 個体値を直接編集した場合（実数値はEVから素直に再計算されるだけなのでミスマッチは解消）
  function applyIvDirectEdit(inst, statLetter, newIv){
    const iv = Math.max(0, Math.min(31, Math.round(Number(newIv))));
    if(!inst.iv) inst.iv = {};
    inst.iv[statLetter] = isNaN(iv) ? 31 : iv;
    if(inst._evRealMismatch) delete inst._evRealMismatch[statLetter];
  }

  // 実数値を編集した場合、対応する最小のEVを逆算して設定する。
  // 性格上昇補正で「11n-1」の値がどのEVでも実現できない場合は、
  // 努力値は value+1 を満たす最小EVにしつつ、表示だけ入力値のまま赤色にする。
  function applyRealValueEdit(inst, statLetter, targetReal){
    if(!inst.ev) inst.ev = {};
    if(!inst._evRealMismatch) inst._evRealMismatch = {};
    if(isNaN(targetReal)) return;

    if(isUnattainableByNatureUp(inst, statLetter, targetReal)){
      const newEv = findMinEvForReal(inst, statLetter, targetReal + 1);
      if(newEv !== null){
        inst.ev[statLetter] = newEv;
        inst._evRealMismatch[statLetter] = targetReal; // 表示だけ入力値のまま（赤色表示用）
      }
      return;
    }

    const newEv = findMinEvForReal(inst, statLetter, targetReal);
    if(newEv !== null){
      inst.ev[statLetter] = newEv;
      delete inst._evRealMismatch[statLetter];
    }
    // 範囲外（実現不可能な実数値）の場合は何もしない＝直前の値のまま次回描画される
  }

  // 努力値の 0 / 252 切り替え
  function toggleEvZeroMax(inst, statLetter){
    const current = (inst.ev && inst.ev[statLetter]) || 0;
    applyEvDirectEdit(inst, statLetter, current === 252 ? 0 : 252);
  }

  // 性格の上昇/下降ステータスを、DCと同じ「+/-ボタン」ロジックで切り替える
  // type: 'plus'（そのステータスを上昇補正にする） | 'minus'（そのステータスを下降補正にする）
  function toggleNatureStat(inst, statLetter, type){
    const nd = getNatureUpDown(inst.nature);
    let newUp = nd.up;
    let newDown = nd.down;

    if(type === 'minus'){
      if(nd.down === statLetter){
        return; // 既に同じ-補正 → 何もしない
      } else if(nd.up === statLetter){
        newUp = nd.down; newDown = statLetter; // 逆転
      } else {
        newDown = statLetter;
        if(nd.up){
          newUp = nd.up;
        } else if(statLetter === 'S'){
          // 素早さの-を押した場合、攻撃/特攻の高い方を+にする
          const sp = DATA.species[inst._form || inst.species];
          newUp = (sp && sp.baseStats && sp.baseStats.atk >= sp.baseStats.spa) ? 'A' : 'C';
        } else {
          newUp = 'S';
        }
      }
    } else {
      if(nd.up === statLetter){
        return; // 既に同じ+補正 → 何もしない
      } else if(nd.down === statLetter){
        newDown = nd.up; newUp = statLetter; // 逆転
      } else {
        newUp = statLetter;
        if(nd.down){
          newDown = nd.down;
        } else if(statLetter === 'A'){
          newDown = 'C';
        } else if(statLetter === 'C'){
          newDown = 'A';
        } else {
          const sp = DATA.species[inst._form || inst.species];
          newDown = (sp && sp.baseStats && sp.baseStats.atk <= sp.baseStats.spa) ? 'A' : 'C';
        }
      }
    }

    inst.nature = (newUp && newDown) ? (findNatureName(newUp, newDown) || inst.nature) : NEUTRAL_NATURE_NAME;
    inst._evRealMismatch = {}; // 性格が変わると全ステータスの実数値が変わるためクリア
  }

  // 無補正ボタン
  function setNeutralNature(inst){
    inst.nature = NEUTRAL_NATURE_NAME;
    inst._evRealMismatch = {};
  }

  // 実数値セルの見た目（性格による色付け・到達不能値の赤色強調）をまとめて適用する
  function applyRealCellClasses(td, inst, statLetter, isMismatch){
    td.className = 'stat-value ' + getNatureMarkClass(inst.nature, statLetter);
    if(isMismatch) td.classList.add('real-mismatch');
  }

  // ポケモン名の変更を確定する（種族図鑑に存在する名前のみ受け付ける）。
  // 変更が確定した場合は特性を「特性1」（abilities[0]）にリセットする。
  function commitSpeciesChange(inst, rawName){
    const name = (rawName || '').trim();
    if(!name || !DATA.species[name] || name === inst.species) return false;
    inst.species = name;
    inst._form = null;
    const sp = DATA.species[name];
    inst.ability = (sp.abilities && sp.abilities[0]) ? sp.abilities[0] : '';
    inst._evRealMismatch = {};
    return true;
  }

  // 既存個体の編集内容をIndexedDBへ書き込み、一覧側のメモリ上データにも反映する。
  // _form（フォーム/メガの一時プレビュー）と _evRealMismatch（実数値の一時表示用マーカー）は
  // あくまでモーダル内の一時的な状態なので、DBには保存しない。
  // 「編集完了」ボタンが押されたとき（finishEditing）にのみ呼び出す。
  function persistInstanceEdit(inst){
    if(inst == null || typeof inst.id === 'undefined' || inst.id === null){
      return Promise.reject(new Error('保存対象のidがありません'));
    }
    const src = DATA.instances.find(x=>x.id===inst.id);
    if(!src) return Promise.reject(new Error('保存対象の個体が見つかりません'));
    const persistable = stripTransientFields(inst);
    Object.assign(src, persistable);
    if(typeof src._form === 'undefined') src._form = null;
    if(typeof Gen6DB === 'undefined') return Promise.resolve();
    return Gen6DB.updateInstance(persistable);
  }

  // モーダルロジック
  const modal = document.getElementById('modal');
  const m_name = document.getElementById('m_name');
  const m_stats = document.getElementById('m_stats');
  const m_more = document.getElementById('m_more');
  const m_ability = document.getElementById('m_ability');
  const m_nature = document.getElementById('m_nature');
  const m_item_prop = document.getElementById('m_item_prop');
  const m_level = document.getElementById('m_level');
  const formButtons = document.getElementById('formButtons');
  let currentInst = null;
  // 編集モードのON/OFF（モーダルを開くたびにOFFへ戻す）
  let modalEditMode = false;
  // 編集モードに入った時点のスナップショット（×で閉じたときに戻す/変更の有無判定に使う）
  let modalEditSnapshot = null;
  // まだIndexedDBに保存されていない新規追加中の個体かどうか
  let modalIsNewInstance = false;
  // track original values so modal-only changes can be reverted on close
  let modalSourceId = null;
  let modalOriginalSnapshot = null;

  // _form/_evRealMismatch はあくまでモーダル内の一時的な表示状態なので、変更比較からは除外する
  function stripTransientFields(inst){
    const clean = Object.assign({}, inst);
    delete clean._form;
    delete clean._evRealMismatch;
    return clean;
  }

  // 編集モードに入ってから（＝modalEditSnapshotを取ってから）何か変更されたかどうかを判定する
  function hasUnsavedChanges(inst, snapshot){
    if(!snapshot) return false;
    return JSON.stringify(stripTransientFields(inst)) !== JSON.stringify(stripTransientFields(snapshot));
  }

  function closeModalAction(){
    // 編集モード中に未保存の変更がある場合は、破棄してよいか確認する
    if(modalEditMode && currentInst && hasUnsavedChanges(currentInst, modalEditSnapshot)){
      const confirmed = window.confirm('変更は破棄されますがよろしいですか');
      if(!confirmed) return; // 「いいえ」: モーダルは閉じず、編集モードを続行する
    }
    // revert any persisted changes to the source instance (defensive)
    if(modalSourceId && modalOriginalSnapshot){
      const src = DATA.instances.find(x=>x.id===modalSourceId);
      if(src){
        src._form = modalOriginalSnapshot._form;
      }
    }
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    // clear modal tracking
    modalSourceId = null;
    modalOriginalSnapshot = null;
    modalEditMode = false;
    modalEditSnapshot = null;
    modalIsNewInstance = false;
    currentInst = null;
    renderList();
  }
  document.getElementById('closeModal').addEventListener('click', closeModalAction);
  // clicking outside the panel (on backdrop) should also close the modal
  modal.addEventListener('click', (ev)=>{ if(ev.target === modal) closeModalAction(); });
  // インスタンスの実行時デフォルト値を設定する（in-memory）。
  // IDはIndexedDBの自動採番により常に一意な数値が入っているため、
  // 以前のようなID重複チェック・自動生成は不要になった。
  function normalizeInstances(){
    DATA.instances.forEach((inst)=>{
      // 現在選択中のフォーム名（未設定なら inst.species = 通常/盾フォームを表す。DBには保存しない一時値）
      if(typeof inst._form === 'undefined') inst._form = null;
      // raised flag: 0 = 未育成, 1 = 育成済み
      if(typeof inst.raised === 'undefined') inst.raised = 0;
      // 性別。"-"（不明/なし）"♂"「♀」のいずれかを想定するが、今のところ値のチェックはしない。
      // GUIでの編集は未対応（後日整備予定）。既存データに無ければ既定値"-"を補う。
      if(typeof inst.gender === 'undefined') inst.gender = '-';
    });
  }
  function openModal(inst, startInEditMode, isNewInstance){
    // capture source id and snapshot of persistent fields（新規未保存の個体は id を持たない）
    modalSourceId = (typeof inst.id !== 'undefined' && inst.id !== null) ? inst.id : null;
    const src = (modalSourceId !== null) ? DATA.instances.find(x=>x.id===modalSourceId) : null;
    modalOriginalSnapshot = src ? { _form: src._form } : { _form: null };
    // work on a deep copy for modal preview only
    currentInst = JSON.parse(JSON.stringify(inst)); // コピー
    modalEditMode = !!startInEditMode; // 通常はOFFから始まる。追加直後はONで開始する
    modalIsNewInstance = !!isNewInstance;
    // 編集モードで開始する場合は、この時点の内容をスナップショットとして保持する
    // （×で閉じる際の「未保存の変更があるか」判定と、破棄時に戻す先として使う）
    modalEditSnapshot = modalEditMode ? JSON.parse(JSON.stringify(currentInst)) : null;
    renderModal(currentInst);
    modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
    // position close button so it overlaps the panel corner (not clipped)
    positionCloseButton();
  }

  // 「編集完了」ボタンが押されたときの確定処理。
  // typedSpeciesName: 名前欄に現在入力中の値（blurが発火していなくても最新の入力値を検証するため明示的に受け取る）
  async function finishEditing(inst, typedSpeciesName){
    const typed = (typeof typedSpeciesName === 'string' ? typedSpeciesName : (inst.species || '')).trim();
    if(!typed || !DATA.species[typed]){
      alert('対応していないポケモン名が入力されています');
      return; // 保存せず、編集モードのまま
    }
    if(typed !== inst.species){
      commitSpeciesChange(inst, typed);
    }

    try{
      if(modalIsNewInstance){
        const persistable = stripTransientFields(inst);
        const newId = await Gen6DB.addInstance(persistable);
        inst.id = newId;
        modalSourceId = newId;
        const stored = Object.assign({}, persistable, { id: newId, _form: null });
        DATA.instances.push(stored);
        modalIsNewInstance = false;
      } else {
        await persistInstanceEdit(inst);
      }
    }catch(e){
      console.error('個体データの保存に失敗しました', e);
      alert('保存に失敗しました。もう一度お試しください。');
      return; // 保存できなかった場合は編集モードを維持する
    }

    modalEditMode = false;
    modalEditSnapshot = null;
    renderList();
    renderModal(inst);
  }

  function renderModal(inst){
    const sp = getSpecies(inst.species);
    // ヘッダ: フォルムに応じた表示名とタイプ、および編集切替ボタンを表示
    (function renderHeaderNameAndTypes(){
      const sp = getSpecies(inst.species);
      // 現在選択中のフォーム名（未設定なら inst.species そのもの＝通常/盾フォーム）
      const resolvedName = inst._form || inst.species;
      const resolvedEntry = DATA.species[resolvedName] || sp;
      // 種族データのキー名自体が表示名を兼ねる（例: メガリザードンX, ギルガルドブレード）
      const displayName = resolvedName;
      const typesToShow = (resolvedEntry && resolvedEntry.types) ? resolvedEntry.types.slice() : ((sp && sp.types) ? sp.types.slice() : []);
      const t1 = (typesToShow && typesToShow[0]) ? typesToShow[0] : '';
      const t2 = (typesToShow && typesToShow[1]) ? typesToShow[1] : '';

      m_name.innerHTML = '';
      const header = document.createElement('div'); header.className = 'm_header';
      const typesDiv = document.createElement('div'); typesDiv.className = 'm_types';
      const type1El = document.createElement('div'); type1El.className = 'm_type'; type1El.textContent = t1; applyTypeColorStyle(type1El, t1);
      const type2El = document.createElement('div'); type2El.className = 'm_type'; type2El.textContent = t2; applyTypeColorStyle(type2El, t2);
      typesDiv.appendChild(type1El); typesDiv.appendChild(type2El);
      header.appendChild(typesDiv);

      let nameInputRef = null; // 編集完了ボタン押下時に、確定前の最新の入力値を読むための参照
      if(modalEditMode){
        // ポケモン名：入力（候補リスト付き）。名前欄はここでは仮確定のみ行い、
        // 実際のDB保存は「編集完了」が押されたときにまとめて行う。
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.className = 'edit-text-input edit-name-input';
        nameInput.value = inst.species;
        nameInput.placeholder = 'ポケモン名を入力';
        nameInput.addEventListener('keydown', (ev)=>{ if(ev.key === 'Enter'){ ev.preventDefault(); nameInput.blur(); } });
        nameInput.addEventListener('blur', ()=>{
          commitSpeciesChange(inst, nameInput.value);
          renderModal(inst); // 確定できてもできなくても、実際の値に表示を揃えるため再描画する
        });
        header.appendChild(nameInput);
        const speciesList = (window.SUGGEST && window.SUGGEST.species) ? window.SUGGEST.species : Object.keys(DATA.species || {});
        attachSuggestionsToInput(nameInput, speciesList, (value)=>{
          commitSpeciesChange(inst, value);
          renderModal(inst);
        });
        nameInputRef = nameInput;
      } else {
        const nameText = document.createElement('div'); nameText.className = 'm_name_text'; nameText.textContent = displayName;
        header.appendChild(nameText);
      }

      const editBtn = document.createElement('button');
      editBtn.type = 'button';
      editBtn.className = 'edit-toggle-btn' + (modalEditMode ? ' active' : '');
      editBtn.textContent = modalEditMode ? '編集完了' : '編集';
      editBtn.addEventListener('click', ()=>{
        if(!modalEditMode){
          // 編集モードに入る：この時点の内容をスナップショットとして保持する
          modalEditMode = true;
          modalEditSnapshot = JSON.parse(JSON.stringify(inst));
          renderModal(inst);
          return;
        }
        // 編集完了：名前欄に入力中の値を検証したうえで保存する
        finishEditing(inst, nameInputRef ? nameInputRef.value : inst.species);
      });
      header.appendChild(editBtn);

      m_name.appendChild(header);
    })();

    // リセット＆準備
    m_stats.innerHTML = '';
    m_more.innerHTML = '';
    formButtons.innerHTML = '';
    if(m_ability) m_ability.innerHTML = '';
    if(m_nature) m_nature.innerHTML = '';
    if(m_item_prop) m_item_prop.innerHTML = '';
    if(m_level) m_level.innerHTML = '';

    // 特性 / 性格 / 道具 を縦に並べる（メガ時は能力を切り替え）
    // メガ時の特性取得
    const resolvedFormNameForAbility = inst._form || inst.species;
    const resolvedEntryForAbility = DATA.species[resolvedFormNameForAbility];
    let abilityToDisplay = inst.ability || '';
    if(resolvedEntryForAbility && resolvedEntryForAbility.stage === 'メガ' && resolvedEntryForAbility.abilities && resolvedEntryForAbility.abilities[0]){
      abilityToDisplay = resolvedEntryForAbility.abilities[0];
    }

    if(m_ability){
      if(modalEditMode){
        const label = document.createElement('span'); label.textContent = '特性: ';
        const select = document.createElement('select'); select.className = 'edit-select';
        // メガ形態を表示中はメガ側の特性候補から、それ以外は素のフォームの特性候補から選ぶ
        const abilitySourceEntry = (resolvedEntryForAbility && resolvedEntryForAbility.stage === 'メガ') ? resolvedEntryForAbility : DATA.species[inst.species];
        const abilityOptions = Array.from(new Set(((abilitySourceEntry && abilitySourceEntry.abilities) || []).filter(a=>a)));
        if(abilityOptions.length === 0) abilityOptions.push(inst.ability || '');
        abilityOptions.forEach(a=>{ const opt = document.createElement('option'); opt.value = a; opt.textContent = a; select.appendChild(opt); });
        if(!abilityOptions.includes(inst.ability)){ inst.ability = abilityOptions[0]; }
        select.value = inst.ability;
        select.addEventListener('change', ()=>{ inst.ability = select.value; renderModal(inst); });
        m_ability.appendChild(label);
        m_ability.appendChild(select);
      } else {
        m_ability.textContent = `特性: ${abilityToDisplay}`;
      }
    }

    if(m_nature){
      if(modalEditMode){
        const label = document.createElement('span'); label.textContent = '性格: ';
        const select = document.createElement('select'); select.className = 'edit-select';
        const natureNames = Object.keys(DATA.natures).sort((a,b)=>a.localeCompare(b,'ja'));
        natureNames.forEach(n=>{ const opt = document.createElement('option'); opt.value = n; opt.textContent = n; select.appendChild(opt); });
        select.value = inst.nature;
        select.addEventListener('change', ()=>{ inst.nature = select.value; inst._evRealMismatch = {}; renderModal(inst); });
        const neutralBtn = document.createElement('button');
        neutralBtn.type = 'button';
        neutralBtn.className = 'neutral-btn' + (getNatureUpDown(inst.nature).up === null ? ' active' : '');
        neutralBtn.textContent = '無補正';
        neutralBtn.addEventListener('click', ()=>{ setNeutralNature(inst); renderModal(inst); });
        m_nature.appendChild(label);
        m_nature.appendChild(select);
        m_nature.appendChild(neutralBtn);
      } else {
        m_nature.textContent = `性格: ${inst.nature || ''}`;
      }
    }

    if(m_item_prop){
      if(modalEditMode){
        const label = document.createElement('span'); label.textContent = '道具: ';
        const input = document.createElement('input');
        input.type = 'text'; input.className = 'edit-text-input edit-item-input';
        input.value = inst.item || '';
        input.addEventListener('input', ()=>{ inst.item = input.value; });
        // 道具はDB保存の即時反映を廃止（編集完了ボタンでまとめて保存する）
        m_item_prop.appendChild(label);
        m_item_prop.appendChild(input);
      } else {
        m_item_prop.textContent = `道具: ${inst.item || ''}`;
      }
    }

    if(m_level){
      // レベル切替ボタン（50 / 100） — 初期は inst.level
      const lvl = inst.level || 50;
      const btn = document.createElement('button');
      btn.className = 'level-btn' + (lvl===100 ? ' active' : '');
      btn.textContent = `Lv.${lvl}`;
      btn.addEventListener('click', ()=>{
        // toggle between 50 and 100 on the modal copy
        inst.level = (inst.level === 100) ? 50 : 100;
        renderModal(inst);
      });
      m_level.innerHTML = '';
      m_level.appendChild(btn);
    }

    // フォルムボタンの判定ロジック（簡易ルール、メガストーンの X/Y 判定に使用）
    const itemGroup = computeItemGroup(inst);

    // フォルム/メガ等のボタンを species データに基づいて自動生成する
    // 押されているボタンは青（.btn）、未選択は灰（.btn.secondary）で表現
    // クリック時は DATA.instances の該当インスタンスを更新してから再レンダリングする
    function makeBtn(label, isActive, onClick){
      const b = document.createElement('button');
      b.className = isActive ? 'btn active' : 'btn secondary';
      b.textContent = label;
      b.addEventListener('click', ()=>{
        // caller changes inst (mutates the modal copy) only — do NOT persist to DATA.instances here
        onClick();
        renderModal(inst);
        // do not update DATA.instances so changes remain modal-only until closed (then reverted)
      });
      return b;
    }

    // sp.forms / sp.formButtons を軸に、フォーム切替ボタンをまとめて生成する
    // （メガフォームはメガストーン所持時のみ表示。それ以外（盾/剣など）は常に表示）
    if(sp && sp.forms && sp.forms.length > 1){
      const currentFormName = inst._form || inst.species;
      sp.forms.forEach((formName, idx)=>{
        const targetEntry = DATA.species[formName];
        if(!targetEntry) return;
        const label = (sp.formButtons && sp.formButtons[idx]) ? sp.formButtons[idx] : formName;
        const isMegaForm = targetEntry.stage === 'メガ';
        if(isMegaForm){
          if(!hasMegaStone(inst)) return; // メガストーン未所持なら表示しない
          if(itemGroup === 'megaX' && !/X/i.test(label)) return;
          if(itemGroup === 'megaY' && !/Y/i.test(label)) return;
        }
        const active = currentFormName === formName;
        formButtons.appendChild(makeBtn(label, active, ()=>{ inst._form = formName; }));
      });
    }

    // position formButtons: align its bottom to the item's bottom and place its right edge 5px from modal right
    try{
      const panelEl = modal.querySelector('.panel');
      if(panelEl) panelEl.style.position = panelEl.style.position || 'relative';
      // make absolute relative to panel
      formButtons.style.position = 'absolute';
      formButtons.style.right = '12px';
      // compute top so bottom aligns with m_item_prop bottom
      requestAnimationFrame(()=>{
        const panelRect = panelEl.getBoundingClientRect();
        const itemRect = m_item_prop ? m_item_prop.getBoundingClientRect() : null;
        const fbHeight = formButtons.offsetHeight || formButtons.getBoundingClientRect().height || 0;
        if(itemRect && panelRect){
          let top = (itemRect.bottom - panelRect.top) - fbHeight;
          // small safeguard
          if(top < 0) top = itemRect.top - panelRect.top;
          formButtons.style.top = Math.round(top) + 'px';
        }
      });
    }catch(e){ console.warn('formButtons positioning failed', e); }

    // position close button after layout
    try{
      requestAnimationFrame(()=> positionCloseButton());
    }catch(e){console.warn('close button positioning failed',e)}

    // stats table (横書きで H A B C D S )
    const computed = renderComputedStats(inst);
    // base values: respect modal's selected form (_form) so pressing buttons updates the displayed種族値
    const resolvedFormNameForStats = inst._form || inst.species;
    const resolvedEntryForStats = DATA.species[resolvedFormNameForStats] || sp;
    let baseSrc = (resolvedEntryForStats && resolvedEntryForStats.baseStats) ? resolvedEntryForStats.baseStats : {hp:0,atk:0,def:0,spa:0,spd:0,spe:0};

    // build table with header H A B C D S and rows: 種族値 / 実数値 / 個体値 / 努力値（編集モードでは追加行あり）
    const table = document.createElement('table'); table.className='modal-table';
    const thead = document.createElement('thead');
    thead.innerHTML = `<tr><th class="label"></th><th>H</th><th>A</th><th>B</th><th>C</th><th>D</th><th>S</th></tr>`;
    table.appendChild(thead);
    const tbody = document.createElement('tbody');

    const trBase = document.createElement('tr'); trBase.innerHTML = `<td class="label">種族値</td>` + statsOrder.map(k=>`<td class="base">${baseSrc[statKeyMap[k]]||0}</td>`).join(''); tbody.appendChild(trBase);

    if(!modalEditMode){
      // 閲覧モード: 従来通りの読み取り専用表示
      const trReal = document.createElement('tr'); trReal.innerHTML = `<td class="label">実数値</td>` + statsOrder.map(k=>`<td class="stat-value ${getNatureMarkClass(inst.nature,k)}">${computed[k]}</td>`).join(''); tbody.appendChild(trReal);
      const trIv = document.createElement('tr'); trIv.innerHTML = `<td class="label">個体値</td>` + statsOrder.map(k=>`<td>${(inst.iv && (typeof inst.iv[k] !== 'undefined') ? inst.iv[k] : '')}</td>`).join(''); tbody.appendChild(trIv);
      const trEv = document.createElement('tr'); trEv.innerHTML = `<td class="label">努力値</td>` + statsOrder.map(k=>`<td>${(inst.ev&&inst.ev[k])||0}</td>`).join(''); tbody.appendChild(trEv);
    } else {
      // 編集モード: 実数値・個体値・努力値を編集可能にし、EV0/252切替・性格+/-ボタンの行を追加する。
      // 実数値/個体値/努力値の入力は「入力のたびにその場でセルだけ更新」し、全体を再描画しない
      // （毎回モーダル全体を再構築すると、入力中の要素からフォーカスが外れてしまうため）。
      const realInputs = {}, ivInputs = {}, evInputs = {}, evToggleBtns = {}, realTds = {};

      const trReal = document.createElement('tr');
      const tdRealLabel = document.createElement('td'); tdRealLabel.className='label'; tdRealLabel.textContent='実数値'; trReal.appendChild(tdRealLabel);
      statsOrder.forEach(k=>{
        const td = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'number'; input.className = 'stat-input';
        const mismatch = !!(inst._evRealMismatch && typeof inst._evRealMismatch[k] !== 'undefined');
        input.value = mismatch ? inst._evRealMismatch[k] : computed[k];
        applyRealCellClasses(td, inst, k, mismatch);
        realInputs[k] = input; realTds[k] = td;
        td.appendChild(input);
        trReal.appendChild(td);
      });
      tbody.appendChild(trReal);

      const trIv = document.createElement('tr');
      const tdIvLabel = document.createElement('td'); tdIvLabel.className='label'; tdIvLabel.textContent='個体値'; trIv.appendChild(tdIvLabel);
      statsOrder.forEach(k=>{
        const td = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'number'; input.className = 'stat-input'; input.min = '0'; input.max = '31';
        input.value = (inst.iv && typeof inst.iv[k] !== 'undefined') ? inst.iv[k] : 31;
        ivInputs[k] = input;
        td.appendChild(input);
        trIv.appendChild(td);
      });
      tbody.appendChild(trIv);

      const trEv = document.createElement('tr');
      const tdEvLabel = document.createElement('td'); tdEvLabel.className='label'; tdEvLabel.textContent='努力値'; trEv.appendChild(tdEvLabel);
      statsOrder.forEach(k=>{
        const td = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'number'; input.className = 'stat-input'; input.min = '0'; input.max = '252';
        input.value = (inst.ev && inst.ev[k]) || 0;
        evInputs[k] = input;
        td.appendChild(input);
        trEv.appendChild(td);
      });
      tbody.appendChild(trEv);

      const trEvToggle = document.createElement('tr');
      const tdToggleLabel = document.createElement('td'); tdToggleLabel.className='label'; tdToggleLabel.textContent='EV0/252'; trEvToggle.appendChild(tdToggleLabel);
      statsOrder.forEach(k=>{
        const td = document.createElement('td');
        const btn = document.createElement('button');
        btn.type = 'button'; btn.className = 'ev-toggle-btn';
        btn.textContent = ((inst.ev && inst.ev[k]) || 0) === 252 ? '0' : '252';
        evToggleBtns[k] = btn;
        td.appendChild(btn);
        trEvToggle.appendChild(td);
      });
      tbody.appendChild(trEvToggle);

      // 性格の上昇/下降ステータスを選ぶ矢印ボタン（HPは対象外）
      const trNatureArrows = document.createElement('tr');
      const tdNatureLabel = document.createElement('td'); tdNatureLabel.className='label'; tdNatureLabel.textContent='性格補正'; trNatureArrows.appendChild(tdNatureLabel);
      const nd = getNatureUpDown(inst.nature);
      statsOrder.forEach(k=>{
        const td = document.createElement('td');
        if(k !== 'H'){
          const cellWrap = document.createElement('div'); cellWrap.className = 'nature-arrow-cell';
          const plusBtn = document.createElement('button'); plusBtn.type='button'; plusBtn.className = 'nature-arrow-btn' + (nd.up===k ? ' active-up' : ''); plusBtn.textContent = '▲';
          plusBtn.addEventListener('click', ()=>{ toggleNatureStat(inst, k, 'plus'); renderModal(inst); });
          const minusBtn = document.createElement('button'); minusBtn.type='button'; minusBtn.className = 'nature-arrow-btn' + (nd.down===k ? ' active-down' : ''); minusBtn.textContent = '▼';
          minusBtn.addEventListener('click', ()=>{ toggleNatureStat(inst, k, 'minus'); renderModal(inst); });
          cellWrap.appendChild(plusBtn); cellWrap.appendChild(minusBtn);
          td.appendChild(cellWrap);
        }
        trNatureArrows.appendChild(td);
      });
      tbody.appendChild(trNatureArrows);

      // 実数値/個体値/努力値の相互反映（対象列だけをその場で更新し、他の入力のフォーカスは奪わない）
      function refreshColumn(k){
        const mismatch = !!(inst._evRealMismatch && typeof inst._evRealMismatch[k] !== 'undefined');
        if(document.activeElement !== realInputs[k]){
          realInputs[k].value = mismatch ? inst._evRealMismatch[k] : computeRealForStat(inst, k);
        }
        applyRealCellClasses(realTds[k], inst, k, mismatch);
        if(document.activeElement !== evInputs[k]){
          evInputs[k].value = (inst.ev && inst.ev[k]) || 0;
        }
        evToggleBtns[k].textContent = ((inst.ev && inst.ev[k]) || 0) === 252 ? '0' : '252';
      }

      statsOrder.forEach(k=>{
        realInputs[k].addEventListener('input', ()=>{
          const v = parseInt(realInputs[k].value, 10);
          if(!isNaN(v)) applyRealValueEdit(inst, k, v);
          refreshColumn(k);
        });
        // 実数値の確定(change)時点でのDB保存は行わない（編集完了ボタンでまとめて保存する）
        ivInputs[k].addEventListener('input', ()=>{
          const v = parseInt(ivInputs[k].value, 10);
          if(!isNaN(v)) applyIvDirectEdit(inst, k, v);
          refreshColumn(k);
        });
        // 個体値の確定(change)時点でのDB保存は行わない（編集完了ボタンでまとめて保存する）
        evInputs[k].addEventListener('input', ()=>{
          const v = parseInt(evInputs[k].value, 10);
          if(!isNaN(v)) applyEvDirectEdit(inst, k, v);
          refreshColumn(k);
        });
        // 努力値の確定(change)時点でのDB保存は行わない（編集完了ボタンでまとめて保存する）
        evToggleBtns[k].addEventListener('click', ()=>{
          toggleEvZeroMax(inst, k);
          refreshColumn(k);
        });
      });
    }

    table.appendChild(tbody);
    m_stats.appendChild(table);

    // 技（2x2）とメモ、タグ
    m_more.innerHTML = '';
    if(!modalEditMode){
      const movesGrid = document.createElement('div');
      movesGrid.style.display = 'grid'; movesGrid.style.gridTemplateColumns = '1fr 1fr'; movesGrid.style.gap = '4px'; movesGrid.style.marginTop = '8px';
      for(let i=0;i<4;i++){
        const moveBox = document.createElement('div'); moveBox.className = 'modal-move'; moveBox.textContent = inst.moves[i] || '';
        applyMoveColorStyle(moveBox, inst.moves[i] || '');
        movesGrid.appendChild(moveBox);
      }
      m_more.appendChild(movesGrid);

      const memoBox = document.createElement('div'); memoBox.className = 'memo-box'; memoBox.style.marginTop = '8px'; memoBox.textContent = inst.memo || '';
      m_more.appendChild(memoBox);
    } else {
      const movesGrid = document.createElement('div');
      movesGrid.style.display = 'grid'; movesGrid.style.gridTemplateColumns = '1fr 1fr'; movesGrid.style.gap = '4px'; movesGrid.style.marginTop = '8px';
      const movesList = (window.SUGGEST && window.SUGGEST.moves) ? window.SUGGEST.moves : Object.keys((typeof MOVES_DATA !== 'undefined' ? MOVES_DATA : {})).sort();
      for(let i=0;i<4;i++){
        const moveInput = document.createElement('input');
        moveInput.type = 'text'; moveInput.className = 'edit-text-input';
        moveInput.value = inst.moves[i] || '';
        moveInput.addEventListener('input', ()=>{ inst.moves[i] = moveInput.value; });
        // 技欄もDB保存の即時反映を廃止（編集完了ボタンでまとめて保存する）
        movesGrid.appendChild(moveInput);
        attachSuggestionsToInput(moveInput, movesList, (value)=>{ inst.moves[i] = value; moveInput.value = value; });
      }
      m_more.appendChild(movesGrid);

      const memoTextarea = document.createElement('textarea');
      memoTextarea.className = 'edit-memo-textarea';
      memoTextarea.style.marginTop = '8px';
      memoTextarea.value = inst.memo || '';
      memoTextarea.addEventListener('input', ()=>{ inst.memo = memoTextarea.value; });
      // メモもDB保存の即時反映を廃止（編集完了ボタンでまとめて保存する）
      m_more.appendChild(memoTextarea);
    }

    // タグ編集は今回未対応（後日変更予定のため常に読み取り専用表示）
    const tagsBox = document.createElement('div'); tagsBox.className = 'tags-box'; tagsBox.style.marginTop = '6px'; tagsBox.textContent = `検索タグ: ${inst.tags || ''}`;
    m_more.appendChild(tagsBox);

  // 表の上の道具表示は m_item_prop にセット済み
  // バッジ表示は不要（フォルムはボタンの色で示す）
  }

  // Position the moved close button so it sits partly outside the panel's top-right corner
  function positionCloseButton(){
    const btn = document.getElementById('closeModal');
    const panel = modal.querySelector('.panel');
    if(!btn || !panel) return;
    // modal and panel rects
    const modalRect = modal.getBoundingClientRect();
    const panelRect = panel.getBoundingClientRect();
    // desired position: button's left = panelRect.right - modalRect.left - offsetX
    const offset = 14; // how much to overlap into panel
    const left = panelRect.right - modalRect.left - offset;
    const top = panelRect.top - modalRect.top - offset;
    btn.style.position = 'absolute';
    btn.style.left = (Math.round(left) - 12) + 'px';
    btn.style.top = Math.round(top) + 'px';
    // ensure visible above panel
    btn.style.zIndex = 9999;
  }

  // reposition close button on resize or scroll to keep it aligned
  window.addEventListener('resize', ()=>{ if(modal.classList.contains('open')) requestAnimationFrame(positionCloseButton); });

  // イベント（存在チェックを入れて例外で処理が止まらないようにする）
  if(qEl) qEl.addEventListener('input', renderList);
  if(advSortFieldEl) advSortFieldEl.addEventListener('change', renderList);
  if(filterTypeEl) filterTypeEl.addEventListener('change', renderList);
  if(advSortDirBtn){ if(!advSortDirBtn.dataset.dir) advSortDirBtn.dataset.dir='desc'; advSortDirBtn.addEventListener('click', ()=>{ advSortDirBtn.dataset.dir = advSortDirBtn.dataset.dir === 'asc' ? 'desc' : 'asc'; advSortDirBtn.textContent = advSortDirBtn.dataset.dir === 'asc' ? '昇順' : '降順'; renderList(); }); }

  // 詳細検索パネルの中身を初期状態（一般と準伝のみチェック、その他の絞り込み条件は空）に戻す
  function resetAdvancedSearchPanel(){
    const advName = document.getElementById('adv-name'); if(advName) advName.value = '';
    const advAbility = document.getElementById('adv-ability'); if(advAbility) advAbility.value = '';
    const advMemo = document.getElementById('adv-memo'); if(advMemo) advMemo.value = '';
    const advMegaSel = document.getElementById('adv-mega'); if(advMegaSel) advMegaSel.value = '-';
    const typeAnd = document.querySelector('input[name="type-mode"][value="AND"]'); if(typeAnd) typeAnd.checked = true;
    const moveAnd = document.querySelector('input[name="move-mode"][value="AND"]'); if(moveAnd) moveAnd.checked = true;
    const typeClearBtn = document.getElementById('type-clear-all'); if(typeClearBtn) typeClearBtn.click();
    const moveClearBtn = document.getElementById('move-clear-all'); if(moveClearBtn) moveClearBtn.click();
    const catNormal = document.getElementById('cat-normal'); if(catNormal) catNormal.checked = true;
    const catLegend = document.getElementById('cat-legend'); if(catLegend) catLegend.checked = false;
    const catUb = document.getElementById('cat-ub'); if(catUb) catUb.checked = true;
    const catMyth = document.getElementById('cat-myth'); if(catMyth) catMyth.checked = false;
    const catRaised = document.getElementById('cat-raised'); if(catRaised) catRaised.checked = false;
    const catUnraised = document.getElementById('cat-unraised'); if(catUnraised) catUnraised.checked = false;
  }

  // リセットボタン: 検索欄のクリア、絞り込みパネルの初期化、ソートを図鑑番号の昇順に戻す
  if(resetBtn) resetBtn.addEventListener('click', ()=>{
    if(qEl) qEl.value='';
    if(filterTypeEl) filterTypeEl.value='';
    resetAdvancedSearchPanel();
    if(advSortFieldEl) advSortFieldEl.value='dex';
    if(advSortDirBtn){ advSortDirBtn.dataset.dir='asc'; advSortDirBtn.textContent='昇順'; }
    renderList();
  });

  // 「追加」ボタン: 空欄のポケモン名で新しい個体を編集モードのまま開く。
  // この時点ではIndexedDBには何も保存しない（一覧にも表示しない）。
  // 「編集完了」で有効なポケモン名が確定して初めて保存され、一覧に表示される。
  const addInstanceBtn = document.getElementById('add-instance-btn');
  if(addInstanceBtn){
    addInstanceBtn.addEventListener('click', ()=>{
      const newInstanceData = {
        species: '', // ポケモン名は空欄からスタート
        level: 50,
        gender: '-', // 性別。"-"/"♂"/"♀" を想定（今のところ値のチェックはしない。GUI編集は後日対応）
        raised: 0,
        nature: NEUTRAL_NATURE_NAME,
        ability: '',
        item: '',
        ev: {H:0,A:0,B:0,C:0,D:0,S:0},
        iv: {H:31,A:31,B:31,C:31,D:31,S:31},
        moves: ['','','',''],
        memo: '',
        tags: ''
      };
      openModal(newInstanceData, true, true); // 編集モードで開始、かつ「新規未保存」として扱う
    });
  }

  // 詳細検索の各コントロール変更で即時再描画するリスナを追加
  ['adv-name','adv-ability','adv-memo'].forEach(id=>{ const el = document.getElementById(id); if(el) el.addEventListener('input', renderList); });
  const advMegaEl = document.getElementById('adv-mega'); if(advMegaEl) advMegaEl.addEventListener('change', renderList);
  ['cat-normal','cat-ub','cat-legend','cat-myth','cat-raised','cat-unraised'].forEach(id=>{ const el = document.getElementById(id); if(el) el.addEventListener('change', renderList); });
  document.querySelectorAll('input[name="type-mode"]').forEach(r=> r.addEventListener('change', renderList));
  document.querySelectorAll('input[name="move-mode"]').forEach(r=> r.addEventListener('change', renderList));

  // 詳細検索エリア：盾/剣ボタンのイベント設定
  const advFormButtons = document.getElementById('adv-form-buttons');
  if(advFormButtons){
    const buttons = advFormButtons.querySelectorAll('.btn');
    buttons.forEach((btn, idx)=>{
      btn.addEventListener('click', ()=>{
        buttons.forEach(b=> b.classList.remove('active'));
        btn.classList.add('active');
        renderList();
      });
    });
  }

  // ヘッダー：通常/メガボタンのイベント設定（盾/剣と同じ2ボタン切り替え方式）
  const advMegaButtons = document.getElementById('adv-mega-buttons');
  if(advMegaButtons){
    const megaBtns = advMegaButtons.querySelectorAll('.btn');
    megaBtns.forEach((btn)=>{
      btn.addEventListener('click', ()=>{
        megaBtns.forEach(b=> b.classList.remove('active'));
        btn.classList.add('active');
        renderList();
      });
    });
  }

  // ヘッダのクリアボタン動作: タイプ全消去 / 技全消去
  const typeClearAllBtn = document.getElementById('type-clear-all');
  if(typeClearAllBtn){
    typeClearAllBtn.addEventListener('click', ()=>{
      document.querySelectorAll('#type-rows > div').forEach(row=>{
        const txt = row.querySelector('input'); if(txt) txt.value = '';
        const selects = row.querySelectorAll('select'); if(selects[0]) selects[0].value = 'match'; if(selects[1]){ selects[1].value='-'; selects[1].style.display='none'; }
      });
      if(typeof renderList === 'function') renderList();
    });
  }
  const moveClearAllBtn = document.getElementById('move-clear-all');
  if(moveClearAllBtn){
    moveClearAllBtn.addEventListener('click', ()=>{
      document.querySelectorAll('#move-rows input').forEach(i=> i.value='');
      if(typeof renderList === 'function') renderList();
    });
  }

  // 初回表示: IndexedDB（Gen6DB）から instances を読み込んでから初期描画を行う。
  // オンライン/オフラインで処理を分岐させることはなく、常にこの経路（IndexedDB）からデータを取得する。
  async function initApp(){
    try{
      if(typeof Gen6DB === 'undefined'){
        throw new Error('Gen6DB（IndexedDBアクセス層）が読み込まれていません');
      }
      await Gen6DB.init();
      DATA.instances = await Gen6DB.getAllInstances();
    }catch(e){
      console.error('IndexedDBからのデータ読み込みに失敗しました。データ0件の状態で起動します。', e);
      DATA.instances = [];
    }
    normalizeInstances();
    ensureDatalists();
    initSuggestionLists();
    renderList();

    // Persistent Storageの要求は、IndexedDBの初期化とは独立して行う。
    // 許可状況は画面には表示しない（要求自体は行うが、結果の表示処理は持たない）。
    // 失敗・拒否されてもアプリの動作には一切影響しない。
    try{
      if(typeof Gen6DB !== 'undefined' && Gen6DB.requestPersistentStorage){
        await Gen6DB.requestPersistentStorage();
      }
    }catch(e){
      console.warn('Persistent Storageの要求中にエラーが発生しました（アプリの動作には影響ありません）', e);
    }
  }
  initApp();