// Volume-controlled games: 3D dino/flap/float, flat dino/flap/float, louder.
// Each field is keyed per locale: {en, zh, es, ja}
export const volumeGames = [
  {
    slug: "3d/dino", game: "dino", look: "vox", kind: "vox", mode: "shout",
    name: "Dino 3D",
    tagline: { en: "Shout to Jump", zh: "喊叫起跳", es: "Salta gritando", ja: "叫んでジャンプ" },
    metaDesc: {
      en: "Dino 3D is a free 30-second voice game. Hold a sound and a block dinosaur stays up. Go quiet and it falls. Volume stays on your device.",
      zh: "3D 恐龙是一款免费的声音游戏，每局 30 秒：持续出声让像素恐龙保持奔跑，安静下来它就会摔倒。音频不离开你的设备。",
      es: "Dino 3D es un juego de voz gratis de 30 segundos. Mantén un sonido y el dinosaurio de bloques se sostiene. Haz silencio y cae. El volumen se queda en tu dispositivo.",
      ja: "Dino 3D は30秒の無料ボイスゲーム。声を続ければブロックの恐竜が走り続け、黙ると落ちる。音は端末から出ません。"
    },
    kicker: { en: "Hold the sound", zh: "持续发声", es: "Mantén el sonido", ja: "声を続けろ" },
    heard: {
      en: "Hold a sound, Space, or the mouse button. The dinosaur stays up.",
      zh: "出声、按空格或按住鼠标，恐龙就不会掉下来。",
      es: "Mantén un sonido, la barra o el ratón. El dinosaurio se sostiene.",
      ja: "声・スペース・マウスを押し続けると恐竜は走り続けます。"
    },
    featureSmall: {
      en: "Hold a sound — go quiet and you fall",
      zh: "持续出声——停下来就会摔倒",
      es: "Mantén el sonido — si te callas, caes",
      ja: "声を続けて——黙ったら落ちる"
    },
    steps: {
      en: ["Press Start, then allow the microphone if the browser asks.", "Hold a sound, the Space bar, or the mouse button and the dinosaur stays up. Let go and it falls.", "Each stone you clear adds one point.", "Touch a stone and the round ends. You have 30 seconds."],
      zh: ["点“开始”，浏览器询问时允许麦克风。", "持续出声、按住空格或鼠标，恐龙就能一直奔跑；停下来它就会摔倒。", "每越过一块石头得 1 分。", "撞到石头本轮结束。每局 30 秒。"],
      es: ["Pulsa Empezar y permite el micrófono si el navegador lo pide.", "Mantén un sonido, la barra o el ratón y el dinosaurio se sostiene. Suéltalo y cae.", "Cada piedra superada suma un punto.", "Toca una piedra y la ronda termina. Tienes 30 segundos."],
      ja: ["スタートを押し、聞かれたらマイクを許可。", "声・スペースキー・マウスのいずれかを押し続けると恐竜が走り続け、離すと落ちます。", "石を1つ越えるごとに1点。", "石にぶつかるとラウンド終了。時間は30秒。"]
    },
    note: {
      en: "You see the dinosaur from the side. Stones come in from the right. Dino 3D measures volume in the page. It does not send audio to a speech service and it does not keep a recording.",
      zh: "游戏为侧面视角，石头从右边滚来。3D 恐龙只在页面内测量音量，不向语音服务发送音频，也不做任何录音。",
      es: "Ves el dinosaurio de lado. Las piedras entran desde la derecha. Dino 3D mide el volumen dentro de la página: no envía audio a ningún servicio de voz ni guarda grabaciones.",
      ja: "恐竜は横から見た視点で、石は右から流れてきます。Dino 3D はページ内で音量を測るだけで、音声サービスへ送信も録音もありません。"
    },
    faq: [
      { q: { en: "How do I score in Dino 3D?", zh: "3D 恐龙怎么得分？", es: "¿Cómo se puntúa en Dino 3D?", ja: "Dino 3D の得点のつけ方は？" },
        a: { en: "Every stone the dinosaur clears adds one point before the 30 seconds run out.", zh: "恐龙每越过一块石头得 1 分，看看 30 秒内能拿多少。", es: "Cada piedra que el dinosaurio supera suma un punto antes de que acaben los 30 segundos.", ja: "恐竜が石を1つ越えるごとに1点。30秒でいくつ越えられるか。" } },
      { q: { en: "Do I have to shout?", zh: "必须喊叫吗？", es: "¿Tengo que gritar?", ja: "叫ぶ必要はある？" },
        a: { en: "No. Any steady sound holds the dinosaur up — talking, humming, or holding Space works too. Shouting is just funnier.", zh: "不用。任何持续的声音都行——说话、哼歌都可以，按住空格也可以。喊叫只是更好玩。", es: "No. Cualquier sonido constante lo mantiene: hablar, tararear o la barra espaciadora. Gritar solo es más divertido.", ja: "いいえ。声・ハミング・スペースキー押しっぱなしでもOK。叫ぶのは単に楽しいからです。" } }
    ]
  },
  {
    slug: "3d/flap", game: "flap", look: "vox", kind: "vox", mode: "shout",
    name: "Flap 3D",
    tagline: { en: "Hold to Rise", zh: "发声上升", es: "Sube con tu voz", ja: "声で羽ばたく" },
    metaDesc: {
      en: "Flap 3D is a free 30-second voice game. Hold a sound and a block moth rises through the gaps. Go quiet and it falls. Volume stays on your device.",
      zh: "3D 飞蛾是一款免费的声音游戏，每局 30 秒：持续出声让像素飞蛾穿过缝隙，安静下来它就会坠落。音频不离开你的设备。",
      es: "Flap 3D es un juego de voz gratis de 30 segundos. Mantén un sonido y la polilla de bloques sube por los huecos. Haz silencio y cae.",
      ja: "Flap 3D は30秒の無料ボイスゲーム。声を続けるとブロックの蛾が隙間を抜けて上昇し、黙ると落ちます。"
    },
    kicker: { en: "Hold the sound", zh: "持续发声", es: "Mantén el sonido", ja: "声を続けろ" },
    heard: {
      en: "Hold a sound, Space, or the mouse button and the moth rises.",
      zh: "出声、按空格或按住鼠标，飞蛾就会上升。",
      es: "Mantén un sonido, la barra o el ratón y la polilla sube.",
      ja: "声・スペース・マウスで蛾が羽ばたきます。"
    },
    featureSmall: {
      en: "Hold a sound to rise through the gaps",
      zh: "持续出声穿过缝隙",
      es: "Mantén el sonido para subir por los huecos",
      ja: "声を続けて隙間を抜ける"
    },
    steps: {
      en: ["Press Start, then allow the microphone if the browser asks.", "Hold a sound, the Space bar, or the mouse button and the moth rises. Let go and it falls.", "Fly through a gap to score a point.", "Touch a wall, the top, or the ground and the round ends. You have 30 seconds."],
      zh: ["点“开始”，浏览器询问时允许麦克风。", "持续出声、按住空格或鼠标，飞蛾就上升；停下来就坠落。", "穿过一道缝隙得 1 分。", "撞到墙、顶或地面本轮结束。每局 30 秒。"],
      es: ["Pulsa Empezar y permite el micrófono si el navegador lo pide.", "Mantén un sonido, la barra o el ratón y la polilla sube. Suéltalo y cae.", "Cruza un hueco para sumar un punto.", "Toca una pared, el techo o el suelo y la ronda termina. Tienes 30 segundos."],
      ja: ["スタートを押し、聞かれたらマイクを許可。", "声・スペース・マウスを押し続けると蛾が上がり、離すと落ちます。", "隙間を1つ抜けると1点。", "壁・天井・地面にぶつかるとラウンド終了。時間は30秒。"]
    },
    note: {
      en: "You see the moth from the side. The gaps come in from the right. Flap 3D measures volume in the page. It does not send audio to a speech service and it does not keep a recording.",
      zh: "游戏为侧面视角，缝隙从右边飘来。3D 飞蛾只在页面内测量音量，不向语音服务发送音频，也不做任何录音。",
      es: "Ves la polilla de lado. Los huecos entran desde la derecha. Flap 3D mide el volumen dentro de la página y no guarda grabaciones.",
      ja: "蛾は横から見た視点で、隙間は右から流れてきます。Flap 3D はページ内で音量を測るだけで、録音はしません。"
    },
    faq: [
      { q: { en: "How do I score in Flap 3D?", zh: "3D 飞蛾怎么得分？", es: "¿Cómo se puntúa en Flap 3D?", ja: "Flap 3D の得点のつけ方は？" },
        a: { en: "Fly through one gap to score one point. Chain as many gaps as you can in 30 seconds.", zh: "每穿过一道缝隙得 1 分，30 秒内尽量多穿几道。", es: "Cruza un hueco para sumar un punto. Encadena cuantos más puedas en 30 segundos.", ja: "隙間を1つ抜けるごとに1点。30秒で連続で抜けよう。" } },
      { q: { en: "Why does my moth keep falling?", zh: "飞蛾为什么一直往下掉？", es: "¿Por qué cae mi polilla?", ja: "蛾が落ち続けるのはなぜ？" },
        a: { en: "Sound is lift. If the room is quiet the moth sinks — hold a steady sound or hold Space and it climbs.", zh: "声音就是升力。周围安静飞蛾就会下沉——保持持续出声或按住空格就能上升。", es: "El sonido es el impulso. Con la habitación en silencio la polilla cae — mantén un sonido o la barra y sube.", ja: "声が揚力です。静かな部屋では沈みます——声かスペースを続ければ上がります。" } }
    ]
  },
  {
    slug: "3d/float", game: "float", look: "vox", kind: "vox", mode: "shout",
    name: "Float 3D",
    tagline: { en: "Steer Through the Hole", zh: "穿环而过", es: "Cruza el aro", ja: "リングを抜ける" },
    metaDesc: {
      en: "Float 3D is a free 30-second voice game. Volume lifts a block balloon through round holes. Quiet lets it fall. Volume stays on your device.",
      zh: "3D 气球是一款免费的声音游戏，每局 30 秒：用音量托起像素气球穿过圆环，安静下来它就会下落。音频不离开你的设备。",
      es: "Float 3D es un juego de voz gratis de 30 segundos. El volumen eleva un globo de bloques por agujeros redondos. El silencio lo deja caer.",
      ja: "Float 3D は30秒の無料ボイスゲーム。音量でブロックの風船を上げてリングを抜け、黙ると落ちます。"
    },
    kicker: { en: "Lift with volume", zh: "用音量托起", es: "Elevar con volumen", ja: "音量で浮かす" },
    heard: {
      en: "Louder, Space, or a higher mouse position lifts the balloon.",
      zh: "声音更大、按空格或鼠标移向上方，气球就上升。",
      es: "Más volumen, la barra o el ratón arriba elevan el globo.",
      ja: "大きな声・スペース・マウスを上へで風船が上がります。"
    },
    featureSmall: {
      en: "Volume lifts the balloon through the rings",
      zh: "用音量托气球穿过圆环",
      es: "El volumen eleva el globo por los aros",
      ja: "音量で風船をリングへ"
    },
    steps: {
      en: ["Press Start, then allow the microphone if the browser asks.", "A louder sound lifts the balloon; hold Space to rise, or hold the mouse and move up and down.", "Pass through each round hole to score a point.", "Touch a hole and the round ends. You have 30 seconds."],
      zh: ["点“开始”，浏览器询问时允许麦克风。", "声音越大气球升得越高；也可以按住空格上升，或按住鼠标上下移动。", "每穿过一个圆环得 1 分。", "碰到圆环本轮结束。每局 30 秒。"],
      es: ["Pulsa Empezar y permite el micrófono si el navegador lo pide.", "Más volumen eleva el globo; mantén la barra para subir o el ratón y muévete arriba y abajo.", "Cruza cada agujero redondo para sumar un punto.", "Toca un aro y la ronda termina. Tienes 30 segundos."],
      ja: ["スタートを押し、聞かれたらマイクを許可。", "大きい声で風船が上がり、スペース押しっぱなしでも上がります。マウスは上下で操作。", "リングを1つ抜けるごとに1点。", "リングに触れるとラウンド終了。時間は30秒。"]
    },
    note: {
      en: "You see the balloon from the side, and the holes are rings that slide in from the right. Float 3D measures volume in the page. It does not send audio to a speech service and it does not keep a recording.",
      zh: "游戏为侧面视角，圆环从右边滑来。3D 气球只在页面内测量音量，不向语音服务发送音频，也不做任何录音。",
      es: "Ves el globo de lado y los agujeros son aros que entran desde la derecha. Float 3D mide el volumen dentro de la página y no guarda grabaciones.",
      ja: "風船は横視点で、リングは右から流れてきます。Float 3D はページ内で音量を測るだけで、録音はしません。"
    },
    faq: [
      { q: { en: "How is Float 3D different from the other 3D games?", zh: "3D 气球和其他 3D 游戏有什么不同？", es: "¿En qué se diferencia Float 3D de los otros juegos 3D?", ja: "Float 3D は他の 3D ゲームと何が違う？" },
        a: { en: "Volume is a height dial, not just an on/off lift: the louder you are, the higher the balloon sits. Fine control wins.", zh: "音量在这里是一个“高度旋钮”而不只是开关：声音越大气球越高，比拼的是精细控制。", es: "El volumen es una rueda de altura, no solo un interruptor: cuanto más fuerte, más alto va el globo. Gana el control fino.", ja: "音量がオン・オフではなく高さのダイヤルになります。大きい声ほど高く浮くので、繊細なコントロールが勝負。" } },
      { q: { en: "Can I play with the mouse only?", zh: "可以只用鼠标玩吗？", es: "¿Puedo jugar solo con el ratón?", ja: "マウスだけで遊べる？" },
        a: { en: "Yes. Hold the mouse button on the picture and move up or down — the balloon follows your pointer. Space also works.", zh: "可以。按住画布上的鼠标上下移动，气球会跟着指针走；空格键也可以。", es: "Sí. Mantén el ratón sobre la imagen y sube o baja — el globo sigue tu puntero. La barra también funciona.", ja: "はい。canvas上でマウスを押したまま上下に動かすと風船がついてきます。スペースキーもOK。" } }
    ]
  },
  {
    slug: "dino", game: "dino", look: null, kind: "flat", mode: "volume",
    name: "Dino",
    tagline: { en: "Shout to Jump", zh: "喊叫起跳", es: "Salta gritando", ja: "叫んでジャンプ" },
    metaDesc: {
      en: "Dino is a free 30-second voice game. Hold a sound and a small dinosaur stays up. Go quiet and it falls. Volume stays on your device.",
      zh: "恐龙是一款免费的 2D 声音游戏，每局 30 秒：持续出声让小恐龙保持奔跑，安静下来它就会摔倒。",
      es: "Dino es un juego de voz gratis de 30 segundos. Mantén un sonido y el dinosaurio se sostiene. Haz silencio y cae.",
      ja: "Dino は30秒の無料ボイスゲーム。声を続ければ小さな恐竜が走り続け、黙ると落ちます。"
    },
    kicker: { en: "Hold the sound", zh: "持续发声", es: "Mantén el sonido", ja: "声を続けろ" },
    heard: {
      en: "Keep the sound going and the dinosaur stays up.",
      zh: "持续出声，恐龙就不会掉下来。",
      es: "Mantén el sonido y el dinosaurio se sostiene.",
      ja: "声を続ければ恐竜は走り続けます。"
    },
    cardSmall: {
      en: "The 2D picture", zh: "2D 经典版", es: "La versión 2D", ja: "2D 版"
    },
    steps: {
      en: ["Press Start and allow the microphone.", "Hold a sound and the dinosaur rises, then stays up. Go quiet and it falls.", "Each stone you clear adds one point.", "Touch a stone and the round ends. You have 30 seconds."],
      zh: ["点“开始”并允许麦克风。", "持续出声恐龙就保持奔跑，安静下来就摔倒。", "每越过一块石头得 1 分。", "撞到石头本轮结束。每局 30 秒。"],
      es: ["Pulsa Empezar y permite el micrófono.", "Mantén un sonido y el dinosaurio se sostiene. Haz silencio y cae.", "Cada piedra superada suma un punto.", "Toca una piedra y la ronda termina. Tienes 30 segundos."],
      ja: ["スタートを押してマイクを許可。", "声を続けると恐竜が走り続け、黙ると落ちます。", "石を1つ越えるごとに1点。", "石にぶつかるとラウンド終了。時間は30秒。"]
    },
    note: {
      en: "Dino measures volume in the page. It does not send audio to a speech service and it does not keep a recording. The dinosaur and the stones are drawn here.",
      zh: "恐龙只在页面内测量音量，不向语音服务发送音频，也不做任何录音。恐龙和石头都是本站手绘的。",
      es: "Dino mide el volumen dentro de la página: no envía audio a ningún servicio de voz ni guarda grabaciones. El dinosaurio y las piedras se dibujan aquí.",
      ja: "Dino はページ内で音量を測るだけで、音声サービスへの送信も録音もありません。恐竜も石もこのサイトで描いています。"
    },
    faq: [
      { q: { en: "What is the difference between Dino and Dino 3D?", zh: "恐龙和 3D 恐龙有什么区别？", es: "¿Qué diferencia hay entre Dino y Dino 3D?", ja: "Dino と Dino 3D の違いは？" },
        a: { en: "Same rules, two pictures. Dino is the flat pixel original; Dino 3D is the same run seen from a blocky side view.", zh: "规则相同，画面不同。恐龙是平面像素版；3D 恐龙是同一种玩法的立体视角版。", es: "Mismas reglas, dos aspectos. Dino es el original plano en píxeles; Dino 3D es la misma carrera con vista de bloques.", ja: "ルールは同じで見た目が違うだけ。Dino は平面ピクセル版、Dino 3D はブロック風の立体視点です。" } },
      { q: { en: "Does Dino work on a phone?", zh: "恐龙能在手机上玩吗？", es: "¿Funciona Dino en el móvil?", ja: "Dino はスマホで遊べる？" },
        a: { en: "Yes. It runs in a mobile browser and listens through the phone microphone. Hold the picture to play without sound.", zh: "可以。手机浏览器直接玩，用手机麦克风收音；按住画面也可以不出声地玩。", es: "Sí. Funciona en el navegador del móvil y escucha por su micrófono. Mantén la imagen para jugar sin sonido.", ja: "はい。スマホのブラウザで動き、マイクで聞き取ります。画面前押しっぱなしなら声なしでも遊べます。" } }
    ]
  },
  {
    slug: "flap", game: "flap", look: null, kind: "flat", mode: "volume",
    name: "Flap",
    tagline: { en: "Hold to Rise", zh: "发声上升", es: "Sube con tu voz", ja: "声で羽ばたく" },
    metaDesc: {
      en: "Flap is a free 30-second voice game. Hold a sound and a pixel moth rises through the gaps. Go quiet and it falls. Volume stays on your device.",
      zh: "飞蛾是一款免费的 2D 声音游戏，每局 30 秒：持续出声让像素飞蛾穿过砖墙缝隙，安静下来它就会坠落。",
      es: "Flap es un juego de voz gratis de 30 segundos. Mantén un sonido y la polilla píxel sube por los huecos. Haz silencio y cae.",
      ja: "Flap は30秒の無料ボイスゲーム。声を続けるとピクセルの蛾が隙間を抜けて上昇し、黙ると落ちます。"
    },
    kicker: { en: "Hold the sound", zh: "持续发声", es: "Mantén el sonido", ja: "声を続けろ" },
    heard: {
      en: "Keep the sound going and the moth rises.",
      zh: "持续出声，飞蛾就会上升。",
      es: "Mantén el sonido y la polilla sube.",
      ja: "声を続ければ蛾は上がります。"
    },
    cardSmall: {
      en: "The 2D picture", zh: "2D 经典版", es: "La versión 2D", ja: "2D 版"
    },
    steps: {
      en: ["Press Start and allow the microphone.", "Hold a sound and the moth rises. Go quiet and it falls.", "Fly through a brick gap to score a point.", "Touch a wall, the top, or the ground and the round ends. You have 30 seconds."],
      zh: ["点“开始”并允许麦克风。", "持续出声飞蛾就上升，安静下来就坠落。", "每穿过一道砖缝得 1 分。", "撞到墙、顶或地面本轮结束。每局 30 秒。"],
      es: ["Pulsa Empezar y permite el micrófono.", "Mantén un sonido y la polilla sube. Haz silencio y cae.", "Cruza un hueco para sumar un punto.", "Toca una pared, el techo o el suelo y la ronda termina. Tienes 30 segundos."],
      ja: ["スタートを押してマイクを許可。", "声を続けると蛾が上がり、黙ると落ちます。", "隙間を1つ抜けるごとに1点。", "壁・天井・地面にぶつかるとラウンド終了。時間は30秒。"]
    },
    note: {
      en: "Flap measures volume in the page. It does not send audio to a speech service and it does not keep a recording. The moth and the gates are drawn here.",
      zh: "飞蛾只在页面内测量音量，不向语音服务发送音频，也不做任何录音。飞蛾和砖墙都是本站手绘的。",
      es: "Flap mide el volumen dentro de la página: no envía audio a ningún servicio de voz ni guarda grabaciones. La polilla y los muros se dibujan aquí.",
      ja: "Flap はページ内で音量を測るだけで、音声サービスへの送信も録音もありません。蛾も壁もこのサイトで描いています。"
    },
    faq: [
      { q: { en: "What is the difference between Flap and Flap 3D?", zh: "飞蛾和 3D 飞蛾有什么区别？", es: "¿Qué diferencia hay entre Flap y Flap 3D?", ja: "Flap と Flap 3D の違いは？" },
        a: { en: "Same rules, two pictures. Flap is the flat pixel version; Flap 3D adds a blocky side view of the same flight.", zh: "规则相同，画面不同。飞蛾是平面像素版；3D 飞蛾是同一玩法的立体视角版。", es: "Mismas reglas, dos aspectos. Flap es la versión plana en píxeles; Flap 3D añade la vista de bloques del mismo vuelo.", ja: "ルールは同じで見た目が違うだけ。Flap は平面ピクセル版、Flap 3D はブロック風の立体版です。" } },
      { q: { en: "How do I keep the moth at one height?", zh: "怎么让飞蛾保持在一个高度？", es: "¿Cómo mantengo la polilla a una altura?", ja: "蛾の高さを一定に保つには？" },
        a: { en: "Feed it a steady sound — a long “ahhh” at one volume holds it level. Wild volume swings make it bounce.", zh: "给它一个稳定的声音——用恒定音量拉一个长音就能让它平飞；音量忽大忽小它就会上下颠。", es: "Dale un sonido constante — una “aaaa” larga al mismo volumen la mantiene nivelada.", ja: "一定の音を与えましょう——同じ音量で「あーー」と伸ばせば水平を保てます。" } }
    ]
  },
  {
    slug: "float", game: "float", look: null, kind: "flat", mode: "volume",
    name: "Float",
    tagline: { en: "Steer Through the Hole", zh: "穿洞而过", es: "Cruza el agujero", ja: "穴を抜ける" },
    metaDesc: {
      en: "Float is a free 30-second voice game. Volume lifts a balloon through round holes. Quiet lets it fall. Volume stays on your device.",
      zh: "气球是一款免费的 2D 声音游戏，每局 30 秒：用音量托起气球穿过圆洞，安静下来它就会下落。",
      es: "Float es un juego de voz gratis de 30 segundos. El volumen eleva un globo por agujeros redondos. El silencio lo deja caer.",
      ja: "Float は30秒の無料ボイスゲーム。音量で風船を上げて丸い穴を抜け、黙ると落ちます。"
    },
    kicker: { en: "Lift with volume", zh: "用音量托起", es: "Elevar con volumen", ja: "音量で浮かす" },
    heard: {
      en: "Louder lifts the balloon. Quiet lets it fall.",
      zh: "声音越大气球升得越高，安静下来就会下落。",
      es: "Más volumen eleva el globo. El silencio lo deja caer.",
      ja: "大きい声で風船が上がり、黙ると落ちます。"
    },
    cardSmall: {
      en: "The 2D picture", zh: "2D 经典版", es: "La versión 2D", ja: "2D 版"
    },
    steps: {
      en: ["Press Start and allow the microphone.", "A louder sound lifts the balloon; quiet lets it sink.", "Pass through each round hole to score a point.", "Touch the wall and the round ends. You have 30 seconds."],
      zh: ["点“开始”并允许麦克风。", "声音越大气球升得越高，安静下来就下沉。", "每穿过一个圆洞得 1 分。", "碰到边缘本轮结束。每局 30 秒。"],
      es: ["Pulsa Empezar y permite el micrófono.", "Más volumen eleva el globo; el silencio lo hunde.", "Cruza cada agujero redondo para sumar un punto.", "Toca el borde y la ronda termina. Tienes 30 segundos."],
      ja: ["スタートを押してマイクを許可。", "大きい声で風船が上がり、黙ると沈みます。", "丸い穴を1つ抜けるごとに1点。", "端に触れるとラウンド終了。時間は30秒。"]
    },
    note: {
      en: "Float measures volume in the page. It does not send audio to a speech service and it does not keep a recording. The balloon and the holes are drawn here. They are not taken from another game.",
      zh: "气球只在页面内测量音量，不向语音服务发送音频，也不做任何录音。气球和圆洞都是本站原创手绘，不来自任何其他游戏。",
      es: "Float mide el volumen dentro de la página: no envía audio a ningún servicio de voz ni guarda grabaciones. El globo y los agujeros son dibujos propios, no de otro juego.",
      ja: "Float はページ内で音量を測るだけで、音声サービスへの送信も録音もありません。風船も穴もこのサイトのオリジナル描画です。"
    },
    faq: [
      { q: { en: "Is Float the same as the helicopter game?", zh: "气球和直升机小游戏一样吗？", es: "¿Float es igual al juego del helicóptero?", ja: "Float はヘリコプターゲームと同じ？" },
        a: { en: "It belongs to the same one-button family, but your voice is the button and every sprite here is drawn from scratch for this site.", zh: "它们属于同一类“一个按键”的游戏，但这里你的声音就是那个按键，而且所有画面都是本站原创绘制。", es: "Pertenece a la misma familia de un solo botón, pero tu voz es el botón y todos los gráficos son propios de este sitio.", ja: "同じ「ワンボタン」系ですが、ボタンの代わりに声を使い、グラフィックは全部このサイトのオリジナルです。" } },
      { q: { en: "Why does the balloon drop so fast when I stop?", zh: "为什么一停下来气球掉得那么快？", es: "¿Por qué cae el globo tan rápido al callarme?", ja: "黙ると風船が急に落ちるのはなぜ？" },
        a: { en: "Gravity in Float is stronger than lift, on purpose — the safe line is to keep a low steady sound rather than full silence.", zh: "重力被故意设计得比升力强——保持一个低而稳的声音比完全安静更安全。", es: "La gravedad es más fuerte que el impulso a propósito — conviene mantener un sonido bajo y constante en vez de silencio total.", ja: "意図的に重力の方が強くしてあります——完全に黙るより、小さな声を続けるのが安全です。" } }
    ]
  },
  {
    slug: "louder", game: "louder", look: null, kind: "louder", mode: "volume",
    name: "Louder",
    tagline: { en: "Stay Loud", zh: "保持大声", es: "Mantén el volumen", ja: "声を出し続けろ" },
    metaDesc: {
      en: "Louder is a free 30-second voice game. Every second above the volume line scores. Quiet seconds do not count. Nothing is recorded.",
      zh: "音量挑战是一款免费的声音游戏，每局 30 秒：音量超过线每秒得分，安静的时间不计分，不录任何音。",
      es: "Louder es un juego de voz gratis de 30 segundos. Cada segundo por encima de la línea suma. El silencio no cuenta. No se graba nada.",
      ja: "Louder は30秒の無料ボイスゲーム。基準線を超えた秒数だけスコアになり、黙っている間は加算されません。録音はしません。"
    },
    kicker: { en: "Stay loud", zh: "保持大声", es: "Mantén el volumen", ja: "声を出し続けろ" },
    attract: {
      en: "Make noise — every loud second scores",
      zh: "制造噪音——大声的每一秒都得分",
      es: "Haz ruido — cada segundo fuerte suma",
      ja: "音を出そう——大きな声の毎秒が得点"
    },
    heard: {
      en: "Quiet seconds do not count.",
      zh: "安静的时间不计分。",
      es: "Los segundos en silencio no cuentan.",
      ja: "黙っている間はスコアに加算されません。"
    },
    cardSmall: {
      en: "Score every loud second", zh: "大声一秒得一分", es: "Suma cada segundo fuerte", ja: "大きな声の秒数がスコア"
    },
    statLabel: { en: "seconds", zh: "秒", es: "segundos", ja: "秒" },
    steps: {
      en: ["Press Start and allow the microphone.", "Speak, sing, or just make noise above the volume line.", "Every second above the line adds one to your score. Quiet time does not count.", "The round lasts 30 seconds. Beat your best."],
      zh: ["点“开始”并允许麦克风。", "说话、唱歌或随便出声，让音量超过线。", "超过线的每一秒得 1 分，安静不计分。", "每局 30 秒，挑战你的最高纪录。"],
      es: ["Pulsa Empezar y permite el micrófono.", "Habla, canta o simplemente haz ruido por encima de la línea.", "Cada segundo por encima suma un punto. El silencio no cuenta.", "La ronda dura 30 segundos. Supera tu récord."],
      ja: ["スタートを押してマイクを許可。", "話す・歌う・とにかく基準線を超える音を出す。", "線を超えている間は1秒ごとに1点。黙ると加算されません。", "ラウンドは30秒。自己ベストを狙おう。"]
    },
    note: {
      en: "Louder measures volume in this page. It does not send the audio to a speech service and it does not store a recording. The word on the screen only tells you whether the level is over the line.",
      zh: "音量挑战只在页面内测量音量，不向语音服务发送音频，也不保存录音。屏幕上的文字只是提示当前音量是否过线。",
      es: "Louder mide el volumen dentro de esta página: no envía el audio a ningún servicio de voz ni guarda grabaciones. La palabra en pantalla solo indica si el nivel supera la línea.",
      ja: "Louder はこのページ内で音量を測るだけで、音声サービスへの送信も録音も保存もありません。画面の言葉はレベルが線を超えたかの目安です。"
    },
    faq: [
      { q: { en: "What counts as “loud enough”?", zh: "多大算“够大声”？", es: "¿Qué cuenta como «suficientemente fuerte»?", ja: "「十分大きい」の基準は？" },
        a: { en: "Normal speaking volume clears the line in a quiet room. If the word on screen says “Louder”, the level is under it — push a little more.", zh: "在安静房间里正常说话的音量就能过线。屏幕显示“再大点声”说明还没到，稍微加一点力量。", es: "Hablar a volumen normal supera la línea en una sala tranquila. Si pone «Más fuerte», no llega — sube un poco.", ja: "静かな部屋なら普通に話す音量でOK。画面に「もっと大きく」と出たらまだ足りません。" } },
      { q: { en: "Can I score with music or a video?", zh: "放音乐或视频能得分吗？", es: "¿Puedo puntuar con música o un vídeo?", ja: "音楽や動画で得点できる？" },
        a: { en: "Technically yes — the game only hears volume. But the fun is in making the noise yourself.", zh: "技术上可以——游戏只听得到音量。但乐趣还是在于自己制造噪音。", es: "Técnicamente sí — el juego solo oye volumen. Pero la gracia está en hacer tú el ruido.", ja: "仕組み上は可能——ゲームが聞いているのは音量だけ。でも楽しいのは自分で声を出すことです。" } }
    ]
  },
  {
    slug: "miner", game: "miner", look: null, kind: "flat", mode: "volume",
    name: "Miner",
    tagline: { en: "Shout to Drop the Claw", zh: "喊一声放钩", es: "Grita y suelta el gancho", ja: "叫んでアームを落とす" },
    metaDesc: {
      en: "Miner is a free 30-second voice game. A claw swings over a cave — shout, press Space, or click to drop it and haul up gold. Nothing is recorded.",
      zh: "矿工是一款免费的 30 秒声音游戏：钩子在矿洞上方摆动，喊一声、按空格或点击放钩，把金块拖上来。不录任何音频。",
      es: "Miner es un juego de voz gratis de 30 segundos. Un gancho oscila sobre una cueva — grita, pulsa la barra o haz clic para soltarlo y subir el oro. Nada se graba.",
      ja: "Miner は30秒の無料ボイスゲーム。洞窟の上でアームが振れる——叫ぶ・スペース・クリックで落として金塊を引き上げよう。録音はしません。"
    },
    kicker: { en: "Time your shout", zh: "看准时机再喊", es: "Grita en el momento justo", ja: "叫ぶタイミングが勝負" },
    heard: {
      en: "Shout, Space, or click drops the claw.",
      zh: "喊一声、按空格或点击，钩子就放下去。",
      es: "Grita, pulsa la barra o haz clic y baja el gancho.",
      ja: "叫ぶ・スペース・クリックでアームが落ちます。"
    },
    cardSmall: {
      en: "Gold-rush claw timing", zh: "声控黄金矿工", es: "El buscador de oro con voz", ja: "声で掘るゴールド掘り"
    },
    statLabel: { en: "gold", zh: "金币", es: "oro", ja: "ゴールド" },
    steps: {
      en: ["Press Start and allow the microphone.", "The claw swings by itself. Shout, press Space, or click and it shoots straight down.", "It hauls back whatever it grabs — gold pays well, rock is heavy and slow, and the blue gem is the jackpot.", "Grab as much as you can in 30 seconds."],
      zh: ["点“开始”并允许麦克风。", "钩子会自己左右摆。喊一声、按空格或点击，它就直直放下去。", "钩到什么拖上来什么——金块值钱，石头又重又慢，蓝钻石是大奖。", "30 秒内尽量多挖。"],
      es: ["Pulsa Empezar y permite el micrófono.", "El gancho oscila solo. Grita, pulsa la barra o haz clic y se lanza recto hacia abajo.", "Sube lo que atrape: el oro vale mucho, la roca es pesada y lenta, y la gema azul es el premio gordo.", "Recoge todo lo que puedas en 30 segundos."],
      ja: ["スタートを押してマイクを許可。", "アームはひとりで左右に振れます。叫ぶ・スペース・クリックでまっすぐ落下。", "掴んだものを引き上げます。金塊は高値、岩は重くて遅い、青い宝石は大当たり。", "30秒でできるだけ多く掘りましょう。"]
    },
    note: {
      en: "Miner measures volume in the page. It does not send audio to a speech service and it does not keep a recording. The claw, the gold, and the cave are drawn here.",
      zh: "矿工只在页面内测量音量，不向语音服务发送音频，也不做任何录音。钩子、金块和矿洞都是本站手绘的。",
      es: "Miner mide el volumen dentro de la página: no envía audio a ningún servicio de voz ni guarda grabaciones. El gancho, el oro y la cueva se dibujan aquí.",
      ja: "Miner はページ内で音量を測るだけで、音声サービスへの送信も録音もありません。アームも金塊も洞窟もこのサイトで描いています。"
    },
    faq: [
      { q: { en: "How do I score more in Miner?", zh: "矿工怎么得高分？", es: "¿Cómo saco más puntos en Miner?", ja: "Miner で高得点を出すには？" },
        a: { en: "Wait until the claw points at a nugget before you shout. Big gold pays 120 and the blue gem pays 300 — line it up first.", zh: "等钩子摆到金块正上方再喊。大金块值 120，蓝钻石值 300——看准了再放钩。", es: "Espera a que el gancho apunte a una pepita antes de gritar. El oro grande paga 120 y la gema azul 300 — apunta bien antes de soltarlo.", ja: "アームが金塊の真上に来るのを待ってから叫びましょう。大金塊は120点、青い宝石は300点。狙ってから落とすのがコツです。" } },
      { q: { en: "Do I have to shout?", zh: "必须喊吗？", es: "¿Tengo que gritar?", ja: "叫ぶ必要はある？" },
        a: { en: "No — any short sound past the volume line drops the claw, and Space or a click works with the microphone off.", zh: "不用——任何超过音量线的短促声音都会放钩；不开麦克风时按空格或点击也可以。", es: "No — cualquier sonido corto por encima de la línea suelta el gancho, y la barra o un clic funcionan sin micrófono.", ja: "いいえ——音量の線を超える短い音なら何でもアームが落ちます。マイクなしでもスペースやクリックで遊べます。" } }
    ]
  },
  {
    slug: "floors", game: "floors", look: null, kind: "flat", mode: "volume",
    name: "Floors",
    tagline: { en: "Voice-Steer Down 100 Floors", zh: "声控下100层", es: "Baja 100 pisos con la voz", ja: "声で下る100階" },
    metaDesc: {
      en: "Floors is a free 30-second voice game. A climber sinks down a shaft — hum low to walk left, sing high to walk right, and dodge the spikes. Nothing is recorded.",
      zh: "下100层是一款免费的 30 秒声控游戏：小人不断下坠，低音往左、高音往右，穿过缺口躲开尖刺。不录任何音频。",
      es: "Floors es un juego de voz gratis de 30 segundos. Un minero baja por un pozo — tararea grave para ir a la izquierda, canta agudo para ir a la derecha y esquiva los pinchos. Nada se graba.",
      ja: "Floors は30秒の無料ボイスゲーム。作業員は絶えず沈んでいきます——低い声で左、高い声で右へ歩き、トゲを避けましょう。録音はしません。"
    },
    kicker: { en: "Low hum left, high note right", zh: "低音往左、高音往右", es: "Grave a la izquierda, agudo a la derecha", ja: "低音は左、高音は右" },
    heard: {
      en: "Hum low to walk left, high notes walk right.",
      zh: "低音往左走，高音往右走。",
      es: "Un tono grave camina a la izquierda, uno agudo a la derecha.",
      ja: "低音で左へ、高音で右へ歩きます。"
    },
    cardSmall: {
      en: "The descent classic, steered by pitch", zh: "声控下100层", es: "El clásico de bajar, guiado por tono", ja: "音程で操作する下降定番"
    },
    statLabel: { en: "floors", zh: "层", es: "pisos", ja: "階" },
    steps: {
      en: ["Press Start and allow the microphone.", "The climber sinks by himself. Hum a low note and he walks left; whistle or sing a high note and he walks right.", "Steer him through the gaps in each floor. Spiked floors and the rising spike ceiling end the round.", "Arrow keys, or holding the left or right half of the picture, also steer. You have 30 seconds."],
      zh: ["点“开始”并允许麦克风。", "小人会自己往下掉。发出低沉的“嗯——”他就往左走；吹口哨或发高音就往右走。", "带他穿过每层楼板的缺口。尖刺楼板和不断下压的尖刺天花板都会结束本轮。", "也可以按左右方向键，或按住画面左半边/右半边。每局 30 秒。"],
      es: ["Pulsa Empezar y permite el micrófono.", "El minero baja solo. Tararea una nota grave y camina a la izquierda; silba o canta agudo y va a la derecha.", "Guíalo por los huecos de cada piso. Los pisos con pinchos y el techo de pinchos que desciende acaban la ronda.", "Las flechas, o mantener pulsada la mitad izquierda o derecha de la imagen, también sirven. Tienes 30 segundos."],
      ja: ["スタートを押してマイクを許可。", "作業員はひとりで沈んでいきます。低い声で「うー」と伸ばすと左へ、口笛や高い声だと右へ歩きます。", "各階の隙間へ導いてください。トゲの床と迫るトゲの天井でラウンド終了。", "矢印キーや、画面の左右半分を押し続ける操作でも動かせます。時間は30秒。"]
    },
    note: {
      en: "Floors listens for pitch in the page. The audio never leaves your device and nothing is recorded. The climber, the shaft, and the spikes are drawn here.",
      zh: "Floors 只在页面内分析音调，音频不离开你的设备，也不做任何录音。小人、井壁和尖刺都是本站手绘的。",
      es: "Floors detecta el tono dentro de la página. El audio nunca sale de tu dispositivo y no se guarda nada. El minero, el pozo y los pinchos se dibujan aquí.",
      ja: "Floors はページ内で音程を測るだけで、音声は端末から出ず、録音も保存もされません。作業員・豎坑・トゲはすべてこのサイトのオリジナル描画です。"
    },
    faq: [
      { q: { en: "How does the voice steering work?", zh: "声控方向是怎么实现的？", es: "¿Cómo funciona la dirección por voz?", ja: "声の操作はどういう仕組み？" },
        a: { en: "The page tracks the pitch of your voice: anything low (a hum) walks left, anything high (a whistle or “eee”) walks right. Quiet means he keeps falling straight.", zh: "页面会实时分析你声音的音调：低音（哼哼）往左，高音（口哨或“衣——”）往右；安静时他直直下落。", es: "La página sigue el tono de tu voz: lo grave (tararear) camina a la izquierda y lo agudo (silbar o un «iii») a la derecha. En silencio, sigue cayendo recto.", ja: "ページが声の音程を追跡します。低い音（ハミング）は左へ、高い音（口笛や「いー」）は右へ。黙るとまっすぐ落ち続けます。" } },
      { q: { en: "Is Floors the same as the down-100-floors game?", zh: "Floors 和“是男人就下100层”一样吗？", es: "¿Floors es igual al juego de bajar 100 pisos?", ja: "Floors は「下100層」と同じ？" },
        a: { en: "It is our own voice take on the classic descent: same falling climber, same spike ceiling, but the arrow keys are replaced by the pitch of your voice.", zh: "这是我们自己的声控版下塔玩法：同样的小人下坠和尖刺天花板，只是方向键换成了你的音调。", es: "Es nuestra versión con voz del clásico descenso: mismo minero que cae y mismo techo de pinchos, pero las flechas se cambian por el tono de tu voz.", ja: "下降ゲームの定番を声で遊べるようにしたオリジナル版です。落ちる作業員もトゲの天井も同じですが、方向キーの代わりに声の音程で操ります。" } }
    ]
  },
  {
    slug: "catch", game: "catch", look: null, kind: "flat", mode: "volume", hook: "catch",
    name: "Catch",
    tagline: { en: "Catch the Falling Gold", zh: "接住落金", es: "Atrapa el oro que cae", ja: "落ちる金をつかまえる" },
    metaDesc: {
      en: "Catch is a free 30-second voice game. Hum low or high to slide the basket, catch coins and gems, and dodge the bombs. Nothing is recorded.",
      zh: "接金币是一款免费的 30 秒声控游戏：低音左移、高音右移篮子，接住金币和宝石，躲开炸弹。不录任何音频。",
      es: "Catch es un juego de voz gratis de 30 segundos. Tararea grave o agudo para deslizar la cesta, atrapa monedas y gemas y esquiva las bombas. Nada se graba.",
      ja: "Catch は30秒の無料ボイスゲーム。低い声や高い声でバスケットを動かし、コインと宝石をキャッチ、爆弾を避けましょう。録音はしません。"
    },
    kicker: { en: "Low left, high right", zh: "低音左、高音右", es: "Grave a la izquierda, agudo a la derecha", ja: "低音は左、高音は右" },
    heard: {
      en: "Slide the basket. Catch coins and gems, dodge bombs.",
      zh: "左右移动篮子，接金币宝石，躲开炸弹。",
      es: "Desliza la cesta. Atrapa monedas y gemas, esquiva bombas.",
      ja: "バスケットを動かし、コインと宝石を取って爆弾を避けます。"
    },
    cardSmall: { en: "Catch coins, dodge bombs", zh: "接金币、躲炸弹", es: "Atrapa monedas, esquiva bombas", ja: "コインを取り、爆弾を避ける" },
    statLabel: { en: "caught", zh: "个", es: "atrapadas", ja: "個" },
    steps: {
      en: ["Press Start and allow the microphone.", "Hum a low note to slide the basket left, a high note to slide it right. Arrow keys and holding each half of the picture work too.", "Coins score one, blue gems score three, and a caught bomb ends the round.", "You have 30 seconds. Beat your best."],
      zh: ["点“开始”并允许麦克风。", "低音（嗯——）篮子左移，高音（口哨）右移；也可以按左右方向键，或按住画面左半边/右半边。", "金币 +1、蓝宝石 +3，接到炸弹本轮结束。", "每局 30 秒，挑战最高纪录。"],
      es: ["Pulsa Empezar y permite el micrófono.", "Tararea grave para deslizar la cesta a la izquierda, agudo para la derecha. También valen las flechas o mantener cada mitad de la imagen.", "Las monedas suman uno, las gemas azules tres, y una bomba atrapada acaba la ronda.", "Tienes 30 segundos. Supera tu récord."],
      ja: ["スタートを押してマイクを許可。", "低い声でバスケットは左、高い声で右へスライド。矢印キーや画面の左右半分を押す操作でも動かせます。", "コインは1点、青い宝石は3点。爆弾を取るとラウンド終了。", "時間は30秒。自己ベストを狙おう。"]
    },
    note: {
      en: "Catch measures volume and pitch in the page. The audio never leaves your device and nothing is recorded. The basket, the coins, and the bombs are drawn here.",
      zh: "Catch 只在页面内测量音量和音调，音频不离开你的设备，也不做任何录音。篮子、金币和炸弹都是本站手绘的。",
      es: "Catch mide volumen y tono dentro de la página. El audio nunca sale de tu dispositivo y nada se graba. La cesta, las monedas y las bombas se dibujan aquí.",
      ja: "Catch はページ内で音量と音程を測るだけで、音声は端末から出ず、録音も保存もされません。バスケットもコインもこのサイトのオリジナル描画です。"
    },
    faq: [
      { q: { en: "What counts as a low or high note?", zh: "什么算低音、什么算高音？", es: "¿Qué cuenta como nota grave o aguda?", ja: "低音・高音の基準は？" },
        a: { en: "A hum or “mmm” sits low and slides the basket left; a whistle or an “eee” sits high and slides it right. Held notes steer best — speech jumps around.", zh: "哼哼或“嗯——”算低音，篮子左移；口哨或“衣——”算高音，右移。拖长的音最好控制，说话忽高忽低不好用。", es: "Tararear o un «mmm» es grave y desliza a la izquierda; silbar o un «iii» es agudo y va a la derecha. Las notas sostenidas controlan mejor.", ja: "ハミングや「うー」は低音で左へ、口笛や「いー」は高音で右へ。伸ばした声が一番操作しやすいです。" } },
      { q: { en: "What happens if I catch a bomb?", zh: "接到炸弹会怎样？", es: "¿Qué pasa si atrapo una bomba?", ja: "爆弾を取るとどうなる？" },
        a: { en: "The round ends right away and your score stands. Bombs fall often enough that greedy baskets get caught.", zh: "本轮立即结束，当前得分保留。炸弹掉落很频繁，贪心的篮子总会中招。", es: "La ronda acaba al instante y tu puntuación se queda. Las bombas caen lo bastante a menudo como para pillar a los golosos.", ja: "ラウンドは即終了、スコアはそのまま残ります。爆弾はよく落ちるので欲張りは要注意。" } }
    ]
  },
  {
    slug: "racer", game: "racer", look: null, kind: "flat", mode: "volume", hook: "racer",
    name: "Racer",
    tagline: { en: "Dodge the Traffic by Pitch", zh: "声控赛车躲车流", es: "Esquiva el tráfico por tono", ja: "音程で車を避ける" },
    metaDesc: {
      en: "Racer is a free 30-second voice game. Hum low or high to steer down the road and dodge the oncoming cars. Nothing is recorded.",
      zh: "赛车是一款免费的 30 秒声控游戏：低音左移、高音右移，在公路上穿行车流。不录任何音频。",
      es: "Racer es un juego de voz gratis de 30 segundos. Tararea grave o agudo para bajar por la carretera y esquivar los coches. Nada se graba.",
      ja: "Racer は30秒の無料ボイスゲーム。低い声や高い声でステアし、対向車を避けて走りましょう。録音はしません。"
    },
    kicker: { en: "Steer through the lanes", zh: "在车道间穿行", es: "Cruza los carriles", ja: "車線をすり抜けろ" },
    heard: {
      en: "Steer down the road and dodge the cars.",
      zh: "左右移动，躲开对向车。",
      es: "Baja por la carretera y esquiva los coches.",
      ja: "ステアして対向車を避けましょう。"
    },
    cardSmall: { en: "Voice-steered traffic dodge", zh: "音调方向盘", es: "Volante por tono", ja: "声のハンドル" },
    statLabel: { en: "cars", zh: "辆", es: "coches", ja: "台" },
    steps: {
      en: ["Press Start and allow the microphone.", "Hum low to steer left, high to steer right. Arrow keys and holding each half of the picture work too.", "Every car you pass scores one point. Touch one and the round ends.", "Traffic speeds up as you go. You have 30 seconds."],
      zh: ["点“开始”并允许麦克风。", "低音左移、高音右移；也可以按左右方向键，或按住画面两边。", "每躲过一辆车得 1 分，撞上车本轮结束。", "车流越来越快。每局 30 秒。"],
      es: ["Pulsa Empezar y permite el micrófono.", "Tararea grave para ir a la izquierda, agudo a la derecha. También valen las flechas o cada mitad de la imagen.", "Cada coche superado suma un punto. Tocar uno acaba la ronda.", "El tráfico acelera con el tiempo. Tienes 30 segundos."],
      ja: ["スタートを押してマイクを許可。", "低い声で左、高い声で右へ。矢印キーや画面左右の押しでも操作できます。", "避けるごとに1点。ぶつかるとラウンド終了。", "だんだんスピードが上がります。時間は30秒。"]
    },
    note: {
      en: "Racer measures pitch in the page. The audio never leaves your device and nothing is recorded. The road, the cars, and the crash are drawn here.",
      zh: "赛车只在页面内分析音调，音频不离开你的设备，也不做任何录音。公路、车辆和碰撞都是本站手绘的。",
      es: "Racer mide el tono dentro de la página. El audio nunca sale de tu dispositivo y nada se graba. La carretera y los coches se dibujan aquí.",
      ja: "Racer はページ内で音程を測るだけで、録音はしません。道路も車もこのサイトのオリジナル描画です。"
    },
    faq: [
      { q: { en: "Does the car stay in a lane?", zh: "车会锁在车道里吗？", es: "¿El coche se queda en un carril?", ja: "車は車線に固定されますか？" },
        a: { en: "No — steering is continuous, like a real wheel. Small corrections are enough; big swings put you into the next lane's bumper.", zh: "不会——转向是连续的，像真方向盘。小幅修正就够，猛打方向会蹭到旁边的车。", es: "No — la dirección es continua, como un volante real. Basta con correcciones pequeñas.", ja: "いいえ、連続的なステアです。小さな修正で十分です。" } },
      { q: { en: "How fast does it get?", zh: "最快能到多快？", es: "¿Cómo de rápido llega?", ja: "どんどん速くなる？" },
        a: { en: "Traffic adds a little pace with every car you pass, so the final ten seconds are the real test.", zh: "每躲过一辆车，车速都会加一点——最后 10 秒才是真正的考验。", es: "El tráfico gana ritmo con cada coche superado: los últimos diez segundos son la prueba.", ja: "避けるごとに少しずつ速くなり、ラスト10秒が本番です。" } }
    ]
  },
  {
    slug: "bricks", game: "bricks", look: null, kind: "flat", mode: "volume", hook: "bricks",
    name: "Bricks",
    tagline: { en: "Break the Wall with Your Voice", zh: "喊声打砖块", es: "Rompe el muro con la voz", ja: "声でブロック崩し" },
    metaDesc: {
      en: "Bricks is a free 30-second voice game. Hum to slide the paddle, shout or press Space to launch the ball, and break as many bricks as you can. Nothing is recorded.",
      zh: "打砖块是一款免费的 30 秒声控游戏：哼鸣移动挡板，喊一声或按空格发球，打掉尽量多的砖。不录任何音频。",
      es: "Bricks es un juego de voz gratis de 30 segundos. Tararea para deslizar la pala, grita o pulsa Espacio para lanzar la bola y rompe ladrillos. Nada se graba.",
      ja: "Bricks は30秒の無料ボイスゲーム。声でパドルを動かし、叫んでボールを発射、ブロックを壊しましょう。録音はしません。"
    },
    kicker: { en: "Slide the paddle, shout to launch", zh: "移动挡板，喊声发球", es: "Desliza la pala, grita para lanzar", ja: "パドルを動かし、叫んで発射" },
    heard: {
      en: "Slide the paddle. Shout, Space, or click launches the ball.",
      zh: "移动挡板。喊一声、按空格或点击就发球。",
      es: "Desliza la pala. Grita, pulsa Espacio o haz clic para lanzar.",
      ja: "パドルを動かし、叫び・スペース・クリックで発射。"
    },
    cardSmall: { en: "Voice-steered breakout", zh: "声控打砖块", es: "Rompe ladrillos por tono", ja: "音程のブロック崩し" },
    statLabel: { en: "bricks", zh: "块", es: "ladrillos", ja: "個" },
    steps: {
      en: ["Press Start and allow the microphone.", "Hum low or high to slide the paddle; the ball rides it until you launch.", "Shout, press Space, or click to launch. Top gold rows pay 3, middle rows 2, bottom row 1.", "If the ball drops, slide in and shout to serve again. You have 30 seconds."],
      zh: ["点“开始”并允许麦克风。", "低音或高音移动挡板；球会停在挡板上等你发球。", "喊一声、按空格或点击发球。顶部金砖 +3、中间 +2、底排 +1。", "球掉下去就再喊一次发球。每局 30 秒。"],
      es: ["Pulsa Empezar y permite el micrófono.", "Tararea grave o agudo para deslizar la pala; la bola viaja con ella hasta el lanzamiento.", "Grita, pulsa Espacio o haz clic para lanzar. Las filas doradas de arriba pagan 3, las del medio 2, la de abajo 1.", "Si la bola cae, colócate y grita para servir otra vez. Tienes 30 segundos."],
      ja: ["スタートを押してマイクを許可。", "低い声・高い声でパドルをスライド。ボールはパドルに乗ったまま待機します。", "叫ぶ・スペース・クリックで発射。上の金ブロックは3点、中は2点、下段は1点。", "ボールを落としたらもう一度叫んで発射。時間は30秒。"]
    },
    note: {
      en: "Bricks measures volume and pitch in the page. The audio never leaves your device and nothing is recorded. The wall, the paddle, and the ball are drawn here.",
      zh: "打砖块只在页面内测量音量和音调，音频不离开你的设备，也不做任何录音。砖墙、挡板和球都是本站手绘的。",
      es: "Bricks mide volumen y tono dentro de la página. El audio nunca sale de tu dispositivo y nada se graba. El muro, la pala y la bola se dibujan aquí.",
      ja: "Bricks はページ内で音量と音程を測るだけ。録音はしません。壁もパドルもこのサイトのオリジナル描画です。"
    },
    faq: [
      { q: { en: "Why does the ball need relaunching?", zh: "为什么球需要重新发？", es: "¿Por qué hay que relanzar la bola?", ja: "なぜボールを再発射するの？" },
        a: { en: "The shout is your serve. When the ball drops past the paddle, slide to a smart spot and shout again — launching well is part of the score.", zh: "喊声就是发球权。球掉下去后，先把挡板移到好位置再喊——会发球也是得分的一部分。", es: "El grito es tu saque. Cuando la bola cae, colócate bien y grita otra vez — buen saque también puntúa.", ja: "叫びがサーブです。落ちたら位置を調整してもう一度叫びましょう。" } },
      { q: { en: "Which bricks pay most?", zh: "哪些砖分数最高？", es: "¿Qué ladrillos pagan más?", ja: "どのブロックが一番得点？" },
        a: { en: "The two top gold rows pay 3 each, the two middle rows pay 2, and the bottom row pays 1 — keep the ball high.", zh: "顶部两排金砖每块 +3，中间两排 +2，底排 +1——让球留在高处最划算。", es: "Las dos filas doradas de arriba pagan 3, las del medio 2 y la de abajo 1 — mantén la bola arriba.", ja: "上の2段は3点、中2段は2点、下段は1点。ボールを上に保ちましょう。" } }
    ]
  },
  {
    slug: "snake", game: "snake", look: null, kind: "flat", mode: "volume", hook: "snake",
    name: "Snake",
    tagline: { en: "Steer the Snake by Pitch", zh: "声控贪吃蛇", es: "Guía la serpiente por tono", ja: "音程で蛇を操作" },
    metaDesc: {
      en: "Snake is a free 30-second voice game. A low note turns left, a high note turns right — eat apples, grow long, and don't bite yourself. Nothing is recorded.",
      zh: "贪吃蛇是一款免费的 30 秒声控游戏：低音左转、高音右转，吃苹果变长，别咬到自己。不录任何音频。",
      es: "Snake es un juego de voz gratis de 30 segundos. Una nota grave gira a la izquierda, aguda a la derecha — come manzanas y no te muerdas. Nada se graba.",
      ja: "Snake は30秒の無料ボイスゲーム。低音で左ターン、高音で右ターン——りんごを食べて育とう。録音はしません。"
    },
    kicker: { en: "Low turns left, high turns right", zh: "低音左转、高音右转", es: "Grave gira a la izquierda, agudo a la derecha", ja: "低音は左、高音は右に曲がる" },
    heard: {
      en: "Eat the apples. Don't bite yourself.",
      zh: "吃苹果，别咬到自己。",
      es: "Come las manzanas. No te muerdas.",
      ja: "りんごを食べて、自分を噛まない。"
    },
    cardSmall: { en: "The classic, turns by pitch", zh: "音调控制转向", es: "El clásico, por tono", ja: "音程ターンの定番" },
    statLabel: { en: "eaten", zh: "个", es: "comidas", ja: "個" },
    steps: {
      en: ["Press Start and allow the microphone.", "The snake crawls by itself. A low note turns it left, a high note turns it right — relative to where it is heading.", "Eat every apple to score one and grow two cells longer.", "Bite a wall or yourself and the round ends. You have 30 seconds."],
      zh: ["点“开始”并允许麦克风。", "蛇会自己爬。低音左转、高音右转——是相对它当前方向的转向。", "每吃一个苹果得 1 分，身体加长 2 节。", "撞墙或咬到自己本轮结束。每局 30 秒。"],
      es: ["Pulsa Empezar y permite el micrófono.", "La serpiente avanza sola. Nota grave gira a su izquierda, aguda a su derecha — según hacia donde va.", "Cada manzana suma un punto y alarga dos casillas.", "Morder un muro o tu cuerpo acaba la ronda. Tienes 30 segundos."],
      ja: ["スタートを押してマイクを許可。", "蛇はひとりで進みます。低音で左、高音で右——進行方向から見たターンです。", "りんごを1つ食べるごとに1点、体が2マス伸びる。", "壁や自分にぶつかるとラウンド終了。時間は30秒。"]
    },
    note: {
      en: "Snake measures pitch in the page. The audio never leaves your device and nothing is recorded. The snake, the apples, and the garden are drawn here.",
      zh: "贪吃蛇只在页面内分析音调，音频不离开你的设备，也不做任何录音。蛇、苹果和场地都是本站手绘的。",
      es: "Snake mide el tono dentro de la página. El audio nunca sale de tu dispositivo y nada se graba. La serpiente y las manzanas se dibujan aquí.",
      ja: "Snake はページ内で音程を測るだけ。録音はしません。蛇もりんごもこのサイトのオリジナル描画です。"
    },
    faq: [
      { q: { en: "Are the turns absolute or relative?", zh: "转向是绝对方向还是相对方向？", es: "¿Los giros son absolutos o relativos?", ja: "ターンは絶対？相対？" },
        a: { en: "Relative: “left” always means the snake's own left, like a real turn. Two quick low notes make a U-turn.", zh: "相对方向：“左转”永远是蛇自己的左边，像真开车。连喊两声低音就能掉头。", es: "Relativos: «izquierda» es la izquierda de la serpiente, como un giro real. Dos notas graves seguidas hacen un giro en U.", ja: "相対です。「左」は蛇から見た左。低音2回でUターンできます。" } },
      { q: { en: "How long is the snake at the start?", zh: "蛇一开始有多长？", es: "¿Cómo de larga es la serpiente al inicio?", ja: "最初の蛇の長さは？" },
        a: { en: "Four cells. Every apple adds two, and the pace picks up as you eat — the last ten seconds get crowded.", zh: "初始 4 节。每个苹果加长 2 节，节奏越吃越快——最后 10 秒场地上会很挤。", es: "Cuatro casillas. Cada manzana añade dos y el ritmo sube al comer — el final se llena.", ja: "最初は4マス。りんごごとに2マス伸びて、テンポも上がります。" } }
    ]
  },
  {
    slug: "march", game: "march", look: null, kind: "flat", mode: "volume", hook: "march",
    name: "March",
    tagline: { en: "Sound to Walk, Silence to Stop", zh: "出声前进、安静停下", es: "Suena para andar, silencio para parar", ja: "声で歩き、黙って止まる" },
    metaDesc: {
      en: "March is a free 30-second voice game. Hold a sound to walk down the corridor, go silent to stop — brake before the spikes, because the spike wall chases you. Nothing is recorded.",
      zh: "行军是一款免费的 30 秒声控游戏：出声前进、安静停下，在尖刺前刹住——身后的尖刺墙还在追。不录任何音频。",
      es: "March es un juego de voz gratis de 30 segundos. Suena para andar por el pasillo, silencio para parar — frena antes de los pinchos, que el muro te persigue. Nada se graba.",
      ja: "March は30秒の無料ボイスゲーム。声で歩き、黙って止まる——トゲの前に止まれ、背後の壁も迫ります。録音はしません。"
    },
    kicker: { en: "Walk on sound, brake on silence", zh: "出声走、安静刹", es: "Anda con sonido, frena en silencio", ja: "声で歩き、沈黙でブレーキ" },
    heard: {
      en: "Hold a sound to walk. Silence stops you.",
      zh: "出声就前进，安静就停下。",
      es: "Suena para andar. El silencio te frena.",
      ja: "声で歩き、黙ると止まります。"
    },
    cardSmall: { en: "The walk-and-stop classic", zh: "声控走停经典", es: "El clásico andar y parar", ja: "声で歩く定番" },
    statLabel: { en: "m", zh: "米", es: "m", ja: "m" },
    steps: {
      en: ["Press Start and allow the microphone.", "Hold a sound and the climber walks; go silent and he stops in place.", "Stop before the spike strips — touching spikes ends the round, and the spiked wall behind never stops closing in.", "The score counts meters. You have 30 seconds."],
      zh: ["点“开始”并允许麦克风。", "持续出声小人就前进，安静下来就地停住。", "尖刺带前要提前刹住——踩到尖刺本轮结束，身后的尖刺墙也一直在逼近。", "得分就是米数。每局 30 秒。"],
      es: ["Pulsa Empezar y permite el micrófono.", "Mantén un sonido y el minero anda; calla y se detiene donde está.", "Frena antes de las tiras de pinchos — tocarlos acaba la ronda, y el muro de pinchos de atrás no deja de acercarse.", "El marcador cuenta metros. Tienes 30 segundos."],
      ja: ["スタートを押してマイクを許可。", "声を出している間は歩き、黙るとその場で止まります。", "トゲの帯の前で早めに止まる——触れるとラウンド終了、背後のトゲの壁も迫り続けます。", "スコアはメートル数。時間は30秒。"]
    },
    note: {
      en: "March measures volume in the page. It does not send audio to a speech service and it does not keep a recording. The walker, the spikes, and the wall are drawn here.",
      zh: "行军只在页面内测量音量，不向语音服务发送音频，也不做任何录音。行人、尖刺和墙都是本站手绘的。",
      es: "March mide el volumen dentro de la página. No envía audio a ningún servicio de voz ni guarda grabaciones. El caminante, los pinchos y el muro se dibujan aquí.",
      ja: "March はページ内で音量を測るだけで、音声サービスへの送信も録音もありません。歩行者もトゲも壁もこのサイトで描いています。"
    },
    faq: [
      { q: { en: "How precise is the stop?", zh: "停下有多精准？", es: "¿Qué precisión tiene la parada?", ja: "止まる精度は？" },
        a: { en: "Instant — silence brakes him where he stands. The game is reading the ground ahead and letting go early.", zh: "瞬时刹车——安静下来他就原地停住。玩的就是看清前方地面、提前松手。", es: "Instantánea — el silencio lo frena donde está. El juego consiste en leer el suelo y soltar pronto.", ja: "瞬時に止まります。先の地面を読んで、早めに声をやめるのがゲームです。" } },
      { q: { en: "What if I just stay quiet?", zh: "一直安静不动行不行？", es: "¿Y si me quedo quieto?", ja: "ずっと黙ってたら？" },
        a: { en: "The spiked wall creeps forward forever, so standing still only postpones it — and only meters score.", zh: "尖刺墙会一直逼近，站着不动只是拖延——而且只有走出来的米数才计分。", es: "El muro de pinchos avanza siempre, así que quedarse quieto solo lo retrasa — y solo los metros puntúan.", ja: "トゲの壁は常に迫ります。止まっているのは先送りだけで、得点はメートルのみです。" } }
    ]
  },
  {
    slug: "tug", game: "tug", look: null, kind: "flat", mode: "volume", hook: "tug",
    name: "Tug",
    tagline: { en: "Out-Shout the Machine", zh: "和机器比谁响", es: "Grita más fuerte que la máquina", ja: "機械と声比べ" },
    metaDesc: {
      en: "Tug is a free 30-second voice game. Your volume pulls the rope against a machine that drags back harder every round. Win as many pulls as you can. Nothing is recorded.",
      zh: "拔河是一款免费的 30 秒声控游戏：你的音量拉动绳索，机器每轮都拽得更狠，看能赢下几轮。不录任何音频。",
      es: "Tug es un juego de voz gratis de 30 segundos. Tu volumen tira de la cuerda contra una máquina que tira más fuerte cada ronda. Gana cuantas puedas. Nada se graba.",
      ja: "Tug は30秒の無料ボイスゲーム。声の音量で綱を引き、ラウンドごとに強くなるマシンと勝負。録音はしません。"
    },
    kicker: { en: "Louder pulls harder", zh: "声音越大拉力越强", es: "Más volumen tira más fuerte", ja: "大きい声ほど強く引く" },
    heard: {
      en: "Your volume pulls the marker to your line.",
      zh: "用音量把标记拉到你这条线。",
      es: "Tu volumen lleva el marcador a tu línea.",
      ja: "音量でマーカーを自分のラインへ。"
    },
    cardSmall: { en: "Rope duel against the machine", zh: "与机器拔河", es: "Duelo de cuerda con la máquina", ja: "マシン綱引き" },
    statLabel: { en: "rounds", zh: "轮", es: "rondas", ja: "回" },
    steps: {
      en: ["Press Start and allow the microphone.", "Shout, sing, or hum — the louder you are, the harder your side pulls the rope.", "Pull the marker past the green line to win the round. The machine drags it back, and harder every round.", "Win as many rounds as you can in 30 seconds."],
      zh: ["点“开始”并允许麦克风。", "喊、唱、哼——声音越大，你这边拉力越强。", "把标记拉过绿线赢下一轮；机器会把标记拽回去，而且一轮比一轮用力。", "30 秒内赢下尽量多轮。"],
      es: ["Pulsa Empezar y permite el micrófono.", "Grita, canta o tararea — cuanto más fuerte, más tira tu lado de la cuerda.", "Lleva el marcador pasado la línea verde para ganar la ronda. La máquina lo arrastra de vuelta, y más fuerte cada ronda.", "Gana todas las rondas que puedas en 30 segundos."],
      ja: ["スタートを押してマイクを許可。", "叫ぶ・歌う・ハミング——大きい声ほど強く引けます。", "マーカーを緑のライン越えさせたら1ラウンド勝ち。マシンは巻き返し、ラウンドごとに強くなります。", "30秒でできるだけ多くのラウンドを勝ち取りましょう。"]
    },
    note: {
      en: "Tug measures volume in the page. It does not send audio to a speech service and it does not keep a recording. The rope, the flag, and both pullers are drawn here.",
      zh: "拔河只在页面内测量音量，不向语音服务发送音频，也不做任何录音。绳索、旗标和两个拉手都是本站手绘的。",
      es: "Tug mide el volumen dentro de la página. No envía audio a ningún servicio de voz ni guarda grabaciones. La cuerda, la bandera y los dos tiradores se dibujan aquí.",
      ja: "Tug はページ内で音量を測るだけで、送信も録音もありません。綱も旗も引き手もこのサイトで描いています。"
    },
    faq: [
      { q: { en: "How loud do I need to be?", zh: "要多大声才够？", es: "¿Qué tan fuerte debo ser?", ja: "どのくらい大声が必要？" },
        a: { en: "The first rounds fall to a strong speaking voice. By round three you are yelling — that is the design.", zh: "前几轮正常大声说话就能赢。到第三轮就得吼了——就是这么设计的。", es: "Las primeras rondas caen con una voz fuerte. En la tercera ya gritas — así está diseñado.", ja: "最初のラウンドは普通に大きな声で勝てます。3ラウンド目からは叫びです。設計通りです。" } },
      { q: { en: "What happens if the machine wins a round?", zh: "机器赢了一轮会怎样？", es: "¿Qué pasa si gana la máquina?", ja: "マシンにラウンドを取られたら？" },
        a: { en: "The marker resets to the middle and the machine eases off a touch, so a lost round never snowballs.", zh: "标记回到中线，机器的力道也会稍微松一点——输一轮不会滚雪球。", es: "El marcador vuelve al centro y la máquina afloja un poco — perder una ronda no se acumula.", ja: "マーカーは中央に戻り、マシンは少し手加減。1敗が雪だるまにはなりません。" } }
    ]
  },
  {
    slug: "puff", game: "puff", look: null, kind: "flat", mode: "volume", hook: "puff",
    name: "Puff",
    tagline: { en: "Blow It Up, Bank It, Don't Pop", zh: "吹气球、见好就收", es: "Sopla, guarda, no explotes", ja: "膨らませて、爆発前に確定" },
    metaDesc: {
      en: "Puff is a free 30-second voice game. Hold a sound to blow the balloon up — every balloon hides its own pop size, so bank it by going quiet before it bursts. Nothing is recorded.",
      zh: "吹气球是一款免费的 30 秒声控游戏：持续出声把气球吹大——每只气球的爆点都是隐藏的，见好就收、安静一下入账。不录任何音频。",
      es: "Puff es un juego de voz gratis de 30 segundos. Mantén un sonido para inflar el globo — cada globo esconde su tamaño de explosión, así que calla y guárdalo antes de que explote. Nada se graba.",
      ja: "Puff は30秒の無料ボイスゲーム。声を出す間に風船は膨らみ、破裂サイズは非公開——黙って確定するのがコツ。録音はしません。"
    },
    kicker: { en: "Blow big, bank early", zh: "吹大点、早点收", es: "Infla grande, guarda pronto", ja: "大きく膨らませ、早めに確定" },
    heard: {
      en: "Hold a sound to blow. Go quiet to bank it.",
      zh: "出声吹气，安静入账。",
      es: "Suena para soplar. Calla para guardar.",
      ja: "声で膨らませ、黙って確定。"
    },
    cardSmall: { en: "Blow it up, cash out in time", zh: "气球版贪心挑战", es: "Infla y cobra a tiempo", ja: "風船で度胸" },
    statLabel: { en: "points", zh: "分", es: "puntos", ja: "点" },
    steps: {
      en: ["Press Start and allow the microphone.", "Hold a sound and the balloon grows about 44 pixels a second — bigger balloons pay more.", "Go quiet for half a second to bank the balloon's size as points and start a fresh one.", "Every balloon hides its own pop size. Blow past it and the balloon bursts for nothing. You have 30 seconds."],
      zh: ["点“开始”并允许麦克风。", "持续出声，气球每秒长大约 44 像素——气球越大分越多。", "安静半秒，气球大小就入账成分数，并换一只新气球。", "每只气球的爆点都是隐藏的，吹过头就爆、一分不得。每局 30 秒。"],
      es: ["Pulsa Empezar y permite el micrófono.", "Mantén un sonido y el globo crece unos 44 píxeles por segundo — más grande, más puntos.", "Calla medio segundo para guardar el tamaño del globo como puntos y empezar otro.", "Cada globo esconde su tamaño de explosión. Pasarte estalla y no paga nada. Tienes 30 segundos."],
      ja: ["スタートを押してマイクを許可。", "声を出している間、風船は毎秒約44ピクセルずつ膨らみます——大きいほど高得点。", "半秒黙るとサイズがそのまま得点入り、新しい風船と交換。", "風船ごとに破裂サイズは隠されていて、超えると0点。時間は30秒。"]
    },
    note: {
      en: "Puff measures volume in the page. It does not send audio to a speech service and it does not keep a recording. The balloons and the pop are drawn here.",
      zh: "吹气球只在页面内测量音量，不向语音服务发送音频，也不做任何录音。气球和爆炸都是本站手绘的。",
      es: "Puff mide el volumen dentro de la página. No envía audio a ningún servicio de voz ni guarda grabaciones. Los globos y la explosión se dibujan aquí.",
      ja: "Puff はページ内で音量を測るだけで、送信も録音もありません。風船も爆発もこのサイトで描いています。"
    },
    faq: [
      { q: { en: "Where is the pop point?", zh: "爆点在哪里？", es: "¿Dónde está el punto de explosión?", ja: "破裂ポイントはどこ？" },
        a: { en: "Hidden, and different for every balloon — somewhere between 48 and 112. The number on the balloon is its current size; the pop size is the secret.", zh: "隐藏的，每只都不同——在 48 到 112 之间。气球上的数字是当前大小，爆点才是秘密。", es: "Oculto y distinto en cada globo — entre 48 y 112. El número del globo es su tamaño actual; el límite es el secreto.", ja: "非公開で風船ごとに違います——48〜112のどこか。風船の数字は今のサイズ、破裂サイズは秘密です。" } },
      { q: { en: "Do popped balloons hurt?", zh: "气球爆了会扣分吗？", es: "¿Los globos reventados penalizan?", ja: "破裂したらペナルティ？" },
        a: { en: "Only your pride — a burst pays nothing and a fresh balloon appears instantly. Greed costs the seconds you spent blowing.", zh: "只伤自尊——爆了不得分，新气球立刻出现。贪婪损失的是你吹气球花掉的秒数。", es: "Solo el orgullo — revienta a cero y aparece otro al instante. La codicia cuesta los segundos que soplaste.", ja: "プライドだけ——破裂は0点で、すぐ次の風船が現れます。欲張りは吹いた時間が無駄になります。" } }
    ]
  },
  {
    slug: "hop", game: "hop", look: null, kind: "flat", mode: "volume", hook: "hop",
    name: "Hop",
    tagline: { en: "Charge Your Voice, Leap the Gap", zh: "声蓄力、闭嘴跳", es: "Carga la voz y salta", ja: "声を溜めてジャンプ" },
    metaDesc: {
      en: "Hop is a free 30-second voice game. Hold a sound to charge your leap, go quiet to jump — land on the next pillar and keep the charge under control. Nothing is recorded.",
      zh: "跳一跳是一款免费的 30 秒声控游戏：按住声音蓄力、闭嘴起跳——跳上下一根柱子，蓄力要及时松手。不录任何音频。",
      es: "Hop es un juego de voz gratis de 30 segundos. Mantén un sonido para cargar el salto, calla para saltar — aterriza en el siguiente pilar sin pasarte. Nada se graba.",
      ja: "Hop は30秒の無料ボイスゲーム。声を溜めて力を貯め、黙ってジャンプ——次の柱に着地させよう。録音はしません。"
    },
    kicker: { en: "Hold to charge, quiet to leap", zh: "按住蓄力、闭嘴起跳", es: "Mantén para cargar, calla para saltar", ja: "溜めて黙ってジャンプ" },
    heard: {
      en: "Hold a sound to charge. Go quiet to jump.",
      zh: "按住声音蓄力，闭嘴起跳。",
      es: "Suena para cargar. Calla para saltar.",
      ja: "声で溜め、黙ってジャンプ。"
    },
    cardSmall: { en: "The charge-jump classic", zh: "声控跳一跳", es: "El clásico de salto cargado", ja: "チャージ跳び定番" },
    statLabel: { en: "hops", zh: "跳", es: "saltos", ja: "回" },
    steps: {
      en: ["Press Start and allow the microphone.", "Hold a sound and the charge ring fills — a full ring is a long leap.", "Go quiet and the climber leaps toward the next pillar. Landing in its middle pays two.", "Fall into the canyon and the round ends. You have 30 seconds."],
      zh: ["点“开始”并允许麦克风。", "按住声音，蓄力环会充满——满环跳得最远。", "闭嘴的一瞬间起跳，朝下一根柱子飞去。落在正中 +2。", "掉进峡谷本轮结束。每局 30 秒。"],
      es: ["Pulsa Empezar y permite el micrófono.", "Mantén un sonido y el anillo de carga se llena — anillo completo, salto largo.", "Calla y el minero salta hacia el siguiente pilar. Aterrizar en el centro paga dos.", "Caer al cañón acaba la ronda. Tienes 30 segundos."],
      ja: ["スタートを押してマイクを許可。", "声を出している間にチャージリングが満ちます——満タンで遠くへ飛べます。", "黙った瞬間にジャンプ。次の柱の真ん中に着地すると+2。", "峡谷に落ちるとラウンド終了。時間は30秒。"]
    },
    note: {
      en: "Hop measures volume in the page. It does not send audio to a speech service and it does not keep a recording. The pillars and the climber are drawn here.",
      zh: "跳一跳只在页面内测量音量，不向语音服务发送音频，也不做任何录音。石柱和小人都是本站手绘的。",
      es: "Hop mide el volumen dentro de la página. No envía audio a ningún servicio de voz ni guarda grabaciones. Los pilares y el minero se dibujan aquí.",
      ja: "Hop はページ内で音量を測るだけで、送信も録音もありません。柱も作業員もこのサイトで描いています。"
    },
    faq: [
      { q: { en: "How do I judge the leap?", zh: "怎么判断该蓄多少力？", es: "¿Cómo calculo el salto?", ja: "跳躍の勢いはどう判断する？" },
        a: { en: "The number over the gap is its width, and the ring shows your charge — a full ring flies about four hundred pixels, so let go early for short gaps.", zh: "缺口上方的数字是宽度，圆环显示蓄力——满环大约飞 400 像素，短缺口要提前松手。", es: "El número sobre el hueco es su ancho, y el anillo muestra tu carga — completo vuela unos cuatrocientos píxeles; suelta pronto en huecos cortos.", ja: "隙間の上の数字が幅、リングはチャージ量——満タンで約400ピクセル飛ぶので、近い場合は早めに止めます。" } },
      { q: { en: "Can I land back where I started?", zh: "能落回原来的柱子吗？", es: "¿Puedo volver al pilar de origen?", ja: "元の柱に戻れる？" },
        a: { en: "Yes, safely — it just scores nothing. Only the far pillar pays.", zh: "可以，安全落回原地——只是不得分。只有跳上远处的柱子才有分。", es: "Sí, sin peligro — solo que no puntúa. Solo el pilar lejano paga.", ja: "はい、安全に着地できます——ただし得点ゼロ。遠い柱だけが得点です。" } }
    ]
  },
  {
    slug: "3d/miner", game: "miner", look: "vox", kind: "vox", mode: "shout",
    name: "Miner 3D",
    tagline: { en: "Shout to Drop the Claw", zh: "喊一声放钩", es: "Grita y suelta el gancho", ja: "叫んでアームを落とす" },
    metaDesc: {
      en: "Miner 3D is a free 30-second voice game. A blocky claw swings over a blocky cave — shout, press Space, or click to drop it and haul up the gold. Nothing is recorded.",
      zh: "3D 矿工是一款免费的 30 秒声音游戏：方块钩爪在方块矿洞上方摆动，喊一声、按空格或点击放钩，把金块拖上来。不录任何音频。",
      es: "Miner 3D es un juego de voz gratis de 30 segundos. Un gancho de bloques oscila sobre una cueva de bloques — grita, pulsa la barra o haz clic para soltarlo y subir el oro. Nada se graba.",
      ja: "Miner 3D は30秒の無料ボイスゲーム。ブロックの洞窟の上でアームが振れる——叫ぶ・スペース・クリックで落として金塊を引き上げよう。録音はしません。"
    },
    kicker: { en: "Time your shout", zh: "看准时机再喊", es: "Grita en el momento justo", ja: "叫ぶタイミングが勝負" },
    heard: {
      en: "Shout, Space, or click drops the claw.",
      zh: "喊一声、按空格或点击，钩子就放下去。",
      es: "Grita, pulsa la barra o haz clic y baja el gancho.",
      ja: "叫ぶ・スペース・クリックでアームが落ちます。"
    },
    featureSmall: {
      en: "The gold-rush claw, in blocks",
      zh: "方块版的黄金矿工",
      es: "El buscador de oro en bloques",
      ja: "ブロック版ゴールド掘り"
    },
    steps: {
      en: ["Press Start, then allow the microphone if the browser asks.", "The claw swings by itself. Shout, press Space, or click and it shoots straight down.", "It hauls back whatever it grabs — gold pays well, rock is heavy and slow, and the blue gem is the jackpot.", "Grab as much as you can in 30 seconds."],
      zh: ["点“开始”，浏览器询问时允许麦克风。", "钩子会自己左右摆。喊一声、按空格或点击，它就直直放下去。", "钩到什么拖上来什么——金块值钱，石头又重又慢，蓝钻石是大奖。", "30 秒内尽量多挖。"],
      es: ["Pulsa Empezar y permite el micrófono si el navegador lo pide.", "El gancho oscila solo. Grita, pulsa la barra o haz clic y se lanza recto hacia abajo.", "Sube lo que atrape: el oro vale mucho, la roca es pesada y lenta, y la gema azul es el premio gordo.", "Recoge todo lo que puedas en 30 segundos."],
      ja: ["スタートを押し、聞かれたらマイクを許可。", "アームはひとりで左右に振れます。叫ぶ・スペース・クリックでまっすぐ落下。", "掴んだものを引き上げます。金塊は高値、岩は重くて遅い、青い宝石は大当たり。", "30秒でできるだけ多く掘りましょう。"]
    },
    note: {
      en: "You see the mine from the side, all in blocks. Miner 3D measures volume in the page. It does not send audio to a speech service and it does not keep a recording.",
      zh: "游戏为侧面视角，全部由方块构成。3D 矿工只在页面内测量音量，不向语音服务发送音频，也不做任何录音。",
      es: "Ves la mina de lado, todo en bloques. Miner 3D mide el volumen dentro de la página y no guarda grabaciones.",
      ja: "横視点のブロック鉱山です。Miner 3D はページ内で音量を測るだけで、録音はしません。"
    },
    faq: [
      { q: { en: "How is Miner 3D different from Miner?", zh: "3D 矿工和矿工有什么区别？", es: "¿En qué se diferencia Miner 3D de Miner?", ja: "Miner 3D と Miner の違いは？" },
        a: { en: "Same rules, two pictures: the flat pixel mine and this blocky side view of the same cave. Your score is kept separately for each.", zh: "规则相同、画面不同：一个是平面像素矿洞，一个是立体方块侧视角。两边成绩分开记录。", es: "Mismas reglas, dos aspectos: la mina plana en píxeles y esta vista lateral de bloques. Cada una guarda su récord.", ja: "ルールは同じで見た目が違うだけ。平面ピクセル版とブロック立体版で、記録は別々に保存されます。" } },
      { q: { en: "Do I have to shout?", zh: "必须喊吗？", es: "¿Tengo que gritar?", ja: "叫ぶ必要はある？" },
        a: { en: "No — any short sound past the volume line drops the claw, and Space or a click works with the microphone off.", zh: "不用——任何超过音量线的短促声音都会放钩；不开麦克风时按空格或点击也可以。", es: "No — cualquier sonido corto por encima de la línea suelta el gancho, y la barra o un clic funcionan sin micrófono.", ja: "いいえ——音量の線を超える短い音でアームが落ちます。スペースやクリックでも OK。" } }
    ]
  },
  {
    slug: "3d/floors", game: "floors", look: "vox", kind: "vox", mode: "shout",
    name: "Floors 3D",
    tagline: { en: "Voice-Steer Down 100 Floors", zh: "声控下100层", es: "Baja 100 pisos con la voz", ja: "声で下る100階" },
    metaDesc: {
      en: "Floors 3D is a free 30-second voice game. A blocky climber sinks down a blocky shaft — hum low to walk left, sing high to walk right, and dodge the spikes. Nothing is recorded.",
      zh: "3D 下100层是一款免费的 30 秒声控游戏：方块小人沿方块竖井下坠，低音左移、高音右移，躲开尖刺。不录任何音频。",
      es: "Floors 3D es un juego de voz gratis de 30 segundos. Un minero de bloques baja por un pozo de bloques — grave para ir a la izquierda, agudo a la derecha, esquivando pinchos. Nada se graba.",
      ja: "Floors 3D は30秒の無料ボイスゲーム。ブロックの作業員がブロックの立坑を沈んでいきます——低音で左、高音で右、トゲを避けましょう。録音はしません。"
    },
    kicker: { en: "Low hum left, high note right", zh: "低音往左、高音往右", es: "Grave a la izquierda, agudo a la derecha", ja: "低音は左、高音は右" },
    heard: {
      en: "Hum low to walk left, high notes walk right.",
      zh: "低音往左走，高音往右走。",
      es: "Un tono grave camina a la izquierda, uno agudo a la derecha.",
      ja: "低音で左へ、高音で右へ歩きます。"
    },
    featureSmall: {
      en: "The descent classic, in blocks",
      zh: "方块版的下100层",
      es: "El clásico de bajar en bloques",
      ja: "ブロック版下降定番"
    },
    steps: {
      en: ["Press Start, then allow the microphone if the browser asks.", "The climber sinks by himself. Hum a low note and he walks left; whistle or sing a high note and he walks right.", "Steer him through the gaps in each floor. Spiked floors and the rising spike ceiling end the round.", "Arrow keys, or holding the left or right half of the picture, also steer. You have 30 seconds."],
      zh: ["点“开始”，浏览器询问时允许麦克风。", "小人会自己往下掉。低音（嗯——）左移，口哨或高音右移。", "带他穿过每层楼板的缺口。尖刺楼板和不断下压的尖刺天花板都会结束本轮。", "也可以按左右方向键，或按住画面左半边/右半边。每局 30 秒。"],
      es: ["Pulsa Empezar y permite el micrófono si el navegador lo pide.", "El minero baja solo. Tararea grave y camina a la izquierda; silba o canta agudo y va a la derecha.", "Guíalo por los huecos de cada piso. Los pisos con pinchos y el techo que desciende acaban la ronda.", "Las flechas o cada mitad de la imagen también sirven. Tienes 30 segundos."],
      ja: ["スタートを押し、聞かれたらマイクを許可。", "作業員はひとりで沈みます。低い声で左へ、口笛や高い声で右へ。", "各階の隙間へ導いてください。トゲの床と迫る天井でラウンド終了。", "矢印キーや画面左右の押しでも操作できます。時間は30秒。"]
    },
    note: {
      en: "You see the shaft from the side, all in blocks. Floors 3D listens for pitch in the page. The audio never leaves your device and nothing is recorded.",
      zh: "游戏为侧面视角，全部由方块构成。3D 下100层只在页面内分析音调，音频不离开你的设备，也不做任何录音。",
      es: "Ves el pozo de lado, todo en bloques. Floors 3D detecta el tono dentro de la página. El audio nunca sale de tu dispositivo y nada se graba.",
      ja: "横視点のブロック立坑です。Floors 3D はページ内で音程を測るだけで、録音はしません。"
    },
    faq: [
      { q: { en: "How is Floors 3D different from Floors?", zh: "3D 下100层和下100层有什么区别？", es: "¿En qué se diferencia Floors 3D de Floors?", ja: "Floors 3D と Floors の違いは？" },
        a: { en: "Same rules, two pictures: the flat pixel shaft and this blocky side view of the same descent. Your best is kept separately for each.", zh: "规则相同、画面不同：一个是平面像素竖井，一个是立体方块侧视角。两边最佳成绩分开记录。", es: "Mismas reglas, dos aspectos: el pozo plano en píxeles y esta vista lateral de bloques. Cada uno guarda su récord.", ja: "ルールは同じで見た目が違うだけ。平面ピクセル版とブロック立体版で記録は別です。" } },
      { q: { en: "How does the voice steering work?", zh: "声控方向是怎么实现的？", es: "¿Cómo funciona la dirección por voz?", ja: "声の操作はどういう仕組み？" },
        a: { en: "The page tracks the pitch of your voice: anything low (a hum) walks left, anything high (a whistle or “eee”) walks right. Quiet means he keeps falling straight.", zh: "页面会实时分析你声音的音调：低音（哼哼）往左，高音（口哨或“衣——”）往右；安静时他直直下落。", es: "La página sigue el tono de tu voz: lo grave va a la izquierda y lo agudo a la derecha. En silencio, sigue cayendo recto.", ja: "ページが声の音程を追跡します。低い音は左へ、高い音は右へ。黙るとまっすぐ落ちます。" } }
    ]
  }
]
