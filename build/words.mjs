// Speech word lists per locale. Injected into pages as /js/words-{code}.js
// and consumed by play.js through window.VG.
export const words = {
  en: {
    speechLang: "en-US",
    WORDS: ["apple","banana","tiger","rocket","piano","castle","orange","window","silver","coffee","thunder","pebble","garden","mirror","candle","pirate","circle","forest","rabbit","yellow","bridge","camera","dolphin","mountain","sandwich","umbrella","bicycle","diamond","penguin","volcano","lantern","trumpet","galaxy","octopus","compass","meadow","helmet","walnut","cactus","zebra"],
    LINES: ["red apple","blue ocean","gold ring","fast tiger","cold winter","green forest","loud drum","silver moon","open window","round table","black cat","white horse","hot coffee","big castle","small pebble"],
    OVERS: ["the train is late","fresh bread at dawn","a small boat leaves","rain on the station roof","the shop opens at nine","lights over the city","a letter on the desk","the river under the bridge","warm soup tonight","the clock strikes three","clouds across the field","a red kite in the wind","the cafe door opens","snow on the quiet road","the last bus turns"],
    ACTS: [
      { mood: "angry", line: "put that down" },
      { mood: "whisper", line: "keep your voice low" },
      { mood: "excited", line: "we won the race" },
      { mood: "sad", line: "the show is over" },
      { mood: "calm", line: "take a slow breath" },
      { mood: "scared", line: "do not open it" },
      { mood: "angry", line: "that was my seat" },
      { mood: "whisper", line: "someone is outside" },
      { mood: "excited", line: "look at the sky" },
      { mood: "sad", line: "I missed the train" },
      { mood: "calm", line: "the water is still" },
      { mood: "scared", line: "turn off the light" }
    ],
    NUMBERS: ["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","twenty one","twenty two","twenty three","twenty four","twenty five","twenty six","twenty seven","twenty eight","twenty nine","thirty"],
    ALIAS: { two:["two","to","too","2"], four:["four","for","4"], eight:["eight","ate"], ten:["ten","10"], one:["one","won","1"], three:["three","3"], five:["five","5"], six:["six","6"], seven:["seven","7"], nine:["nine","9"] }
  },
  zh: (() => {
    const NUMBERS = ["","一","二","三","四","五","六","七","八","九","十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十","二十一","二十二","二十三","二十四","二十五","二十六","二十七","二十八","二十九","三十"]
    const ALIAS = Object.fromEntries(NUMBERS.slice(1).map((n, i) => [n, [n, String(i + 1)]]))
    ALIAS["二"] = ["二", "2", "两"]
    return {
    speechLang: "zh-CN",
    WORDS: ["苹果","香蕉","老虎","火箭","钢琴","城堡","橘子","窗户","月亮","咖啡","雷声","石头","花园","镜子","蜡烛","海盗","圆圈","森林","兔子","黄色","桥","相机","海豚","大山","面包","雨伞","自行车","钻石","企鹅","火山","灯笼","小号","星空","章鱼","指南针","草地","头盔","核桃","仙人掌","斑马"],
    LINES: ["红苹果","蓝色大海","金戒指","快老虎","寒冷冬天","绿色森林","大声打鼓","银色月亮","打开窗户","圆桌子","黑猫","白马","热咖啡","大城堡","小石头"],
    OVERS: ["火车晚点了","清晨的新鲜面包","一艘小船出发了","车站屋顶上的雨","商店九点开门","城市上空的灯光","桌上的一封信","桥下的河水","今晚的热汤","钟敲了三下","田野上空的云","风中的红风筝","咖啡馆的门开了","安静路上的雪","末班车转弯了"],
    ACTS: [
      { mood: "生气", line: "把它放下" },
      { mood: "低语", line: "小声一点" },
      { mood: "兴奋", line: "我们赢了" },
      { mood: "难过", line: "演出结束了" },
      { mood: "平静", line: "慢慢呼吸" },
      { mood: "害怕", line: "别开门" },
      { mood: "生气", line: "那是我的座位" },
      { mood: "低语", line: "外面有人" },
      { mood: "兴奋", line: "快看天空" },
      { mood: "难过", line: "我错过了火车" },
      { mood: "平静", line: "水面很平静" },
      { mood: "害怕", line: "把灯关掉" }
    ],
    NUMBERS: NUMBERS,
    ALIAS: ALIAS
  }
})(),
  es: {
    speechLang: "es-ES",
    WORDS: ["manzana","platano","tigre","cohete","piano","castillo","naranja","ventana","plata","cafe","trueno","guijarro","jardin","espejo","vela","pirata","circulo","bosque","conejo","amarillo","puente","camara","delfin","montana","sandwich","paraguas","bicicleta","diamante","pinguino","volcan","farol","trompeta","galaxia","pulpo","brujula","pradera","casco","nogal","cactus","cebra"],
    LINES: ["manzana roja","oceano azul","anillo de oro","tigre rapido","invierno frio","bosque verde","tambor fuerte","luna de plata","ventana abierta","mesa redonda","gato negro","caballo blanco","cafe caliente","castillo grande","piedra pequena"],
    OVERS: ["el tren llega tarde","pan fresco al alba","un barco pequeno sale","lluvia en el tejado","la tienda abre a las nueve","luces sobre la ciudad","una carta en el escritorio","el rio bajo el puente","sopa caliente esta noche","el reloj da las tres","nubes sobre el campo","una cometa roja al viento","la puerta del cafe se abre","nieve en la calle tranquila","el ultimo bus gira"],
    ACTS: [
      { mood: "enfadado", line: "dejalo ahora" },
      { mood: "susurro", line: "baja la voz" },
      { mood: "emocionado", line: "hemos ganado" },
      { mood: "triste", line: "se acabo el show" },
      { mood: "tranquilo", line: "respira despacio" },
      { mood: "asustado", line: "no lo abras" },
      { mood: "enfadado", line: "ese era mi sitio" },
      { mood: "susurro", line: "hay alguien fuera" },
      { mood: "emocionado", line: "mira el cielo" },
      { mood: "triste", line: "perdi el tren" },
      { mood: "tranquilo", line: "el agua esta quieta" },
      { mood: "asustado", line: "apaga la luz" }
    ],
    NUMBERS: ["","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","once","doce","trece","catorce","quince","dieciseis","diecisiete","dieciocho","diecinueve","veinte","veintiuno","veintidos","veintitres","veinticuatro","veinticinco","veintiseis","veintisiete","veintiocho","veintinueve","treinta"],
    ALIAS: {
      uno:["uno","1","un"], dos:["dos","2"], tres:["tres","3"], cuatro:["cuatro","4"],
      cinco:["cinco","5"], seis:["seis","6"], siete:["siete","7"], ocho:["ocho","8"],
      nueve:["nueve","9"], diez:["diez","10"], once:["once","11"], doce:["doce","12"],
      trece:["trece","13"], catorce:["catorce","14"], quince:["quince","15"],
      dieciseis:["dieciseis","dieciséis","16"], diecisiete:["diecisiete","17"],
      dieciocho:["dieciocho","18"], diecinueve:["diecinueve","19"], veinte:["veinte","20"],
      veintiuno:["veintiuno","21"], veintidos:["veintidos","veintidós","22"],
      veintitres:["veintitres","veintitrés","23"], veinticuatro:["veinticuatro","24"],
      veinticinco:["veinticinco","25"], veintiseis:["veintiseis","veintiséis","26"],
      veintisiete:["veintisiete","27"], veintiocho:["veintiocho","28"],
      veintinueve:["veintinueve","29"], treinta:["treinta","30"]
    }
  },
  ja: {
    speechLang: "ja-JP",
    WORDS: ["りんご","バナナ","トラ","ロケット","ピアノ","お城","みかん","窓","月","コーヒー","雷","石","庭","鏡","ろうそく","海賊","丸","森","うさぎ","きいろ","橋","カメラ","イルカ","山","パン","傘","自転車","ダイヤ","ペンギン","火山","ランタン","ラッパ","銀河","たこ","コンパス","草原","ヘルメット","くるみ","サボテン","シマウマ"],
    LINES: ["あかい りんご","あおい 海","きんの 指輪","はやい トラ","さむい 冬","みどりの 森","大きな 太鼓","ぎんの 月","開いた 窓","丸い 机","黒い 猫","白い 馬","熱い コーヒー","大きな お城","小さな 石"],
    OVERS: ["電車が遅れた","朝の焼きたてパン","小さな船が出る","駅の屋根に雨","お店は九時に開く","街の上の灯り","机の上の手紙","橋の下の川","今夜は温かいスープ","時計が三を打つ","野原に雲","風の中の赤い凧","喫茶店の扉が開く","静かな道に雪","最終バスが曲がる"],
    ACTS: [
      { mood: "おこる", line: "それを置いて" },
      { mood: "ひそひそ", line: "声をひそめて" },
      { mood: "ワクワク", line: "勝ったぞ" },
      { mood: "かなしい", line: "ショーは終わり" },
      { mood: "おちついて", line: "ゆっくり息を" },
      { mood: "こわい", line: "開けないで" },
      { mood: "おこる", line: "そこは僕の席だ" },
      { mood: "ひそひそ", line: "外に誰かいる" },
      { mood: "ワクワク", line: "空を見て" },
      { mood: "かなしい", line: "電車に乗り遅れた" },
      { mood: "おちついて", line: "水面が静かだ" },
      { mood: "こわい", line: "電気を消して" }
    ],
    NUMBERS: ["","一","二","三","四","五","六","七","八","九","十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十","二十一","二十二","二十三","二十四","二十五","二十六","二十七","二十八","二十九","三十"],
    ALIAS: Object.fromEntries([
      ["一",["一","1","いち"]],["二",["二","2","に"]],["三",["三","3","さん"]],
      ["四",["四","4","よん","し"]],["五",["五","5","ご"]],["六",["六","6","ろく"]],
      ["七",["七","7","なな","しち"]],["八",["八","8","はち"]],["九",["九","9","きゅう","く"]],
      ["十",["十","10","じゅう"]],
      ...Array.from({ length: 20 }, (_, i) => {
        const n = 11 + i
        const kan = ["十一","十二","十三","十四","十五","十六","十七","十八","十九",
          "二十","二十一","二十二","二十三","二十四","二十五","二十六","二十七","二十八","二十九","三十"][i]
        return [kan, [kan, String(n)]]
      })
    ])
  }
}
