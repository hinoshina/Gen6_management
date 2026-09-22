// gen6-constants.js
// ユーザーが変更しない固定データ（開発者がこのファイルを直接編集して更新する）
// ・SPECIES_DATA               … ポケモンの種族／フォームデータ
// ・NATURES_DATA               … 性格ごとの補正情報
// ・ABILITY_TYPE_RESISTANCES   … 特性によるタイプ相性の補正
// ・TYPE_CHART                 … タイプ相性表
//
// 今後、以下の固定データもこのファイルに追加予定:
// ・MOVES_DATA      … 技一覧（技名・威力・タイプなど）
// ・TYPE_COLORS     … 各タイプの表示色（見た目のみに影響）

const SPECIES_DATA = {
    'フシギダネ': {
        dexNo: 1,
        types: ['くさ', 'どく'],
        abilities: ['しんりょく', '', 'ようりょくそ'],
        baseStats: {
            hp: 45,
            atk: 49,
            def: 49,
            spa: 65,
            spd: 65,
            spe: 45
        },
        weight: 6.9,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'フシギソウ': {
        dexNo: 2,
        types: ['くさ', 'どく'],
        abilities: ['しんりょく', '', 'ようりょくそ'],
        baseStats: {
            hp: 60,
            atk: 62,
            def: 63,
            spa: 80,
            spd: 80,
            spe: 60
        },
        weight: 13.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'フシギバナ': {
        dexNo: 3,
        types: ['くさ', 'どく'],
        abilities: ['しんりょく', '', 'ようりょくそ'],
        baseStats: {
            hp: 80,
            atk: 82,
            def: 83,
            spa: 100,
            spd: 100,
            spe: 80
        },
        weight: 100.0,
        kind: '一般',
        stage: 3,
        final_stage: 3,
        forms: ['フシギバナ', 'メガフシギバナ'],
        formButtons: ['通常', 'メガ']
    },
    'メガフシギバナ': {
        dexNo: 3,
        types: ['くさ', 'どく'],
        abilities: ['あついしぼう', '', ''],
        baseStats: {
            hp: 80,
            atk: 100,
            def: 123,
            spa: 122,
            spd: 120,
            spe: 80
        },
        weight: 155.5,
        kind: '一般',
        stage: 'メガ',
        final_stage: 3,
        forms: ['フシギバナ', 'メガフシギバナ'],
        formButtons: ['通常', 'メガ']
    },
    'ヒトカゲ': {
        dexNo: 4,
        types: ['ほのお'],
        abilities: ['もうか', '', 'サンパワー'],
        baseStats: {
            hp: 39,
            atk: 52,
            def: 43,
            spa: 60,
            spd: 50,
            spe: 65
        },
        weight: 8.5,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'リザード': {
        dexNo: 5,
        types: ['ほのお'],
        abilities: ['もうか', '', 'サンパワー'],
        baseStats: {
            hp: 58,
            atk: 64,
            def: 58,
            spa: 80,
            spd: 65,
            spe: 80
        },
        weight: 19.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'リザードン': {
        dexNo: 6,
        types: ['ほのお', 'ひこう'],
        abilities: ['もうか', '', 'サンパワー'],
        baseStats: {
            hp: 78,
            atk: 84,
            def: 78,
            spa: 109,
            spd: 85,
            spe: 100
        },
        weight: 90.5,
        kind: '一般',
        stage: 3,
        final_stage: 3,
        forms: ['リザードン', 'メガリザードンX', 'メガリザードンY'],
        formButtons: ['通常', 'X', 'Y']
    },
    'メガリザードンX': {
        dexNo: 6,
        types: ['ほのお', 'ドラゴン'],
        abilities: ['かたいツメ', '', ''],
        baseStats: {
            hp: 78,
            atk: 130,
            def: 111,
            spa: 130,
            spd: 85,
            spe: 100
        },
        weight: 110.5,
        kind: '一般',
        stage: 'メガ',
        final_stage: 3,
        forms: ['リザードン', 'メガリザードンX', 'メガリザードンY'],
        formButtons: ['通常', 'X', 'Y']
    },
    'メガリザードンY': {
        dexNo: 6,
        types: ['ほのお', 'ひこう'],
        abilities: ['ひでり', '', ''],
        baseStats: {
            hp: 78,
            atk: 104,
            def: 78,
            spa: 159,
            spd: 115,
            spe: 100
        },
        weight: 100.5,
        kind: '一般',
        stage: 'メガ',
        final_stage: 3,
        forms: ['リザードン', 'メガリザードンX', 'メガリザードンY'],
        formButtons: ['通常', 'X', 'Y']
    },
    'ゼニガメ': {
        dexNo: 7,
        types: ['みず'],
        abilities: ['げきりゅう', '', 'あめうけざら'],
        baseStats: {
            hp: 44,
            atk: 48,
            def: 65,
            spa: 50,
            spd: 64,
            spe: 43
        },
        weight: 9.0,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'カメール': {
        dexNo: 8,
        types: ['みず'],
        abilities: ['げきりゅう', '', 'あめうけざら'],
        baseStats: {
            hp: 59,
            atk: 63,
            def: 80,
            spa: 65,
            spd: 80,
            spe: 58
        },
        weight: 22.5,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'カメックス': {
        dexNo: 9,
        types: ['みず'],
        abilities: ['げきりゅう', '', 'あめうけざら'],
        baseStats: {
            hp: 79,
            atk: 83,
            def: 100,
            spa: 85,
            spd: 105,
            spe: 78
        },
        weight: 85.5,
        kind: '一般',
        stage: 3,
        final_stage: 3,
        forms: ['カメックス', 'メガカメックス'],
        formButtons: ['通常', 'メガ']
    },
    'メガカメックス': {
        dexNo: 9,
        types: ['みず'],
        abilities: ['メガランチャー', '', ''],
        baseStats: {
            hp: 79,
            atk: 103,
            def: 120,
            spa: 135,
            spd: 115,
            spe: 78
        },
        weight: 101.1,
        kind: '一般',
        stage: 'メガ',
        final_stage: 3,
        forms: ['カメックス', 'メガカメックス'],
        formButtons: ['通常', 'メガ']
    },
    'キャタピー': {
        dexNo: 10,
        types: ['むし'],
        abilities: ['りんぷん', '', 'にげあし'],
        baseStats: {
            hp: 45,
            atk: 30,
            def: 35,
            spa: 20,
            spd: 20,
            spe: 45
        },
        weight: 2.9,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'トランセル': {
        dexNo: 11,
        types: ['むし'],
        abilities: ['だっぴ', '', ''],
        baseStats: {
            hp: 50,
            atk: 20,
            def: 55,
            spa: 25,
            spd: 25,
            spe: 30
        },
        weight: 9.9,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'バタフリー': {
        dexNo: 12,
        types: ['むし', 'ひこう'],
        abilities: ['ふくがん', '', 'いろめがね'],
        baseStats: {
            hp: 60,
            atk: 45,
            def: 50,
            spa: 90,
            spd: 80,
            spe: 70
        },
        weight: 32.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ビードル': {
        dexNo: 13,
        types: ['むし', 'どく'],
        abilities: ['りんぷん', '', 'にげあし'],
        baseStats: {
            hp: 40,
            atk: 35,
            def: 30,
            spa: 20,
            spd: 20,
            spe: 50
        },
        weight: 3.2,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'コクーン': {
        dexNo: 14,
        types: ['むし', 'どく'],
        abilities: ['だっぴ', '', ''],
        baseStats: {
            hp: 45,
            atk: 25,
            def: 50,
            spa: 25,
            spd: 25,
            spe: 35
        },
        weight: 10.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'スピアー': {
        dexNo: 15,
        types: ['むし', 'どく'],
        abilities: ['むしのしらせ', '', 'スナイパー'],
        baseStats: {
            hp: 65,
            atk: 90,
            def: 40,
            spa: 45,
            spd: 80,
            spe: 75
        },
        weight: 29.5,
        kind: '一般',
        stage: 3,
        final_stage: 3,
        forms: ['スピアー', 'メガスピアー'],
        formButtons: ['通常', 'メガ']
    },
    'メガスピアー': {
        dexNo: 15,
        types: ['むし', 'どく'],
        abilities: ['てきおうりょく', '', ''],
        baseStats: {
            hp: 65,
            atk: 150,
            def: 40,
            spa: 15,
            spd: 80,
            spe: 145
        },
        weight: 40.5,
        kind: '一般',
        stage: 'メガ',
        final_stage: 3,
        forms: ['スピアー', 'メガスピアー'],
        formButtons: ['通常', 'メガ']
    },
    'ポッポ': {
        dexNo: 16,
        types: ['ノーマル', 'ひこう'],
        abilities: ['するどいめ', 'ちどりあし', 'はとむね'],
        baseStats: {
            hp: 40,
            atk: 45,
            def: 40,
            spa: 35,
            spd: 35,
            spe: 56
        },
        weight: 1.8,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ピジョン': {
        dexNo: 17,
        types: ['ノーマル', 'ひこう'],
        abilities: ['するどいめ', 'ちどりあし', 'はとむね'],
        baseStats: {
            hp: 63,
            atk: 60,
            def: 55,
            spa: 50,
            spd: 50,
            spe: 71
        },
        weight: 30.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ピジョット': {
        dexNo: 18,
        types: ['ノーマル', 'ひこう'],
        abilities: ['するどいめ', 'ちどりあし', 'はとむね'],
        baseStats: {
            hp: 83,
            atk: 80,
            def: 75,
            spa: 70,
            spd: 70,
            spe: 101
        },
        weight: 39.5,
        kind: '一般',
        stage: 3,
        final_stage: 3,
        forms: ['ピジョット', 'メガピジョット'],
        formButtons: ['通常', 'メガ']
    },
    'メガピジョット': {
        dexNo: 18,
        types: ['ノーマル', 'ひこう'],
        abilities: ['ノーガード', '', ''],
        baseStats: {
            hp: 83,
            atk: 80,
            def: 80,
            spa: 135,
            spd: 80,
            spe: 121
        },
        weight: 50.5,
        kind: '一般',
        stage: 'メガ',
        final_stage: 3,
        forms: ['ピジョット', 'メガピジョット'],
        formButtons: ['通常', 'メガ']
    },
    'コラッタ': {
        dexNo: 19,
        types: ['ノーマル'],
        abilities: ['にげあし', 'こんじょう', 'はりきり'],
        baseStats: {
            hp: 30,
            atk: 56,
            def: 35,
            spa: 25,
            spd: 35,
            spe: 72
        },
        weight: 3.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ラッタ': {
        dexNo: 20,
        types: ['ノーマル'],
        abilities: ['にげあし', 'こんじょう', 'はりきり'],
        baseStats: {
            hp: 55,
            atk: 81,
            def: 60,
            spa: 50,
            spd: 70,
            spe: 97
        },
        weight: 18.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'オニスズメ': {
        dexNo: 21,
        types: ['ノーマル', 'ひこう'],
        abilities: ['するどいめ', '', 'スナイパー'],
        baseStats: {
            hp: 40,
            atk: 60,
            def: 30,
            spa: 31,
            spd: 31,
            spe: 70
        },
        weight: 2.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'オニドリル': {
        dexNo: 22,
        types: ['ノーマル', 'ひこう'],
        abilities: ['するどいめ', '', 'スナイパー'],
        baseStats: {
            hp: 65,
            atk: 90,
            def: 65,
            spa: 61,
            spd: 61,
            spe: 100
        },
        weight: 38.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'アーボ': {
        dexNo: 23,
        types: ['どく'],
        abilities: ['いかく', 'だっぴ', 'きんちょうかん'],
        baseStats: {
            hp: 35,
            atk: 60,
            def: 44,
            spa: 40,
            spd: 54,
            spe: 55
        },
        weight: 6.9,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'アーボック': {
        dexNo: 24,
        types: ['どく'],
        abilities: ['いかく', 'だっぴ', 'きんちょうかん'],
        baseStats: {
            hp: 60,
            atk: 85,
            def: 69,
            spa: 65,
            spd: 79,
            spe: 80
        },
        weight: 65.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ピカチュウ': {
        dexNo: 25,
        types: ['でんき'],
        abilities: ['せいでんき', '', 'ひらいしん'],
        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 50,
            spd: 50,
            spe: 90
        },
        weight: 6.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ライチュウ': {
        dexNo: 26,
        types: ['でんき'],
        abilities: ['せいでんき', '', 'ひらいしん'],
        baseStats: {
            hp: 60,
            atk: 90,
            def: 55,
            spa: 90,
            spd: 80,
            spe: 110
        },
        weight: 30.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'サンド': {
        dexNo: 27,
        types: ['じめん'],
        abilities: ['すながくれ', '', 'すなかき'],
        baseStats: {
            hp: 50,
            atk: 75,
            def: 85,
            spa: 20,
            spd: 30,
            spe: 40
        },
        weight: 12.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'サンドパン': {
        dexNo: 28,
        types: ['じめん'],
        abilities: ['すながくれ', '', 'すなかき'],
        baseStats: {
            hp: 75,
            atk: 100,
            def: 110,
            spa: 45,
            spd: 55,
            spe: 65
        },
        weight: 29.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ニドラン♀': {
        dexNo: 29,
        types: ['どく'],
        abilities: ['どくのトゲ', 'とうそうしん', 'はりきり'],
        baseStats: {
            hp: 55,
            atk: 47,
            def: 52,
            spa: 40,
            spd: 40,
            spe: 41
        },
        weight: 7.0,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ニドリーナ': {
        dexNo: 30,
        types: ['どく'],
        abilities: ['どくのトゲ', 'とうそうしん', 'はりきり'],
        baseStats: {
            hp: 70,
            atk: 62,
            def: 67,
            spa: 55,
            spd: 55,
            spe: 56
        },
        weight: 20.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ニドクイン': {
        dexNo: 31,
        types: ['どく', 'じめん'],
        abilities: ['どくのトゲ', 'とうそうしん', 'ちからずく'],
        baseStats: {
            hp: 90,
            atk: 92,
            def: 87,
            spa: 75,
            spd: 85,
            spe: 76
        },
        weight: 60.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ニドラン♂': {
        dexNo: 32,
        types: ['どく'],
        abilities: ['どくのトゲ', 'とうそうしん', 'はりきり'],
        baseStats: {
            hp: 46,
            atk: 57,
            def: 40,
            spa: 40,
            spd: 40,
            spe: 50
        },
        weight: 9.0,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ニドリーノ': {
        dexNo: 33,
        types: ['どく'],
        abilities: ['どくのトゲ', 'とうそうしん', 'はりきり'],
        baseStats: {
            hp: 61,
            atk: 72,
            def: 57,
            spa: 55,
            spd: 55,
            spe: 65
        },
        weight: 19.5,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ニドキング': {
        dexNo: 34,
        types: ['どく', 'じめん'],
        abilities: ['どくのトゲ', 'とうそうしん', 'ちからずく'],
        baseStats: {
            hp: 81,
            atk: 102,
            def: 77,
            spa: 85,
            spd: 75,
            spe: 85
        },
        weight: 62.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ピッピ': {
        dexNo: 35,
        types: ['フェアリー'],
        abilities: ['メロメロボディ', 'マジックガード', 'フレンドガード'],
        baseStats: {
            hp: 70,
            atk: 45,
            def: 48,
            spa: 60,
            spd: 65,
            spe: 35
        },
        weight: 7.5,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ピクシー': {
        dexNo: 36,
        types: ['フェアリー'],
        abilities: ['メロメロボディ', 'マジックガード', 'てんねん'],
        baseStats: {
            hp: 95,
            atk: 70,
            def: 73,
            spa: 95,
            spd: 90,
            spe: 60
        },
        weight: 40.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ロコン': {
        dexNo: 37,
        types: ['ほのお'],
        abilities: ['もらいび', '', 'ひでり'],
        baseStats: {
            hp: 38,
            atk: 41,
            def: 40,
            spa: 50,
            spd: 65,
            spe: 65
        },
        weight: 9.9,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'キュウコン': {
        dexNo: 38,
        types: ['ほのお'],
        abilities: ['もらいび', '', 'ひでり'],
        baseStats: {
            hp: 73,
            atk: 76,
            def: 75,
            spa: 81,
            spd: 100,
            spe: 100
        },
        weight: 19.9,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'プリン': {
        dexNo: 39,
        types: ['ノーマル', 'フェアリー'],
        abilities: ['メロメロボディ', 'かちき', 'フレンドガード'],
        baseStats: {
            hp: 115,
            atk: 45,
            def: 20,
            spa: 45,
            spd: 25,
            spe: 20
        },
        weight: 5.5,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'プクリン': {
        dexNo: 40,
        types: ['ノーマル', 'フェアリー'],
        abilities: ['メロメロボディ', 'かちき', 'おみとおし'],
        baseStats: {
            hp: 140,
            atk: 70,
            def: 45,
            spa: 85,
            spd: 50,
            spe: 45
        },
        weight: 12.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ズバット': {
        dexNo: 41,
        types: ['どく', 'ひこう'],
        abilities: ['せいしんりょく', '', 'すりぬけ'],
        baseStats: {
            hp: 40,
            atk: 45,
            def: 35,
            spa: 30,
            spd: 40,
            spe: 55
        },
        weight: 7.5,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ゴルバット': {
        dexNo: 42,
        types: ['どく', 'ひこう'],
        abilities: ['せいしんりょく', '', 'すりぬけ'],
        baseStats: {
            hp: 75,
            atk: 80,
            def: 70,
            spa: 65,
            spd: 75,
            spe: 90
        },
        weight: 55.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ナゾノクサ': {
        dexNo: 43,
        types: ['くさ', 'どく'],
        abilities: ['ようりょくそ', '', 'にげあし'],
        baseStats: {
            hp: 45,
            atk: 50,
            def: 55,
            spa: 75,
            spd: 65,
            spe: 30
        },
        weight: 5.4,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'クサイハナ': {
        dexNo: 44,
        types: ['くさ', 'どく'],
        abilities: ['ようりょくそ', '', 'あくしゅう'],
        baseStats: {
            hp: 60,
            atk: 65,
            def: 70,
            spa: 85,
            spd: 75,
            spe: 40
        },
        weight: 8.6,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ラフレシア': {
        dexNo: 45,
        types: ['くさ', 'どく'],
        abilities: ['ようりょくそ', '', 'ほうし'],
        baseStats: {
            hp: 75,
            atk: 80,
            def: 85,
            spa: 110,
            spd: 90,
            spe: 50
        },
        weight: 18.6,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'パラス': {
        dexNo: 46,
        types: ['むし', 'くさ'],
        abilities: ['ほうし', 'かんそうはだ', 'しめりけ'],
        baseStats: {
            hp: 35,
            atk: 70,
            def: 55,
            spa: 45,
            spd: 55,
            spe: 25
        },
        weight: 5.4,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'パラセクト': {
        dexNo: 47,
        types: ['むし', 'くさ'],
        abilities: ['ほうし', 'かんそうはだ', 'しめりけ'],
        baseStats: {
            hp: 60,
            atk: 95,
            def: 80,
            spa: 60,
            spd: 80,
            spe: 30
        },
        weight: 29.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'コンパン': {
        dexNo: 48,
        types: ['むし', 'どく'],
        abilities: ['ふくがん', 'いろめがね', 'にげあし'],
        baseStats: {
            hp: 60,
            atk: 55,
            def: 50,
            spa: 40,
            spd: 55,
            spe: 45
        },
        weight: 30.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'モルフォン': {
        dexNo: 49,
        types: ['むし', 'どく'],
        abilities: ['りんぷん', 'いろめがね', 'ミラクルスキン'],
        baseStats: {
            hp: 70,
            atk: 65,
            def: 60,
            spa: 90,
            spd: 75,
            spe: 90
        },
        weight: 12.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ディグダ': {
        dexNo: 50,
        types: ['じめん'],
        abilities: ['すながくれ', 'ありじごく', 'すなのちから'],
        baseStats: {
            hp: 10,
            atk: 55,
            def: 25,
            spa: 35,
            spd: 45,
            spe: 95
        },
        weight: 0.8,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ダグトリオ': {
        dexNo: 51,
        types: ['じめん'],
        abilities: ['すながくれ', 'ありじごく', 'すなのちから'],
        baseStats: {
            hp: 35,
            atk: 80,
            def: 50,
            spa: 50,
            spd: 70,
            spe: 120
        },
        weight: 33.3,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ニャース': {
        dexNo: 52,
        types: ['ノーマル'],
        abilities: ['ものひろい', 'テクニシャン', 'きんちょうかん'],
        baseStats: {
            hp: 40,
            atk: 45,
            def: 35,
            spa: 40,
            spd: 40,
            spe: 90
        },
        weight: 4.2,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ペルシアン': {
        dexNo: 53,
        types: ['ノーマル'],
        abilities: ['じゅうなん', 'テクニシャン', 'きんちょうかん'],
        baseStats: {
            hp: 65,
            atk: 70,
            def: 60,
            spa: 65,
            spd: 65,
            spe: 115
        },
        weight: 32.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'コダック': {
        dexNo: 54,
        types: ['みず'],
        abilities: ['しめりけ', 'ノーてんき', 'すいすい'],
        baseStats: {
            hp: 50,
            atk: 52,
            def: 48,
            spa: 65,
            spd: 50,
            spe: 55
        },
        weight: 19.6,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ゴルダック': {
        dexNo: 55,
        types: ['みず'],
        abilities: ['しめりけ', 'ノーてんき', 'すいすい'],
        baseStats: {
            hp: 80,
            atk: 82,
            def: 78,
            spa: 95,
            spd: 80,
            spe: 85
        },
        weight: 76.6,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'マンキー': {
        dexNo: 56,
        types: ['かくとう'],
        abilities: ['やるき', 'いかりのつぼ', 'まけんき'],
        baseStats: {
            hp: 40,
            atk: 80,
            def: 35,
            spa: 35,
            spd: 45,
            spe: 70
        },
        weight: 28.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'オコリザル': {
        dexNo: 57,
        types: ['かくとう'],
        abilities: ['やるき', 'いかりのつぼ', 'まけんき'],
        baseStats: {
            hp: 65,
            atk: 105,
            def: 60,
            spa: 60,
            spd: 70,
            spe: 95
        },
        weight: 32.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ガーディ': {
        dexNo: 58,
        types: ['ほのお'],
        abilities: ['いかく', 'もらいび', 'せいぎのこころ'],
        baseStats: {
            hp: 55,
            atk: 70,
            def: 45,
            spa: 70,
            spd: 50,
            spe: 60
        },
        weight: 19.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ウインディ': {
        dexNo: 59,
        types: ['ほのお'],
        abilities: ['いかく', 'もらいび', 'せいぎのこころ'],
        baseStats: {
            hp: 90,
            atk: 110,
            def: 80,
            spa: 100,
            spd: 80,
            spe: 95
        },
        weight: 155.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ニョロモ': {
        dexNo: 60,
        types: ['みず'],
        abilities: ['ちょすい', 'しめりけ', 'すいすい'],
        baseStats: {
            hp: 40,
            atk: 50,
            def: 40,
            spa: 40,
            spd: 40,
            spe: 90
        },
        weight: 12.4,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ニョロゾ': {
        dexNo: 61,
        types: ['みず'],
        abilities: ['ちょすい', 'しめりけ', 'すいすい'],
        baseStats: {
            hp: 65,
            atk: 65,
            def: 65,
            spa: 50,
            spd: 50,
            spe: 90
        },
        weight: 20.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ニョロボン': {
        dexNo: 62,
        types: ['みず', 'かくとう'],
        abilities: ['ちょすい', 'しめりけ', 'すいすい'],
        baseStats: {
            hp: 90,
            atk: 95,
            def: 95,
            spa: 70,
            spd: 90,
            spe: 70
        },
        weight: 54.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ケーシィ': {
        dexNo: 63,
        types: ['エスパー'],
        abilities: ['シンクロ', 'せいしんりょく', 'マジックガード'],
        baseStats: {
            hp: 25,
            atk: 20,
            def: 15,
            spa: 105,
            spd: 55,
            spe: 90
        },
        weight: 19.5,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ユンゲラー': {
        dexNo: 64,
        types: ['エスパー'],
        abilities: ['シンクロ', 'せいしんりょく', 'マジックガード'],
        baseStats: {
            hp: 40,
            atk: 35,
            def: 30,
            spa: 120,
            spd: 70,
            spe: 105
        },
        weight: 56.5,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'フーディン': {
        dexNo: 65,
        types: ['エスパー'],
        abilities: ['シンクロ', 'せいしんりょく', 'マジックガード'],
        baseStats: {
            hp: 55,
            atk: 50,
            def: 45,
            spa: 135,
            spd: 95,
            spe: 120
        },
        weight: 48.0,
        kind: '一般',
        stage: 3,
        final_stage: 3,
        forms: ['フーディン', 'メガフーディン'],
        formButtons: ['通常', 'メガ']
    },
    'メガフーディン': {
        dexNo: 65,
        types: ['エスパー'],
        abilities: ['トレース', '', ''],
        baseStats: {
            hp: 55,
            atk: 50,
            def: 65,
            spa: 175,
            spd: 95,
            spe: 150
        },
        weight: 48.0,
        kind: '一般',
        stage: 'メガ',
        final_stage: 3,
        forms: ['フーディン', 'メガフーディン'],
        formButtons: ['通常', 'メガ']
    },
    'ワンリキー': {
        dexNo: 66,
        types: ['かくとう'],
        abilities: ['こんじょう', 'ノーガード', 'ふくつのこころ'],
        baseStats: {
            hp: 70,
            atk: 80,
            def: 50,
            spa: 35,
            spd: 35,
            spe: 35
        },
        weight: 19.5,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ゴーリキー': {
        dexNo: 67,
        types: ['かくとう'],
        abilities: ['こんじょう', 'ノーガード', 'ふくつのこころ'],
        baseStats: {
            hp: 80,
            atk: 100,
            def: 70,
            spa: 50,
            spd: 60,
            spe: 45
        },
        weight: 70.5,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'カイリキー': {
        dexNo: 68,
        types: ['かくとう'],
        abilities: ['こんじょう', 'ノーガード', 'ふくつのこころ'],
        baseStats: {
            hp: 90,
            atk: 130,
            def: 80,
            spa: 65,
            spd: 85,
            spe: 55
        },
        weight: 130.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'マダツボミ': {
        dexNo: 69,
        types: ['くさ', 'どく'],
        abilities: ['ようりょくそ', '', 'くいしんぼう'],
        baseStats: {
            hp: 50,
            atk: 75,
            def: 35,
            spa: 70,
            spd: 30,
            spe: 40
        },
        weight: 4.0,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ウツドン': {
        dexNo: 70,
        types: ['くさ', 'どく'],
        abilities: ['ようりょくそ', '', 'くいしんぼう'],
        baseStats: {
            hp: 65,
            atk: 90,
            def: 50,
            spa: 85,
            spd: 45,
            spe: 55
        },
        weight: 6.4,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ウツボット': {
        dexNo: 71,
        types: ['くさ', 'どく'],
        abilities: ['ようりょくそ', '', 'くいしんぼう'],
        baseStats: {
            hp: 80,
            atk: 105,
            def: 65,
            spa: 100,
            spd: 70,
            spe: 70
        },
        weight: 15.5,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'メノクラゲ': {
        dexNo: 72,
        types: ['みず', 'どく'],
        abilities: ['クリアボディ', 'ヘドロえき', 'あめうけざら'],
        baseStats: {
            hp: 40,
            atk: 40,
            def: 35,
            spa: 50,
            spd: 100,
            spe: 70
        },
        weight: 45.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ドククラゲ': {
        dexNo: 73,
        types: ['みず', 'どく'],
        abilities: ['クリアボディ', 'ヘドロえき', 'あめうけざら'],
        baseStats: {
            hp: 80,
            atk: 70,
            def: 65,
            spa: 80,
            spd: 120,
            spe: 100
        },
        weight: 55.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'イシツブテ': {
        dexNo: 74,
        types: ['いわ', 'じめん'],
        abilities: ['いしあたま', 'がんじょう', 'すながくれ'],
        baseStats: {
            hp: 40,
            atk: 80,
            def: 100,
            spa: 30,
            spd: 30,
            spe: 20
        },
        weight: 20.0,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ゴローン': {
        dexNo: 75,
        types: ['いわ', 'じめん'],
        abilities: ['いしあたま', 'がんじょう', 'すながくれ'],
        baseStats: {
            hp: 55,
            atk: 95,
            def: 115,
            spa: 45,
            spd: 45,
            spe: 35
        },
        weight: 105.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ゴローニャ': {
        dexNo: 76,
        types: ['いわ', 'じめん'],
        abilities: ['いしあたま', 'がんじょう', 'すながくれ'],
        baseStats: {
            hp: 80,
            atk: 120,
            def: 130,
            spa: 55,
            spd: 65,
            spe: 45
        },
        weight: 300.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ポニータ': {
        dexNo: 77,
        types: ['ほのお'],
        abilities: ['にげあし', 'もらいび', 'ほのおのからだ'],
        baseStats: {
            hp: 50,
            atk: 85,
            def: 55,
            spa: 65,
            spd: 65,
            spe: 90
        },
        weight: 30.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ギャロップ': {
        dexNo: 78,
        types: ['ほのお'],
        abilities: ['にげあし', 'もらいび', 'ほのおのからだ'],
        baseStats: {
            hp: 65,
            atk: 100,
            def: 70,
            spa: 80,
            spd: 80,
            spe: 105
        },
        weight: 95.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ヤドン': {
        dexNo: 79,
        types: ['みず', 'エスパー'],
        abilities: ['どんかん', 'マイペース', 'さいせいりょく'],
        baseStats: {
            hp: 90,
            atk: 65,
            def: 65,
            spa: 40,
            spd: 40,
            spe: 15
        },
        weight: 36.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ヤドラン': {
        dexNo: 80,
        types: ['みず', 'エスパー'],
        abilities: ['どんかん', 'マイペース', 'さいせいりょく'],
        baseStats: {
            hp: 95,
            atk: 75,
            def: 110,
            spa: 100,
            spd: 80,
            spe: 30
        },
        weight: 78.5,
        kind: '一般',
        stage: 3,
        final_stage: 2,
        forms: ['ヤドラン', 'メガヤドラン'],
        formButtons: ['通常', 'メガ']
    },
    'メガヤドラン': {
        dexNo: 80,
        types: ['みず', 'エスパー'],
        abilities: ['シェルアーマー', '', ''],
        baseStats: {
            hp: 95,
            atk: 75,
            def: 180,
            spa: 130,
            spd: 80,
            spe: 30
        },
        weight: 120.0,
        kind: '一般',
        stage: 'メガ',
        final_stage: 2,
        forms: ['ヤドラン', 'メガヤドラン'],
        formButtons: ['通常', 'メガ']
    },
    'コイル': {
        dexNo: 81,
        types: ['でんき', 'はがね'],
        abilities: ['じりょく', 'がんじょう', 'アナライズ'],
        baseStats: {
            hp: 25,
            atk: 35,
            def: 70,
            spa: 95,
            spd: 55,
            spe: 45
        },
        weight: 6.0,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'レアコイル': {
        dexNo: 82,
        types: ['でんき', 'はがね'],
        abilities: ['じりょく', 'がんじょう', 'アナライズ'],
        baseStats: {
            hp: 50,
            atk: 60,
            def: 95,
            spa: 120,
            spd: 70,
            spe: 70
        },
        weight: 60.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'カモネギ': {
        dexNo: 83,
        types: ['ノーマル', 'ひこう'],
        abilities: ['するどいめ', 'せいしんりょく', 'まけんき'],
        baseStats: {
            hp: 52,
            atk: 65,
            def: 55,
            spa: 58,
            spd: 62,
            spe: 60
        },
        weight: 15.0,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'ドードー': {
        dexNo: 84,
        types: ['ノーマル', 'ひこう'],
        abilities: ['にげあし', 'はやおき', 'ちどりあし'],
        baseStats: {
            hp: 35,
            atk: 85,
            def: 45,
            spa: 35,
            spd: 35,
            spe: 75
        },
        weight: 39.2,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ドードリオ': {
        dexNo: 85,
        types: ['ノーマル', 'ひこう'],
        abilities: ['にげあし', 'はやおき', 'ちどりあし'],
        baseStats: {
            hp: 60,
            atk: 110,
            def: 70,
            spa: 60,
            spd: 60,
            spe: 100
        },
        weight: 85.2,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'パウワウ': {
        dexNo: 86,
        types: ['みず'],
        abilities: ['あついしぼう', 'うるおいボディ', 'アイスボディ'],
        baseStats: {
            hp: 65,
            atk: 45,
            def: 55,
            spa: 45,
            spd: 70,
            spe: 45
        },
        weight: 90.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ジュゴン': {
        dexNo: 87,
        types: ['みず', 'こおり'],
        abilities: ['あついしぼう', 'うるおいボディ', 'アイスボディ'],
        baseStats: {
            hp: 90,
            atk: 70,
            def: 80,
            spa: 70,
            spd: 95,
            spe: 70
        },
        weight: 120.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ベトベター': {
        dexNo: 88,
        types: ['どく'],
        abilities: ['あくしゅう', 'ねんちゃく', 'どくしゅ'],
        baseStats: {
            hp: 80,
            atk: 80,
            def: 50,
            spa: 40,
            spd: 50,
            spe: 25
        },
        weight: 30.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ベトベトン': {
        dexNo: 89,
        types: ['どく'],
        abilities: ['あくしゅう', 'ねんちゃく', 'どくしゅ'],
        baseStats: {
            hp: 105,
            atk: 105,
            def: 75,
            spa: 65,
            spd: 100,
            spe: 50
        },
        weight: 30.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'シェルダー': {
        dexNo: 90,
        types: ['みず'],
        abilities: ['シェルアーマー', 'スキルリンク', 'ぼうじん'],
        baseStats: {
            hp: 30,
            atk: 65,
            def: 100,
            spa: 45,
            spd: 25,
            spe: 40
        },
        weight: 4.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'パルシェン': {
        dexNo: 91,
        types: ['みず', 'こおり'],
        abilities: ['シェルアーマー', 'スキルリンク', 'ぼうじん'],
        baseStats: {
            hp: 50,
            atk: 95,
            def: 180,
            spa: 85,
            spd: 45,
            spe: 70
        },
        weight: 132.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ゴース': {
        dexNo: 92,
        types: ['ゴースト', 'どく'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 30,
            atk: 35,
            def: 30,
            spa: 100,
            spd: 35,
            spe: 80
        },
        weight: 0.1,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ゴースト': {
        dexNo: 93,
        types: ['ゴースト', 'どく'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 45,
            atk: 50,
            def: 45,
            spa: 115,
            spd: 55,
            spe: 95
        },
        weight: 0.1,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ゲンガー': {
        dexNo: 94,
        types: ['ゴースト', 'どく'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 60,
            atk: 65,
            def: 60,
            spa: 130,
            spd: 75,
            spe: 110
        },
        weight: 40.5,
        kind: '一般',
        stage: 3,
        final_stage: 3,
        forms: ['ゲンガー', 'メガゲンガー'],
        formButtons: ['通常', 'メガ']
    },
    'メガゲンガー': {
        dexNo: 94,
        types: ['ゴースト', 'どく'],
        abilities: ['かげふみ', '', ''],
        baseStats: {
            hp: 60,
            atk: 65,
            def: 80,
            spa: 170,
            spd: 95,
            spe: 130
        },
        weight: 40.5,
        kind: '一般',
        stage: 'メガ',
        final_stage: 3,
        forms: ['ゲンガー', 'メガゲンガー'],
        formButtons: ['通常', 'メガ']
    },
    'イワーク': {
        dexNo: 95,
        types: ['いわ', 'じめん'],
        abilities: ['いしあたま', 'がんじょう', 'くだけるよろい'],
        baseStats: {
            hp: 35,
            atk: 45,
            def: 160,
            spa: 30,
            spd: 45,
            spe: 70
        },
        weight: 210.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'スリープ': {
        dexNo: 96,
        types: ['エスパー'],
        abilities: ['ふみん', 'よちむ', 'せいしんりょく'],
        baseStats: {
            hp: 60,
            atk: 48,
            def: 45,
            spa: 43,
            spd: 90,
            spe: 42
        },
        weight: 32.4,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'スリーパー': {
        dexNo: 97,
        types: ['エスパー'],
        abilities: ['ふみん', 'よちむ', 'せいしんりょく'],
        baseStats: {
            hp: 85,
            atk: 73,
            def: 70,
            spa: 73,
            spd: 115,
            spe: 67
        },
        weight: 75.6,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'クラブ': {
        dexNo: 98,
        types: ['みず'],
        abilities: ['かいりきバサミ', 'シェルアーマー', 'ちからずく'],
        baseStats: {
            hp: 30,
            atk: 105,
            def: 90,
            spa: 25,
            spd: 25,
            spe: 50
        },
        weight: 6.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'キングラー': {
        dexNo: 99,
        types: ['みず'],
        abilities: ['かいりきバサミ', 'シェルアーマー', 'ちからずく'],
        baseStats: {
            hp: 55,
            atk: 130,
            def: 115,
            spa: 50,
            spd: 50,
            spe: 75
        },
        weight: 60.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ビリリダマ': {
        dexNo: 100,
        types: ['でんき'],
        abilities: ['ぼうおん', 'せいでんき', 'ゆうばく'],
        baseStats: {
            hp: 40,
            atk: 30,
            def: 50,
            spa: 55,
            spd: 55,
            spe: 100
        },
        weight: 10.4,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'マルマイン': {
        dexNo: 101,
        types: ['でんき'],
        abilities: ['ぼうおん', 'せいでんき', 'ゆうばく'],
        baseStats: {
            hp: 60,
            atk: 50,
            def: 70,
            spa: 80,
            spd: 80,
            spe: 140
        },
        weight: 66.6,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'タマタマ': {
        dexNo: 102,
        types: ['くさ', 'エスパー'],
        abilities: ['ようりょくそ', '', 'しゅうかく'],
        baseStats: {
            hp: 60,
            atk: 40,
            def: 80,
            spa: 60,
            spd: 45,
            spe: 40
        },
        weight: 2.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ナッシー': {
        dexNo: 103,
        types: ['くさ', 'エスパー'],
        abilities: ['ようりょくそ', '', 'しゅうかく'],
        baseStats: {
            hp: 95,
            atk: 95,
            def: 85,
            spa: 125,
            spd: 65,
            spe: 55
        },
        weight: 120.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'カラカラ': {
        dexNo: 104,
        types: ['じめん'],
        abilities: ['いしあたま', 'ひらいしん', 'カブトアーマー'],
        baseStats: {
            hp: 50,
            atk: 50,
            def: 95,
            spa: 40,
            spd: 50,
            spe: 35
        },
        weight: 6.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ガラガラ': {
        dexNo: 105,
        types: ['じめん'],
        abilities: ['いしあたま', 'ひらいしん', 'カブトアーマー'],
        baseStats: {
            hp: 60,
            atk: 80,
            def: 110,
            spa: 50,
            spd: 80,
            spe: 45
        },
        weight: 45.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'サワムラー': {
        dexNo: 106,
        types: ['かくとう'],
        abilities: ['じゅうなん', 'すてみ', 'かるわざ'],
        baseStats: {
            hp: 50,
            atk: 120,
            def: 53,
            spa: 35,
            spd: 110,
            spe: 87
        },
        weight: 49.8,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'エビワラー': {
        dexNo: 107,
        types: ['かくとう'],
        abilities: ['するどいめ', 'てつのこぶし', 'せいしんりょく'],
        baseStats: {
            hp: 50,
            atk: 105,
            def: 79,
            spa: 35,
            spd: 110,
            spe: 76
        },
        weight: 50.2,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ベロリンガ': {
        dexNo: 108,
        types: ['ノーマル'],
        abilities: ['マイペース', 'どんかん', 'ノーてんき'],
        baseStats: {
            hp: 90,
            atk: 55,
            def: 75,
            spa: 60,
            spd: 75,
            spe: 30
        },
        weight: 65.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ドガース': {
        dexNo: 109,
        types: ['どく'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 40,
            atk: 65,
            def: 95,
            spa: 60,
            spd: 45,
            spe: 35
        },
        weight: 1.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'マタドガス': {
        dexNo: 110,
        types: ['どく'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 65,
            atk: 90,
            def: 120,
            spa: 85,
            spd: 70,
            spe: 60
        },
        weight: 9.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'サイホーン': {
        dexNo: 111,
        types: ['じめん', 'いわ'],
        abilities: ['ひらいしん', 'いしあたま', 'すてみ'],
        baseStats: {
            hp: 80,
            atk: 85,
            def: 95,
            spa: 30,
            spd: 30,
            spe: 25
        },
        weight: 115.0,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'サイドン': {
        dexNo: 112,
        types: ['じめん', 'いわ'],
        abilities: ['ひらいしん', 'いしあたま', 'すてみ'],
        baseStats: {
            hp: 105,
            atk: 130,
            def: 120,
            spa: 45,
            spd: 45,
            spe: 40
        },
        weight: 120.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ラッキー': {
        dexNo: 113,
        types: ['ノーマル'],
        abilities: ['しぜんかいふく', 'てんのめぐみ', 'いやしのこころ'],
        baseStats: {
            hp: 250,
            atk: 5,
            def: 5,
            spa: 35,
            spd: 105,
            spe: 50
        },
        weight: 34.6,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'モンジャラ': {
        dexNo: 114,
        types: ['くさ'],
        abilities: ['ようりょくそ', 'リーフガード', 'さいせいりょく'],
        baseStats: {
            hp: 65,
            atk: 55,
            def: 115,
            spa: 100,
            spd: 40,
            spe: 60
        },
        weight: 35.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ガルーラ': {
        dexNo: 115,
        types: ['ノーマル'],
        abilities: ['はやおき', 'きもったま', 'せいしんりょく'],
        baseStats: {
            hp: 105,
            atk: 95,
            def: 80,
            spa: 40,
            spd: 80,
            spe: 90
        },
        weight: 80.0,
        kind: '一般',
        stage: 1,
        final_stage: 1,
        forms: ['ガルーラ', 'メガガルーラ'],
        formButtons: ['通常', 'メガ']
    },
    'メガガルーラ': {
        dexNo: 115,
        types: ['ノーマル'],
        abilities: ['おやこあい', '', ''],
        baseStats: {
            hp: 105,
            atk: 125,
            def: 100,
            spa: 60,
            spd: 100,
            spe: 100
        },
        weight: 100.0,
        kind: '一般',
        stage: 'メガ',
        final_stage: 1,
        forms: ['ガルーラ', 'メガガルーラ'],
        formButtons: ['通常', 'メガ']
    },
    'タッツー': {
        dexNo: 116,
        types: ['みず'],
        abilities: ['すいすい', 'スナイパー', 'しめりけ'],
        baseStats: {
            hp: 30,
            atk: 40,
            def: 70,
            spa: 70,
            spd: 25,
            spe: 60
        },
        weight: 8.0,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'シードラ': {
        dexNo: 117,
        types: ['みず'],
        abilities: ['どくのトゲ', 'スナイパー', 'しめりけ'],
        baseStats: {
            hp: 55,
            atk: 65,
            def: 95,
            spa: 95,
            spd: 45,
            spe: 85
        },
        weight: 25.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'トサキント': {
        dexNo: 118,
        types: ['みず'],
        abilities: ['すいすい', 'みずのベール', 'ひらいしん'],
        baseStats: {
            hp: 45,
            atk: 67,
            def: 60,
            spa: 35,
            spd: 50,
            spe: 63
        },
        weight: 15.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'アズマオウ': {
        dexNo: 119,
        types: ['みず'],
        abilities: ['すいすい', 'みずのベール', 'ひらいしん'],
        baseStats: {
            hp: 80,
            atk: 92,
            def: 65,
            spa: 65,
            spd: 80,
            spe: 68
        },
        weight: 39.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ヒトデマン': {
        dexNo: 120,
        types: ['みず'],
        abilities: ['はっこう', 'しぜんかいふく', 'アナライズ'],
        baseStats: {
            hp: 30,
            atk: 45,
            def: 55,
            spa: 70,
            spd: 55,
            spe: 85
        },
        weight: 34.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'スターミー': {
        dexNo: 121,
        types: ['みず', 'エスパー'],
        abilities: ['はっこう', 'しぜんかいふく', 'アナライズ'],
        baseStats: {
            hp: 60,
            atk: 75,
            def: 85,
            spa: 100,
            spd: 85,
            spe: 115
        },
        weight: 80.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'バリヤード': {
        dexNo: 122,
        types: ['エスパー', 'フェアリー'],
        abilities: ['ぼうおん', 'フィルター', 'テクニシャン'],
        baseStats: {
            hp: 40,
            atk: 45,
            def: 65,
            spa: 100,
            spd: 120,
            spe: 90
        },
        weight: 54.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ストライク': {
        dexNo: 123,
        types: ['むし', 'ひこう'],
        abilities: ['むしのしらせ', 'テクニシャン', 'ふくつのこころ'],
        baseStats: {
            hp: 70,
            atk: 110,
            def: 80,
            spa: 55,
            spd: 80,
            spe: 105
        },
        weight: 56.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ルージュラ': {
        dexNo: 124,
        types: ['こおり', 'エスパー'],
        abilities: ['どんかん', 'よちむ', 'かんそうはだ'],
        baseStats: {
            hp: 65,
            atk: 50,
            def: 35,
            spa: 115,
            spd: 95,
            spe: 95
        },
        weight: 40.6,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'エレブー': {
        dexNo: 125,
        types: ['でんき'],
        abilities: ['せいでんき', '', 'やるき'],
        baseStats: {
            hp: 65,
            atk: 83,
            def: 57,
            spa: 95,
            spd: 85,
            spe: 105
        },
        weight: 30.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ブーバー': {
        dexNo: 126,
        types: ['ほのお'],
        abilities: ['ほのおのからだ', '', 'やるき'],
        baseStats: {
            hp: 65,
            atk: 95,
            def: 57,
            spa: 100,
            spd: 85,
            spe: 93
        },
        weight: 44.5,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'カイロス': {
        dexNo: 127,
        types: ['むし'],
        abilities: ['かいりきバサミ', 'かたやぶり', 'じしんかじょう'],
        baseStats: {
            hp: 65,
            atk: 125,
            def: 100,
            spa: 55,
            spd: 70,
            spe: 85
        },
        weight: 55.0,
        kind: '一般',
        stage: 1,
        final_stage: 1,
        forms: ['カイロス', 'メガカイロス'],
        formButtons: ['通常', 'メガ']
    },
    'メガカイロス': {
        dexNo: 127,
        types: ['むし', 'ひこう'],
        abilities: ['スカイスキン', '', ''],
        baseStats: {
            hp: 65,
            atk: 155,
            def: 120,
            spa: 65,
            spd: 90,
            spe: 105
        },
        weight: 59.0,
        kind: '一般',
        stage: 'メガ',
        final_stage: 1,
        forms: ['カイロス', 'メガカイロス'],
        formButtons: ['通常', 'メガ']
    },
    'ケンタロス': {
        dexNo: 128,
        types: ['ノーマル'],
        abilities: ['いかく', 'いかりのつぼ', 'ちからずく'],
        baseStats: {
            hp: 75,
            atk: 100,
            def: 95,
            spa: 40,
            spd: 70,
            spe: 110
        },
        weight: 88.4,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'コイキング': {
        dexNo: 129,
        types: ['みず'],
        abilities: ['すいすい', '', 'びびり'],
        baseStats: {
            hp: 20,
            atk: 10,
            def: 55,
            spa: 15,
            spd: 20,
            spe: 80
        },
        weight: 10.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ギャラドス': {
        dexNo: 130,
        types: ['みず', 'ひこう'],
        abilities: ['いかく', '', 'じしんかじょう'],
        baseStats: {
            hp: 95,
            atk: 125,
            def: 79,
            spa: 60,
            spd: 100,
            spe: 81
        },
        weight: 235.0,
        kind: '一般',
        stage: 3,
        final_stage: 2,
        forms: ['ギャラドス', 'メガギャラドス'],
        formButtons: ['通常', 'メガ']
    },
    'メガギャラドス': {
        dexNo: 130,
        types: ['みず', 'あく'],
        abilities: ['かたやぶり', '', ''],
        baseStats: {
            hp: 95,
            atk: 155,
            def: 109,
            spa: 70,
            spd: 130,
            spe: 81
        },
        weight: 305.0,
        kind: '一般',
        stage: 'メガ',
        final_stage: 2,
        forms: ['ギャラドス', 'メガギャラドス'],
        formButtons: ['通常', 'メガ']
    },
    'ラプラス': {
        dexNo: 131,
        types: ['みず', 'こおり'],
        abilities: ['ちょすい', 'シェルアーマー', 'うるおいボディ'],
        baseStats: {
            hp: 130,
            atk: 85,
            def: 80,
            spa: 85,
            spd: 95,
            spe: 60
        },
        weight: 220.0,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'メタモン': {
        dexNo: 132,
        types: ['ノーマル'],
        abilities: ['じゅうなん', '', 'かわりもの'],
        baseStats: {
            hp: 48,
            atk: 48,
            def: 48,
            spa: 48,
            spd: 48,
            spe: 48
        },
        weight: 4.0,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'イーブイ': {
        dexNo: 133,
        types: ['ノーマル'],
        abilities: ['にげあし', 'てきおうりょく', 'きけんよち'],
        baseStats: {
            hp: 55,
            atk: 55,
            def: 50,
            spa: 45,
            spd: 65,
            spe: 55
        },
        weight: 6.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'シャワーズ': {
        dexNo: 134,
        types: ['みず'],
        abilities: ['ちょすい', '', 'うるおいボディ'],
        baseStats: {
            hp: 130,
            atk: 65,
            def: 60,
            spa: 110,
            spd: 95,
            spe: 65
        },
        weight: 29.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'サンダース': {
        dexNo: 135,
        types: ['でんき'],
        abilities: ['ちくでん', '', 'はやあし'],
        baseStats: {
            hp: 65,
            atk: 65,
            def: 60,
            spa: 110,
            spd: 95,
            spe: 130
        },
        weight: 24.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ブースター': {
        dexNo: 136,
        types: ['ほのお'],
        abilities: ['もらいび', '', 'こんじょう'],
        baseStats: {
            hp: 65,
            atk: 130,
            def: 60,
            spa: 95,
            spd: 110,
            spe: 65
        },
        weight: 25.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ポリゴン': {
        dexNo: 137,
        types: ['ノーマル'],
        abilities: ['トレース', 'ダウンロード', 'アナライズ'],
        baseStats: {
            hp: 65,
            atk: 60,
            def: 70,
            spa: 85,
            spd: 75,
            spe: 40
        },
        weight: 36.5,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'オムナイト': {
        dexNo: 138,
        types: ['いわ', 'みず'],
        abilities: ['すいすい', 'シェルアーマー', 'くだけるよろい'],
        baseStats: {
            hp: 35,
            atk: 40,
            def: 100,
            spa: 90,
            spd: 55,
            spe: 35
        },
        weight: 7.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'オムスター': {
        dexNo: 139,
        types: ['いわ', 'みず'],
        abilities: ['すいすい', 'シェルアーマー', 'くだけるよろい'],
        baseStats: {
            hp: 70,
            atk: 60,
            def: 125,
            spa: 115,
            spd: 70,
            spe: 55
        },
        weight: 35.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'カブト': {
        dexNo: 140,
        types: ['いわ', 'みず'],
        abilities: ['すいすい', 'カブトアーマー', 'くだけるよろい'],
        baseStats: {
            hp: 30,
            atk: 80,
            def: 90,
            spa: 55,
            spd: 45,
            spe: 55
        },
        weight: 11.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'カブトプス': {
        dexNo: 141,
        types: ['いわ', 'みず'],
        abilities: ['すいすい', 'カブトアーマー', 'くだけるよろい'],
        baseStats: {
            hp: 60,
            atk: 115,
            def: 105,
            spa: 65,
            spd: 70,
            spe: 80
        },
        weight: 40.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'プテラ': {
        dexNo: 142,
        types: ['いわ', 'ひこう'],
        abilities: ['いしあたま', 'プレッシャー', 'きんちょうかん'],
        baseStats: {
            hp: 80,
            atk: 105,
            def: 65,
            spa: 60,
            spd: 75,
            spe: 130
        },
        weight: 59.0,
        kind: '一般',
        stage: 1,
        final_stage: 1,
        forms: ['プテラ', 'メガプテラ'],
        formButtons: ['通常', 'メガ']
    },
    'メガプテラ': {
        dexNo: 142,
        types: ['いわ', 'ひこう'],
        abilities: ['かたいツメ', '', ''],
        baseStats: {
            hp: 80,
            atk: 135,
            def: 85,
            spa: 70,
            spd: 95,
            spe: 150
        },
        weight: 79.0,
        kind: '一般',
        stage: 'メガ',
        final_stage: 1,
        forms: ['プテラ', 'メガプテラ'],
        formButtons: ['通常', 'メガ']
    },
    'カビゴン': {
        dexNo: 143,
        types: ['ノーマル'],
        abilities: ['めんえき', 'あついしぼう', 'くいしんぼう'],
        baseStats: {
            hp: 160,
            atk: 110,
            def: 65,
            spa: 65,
            spd: 110,
            spe: 30
        },
        weight: 460.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'フリーザー': {
        dexNo: 144,
        types: ['こおり', 'ひこう'],
        abilities: ['プレッシャー', '', 'ゆきがくれ'],
        baseStats: {
            hp: 90,
            atk: 85,
            def: 100,
            spa: 95,
            spd: 125,
            spe: 85
        },
        weight: 55.4,
        kind: '準伝',
        stage: 1,
        final_stage: 1
    },
    'サンダー': {
        dexNo: 145,
        types: ['でんき', 'ひこう'],
        abilities: ['プレッシャー', '', 'せいでんき'],
        baseStats: {
            hp: 90,
            atk: 90,
            def: 85,
            spa: 125,
            spd: 90,
            spe: 100
        },
        weight: 52.6,
        kind: '準伝',
        stage: 1,
        final_stage: 1
    },
    'ファイヤー': {
        dexNo: 146,
        types: ['ほのお', 'ひこう'],
        abilities: ['プレッシャー', '', 'ほのおのからだ'],
        baseStats: {
            hp: 90,
            atk: 100,
            def: 90,
            spa: 125,
            spd: 85,
            spe: 90
        },
        weight: 60.0,
        kind: '準伝',
        stage: 1,
        final_stage: 1
    },
    'ミニリュウ': {
        dexNo: 147,
        types: ['ドラゴン'],
        abilities: ['だっぴ', '', 'ふしぎなうろこ'],
        baseStats: {
            hp: 41,
            atk: 64,
            def: 45,
            spa: 50,
            spd: 50,
            spe: 50
        },
        weight: 3.3,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ハクリュー': {
        dexNo: 148,
        types: ['ドラゴン'],
        abilities: ['だっぴ', '', 'ふしぎなうろこ'],
        baseStats: {
            hp: 61,
            atk: 84,
            def: 65,
            spa: 70,
            spd: 70,
            spe: 70
        },
        weight: 16.5,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'カイリュー': {
        dexNo: 149,
        types: ['ドラゴン', 'ひこう'],
        abilities: ['せいしんりょく', '', 'マルチスケイル'],
        baseStats: {
            hp: 91,
            atk: 134,
            def: 95,
            spa: 100,
            spd: 100,
            spe: 80
        },
        weight: 210.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ミュウツー': {
        dexNo: 150,
        types: ['エスパー'],
        abilities: ['プレッシャー', '', 'きんちょうかん'],
        baseStats: {
            hp: 106,
            atk: 110,
            def: 90,
            spa: 154,
            spd: 90,
            spe: 130
        },
        weight: 122.0,
        kind: '禁伝',
        stage: 1,
        final_stage: 1,
        forms: ['ミュウツー', 'メガミュウツーX', 'メガミュウツーY'],
        formButtons: ['通常', 'X', 'Y']
    },
    'メガミュウツーX': {
        dexNo: 150,
        types: ['エスパー', 'かくとう'],
        abilities: ['ふくつのこころ', '', ''],
        baseStats: {
            hp: 106,
            atk: 190,
            def: 100,
            spa: 154,
            spd: 100,
            spe: 130
        },
        weight: 127.0,
        kind: '禁伝',
        stage: 'メガ',
        final_stage: 1,
        forms: ['ミュウツー', 'メガミュウツーX', 'メガミュウツーY'],
        formButtons: ['通常', 'X', 'Y']
    },
    'メガミュウツーY': {
        dexNo: 150,
        types: ['エスパー'],
        abilities: ['ふみん', '', ''],
        baseStats: {
            hp: 106,
            atk: 150,
            def: 70,
            spa: 194,
            spd: 120,
            spe: 140
        },
        weight: 33.0,
        kind: '禁伝',
        stage: 'メガ',
        final_stage: 1,
        forms: ['ミュウツー', 'メガミュウツーX', 'メガミュウツーY'],
        formButtons: ['通常', 'X', 'Y']
    },
    'ミュウ': {
        dexNo: 151,
        types: ['エスパー'],
        abilities: ['シンクロ', '', ''],
        baseStats: {
            hp: 100,
            atk: 100,
            def: 100,
            spa: 100,
            spd: 100,
            spe: 100
        },
        weight: 4.0,
        kind: '幻',
        stage: 1,
        final_stage: 1
    },
    'チコリータ': {
        dexNo: 152,
        types: ['くさ'],
        abilities: ['しんりょく', '', 'リーフガード'],
        baseStats: {
            hp: 45,
            atk: 49,
            def: 65,
            spa: 49,
            spd: 65,
            spe: 45
        },
        weight: 6.4,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ベイリーフ': {
        dexNo: 153,
        types: ['くさ'],
        abilities: ['しんりょく', '', 'リーフガード'],
        baseStats: {
            hp: 60,
            atk: 62,
            def: 80,
            spa: 63,
            spd: 80,
            spe: 60
        },
        weight: 15.8,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'メガニウム': {
        dexNo: 154,
        types: ['くさ'],
        abilities: ['しんりょく', '', 'リーフガード'],
        baseStats: {
            hp: 80,
            atk: 82,
            def: 100,
            spa: 83,
            spd: 100,
            spe: 80
        },
        weight: 100.5,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ヒノアラシ': {
        dexNo: 155,
        types: ['ほのお'],
        abilities: ['もうか', '', 'もらいび'],
        baseStats: {
            hp: 39,
            atk: 52,
            def: 43,
            spa: 60,
            spd: 50,
            spe: 65
        },
        weight: 7.9,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'マグマラシ': {
        dexNo: 156,
        types: ['ほのお'],
        abilities: ['もうか', '', 'もらいび'],
        baseStats: {
            hp: 58,
            atk: 64,
            def: 58,
            spa: 80,
            spd: 65,
            spe: 80
        },
        weight: 19.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'バクフーン': {
        dexNo: 157,
        types: ['ほのお'],
        abilities: ['もうか', '', 'もらいび'],
        baseStats: {
            hp: 78,
            atk: 84,
            def: 78,
            spa: 109,
            spd: 85,
            spe: 100
        },
        weight: 79.5,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ワニノコ': {
        dexNo: 158,
        types: ['みず'],
        abilities: ['げきりゅう', '', 'ちからずく'],
        baseStats: {
            hp: 50,
            atk: 65,
            def: 64,
            spa: 44,
            spd: 48,
            spe: 43
        },
        weight: 9.5,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'アリゲイツ': {
        dexNo: 159,
        types: ['みず'],
        abilities: ['げきりゅう', '', 'ちからずく'],
        baseStats: {
            hp: 65,
            atk: 80,
            def: 80,
            spa: 59,
            spd: 63,
            spe: 58
        },
        weight: 25.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'オーダイル': {
        dexNo: 160,
        types: ['みず'],
        abilities: ['げきりゅう', '', 'ちからずく'],
        baseStats: {
            hp: 85,
            atk: 105,
            def: 100,
            spa: 79,
            spd: 83,
            spe: 78
        },
        weight: 88.8,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'オタチ': {
        dexNo: 161,
        types: ['ノーマル'],
        abilities: ['にげあし', 'するどいめ', 'おみとおし'],
        baseStats: {
            hp: 35,
            atk: 46,
            def: 34,
            spa: 35,
            spd: 45,
            spe: 20
        },
        weight: 6.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'オオタチ': {
        dexNo: 162,
        types: ['ノーマル'],
        abilities: ['にげあし', 'するどいめ', 'おみとおし'],
        baseStats: {
            hp: 85,
            atk: 76,
            def: 64,
            spa: 45,
            spd: 55,
            spe: 90
        },
        weight: 32.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ホーホー': {
        dexNo: 163,
        types: ['ノーマル', 'ひこう'],
        abilities: ['ふみん', 'するどいめ', 'いろめがね'],
        baseStats: {
            hp: 60,
            atk: 30,
            def: 30,
            spa: 36,
            spd: 56,
            spe: 50
        },
        weight: 21.2,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ヨルノズク': {
        dexNo: 164,
        types: ['ノーマル', 'ひこう'],
        abilities: ['ふみん', 'するどいめ', 'いろめがね'],
        baseStats: {
            hp: 100,
            atk: 50,
            def: 50,
            spa: 76,
            spd: 96,
            spe: 70
        },
        weight: 40.8,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'レディバ': {
        dexNo: 165,
        types: ['むし', 'ひこう'],
        abilities: ['むしのしらせ', 'はやおき', 'びびり'],
        baseStats: {
            hp: 40,
            atk: 20,
            def: 30,
            spa: 40,
            spd: 80,
            spe: 55
        },
        weight: 10.8,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'レディアン': {
        dexNo: 166,
        types: ['むし', 'ひこう'],
        abilities: ['むしのしらせ', 'はやおき', 'てつのこぶし'],
        baseStats: {
            hp: 55,
            atk: 35,
            def: 50,
            spa: 55,
            spd: 110,
            spe: 85
        },
        weight: 35.6,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'イトマル': {
        dexNo: 167,
        types: ['むし', 'どく'],
        abilities: ['むしのしらせ', 'ふみん', 'スナイパー'],
        baseStats: {
            hp: 40,
            atk: 60,
            def: 40,
            spa: 40,
            spd: 40,
            spe: 30
        },
        weight: 8.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'アリアドス': {
        dexNo: 168,
        types: ['むし', 'どく'],
        abilities: ['むしのしらせ', 'ふみん', 'スナイパー'],
        baseStats: {
            hp: 70,
            atk: 90,
            def: 70,
            spa: 60,
            spd: 60,
            spe: 40
        },
        weight: 33.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'クロバット': {
        dexNo: 169,
        types: ['どく', 'ひこう'],
        abilities: ['せいしんりょく', '', 'すりぬけ'],
        baseStats: {
            hp: 85,
            atk: 90,
            def: 80,
            spa: 70,
            spd: 80,
            spe: 130
        },
        weight: 75.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'チョンチー': {
        dexNo: 170,
        types: ['みず', 'でんき'],
        abilities: ['ちくでん', 'はっこう', 'ちょすい'],
        baseStats: {
            hp: 75,
            atk: 38,
            def: 38,
            spa: 56,
            spd: 56,
            spe: 67
        },
        weight: 12.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ランターン': {
        dexNo: 171,
        types: ['みず', 'でんき'],
        abilities: ['ちくでん', 'はっこう', 'ちょすい'],
        baseStats: {
            hp: 125,
            atk: 58,
            def: 58,
            spa: 76,
            spd: 76,
            spe: 67
        },
        weight: 22.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ピチュー': {
        dexNo: 172,
        types: ['でんき'],
        abilities: ['せいでんき', '', 'ひらいしん'],
        baseStats: {
            hp: 20,
            atk: 40,
            def: 15,
            spa: 35,
            spd: 35,
            spe: 60
        },
        weight: 2.0,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ピィ': {
        dexNo: 173,
        types: ['フェアリー'],
        abilities: ['メロメロボディ', 'マジックガード', 'フレンドガード'],
        baseStats: {
            hp: 50,
            atk: 25,
            def: 28,
            spa: 45,
            spd: 55,
            spe: 15
        },
        weight: 3.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ププリン': {
        dexNo: 174,
        types: ['ノーマル', 'フェアリー'],
        abilities: ['メロメロボディ', 'かちき', 'フレンドガード'],
        baseStats: {
            hp: 90,
            atk: 30,
            def: 15,
            spa: 40,
            spd: 20,
            spe: 15
        },
        weight: 1.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'トゲピー': {
        dexNo: 175,
        types: ['フェアリー'],
        abilities: ['はりきり', 'てんのめぐみ', 'きょううん'],
        baseStats: {
            hp: 35,
            atk: 20,
            def: 65,
            spa: 40,
            spd: 65,
            spe: 20
        },
        weight: 1.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'トゲチック': {
        dexNo: 176,
        types: ['フェアリー', 'ひこう'],
        abilities: ['はりきり', 'てんのめぐみ', 'きょううん'],
        baseStats: {
            hp: 55,
            atk: 40,
            def: 85,
            spa: 80,
            spd: 105,
            spe: 40
        },
        weight: 3.2,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ネイティ': {
        dexNo: 177,
        types: ['エスパー', 'ひこう'],
        abilities: ['シンクロ', 'はやおき', 'マジックミラー'],
        baseStats: {
            hp: 40,
            atk: 50,
            def: 45,
            spa: 70,
            spd: 45,
            spe: 70
        },
        weight: 2.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ネイティオ': {
        dexNo: 178,
        types: ['エスパー', 'ひこう'],
        abilities: ['シンクロ', 'はやおき', 'マジックミラー'],
        baseStats: {
            hp: 65,
            atk: 75,
            def: 70,
            spa: 95,
            spd: 70,
            spe: 95
        },
        weight: 15.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'メリープ': {
        dexNo: 179,
        types: ['でんき'],
        abilities: ['せいでんき', '', 'プラス'],
        baseStats: {
            hp: 55,
            atk: 40,
            def: 40,
            spa: 65,
            spd: 45,
            spe: 35
        },
        weight: 7.8,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'モココ': {
        dexNo: 180,
        types: ['でんき'],
        abilities: ['せいでんき', '', 'プラス'],
        baseStats: {
            hp: 70,
            atk: 55,
            def: 55,
            spa: 80,
            spd: 60,
            spe: 45
        },
        weight: 13.3,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'デンリュウ': {
        dexNo: 181,
        types: ['でんき'],
        abilities: ['せいでんき', '', 'プラス'],
        baseStats: {
            hp: 90,
            atk: 75,
            def: 85,
            spa: 115,
            spd: 90,
            spe: 55
        },
        weight: 61.5,
        kind: '一般',
        stage: 3,
        final_stage: 3,
        forms: ['デンリュウ', 'メガデンリュウ'],
        formButtons: ['通常', 'メガ']
    },
    'メガデンリュウ': {
        dexNo: 181,
        types: ['でんき', 'ドラゴン'],
        abilities: ['かたやぶり', '', ''],
        baseStats: {
            hp: 90,
            atk: 95,
            def: 105,
            spa: 165,
            spd: 110,
            spe: 45
        },
        weight: 61.5,
        kind: '一般',
        stage: 'メガ',
        final_stage: 3,
        forms: ['デンリュウ', 'メガデンリュウ'],
        formButtons: ['通常', 'メガ']
    },
    'キレイハナ': {
        dexNo: 182,
        types: ['くさ'],
        abilities: ['ようりょくそ', '', 'いやしのこころ'],
        baseStats: {
            hp: 75,
            atk: 80,
            def: 95,
            spa: 90,
            spd: 100,
            spe: 50
        },
        weight: 5.8,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'マリル': {
        dexNo: 183,
        types: ['みず', 'フェアリー'],
        abilities: ['あついしぼう', 'ちからもち', 'そうしょく'],
        baseStats: {
            hp: 70,
            atk: 20,
            def: 50,
            spa: 20,
            spd: 50,
            spe: 40
        },
        weight: 8.5,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'マリルリ': {
        dexNo: 184,
        types: ['みず', 'フェアリー'],
        abilities: ['あついしぼう', 'ちからもち', 'そうしょく'],
        baseStats: {
            hp: 100,
            atk: 50,
            def: 80,
            spa: 60,
            spd: 80,
            spe: 50
        },
        weight: 28.5,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ウソッキー': {
        dexNo: 185,
        types: ['いわ'],
        abilities: ['がんじょう', 'いしあたま', 'びびり'],
        baseStats: {
            hp: 70,
            atk: 100,
            def: 115,
            spa: 30,
            spd: 65,
            spe: 30
        },
        weight: 38.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ニョロトノ': {
        dexNo: 186,
        types: ['みず'],
        abilities: ['ちょすい', 'しめりけ', 'あめふらし'],
        baseStats: {
            hp: 90,
            atk: 75,
            def: 75,
            spa: 90,
            spd: 100,
            spe: 70
        },
        weight: 33.9,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ハネッコ': {
        dexNo: 187,
        types: ['くさ', 'ひこう'],
        abilities: ['ようりょくそ', 'リーフガード', 'すりぬけ'],
        baseStats: {
            hp: 35,
            atk: 35,
            def: 40,
            spa: 35,
            spd: 55,
            spe: 50
        },
        weight: 0.5,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ポポッコ': {
        dexNo: 188,
        types: ['くさ', 'ひこう'],
        abilities: ['ようりょくそ', 'リーフガード', 'すりぬけ'],
        baseStats: {
            hp: 55,
            atk: 45,
            def: 50,
            spa: 45,
            spd: 65,
            spe: 80
        },
        weight: 1.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ワタッコ': {
        dexNo: 189,
        types: ['くさ', 'ひこう'],
        abilities: ['ようりょくそ', 'リーフガード', 'すりぬけ'],
        baseStats: {
            hp: 75,
            atk: 55,
            def: 70,
            spa: 55,
            spd: 95,
            spe: 110
        },
        weight: 3.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'エイパム': {
        dexNo: 190,
        types: ['ノーマル'],
        abilities: ['にげあし', 'ものひろい', 'スキルリンク'],
        baseStats: {
            hp: 55,
            atk: 70,
            def: 55,
            spa: 40,
            spd: 55,
            spe: 85
        },
        weight: 11.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ヒマナッツ': {
        dexNo: 191,
        types: ['くさ'],
        abilities: ['ようりょくそ', 'サンパワー', 'はやおき'],
        baseStats: {
            hp: 30,
            atk: 30,
            def: 30,
            spa: 30,
            spd: 30,
            spe: 30
        },
        weight: 1.8,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'キマワリ': {
        dexNo: 192,
        types: ['くさ'],
        abilities: ['ようりょくそ', 'サンパワー', 'はやおき'],
        baseStats: {
            hp: 75,
            atk: 75,
            def: 55,
            spa: 105,
            spd: 85,
            spe: 30
        },
        weight: 8.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ヤンヤンマ': {
        dexNo: 193,
        types: ['むし', 'ひこう'],
        abilities: ['かそく', 'ふくがん', 'おみとおし'],
        baseStats: {
            hp: 65,
            atk: 65,
            def: 45,
            spa: 75,
            spd: 45,
            spe: 95
        },
        weight: 38.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ウパー': {
        dexNo: 194,
        types: ['みず', 'じめん'],
        abilities: ['しめりけ', 'ちょすい', 'てんねん'],
        baseStats: {
            hp: 55,
            atk: 45,
            def: 45,
            spa: 25,
            spd: 25,
            spe: 15
        },
        weight: 8.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ヌオー': {
        dexNo: 195,
        types: ['みず', 'じめん'],
        abilities: ['しめりけ', 'ちょすい', 'てんねん'],
        baseStats: {
            hp: 95,
            atk: 85,
            def: 85,
            spa: 65,
            spd: 65,
            spe: 35
        },
        weight: 75.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'エーフィ': {
        dexNo: 196,
        types: ['エスパー'],
        abilities: ['シンクロ', '', 'マジックミラー'],
        baseStats: {
            hp: 65,
            atk: 65,
            def: 60,
            spa: 130,
            spd: 95,
            spe: 110
        },
        weight: 26.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ブラッキー': {
        dexNo: 197,
        types: ['あく'],
        abilities: ['シンクロ', '', 'せいしんりょく'],
        baseStats: {
            hp: 95,
            atk: 65,
            def: 110,
            spa: 60,
            spd: 130,
            spe: 65
        },
        weight: 27.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ヤミカラス': {
        dexNo: 198,
        types: ['あく', 'ひこう'],
        abilities: ['ふみん', 'きょううん', 'いたずらごころ'],
        baseStats: {
            hp: 60,
            atk: 85,
            def: 42,
            spa: 85,
            spd: 42,
            spe: 91
        },
        weight: 2.1,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ヤドキング': {
        dexNo: 199,
        types: ['みず', 'エスパー'],
        abilities: ['どんかん', 'マイペース', 'さいせいりょく'],
        baseStats: {
            hp: 95,
            atk: 75,
            def: 80,
            spa: 100,
            spd: 110,
            spe: 30
        },
        weight: 79.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ムウマ': {
        dexNo: 200,
        types: ['ゴースト'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 60,
            atk: 60,
            def: 60,
            spa: 85,
            spd: 85,
            spe: 85
        },
        weight: 1.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'アンノーン': {
        dexNo: 201,
        types: ['エスパー'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 48,
            atk: 72,
            def: 48,
            spa: 72,
            spd: 48,
            spe: 48
        },
        weight: 5.0,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'ソーナンス': {
        dexNo: 202,
        types: ['エスパー'],
        abilities: ['かげふみ', '', 'テレパシー'],
        baseStats: {
            hp: 190,
            atk: 33,
            def: 58,
            spa: 33,
            spd: 58,
            spe: 33
        },
        weight: 28.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'キリンリキ': {
        dexNo: 203,
        types: ['ノーマル', 'エスパー'],
        abilities: ['せいしんりょく', 'はやおき', 'そうしょく'],
        baseStats: {
            hp: 70,
            atk: 80,
            def: 65,
            spa: 90,
            spd: 65,
            spe: 85
        },
        weight: 41.5,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'クヌギダマ': {
        dexNo: 204,
        types: ['むし'],
        abilities: ['がんじょう', '', 'ぼうじん'],
        baseStats: {
            hp: 50,
            atk: 65,
            def: 90,
            spa: 35,
            spd: 35,
            spe: 15
        },
        weight: 7.2,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'フォレトス': {
        dexNo: 205,
        types: ['むし', 'はがね'],
        abilities: ['がんじょう', '', 'ぼうじん'],
        baseStats: {
            hp: 75,
            atk: 90,
            def: 140,
            spa: 60,
            spd: 60,
            spe: 40
        },
        weight: 125.8,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ノコッチ': {
        dexNo: 206,
        types: ['ノーマル'],
        abilities: ['てんのめぐみ', 'にげあし', 'びびり'],
        baseStats: {
            hp: 100,
            atk: 70,
            def: 70,
            spa: 65,
            spd: 65,
            spe: 45
        },
        weight: 14.0,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'グライガー': {
        dexNo: 207,
        types: ['じめん', 'ひこう'],
        abilities: ['かいりきバサミ', 'すながくれ', 'めんえき'],
        baseStats: {
            hp: 65,
            atk: 75,
            def: 105,
            spa: 35,
            spd: 65,
            spe: 85
        },
        weight: 64.8,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ハガネール': {
        dexNo: 208,
        types: ['はがね', 'じめん'],
        abilities: ['いしあたま', 'がんじょう', 'ちからずく'],
        baseStats: {
            hp: 75,
            atk: 85,
            def: 200,
            spa: 55,
            spd: 65,
            spe: 30
        },
        weight: 400.0,
        kind: '一般',
        stage: 3,
        final_stage: 2,
        forms: ['ハガネール', 'メガハガネール'],
        formButtons: ['通常', 'メガ']
    },
    'メガハガネール': {
        dexNo: 208,
        types: ['はがね', 'じめん'],
        abilities: ['すなのちから', '', ''],
        baseStats: {
            hp: 75,
            atk: 125,
            def: 230,
            spa: 55,
            spd: 95,
            spe: 30
        },
        weight: 740.0,
        kind: '一般',
        stage: 'メガ',
        final_stage: 2,
        forms: ['ハガネール', 'メガハガネール'],
        formButtons: ['通常', 'メガ']
    },
    'ブルー': {
        dexNo: 209,
        types: ['フェアリー'],
        abilities: ['いかく', 'にげあし', 'びびり'],
        baseStats: {
            hp: 60,
            atk: 80,
            def: 50,
            spa: 40,
            spd: 40,
            spe: 30
        },
        weight: 7.8,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'グランブル': {
        dexNo: 210,
        types: ['フェアリー'],
        abilities: ['いかく', 'はやあし', 'びびり'],
        baseStats: {
            hp: 90,
            atk: 120,
            def: 75,
            spa: 60,
            spd: 60,
            spe: 45
        },
        weight: 48.7,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ハリーセン': {
        dexNo: 211,
        types: ['みず', 'どく'],
        abilities: ['どくのトゲ', 'すいすい', 'いかく'],
        baseStats: {
            hp: 65,
            atk: 95,
            def: 75,
            spa: 55,
            spd: 55,
            spe: 85
        },
        weight: 3.9,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'ハッサム': {
        dexNo: 212,
        types: ['むし', 'はがね'],
        abilities: ['むしのしらせ', 'テクニシャン', 'ライトメタル'],
        baseStats: {
            hp: 70,
            atk: 130,
            def: 100,
            spa: 55,
            spd: 80,
            spe: 65
        },
        weight: 118.0,
        kind: '一般',
        stage: 3,
        final_stage: 2,
        forms: ['ハッサム', 'メガハッサム'],
        formButtons: ['通常', 'メガ']
    },
    'メガハッサム': {
        dexNo: 214,
        types: ['むし', 'はがね'],
        abilities: ['テクニシャン', '', ''],
        baseStats: {
            hp: 70,
            atk: 150,
            def: 140,
            spa: 65,
            spd: 100,
            spe: 75
        },
        weight: 125.0,
        kind: '一般',
        stage: 'メガ',
        final_stage: 2,
        forms: ['ハッサム', 'メガハッサム'],
        formButtons: ['通常', 'メガ']
    },
    'ツボツボ': {
        dexNo: 213,
        types: ['むし', 'いわ'],
        abilities: ['がんじょう', 'くいしんぼう', 'あまのじゃく'],
        baseStats: {
            hp: 20,
            atk: 10,
            def: 230,
            spa: 10,
            spd: 230,
            spe: 5
        },
        weight: 20.5,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'ヘラクロス': {
        dexNo: 214,
        types: ['むし', 'かくとう'],
        abilities: ['むしのしらせ', 'こんじょう', 'じしんかじょう'],
        baseStats: {
            hp: 80,
            atk: 125,
            def: 75,
            spa: 40,
            spd: 95,
            spe: 85
        },
        weight: 54.0,
        kind: '一般',
        stage: 1,
        final_stage: 1,
        forms: ['ヘラクロス', 'メガヘラクロス'],
        formButtons: ['通常', 'メガ']
    },
    'メガヘラクロス': {
        dexNo: 214,
        types: ['むし', 'かくとう'],
        abilities: ['スキルリンク', '', ''],
        baseStats: {
            hp: 80,
            atk: 185,
            def: 115,
            spa: 40,
            spd: 105,
            spe: 75
        },
        weight: 62.5,
        kind: '一般',
        stage: 'メガ',
        final_stage: 1,
        forms: ['ヘラクロス', 'メガヘラクロス'],
        formButtons: ['通常', 'メガ']
    },
    'ニューラ': {
        dexNo: 215,
        types: ['あく', 'こおり'],
        abilities: ['せいしんりょく', 'するどいめ', 'わるいてぐせ'],
        baseStats: {
            hp: 55,
            atk: 95,
            def: 55,
            spa: 35,
            spd: 75,
            spe: 115
        },
        weight: 28.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ヒメグマ': {
        dexNo: 216,
        types: ['ノーマル'],
        abilities: ['ものひろい', 'はやあし', 'みつあつめ'],
        baseStats: {
            hp: 60,
            atk: 80,
            def: 50,
            spa: 50,
            spd: 50,
            spe: 40
        },
        weight: 8.8,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'リングマ': {
        dexNo: 217,
        types: ['ノーマル'],
        abilities: ['こんじょう', 'はやあし', 'きんちょうかん'],
        baseStats: {
            hp: 90,
            atk: 130,
            def: 75,
            spa: 75,
            spd: 75,
            spe: 55
        },
        weight: 125.8,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'マグマッグ': {
        dexNo: 218,
        types: ['ほのお'],
        abilities: ['マグマのよろい', 'ほのおのからだ', 'くだけるよろい'],
        baseStats: {
            hp: 40,
            atk: 40,
            def: 40,
            spa: 70,
            spd: 40,
            spe: 20
        },
        weight: 35.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'マグカルゴ': {
        dexNo: 219,
        types: ['ほのお', 'いわ'],
        abilities: ['マグマのよろい', 'ほのおのからだ', 'くだけるよろい'],
        baseStats: {
            hp: 50,
            atk: 50,
            def: 120,
            spa: 80,
            spd: 80,
            spe: 30
        },
        weight: 55.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ウリムー': {
        dexNo: 220,
        types: ['こおり', 'じめん'],
        abilities: ['どんかん', 'ゆきがくれ', 'あついしぼう'],
        baseStats: {
            hp: 50,
            atk: 50,
            def: 40,
            spa: 30,
            spd: 30,
            spe: 50
        },
        weight: 6.5,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'イノムー': {
        dexNo: 221,
        types: ['こおり', 'じめん'],
        abilities: ['どんかん', 'ゆきがくれ', 'あついしぼう'],
        baseStats: {
            hp: 100,
            atk: 100,
            def: 80,
            spa: 60,
            spd: 60,
            spe: 50
        },
        weight: 55.8,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'サニーゴ': {
        dexNo: 222,
        types: ['みず', 'いわ'],
        abilities: ['はりきり', 'しぜんかいふく', 'さいせいりょく'],
        baseStats: {
            hp: 55,
            atk: 55,
            def: 85,
            spa: 65,
            spd: 85,
            spe: 35
        },
        weight: 5.0,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'テッポウオ': {
        dexNo: 223,
        types: ['みず'],
        abilities: ['はりきり', 'スナイパー', 'ムラっけ'],
        baseStats: {
            hp: 35,
            atk: 65,
            def: 35,
            spa: 65,
            spd: 35,
            spe: 65
        },
        weight: 12.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'オクタン': {
        dexNo: 224,
        types: ['みず'],
        abilities: ['きゅうばん', 'スナイパー', 'ムラっけ'],
        baseStats: {
            hp: 75,
            atk: 105,
            def: 75,
            spa: 105,
            spd: 75,
            spe: 45
        },
        weight: 28.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'デリバード': {
        dexNo: 225,
        types: ['こおり', 'ひこう'],
        abilities: ['やるき', 'はりきり', 'ふみん'],
        baseStats: {
            hp: 45,
            atk: 55,
            def: 45,
            spa: 65,
            spd: 45,
            spe: 75
        },
        weight: 16.0,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'マンタイン': {
        dexNo: 226,
        types: ['みず', 'ひこう'],
        abilities: ['すいすい', 'ちょすい', 'みずのベール'],
        baseStats: {
            hp: 65,
            atk: 40,
            def: 70,
            spa: 80,
            spd: 140,
            spe: 70
        },
        weight: 220.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'エアームド': {
        dexNo: 227,
        types: ['はがね', 'ひこう'],
        abilities: ['するどいめ', 'がんじょう', 'くだけるよろい'],
        baseStats: {
            hp: 65,
            atk: 80,
            def: 140,
            spa: 40,
            spd: 70,
            spe: 70
        },
        weight: 50.5,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'デルビル': {
        dexNo: 228,
        types: ['あく', 'ほのお'],
        abilities: ['はやおき', 'もらいび', 'きんちょうかん'],
        baseStats: {
            hp: 45,
            atk: 60,
            def: 30,
            spa: 80,
            spd: 50,
            spe: 65
        },
        weight: 10.8,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ヘルガー': {
        dexNo: 229,
        types: ['あく', 'ほのお'],
        abilities: ['はやおき', 'もらいび', 'きんちょうかん'],
        baseStats: {
            hp: 75,
            atk: 90,
            def: 50,
            spa: 110,
            spd: 80,
            spe: 95
        },
        weight: 35.0,
        kind: '一般',
        stage: 3,
        final_stage: 2,
        forms: ['ヘルガー', 'メガヘルガー'],
        formButtons: ['通常', 'メガ']
    },
    'メガヘルガー': {
        dexNo: 229,
        types: ['あく', 'ほのお'],
        abilities: ['サンパワー', '', ''],
        baseStats: {
            hp: 75,
            atk: 90,
            def: 90,
            spa: 140,
            spd: 90,
            spe: 115
        },
        weight: 49.5,
        kind: '一般',
        stage: 'メガ',
        final_stage: 2,
        forms: ['ヘルガー', 'メガヘルガー'],
        formButtons: ['通常', 'メガ']
    },
    'キングドラ': {
        dexNo: 230,
        types: ['みず', 'ドラゴン'],
        abilities: ['すいすい', 'スナイパー', 'しめりけ'],
        baseStats: {
            hp: 75,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 85
        },
        weight: 152.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ゴマゾウ': {
        dexNo: 231,
        types: ['じめん'],
        abilities: ['ものひろい', '', 'すながくれ'],
        baseStats: {
            hp: 90,
            atk: 60,
            def: 60,
            spa: 40,
            spd: 40,
            spe: 40
        },
        weight: 33.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ドンファン': {
        dexNo: 232,
        types: ['じめん'],
        abilities: ['がんじょう', '', 'すながくれ'],
        baseStats: {
            hp: 90,
            atk: 120,
            def: 120,
            spa: 60,
            spd: 60,
            spe: 50
        },
        weight: 120.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ポリゴン2': {
        dexNo: 233,
        types: ['ノーマル'],
        abilities: ['トレース', 'ダウンロード', 'アナライズ'],
        baseStats: {
            hp: 85,
            atk: 80,
            def: 90,
            spa: 105,
            spd: 95,
            spe: 60
        },
        weight: 32.5,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'オドシシ': {
        dexNo: 234,
        types: ['ノーマル'],
        abilities: ['いかく', 'おみとおし', 'そうしょく'],
        baseStats: {
            hp: 73,
            atk: 95,
            def: 62,
            spa: 85,
            spd: 65,
            spe: 85
        },
        weight: 71.2,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'ドーブル': {
        dexNo: 235,
        types: ['ノーマル'],
        abilities: ['マイペース', 'テクニシャン', 'ムラっけ'],
        baseStats: {
            hp: 55,
            atk: 20,
            def: 35,
            spa: 20,
            spd: 45,
            spe: 75
        },
        weight: 58.0,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'バルキー': {
        dexNo: 236,
        types: ['かくとう'],
        abilities: ['こんじょう', 'ふくつのこころ', 'やるき'],
        baseStats: {
            hp: 35,
            atk: 35,
            def: 35,
            spa: 35,
            spd: 35,
            spe: 35
        },
        weight: 21.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'カポエラー': {
        dexNo: 237,
        types: ['かくとう'],
        abilities: ['いかく', 'テクニシャン', 'ふくつのこころ'],
        baseStats: {
            hp: 50,
            atk: 95,
            def: 95,
            spa: 35,
            spd: 110,
            spe: 70
        },
        weight: 48.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ムチュール': {
        dexNo: 238,
        types: ['こおり', 'エスパー'],
        abilities: ['どんかん', 'よちむ', 'うるおいボディ'],
        baseStats: {
            hp: 45,
            atk: 30,
            def: 15,
            spa: 85,
            spd: 65,
            spe: 65
        },
        weight: 6.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'エレキッド': {
        dexNo: 239,
        types: ['でんき'],
        abilities: ['せいでんき', '', 'やるき'],
        baseStats: {
            hp: 45,
            atk: 63,
            def: 37,
            spa: 65,
            spd: 55,
            spe: 95
        },
        weight: 23.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ブビィ': {
        dexNo: 240,
        types: ['ほのお'],
        abilities: ['ほのおのからだ', '', 'やるき'],
        baseStats: {
            hp: 45,
            atk: 75,
            def: 37,
            spa: 70,
            spd: 55,
            spe: 83
        },
        weight: 21.4,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ミルタンク': {
        dexNo: 241,
        types: ['ノーマル'],
        abilities: ['あついしぼう', 'きもったま', 'そうしょく'],
        baseStats: {
            hp: 95,
            atk: 80,
            def: 105,
            spa: 40,
            spd: 70,
            spe: 100
        },
        weight: 75.5,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'ハピナス': {
        dexNo: 242,
        types: ['ノーマル'],
        abilities: ['しぜんかいふく', 'てんのめぐみ', 'いやしのこころ'],
        baseStats: {
            hp: 255,
            atk: 10,
            def: 10,
            spa: 75,
            spd: 135,
            spe: 55
        },
        weight: 46.8,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ライコウ': {
        dexNo: 243,
        types: ['でんき'],
        abilities: ['プレッシャー', '', ''],
        baseStats: {
            hp: 90,
            atk: 85,
            def: 75,
            spa: 115,
            spd: 100,
            spe: 115
        },
        weight: 178.0,
        kind: '準伝',
        stage: 1,
        final_stage: 1
    },
    'エンテイ': {
        dexNo: 244,
        types: ['ほのお'],
        abilities: ['プレッシャー', '', ''],
        baseStats: {
            hp: 115,
            atk: 115,
            def: 85,
            spa: 90,
            spd: 75,
            spe: 100
        },
        weight: 198.0,
        kind: '準伝',
        stage: 1,
        final_stage: 1
    },
    'スイクン': {
        dexNo: 245,
        types: ['みず'],
        abilities: ['プレッシャー', '', ''],
        baseStats: {
            hp: 100,
            atk: 75,
            def: 115,
            spa: 90,
            spd: 115,
            spe: 85
        },
        weight: 187.0,
        kind: '準伝',
        stage: 1,
        final_stage: 1
    },
    'ヨーギラス': {
        dexNo: 246,
        types: ['いわ', 'じめん'],
        abilities: ['こんじょう', '', 'すながくれ'],
        baseStats: {
            hp: 50,
            atk: 64,
            def: 50,
            spa: 45,
            spd: 50,
            spe: 41
        },
        weight: 72.0,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'サナギラス': {
        dexNo: 247,
        types: ['いわ', 'じめん'],
        abilities: ['だっぴ', '', ''],
        baseStats: {
            hp: 70,
            atk: 84,
            def: 70,
            spa: 65,
            spd: 70,
            spe: 51
        },
        weight: 152.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'バンギラス': {
        dexNo: 248,
        types: ['いわ', 'あく'],
        abilities: ['すなおこし', '', 'きんちょうかん'],
        baseStats: {
            hp: 100,
            atk: 134,
            def: 110,
            spa: 95,
            spd: 100,
            spe: 61
        },
        weight: 202.0,
        kind: '一般',
        stage: 3,
        final_stage: 3,
        forms: ['バンギラス', 'メガバンギラス'],
        formButtons: ['通常', 'メガ']
    },
    'メガバンギラス': {
        dexNo: 248,
        types: ['いわ', 'あく'],
        abilities: ['すなおこし', '', ''],
        baseStats: {
            hp: 100,
            atk: 164,
            def: 150,
            spa: 95,
            spd: 120,
            spe: 71
        },
        weight: 255.0,
        kind: '一般',
        stage: 'メガ',
        final_stage: 3,
        forms: ['バンギラス', 'メガバンギラス'],
        formButtons: ['通常', 'メガ']
    },
    'ルギア': {
        dexNo: 249,
        types: ['エスパー', 'ひこう'],
        abilities: ['プレッシャー', '', 'マルチスケイル'],
        baseStats: {
            hp: 106,
            atk: 90,
            def: 130,
            spa: 90,
            spd: 154,
            spe: 110
        },
        weight: 216.0,
        kind: '禁伝',
        stage: 1,
        final_stage: 1
    },
    'ホウオウ': {
        dexNo: 250,
        types: ['ほのお', 'ひこう'],
        abilities: ['プレッシャー', '', 'さいせいりょく'],
        baseStats: {
            hp: 106,
            atk: 130,
            def: 90,
            spa: 110,
            spd: 154,
            spe: 90
        },
        weight: 199.0,
        kind: '禁伝',
        stage: 1,
        final_stage: 1
    },
    'セレビィ': {
        dexNo: 251,
        types: ['エスパー', 'くさ'],
        abilities: ['しぜんかいふく', '', ''],
        baseStats: {
            hp: 100,
            atk: 100,
            def: 100,
            spa: 100,
            spd: 100,
            spe: 100
        },
        weight: 5.0,
        kind: '幻',
        stage: 1,
        final_stage: 1
    },
    'キモリ': {
        dexNo: 252,
        types: ['くさ'],
        abilities: ['しんりょく', '', 'かるわざ'],
        baseStats: {
            hp: 40,
            atk: 45,
            def: 35,
            spa: 65,
            spd: 55,
            spe: 70
        },
        weight: 5.0,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ジュプトル': {
        dexNo: 253,
        types: ['くさ'],
        abilities: ['しんりょく', '', 'かるわざ'],
        baseStats: {
            hp: 50,
            atk: 65,
            def: 45,
            spa: 85,
            spd: 65,
            spe: 95
        },
        weight: 21.6,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ジュカイン': {
        dexNo: 254,
        types: ['くさ'],
        abilities: ['しんりょく', '', 'かるわざ'],
        baseStats: {
            hp: 70,
            atk: 85,
            def: 65,
            spa: 105,
            spd: 85,
            spe: 120
        },
        weight: 52.2,
        kind: '一般',
        stage: 3,
        final_stage: 3,
        forms: ['ジュカイン', 'メガジュカイン'],
        formButtons: ['通常', 'メガ']
    },
    'メガジュカイン': {
        dexNo: 254,
        types: ['くさ', 'ドラゴン'],
        abilities: ['ひらいしん', '', ''],
        baseStats: {
            hp: 70,
            atk: 110,
            def: 75,
            spa: 145,
            spd: 85,
            spe: 145
        },
        weight: 55.2,
        kind: '一般',
        stage: 'メガ',
        final_stage: 3,
        forms: ['ジュカイン', 'メガジュカイン'],
        formButtons: ['通常', 'メガ']
    },
    'アチャモ': {
        dexNo: 255,
        types: ['ほのお'],
        abilities: ['もうか', '', 'かそく'],
        baseStats: {
            hp: 45,
            atk: 60,
            def: 40,
            spa: 70,
            spd: 50,
            spe: 45
        },
        weight: 2.5,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ワカシャモ': {
        dexNo: 256,
        types: ['ほのお', 'かくとう'],
        abilities: ['もうか', '', 'かそく'],
        baseStats: {
            hp: 60,
            atk: 85,
            def: 60,
            spa: 85,
            spd: 60,
            spe: 55
        },
        weight: 19.5,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'バシャーモ': {
        dexNo: 257,
        types: ['ほのお', 'かくとう'],
        abilities: ['もうか', '', 'かそく'],
        baseStats: {
            hp: 80,
            atk: 120,
            def: 70,
            spa: 110,
            spd: 70,
            spe: 80
        },
        weight: 52.0,
        kind: '一般',
        stage: 3,
        final_stage: 3,
        forms: ['バシャーモ', 'メガバシャーモ'],
        formButtons: ['通常', 'メガ']
    },
    'メガバシャーモ': {
        dexNo: 257,
        types: ['ほのお', 'かくとう'],
        abilities: ['かそく', '', ''],
        baseStats: {
            hp: 80,
            atk: 160,
            def: 80,
            spa: 130,
            spd: 80,
            spe: 100
        },
        weight: 52.0,
        kind: '一般',
        stage: 'メガ',
        final_stage: 3,
        forms: ['バシャーモ', 'メガバシャーモ'],
        formButtons: ['通常', 'メガ']
    },
    'ミズゴロウ': {
        dexNo: 258,
        types: ['みず'],
        abilities: ['げきりゅう', '', 'しめりけ'],
        baseStats: {
            hp: 50,
            atk: 70,
            def: 50,
            spa: 50,
            spd: 50,
            spe: 40
        },
        weight: 7.6,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ヌマクロー': {
        dexNo: 259,
        types: ['みず', 'じめん'],
        abilities: ['げきりゅう', '', 'しめりけ'],
        baseStats: {
            hp: 70,
            atk: 85,
            def: 70,
            spa: 60,
            spd: 70,
            spe: 50
        },
        weight: 28.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ラグラージ': {
        dexNo: 260,
        types: ['みず', 'じめん'],
        abilities: ['げきりゅう', '', 'しめりけ'],
        baseStats: {
            hp: 100,
            atk: 110,
            def: 90,
            spa: 85,
            spd: 90,
            spe: 60
        },
        weight: 81.9,
        kind: '一般',
        stage: 3,
        final_stage: 3,
        forms: ['ラグラージ', 'メガラグラージ'],
        formButtons: ['通常', 'メガ']
    },
    'メガラグラージ': {
        dexNo: 260,
        types: ['みず', 'じめん'],
        abilities: ['すいすい', '', ''],
        baseStats: {
            hp: 100,
            atk: 150,
            def: 110,
            spa: 95,
            spd: 110,
            spe: 70
        },
        weight: 102.0,
        kind: '一般',
        stage: 'メガ',
        final_stage: 3,
        forms: ['ラグラージ', 'メガラグラージ'],
        formButtons: ['通常', 'メガ']
    },
    'ポチエナ': {
        dexNo: 261,
        types: ['あく'],
        abilities: ['にげあし', 'はやあし', 'びびり'],
        baseStats: {
            hp: 35,
            atk: 55,
            def: 35,
            spa: 30,
            spd: 30,
            spe: 35
        },
        weight: 13.6,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'グラエナ': {
        dexNo: 262,
        types: ['あく'],
        abilities: ['いかく', 'はやあし', 'じしんかじょう'],
        baseStats: {
            hp: 70,
            atk: 90,
            def: 70,
            spa: 60,
            spd: 60,
            spe: 70
        },
        weight: 37.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ジグザグマ': {
        dexNo: 263,
        types: ['ノーマル'],
        abilities: ['ものひろい', 'くいしんぼう', 'はやあし'],
        baseStats: {
            hp: 38,
            atk: 30,
            def: 41,
            spa: 30,
            spd: 41,
            spe: 60
        },
        weight: 17.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'マッスグマ': {
        dexNo: 264,
        types: ['ノーマル'],
        abilities: ['ものひろい', 'くいしんぼう', 'はやあし'],
        baseStats: {
            hp: 78,
            atk: 70,
            def: 61,
            spa: 50,
            spd: 61,
            spe: 100
        },
        weight: 32.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ケムッソ': {
        dexNo: 265,
        types: ['むし'],
        abilities: ['りんぷん', '', 'にげあし'],
        baseStats: {
            hp: 45,
            atk: 45,
            def: 35,
            spa: 20,
            spd: 30,
            spe: 20
        },
        weight: 3.6,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'カラサリス': {
        dexNo: 266,
        types: ['むし'],
        abilities: ['だっぴ', '', ''],
        baseStats: {
            hp: 50,
            atk: 35,
            def: 55,
            spa: 25,
            spd: 25,
            spe: 15
        },
        weight: 10.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'アゲハント': {
        dexNo: 267,
        types: ['むし', 'ひこう'],
        abilities: ['むしのしらせ', '', 'とうそうしん'],
        baseStats: {
            hp: 60,
            atk: 70,
            def: 50,
            spa: 100,
            spd: 50,
            spe: 65
        },
        weight: 28.4,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'マユルド': {
        dexNo: 268,
        types: ['むし'],
        abilities: ['だっぴ', '', ''],
        baseStats: {
            hp: 50,
            atk: 35,
            def: 55,
            spa: 25,
            spd: 25,
            spe: 15
        },
        weight: 11.5,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ドクケイル': {
        dexNo: 269,
        types: ['むし', 'どく'],
        abilities: ['りんぷん', '', 'ふくがん'],
        baseStats: {
            hp: 60,
            atk: 50,
            def: 70,
            spa: 50,
            spd: 90,
            spe: 65
        },
        weight: 31.6,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ハスボー': {
        dexNo: 270,
        types: ['みず', 'くさ'],
        abilities: ['すいすい', 'あめうけざら', 'マイペース'],
        baseStats: {
            hp: 40,
            atk: 30,
            def: 30,
            spa: 40,
            spd: 50,
            spe: 30
        },
        weight: 2.6,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ハスブレロ': {
        dexNo: 271,
        types: ['みず', 'くさ'],
        abilities: ['すいすい', 'あめうけざら', 'マイペース'],
        baseStats: {
            hp: 60,
            atk: 50,
            def: 50,
            spa: 60,
            spd: 70,
            spe: 50
        },
        weight: 32.5,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ルンパッパ': {
        dexNo: 272,
        types: ['みず', 'くさ'],
        abilities: ['すいすい', 'あめうけざら', 'マイペース'],
        baseStats: {
            hp: 80,
            atk: 70,
            def: 70,
            spa: 90,
            spd: 100,
            spe: 70
        },
        weight: 55.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'タネボー': {
        dexNo: 273,
        types: ['くさ'],
        abilities: ['ようりょくそ', 'はやおき', 'わるいてぐせ'],
        baseStats: {
            hp: 40,
            atk: 40,
            def: 50,
            spa: 30,
            spd: 30,
            spe: 30
        },
        weight: 4.0,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'コノハナ': {
        dexNo: 274,
        types: ['くさ', 'あく'],
        abilities: ['ようりょくそ', 'はやおき', 'わるいてぐせ'],
        baseStats: {
            hp: 70,
            atk: 70,
            def: 40,
            spa: 60,
            spd: 40,
            spe: 60
        },
        weight: 28.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ダーテング': {
        dexNo: 275,
        types: ['くさ', 'あく'],
        abilities: ['ようりょくそ', '', 'わるいてぐせ'],
        baseStats: {
            hp: 90,
            atk: 100,
            def: 60,
            spa: 90,
            spd: 60,
            spe: 80
        },
        weight: 59.6,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'スバメ': {
        dexNo: 276,
        types: ['ノーマル', 'ひこう'],
        abilities: ['こんじょう', '', 'きもったま'],
        baseStats: {
            hp: 40,
            atk: 55,
            def: 30,
            spa: 30,
            spd: 30,
            spe: 85
        },
        weight: 2.3,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'オオスバメ': {
        dexNo: 277,
        types: ['ノーマル', 'ひこう'],
        abilities: ['こんじょう', '', 'きもったま'],
        baseStats: {
            hp: 60,
            atk: 85,
            def: 60,
            spa: 50,
            spd: 50,
            spe: 125
        },
        weight: 19.8,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'キャモメ': {
        dexNo: 278,
        types: ['みず', 'ひこう'],
        abilities: ['するどいめ', '', 'あめうけざら'],
        baseStats: {
            hp: 40,
            atk: 30,
            def: 30,
            spa: 55,
            spd: 30,
            spe: 85
        },
        weight: 9.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ペリッパー': {
        dexNo: 279,
        types: ['みず', 'ひこう'],
        abilities: ['するどいめ', '', 'あめうけざら'],
        baseStats: {
            hp: 60,
            atk: 50,
            def: 100,
            spa: 85,
            spd: 70,
            spe: 65
        },
        weight: 28.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ラルトス': {
        dexNo: 280,
        types: ['エスパー', 'フェアリー'],
        abilities: ['シンクロ', 'トレース', 'テレパシー'],
        baseStats: {
            hp: 28,
            atk: 25,
            def: 25,
            spa: 45,
            spd: 35,
            spe: 40
        },
        weight: 6.6,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'キルリア': {
        dexNo: 281,
        types: ['エスパー', 'フェアリー'],
        abilities: ['シンクロ', 'トレース', 'テレパシー'],
        baseStats: {
            hp: 38,
            atk: 35,
            def: 35,
            spa: 65,
            spd: 55,
            spe: 50
        },
        weight: 20.2,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'サーナイト': {
        dexNo: 282,
        types: ['エスパー', 'フェアリー'],
        abilities: ['シンクロ', 'トレース', 'テレパシー'],
        baseStats: {
            hp: 68,
            atk: 65,
            def: 65,
            spa: 125,
            spd: 115,
            spe: 80
        },
        weight: 48.4,
        kind: '一般',
        stage: 3,
        final_stage: 3,
        forms: ['サーナイト', 'メガサーナイト'],
        formButtons: ['通常', 'メガ']
    },
    'メガサーナイト': {
        dexNo: 282,
        types: ['エスパー', 'フェアリー'],
        abilities: ['フェアリースキン', '', ''],
        baseStats: {
            hp: 68,
            atk: 85,
            def: 65,
            spa: 165,
            spd: 135,
            spe: 100
        },
        weight: 48.4,
        kind: '一般',
        stage: 'メガ',
        final_stage: 3,
        forms: ['サーナイト', 'メガサーナイト'],
        formButtons: ['通常', 'メガ']
    },
    'アメタマ': {
        dexNo: 283,
        types: ['むし', 'みず'],
        abilities: ['すいすい', '', 'あめうけざら'],
        baseStats: {
            hp: 40,
            atk: 30,
            def: 32,
            spa: 50,
            spd: 52,
            spe: 65
        },
        weight: 1.7,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'アメモース': {
        dexNo: 284,
        types: ['むし', 'ひこう'],
        abilities: ['いかく', '', 'きんちょうかん'],
        baseStats: {
            hp: 70,
            atk: 60,
            def: 62,
            spa: 80,
            spd: 82,
            spe: 60
        },
        weight: 3.6,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'キノココ': {
        dexNo: 285,
        types: ['くさ'],
        abilities: ['ほうし', 'ポイズンヒール', 'はやあし'],
        baseStats: {
            hp: 60,
            atk: 40,
            def: 60,
            spa: 40,
            spd: 60,
            spe: 35
        },
        weight: 4.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'キノガッサ': {
        dexNo: 286,
        types: ['くさ', 'かくとう'],
        abilities: ['ほうし', 'ポイズンヒール', 'テクニシャン'],
        baseStats: {
            hp: 60,
            atk: 130,
            def: 80,
            spa: 60,
            spd: 60,
            spe: 70
        },
        weight: 39.2,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ナマケロ': {
        dexNo: 287,
        types: ['ノーマル'],
        abilities: ['なまけ', '', ''],
        baseStats: {
            hp: 60,
            atk: 60,
            def: 60,
            spa: 35,
            spd: 35,
            spe: 30
        },
        weight: 24.0,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ヤルキモノ': {
        dexNo: 288,
        types: ['ノーマル'],
        abilities: ['やるき', '', ''],
        baseStats: {
            hp: 80,
            atk: 80,
            def: 80,
            spa: 55,
            spd: 55,
            spe: 90
        },
        weight: 46.5,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ケッキング': {
        dexNo: 289,
        types: ['ノーマル'],
        abilities: ['なまけ', '', ''],
        baseStats: {
            hp: 150,
            atk: 160,
            def: 100,
            spa: 95,
            spd: 65,
            spe: 100
        },
        weight: 130.5,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ツチニン': {
        dexNo: 290,
        types: ['むし', 'じめん'],
        abilities: ['ふくがん', '', 'にげあし'],
        baseStats: {
            hp: 31,
            atk: 45,
            def: 90,
            spa: 30,
            spd: 30,
            spe: 40
        },
        weight: 5.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'テッカニン': {
        dexNo: 291,
        types: ['むし', 'ひこう'],
        abilities: ['かそく', '', 'すりぬけ'],
        baseStats: {
            hp: 61,
            atk: 90,
            def: 45,
            spa: 50,
            spd: 50,
            spe: 160
        },
        weight: 12.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ヌケニン': {
        dexNo: 292,
        types: ['むし', 'ゴースト'],
        abilities: ['ふしぎなまもり', '', ''],
        baseStats: {
            hp: 1,
            atk: 90,
            def: 45,
            spa: 30,
            spd: 30,
            spe: 40
        },
        weight: 1.2,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ゴニョニョ': {
        dexNo: 293,
        types: ['ノーマル'],
        abilities: ['ぼうおん', '', 'びびり'],
        baseStats: {
            hp: 64,
            atk: 51,
            def: 23,
            spa: 51,
            spd: 23,
            spe: 28
        },
        weight: 16.3,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ドゴーム': {
        dexNo: 294,
        types: ['ノーマル'],
        abilities: ['ぼうおん', '', 'きもったま'],
        baseStats: {
            hp: 84,
            atk: 71,
            def: 43,
            spa: 71,
            spd: 43,
            spe: 48
        },
        weight: 40.5,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'バクオング': {
        dexNo: 295,
        types: ['ノーマル'],
        abilities: ['ぼうおん', '', 'きもったま'],
        baseStats: {
            hp: 104,
            atk: 91,
            def: 63,
            spa: 91,
            spd: 73,
            spe: 68
        },
        weight: 84.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'マクノシタ': {
        dexNo: 296,
        types: ['かくとう'],
        abilities: ['あついしぼう', 'こんじょう', 'ちからずく'],
        baseStats: {
            hp: 72,
            atk: 60,
            def: 30,
            spa: 20,
            spd: 30,
            spe: 25
        },
        weight: 86.4,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ハリテヤマ': {
        dexNo: 297,
        types: ['かくとう'],
        abilities: ['あついしぼう', 'こんじょう', 'ちからずく'],
        baseStats: {
            hp: 144,
            atk: 120,
            def: 60,
            spa: 40,
            spd: 60,
            spe: 50
        },
        weight: 253.8,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ルリリ': {
        dexNo: 298,
        types: ['フェアリー'],
        abilities: ['あついしぼう', 'ちからもち', 'そうしょく'],
        baseStats: {
            hp: 50,
            atk: 20,
            def: 40,
            spa: 20,
            spd: 40,
            spe: 20
        },
        weight: 2.0,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ノズパス': {
        dexNo: 299,
        types: ['いわ'],
        abilities: ['がんじょう', 'じりょく', 'すなのちから'],
        baseStats: {
            hp: 30,
            atk: 45,
            def: 135,
            spa: 45,
            spd: 90,
            spe: 30
        },
        weight: 97.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'エネコ': {
        dexNo: 300,
        types: ['ノーマル'],
        abilities: ['メロメロボディ', 'ノーマルスキン', 'ミラクルスキン'],
        baseStats: {
            hp: 50,
            atk: 45,
            def: 45,
            spa: 35,
            spd: 35,
            spe: 50
        },
        weight: 11.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'エネコロロ': {
        dexNo: 301,
        types: ['ノーマル'],
        abilities: ['メロメロボディ', 'ノーマルスキン', 'ミラクルスキン'],
        baseStats: {
            hp: 70,
            atk: 65,
            def: 65,
            spa: 55,
            spd: 55,
            spe: 70
        },
        weight: 32.6,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ヤミラミ': {
        dexNo: 302,
        types: ['あく', 'ゴースト'],
        abilities: ['するどいめ', 'あとだし', 'いたずらごころ'],
        baseStats: {
            hp: 50,
            atk: 75,
            def: 75,
            spa: 65,
            spd: 65,
            spe: 50
        },
        weight: 11.0,
        kind: '一般',
        stage: 1,
        final_stage: 1,
        forms: ['ヤミラミ', 'メガヤミラミ'],
        formButtons: ['通常', 'メガ']
    },
    'メガヤミラミ': {
        dexNo: 302,
        types: ['あく', 'ゴースト'],
        abilities: ['マジックミラー', '', ''],
        baseStats: {
            hp: 50,
            atk: 85,
            def: 125,
            spa: 85,
            spd: 115,
            spe: 20
        },
        weight: 161.0,
        kind: '一般',
        stage: 'メガ',
        final_stage: 1,
        forms: ['ヤミラミ', 'メガヤミラミ'],
        formButtons: ['通常', 'メガ']
    },
    'クチート': {
        dexNo: 303,
        types: ['はがね', 'フェアリー'],
        abilities: ['かいりきバサミ', 'いかく', 'ちからずく'],
        baseStats: {
            hp: 50,
            atk: 85,
            def: 85,
            spa: 55,
            spd: 55,
            spe: 50
        },
        weight: 11.5,
        kind: '一般',
        stage: 1,
        final_stage: 1,
        forms: ['クチート', 'メガクチート'],
        formButtons: ['通常', 'メガ']
    },
    'メガクチート': {
        dexNo: 303,
        types: ['はがね', 'フェアリー'],
        abilities: ['ちからもち', '', ''],
        baseStats: {
            hp: 50,
            atk: 105,
            def: 125,
            spa: 55,
            spd: 95,
            spe: 50
        },
        weight: 23.5,
        kind: '一般',
        stage: 'メガ',
        final_stage: 1,
        forms: ['クチート', 'メガクチート'],
        formButtons: ['通常', 'メガ']
    },
    'ココドラ': {
        dexNo: 304,
        types: ['はがね', 'いわ'],
        abilities: ['がんじょう', 'いしあたま', 'ヘヴィメタル'],
        baseStats: {
            hp: 50,
            atk: 70,
            def: 100,
            spa: 40,
            spd: 40,
            spe: 30
        },
        weight: 60.0,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'コドラ': {
        dexNo: 305,
        types: ['はがね', 'いわ'],
        abilities: ['がんじょう', 'いしあたま', 'ヘヴィメタル'],
        baseStats: {
            hp: 60,
            atk: 90,
            def: 140,
            spa: 50,
            spd: 50,
            spe: 40
        },
        weight: 120.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ボスゴドラ': {
        dexNo: 306,
        types: ['はがね', 'いわ'],
        abilities: ['がんじょう', 'いしあたま', 'ヘヴィメタル'],
        baseStats: {
            hp: 70,
            atk: 110,
            def: 180,
            spa: 60,
            spd: 60,
            spe: 50
        },
        weight: 360.0,
        kind: '一般',
        stage: 3,
        final_stage: 3,
        forms: ['ボスゴドラ', 'メガボスゴドラ'],
        formButtons: ['通常', 'メガ']
    },
    'メガボスゴドラ': {
        dexNo: 306,
        types: ['はがね'],
        abilities: ['フィルター', '', ''],
        baseStats: {
            hp: 70,
            atk: 140,
            def: 230,
            spa: 60,
            spd: 80,
            spe: 50
        },
        weight: 395.0,
        kind: '一般',
        stage: 'メガ',
        final_stage: 3,
        forms: ['ボスゴドラ', 'メガボスゴドラ'],
        formButtons: ['通常', 'メガ']
    },
    'アサナン': {
        dexNo: 307,
        types: ['かくとう', 'エスパー'],
        abilities: ['ヨガパワー', '', 'テレパシー'],
        baseStats: {
            hp: 30,
            atk: 40,
            def: 55,
            spa: 40,
            spd: 55,
            spe: 60
        },
        weight: 11.2,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'チャーレム': {
        dexNo: 308,
        types: ['かくとう', 'エスパー'],
        abilities: ['ヨガパワー', '', 'テレパシー'],
        baseStats: {
            hp: 60,
            atk: 60,
            def: 75,
            spa: 60,
            spd: 75,
            spe: 80
        },
        weight: 31.5,
        kind: '一般',
        stage: 3,
        final_stage: 2,
        forms: ['チャーレム', 'メガチャーレム'],
        formButtons: ['通常', 'メガ']
    },
    'メガチャーレム': {
        dexNo: 308,
        types: ['かくとう', 'エスパー'],
        abilities: ['ヨガパワー', '', ''],
        baseStats: {
            hp: 60,
            atk: 100,
            def: 85,
            spa: 80,
            spd: 85,
            spe: 100
        },
        weight: 31.5,
        kind: '一般',
        stage: 'メガ',
        final_stage: 2,
        forms: ['チャーレム', 'メガチャーレム'],
        formButtons: ['通常', 'メガ']
    },
    'ラクライ': {
        dexNo: 309,
        types: ['でんき'],
        abilities: ['せいでんき', 'ひらいしん', 'マイナス'],
        baseStats: {
            hp: 40,
            atk: 45,
            def: 40,
            spa: 65,
            spd: 40,
            spe: 65
        },
        weight: 15.2,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ライボルト': {
        dexNo: 310,
        types: ['でんき'],
        abilities: ['せいでんき', 'ひらいしん', 'マイナス'],
        baseStats: {
            hp: 70,
            atk: 75,
            def: 60,
            spa: 105,
            spd: 60,
            spe: 105
        },
        weight: 40.2,
        kind: '一般',
        stage: 3,
        final_stage: 2,
        forms: ['ライボルト', 'メガライボルト'],
        formButtons: ['通常', 'メガ']
    },
    'メガライボルト': {
        dexNo: 310,
        types: ['でんき'],
        abilities: ['いかく', '', ''],
        baseStats: {
            hp: 70,
            atk: 75,
            def: 80,
            spa: 135,
            spd: 80,
            spe: 135
        },
        weight: 44.0,
        kind: '一般',
        stage: 'メガ',
        final_stage: 2,
        forms: ['ライボルト', 'メガライボルト'],
        formButtons: ['通常', 'メガ']
    },
    'プラスル': {
        dexNo: 311,
        types: ['でんき'],
        abilities: ['プラス', '', 'ひらいしん'],
        baseStats: {
            hp: 60,
            atk: 50,
            def: 40,
            spa: 85,
            spd: 75,
            spe: 95
        },
        weight: 4.2,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'マイナン': {
        dexNo: 312,
        types: ['でんき'],
        abilities: ['マイナス', '', 'ちくでん'],
        baseStats: {
            hp: 60,
            atk: 40,
            def: 50,
            spa: 75,
            spd: 85,
            spe: 95
        },
        weight: 4.2,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'バルビート': {
        dexNo: 313,
        types: ['むし'],
        abilities: ['はっこう', 'むしのしらせ', 'いたずらごころ'],
        baseStats: {
            hp: 65,
            atk: 73,
            def: 55,
            spa: 47,
            spd: 75,
            spe: 85
        },
        weight: 17.7,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'イルミーゼ': {
        dexNo: 314,
        types: ['むし'],
        abilities: ['どんかん', 'いろめがね', 'いたずらごころ'],
        baseStats: {
            hp: 65,
            atk: 47,
            def: 55,
            spa: 73,
            spd: 75,
            spe: 85
        },
        weight: 17.7,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'ロゼリア': {
        dexNo: 315,
        types: ['くさ', 'どく'],
        abilities: ['しぜんかいふく', 'どくのトゲ', 'リーフガード'],
        baseStats: {
            hp: 50,
            atk: 60,
            def: 45,
            spa: 100,
            spd: 80,
            spe: 65
        },
        weight: 2.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ゴクリン': {
        dexNo: 316,
        types: ['どく'],
        abilities: ['ヘドロえき', 'ねんちゃく', 'くいしんぼう'],
        baseStats: {
            hp: 70,
            atk: 43,
            def: 53,
            spa: 43,
            spd: 53,
            spe: 40
        },
        weight: 10.3,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'マルノーム': {
        dexNo: 317,
        types: ['どく'],
        abilities: ['ヘドロえき', 'ねんちゃく', 'くいしんぼう'],
        baseStats: {
            hp: 100,
            atk: 73,
            def: 83,
            spa: 73,
            spd: 83,
            spe: 55
        },
        weight: 80.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'キバニア': {
        dexNo: 318,
        types: ['みず', 'あく'],
        abilities: ['さめはだ', '', 'かそく'],
        baseStats: {
            hp: 45,
            atk: 90,
            def: 20,
            spa: 65,
            spd: 20,
            spe: 65
        },
        weight: 20.8,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'サメハダー': {
        dexNo: 319,
        types: ['みず', 'あく'],
        abilities: ['さめはだ', '', 'かそく'],
        baseStats: {
            hp: 70,
            atk: 120,
            def: 40,
            spa: 95,
            spd: 40,
            spe: 95
        },
        weight: 88.8,
        kind: '一般',
        stage: 3,
        final_stage: 2,
        forms: ['サメハダー', 'メガサメハダー'],
        formButtons: ['通常', 'メガ']
    },
    'メガサメハダー': {
        dexNo: 319,
        types: ['みず', 'あく'],
        abilities: ['がんじょうあご', '', ''],
        baseStats: {
            hp: 70,
            atk: 140,
            def: 70,
            spa: 110,
            spd: 65,
            spe: 105
        },
        weight: 130.3,
        kind: '一般',
        stage: 'メガ',
        final_stage: 2,
        forms: ['サメハダー', 'メガサメハダー'],
        formButtons: ['通常', 'メガ']
    },
    'ホエルコ': {
        dexNo: 320,
        types: ['みず'],
        abilities: ['みずのベール', 'どんかん', 'プレッシャー'],
        baseStats: {
            hp: 130,
            atk: 70,
            def: 35,
            spa: 70,
            spd: 35,
            spe: 60
        },
        weight: 130.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ホエルオー': {
        dexNo: 321,
        types: ['みず'],
        abilities: ['みずのベール', 'どんかん', 'プレッシャー'],
        baseStats: {
            hp: 170,
            atk: 90,
            def: 45,
            spa: 90,
            spd: 45,
            spe: 60
        },
        weight: 398.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ドンメル': {
        dexNo: 322,
        types: ['ほのお', 'じめん'],
        abilities: ['どんかん', 'たんじゅん', 'マイペース'],
        baseStats: {
            hp: 60,
            atk: 60,
            def: 40,
            spa: 65,
            spd: 45,
            spe: 35
        },
        weight: 24.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'バクーダ': {
        dexNo: 323,
        types: ['ほのお', 'じめん'],
        abilities: ['マグマのよろい', 'ハードロック', 'いかりのつぼ'],
        baseStats: {
            hp: 70,
            atk: 100,
            def: 70,
            spa: 105,
            spd: 75,
            spe: 40
        },
        weight: 220.0,
        kind: '一般',
        stage: 3,
        final_stage: 2,
        forms: ['バクーダ', 'メガバクーダ'],
        formButtons: ['通常', 'メガ']
    },
    'メガバクーダ': {
        dexNo: 323,
        types: ['ほのお', 'じめん'],
        abilities: ['ちからずく', '', ''],
        baseStats: {
            hp: 70,
            atk: 120,
            def: 100,
            spa: 145,
            spd: 105,
            spe: 20
        },
        weight: 320.5,
        kind: '一般',
        stage: 'メガ',
        final_stage: 2,
        forms: ['バクーダ', 'メガバクーダ'],
        formButtons: ['通常', 'メガ']
    },
    'コータス': {
        dexNo: 324,
        types: ['ほのお'],
        abilities: ['しろいけむり', 'ひでり', 'シェルアーマー'],
        baseStats: {
            hp: 70,
            atk: 85,
            def: 140,
            spa: 85,
            spd: 70,
            spe: 20
        },
        weight: 80.4,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'バネブー': {
        dexNo: 325,
        types: ['エスパー'],
        abilities: ['あついしぼう', 'マイペース', 'くいしんぼう'],
        baseStats: {
            hp: 60,
            atk: 25,
            def: 35,
            spa: 70,
            spd: 80,
            spe: 60
        },
        weight: 30.6,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ブーピッグ': {
        dexNo: 326,
        types: ['エスパー'],
        abilities: ['あついしぼう', 'マイペース', 'くいしんぼう'],
        baseStats: {
            hp: 80,
            atk: 45,
            def: 65,
            spa: 90,
            spd: 110,
            spe: 80
        },
        weight: 71.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'パッチール': {
        dexNo: 327,
        types: ['ノーマル'],
        abilities: ['マイペース', 'ちどりあし', 'あまのじゃく'],
        baseStats: {
            hp: 60,
            atk: 60,
            def: 60,
            spa: 60,
            spd: 60,
            spe: 60
        },
        weight: 5.0,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'ナックラー': {
        dexNo: 328,
        types: ['じめん'],
        abilities: ['かいりきバサミ', 'ありじごく', 'ちからずく'],
        baseStats: {
            hp: 45,
            atk: 100,
            def: 45,
            spa: 45,
            spd: 45,
            spe: 10
        },
        weight: 15.0,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ビブラーバ': {
        dexNo: 329,
        types: ['じめん', 'ドラゴン'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 50,
            atk: 70,
            def: 50,
            spa: 50,
            spd: 50,
            spe: 70
        },
        weight: 15.3,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'フライゴン': {
        dexNo: 330,
        types: ['じめん', 'ドラゴン'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 80,
            atk: 100,
            def: 80,
            spa: 80,
            spd: 80,
            spe: 100
        },
        weight: 82.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'サボネア': {
        dexNo: 331,
        types: ['くさ'],
        abilities: ['すながくれ', '', 'ちょすい'],
        baseStats: {
            hp: 50,
            atk: 85,
            def: 40,
            spa: 85,
            spd: 40,
            spe: 35
        },
        weight: 51.3,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ノクタス': {
        dexNo: 332,
        types: ['くさ', 'あく'],
        abilities: ['すながくれ', '', 'ちょすい'],
        baseStats: {
            hp: 70,
            atk: 115,
            def: 60,
            spa: 115,
            spd: 60,
            spe: 55
        },
        weight: 77.4,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'チルット': {
        dexNo: 333,
        types: ['ノーマル', 'ひこう'],
        abilities: ['しぜんかいふく', '', 'ノーてんき'],
        baseStats: {
            hp: 45,
            atk: 40,
            def: 60,
            spa: 40,
            spd: 75,
            spe: 50
        },
        weight: 1.2,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'チルタリス': {
        dexNo: 334,
        types: ['ドラゴン', 'ひこう'],
        abilities: ['しぜんかいふく', '', 'ノーてんき'],
        baseStats: {
            hp: 75,
            atk: 70,
            def: 90,
            spa: 70,
            spd: 105,
            spe: 80
        },
        weight: 20.6,
        kind: '一般',
        stage: 3,
        final_stage: 2,
        forms: ['チルタリス', 'メガチルタリス'],
        formButtons: ['通常', 'メガ']
    },
    'メガチルタリス': {
        dexNo: 334,
        types: ['ドラゴン', 'フェアリー'],
        abilities: ['フェアリースキン', '', ''],
        baseStats: {
            hp: 75,
            atk: 110,
            def: 110,
            spa: 110,
            spd: 105,
            spe: 80
        },
        weight: 20.6,
        kind: '一般',
        stage: 'メガ',
        final_stage: 2,
        forms: ['チルタリス', 'メガチルタリス'],
        formButtons: ['通常', 'メガ']
    },
    'ザングース': {
        dexNo: 335,
        types: ['ノーマル'],
        abilities: ['めんえき', '', 'どくぼうそう'],
        baseStats: {
            hp: 73,
            atk: 115,
            def: 60,
            spa: 60,
            spd: 60,
            spe: 90
        },
        weight: 40.3,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'ハブネーク': {
        dexNo: 336,
        types: ['どく'],
        abilities: ['だっぴ', '', 'すりぬけ'],
        baseStats: {
            hp: 73,
            atk: 100,
            def: 60,
            spa: 100,
            spd: 60,
            spe: 65
        },
        weight: 52.5,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'ルナトーン': {
        dexNo: 337,
        types: ['いわ', 'エスパー'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 70,
            atk: 55,
            def: 65,
            spa: 95,
            spd: 85,
            spe: 70
        },
        weight: 168.0,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'ソルロック': {
        dexNo: 338,
        types: ['いわ', 'エスパー'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 70,
            atk: 95,
            def: 85,
            spa: 55,
            spd: 65,
            spe: 70
        },
        weight: 154.0,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'ドジョッチ': {
        dexNo: 339,
        types: ['みず', 'じめん'],
        abilities: ['どんかん', 'きけんよち', 'うるおいボディ'],
        baseStats: {
            hp: 50,
            atk: 48,
            def: 43,
            spa: 46,
            spd: 41,
            spe: 60
        },
        weight: 1.9,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ナマズン': {
        dexNo: 340,
        types: ['みず', 'じめん'],
        abilities: ['どんかん', 'きけんよち', 'うるおいボディ'],
        baseStats: {
            hp: 110,
            atk: 78,
            def: 73,
            spa: 76,
            spd: 71,
            spe: 60
        },
        weight: 23.6,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ヘイガニ': {
        dexNo: 341,
        types: ['みず'],
        abilities: ['かいりきバサミ', 'シェルアーマー', 'てきおうりょく'],
        baseStats: {
            hp: 43,
            atk: 80,
            def: 65,
            spa: 50,
            spd: 35,
            spe: 35
        },
        weight: 11.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'シザリガー': {
        dexNo: 342,
        types: ['みず', 'あく'],
        abilities: ['かいりきバサミ', 'シェルアーマー', 'てきおうりょく'],
        baseStats: {
            hp: 63,
            atk: 120,
            def: 85,
            spa: 90,
            spd: 55,
            spe: 55
        },
        weight: 32.8,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ヤジロン': {
        dexNo: 343,
        types: ['じめん', 'エスパー'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 40,
            atk: 40,
            def: 55,
            spa: 40,
            spd: 70,
            spe: 55
        },
        weight: 21.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ネンドール': {
        dexNo: 344,
        types: ['じめん', 'エスパー'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 60,
            atk: 70,
            def: 105,
            spa: 70,
            spd: 120,
            spe: 75
        },
        weight: 108.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'リリーラ': {
        dexNo: 345,
        types: ['いわ', 'くさ'],
        abilities: ['きゅうばん', '', 'よびみず'],
        baseStats: {
            hp: 66,
            atk: 41,
            def: 77,
            spa: 61,
            spd: 87,
            spe: 23
        },
        weight: 23.8,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ユレイドル': {
        dexNo: 346,
        types: ['いわ', 'くさ'],
        abilities: ['きゅうばん', '', 'よびみず'],
        baseStats: {
            hp: 86,
            atk: 81,
            def: 97,
            spa: 81,
            spd: 107,
            spe: 43
        },
        weight: 60.4,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'アノプス': {
        dexNo: 347,
        types: ['いわ', 'むし'],
        abilities: ['カブトアーマー', '', 'すいすい'],
        baseStats: {
            hp: 45,
            atk: 95,
            def: 50,
            spa: 40,
            spd: 50,
            spe: 75
        },
        weight: 12.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'アーマルド': {
        dexNo: 348,
        types: ['いわ', 'むし'],
        abilities: ['カブトアーマー', '', 'すいすい'],
        baseStats: {
            hp: 75,
            atk: 125,
            def: 100,
            spa: 70,
            spd: 80,
            spe: 45
        },
        weight: 68.2,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ヒンバス': {
        dexNo: 349,
        types: ['みず'],
        abilities: ['すいすい', 'どんかん', 'てきおうりょく'],
        baseStats: {
            hp: 20,
            atk: 15,
            def: 20,
            spa: 10,
            spd: 55,
            spe: 80
        },
        weight: 7.4,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ミロカロス': {
        dexNo: 350,
        types: ['みず'],
        abilities: ['ふしぎなうろこ', 'かちき', 'メロメロボディ'],
        baseStats: {
            hp: 95,
            atk: 60,
            def: 79,
            spa: 100,
            spd: 125,
            spe: 81
        },
        weight: 162.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ポワルン': {
        dexNo: 351,
        types: ['ノーマル'],
        abilities: ['てんきや', '', ''],
        baseStats: {
            hp: 70,
            atk: 70,
            def: 70,
            spa: 70,
            spd: 70,
            spe: 70
        },
        weight: 0.8,
        kind: '一般',
        stage: 1,
        final_stage: 1,
        forms: ['ポワルン', 'ポワルン(晴)', 'ポワルン(雨)', 'ポワルン(雪)'],
        formButtons: ['通常', '晴', '雨', '雪']
    },
    'ポワルン(晴)': {
        dexNo: 351,
        types: ['ほのお'],
        abilities: ['てんきや', '', ''],
        baseStats: {
            hp: 70,
            atk: 70,
            def: 70,
            spa: 70,
            spd: 70,
            spe: 70
        },
        weight: 0.8,
        kind: '一般',
        stage: 1,
        final_stage: 1,
        forms: ['ポワルン', 'ポワルン(晴)', 'ポワルン(雨)', 'ポワルン(雪)'],
        formButtons: ['通常', '晴', '雨', '雪']
    },
    'ポワルン(雨)': {
        dexNo: 351,
        types: ['みず'],
        abilities: ['てんきや', '', ''],
        baseStats: {
            hp: 70,
            atk: 70,
            def: 70,
            spa: 70,
            spd: 70,
            spe: 70
        },
        weight: 0.8,
        kind: '一般',
        stage: 1,
        final_stage: 1,
        forms: ['ポワルン', 'ポワルン(晴)', 'ポワルン(雨)', 'ポワルン(雪)'],
        formButtons: ['通常', '晴', '雨', '雪']
    },
    'ポワルン(雪)': {
        dexNo: 351,
        types: ['こおり'],
        abilities: ['てんきや', '', ''],
        baseStats: {
            hp: 70,
            atk: 70,
            def: 70,
            spa: 70,
            spd: 70,
            spe: 70
        },
        weight: 0.8,
        kind: '一般',
        stage: 1,
        final_stage: 1,
        forms: ['ポワルン', 'ポワルン(晴)', 'ポワルン(雨)', 'ポワルン(雪)'],
        formButtons: ['通常', '晴', '雨', '雪']
    },
    'カクレオン': {
        dexNo: 352,
        types: ['ノーマル'],
        abilities: ['へんしょく', '', 'へんげんじざい'],
        baseStats: {
            hp: 60,
            atk: 90,
            def: 70,
            spa: 60,
            spd: 120,
            spe: 40
        },
        weight: 22.0,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'カゲボウズ': {
        dexNo: 353,
        types: ['ゴースト'],
        abilities: ['ふみん', 'おみとおし', 'のろわれボディ'],
        baseStats: {
            hp: 44,
            atk: 75,
            def: 35,
            spa: 63,
            spd: 33,
            spe: 45
        },
        weight: 2.3,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ジュペッタ': {
        dexNo: 354,
        types: ['ゴースト'],
        abilities: ['ふみん', 'おみとおし', 'のろわれボディ'],
        baseStats: {
            hp: 64,
            atk: 115,
            def: 65,
            spa: 83,
            spd: 63,
            spe: 65
        },
        weight: 12.5,
        kind: '一般',
        stage: 3,
        final_stage: 2,
        forms: ['ジュペッタ', 'メガジュペッタ'],
        formButtons: ['通常', 'メガ']
    },
    'メガジュペッタ': {
        dexNo: 354,
        types: ['ゴースト'],
        abilities: ['いたずらごころ', '', ''],
        baseStats: {
            hp: 64,
            atk: 165,
            def: 75,
            spa: 93,
            spd: 83,
            spe: 75
        },
        weight: 13.0,
        kind: '一般',
        stage: 'メガ',
        final_stage: 2,
        forms: ['ジュペッタ', 'メガジュペッタ'],
        formButtons: ['通常', 'メガ']
    },
    'ヨマワル': {
        dexNo: 355,
        types: ['ゴースト'],
        abilities: ['ふゆう', '', 'おみとおし'],
        baseStats: {
            hp: 20,
            atk: 40,
            def: 90,
            spa: 30,
            spd: 90,
            spe: 25
        },
        weight: 15.0,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'サマヨール': {
        dexNo: 356,
        types: ['ゴースト'],
        abilities: ['プレッシャー', '', 'おみとおし'],
        baseStats: {
            hp: 40,
            atk: 70,
            def: 130,
            spa: 60,
            spd: 130,
            spe: 25
        },
        weight: 30.6,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'トロピウス': {
        dexNo: 357,
        types: ['くさ', 'ひこう'],
        abilities: ['ようりょくそ', 'サンパワー', 'しゅうかく'],
        baseStats: {
            hp: 99,
            atk: 68,
            def: 83,
            spa: 72,
            spd: 87,
            spe: 51
        },
        weight: 100.0,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'チリーン': {
        dexNo: 358,
        types: ['エスパー'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 65,
            atk: 50,
            def: 70,
            spa: 95,
            spd: 80,
            spe: 65
        },
        weight: 1.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'アブソル': {
        dexNo: 359,
        types: ['あく'],
        abilities: ['プレッシャー', 'きょううん', 'せいぎのこころ'],
        baseStats: {
            hp: 65,
            atk: 130,
            def: 60,
            spa: 75,
            spd: 60,
            spe: 75
        },
        weight: 47.0,
        kind: '一般',
        stage: 1,
        final_stage: 1,
        forms: ['アブソル', 'メガアブソル'],
        formButtons: ['通常', 'メガ']
    },
    'メガアブソル': {
        dexNo: 359,
        types: ['あく'],
        abilities: ['マジックミラー', '', ''],
        baseStats: {
            hp: 65,
            atk: 150,
            def: 60,
            spa: 115,
            spd: 60,
            spe: 115
        },
        weight: 49.0,
        kind: '一般',
        stage: 'メガ',
        final_stage: 1,
        forms: ['アブソル', 'メガアブソル'],
        formButtons: ['通常', 'メガ']
    },
    'ソーナノ': {
        dexNo: 360,
        types: ['エスパー'],
        abilities: ['かげふみ', '', 'テレパシー'],
        baseStats: {
            hp: 95,
            atk: 23,
            def: 48,
            spa: 23,
            spd: 48,
            spe: 23
        },
        weight: 14.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ユキワラシ': {
        dexNo: 361,
        types: ['こおり'],
        abilities: ['せいしんりょく', 'アイスボディ', 'ムラっけ'],
        baseStats: {
            hp: 50,
            atk: 50,
            def: 50,
            spa: 50,
            spd: 50,
            spe: 50
        },
        weight: 16.8,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'オニゴーリ': {
        dexNo: 362,
        types: ['こおり'],
        abilities: ['せいしんりょく', 'アイスボディ', 'ムラっけ'],
        baseStats: {
            hp: 80,
            atk: 80,
            def: 80,
            spa: 80,
            spd: 80,
            spe: 80
        },
        weight: 256.5,
        kind: '一般',
        stage: 3,
        final_stage: 2,
        forms: ['オニゴーリ', 'メガオニゴーリ'],
        formButtons: ['通常', 'メガ']
    },
    'メガオニゴーリ': {
        dexNo: 362,
        types: ['こおり'],
        abilities: ['フリーズスキン', '', ''],
        baseStats: {
            hp: 80,
            atk: 120,
            def: 80,
            spa: 120,
            spd: 80,
            spe: 100
        },
        weight: 350.2,
        kind: '一般',
        stage: 'メガ',
        final_stage: 2,
        forms: ['オニゴーリ', 'メガオニゴーリ'],
        formButtons: ['通常', 'メガ']
    },
    'タマザラシ': {
        dexNo: 363,
        types: ['こおり', 'みず'],
        abilities: ['あついしぼう', 'アイスボディ', 'どんかん'],
        baseStats: {
            hp: 70,
            atk: 40,
            def: 50,
            spa: 55,
            spd: 50,
            spe: 25
        },
        weight: 39.5,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'トドグラー': {
        dexNo: 364,
        types: ['こおり', 'みず'],
        abilities: ['あついしぼう', 'アイスボディ', 'どんかん'],
        baseStats: {
            hp: 90,
            atk: 60,
            def: 70,
            spa: 75,
            spd: 70,
            spe: 45
        },
        weight: 87.6,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'トドゼルガ': {
        dexNo: 365,
        types: ['こおり', 'みず'],
        abilities: ['あついしぼう', 'アイスボディ', 'どんかん'],
        baseStats: {
            hp: 110,
            atk: 80,
            def: 90,
            spa: 95,
            spd: 90,
            spe: 65
        },
        weight: 150.6,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'パールル': {
        dexNo: 366,
        types: ['みず'],
        abilities: ['シェルアーマー', '', 'びびり'],
        baseStats: {
            hp: 35,
            atk: 64,
            def: 85,
            spa: 74,
            spd: 55,
            spe: 32
        },
        weight: 52.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ハンテール': {
        dexNo: 367,
        types: ['みず'],
        abilities: ['すいすい', '', 'みずのベール'],
        baseStats: {
            hp: 55,
            atk: 104,
            def: 105,
            spa: 94,
            spd: 75,
            spe: 52
        },
        weight: 27.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'サクラビス': {
        dexNo: 368,
        types: ['みず'],
        abilities: ['すいすい', '', 'うるおいボディ'],
        baseStats: {
            hp: 55,
            atk: 84,
            def: 105,
            spa: 114,
            spd: 75,
            spe: 52
        },
        weight: 22.6,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ジーランス': {
        dexNo: 369,
        types: ['みず', 'いわ'],
        abilities: ['すいすい', 'いしあたま', 'がんじょう'],
        baseStats: {
            hp: 100,
            atk: 90,
            def: 130,
            spa: 45,
            spd: 65,
            spe: 55
        },
        weight: 23.4,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'ラブカス': {
        dexNo: 370,
        types: ['みず'],
        abilities: ['すいすい', '', 'うるおいボディ'],
        baseStats: {
            hp: 43,
            atk: 30,
            def: 55,
            spa: 40,
            spd: 65,
            spe: 97
        },
        weight: 8.7,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'タツベイ': {
        dexNo: 371,
        types: ['ドラゴン'],
        abilities: ['いしあたま', '', 'ちからずく'],
        baseStats: {
            hp: 45,
            atk: 75,
            def: 60,
            spa: 40,
            spd: 30,
            spe: 50
        },
        weight: 42.1,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'コモルー': {
        dexNo: 372,
        types: ['ドラゴン'],
        abilities: ['いしあたま', '', 'ぼうじん'],
        baseStats: {
            hp: 65,
            atk: 95,
            def: 100,
            spa: 60,
            spd: 50,
            spe: 50
        },
        weight: 110.5,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ボーマンダ': {
        dexNo: 373,
        types: ['ドラゴン', 'ひこう'],
        abilities: ['いかく', '', 'じしんかじょう'],
        baseStats: {
            hp: 95,
            atk: 135,
            def: 80,
            spa: 110,
            spd: 80,
            spe: 100
        },
        weight: 102.6,
        kind: '一般',
        stage: 3,
        final_stage: 3,
        forms: ['ボーマンダ', 'メガボーマンダ'],
        formButtons: ['通常', 'メガ']
    },
    'メガボーマンダ': {
        dexNo: 373,
        types: ['ドラゴン', 'ひこう'],
        abilities: ['スカイスキン', '', ''],
        baseStats: {
            hp: 95,
            atk: 145,
            def: 130,
            spa: 120,
            spd: 90,
            spe: 120
        },
        weight: 112.6,
        kind: '一般',
        stage: 'メガ',
        final_stage: 3,
        forms: ['ボーマンダ', 'メガボーマンダ'],
        formButtons: ['通常', 'メガ']
    },
    'ダンバル': {
        dexNo: 374,
        types: ['はがね', 'エスパー'],
        abilities: ['クリアボディ', '', 'ライトメタル'],
        baseStats: {
            hp: 40,
            atk: 55,
            def: 80,
            spa: 35,
            spd: 60,
            spe: 30
        },
        weight: 95.2,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'メタング': {
        dexNo: 375,
        types: ['はがね', 'エスパー'],
        abilities: ['クリアボディ', '', 'ライトメタル'],
        baseStats: {
            hp: 60,
            atk: 75,
            def: 100,
            spa: 55,
            spd: 80,
            spe: 50
        },
        weight: 202.5,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'メタグロス': {
        dexNo: 376,
        types: ['はがね', 'エスパー'],
        abilities: ['クリアボディ', '', 'ライトメタル'],
        baseStats: {
            hp: 80,
            atk: 135,
            def: 130,
            spa: 95,
            spd: 90,
            spe: 70
        },
        weight: 550.0,
        kind: '一般',
        stage: 3,
        final_stage: 3,
        forms: ['メタグロス', 'メガメタグロス'],
        formButtons: ['通常', 'メガ']
    },
    'メガメタグロス': {
        dexNo: 376,
        types: ['はがね', 'エスパー'],
        abilities: ['かたいツメ', '', ''],
        baseStats: {
            hp: 80,
            atk: 145,
            def: 150,
            spa: 105,
            spd: 110,
            spe: 110
        },
        weight: 942.9,
        kind: '一般',
        stage: 'メガ',
        final_stage: 3,
        forms: ['メタグロス', 'メガメタグロス'],
        formButtons: ['通常', 'メガ']
    },
    'レジロック': {
        dexNo: 377,
        types: ['いわ'],
        abilities: ['クリアボディ', '', 'がんじょう'],
        baseStats: {
            hp: 80,
            atk: 100,
            def: 200,
            spa: 50,
            spd: 100,
            spe: 50
        },
        weight: 230.0,
        kind: '準伝',
        stage: 1,
        final_stage: 1
    },
    'レジアイス': {
        dexNo: 378,
        types: ['こおり'],
        abilities: ['クリアボディ', '', 'アイスボディ'],
        baseStats: {
            hp: 80,
            atk: 50,
            def: 100,
            spa: 100,
            spd: 200,
            spe: 50
        },
        weight: 175.0,
        kind: '準伝',
        stage: 1,
        final_stage: 1
    },
    'レジスチル': {
        dexNo: 379,
        types: ['はがね'],
        abilities: ['クリアボディ', '', 'ライトメタル'],
        baseStats: {
            hp: 80,
            atk: 75,
            def: 150,
            spa: 75,
            spd: 150,
            spe: 50
        },
        weight: 205.0,
        kind: '準伝',
        stage: 1,
        final_stage: 1
    },
    'ラティアス': {
        dexNo: 380,
        types: ['ドラゴン', 'エスパー'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 80,
            atk: 80,
            def: 90,
            spa: 110,
            spd: 130,
            spe: 110
        },
        weight: 40.0,
        kind: '準伝',
        stage: 1,
        final_stage: 1,
        forms: ['ラティアス', 'メガラティアス'],
        formButtons: ['通常', 'メガ']
    },
    'メガラティアス': {
        dexNo: 380,
        types: ['ドラゴン', 'エスパー'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 80,
            atk: 100,
            def: 120,
            spa: 140,
            spd: 150,
            spe: 110
        },
        weight: 52.0,
        kind: '準伝',
        stage: 'メガ',
        final_stage: 1,
        forms: ['ラティアス', 'メガラティアス'],
        formButtons: ['通常', 'メガ']
    },
    'ラティオス': {
        dexNo: 381,
        types: ['ドラゴン', 'エスパー'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 80,
            atk: 90,
            def: 80,
            spa: 130,
            spd: 110,
            spe: 110
        },
        weight: 60.0,
        kind: '準伝',
        stage: 1,
        final_stage: 1,
        forms: ['ラティオス', 'メガラティオス'],
        formButtons: ['通常', 'メガ']
    },
    'メガラティオス': {
        dexNo: 381,
        types: ['ドラゴン', 'エスパー'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 80,
            atk: 130,
            def: 100,
            spa: 160,
            spd: 120,
            spe: 110
        },
        weight: 70.0,
        kind: '準伝',
        stage: 'メガ',
        final_stage: 1,
        forms: ['ラティオス', 'メガラティオス'],
        formButtons: ['通常', 'メガ']
    },
    'カイオーガ': {
        dexNo: 382,
        types: ['みず'],
        abilities: ['あめふらし', '', ''],
        baseStats: {
            hp: 100,
            atk: 100,
            def: 90,
            spa: 150,
            spd: 140,
            spe: 90
        },
        weight: 352.0,
        kind: '禁伝',
        stage: 1,
        final_stage: 1,
        forms: ['カイオーガ', 'ゲンシカイオーガ'],
        formButtons: ['通常', 'ゲンシ']
    },
    'ゲンシカイオーガ': {
        dexNo: 382,
        types: ['みず'],
        abilities: ['はじまりのうみ', '', ''],
        baseStats: {
            hp: 100,
            atk: 150,
            def: 90,
            spa: 180,
            spd: 160,
            spe: 90
        },
        weight: 430.0,
        kind: '禁伝',
        stage: 'メガ',
        final_stage: 1,
        forms: ['カイオーガ', 'ゲンシカイオーガ'],
        formButtons: ['通常', 'ゲンシ']
    },
    'グラードン': {
        dexNo: 383,
        types: ['じめん'],
        abilities: ['ひでり', '', ''],
        baseStats: {
            hp: 100,
            atk: 150,
            def: 140,
            spa: 100,
            spd: 90,
            spe: 90
        },
        weight: 950.0,
        kind: '禁伝',
        stage: 1,
        final_stage: 1,
        forms: ['グラードン', 'ゲンシグラードン'],
        formButtons: ['通常', 'ゲンシ']
    },
    'ゲンシグラードン': {
        dexNo: 383,
        types: ['じめん', 'ほのお'],
        abilities: ['おわりのだいち', '', ''],
        baseStats: {
            hp: 100,
            atk: 180,
            def: 160,
            spa: 150,
            spd: 90,
            spe: 90
        },
        weight: 999.7,
        kind: '禁伝',
        stage: 'メガ',
        final_stage: 1,
        forms: ['グラードン', 'ゲンシグラードン'],
        formButtons: ['通常', 'ゲンシ']
    },
    'レックウザ': {
        dexNo: 384,
        types: ['ドラゴン', 'ひこう'],
        abilities: ['エアロック', '', ''],
        baseStats: {
            hp: 105,
            atk: 150,
            def: 90,
            spa: 150,
            spd: 90,
            spe: 95
        },
        weight: 206.5,
        kind: '禁伝',
        stage: 1,
        final_stage: 1,
        forms: ['レックウザ', 'メガレックウザ'],
        formButtons: ['通常', 'メガ']
    },
    'メガレックウザ': {
        dexNo: 384,
        types: ['ドラゴン', 'ひこう'],
        abilities: ['デルタストリーム', '', ''],
        baseStats: {
            hp: 105,
            atk: 180,
            def: 100,
            spa: 180,
            spd: 100,
            spe: 115
        },
        weight: 392.0,
        kind: '禁伝',
        stage: 'メガ',
        final_stage: 1,
        forms: ['レックウザ', 'メガレックウザ'],
        formButtons: ['通常', 'メガ']
    },
    'ジラーチ': {
        dexNo: 385,
        types: ['はがね', 'エスパー'],
        abilities: ['てんのめぐみ', '', ''],
        baseStats: {
            hp: 100,
            atk: 100,
            def: 100,
            spa: 100,
            spd: 100,
            spe: 100
        },
        weight: 1.1,
        kind: '幻',
        stage: 1,
        final_stage: 1
    },
    'デオキシス(ノーマル)': {
        dexNo: 386,
        types: ['エスパー'],
        abilities: ['プレッシャー', '', ''],
        baseStats: {
            hp: 50,
            atk: 150,
            def: 50,
            spa: 150,
            spd: 50,
            spe: 150
        },
        weight: 60.8,
        kind: '幻',
        stage: 1,
        final_stage: 1,
        forms: ['デオキシス(ノーマル)', 'デオキシス(アタック)', 'デオキシス(ディフェンス)', 'デオキシス(スピード)'],
        formButtons: ['通常', '攻', '防', '速']
    },
    'デオキシス(アタック)': {
        dexNo: 386,
        types: ['エスパー'],
        abilities: ['プレッシャー', '', ''],
        baseStats: {
            hp: 50,
            atk: 180,
            def: 20,
            spa: 180,
            spd: 20,
            spe: 150
        },
        weight: 60.8,
        kind: '幻',
        stage: 1,
        final_stage: 1,
        forms: ['デオキシス(ノーマル)', 'デオキシス(アタック)', 'デオキシス(ディフェンス)', 'デオキシス(スピード)'],
        formButtons: ['通常', '攻', '防', '速']
    },
    'デオキシス(ディフェンス)': {
        dexNo: 386,
        types: ['エスパー'],
        abilities: ['プレッシャー', '', ''],
        baseStats: {
            hp: 50,
            atk: 70,
            def: 160,
            spa: 70,
            spd: 160,
            spe: 90
        },
        weight: 60.8,
        kind: '幻',
        stage: 1,
        final_stage: 1,
        forms: ['デオキシス(ノーマル)', 'デオキシス(アタック)', 'デオキシス(ディフェンス)', 'デオキシス(スピード)'],
        formButtons: ['通常', '攻', '防', '速']
    },
    'デオキシス(スピード)': {
        dexNo: 386,
        types: ['エスパー'],
        abilities: ['プレッシャー', '', ''],
        baseStats: {
            hp: 50,
            atk: 95,
            def: 90,
            spa: 95,
            spd: 90,
            spe: 180
        },
        weight: 60.8,
        kind: '幻',
        stage: 1,
        final_stage: 1,
        forms: ['デオキシス(ノーマル)', 'デオキシス(アタック)', 'デオキシス(ディフェンス)', 'デオキシス(スピード)'],
        formButtons: ['通常', '攻', '防', '速']
    },
    'ナエトル': {
        dexNo: 387,
        types: ['くさ'],
        abilities: ['しんりょく', '', 'シェルアーマー'],
        baseStats: {
            hp: 55,
            atk: 68,
            def: 64,
            spa: 45,
            spd: 55,
            spe: 31
        },
        weight: 10.2,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ハヤシガメ': {
        dexNo: 388,
        types: ['くさ'],
        abilities: ['しんりょく', '', 'シェルアーマー'],
        baseStats: {
            hp: 75,
            atk: 89,
            def: 85,
            spa: 55,
            spd: 65,
            spe: 36
        },
        weight: 97.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ドダイトス': {
        dexNo: 389,
        types: ['くさ', 'じめん'],
        abilities: ['しんりょく', '', 'シェルアーマー'],
        baseStats: {
            hp: 95,
            atk: 109,
            def: 105,
            spa: 75,
            spd: 85,
            spe: 56
        },
        weight: 310.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ヒコザル': {
        dexNo: 390,
        types: ['ほのお'],
        abilities: ['もうか', '', 'てつのこぶし'],
        baseStats: {
            hp: 44,
            atk: 58,
            def: 44,
            spa: 58,
            spd: 44,
            spe: 61
        },
        weight: 6.2,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'モウカザル': {
        dexNo: 391,
        types: ['ほのお', 'かくとう'],
        abilities: ['もうか', '', 'てつのこぶし'],
        baseStats: {
            hp: 64,
            atk: 78,
            def: 52,
            spa: 78,
            spd: 52,
            spe: 81
        },
        weight: 22.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ゴウカザル': {
        dexNo: 392,
        types: ['ほのお', 'かくとう'],
        abilities: ['もうか', '', 'てつのこぶし'],
        baseStats: {
            hp: 76,
            atk: 104,
            def: 71,
            spa: 104,
            spd: 71,
            spe: 108
        },
        weight: 55.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ポッチャマ': {
        dexNo: 393,
        types: ['みず'],
        abilities: ['げきりゅう', '', 'まけんき'],
        baseStats: {
            hp: 53,
            atk: 51,
            def: 53,
            spa: 61,
            spd: 56,
            spe: 40
        },
        weight: 5.2,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ポッタイシ': {
        dexNo: 394,
        types: ['みず'],
        abilities: ['げきりゅう', '', 'まけんき'],
        baseStats: {
            hp: 64,
            atk: 66,
            def: 68,
            spa: 81,
            spd: 76,
            spe: 50
        },
        weight: 23.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'エンペルト': {
        dexNo: 395,
        types: ['みず', 'はがね'],
        abilities: ['げきりゅう', '', 'まけんき'],
        baseStats: {
            hp: 84,
            atk: 86,
            def: 88,
            spa: 111,
            spd: 101,
            spe: 60
        },
        weight: 84.5,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ムックル': {
        dexNo: 396,
        types: ['ノーマル', 'ひこう'],
        abilities: ['するどいめ', '', 'すてみ'],
        baseStats: {
            hp: 40,
            atk: 55,
            def: 30,
            spa: 30,
            spd: 30,
            spe: 60
        },
        weight: 2.0,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ムクバード': {
        dexNo: 397,
        types: ['ノーマル', 'ひこう'],
        abilities: ['いかく', '', 'すてみ'],
        baseStats: {
            hp: 55,
            atk: 75,
            def: 50,
            spa: 40,
            spd: 40,
            spe: 80
        },
        weight: 15.5,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ムクホーク': {
        dexNo: 398,
        types: ['ノーマル', 'ひこう'],
        abilities: ['いかく', '', 'すてみ'],
        baseStats: {
            hp: 85,
            atk: 120,
            def: 70,
            spa: 50,
            spd: 60,
            spe: 100
        },
        weight: 24.9,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ビッパ': {
        dexNo: 399,
        types: ['ノーマル'],
        abilities: ['たんじゅん', 'てんねん', 'ムラっけ'],
        baseStats: {
            hp: 59,
            atk: 45,
            def: 40,
            spa: 35,
            spd: 40,
            spe: 31
        },
        weight: 20.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ビーダル': {
        dexNo: 400,
        types: ['ノーマル', 'みず'],
        abilities: ['たんじゅん', 'てんねん', 'ムラっけ'],
        baseStats: {
            hp: 79,
            atk: 85,
            def: 60,
            spa: 55,
            spd: 60,
            spe: 71
        },
        weight: 31.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'コロボーシ': {
        dexNo: 401,
        types: ['むし'],
        abilities: ['だっぴ', '', 'にげあし'],
        baseStats: {
            hp: 37,
            atk: 25,
            def: 41,
            spa: 25,
            spd: 41,
            spe: 25
        },
        weight: 2.2,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'コロトック': {
        dexNo: 402,
        types: ['むし'],
        abilities: ['むしのしらせ', '', 'テクニシャン'],
        baseStats: {
            hp: 77,
            atk: 85,
            def: 51,
            spa: 55,
            spd: 51,
            spe: 65
        },
        weight: 25.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'コリンク': {
        dexNo: 403,
        types: ['でんき'],
        abilities: ['とうそうしん', 'いかく', 'こんじょう'],
        baseStats: {
            hp: 45,
            atk: 65,
            def: 34,
            spa: 40,
            spd: 34,
            spe: 45
        },
        weight: 9.5,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ルクシオ': {
        dexNo: 404,
        types: ['でんき'],
        abilities: ['とうそうしん', 'いかく', 'こんじょう'],
        baseStats: {
            hp: 60,
            atk: 85,
            def: 49,
            spa: 60,
            spd: 49,
            spe: 60
        },
        weight: 30.5,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'レントラー': {
        dexNo: 405,
        types: ['でんき'],
        abilities: ['とうそうしん', 'いかく', 'こんじょう'],
        baseStats: {
            hp: 80,
            atk: 120,
            def: 79,
            spa: 95,
            spd: 79,
            spe: 70
        },
        weight: 42.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'スボミー': {
        dexNo: 406,
        types: ['くさ', 'どく'],
        abilities: ['しぜんかいふく', 'どくのトゲ', 'リーフガード'],
        baseStats: {
            hp: 40,
            atk: 30,
            def: 35,
            spa: 50,
            spd: 70,
            spe: 55
        },
        weight: 1.2,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ロズレイド': {
        dexNo: 407,
        types: ['くさ', 'どく'],
        abilities: ['しぜんかいふく', 'どくのトゲ', 'テクニシャン'],
        baseStats: {
            hp: 60,
            atk: 70,
            def: 65,
            spa: 125,
            spd: 105,
            spe: 90
        },
        weight: 14.5,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ズガイドス': {
        dexNo: 408,
        types: ['いわ'],
        abilities: ['かたやぶり', '', 'ちからずく'],
        baseStats: {
            hp: 67,
            atk: 125,
            def: 40,
            spa: 30,
            spd: 30,
            spe: 58
        },
        weight: 31.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ラムパルド': {
        dexNo: 409,
        types: ['いわ'],
        abilities: ['かたやぶり', '', 'ちからずく'],
        baseStats: {
            hp: 97,
            atk: 165,
            def: 60,
            spa: 65,
            spd: 50,
            spe: 58
        },
        weight: 102.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'タテトプス': {
        dexNo: 410,
        types: ['いわ', 'はがね'],
        abilities: ['がんじょう', '', 'ぼうおん'],
        baseStats: {
            hp: 30,
            atk: 42,
            def: 118,
            spa: 42,
            spd: 88,
            spe: 30
        },
        weight: 57.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'トリデプス': {
        dexNo: 411,
        types: ['いわ', 'はがね'],
        abilities: ['がんじょう', '', 'ぼうおん'],
        baseStats: {
            hp: 60,
            atk: 52,
            def: 168,
            spa: 47,
            spd: 138,
            spe: 30
        },
        weight: 149.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ミノムッチ': {
        dexNo: 412,
        types: ['むし'],
        abilities: ['だっぴ', '', 'ぼうじん'],
        baseStats: {
            hp: 40,
            atk: 29,
            def: 45,
            spa: 29,
            spd: 45,
            spe: 36
        },
        weight: 3.4,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ミノマダム(草木)': {
        dexNo: 413,
        types: ['むし', 'くさ'],
        abilities: ['きけんよち', '', 'ぼうじん'],
        baseStats: {
            hp: 60,
            atk: 59,
            def: 85,
            spa: 79,
            spd: 105,
            spe: 36
        },
        weight: 6.5,
        kind: '一般',
        stage: 3,
        final_stage: 2,
        forms: ['ミノマダム(草木)', 'ミノマダム(砂地)', 'ミノマダム(ゴミ)'],
        formButtons: ['草木', '砂地', 'ゴミ']
    },
    'ミノマダム(砂地)': {
        dexNo: 413,
        types: ['むし', 'じめん'],
        abilities: ['きけんよち', '', 'ぼうじん'],
        baseStats: {
            hp: 60,
            atk: 79,
            def: 105,
            spa: 59,
            spd: 85,
            spe: 36
        },
        weight: 6.5,
        kind: '一般',
        stage: 3,
        final_stage: 2,
        forms: ['ミノマダム(草木)', 'ミノマダム(砂地)', 'ミノマダム(ゴミ)'],
        formButtons: ['草木', '砂地', 'ゴミ']
    },
    'ミノマダム(ゴミ)': {
        dexNo: 413,
        types: ['むし', 'はがね'],
        abilities: ['きけんよち', '', 'ぼうじん'],
        baseStats: {
            hp: 60,
            atk: 69,
            def: 95,
            spa: 69,
            spd: 95,
            spe: 36
        },
        weight: 6.5,
        kind: '一般',
        stage: 3,
        final_stage: 2,
        forms: ['ミノマダム(草木)', 'ミノマダム(砂地)', 'ミノマダム(ゴミ)'],
        formButtons: ['草木', '砂地', 'ゴミ']
    },
    'ガーメイル': {
        dexNo: 414,
        types: ['むし', 'ひこう'],
        abilities: ['むしのしらせ', '', 'いろめがね'],
        baseStats: {
            hp: 70,
            atk: 94,
            def: 50,
            spa: 94,
            spd: 50,
            spe: 66
        },
        weight: 23.3,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ミツハニー': {
        dexNo: 415,
        types: ['むし', 'ひこう'],
        abilities: ['みつあつめ', '', 'はりきり'],
        baseStats: {
            hp: 30,
            atk: 30,
            def: 42,
            spa: 30,
            spd: 42,
            spe: 70
        },
        weight: 5.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ビークイン': {
        dexNo: 416,
        types: ['むし', 'ひこう'],
        abilities: ['プレッシャー', '', 'きんちょうかん'],
        baseStats: {
            hp: 70,
            atk: 80,
            def: 102,
            spa: 80,
            spd: 102,
            spe: 40
        },
        weight: 38.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'パチリス': {
        dexNo: 417,
        types: ['でんき'],
        abilities: ['にげあし', 'ものひろい', 'ちくでん'],
        baseStats: {
            hp: 60,
            atk: 45,
            def: 70,
            spa: 45,
            spd: 90,
            spe: 95
        },
        weight: 3.9,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'ブイゼル': {
        dexNo: 418,
        types: ['みず'],
        abilities: ['すいすい', '', 'みずのベール'],
        baseStats: {
            hp: 55,
            atk: 65,
            def: 35,
            spa: 60,
            spd: 30,
            spe: 85
        },
        weight: 29.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'フローゼル': {
        dexNo: 419,
        types: ['みず'],
        abilities: ['すいすい', '', 'みずのベール'],
        baseStats: {
            hp: 85,
            atk: 105,
            def: 55,
            spa: 85,
            spd: 50,
            spe: 115
        },
        weight: 33.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'チェリンボ': {
        dexNo: 420,
        types: ['くさ'],
        abilities: ['ようりょくそ', '', ''],
        baseStats: {
            hp: 45,
            atk: 35,
            def: 45,
            spa: 62,
            spd: 53,
            spe: 35
        },
        weight: 3.3,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'チェリム': {
        dexNo: 421,
        types: ['くさ'],
        abilities: ['フラワーギフト', '', ''],
        baseStats: {
            hp: 70,
            atk: 60,
            def: 70,
            spa: 87,
            spd: 78,
            spe: 85
        },
        weight: 9.3,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'カラナクシ': {
        dexNo: 422,
        types: ['みず'],
        abilities: ['ねんちゃく', 'よびみず', 'すなのちから'],
        baseStats: {
            hp: 76,
            atk: 48,
            def: 48,
            spa: 57,
            spd: 62,
            spe: 34
        },
        weight: 6.3,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'トリトドン': {
        dexNo: 423,
        types: ['みず', 'じめん'],
        abilities: ['ねんちゃく', 'よびみず', 'すなのちから'],
        baseStats: {
            hp: 111,
            atk: 83,
            def: 68,
            spa: 92,
            spd: 82,
            spe: 39
        },
        weight: 29.9,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'エテボース': {
        dexNo: 424,
        types: ['ノーマル'],
        abilities: ['テクニシャン', 'ものひろい', 'スキルリンク'],
        baseStats: {
            hp: 75,
            atk: 100,
            def: 66,
            spa: 60,
            spd: 66,
            spe: 115
        },
        weight: 20.3,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'フワンテ': {
        dexNo: 425,
        types: ['ゴースト', 'ひこう'],
        abilities: ['ゆうばく', 'かるわざ', 'ねつぼうそう'],
        baseStats: {
            hp: 90,
            atk: 50,
            def: 34,
            spa: 60,
            spd: 44,
            spe: 70
        },
        weight: 1.2,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'フワライド': {
        dexNo: 426,
        types: ['ゴースト', 'ひこう'],
        abilities: ['ゆうばく', 'かるわざ', 'ねつぼうそう'],
        baseStats: {
            hp: 150,
            atk: 80,
            def: 44,
            spa: 90,
            spd: 54,
            spe: 80
        },
        weight: 15.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ミミロル': {
        dexNo: 427,
        types: ['ノーマル'],
        abilities: ['にげあし', 'ぶきよう', 'じゅうなん'],
        baseStats: {
            hp: 55,
            atk: 66,
            def: 44,
            spa: 44,
            spd: 56,
            spe: 85
        },
        weight: 5.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ミミロップ': {
        dexNo: 428,
        types: ['ノーマル'],
        abilities: ['メロメロボディ', 'ぶきよう', 'じゅうなん'],
        baseStats: {
            hp: 65,
            atk: 76,
            def: 84,
            spa: 54,
            spd: 96,
            spe: 105
        },
        weight: 33.3,
        kind: '一般',
        stage: 3,
        final_stage: 2,
        forms: ['ミミロップ', 'メガミミロップ'],
        formButtons: ['通常', 'メガ']
    },
    'メガミミロップ': {
        dexNo: 428,
        types: ['ノーマル', 'かくとう'],
        abilities: ['きもったま', '', ''],
        baseStats: {
            hp: 65,
            atk: 136,
            def: 94,
            spa: 54,
            spd: 96,
            spe: 135
        },
        weight: 28.3,
        kind: '一般',
        stage: 'メガ',
        final_stage: 2,
        forms: ['ミミロップ', 'メガミミロップ'],
        formButtons: ['通常', 'メガ']
    },
    'ムウマージ': {
        dexNo: 429,
        types: ['ゴースト'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 60,
            atk: 60,
            def: 60,
            spa: 105,
            spd: 105,
            spe: 105
        },
        weight: 4.4,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ドンカラス': {
        dexNo: 430,
        types: ['あく', 'ひこう'],
        abilities: ['ふみん', 'きょううん', 'じしんかじょう'],
        baseStats: {
            hp: 100,
            atk: 125,
            def: 52,
            spa: 105,
            spd: 52,
            spe: 71
        },
        weight: 27.3,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ニャルマー': {
        dexNo: 431,
        types: ['ノーマル'],
        abilities: ['じゅうなん', 'マイペース', 'するどいめ'],
        baseStats: {
            hp: 49,
            atk: 55,
            def: 42,
            spa: 42,
            spd: 37,
            spe: 85
        },
        weight: 3.9,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ブニャット': {
        dexNo: 432,
        types: ['ノーマル'],
        abilities: ['あついしぼう', 'マイペース', 'まけんき'],
        baseStats: {
            hp: 71,
            atk: 82,
            def: 64,
            spa: 64,
            spd: 59,
            spe: 112
        },
        weight: 43.8,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'リーシャン': {
        dexNo: 433,
        types: ['エスパー'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 45,
            atk: 30,
            def: 50,
            spa: 65,
            spd: 50,
            spe: 45
        },
        weight: 0.6,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'スカンプー': {
        dexNo: 434,
        types: ['どく', 'あく'],
        abilities: ['あくしゅう', 'ゆうばく', 'するどいめ'],
        baseStats: {
            hp: 63,
            atk: 63,
            def: 47,
            spa: 41,
            spd: 41,
            spe: 74
        },
        weight: 19.2,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'スカタンク': {
        dexNo: 435,
        types: ['どく', 'あく'],
        abilities: ['あくしゅう', 'ゆうばく', 'するどいめ'],
        baseStats: {
            hp: 103,
            atk: 93,
            def: 67,
            spa: 71,
            spd: 61,
            spe: 84
        },
        weight: 38.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ドーミラー': {
        dexNo: 436,
        types: ['はがね', 'エスパー'],
        abilities: ['ふゆう', 'たいねつ', 'ヘヴィメタル'],
        baseStats: {
            hp: 57,
            atk: 24,
            def: 86,
            spa: 24,
            spd: 86,
            spe: 23
        },
        weight: 60.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ドータクン': {
        dexNo: 437,
        types: ['はがね', 'エスパー'],
        abilities: ['ふゆう', 'たいねつ', 'ヘヴィメタル'],
        baseStats: {
            hp: 67,
            atk: 89,
            def: 116,
            spa: 79,
            spd: 116,
            spe: 33
        },
        weight: 187.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ウソハチ': {
        dexNo: 438,
        types: ['いわ'],
        abilities: ['がんじょう', 'いしあたま', 'びびり'],
        baseStats: {
            hp: 50,
            atk: 80,
            def: 95,
            spa: 10,
            spd: 45,
            spe: 10
        },
        weight: 15.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'マネネ': {
        dexNo: 439,
        types: ['エスパー', 'フェアリー'],
        abilities: ['ぼうおん', 'フィルター', 'テクニシャン'],
        baseStats: {
            hp: 20,
            atk: 25,
            def: 45,
            spa: 70,
            spd: 90,
            spe: 60
        },
        weight: 13.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ピンプク': {
        dexNo: 440,
        types: ['ノーマル'],
        abilities: ['しぜんかいふく', 'てんのめぐみ', 'フレンドガード'],
        baseStats: {
            hp: 100,
            atk: 5,
            def: 5,
            spa: 15,
            spd: 65,
            spe: 30
        },
        weight: 24.4,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ペラップ': {
        dexNo: 441,
        types: ['ノーマル', 'ひこう'],
        abilities: ['するどいめ', 'ちどりあし', 'はとむね'],
        baseStats: {
            hp: 76,
            atk: 65,
            def: 45,
            spa: 92,
            spd: 42,
            spe: 91
        },
        weight: 1.9,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'ミカルゲ': {
        dexNo: 442,
        types: ['ゴースト', 'あく'],
        abilities: ['プレッシャー', '', 'すりぬけ'],
        baseStats: {
            hp: 50,
            atk: 92,
            def: 108,
            spa: 92,
            spd: 108,
            spe: 35
        },
        weight: 108.0,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'フカマル': {
        dexNo: 443,
        types: ['ドラゴン', 'じめん'],
        abilities: ['すながくれ', '', 'さめはだ'],
        baseStats: {
            hp: 58,
            atk: 70,
            def: 45,
            spa: 40,
            spd: 45,
            spe: 42
        },
        weight: 20.5,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ガバイト': {
        dexNo: 444,
        types: ['ドラゴン', 'じめん'],
        abilities: ['すながくれ', '', 'さめはだ'],
        baseStats: {
            hp: 68,
            atk: 90,
            def: 65,
            spa: 50,
            spd: 55,
            spe: 82
        },
        weight: 56.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ガブリアス': {
        dexNo: 445,
        types: ['ドラゴン', 'じめん'],
        abilities: ['すながくれ', '', 'さめはだ'],
        baseStats: {
            hp: 108,
            atk: 130,
            def: 95,
            spa: 80,
            spd: 85,
            spe: 102
        },
        weight: 95.0,
        kind: '一般',
        stage: 3,
        final_stage: 3,
        forms: ['ガブリアス', 'メガガブリアス'],
        formButtons: ['通常', 'メガ']
    },
    'メガガブリアス': {
        dexNo: 445,
        types: ['ドラゴン', 'じめん'],
        abilities: ['すなのちから', '', ''],
        baseStats: {
            hp: 108,
            atk: 170,
            def: 115,
            spa: 120,
            spd: 95,
            spe: 92
        },
        weight: 95.0,
        kind: '一般',
        stage: 'メガ',
        final_stage: 3,
        forms: ['ガブリアス', 'メガガブリアス'],
        formButtons: ['通常', 'メガ']
    },
    'ゴンベ': {
        dexNo: 446,
        types: ['ノーマル'],
        abilities: ['ものひろい', 'あついしぼう', 'くいしんぼう'],
        baseStats: {
            hp: 135,
            atk: 85,
            def: 40,
            spa: 40,
            spd: 85,
            spe: 5
        },
        weight: 105.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'リオル': {
        dexNo: 447,
        types: ['かくとう'],
        abilities: ['ふくつのこころ', 'せいしんりょく', 'いたずらごころ'],
        baseStats: {
            hp: 40,
            atk: 70,
            def: 40,
            spa: 35,
            spd: 40,
            spe: 60
        },
        weight: 20.2,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ルカリオ': {
        dexNo: 448,
        types: ['かくとう', 'はがね'],
        abilities: ['ふくつのこころ', 'せいしんりょく', 'せいぎのこころ'],
        baseStats: {
            hp: 70,
            atk: 110,
            def: 70,
            spa: 115,
            spd: 70,
            spe: 90
        },
        weight: 54.0,
        kind: '一般',
        stage: 3,
        final_stage: 2,
        forms: ['ルカリオ', 'メガルカリオ'],
        formButtons: ['通常', 'メガ']
    },
    'メガルカリオ': {
        dexNo: 448,
        types: ['かくとう', 'はがね'],
        abilities: ['てきおうりょく', '', ''],
        baseStats: {
            hp: 70,
            atk: 145,
            def: 88,
            spa: 140,
            spd: 70,
            spe: 112
        },
        weight: 57.5,
        kind: '一般',
        stage: 'メガ',
        final_stage: 2,
        forms: ['ルカリオ', 'メガルカリオ'],
        formButtons: ['通常', 'メガ']
    },
    'ヒポポタス': {
        dexNo: 449,
        types: ['じめん'],
        abilities: ['すなおこし', '', 'すなのちから'],
        baseStats: {
            hp: 68,
            atk: 72,
            def: 78,
            spa: 38,
            spd: 42,
            spe: 32
        },
        weight: 49.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'カバルドン': {
        dexNo: 450,
        types: ['じめん'],
        abilities: ['すなおこし', '', 'すなのちから'],
        baseStats: {
            hp: 108,
            atk: 112,
            def: 118,
            spa: 68,
            spd: 72,
            spe: 47
        },
        weight: 300.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'スコルピ': {
        dexNo: 451,
        types: ['どく', 'むし'],
        abilities: ['カブトアーマー', 'スナイパー', 'するどいめ'],
        baseStats: {
            hp: 40,
            atk: 50,
            def: 90,
            spa: 30,
            spd: 55,
            spe: 65
        },
        weight: 12.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ドラピオン': {
        dexNo: 452,
        types: ['どく', 'あく'],
        abilities: ['カブトアーマー', 'スナイパー', 'するどいめ'],
        baseStats: {
            hp: 70,
            atk: 90,
            def: 110,
            spa: 60,
            spd: 75,
            spe: 95
        },
        weight: 61.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'グレッグル': {
        dexNo: 453,
        types: ['どく', 'かくとう'],
        abilities: ['きけんよち', 'かんそうはだ', 'どくしゅ'],
        baseStats: {
            hp: 48,
            atk: 61,
            def: 40,
            spa: 61,
            spd: 40,
            spe: 50
        },
        weight: 23.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ドクロッグ': {
        dexNo: 454,
        types: ['どく', 'かくとう'],
        abilities: ['きけんよち', 'かんそうはだ', 'どくしゅ'],
        baseStats: {
            hp: 83,
            atk: 106,
            def: 65,
            spa: 86,
            spd: 65,
            spe: 85
        },
        weight: 44.4,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'マスキッパ': {
        dexNo: 455,
        types: ['くさ'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 74,
            atk: 100,
            def: 72,
            spa: 90,
            spd: 72,
            spe: 46
        },
        weight: 27.0,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'ケイコウオ': {
        dexNo: 456,
        types: ['みず'],
        abilities: ['すいすい', 'よびみず', 'みずのベール'],
        baseStats: {
            hp: 49,
            atk: 49,
            def: 56,
            spa: 49,
            spd: 61,
            spe: 66
        },
        weight: 7.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ネオラント': {
        dexNo: 457,
        types: ['みず'],
        abilities: ['すいすい', 'よびみず', 'みずのベール'],
        baseStats: {
            hp: 69,
            atk: 69,
            def: 76,
            spa: 69,
            spd: 86,
            spe: 91
        },
        weight: 24.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'タマンタ': {
        dexNo: 458,
        types: ['みず', 'ひこう'],
        abilities: ['すいすい', 'ちょすい', 'みずのベール'],
        baseStats: {
            hp: 45,
            atk: 20,
            def: 50,
            spa: 60,
            spd: 120,
            spe: 50
        },
        weight: 65.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ユキカブリ': {
        dexNo: 459,
        types: ['くさ', 'こおり'],
        abilities: ['ゆきふらし', '', 'ぼうおん'],
        baseStats: {
            hp: 60,
            atk: 62,
            def: 50,
            spa: 62,
            spd: 60,
            spe: 40
        },
        weight: 50.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ユキノオー': {
        dexNo: 460,
        types: ['くさ', 'こおり'],
        abilities: ['ゆきふらし', '', 'ぼうおん'],
        baseStats: {
            hp: 90,
            atk: 92,
            def: 75,
            spa: 92,
            spd: 85,
            spe: 60
        },
        weight: 135.5,
        kind: '一般',
        stage: 3,
        final_stage: 2,
        forms: ['ユキノオー', 'メガユキノオー'],
        formButtons: ['通常', 'メガ']
    },
    'メガユキノオー': {
        dexNo: 460,
        types: ['くさ', 'こおり'],
        abilities: ['ゆきふらし', '', ''],
        baseStats: {
            hp: 90,
            atk: 132,
            def: 105,
            spa: 132,
            spd: 105,
            spe: 30
        },
        weight: 185.0,
        kind: '一般',
        stage: 'メガ',
        final_stage: 2,
        forms: ['ユキノオー', 'メガユキノオー'],
        formButtons: ['通常', 'メガ']
    },
    'マニューラ': {
        dexNo: 461,
        types: ['あく', 'こおり'],
        abilities: ['プレッシャー', '', 'わるいてぐせ'],
        baseStats: {
            hp: 70,
            atk: 120,
            def: 65,
            spa: 45,
            spd: 85,
            spe: 125
        },
        weight: 34.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ジバコイル': {
        dexNo: 462,
        types: ['でんき', 'はがね'],
        abilities: ['じりょく', 'がんじょう', 'アナライズ'],
        baseStats: {
            hp: 70,
            atk: 70,
            def: 115,
            spa: 130,
            spd: 90,
            spe: 60
        },
        weight: 180.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ベロベルト': {
        dexNo: 463,
        types: ['ノーマル'],
        abilities: ['マイペース', 'どんかん', 'ノーてんき'],
        baseStats: {
            hp: 110,
            atk: 85,
            def: 95,
            spa: 80,
            spd: 95,
            spe: 50
        },
        weight: 140.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ドサイドン': {
        dexNo: 464,
        types: ['じめん', 'いわ'],
        abilities: ['ひらいしん', 'ハードロック', 'すてみ'],
        baseStats: {
            hp: 115,
            atk: 140,
            def: 130,
            spa: 55,
            spd: 55,
            spe: 40
        },
        weight: 282.8,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'モジャンボ': {
        dexNo: 465,
        types: ['くさ'],
        abilities: ['ようりょくそ', 'リーフガード', 'さいせいりょく'],
        baseStats: {
            hp: 100,
            atk: 100,
            def: 125,
            spa: 110,
            spd: 50,
            spe: 50
        },
        weight: 128.6,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'エレキブル': {
        dexNo: 466,
        types: ['でんき'],
        abilities: ['でんきエンジン', '', 'やるき'],
        baseStats: {
            hp: 75,
            atk: 123,
            def: 67,
            spa: 95,
            spd: 85,
            spe: 95
        },
        weight: 138.6,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ブーバーン': {
        dexNo: 467,
        types: ['ほのお'],
        abilities: ['ほのおのからだ', '', 'やるき'],
        baseStats: {
            hp: 75,
            atk: 95,
            def: 67,
            spa: 125,
            spd: 95,
            spe: 83
        },
        weight: 68.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'トゲキッス': {
        dexNo: 468,
        types: ['フェアリー', 'ひこう'],
        abilities: ['はりきり', 'てんのめぐみ', 'きょううん'],
        baseStats: {
            hp: 85,
            atk: 50,
            def: 95,
            spa: 120,
            spd: 115,
            spe: 80
        },
        weight: 38.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'メガヤンマ': {
        dexNo: 469,
        types: ['むし', 'ひこう'],
        abilities: ['かそく', 'いろめがね', 'おみとおし'],
        baseStats: {
            hp: 86,
            atk: 76,
            def: 86,
            spa: 116,
            spd: 56,
            spe: 95
        },
        weight: 51.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'リーフィア': {
        dexNo: 470,
        types: ['くさ'],
        abilities: ['リーフガード', '', 'ようりょくそ'],
        baseStats: {
            hp: 65,
            atk: 110,
            def: 130,
            spa: 60,
            spd: 65,
            spe: 95
        },
        weight: 25.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'グレイシア': {
        dexNo: 471,
        types: ['こおり'],
        abilities: ['ゆきがくれ', '', 'アイスボディ'],
        baseStats: {
            hp: 65,
            atk: 60,
            def: 110,
            spa: 130,
            spd: 95,
            spe: 65
        },
        weight: 25.9,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'グライオン': {
        dexNo: 472,
        types: ['じめん', 'ひこう'],
        abilities: ['かいりきバサミ', 'すながくれ', 'ポイズンヒール'],
        baseStats: {
            hp: 75,
            atk: 95,
            def: 125,
            spa: 45,
            spd: 75,
            spe: 95
        },
        weight: 42.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'マンムー': {
        dexNo: 473,
        types: ['こおり', 'じめん'],
        abilities: ['どんかん', 'ゆきがくれ', 'あついしぼう'],
        baseStats: {
            hp: 110,
            atk: 130,
            def: 80,
            spa: 70,
            spd: 60,
            spe: 80
        },
        weight: 291.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ポリゴンZ': {
        dexNo: 474,
        types: ['ノーマル'],
        abilities: ['てきおうりょく', 'ダウンロード', 'アナライズ'],
        baseStats: {
            hp: 85,
            atk: 80,
            def: 70,
            spa: 135,
            spd: 75,
            spe: 90
        },
        weight: 34.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'エルレイド': {
        dexNo: 475,
        types: ['エスパー', 'かくとう'],
        abilities: ['ふくつのこころ', '', 'せいぎのこころ'],
        baseStats: {
            hp: 68,
            atk: 125,
            def: 65,
            spa: 65,
            spd: 115,
            spe: 80
        },
        weight: 52.0,
        kind: '一般',
        stage: 3,
        final_stage: 3,
        forms: ['エルレイド', 'メガエルレイド'],
        formButtons: ['通常', 'メガ']
    },
    'メガエルレイド': {
        dexNo: 475,
        types: ['エスパー', 'かくとう'],
        abilities: ['せいしんりょく', '', ''],
        baseStats: {
            hp: 68,
            atk: 165,
            def: 95,
            spa: 65,
            spd: 115,
            spe: 110
        },
        weight: 56.4,
        kind: '一般',
        stage: 'メガ',
        final_stage: 3,
        forms: ['エルレイド', 'メガエルレイド'],
        formButtons: ['通常', 'メガ']
    },
    'ダイノーズ': {
        dexNo: 476,
        types: ['いわ', 'はがね'],
        abilities: ['がんじょう', 'じりょく', 'すなのちから'],
        baseStats: {
            hp: 60,
            atk: 55,
            def: 145,
            spa: 75,
            spd: 150,
            spe: 40
        },
        weight: 340.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ヨノワール': {
        dexNo: 477,
        types: ['ゴースト'],
        abilities: ['プレッシャー', '', 'おみとおし'],
        baseStats: {
            hp: 45,
            atk: 100,
            def: 135,
            spa: 65,
            spd: 135,
            spe: 45
        },
        weight: 106.6,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ユキメノコ': {
        dexNo: 478,
        types: ['こおり', 'ゴースト'],
        abilities: ['ゆきがくれ', '', 'のろわれボディ'],
        baseStats: {
            hp: 70,
            atk: 80,
            def: 70,
            spa: 80,
            spd: 70,
            spe: 110
        },
        weight: 26.6,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ロトム': {
        dexNo: 479,
        types: ['でんき', 'ゴースト'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 50,
            atk: 50,
            def: 77,
            spa: 95,
            spd: 77,
            spe: 91
        },
        weight: 0.3,
        kind: '一般',
        stage: 1,
        final_stage: 1,
        forms: ['ロトム', 'ヒートロトム', 'ウォッシュロトム', 'フロストロトム', 'スピンロトム', 'カットロトム'],
        formButtons: ['通常', '炎', '水', '氷', '飛', '草']
    },
    'ヒートロトム': {
        dexNo: 479,
        types: ['でんき', 'ほのお'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 50,
            atk: 65,
            def: 107,
            spa: 105,
            spd: 107,
            spe: 86
        },
        weight: 0.3,
        kind: '一般',
        stage: 1,
        final_stage: 1,
        forms: ['ロトム', 'ヒートロトム', 'ウォッシュロトム', 'フロストロトム', 'スピンロトム', 'カットロトム'],
        formButtons: ['通常', '炎', '水', '氷', '飛', '草']
    },
    'ウォッシュロトム': {
        dexNo: 479,
        types: ['でんき', 'みず'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 50,
            atk: 65,
            def: 107,
            spa: 105,
            spd: 107,
            spe: 86
        },
        weight: 0.3,
        kind: '一般',
        stage: 1,
        final_stage: 1,
        forms: ['ロトム', 'ヒートロトム', 'ウォッシュロトム', 'フロストロトム', 'スピンロトム', 'カットロトム'],
        formButtons: ['通常', '炎', '水', '氷', '飛', '草']
    },
    'フロストロトム': {
        dexNo: 479,
        types: ['でんき', 'こおり'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 50,
            atk: 65,
            def: 107,
            spa: 105,
            spd: 107,
            spe: 86
        },
        weight: 0.3,
        kind: '一般',
        stage: 1,
        final_stage: 1,
        forms: ['ロトム', 'ヒートロトム', 'ウォッシュロトム', 'フロストロトム', 'スピンロトム', 'カットロトム'],
        formButtons: ['通常', '炎', '水', '氷', '飛', '草']
    },
    'スピンロトム': {
        dexNo: 479,
        types: ['でんき', 'ひこう'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 50,
            atk: 65,
            def: 107,
            spa: 105,
            spd: 107,
            spe: 86
        },
        weight: 0.3,
        kind: '一般',
        stage: 1,
        final_stage: 1,
        forms: ['ロトム', 'ヒートロトム', 'ウォッシュロトム', 'フロストロトム', 'スピンロトム', 'カットロトム'],
        formButtons: ['通常', '炎', '水', '氷', '飛', '草']
    },
    'カットロトム': {
        dexNo: 479,
        types: ['でんき', 'くさ'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 50,
            atk: 65,
            def: 107,
            spa: 105,
            spd: 107,
            spe: 86
        },
        weight: 0.3,
        kind: '一般',
        stage: 1,
        final_stage: 1,
        forms: ['ロトム', 'ヒートロトム', 'ウォッシュロトム', 'フロストロトム', 'スピンロトム', 'カットロトム'],
        formButtons: ['通常', '炎', '水', '氷', '飛', '草']
    },
    'ユクシー': {
        dexNo: 480,
        types: ['エスパー'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 75,
            atk: 75,
            def: 130,
            spa: 75,
            spd: 130,
            spe: 95
        },
        weight: 0.3,
        kind: '準伝',
        stage: 1,
        final_stage: 1
    },
    'エムリット': {
        dexNo: 481,
        types: ['エスパー'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 80,
            atk: 105,
            def: 105,
            spa: 105,
            spd: 105,
            spe: 80
        },
        weight: 0.3,
        kind: '準伝',
        stage: 1,
        final_stage: 1
    },
    'アグノム': {
        dexNo: 482,
        types: ['エスパー'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 75,
            atk: 125,
            def: 70,
            spa: 125,
            spd: 70,
            spe: 115
        },
        weight: 0.3,
        kind: '準伝',
        stage: 1,
        final_stage: 1
    },
    'ディアルガ': {
        dexNo: 483,
        types: ['はがね', 'ドラゴン'],
        abilities: ['プレッシャー', '', 'テレパシー'],
        baseStats: {
            hp: 100,
            atk: 120,
            def: 120,
            spa: 150,
            spd: 100,
            spe: 90
        },
        weight: 683.0,
        kind: '禁伝',
        stage: 1,
        final_stage: 1
    },
    'パルキア': {
        dexNo: 484,
        types: ['みず', 'ドラゴン'],
        abilities: ['プレッシャー', '', 'テレパシー'],
        baseStats: {
            hp: 90,
            atk: 120,
            def: 100,
            spa: 150,
            spd: 120,
            spe: 100
        },
        weight: 336.0,
        kind: '禁伝',
        stage: 1,
        final_stage: 1
    },
    'ヒードラン': {
        dexNo: 485,
        types: ['ほのお', 'はがね'],
        abilities: ['もらいび', '', 'ほのおのからだ'],
        baseStats: {
            hp: 91,
            atk: 90,
            def: 106,
            spa: 130,
            spd: 106,
            spe: 77
        },
        weight: 430.0,
        kind: '準伝',
        stage: 1,
        final_stage: 1
    },
    'レジギガス': {
        dexNo: 486,
        types: ['ノーマル'],
        abilities: ['スロースタート', '', ''],
        baseStats: {
            hp: 110,
            atk: 160,
            def: 110,
            spa: 80,
            spd: 110,
            spe: 100
        },
        weight: 420.0,
        kind: '準伝',
        stage: 1,
        final_stage: 1
    },
    'ギラティナ(アナザー)': {
        dexNo: 487,
        types: ['ゴースト', 'ドラゴン'],
        abilities: ['プレッシャー', '', 'テレパシー'],
        baseStats: {
            hp: 150,
            atk: 100,
            def: 120,
            spa: 100,
            spd: 120,
            spe: 90
        },
        weight: 750.0,
        kind: '禁伝',
        stage: 1,
        final_stage: 1,
        forms: ['ギラティナ(アナザー)', 'ギラティナ(オリジン)'],
        formButtons: ['アナザー', 'オリジン']
    },
    'ギラティナ(オリジン)': {
        dexNo: 487,
        types: ['ゴースト', 'ドラゴン'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 150,
            atk: 120,
            def: 100,
            spa: 120,
            spd: 100,
            spe: 90
        },
        weight: 650.0,
        kind: '禁伝',
        stage: 1,
        final_stage: 1,
        forms: ['ギラティナ(アナザー)', 'ギラティナ(オリジン)'],
        formButtons: ['アナザー', 'オリジン']
    },
    'クレセリア': {
        dexNo: 488,
        types: ['エスパー'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 120,
            atk: 70,
            def: 120,
            spa: 75,
            spd: 130,
            spe: 85
        },
        weight: 85.6,
        kind: '準伝',
        stage: 1,
        final_stage: 1
    },
    'フィオネ': {
        dexNo: 489,
        types: ['みず'],
        abilities: ['うるおいボディ', '', ''],
        baseStats: {
            hp: 80,
            atk: 80,
            def: 80,
            spa: 80,
            spd: 80,
            spe: 80
        },
        weight: 3.1,
        kind: '幻',
        stage: 1,
        final_stage: 1
    },
    'マナフィ': {
        dexNo: 490,
        types: ['みず'],
        abilities: ['うるおいボディ', '', ''],
        baseStats: {
            hp: 100,
            atk: 100,
            def: 100,
            spa: 100,
            spd: 100,
            spe: 100
        },
        weight: 1.4,
        kind: '幻',
        stage: 1,
        final_stage: 1
    },
    'ダークライ': {
        dexNo: 491,
        types: ['あく'],
        abilities: ['ナイトメア', '', ''],
        baseStats: {
            hp: 70,
            atk: 90,
            def: 90,
            spa: 135,
            spd: 90,
            spe: 125
        },
        weight: 50.5,
        kind: '幻',
        stage: 1,
        final_stage: 1
    },
    'シェイミ(ランド)': {
        dexNo: 492,
        types: ['くさ'],
        abilities: ['しぜんかいふく', '', ''],
        baseStats: {
            hp: 100,
            atk: 100,
            def: 100,
            spa: 100,
            spd: 100,
            spe: 100
        },
        weight: 2.1,
        kind: '幻',
        stage: 1,
        final_stage: 1,
        forms: ['シェイミ(ランド)', 'シェイミ(スカイ)'],
        formButtons: ['ランド', 'スカイ']
    },
    'シェイミ(スカイ)': {
        dexNo: 492,
        types: ['くさ', 'ひこう'],
        abilities: ['てんのめぐみ', '', ''],
        baseStats: {
            hp: 100,
            atk: 103,
            def: 75,
            spa: 120,
            spd: 75,
            spe: 127
        },
        weight: 5.2,
        kind: '幻',
        stage: 1,
        final_stage: 1,
        forms: ['シェイミ(ランド)', 'シェイミ(スカイ)'],
        formButtons: ['ランド', 'スカイ']
    },
    'アルセウス': {
        dexNo: 493,
        types: ['ノーマル'],
        abilities: ['マルチタイプ', '', ''],
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        weight: 320.0,
        kind: '幻',
        stage: 1,
        final_stage: 1
    },
    'ビクティニ': {
        dexNo: 494,
        types: ['ほのお', 'エスパー'],
        abilities: ['しょうりのほし', '', ''],
        baseStats: {
            hp: 100,
            atk: 100,
            def: 100,
            spa: 100,
            spd: 100,
            spe: 100
        },
        weight: 4.0,
        kind: '幻',
        stage: 1,
        final_stage: 1
    },
    'ツタージャ': {
        dexNo: 495,
        types: ['くさ'],
        abilities: ['しんりょく', '', 'あまのじゃく'],
        baseStats: {
            hp: 45,
            atk: 45,
            def: 55,
            spa: 45,
            spd: 55,
            spe: 63
        },
        weight: 8.1,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ジャノビー': {
        dexNo: 496,
        types: ['くさ'],
        abilities: ['しんりょく', '', 'あまのじゃく'],
        baseStats: {
            hp: 60,
            atk: 60,
            def: 75,
            spa: 60,
            spd: 75,
            spe: 83
        },
        weight: 16.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ジャローダ': {
        dexNo: 497,
        types: ['くさ'],
        abilities: ['しんりょく', '', 'あまのじゃく'],
        baseStats: {
            hp: 75,
            atk: 75,
            def: 95,
            spa: 75,
            spd: 95,
            spe: 113
        },
        weight: 63.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ポカブ': {
        dexNo: 498,
        types: ['ほのお'],
        abilities: ['もうか', '', 'あついしぼう'],
        baseStats: {
            hp: 65,
            atk: 63,
            def: 45,
            spa: 45,
            spd: 45,
            spe: 45
        },
        weight: 9.9,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'チャオブー': {
        dexNo: 499,
        types: ['ほのお', 'かくとう'],
        abilities: ['もうか', '', 'あついしぼう'],
        baseStats: {
            hp: 90,
            atk: 93,
            def: 55,
            spa: 70,
            spd: 55,
            spe: 55
        },
        weight: 55.5,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'エンブオー': {
        dexNo: 500,
        types: ['ほのお', 'かくとう'],
        abilities: ['もうか', '', 'すてみ'],
        baseStats: {
            hp: 110,
            atk: 123,
            def: 65,
            spa: 100,
            spd: 65,
            spe: 65
        },
        weight: 150.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ミジュマル': {
        dexNo: 501,
        types: ['みず'],
        abilities: ['げきりゅう', '', 'シェルアーマー'],
        baseStats: {
            hp: 55,
            atk: 55,
            def: 45,
            spa: 63,
            spd: 45,
            spe: 45
        },
        weight: 5.9,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'フタチマル': {
        dexNo: 502,
        types: ['みず'],
        abilities: ['げきりゅう', '', 'シェルアーマー'],
        baseStats: {
            hp: 75,
            atk: 75,
            def: 60,
            spa: 83,
            spd: 60,
            spe: 60
        },
        weight: 24.5,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ダイケンキ': {
        dexNo: 503,
        types: ['みず'],
        abilities: ['げきりゅう', '', 'シェルアーマー'],
        baseStats: {
            hp: 95,
            atk: 100,
            def: 85,
            spa: 108,
            spd: 70,
            spe: 70
        },
        weight: 94.6,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ミネズミ': {
        dexNo: 504,
        types: ['ノーマル'],
        abilities: ['にげあし', 'するどいめ', 'アナライズ'],
        baseStats: {
            hp: 45,
            atk: 55,
            def: 39,
            spa: 35,
            spd: 39,
            spe: 42
        },
        weight: 11.6,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ミルホッグ': {
        dexNo: 505,
        types: ['ノーマル'],
        abilities: ['はっこう', 'するどいめ', 'アナライズ'],
        baseStats: {
            hp: 60,
            atk: 85,
            def: 69,
            spa: 60,
            spd: 69,
            spe: 77
        },
        weight: 27.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ヨーテリー': {
        dexNo: 506,
        types: ['ノーマル'],
        abilities: ['やるき', 'ものひろい', 'にげあし'],
        baseStats: {
            hp: 45,
            atk: 60,
            def: 45,
            spa: 25,
            spd: 45,
            spe: 55
        },
        weight: 4.1,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ハーデリア': {
        dexNo: 507,
        types: ['ノーマル'],
        abilities: ['いかく', 'すなかき', 'きもったま'],
        baseStats: {
            hp: 65,
            atk: 80,
            def: 65,
            spa: 35,
            spd: 65,
            spe: 60
        },
        weight: 14.7,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ムーランド': {
        dexNo: 508,
        types: ['ノーマル'],
        abilities: ['いかく', 'すなかき', 'きもったま'],
        baseStats: {
            hp: 85,
            atk: 110,
            def: 90,
            spa: 45,
            spd: 90,
            spe: 80
        },
        weight: 61.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'チョロネコ': {
        dexNo: 509,
        types: ['あく'],
        abilities: ['じゅうなん', 'かるわざ', 'いたずらごころ'],
        baseStats: {
            hp: 41,
            atk: 50,
            def: 37,
            spa: 50,
            spd: 37,
            spe: 66
        },
        weight: 10.1,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'レパルダス': {
        dexNo: 510,
        types: ['あく'],
        abilities: ['じゅうなん', 'かるわざ', 'いたずらごころ'],
        baseStats: {
            hp: 64,
            atk: 88,
            def: 50,
            spa: 88,
            spd: 50,
            spe: 106
        },
        weight: 37.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ヤナップ': {
        dexNo: 511,
        types: ['くさ'],
        abilities: ['くいしんぼう', '', 'しんりょく'],
        baseStats: {
            hp: 50,
            atk: 53,
            def: 48,
            spa: 53,
            spd: 48,
            spe: 64
        },
        weight: 10.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ヤナッキー': {
        dexNo: 512,
        types: ['くさ'],
        abilities: ['くいしんぼう', '', 'しんりょく'],
        baseStats: {
            hp: 75,
            atk: 98,
            def: 63,
            spa: 98,
            spd: 63,
            spe: 101
        },
        weight: 30.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'バオップ': {
        dexNo: 513,
        types: ['ほのお'],
        abilities: ['くいしんぼう', '', 'もうか'],
        baseStats: {
            hp: 50,
            atk: 53,
            def: 48,
            spa: 53,
            spd: 48,
            spe: 64
        },
        weight: 11.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'バオッキー': {
        dexNo: 514,
        types: ['ほのお'],
        abilities: ['くいしんぼう', '', 'もうか'],
        baseStats: {
            hp: 75,
            atk: 98,
            def: 63,
            spa: 98,
            spd: 63,
            spe: 101
        },
        weight: 28.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ヒヤップ': {
        dexNo: 515,
        types: ['みず'],
        abilities: ['くいしんぼう', '', 'げきりゅう'],
        baseStats: {
            hp: 50,
            atk: 53,
            def: 48,
            spa: 53,
            spd: 48,
            spe: 64
        },
        weight: 13.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ヒヤッキー': {
        dexNo: 516,
        types: ['みず'],
        abilities: ['くいしんぼう', '', 'げきりゅう'],
        baseStats: {
            hp: 75,
            atk: 98,
            def: 63,
            spa: 98,
            spd: 63,
            spe: 101
        },
        weight: 29.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ムンナ': {
        dexNo: 517,
        types: ['エスパー'],
        abilities: ['よちむ', 'シンクロ', 'テレパシー'],
        baseStats: {
            hp: 76,
            atk: 25,
            def: 45,
            spa: 67,
            spd: 55,
            spe: 24
        },
        weight: 23.3,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ムシャーナ': {
        dexNo: 518,
        types: ['エスパー'],
        abilities: ['よちむ', 'シンクロ', 'テレパシー'],
        baseStats: {
            hp: 116,
            atk: 55,
            def: 85,
            spa: 107,
            spd: 95,
            spe: 29
        },
        weight: 60.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'マメパト': {
        dexNo: 519,
        types: ['ノーマル', 'ひこう'],
        abilities: ['はとむね', 'きょううん', 'とうそうしん'],
        baseStats: {
            hp: 50,
            atk: 55,
            def: 50,
            spa: 36,
            spd: 30,
            spe: 43
        },
        weight: 2.1,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ハトーボー': {
        dexNo: 520,
        types: ['ノーマル', 'ひこう'],
        abilities: ['はとむね', 'きょううん', 'とうそうしん'],
        baseStats: {
            hp: 62,
            atk: 77,
            def: 62,
            spa: 50,
            spd: 42,
            spe: 65
        },
        weight: 15.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ケンホロウ': {
        dexNo: 521,
        types: ['ノーマル', 'ひこう'],
        abilities: ['はとむね', 'きょううん', 'とうそうしん'],
        baseStats: {
            hp: 80,
            atk: 115,
            def: 80,
            spa: 65,
            spd: 55,
            spe: 93
        },
        weight: 29.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'シママ': {
        dexNo: 522,
        types: ['でんき'],
        abilities: ['ひらいしん', 'でんきエンジン', 'そうしょく'],
        baseStats: {
            hp: 45,
            atk: 60,
            def: 32,
            spa: 50,
            spd: 32,
            spe: 76
        },
        weight: 29.8,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ゼブライカ': {
        dexNo: 523,
        types: ['でんき'],
        abilities: ['ひらいしん', 'でんきエンジン', 'そうしょく'],
        baseStats: {
            hp: 75,
            atk: 100,
            def: 63,
            spa: 80,
            spd: 63,
            spe: 116
        },
        weight: 79.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ダンゴロ': {
        dexNo: 524,
        types: ['いわ'],
        abilities: ['がんじょう', '', 'すなのちから'],
        baseStats: {
            hp: 55,
            atk: 75,
            def: 85,
            spa: 25,
            spd: 25,
            spe: 15
        },
        weight: 18.0,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ガントル': {
        dexNo: 525,
        types: ['いわ'],
        abilities: ['がんじょう', '', 'すなのちから'],
        baseStats: {
            hp: 70,
            atk: 105,
            def: 105,
            spa: 50,
            spd: 40,
            spe: 20
        },
        weight: 102.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ギガイアス': {
        dexNo: 526,
        types: ['いわ'],
        abilities: ['がんじょう', '', 'すなのちから'],
        baseStats: {
            hp: 85,
            atk: 135,
            def: 130,
            spa: 60,
            spd: 80,
            spe: 25
        },
        weight: 260.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'コロモリ': {
        dexNo: 527,
        types: ['エスパー', 'ひこう'],
        abilities: ['てんねん', 'ぶきよう', 'たんじゅん'],
        baseStats: {
            hp: 55,
            atk: 45,
            def: 43,
            spa: 55,
            spd: 43,
            spe: 72
        },
        weight: 2.1,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ココロモリ': {
        dexNo: 528,
        types: ['エスパー', 'ひこう'],
        abilities: ['てんねん', 'ぶきよう', 'たんじゅん'],
        baseStats: {
            hp: 67,
            atk: 57,
            def: 55,
            spa: 77,
            spd: 55,
            spe: 114
        },
        weight: 10.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'モグリュー': {
        dexNo: 529,
        types: ['じめん'],
        abilities: ['すなかき', 'すなのちから', 'かたやぶり'],
        baseStats: {
            hp: 60,
            atk: 85,
            def: 40,
            spa: 30,
            spd: 45,
            spe: 68
        },
        weight: 8.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ドリュウズ': {
        dexNo: 530,
        types: ['じめん', 'はがね'],
        abilities: ['すなかき', 'すなのちから', 'かたやぶり'],
        baseStats: {
            hp: 110,
            atk: 135,
            def: 60,
            spa: 50,
            spd: 65,
            spe: 88
        },
        weight: 40.4,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'タブンネ': {
        dexNo: 531,
        types: ['ノーマル'],
        abilities: ['いやしのこころ', 'さいせいりょく', 'ぶきよう'],
        baseStats: {
            hp: 103,
            atk: 60,
            def: 86,
            spa: 60,
            spd: 86,
            spe: 50
        },
        weight: 31.0,
        kind: '一般',
        stage: 1,
        final_stage: 1,
        forms: ['タブンネ', 'メガタブンネ'],
        formButtons: ['通常', 'メガ']
    },
    'メガタブンネ': {
        dexNo: 531,
        types: ['ノーマル', 'フェアリー'],
        abilities: ['いやしのこころ', '', ''],
        baseStats: {
            hp: 103,
            atk: 60,
            def: 126,
            spa: 80,
            spd: 126,
            spe: 50
        },
        weight: 32.0,
        kind: '一般',
        stage: 'メガ',
        final_stage: 1,
        forms: ['タブンネ', 'メガタブンネ'],
        formButtons: ['通常', 'メガ']
    },
    'ドッコラー': {
        dexNo: 532,
        types: ['かくとう'],
        abilities: ['こんじょう', 'ちからずく', 'てつのこぶし'],
        baseStats: {
            hp: 75,
            atk: 80,
            def: 55,
            spa: 25,
            spd: 35,
            spe: 35
        },
        weight: 12.5,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ドテッコツ': {
        dexNo: 533,
        types: ['かくとう'],
        abilities: ['こんじょう', 'ちからずく', 'てつのこぶし'],
        baseStats: {
            hp: 85,
            atk: 105,
            def: 85,
            spa: 40,
            spd: 50,
            spe: 40
        },
        weight: 40.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ローブシン': {
        dexNo: 534,
        types: ['かくとう'],
        abilities: ['こんじょう', 'ちからずく', 'てつのこぶし'],
        baseStats: {
            hp: 105,
            atk: 140,
            def: 95,
            spa: 55,
            spd: 65,
            spe: 45
        },
        weight: 87.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'オタマロ': {
        dexNo: 535,
        types: ['みず'],
        abilities: ['すいすい', 'うるおいボディ', 'ちょすい'],
        baseStats: {
            hp: 50,
            atk: 50,
            def: 40,
            spa: 50,
            spd: 40,
            spe: 64
        },
        weight: 4.5,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ガマガル': {
        dexNo: 536,
        types: ['みず', 'じめん'],
        abilities: ['すいすい', 'うるおいボディ', 'ちょすい'],
        baseStats: {
            hp: 75,
            atk: 65,
            def: 55,
            spa: 65,
            spd: 55,
            spe: 69
        },
        weight: 17.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ガマゲロゲ': {
        dexNo: 537,
        types: ['みず', 'じめん'],
        abilities: ['すいすい', 'どくしゅ', 'ちょすい'],
        baseStats: {
            hp: 105,
            atk: 95,
            def: 75,
            spa: 85,
            spd: 75,
            spe: 74
        },
        weight: 62.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ナゲキ': {
        dexNo: 538,
        types: ['かくとう'],
        abilities: ['こんじょう', 'せいしんりょく', 'かたやぶり'],
        baseStats: {
            hp: 120,
            atk: 100,
            def: 85,
            spa: 30,
            spd: 85,
            spe: 45
        },
        weight: 55.5,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'ダゲキ': {
        dexNo: 539,
        types: ['かくとう'],
        abilities: ['がんじょう', 'せいしんりょく', 'かたやぶり'],
        baseStats: {
            hp: 75,
            atk: 125,
            def: 75,
            spa: 30,
            spd: 75,
            spe: 85
        },
        weight: 51.0,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'クルミル': {
        dexNo: 540,
        types: ['むし', 'くさ'],
        abilities: ['むしのしらせ', 'ようりょくそ', 'ぼうじん'],
        baseStats: {
            hp: 45,
            atk: 53,
            def: 70,
            spa: 40,
            spd: 60,
            spe: 42
        },
        weight: 2.5,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'クルマユ': {
        dexNo: 541,
        types: ['むし', 'くさ'],
        abilities: ['リーフガード', 'ようりょくそ', 'ぼうじん'],
        baseStats: {
            hp: 55,
            atk: 63,
            def: 90,
            spa: 50,
            spd: 80,
            spe: 42
        },
        weight: 7.3,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ハハコモリ': {
        dexNo: 542,
        types: ['むし', 'くさ'],
        abilities: ['むしのしらせ', 'ようりょくそ', 'ぼうじん'],
        baseStats: {
            hp: 75,
            atk: 103,
            def: 80,
            spa: 70,
            spd: 80,
            spe: 92
        },
        weight: 20.5,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'フシデ': {
        dexNo: 543,
        types: ['むし', 'どく'],
        abilities: ['どくのトゲ', 'むしのしらせ', 'かそく'],
        baseStats: {
            hp: 30,
            atk: 45,
            def: 59,
            spa: 30,
            spd: 39,
            spe: 57
        },
        weight: 5.3,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ホイーガ': {
        dexNo: 544,
        types: ['むし', 'どく'],
        abilities: ['どくのトゲ', 'むしのしらせ', 'かそく'],
        baseStats: {
            hp: 40,
            atk: 55,
            def: 99,
            spa: 40,
            spd: 79,
            spe: 47
        },
        weight: 58.5,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ペンドラー': {
        dexNo: 545,
        types: ['むし', 'どく'],
        abilities: ['どくのトゲ', 'むしのしらせ', 'かそく'],
        baseStats: {
            hp: 60,
            atk: 100,
            def: 89,
            spa: 55,
            spd: 69,
            spe: 112
        },
        weight: 200.5,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'モンメン': {
        dexNo: 546,
        types: ['くさ'],
        abilities: ['いたずらごころ', 'すりぬけ', 'ようりょくそ'],
        baseStats: {
            hp: 40,
            atk: 27,
            def: 60,
            spa: 37,
            spd: 50,
            spe: 66
        },
        weight: 0.6,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'エルフーン': {
        dexNo: 547,
        types: ['くさ', 'フェアリー'],
        abilities: ['いたずらごころ', 'すりぬけ', 'ようりょくそ'],
        baseStats: {
            hp: 60,
            atk: 67,
            def: 85,
            spa: 77,
            spd: 75,
            spe: 116
        },
        weight: 6.6,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'チュリネ': {
        dexNo: 548,
        types: ['くさ'],
        abilities: ['ようりょくそ', 'マイペース', 'リーフガード'],
        baseStats: {
            hp: 45,
            atk: 35,
            def: 50,
            spa: 70,
            spd: 50,
            spe: 30
        },
        weight: 6.6,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ドレディア': {
        dexNo: 549,
        types: ['くさ'],
        abilities: ['ようりょくそ', 'マイペース', 'リーフガード'],
        baseStats: {
            hp: 70,
            atk: 60,
            def: 75,
            spa: 110,
            spd: 75,
            spe: 90
        },
        weight: 16.3,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'バスラオ(赤)': {
        dexNo: 550,
        types: ['みず'],
        abilities: ['すてみ', 'てきおうりょく', 'かたやぶり'],
        baseStats: {
            hp: 70,
            atk: 92,
            def: 65,
            spa: 80,
            spd: 55,
            spe: 98
        },
        weight: 18.0,
        kind: '一般',
        stage: 1,
        final_stage: 1,
        forms: ['バスラオ(赤)', 'バスラオ(青)'],
        formButtons: ['赤', '青']
    },
    'バスラオ(青)': {
        dexNo: 550,
        types: ['みず'],
        abilities: ['いしあたま', 'てきおうりょく', 'かたやぶり'],
        baseStats: {
            hp: 70,
            atk: 92,
            def: 65,
            spa: 80,
            spd: 55,
            spe: 98
        },
        weight: 18.0,
        kind: '一般',
        stage: 1,
        final_stage: 1,
        forms: ['バスラオ(赤)', 'バスラオ(青)'],
        formButtons: ['赤', '青']
    },
    'メグロコ': {
        dexNo: 551,
        types: ['じめん', 'あく'],
        abilities: ['いかく', 'じしんかじょう', 'いかりのつぼ'],
        baseStats: {
            hp: 50,
            atk: 72,
            def: 35,
            spa: 35,
            spd: 35,
            spe: 65
        },
        weight: 15.2,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ワルビル': {
        dexNo: 552,
        types: ['じめん', 'あく'],
        abilities: ['いかく', 'じしんかじょう', 'いかりのつぼ'],
        baseStats: {
            hp: 60,
            atk: 82,
            def: 45,
            spa: 45,
            spd: 45,
            spe: 74
        },
        weight: 33.4,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ワルビアル': {
        dexNo: 553,
        types: ['じめん', 'あく'],
        abilities: ['いかく', 'じしんかじょう', 'いかりのつぼ'],
        baseStats: {
            hp: 95,
            atk: 117,
            def: 80,
            spa: 65,
            spd: 70,
            spe: 92
        },
        weight: 96.3,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ダルマッカ': {
        dexNo: 554,
        types: ['ほのお'],
        abilities: ['はりきり', '', 'せいしんりょく'],
        baseStats: {
            hp: 70,
            atk: 90,
            def: 45,
            spa: 15,
            spd: 45,
            spe: 50
        },
        weight: 37.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ヒヒダルマ': {
        dexNo: 555,
        types: ['ほのお'],
        abilities: ['ちからずく', '', 'ダルマモード'],
        baseStats: {
            hp: 105,
            atk: 140,
            def: 55,
            spa: 30,
            spd: 55,
            spe: 95
        },
        weight: 92.9,
        kind: '一般',
        stage: 3,
        final_stage: 2,
        forms: ['ヒヒダルマ', 'ヒヒダルマ(ダルマ)'],
        formButtons: ['通常', 'ダルマ']
    },
    'ヒヒダルマ(ダルマ)': {
        dexNo: 555,
        types: ['ほのお', 'エスパー'],
        abilities: ['ちからずく', '', 'ダルマモード'],
        baseStats: {
            hp: 105,
            atk: 30,
            def: 105,
            spa: 140,
            spd: 105,
            spe: 55
        },
        weight: 92.9,
        kind: '一般',
        stage: 3,
        final_stage: 2,
        forms: ['ヒヒダルマ', 'ヒヒダルマ(ダルマ)'],
        formButtons: ['通常', 'ダルマ']
    },
    'マラカッチ': {
        dexNo: 556,
        types: ['くさ'],
        abilities: ['ちょすい', 'ようりょくそ', 'よびみず'],
        baseStats: {
            hp: 75,
            atk: 86,
            def: 67,
            spa: 106,
            spd: 67,
            spe: 60
        },
        weight: 28.0,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'イシズマイ': {
        dexNo: 557,
        types: ['むし', 'いわ'],
        abilities: ['がんじょう', 'シェルアーマー', 'くだけるよろい'],
        baseStats: {
            hp: 50,
            atk: 65,
            def: 85,
            spa: 35,
            spd: 35,
            spe: 55
        },
        weight: 14.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'イワパレス': {
        dexNo: 558,
        types: ['むし', 'いわ'],
        abilities: ['がんじょう', 'シェルアーマー', 'くだけるよろい'],
        baseStats: {
            hp: 70,
            atk: 95,
            def: 125,
            spa: 65,
            spd: 75,
            spe: 45
        },
        weight: 200.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ズルッグ': {
        dexNo: 559,
        types: ['あく', 'かくとう'],
        abilities: ['だっぴ', 'じしんかじょう', 'いかく'],
        baseStats: {
            hp: 50,
            atk: 75,
            def: 70,
            spa: 35,
            spd: 70,
            spe: 48
        },
        weight: 11.8,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ズルズキン': {
        dexNo: 560,
        types: ['あく', 'かくとう'],
        abilities: ['だっぴ', 'じしんかじょう', 'いかく'],
        baseStats: {
            hp: 65,
            atk: 90,
            def: 115,
            spa: 45,
            spd: 115,
            spe: 58
        },
        weight: 30.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'シンボラー': {
        dexNo: 561,
        types: ['エスパー', 'ひこう'],
        abilities: ['ミラクルスキン', 'マジックガード', 'いろめがね'],
        baseStats: {
            hp: 72,
            atk: 58,
            def: 80,
            spa: 103,
            spd: 80,
            spe: 97
        },
        weight: 14.0,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'デスマス': {
        dexNo: 562,
        types: ['ゴースト'],
        abilities: ['ミイラ', '', ''],
        baseStats: {
            hp: 38,
            atk: 30,
            def: 85,
            spa: 55,
            spd: 65,
            spe: 30
        },
        weight: 1.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'デスカーン': {
        dexNo: 563,
        types: ['ゴースト'],
        abilities: ['ミイラ', '', ''],
        baseStats: {
            hp: 58,
            atk: 50,
            def: 145,
            spa: 95,
            spd: 105,
            spe: 30
        },
        weight: 76.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'プロトーガ': {
        dexNo: 564,
        types: ['みず', 'いわ'],
        abilities: ['ハードロック', 'がんじょう', 'すいすい'],
        baseStats: {
            hp: 54,
            atk: 78,
            def: 103,
            spa: 53,
            spd: 45,
            spe: 22
        },
        weight: 16.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'アバゴーラ': {
        dexNo: 565,
        types: ['みず', 'いわ'],
        abilities: ['ハードロック', 'がんじょう', 'すいすい'],
        baseStats: {
            hp: 74,
            atk: 108,
            def: 133,
            spa: 83,
            spd: 65,
            spe: 32
        },
        weight: 81.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'アーケン': {
        dexNo: 566,
        types: ['いわ', 'ひこう'],
        abilities: ['よわき', '', ''],
        baseStats: {
            hp: 55,
            atk: 112,
            def: 45,
            spa: 74,
            spd: 45,
            spe: 70
        },
        weight: 9.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'アーケオス': {
        dexNo: 567,
        types: ['いわ', 'ひこう'],
        abilities: ['よわき', '', ''],
        baseStats: {
            hp: 75,
            atk: 140,
            def: 65,
            spa: 112,
            spd: 65,
            spe: 110
        },
        weight: 32.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ヤブクロン': {
        dexNo: 568,
        types: ['どく'],
        abilities: ['あくしゅう', 'ねんちゃく', 'ゆうばく'],
        baseStats: {
            hp: 50,
            atk: 50,
            def: 62,
            spa: 40,
            spd: 62,
            spe: 65
        },
        weight: 31.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ダストダス': {
        dexNo: 569,
        types: ['どく'],
        abilities: ['あくしゅう', 'くだけるよろい', 'ゆうばく'],
        baseStats: {
            hp: 80,
            atk: 95,
            def: 82,
            spa: 60,
            spd: 82,
            spe: 75
        },
        weight: 107.3,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ゾロア': {
        dexNo: 570,
        types: ['あく'],
        abilities: ['イリュージョン', '', ''],
        baseStats: {
            hp: 40,
            atk: 65,
            def: 40,
            spa: 80,
            spd: 40,
            spe: 65
        },
        weight: 12.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ゾロアーク': {
        dexNo: 571,
        types: ['あく'],
        abilities: ['イリュージョン', '', ''],
        baseStats: {
            hp: 60,
            atk: 105,
            def: 60,
            spa: 120,
            spd: 60,
            spe: 105
        },
        weight: 81.1,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'チラーミィ': {
        dexNo: 572,
        types: ['ノーマル'],
        abilities: ['メロメロボディ', 'テクニシャン', 'スキルリンク'],
        baseStats: {
            hp: 55,
            atk: 50,
            def: 40,
            spa: 40,
            spd: 40,
            spe: 75
        },
        weight: 5.8,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'チラチーノ': {
        dexNo: 573,
        types: ['ノーマル'],
        abilities: ['メロメロボディ', 'テクニシャン', 'スキルリンク'],
        baseStats: {
            hp: 75,
            atk: 95,
            def: 60,
            spa: 65,
            spd: 60,
            spe: 115
        },
        weight: 7.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ゴチム': {
        dexNo: 574,
        types: ['エスパー'],
        abilities: ['おみとおし', 'かちき', 'かげふみ'],
        baseStats: {
            hp: 45,
            atk: 30,
            def: 50,
            spa: 55,
            spd: 65,
            spe: 45
        },
        weight: 5.8,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ゴチミル': {
        dexNo: 575,
        types: ['エスパー'],
        abilities: ['おみとおし', 'かちき', 'かげふみ'],
        baseStats: {
            hp: 60,
            atk: 45,
            def: 70,
            spa: 75,
            spd: 85,
            spe: 55
        },
        weight: 18.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ゴチルゼル': {
        dexNo: 576,
        types: ['エスパー'],
        abilities: ['おみとおし', 'かちき', 'かげふみ'],
        baseStats: {
            hp: 70,
            atk: 55,
            def: 95,
            spa: 95,
            spd: 110,
            spe: 65
        },
        weight: 44.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ユニラン': {
        dexNo: 577,
        types: ['エスパー'],
        abilities: ['ぼうじん', 'マジックガード', 'さいせいりょく'],
        baseStats: {
            hp: 45,
            atk: 30,
            def: 40,
            spa: 105,
            spd: 50,
            spe: 20
        },
        weight: 1.0,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ダブラン': {
        dexNo: 578,
        types: ['エスパー'],
        abilities: ['ぼうじん', 'マジックガード', 'さいせいりょく'],
        baseStats: {
            hp: 65,
            atk: 40,
            def: 50,
            spa: 125,
            spd: 60,
            spe: 30
        },
        weight: 8.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ランクルス': {
        dexNo: 579,
        types: ['エスパー'],
        abilities: ['ぼうじん', 'マジックガード', 'さいせいりょく'],
        baseStats: {
            hp: 110,
            atk: 65,
            def: 75,
            spa: 125,
            spd: 85,
            spe: 30
        },
        weight: 20.1,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'コアルヒー': {
        dexNo: 580,
        types: ['みず', 'ひこう'],
        abilities: ['するどいめ', 'はとむね', 'うるおいボディ'],
        baseStats: {
            hp: 62,
            atk: 44,
            def: 50,
            spa: 44,
            spd: 50,
            spe: 55
        },
        weight: 5.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'スワンナ': {
        dexNo: 581,
        types: ['みず', 'ひこう'],
        abilities: ['するどいめ', 'はとむね', 'うるおいボディ'],
        baseStats: {
            hp: 75,
            atk: 87,
            def: 63,
            spa: 87,
            spd: 63,
            spe: 98
        },
        weight: 24.2,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'バニプッチ': {
        dexNo: 582,
        types: ['こおり'],
        abilities: ['アイスボディ', '', 'くだけるよろい'],
        baseStats: {
            hp: 36,
            atk: 50,
            def: 50,
            spa: 65,
            spd: 60,
            spe: 44
        },
        weight: 5.7,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'バニリッチ': {
        dexNo: 583,
        types: ['こおり'],
        abilities: ['アイスボディ', '', 'くだけるよろい'],
        baseStats: {
            hp: 51,
            atk: 65,
            def: 65,
            spa: 80,
            spd: 75,
            spe: 59
        },
        weight: 41.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'バイバニラ': {
        dexNo: 584,
        types: ['こおり'],
        abilities: ['アイスボディ', '', 'くだけるよろい'],
        baseStats: {
            hp: 71,
            atk: 95,
            def: 85,
            spa: 110,
            spd: 95,
            spe: 79
        },
        weight: 57.5,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'シキジカ': {
        dexNo: 585,
        types: ['ノーマル', 'くさ'],
        abilities: ['ようりょくそ', 'そうしょく', 'てんのめぐみ'],
        baseStats: {
            hp: 60,
            atk: 60,
            def: 50,
            spa: 40,
            spd: 50,
            spe: 75
        },
        weight: 19.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'メブキジカ': {
        dexNo: 586,
        types: ['ノーマル', 'くさ'],
        abilities: ['ようりょくそ', 'そうしょく', 'てんのめぐみ'],
        baseStats: {
            hp: 80,
            atk: 100,
            def: 70,
            spa: 60,
            spd: 70,
            spe: 95
        },
        weight: 92.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'エモンガ': {
        dexNo: 587,
        types: ['でんき', 'ひこう'],
        abilities: ['せいでんき', '', 'でんきエンジン'],
        baseStats: {
            hp: 55,
            atk: 75,
            def: 60,
            spa: 75,
            spd: 60,
            spe: 103
        },
        weight: 5.0,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'カブルモ': {
        dexNo: 588,
        types: ['むし'],
        abilities: ['むしのしらせ', 'だっぴ', 'ノーガード'],
        baseStats: {
            hp: 50,
            atk: 75,
            def: 45,
            spa: 40,
            spd: 45,
            spe: 60
        },
        weight: 5.9,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'シュバルゴ': {
        dexNo: 589,
        types: ['むし', 'はがね'],
        abilities: ['むしのしらせ', 'シェルアーマー', 'ぼうじん'],
        baseStats: {
            hp: 70,
            atk: 135,
            def: 105,
            spa: 60,
            spd: 105,
            spe: 20
        },
        weight: 33.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'タマゲタケ': {
        dexNo: 590,
        types: ['くさ', 'どく'],
        abilities: ['ほうし', '', 'さいせいりょく'],
        baseStats: {
            hp: 69,
            atk: 55,
            def: 45,
            spa: 55,
            spd: 55,
            spe: 15
        },
        weight: 1.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'モロバレル': {
        dexNo: 591,
        types: ['くさ', 'どく'],
        abilities: ['ほうし', '', 'さいせいりょく'],
        baseStats: {
            hp: 114,
            atk: 85,
            def: 70,
            spa: 85,
            spd: 80,
            spe: 30
        },
        weight: 10.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'プルリル': {
        dexNo: 592,
        types: ['みず', 'ゴースト'],
        abilities: ['ちょすい', 'のろわれボディ', 'しめりけ'],
        baseStats: {
            hp: 55,
            atk: 40,
            def: 50,
            spa: 65,
            spd: 85,
            spe: 40
        },
        weight: 33.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ブルンゲル': {
        dexNo: 593,
        types: ['みず', 'ゴースト'],
        abilities: ['ちょすい', 'のろわれボディ', 'しめりけ'],
        baseStats: {
            hp: 100,
            atk: 60,
            def: 70,
            spa: 85,
            spd: 105,
            spe: 60
        },
        weight: 135.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ママンボウ': {
        dexNo: 594,
        types: ['みず'],
        abilities: ['いやしのこころ', 'うるおいボディ', 'さいせいりょく'],
        baseStats: {
            hp: 165,
            atk: 75,
            def: 80,
            spa: 40,
            spd: 45,
            spe: 65
        },
        weight: 31.6,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'バチュル': {
        dexNo: 595,
        types: ['むし', 'でんき'],
        abilities: ['ふくがん', 'きんちょうかん', 'むしのしらせ'],
        baseStats: {
            hp: 50,
            atk: 47,
            def: 50,
            spa: 57,
            spd: 50,
            spe: 65
        },
        weight: 0.6,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'デンチュラ': {
        dexNo: 596,
        types: ['むし', 'でんき'],
        abilities: ['ふくがん', 'きんちょうかん', 'むしのしらせ'],
        baseStats: {
            hp: 70,
            atk: 77,
            def: 60,
            spa: 97,
            spd: 60,
            spe: 108
        },
        weight: 14.3,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'テッシード': {
        dexNo: 597,
        types: ['くさ', 'はがね'],
        abilities: ['てつのトゲ', '', ''],
        baseStats: {
            hp: 44,
            atk: 50,
            def: 91,
            spa: 24,
            spd: 86,
            spe: 10
        },
        weight: 18.8,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ナットレイ': {
        dexNo: 598,
        types: ['くさ', 'はがね'],
        abilities: ['てつのトゲ', '', 'きけんよち'],
        baseStats: {
            hp: 74,
            atk: 94,
            def: 131,
            spa: 54,
            spd: 116,
            spe: 20
        },
        weight: 110.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ギアル': {
        dexNo: 599,
        types: ['はがね'],
        abilities: ['プラス', 'マイナス', 'クリアボディ'],
        baseStats: {
            hp: 40,
            atk: 55,
            def: 70,
            spa: 45,
            spd: 60,
            spe: 30
        },
        weight: 21.0,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ギギアル': {
        dexNo: 600,
        types: ['はがね'],
        abilities: ['プラス', 'マイナス', 'クリアボディ'],
        baseStats: {
            hp: 60,
            atk: 80,
            def: 95,
            spa: 70,
            spd: 85,
            spe: 50
        },
        weight: 51.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ギギギアル': {
        dexNo: 601,
        types: ['はがね'],
        abilities: ['プラス', 'マイナス', 'クリアボディ'],
        baseStats: {
            hp: 60,
            atk: 100,
            def: 115,
            spa: 70,
            spd: 85,
            spe: 90
        },
        weight: 81.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'シビシラス': {
        dexNo: 602,
        types: ['でんき'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 45,
            spd: 40,
            spe: 60
        },
        weight: 0.3,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'シビビール': {
        dexNo: 603,
        types: ['でんき'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 65,
            atk: 85,
            def: 70,
            spa: 75,
            spd: 70,
            spe: 40
        },
        weight: 22.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'シビルドン': {
        dexNo: 604,
        types: ['でんき'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 85,
            atk: 115,
            def: 80,
            spa: 105,
            spd: 80,
            spe: 50
        },
        weight: 80.5,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'リグレー': {
        dexNo: 605,
        types: ['エスパー'],
        abilities: ['テレパシー', 'シンクロ', 'アナライズ'],
        baseStats: {
            hp: 55,
            atk: 55,
            def: 55,
            spa: 85,
            spd: 55,
            spe: 30
        },
        weight: 9.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'オーベム': {
        dexNo: 606,
        types: ['エスパー'],
        abilities: ['テレパシー', 'シンクロ', 'アナライズ'],
        baseStats: {
            hp: 75,
            atk: 75,
            def: 75,
            spa: 125,
            spd: 95,
            spe: 40
        },
        weight: 34.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ヒトモシ': {
        dexNo: 607,
        types: ['ゴースト', 'ほのお'],
        abilities: ['もらいび', 'ほのおのからだ', 'すりぬけ'],
        baseStats: {
            hp: 50,
            atk: 30,
            def: 55,
            spa: 65,
            spd: 55,
            spe: 20
        },
        weight: 3.1,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ランプラー': {
        dexNo: 608,
        types: ['ゴースト', 'ほのお'],
        abilities: ['もらいび', 'ほのおのからだ', 'すりぬけ'],
        baseStats: {
            hp: 60,
            atk: 40,
            def: 60,
            spa: 95,
            spd: 60,
            spe: 55
        },
        weight: 13.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'シャンデラ': {
        dexNo: 609,
        types: ['ゴースト', 'ほのお'],
        abilities: ['もらいび', 'ほのおのからだ', 'すりぬけ'],
        baseStats: {
            hp: 60,
            atk: 55,
            def: 90,
            spa: 145,
            spd: 90,
            spe: 80
        },
        weight: 34.3,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'キバゴ': {
        dexNo: 610,
        types: ['ドラゴン'],
        abilities: ['とうそうしん', 'かたやぶり', 'きんちょうかん'],
        baseStats: {
            hp: 46,
            atk: 87,
            def: 60,
            spa: 30,
            spd: 40,
            spe: 57
        },
        weight: 18.0,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'オノンド': {
        dexNo: 611,
        types: ['ドラゴン'],
        abilities: ['とうそうしん', 'かたやぶり', 'きんちょうかん'],
        baseStats: {
            hp: 66,
            atk: 117,
            def: 70,
            spa: 40,
            spd: 50,
            spe: 67
        },
        weight: 36.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'オノノクス': {
        dexNo: 612,
        types: ['ドラゴン'],
        abilities: ['とうそうしん', 'かたやぶり', 'きんちょうかん'],
        baseStats: {
            hp: 76,
            atk: 147,
            def: 90,
            spa: 60,
            spd: 70,
            spe: 97
        },
        weight: 105.5,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'クマシュン': {
        dexNo: 613,
        types: ['こおり'],
        abilities: ['ゆきがくれ', '', 'びびり'],
        baseStats: {
            hp: 55,
            atk: 70,
            def: 40,
            spa: 60,
            spd: 40,
            spe: 40
        },
        weight: 8.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ツンベアー': {
        dexNo: 614,
        types: ['こおり'],
        abilities: ['ゆきがくれ', '', 'すいすい'],
        baseStats: {
            hp: 95,
            atk: 110,
            def: 80,
            spa: 70,
            spd: 80,
            spe: 50
        },
        weight: 260.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'フリージオ': {
        dexNo: 615,
        types: ['こおり'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 70,
            atk: 50,
            def: 30,
            spa: 95,
            spd: 135,
            spe: 105
        },
        weight: 148.0,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'チョボマキ': {
        dexNo: 616,
        types: ['むし'],
        abilities: ['うるおいボディ', 'シェルアーマー', 'ぼうじん'],
        baseStats: {
            hp: 50,
            atk: 40,
            def: 85,
            spa: 40,
            spd: 65,
            spe: 25
        },
        weight: 7.7,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'アギルダー': {
        dexNo: 617,
        types: ['むし'],
        abilities: ['うるおいボディ', 'ねんちゃく', 'かるわざ'],
        baseStats: {
            hp: 80,
            atk: 70,
            def: 40,
            spa: 100,
            spd: 60,
            spe: 145
        },
        weight: 25.3,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'マッギョ': {
        dexNo: 618,
        types: ['じめん', 'でんき'],
        abilities: ['せいでんき', 'じゅうなん', 'すながくれ'],
        baseStats: {
            hp: 109,
            atk: 66,
            def: 84,
            spa: 81,
            spd: 99,
            spe: 32
        },
        weight: 11.0,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'コジョフー': {
        dexNo: 619,
        types: ['かくとう'],
        abilities: ['せいしんりょく', 'さいせいりょく', 'すてみ'],
        baseStats: {
            hp: 45,
            atk: 85,
            def: 50,
            spa: 55,
            spd: 50,
            spe: 65
        },
        weight: 20.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'コジョンド': {
        dexNo: 620,
        types: ['かくとう'],
        abilities: ['せいしんりょく', 'さいせいりょく', 'すてみ'],
        baseStats: {
            hp: 65,
            atk: 125,
            def: 60,
            spa: 95,
            spd: 60,
            spe: 105
        },
        weight: 35.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'クリムガン': {
        dexNo: 621,
        types: ['ドラゴン'],
        abilities: ['さめはだ', 'ちからずく', 'かたやぶり'],
        baseStats: {
            hp: 77,
            atk: 120,
            def: 90,
            spa: 60,
            spd: 90,
            spe: 48
        },
        weight: 139.0,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'ゴビット': {
        dexNo: 622,
        types: ['じめん', 'ゴースト'],
        abilities: ['てつのこぶし', 'ぶきよう', 'ノーガード'],
        baseStats: {
            hp: 59,
            atk: 74,
            def: 50,
            spa: 35,
            spd: 50,
            spe: 35
        },
        weight: 92.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ゴルーグ': {
        dexNo: 623,
        types: ['じめん', 'ゴースト'],
        abilities: ['てつのこぶし', 'ぶきよう', 'ノーガード'],
        baseStats: {
            hp: 89,
            atk: 124,
            def: 80,
            spa: 55,
            spd: 80,
            spe: 55
        },
        weight: 330.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'コマタナ': {
        dexNo: 624,
        types: ['あく', 'はがね'],
        abilities: ['まけんき', 'せいしんりょく', 'プレッシャー'],
        baseStats: {
            hp: 45,
            atk: 85,
            def: 70,
            spa: 40,
            spd: 40,
            spe: 60
        },
        weight: 10.2,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'キリキザン': {
        dexNo: 625,
        types: ['あく', 'はがね'],
        abilities: ['まけんき', 'せいしんりょく', 'プレッシャー'],
        baseStats: {
            hp: 65,
            atk: 125,
            def: 100,
            spa: 60,
            spd: 70,
            spe: 70
        },
        weight: 70.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'バッフロン': {
        dexNo: 626,
        types: ['ノーマル'],
        abilities: ['すてみ', 'そうしょく', 'ぼうおん'],
        baseStats: {
            hp: 95,
            atk: 110,
            def: 95,
            spa: 40,
            spd: 95,
            spe: 55
        },
        weight: 94.6,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'ワシボン': {
        dexNo: 627,
        types: ['ノーマル', 'ひこう'],
        abilities: ['するどいめ', 'ちからずく', 'はりきり'],
        baseStats: {
            hp: 70,
            atk: 83,
            def: 50,
            spa: 37,
            spd: 50,
            spe: 60
        },
        weight: 10.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ウォーグル': {
        dexNo: 628,
        types: ['ノーマル', 'ひこう'],
        abilities: ['するどいめ', 'ちからずく', 'まけんき'],
        baseStats: {
            hp: 100,
            atk: 123,
            def: 75,
            spa: 57,
            spd: 75,
            spe: 80
        },
        weight: 41.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'バルチャイ': {
        dexNo: 629,
        types: ['あく', 'ひこう'],
        abilities: ['はとむね', 'ぼうじん', 'くだけるよろい'],
        baseStats: {
            hp: 70,
            atk: 55,
            def: 75,
            spa: 45,
            spd: 65,
            spe: 60
        },
        weight: 9.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'バルジーナ': {
        dexNo: 630,
        types: ['あく', 'ひこう'],
        abilities: ['はとむね', 'ぼうじん', 'くだけるよろい'],
        baseStats: {
            hp: 110,
            atk: 65,
            def: 105,
            spa: 55,
            spd: 95,
            spe: 80
        },
        weight: 39.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'クイタラン': {
        dexNo: 631,
        types: ['ほのお'],
        abilities: ['くいしんぼう', 'もらいび', 'しろいけむり'],
        baseStats: {
            hp: 85,
            atk: 97,
            def: 66,
            spa: 105,
            spd: 66,
            spe: 65
        },
        weight: 58.0,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'アイアント': {
        dexNo: 632,
        types: ['むし', 'はがね'],
        abilities: ['むしのしらせ', 'はりきり', 'なまけ'],
        baseStats: {
            hp: 58,
            atk: 109,
            def: 112,
            spa: 48,
            spd: 48,
            spe: 109
        },
        weight: 33.0,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'モノズ': {
        dexNo: 633,
        types: ['あく', 'ドラゴン'],
        abilities: ['はりきり', '', ''],
        baseStats: {
            hp: 52,
            atk: 65,
            def: 50,
            spa: 45,
            spd: 50,
            spe: 38
        },
        weight: 17.3,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ジヘッド': {
        dexNo: 634,
        types: ['あく', 'ドラゴン'],
        abilities: ['はりきり', '', ''],
        baseStats: {
            hp: 72,
            atk: 85,
            def: 70,
            spa: 65,
            spd: 70,
            spe: 58
        },
        weight: 50.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'サザンドラ': {
        dexNo: 635,
        types: ['あく', 'ドラゴン'],
        abilities: ['ふゆう', '', ''],
        baseStats: {
            hp: 92,
            atk: 105,
            def: 90,
            spa: 125,
            spd: 90,
            spe: 98
        },
        weight: 160.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'メラルバ': {
        dexNo: 636,
        types: ['むし', 'ほのお'],
        abilities: ['ほのおのからだ', '', 'むしのしらせ'],
        baseStats: {
            hp: 55,
            atk: 85,
            def: 55,
            spa: 50,
            spd: 55,
            spe: 60
        },
        weight: 28.8,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ウルガモス': {
        dexNo: 637,
        types: ['むし', 'ほのお'],
        abilities: ['ほのおのからだ', '', 'むしのしらせ'],
        baseStats: {
            hp: 85,
            atk: 60,
            def: 65,
            spa: 135,
            spd: 105,
            spe: 100
        },
        weight: 46.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'コバルオン': {
        dexNo: 638,
        types: ['はがね', 'かくとう'],
        abilities: ['せいぎのこころ', '', ''],
        baseStats: {
            hp: 91,
            atk: 90,
            def: 129,
            spa: 90,
            spd: 72,
            spe: 108
        },
        weight: 250.0,
        kind: '準伝',
        stage: 1,
        final_stage: 1
    },
    'テラキオン': {
        dexNo: 639,
        types: ['いわ', 'かくとう'],
        abilities: ['せいぎのこころ', '', ''],
        baseStats: {
            hp: 91,
            atk: 129,
            def: 90,
            spa: 72,
            spd: 90,
            spe: 108
        },
        weight: 260.0,
        kind: '準伝',
        stage: 1,
        final_stage: 1
    },
    'ビリジオン': {
        dexNo: 640,
        types: ['くさ', 'かくとう'],
        abilities: ['せいぎのこころ', '', ''],
        baseStats: {
            hp: 91,
            atk: 90,
            def: 72,
            spa: 90,
            spd: 129,
            spe: 108
        },
        weight: 200.0,
        kind: '準伝',
        stage: 1,
        final_stage: 1
    },
    '化身トルネロス': {
        dexNo: 641,
        types: ['ひこう'],
        abilities: ['いたずらごころ', '', 'まけんき'],
        baseStats: {
            hp: 79,
            atk: 115,
            def: 70,
            spa: 125,
            spd: 80,
            spe: 111
        },
        weight: 63.0,
        kind: '準伝',
        stage: 1,
        final_stage: 1,
        forms: ['化身トルネロス', '霊獣トルネロス'],
        formButtons: ['化身', '霊獣']
    },
    '霊獣トルネロス': {
        dexNo: 641,
        types: ['ひこう'],
        abilities: ['さいせいりょく', '', ''],
        baseStats: {
            hp: 79,
            atk: 100,
            def: 80,
            spa: 110,
            spd: 90,
            spe: 121
        },
        weight: 63.0,
        kind: '準伝',
        stage: 1,
        final_stage: 1,
        forms: ['化身トルネロス', '霊獣トルネロス'],
        formButtons: ['化身', '霊獣']
    },
    '化身ボルトロス': {
        dexNo: 642,
        types: ['でんき', 'ひこう'],
        abilities: ['いたずらごころ', '', 'まけんき'],
        baseStats: {
            hp: 79,
            atk: 115,
            def: 70,
            spa: 125,
            spd: 80,
            spe: 111
        },
        weight: 61.0,
        kind: '準伝',
        stage: 1,
        final_stage: 1,
        forms: ['化身ボルトロス', '霊獣ボルトロス'],
        formButtons: ['化身', '霊獣']
    },
    '霊獣ボルトロス': {
        dexNo: 642,
        types: ['でんき', 'ひこう'],
        abilities: ['ちくでん', '', ''],
        baseStats: {
            hp: 79,
            atk: 105,
            def: 70,
            spa: 140,
            spd: 80,
            spe: 101
        },
        weight: 61.0,
        kind: '準伝',
        stage: 1,
        final_stage: 1,
        forms: ['化身ボルトロス', '霊獣ボルトロス'],
        formButtons: ['化身', '霊獣']
    },
    'レシラム': {
        dexNo: 643,
        types: ['ドラゴン', 'ほのお'],
        abilities: ['ターボブレイズ', '', ''],
        baseStats: {
            hp: 100,
            atk: 120,
            def: 100,
            spa: 150,
            spd: 120,
            spe: 90
        },
        weight: 330.0,
        kind: '禁伝',
        stage: 1,
        final_stage: 1
    },
    'ゼクロム': {
        dexNo: 644,
        types: ['ドラゴン', 'でんき'],
        abilities: ['テラボルテージ', '', ''],
        baseStats: {
            hp: 100,
            atk: 150,
            def: 120,
            spa: 120,
            spd: 100,
            spe: 90
        },
        weight: 345.0,
        kind: '禁伝',
        stage: 1,
        final_stage: 1
    },
    '化身ランドロス': {
        dexNo: 645,
        types: ['じめん', 'ひこう'],
        abilities: ['すなのちから', '', 'ちからずく'],
        baseStats: {
            hp: 89,
            atk: 125,
            def: 90,
            spa: 115,
            spd: 80,
            spe: 101
        },
        weight: 68.0,
        kind: '準伝',
        stage: 1,
        final_stage: 1,
        forms: ['化身ランドロス', '霊獣ランドロス'],
        formButtons: ['化身', '霊獣']
    },
    '霊獣ランドロス': {
        dexNo: 645,
        types: ['じめん', 'ひこう'],
        abilities: ['いかく', '', ''],
        baseStats: {
            hp: 89,
            atk: 145,
            def: 90,
            spa: 105,
            spd: 80,
            spe: 91
        },
        weight: 68.0,
        kind: '準伝',
        stage: 1,
        final_stage: 1,
        forms: ['化身ランドロス', '霊獣ランドロス'],
        formButtons: ['化身', '霊獣']
    },
    'キュレム': {
        dexNo: 646,
        types: ['ドラゴン', 'こおり'],
        abilities: ['プレッシャー', '', ''],
        baseStats: {
            hp: 125,
            atk: 130,
            def: 90,
            spa: 130,
            spd: 90,
            spe: 95
        },
        weight: 325.0,
        kind: '禁伝',
        stage: 1,
        final_stage: 1,
        forms: ['キュレム', 'ブラックキュレム', 'ホワイトキュレム'],
        formButtons: ['通常', '黒', '白']
    },
    'ブラックキュレム': {
        dexNo: 642,
        types: ['ドラゴン', 'こおり'],
        abilities: ['ターボブレイズ', '', ''],
        baseStats: {
            hp: 125,
            atk: 170,
            def: 100,
            spa: 120,
            spd: 90,
            spe: 95
        },
        weight: 325.0,
        kind: '禁伝',
        stage: 1,
        final_stage: 1,
        forms: ['キュレム', 'ブラックキュレム', 'ホワイトキュレム'],
        formButtons: ['通常', '黒', '白']
    },
    'ホワイトキュレム': {
        dexNo: 642,
        types: ['ドラゴン', 'こおり'],
        abilities: ['テラボルテージ', '', ''],
        baseStats: {
            hp: 125,
            atk: 120,
            def: 90,
            spa: 170,
            spd: 100,
            spe: 95
        },
        weight: 325.0,
        kind: '禁伝',
        stage: 1,
        final_stage: 1,
        forms: ['キュレム', 'ブラックキュレム', 'ホワイトキュレム'],
        formButtons: ['通常', '黒', '白']
    },
    'ケルディオ': {
        dexNo: 647,
        types: ['みず', 'かくとう'],
        abilities: ['せいぎのこころ', '', ''],
        baseStats: {
            hp: 91,
            atk: 72,
            def: 90,
            spa: 129,
            spd: 90,
            spe: 108
        },
        weight: 48.5,
        kind: '幻',
        stage: 1,
        final_stage: 1
    },
    'メロエッタ(ボイス)': {
        dexNo: 648,
        types: ['ノーマル', 'エスパー'],
        abilities: ['てんのめぐみ', '', ''],
        baseStats: {
            hp: 100,
            atk: 77,
            def: 77,
            spa: 128,
            spd: 128,
            spe: 90
        },
        weight: 6.5,
        kind: '幻',
        stage: 1,
        final_stage: 1,
        forms: ['メロエッタ(ボイス)', 'メロエッタ(ステップ)'],
        formButtons: ['ボイス', 'ステップ']
    },
    'メロエッタ(ステップ)': {
        dexNo: 648,
        types: ['ノーマル', 'かくとう'],
        abilities: ['てんのめぐみ', '', ''],
        baseStats: {
            hp: 100,
            atk: 128,
            def: 90,
            spa: 77,
            spd: 77,
            spe: 128
        },
        weight: 6.5,
        kind: '幻',
        stage: 1,
        final_stage: 1,
        forms: ['メロエッタ(ボイス)', 'メロエッタ(ステップ)'],
        formButtons: ['ボイス', 'ステップ']
    },
    'ゲノセクト': {
        dexNo: 649,
        types: ['むし', 'はがね'],
        abilities: ['ダウンロード', '', ''],
        baseStats: {
            hp: 71,
            atk: 120,
            def: 95,
            spa: 120,
            spd: 95,
            spe: 99
        },
        weight: 82.5,
        kind: '幻',
        stage: 1,
        final_stage: 1
    },
    'ハリマロン': {
        dexNo: 650,
        types: ['くさ'],
        abilities: ['しんりょく', '', 'ぼうだん'],
        baseStats: {
            hp: 56,
            atk: 61,
            def: 65,
            spa: 48,
            spd: 45,
            spe: 33
        },
        weight: 9.0,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ハリボーグ': {
        dexNo: 651,
        types: ['くさ'],
        abilities: ['しんりょく', '', 'ぼうだん'],
        baseStats: {
            hp: 61,
            atk: 78,
            def: 95,
            spa: 56,
            spd: 58,
            spe: 57
        },
        weight: 29.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ブリガロン': {
        dexNo: 652,
        types: ['くさ', 'かくとう'],
        abilities: ['しんりょく', '', 'ぼうだん'],
        baseStats: {
            hp: 88,
            atk: 107,
            def: 122,
            spa: 74,
            spd: 75,
            spe: 64
        },
        weight: 90.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'フォッコ': {
        dexNo: 653,
        types: ['ほのお'],
        abilities: ['もうか', '', 'マジシャン'],
        baseStats: {
            hp: 40,
            atk: 45,
            def: 40,
            spa: 62,
            spd: 60,
            spe: 60
        },
        weight: 9.4,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'テールナー': {
        dexNo: 654,
        types: ['ほのお'],
        abilities: ['もうか', '', 'マジシャン'],
        baseStats: {
            hp: 59,
            atk: 59,
            def: 58,
            spa: 90,
            spd: 70,
            spe: 73
        },
        weight: 14.5,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'マフォクシー': {
        dexNo: 655,
        types: ['ほのお', 'エスパー'],
        abilities: ['もうか', '', 'マジシャン'],
        baseStats: {
            hp: 75,
            atk: 69,
            def: 72,
            spa: 114,
            spd: 100,
            spe: 104
        },
        weight: 39.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ケロマツ': {
        dexNo: 656,
        types: ['みず'],
        abilities: ['げきりゅう', '', 'へんげんじざい'],
        baseStats: {
            hp: 41,
            atk: 56,
            def: 40,
            spa: 62,
            spd: 44,
            spe: 71
        },
        weight: 7.0,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ゲコガシラ': {
        dexNo: 657,
        types: ['みず'],
        abilities: ['げきりゅう', '', 'へんげんじざい'],
        baseStats: {
            hp: 54,
            atk: 63,
            def: 52,
            spa: 83,
            spd: 56,
            spe: 97
        },
        weight: 10.9,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ゲッコウガ': {
        dexNo: 658,
        types: ['みず', 'あく'],
        abilities: ['げきりゅう', '', 'へんげんじざい'],
        baseStats: {
            hp: 72,
            atk: 95,
            def: 67,
            spa: 103,
            spd: 71,
            spe: 122
        },
        weight: 40.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ホルビー': {
        dexNo: 659,
        types: ['ノーマル'],
        abilities: ['ものひろい', 'ほおぶくろ', 'ちからもち'],
        baseStats: {
            hp: 38,
            atk: 36,
            def: 38,
            spa: 32,
            spd: 36,
            spe: 57
        },
        weight: 5.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ホルード': {
        dexNo: 660,
        types: ['ノーマル', 'じめん'],
        abilities: ['ものひろい', 'ほおぶくろ', 'ちからもち'],
        baseStats: {
            hp: 85,
            atk: 56,
            def: 77,
            spa: 50,
            spd: 77,
            spe: 78
        },
        weight: 42.4,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ヤヤコマ': {
        dexNo: 661,
        types: ['ノーマル', 'ひこう'],
        abilities: ['はとむね', '', 'はやてのつばさ'],
        baseStats: {
            hp: 45,
            atk: 50,
            def: 43,
            spa: 40,
            spd: 38,
            spe: 62
        },
        weight: 1.7,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ヒノヤコマ': {
        dexNo: 662,
        types: ['ほのお', 'ひこう'],
        abilities: ['ほのおのからだ', '', 'はやてのつばさ'],
        baseStats: {
            hp: 62,
            atk: 73,
            def: 55,
            spa: 56,
            spd: 52,
            spe: 84
        },
        weight: 16.0,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ファイアロー': {
        dexNo: 663,
        types: ['ほのお', 'ひこう'],
        abilities: ['ほのおのからだ', '', 'はやてのつばさ'],
        baseStats: {
            hp: 78,
            atk: 81,
            def: 71,
            spa: 74,
            spd: 69,
            spe: 126
        },
        weight: 24.5,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'コフキムシ': {
        dexNo: 664,
        types: ['むし'],
        abilities: ['りんぷん', 'ふくがん', 'フレンドガード'],
        baseStats: {
            hp: 38,
            atk: 35,
            def: 40,
            spa: 27,
            spd: 25,
            spe: 35
        },
        weight: 2.5,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'コフーライ': {
        dexNo: 665,
        types: ['むし'],
        abilities: ['だっぴ', '', 'フレンドガード'],
        baseStats: {
            hp: 45,
            atk: 22,
            def: 60,
            spa: 27,
            spd: 30,
            spe: 29
        },
        weight: 8.4,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ビビヨン': {
        dexNo: 666,
        types: ['むし', 'ひこう'],
        abilities: ['りんぷん', 'ふくがん', 'フレンドガード'],
        baseStats: {
            hp: 80,
            atk: 52,
            def: 50,
            spa: 90,
            spd: 50,
            spe: 89
        },
        weight: 17.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'シシコ': {
        dexNo: 667,
        types: ['ほのお', 'ノーマル'],
        abilities: ['とうそうしん', 'きんちょうかん', 'じしんかじょう'],
        baseStats: {
            hp: 62,
            atk: 50,
            def: 58,
            spa: 73,
            spd: 54,
            spe: 72
        },
        weight: 13.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'カエンジシ': {
        dexNo: 668,
        types: ['ほのお', 'ノーマル'],
        abilities: ['とうそうしん', 'きんちょうかん', 'じしんかじょう'],
        baseStats: {
            hp: 86,
            atk: 68,
            def: 72,
            spa: 109,
            spd: 66,
            spe: 106
        },
        weight: 81.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'フラベベ': {
        dexNo: 669,
        types: ['フェアリー'],
        abilities: ['フラワーベール', '', 'きょうせい'],
        baseStats: {
            hp: 44,
            atk: 38,
            def: 39,
            spa: 61,
            spd: 79,
            spe: 42
        },
        weight: 0.1,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'フラエッテ': {
        dexNo: 670,
        types: ['フェアリー'],
        abilities: ['フラワーベール', '', 'きょうせい'],
        baseStats: {
            hp: 54,
            atk: 45,
            def: 47,
            spa: 75,
            spd: 98,
            spe: 52
        },
        weight: 0.9,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'フラージェス': {
        dexNo: 671,
        types: ['フェアリー'],
        abilities: ['フラワーベール', '', 'きょうせい'],
        baseStats: {
            hp: 78,
            atk: 65,
            def: 68,
            spa: 112,
            spd: 154,
            spe: 75
        },
        weight: 10.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'メェークル': {
        dexNo: 672,
        types: ['くさ'],
        abilities: ['そうしょく', '', 'くさのけがわ'],
        baseStats: {
            hp: 66,
            atk: 65,
            def: 48,
            spa: 62,
            spd: 57,
            spe: 52
        },
        weight: 31.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ゴーゴート': {
        dexNo: 673,
        types: ['くさ'],
        abilities: ['そうしょく', '', 'くさのけがわ'],
        baseStats: {
            hp: 123,
            atk: 100,
            def: 62,
            spa: 97,
            spd: 81,
            spe: 68
        },
        weight: 91.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ヤンチャム': {
        dexNo: 674,
        types: ['かくとう'],
        abilities: ['てつのこぶし', 'かたやぶり', 'きもったま'],
        baseStats: {
            hp: 67,
            atk: 82,
            def: 62,
            spa: 46,
            spd: 48,
            spe: 43
        },
        weight: 8.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ゴロンダ': {
        dexNo: 675,
        types: ['かくとう', 'あく'],
        abilities: ['てつのこぶし', 'かたやぶり', 'きもったま'],
        baseStats: {
            hp: 95,
            atk: 124,
            def: 78,
            spa: 69,
            spd: 71,
            spe: 58
        },
        weight: 136.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'トリミアン': {
        dexNo: 676,
        types: ['ノーマル'],
        abilities: ['ファーコート', '', ''],
        baseStats: {
            hp: 75,
            atk: 80,
            def: 60,
            spa: 65,
            spd: 90,
            spe: 102
        },
        weight: 28.0,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'ニャスパー': {
        dexNo: 677,
        types: ['エスパー'],
        abilities: ['するどいめ', 'すりぬけ', 'マイペース'],
        baseStats: {
            hp: 62,
            atk: 48,
            def: 54,
            spa: 63,
            spd: 60,
            spe: 68
        },
        weight: 3.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ニャオニクス♂': {
        dexNo: 678,
        types: ['エスパー'],
        abilities: ['するどいめ', 'すりぬけ', 'いたずらごころ'],
        baseStats: {
            hp: 74,
            atk: 48,
            def: 76,
            spa: 83,
            spd: 81,
            spe: 104
        },
        weight: 8.5,
        kind: '一般',
        stage: 3,
        final_stage: 2,
        forms: ['ニャオニクス♂', 'ニャオニクス♀'],
        formButtons: ['♂', '♀']
    },
    'ニャオニクス♀': {
        dexNo: 678,
        types: ['エスパー'],
        abilities: ['するどいめ', 'すりぬけ', 'かちき'],
        baseStats: {
            hp: 74,
            atk: 48,
            def: 76,
            spa: 83,
            spd: 81,
            spe: 104
        },
        weight: 8.5,
        kind: '一般',
        stage: 3,
        final_stage: 2,
        forms: ['ニャオニクス♂', 'ニャオニクス♀'],
        formButtons: ['♂', '♀']
    },
    'ヒトツキ': {
        dexNo: 679,
        types: ['はがね', 'ゴースト'],
        abilities: ['ノーガード', '', ''],
        baseStats: {
            hp: 45,
            atk: 80,
            def: 100,
            spa: 35,
            spd: 37,
            spe: 28
        },
        weight: 2.0,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ニダンギル': {
        dexNo: 680,
        types: ['はがね', 'ゴースト'],
        abilities: ['ノーガード', '', ''],
        baseStats: {
            hp: 59,
            atk: 110,
            def: 150,
            spa: 45,
            spd: 49,
            spe: 35
        },
        weight: 4.5,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ギルガルド': {
        dexNo: 681,
        types: ['はがね', 'ゴースト'],
        abilities: ['バトルスイッチ', '', ''],
        baseStats: {
            hp: 60,
            atk: 50,
            def: 150,
            spa: 50,
            spd: 150,
            spe: 60
        },
        weight: 53.0,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'ギルガルド(シールド)': {
        dexNo: 681,
        types: ['はがね', 'ゴースト'],
        abilities: ['バトルスイッチ', '', ''],
        baseStats: {
            hp: 60,
            atk: 50,
            def: 150,
            spa: 50,
            spd: 150,
            spe: 60
        },
        weight: 53.0,
        kind: '一般',
        stage: 3,
        final_stage: 3,
        forms: ['ギルガルド(シールド)', 'ギルガルド(ブレード)'],
        formButtons: ['シールド', 'ブレード']
    },
    'ギルガルド(ブレード)': {
        dexNo: 681,
        types: ['はがね', 'ゴースト'],
        abilities: ['バトルスイッチ', '', ''],
        baseStats: {
            hp: 60,
            atk: 150,
            def: 50,
            spa: 150,
            spd: 50,
            spe: 60
        },
        weight: 53.0,
        kind: '一般',
        stage: 3,
        final_stage: 3,
        forms: ['ギルガルド(シールド)', 'ギルガルド(ブレード)'],
        formButtons: ['シールド', 'ブレード']
    },
    'シュシュプ': {
        dexNo: 682,
        types: ['フェアリー'],
        abilities: ['いやしのこころ', '', 'アロマベール'],
        baseStats: {
            hp: 78,
            atk: 52,
            def: 60,
            spa: 63,
            spd: 65,
            spe: 23
        },
        weight: 0.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'フレフワン': {
        dexNo: 683,
        types: ['フェアリー'],
        abilities: ['いやしのこころ', '', 'アロマベール'],
        baseStats: {
            hp: 101,
            atk: 72,
            def: 72,
            spa: 99,
            spd: 89,
            spe: 29
        },
        weight: 15.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ペロッパフ': {
        dexNo: 684,
        types: ['フェアリー'],
        abilities: ['スイートベール', '', 'かるわざ'],
        baseStats: {
            hp: 62,
            atk: 48,
            def: 66,
            spa: 59,
            spd: 57,
            spe: 49
        },
        weight: 3.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ペロリーム': {
        dexNo: 685,
        types: ['フェアリー'],
        abilities: ['スイートベール', '', 'かるわざ'],
        baseStats: {
            hp: 82,
            atk: 80,
            def: 86,
            spa: 85,
            spd: 75,
            spe: 72
        },
        weight: 5.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'マーイーカ': {
        dexNo: 686,
        types: ['あく', 'エスパー'],
        abilities: ['あまのじゃく', 'きゅうばん', 'すりぬけ'],
        baseStats: {
            hp: 53,
            atk: 54,
            def: 37,
            spa: 46,
            spd: 45,
            spe: 45
        },
        weight: 3.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'カラマネロ': {
        dexNo: 687,
        types: ['あく', 'エスパー'],
        abilities: ['あまのじゃく', 'きゅうばん', 'すりぬけ'],
        baseStats: {
            hp: 86,
            atk: 92,
            def: 88,
            spa: 68,
            spd: 75,
            spe: 73
        },
        weight: 47.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'カメテテ': {
        dexNo: 688,
        types: ['いわ', 'みず'],
        abilities: ['スナイパー', 'かたいツメ', 'わるいてぐせ'],
        baseStats: {
            hp: 42,
            atk: 52,
            def: 67,
            spa: 39,
            spd: 56,
            spe: 50
        },
        weight: 31.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ガメノデス': {
        dexNo: 689,
        types: ['いわ', 'みず'],
        abilities: ['スナイパー', 'かたいツメ', 'わるいてぐせ'],
        baseStats: {
            hp: 72,
            atk: 105,
            def: 115,
            spa: 54,
            spd: 86,
            spe: 68
        },
        weight: 96.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'クズモー': {
        dexNo: 690,
        types: ['どく', 'みず'],
        abilities: ['どくのトゲ', 'どくしゅ', 'てきおうりょく'],
        baseStats: {
            hp: 50,
            atk: 60,
            def: 60,
            spa: 60,
            spd: 60,
            spe: 30
        },
        weight: 7.3,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ドラミドロ': {
        dexNo: 691,
        types: ['どく', 'ドラゴン'],
        abilities: ['どくのトゲ', 'どくしゅ', 'てきおうりょく'],
        baseStats: {
            hp: 65,
            atk: 75,
            def: 90,
            spa: 97,
            spd: 123,
            spe: 44
        },
        weight: 81.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ウデッポウ': {
        dexNo: 692,
        types: ['みず'],
        abilities: ['メガランチャー', '', ''],
        baseStats: {
            hp: 50,
            atk: 53,
            def: 62,
            spa: 58,
            spd: 63,
            spe: 44
        },
        weight: 8.3,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ブロスター': {
        dexNo: 693,
        types: ['みず'],
        abilities: ['メガランチャー', '', ''],
        baseStats: {
            hp: 71,
            atk: 73,
            def: 88,
            spa: 120,
            spd: 89,
            spe: 59
        },
        weight: 35.3,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'エリキテル': {
        dexNo: 694,
        types: ['でんき', 'ノーマル'],
        abilities: ['かんそうはだ', 'すながくれ', 'サンパワー'],
        baseStats: {
            hp: 44,
            atk: 38,
            def: 33,
            spa: 61,
            spd: 43,
            spe: 70
        },
        weight: 6.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'エレザード': {
        dexNo: 695,
        types: ['でんき', 'ノーマル'],
        abilities: ['かんそうはだ', 'すながくれ', 'サンパワー'],
        baseStats: {
            hp: 62,
            atk: 55,
            def: 52,
            spa: 109,
            spd: 94,
            spe: 109
        },
        weight: 21.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'チゴラス': {
        dexNo: 696,
        types: ['いわ', 'ドラゴン'],
        abilities: ['がんじょうあご', '', 'がんじょう'],
        baseStats: {
            hp: 58,
            atk: 89,
            def: 77,
            spa: 45,
            spd: 45,
            spe: 48
        },
        weight: 26.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'ガチゴラス': {
        dexNo: 697,
        types: ['いわ', 'ドラゴン'],
        abilities: ['がんじょうあご', '', 'いしあたま'],
        baseStats: {
            hp: 82,
            atk: 121,
            def: 119,
            spa: 69,
            spd: 59,
            spe: 71
        },
        weight: 270.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'アマルス': {
        dexNo: 698,
        types: ['いわ', 'こおり'],
        abilities: ['フリーズスキン', '', 'ゆきふらし'],
        baseStats: {
            hp: 77,
            atk: 59,
            def: 50,
            spa: 67,
            spd: 63,
            spe: 46
        },
        weight: 25.2,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'アマルルガ': {
        dexNo: 699,
        types: ['いわ', 'こおり'],
        abilities: ['フリーズスキン', '', 'ゆきふらし'],
        baseStats: {
            hp: 123,
            atk: 77,
            def: 72,
            spa: 99,
            spd: 92,
            spe: 58
        },
        weight: 225.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ニンフィア': {
        dexNo: 700,
        types: ['フェアリー'],
        abilities: ['メロメロボディ', '', 'フェアリースキン'],
        baseStats: {
            hp: 95,
            atk: 65,
            def: 65,
            spa: 110,
            spd: 130,
            spe: 60
        },
        weight: 23.5,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ルチャブル': {
        dexNo: 701,
        types: ['かくとう', 'ひこう'],
        abilities: ['じゅうなん', 'かるわざ', 'かたやぶり'],
        baseStats: {
            hp: 78,
            atk: 92,
            def: 75,
            spa: 74,
            spd: 63,
            spe: 118
        },
        weight: 21.5,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'デデンネ': {
        dexNo: 702,
        types: ['でんき', 'フェアリー'],
        abilities: ['ほおぶくろ', 'ものひろい', 'プラス'],
        baseStats: {
            hp: 67,
            atk: 58,
            def: 57,
            spa: 81,
            spd: 67,
            spe: 101
        },
        weight: 2.2,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'メレシー': {
        dexNo: 703,
        types: ['いわ', 'フェアリー'],
        abilities: ['クリアボディ', '', 'がんじょう'],
        baseStats: {
            hp: 50,
            atk: 50,
            def: 150,
            spa: 50,
            spd: 150,
            spe: 50
        },
        weight: 5.7,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'ヌメラ': {
        dexNo: 704,
        types: ['ドラゴン'],
        abilities: ['そうしょく', 'うるおいボディ', 'ぬめぬめ'],
        baseStats: {
            hp: 45,
            atk: 50,
            def: 35,
            spa: 55,
            spd: 75,
            spe: 40
        },
        weight: 2.8,
        kind: '一般',
        stage: 1,
        final_stage: 3
    },
    'ヌメイル': {
        dexNo: 705,
        types: ['ドラゴン'],
        abilities: ['そうしょく', 'うるおいボディ', 'ぬめぬめ'],
        baseStats: {
            hp: 68,
            atk: 75,
            def: 53,
            spa: 83,
            spd: 113,
            spe: 60
        },
        weight: 17.5,
        kind: '一般',
        stage: 2,
        final_stage: 3
    },
    'ヌメルゴン': {
        dexNo: 706,
        types: ['ドラゴン'],
        abilities: ['そうしょく', 'うるおいボディ', 'ぬめぬめ'],
        baseStats: {
            hp: 90,
            atk: 100,
            def: 70,
            spa: 110,
            spd: 150,
            spe: 80
        },
        weight: 150.5,
        kind: '一般',
        stage: 3,
        final_stage: 3
    },
    'クレッフィ': {
        dexNo: 707,
        types: ['はがね', 'フェアリー'],
        abilities: ['いたずらごころ', '', 'マジシャン'],
        baseStats: {
            hp: 57,
            atk: 80,
            def: 91,
            spa: 80,
            spd: 87,
            spe: 75
        },
        weight: 3.0,
        kind: '一般',
        stage: 1,
        final_stage: 1
    },
    'ボクレー': {
        dexNo: 708,
        types: ['ゴースト', 'くさ'],
        abilities: ['しぜんかいふく', 'おみとおし', 'しゅうかく'],
        baseStats: {
            hp: 43,
            atk: 70,
            def: 48,
            spa: 50,
            spd: 60,
            spe: 38
        },
        weight: 7.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'オーロット': {
        dexNo: 709,
        types: ['ゴースト', 'くさ'],
        abilities: ['しぜんかいふく', 'おみとおし', 'しゅうかく'],
        baseStats: {
            hp: 85,
            atk: 110,
            def: 76,
            spa: 65,
            spd: 82,
            spe: 56
        },
        weight: 71.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'バケッチャ(小)': {
        dexNo: 710,
        types: ['ゴースト', 'くさ'],
        abilities: ['ものひろい', 'おみとおし', 'ふみん'],
        baseStats: {
            hp: 44,
            atk: 66,
            def: 70,
            spa: 44,
            spd: 55,
            spe: 56
        },
        weight: 3.5,
        kind: '一般',
        stage: 1,
        final_stage: 2,
        forms: ['バケッチャ(小)', 'バケッチャ(普通)', 'バケッチャ(大)', 'バケッチャ(特大)'],
        formButtons: ['小', '普通', '大', '特大']
    },
    'バケッチャ(普通)': {
        dexNo: 710,
        types: ['ゴースト', 'くさ'],
        abilities: ['ものひろい', 'おみとおし', 'ふみん'],
        baseStats: {
            hp: 49,
            atk: 66,
            def: 70,
            spa: 44,
            spd: 55,
            spe: 51
        },
        weight: 5.0,
        kind: '一般',
        stage: 1,
        final_stage: 2,
        forms: ['バケッチャ(小)', 'バケッチャ(普通)', 'バケッチャ(大)', 'バケッチャ(特大)'],
        formButtons: ['小', '普通', '大', '特大']
    },
    'バケッチャ(大)': {
        dexNo: 710,
        types: ['ゴースト', 'くさ'],
        abilities: ['ものひろい', 'おみとおし', 'ふみん'],
        baseStats: {
            hp: 54,
            atk: 66,
            def: 70,
            spa: 44,
            spd: 55,
            spe: 46
        },
        weight: 7.5,
        kind: '一般',
        stage: 1,
        final_stage: 2,
        forms: ['バケッチャ(小)', 'バケッチャ(普通)', 'バケッチャ(大)', 'バケッチャ(特大)'],
        formButtons: ['小', '普通', '大', '特大']
    },
    'バケッチャ(特大)': {
        dexNo: 710,
        types: ['ゴースト', 'くさ'],
        abilities: ['ものひろい', 'おみとおし', 'ふみん'],
        baseStats: {
            hp: 59,
            atk: 66,
            def: 70,
            spa: 44,
            spd: 55,
            spe: 41
        },
        weight: 15.0,
        kind: '一般',
        stage: 1,
        final_stage: 2,
        forms: ['バケッチャ(小)', 'バケッチャ(普通)', 'バケッチャ(大)', 'バケッチャ(特大)'],
        formButtons: ['小', '普通', '大', '特大']
    },
    'パンプジン(小)': {
        dexNo: 711,
        types: ['ゴースト', 'くさ'],
        abilities: ['ものひろい', 'おみとおし', 'ふみん'],
        baseStats: {
            hp: 55,
            atk: 85,
            def: 122,
            spa: 58,
            spd: 75,
            spe: 99
        },
        weight: 9.5,
        kind: '一般',
        stage: 3,
        final_stage: 2,
        forms: ['パンプジン(小)', 'パンプジン(普通)', 'パンプジン(大)', 'パンプジン(特大)'],
        formButtons: ['小', '普通', '大', '特大']
    },
    'パンプジン(普通)': {
        dexNo: 711,
        types: ['ゴースト', 'くさ'],
        abilities: ['ものひろい', 'おみとおし', 'ふみん'],
        baseStats: {
            hp: 65,
            atk: 90,
            def: 122,
            spa: 58,
            spd: 75,
            spe: 84
        },
        weight: 12.5,
        kind: '一般',
        stage: 3,
        final_stage: 2,
        forms: ['パンプジン(小)', 'パンプジン(普通)', 'パンプジン(大)', 'パンプジン(特大)'],
        formButtons: ['小', '普通', '大', '特大']
    },
    'パンプジン(大)': {
        dexNo: 711,
        types: ['ゴースト', 'くさ'],
        abilities: ['ものひろい', 'おみとおし', 'ふみん'],
        baseStats: {
            hp: 75,
            atk: 95,
            def: 122,
            spa: 58,
            spd: 75,
            spe: 69
        },
        weight: 14.0,
        kind: '一般',
        stage: 3,
        final_stage: 2,
        forms: ['パンプジン(小)', 'パンプジン(普通)', 'パンプジン(大)', 'パンプジン(特大)'],
        formButtons: ['小', '普通', '大', '特大']
    },
    'パンプジン(特大)': {
        dexNo: 711,
        types: ['ゴースト', 'くさ'],
        abilities: ['ものひろい', 'おみとおし', 'ふみん'],
        baseStats: {
            hp: 85,
            atk: 100,
            def: 122,
            spa: 58,
            spd: 75,
            spe: 54
        },
        weight: 39.0,
        kind: '一般',
        stage: 3,
        final_stage: 2,
        forms: ['パンプジン(小)', 'パンプジン(普通)', 'パンプジン(大)', 'パンプジン(特大)'],
        formButtons: ['小', '普通', '大', '特大']
    },
    'カチコール': {
        dexNo: 712,
        types: ['こおり'],
        abilities: ['マイペース', 'アイスボディ', 'がんじょう'],
        baseStats: {
            hp: 55,
            atk: 69,
            def: 85,
            spa: 32,
            spd: 35,
            spe: 28
        },
        weight: 99.5,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'クレベース': {
        dexNo: 713,
        types: ['こおり'],
        abilities: ['マイペース', 'アイスボディ', 'がんじょう'],
        baseStats: {
            hp: 95,
            atk: 117,
            def: 184,
            spa: 44,
            spd: 46,
            spe: 28
        },
        weight: 505.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'オンバット': {
        dexNo: 714,
        types: ['ひこう', 'ドラゴン'],
        abilities: ['おみとおし', 'すりぬけ', 'テレパシー'],
        baseStats: {
            hp: 40,
            atk: 30,
            def: 35,
            spa: 45,
            spd: 40,
            spe: 55
        },
        weight: 8.0,
        kind: '一般',
        stage: 1,
        final_stage: 2
    },
    'オンバーン': {
        dexNo: 715,
        types: ['ひこう', 'ドラゴン'],
        abilities: ['おみとおし', 'すりぬけ', 'テレパシー'],
        baseStats: {
            hp: 85,
            atk: 70,
            def: 80,
            spa: 97,
            spd: 80,
            spe: 123
        },
        weight: 85.0,
        kind: '一般',
        stage: 3,
        final_stage: 2
    },
    'ゼルネアス': {
        dexNo: 716,
        types: ['フェアリー'],
        abilities: ['フェアリーオーラ', '', ''],
        baseStats: {
            hp: 126,
            atk: 131,
            def: 95,
            spa: 131,
            spd: 98,
            spe: 99
        },
        weight: 215.0,
        kind: '禁伝',
        stage: 1,
        final_stage: 1
    },
    'イベルタル': {
        dexNo: 717,
        types: ['あく', 'ひこう'],
        abilities: ['ダークオーラ', '', ''],
        baseStats: {
            hp: 126,
            atk: 131,
            def: 95,
            spa: 131,
            spd: 98,
            spe: 99
        },
        weight: 203.0,
        kind: '禁伝',
        stage: 1,
        final_stage: 1
    },
    'ジガルデ': {
        dexNo: 718,
        types: ['ドラゴン', 'じめん'],
        abilities: ['オーラブレイク', '', ''],
        baseStats: {
            hp: 108,
            atk: 100,
            def: 121,
            spa: 81,
            spd: 95,
            spe: 95
        },
        weight: 305.0,
        kind: '禁伝',
        stage: 1,
        final_stage: 1
    },
    'ディアンシー': {
        dexNo: 719,
        types: ['いわ', 'フェアリー'],
        abilities: ['クリアボディ', '', ''],
        baseStats: {
            hp: 50,
            atk: 100,
            def: 150,
            spa: 100,
            spd: 150,
            spe: 50
        },
        weight: 8.8,
        kind: '幻',
        stage: 1,
        final_stage: 1,
        forms: ['ディアンシー', 'メガディアンシー'],
        formButtons: ['通常', 'メガ']
    },
    'メガディアンシー': {
        dexNo: 719,
        types: ['いわ', 'フェアリー'],
        abilities: ['マジックミラー', '', ''],
        baseStats: {
            hp: 50,
            atk: 160,
            def: 110,
            spa: 160,
            spd: 110,
            spe: 110
        },
        weight: 27.8,
        kind: '幻',
        stage: 'メガ',
        final_stage: 1,
        forms: ['ディアンシー', 'メガディアンシー'],
        formButtons: ['通常', 'メガ']
    },
    'フーパ(戒め)': {
        dexNo: 720,
        types: ['エスパー', 'ゴースト'],
        abilities: ['マジシャン', '', ''],
        baseStats: {
            hp: 80,
            atk: 110,
            def: 60,
            spa: 150,
            spd: 130,
            spe: 70
        },
        weight: 9.0,
        kind: '幻',
        stage: 1,
        final_stage: 1,
        forms: ['フーパ(戒め)', 'フーパ(解放)'],
        formButtons: ['戒め', '解放']
    },
    'フーパ(解放)': {
        dexNo: 720,
        types: ['エスパー', 'あく'],
        abilities: ['マジシャン', '', ''],
        baseStats: {
            hp: 80,
            atk: 160,
            def: 60,
            spa: 170,
            spd: 130,
            spe: 80
        },
        weight: 490.0,
        kind: '幻',
        stage: 1,
        final_stage: 1,
        forms: ['フーパ(戒め)', 'フーパ(解放)'],
        formButtons: ['戒め', '解放']
    },
    'ボルケニオン': {
        dexNo: 721,
        types: ['ほのお', 'みず'],
        abilities: ['ちょすい', '', ''],
        baseStats: {
            hp: 80,
            atk: 110,
            def: 120,
            spa: 130,
            spd: 90,
            spe: 70
        },
        weight: 195.0,
        kind: '幻',
        stage: 1,
        final_stage: 1
    }
};

const NATURES_DATA = {
  "さみしがり": {
    "up": "A",
    "down": "B"
  },
  "いじっぱり": {
    "up": "A",
    "down": "C"
  },
  "やんちゃ": {
    "up": "A",
    "down": "D"
  },
  "ゆうかん": {
    "up": "A",
    "down": "S"
  },
  "ずぶとい": {
    "up": "B",
    "down": "A"
  },
  "わんぱく": {
    "up": "B",
    "down": "C"
  },
  "のうてんき": {
    "up": "B",
    "down": "D"
  },
  "のんき": {
    "up": "B",
    "down": "S"
  },
  "ひかえめ": {
    "up": "C",
    "down": "A"
  },
  "おっとり": {
    "up": "C",
    "down": "B"
  },
  "うっかりや": {
    "up": "C",
    "down": "D"
  },
  "れいせい": {
    "up": "C",
    "down": "S"
  },
  "おだやか": {
    "up": "D",
    "down": "A"
  },
  "おとなしい": {
    "up": "D",
    "down": "B"
  },
  "しんちょう": {
    "up": "D",
    "down": "C"
  },
  "なまいき": {
    "up": "D",
    "down": "S"
  },
  "おくびょう": {
    "up": "S",
    "down": "A"
  },
  "せっかち": {
    "up": "S",
    "down": "B"
  },
  "ようき": {
    "up": "S",
    "down": "C"
  },
  "むじゃき": {
    "up": "S",
    "down": "D"
  },
  "がんばりや": {
    "up": "null",
    "down": "null"
  },
  "すなお": {
    "up": "null",
    "down": "null"
  },
  "てれや": {
    "up": "null",
    "down": "null"
  },
  "きまぐれ": {
    "up": "null",
    "down": "null"
  },
  "まじめ": {
    "up": "null",
    "down": "null"
  }
};

const ABILITY_TYPE_RESISTANCES = {
  "あついしぼう": {
    "ほのお": 0.5,
    "こおり": 0.5
  },
  "かんそうはだ": {
    "ほのお": 1.25,
    "みず": 0
  },
  "そうしょく": {
    "くさ": 0
  },
  "たいねつ": {
    "ほのお": 0.5
  },
  "ちくでん": {
    "でんき": 0
  },
  "ちょすい": {
    "みず": 0
  },
  "でんきエンジン": {
    "でんき": 0
  },
  "ひらいしん": {
    "でんき": 0
  },
  "ふゆう": {
    "じめん": 0
  },
  "もらいび": {
    "ほのお": 0
  },
  "よびみず": {
    "みず": 0
  }
};

const TYPE_CHART = {
  "ノーマル": {
    "いわ": 0.5,
    "ゴースト": 0,
    "はがね": 0.5
  },
  "ほのお": {
    "ほのお": 0.5,
    "みず": 0.5,
    "くさ": 2,
    "こおり": 2,
    "むし": 2,
    "いわ": 0.5,
    "ドラゴン": 0.5,
    "はがね": 2
  },
  "みず": {
    "ほのお": 2,
    "みず": 0.5,
    "くさ": 0.5,
    "じめん": 2,
    "いわ": 2,
    "ドラゴン": 0.5
  },
  "でんき": {
    "みず": 2,
    "でんき": 0.5,
    "くさ": 0.5,
    "じめん": 0,
    "ひこう": 2,
    "ドラゴン": 0.5
  },
  "くさ": {
    "ほのお": 0.5,
    "みず": 2,
    "くさ": 0.5,
    "どく": 0.5,
    "じめん": 2,
    "ひこう": 0.5,
    "むし": 0.5,
    "いわ": 2,
    "ドラゴン": 0.5,
    "はがね": 0.5
  },
  "こおり": {
    "ほのお": 0.5,
    "みず": 0.5,
    "くさ": 2,
    "こおり": 0.5,
    "じめん": 2,
    "ひこう": 2,
    "ドラゴン": 2,
    "はがね": 0.5
  },
  "かくとう": {
    "ノーマル": 2,
    "こおり": 2,
    "どく": 0.5,
    "ひこう": 0.5,
    "エスパー": 0.5,
    "むし": 0.5,
    "いわ": 2,
    "ゴースト": 0,
    "あく": 2,
    "はがね": 2,
    "フェアリー": 0.5
  },
  "どく": {
    "くさ": 2,
    "どく": 0.5,
    "じめん": 0.5,
    "いわ": 0.5,
    "ゴースト": 0.5,
    "はがね": 0,
    "フェアリー": 2
  },
  "じめん": {
    "ほのお": 2,
    "でんき": 2,
    "くさ": 0.5,
    "どく": 2,
    "ひこう": 0,
    "むし": 0.5,
    "いわ": 2,
    "はがね": 2
  },
  "ひこう": {
    "でんき": 0.5,
    "くさ": 2,
    "かくとう": 2,
    "むし": 2,
    "いわ": 0.5,
    "はがね": 0.5
  },
  "エスパー": {
    "かくとう": 2,
    "どく": 2,
    "エスパー": 0.5,
    "あく": 0,
    "はがね": 0.5
  },
  "むし": {
    "ほのお": 0.5,
    "くさ": 2,
    "かくとう": 0.5,
    "どく": 0.5,
    "ひこう": 0.5,
    "エスパー": 2,
    "ゴースト": 0.5,
    "あく": 2,
    "はがね": 0.5,
    "フェアリー": 0.5
  },
  "いわ": {
    "ほのお": 2,
    "こおり": 2,
    "かくとう": 0.5,
    "じめん": 0.5,
    "ひこう": 2,
    "むし": 2,
    "はがね": 0.5
  },
  "ゴースト": {
    "ノーマル": 0,
    "エスパー": 2,
    "ゴースト": 2,
    "あく": 0.5
  },
  "ドラゴン": {
    "ドラゴン": 2,
    "はがね": 0.5,
    "フェアリー": 0
  },
  "あく": {
    "エスパー": 2,
    "ゴースト": 2,
    "あく": 0.5,
    "フェアリー": 0.5
  },
  "はがね": {
    "ほのお": 0.5,
    "みず": 0.5,
    "でんき": 0.5,
    "こおり": 2,
    "いわ": 2,
    "はがね": 0.5,
    "フェアリー": 2
  },
  "フェアリー": {
    "ほのお": 0.5,
    "かくとう": 2,
    "どく": 0.5,
    "ドラゴン": 2,
    "あく": 2,
    "はがね": 0.5
  }
};
