// Speech-controlled games: say, count, repeat, voice-over, voice-acting, plus the embed page.
export const speechGames = [
  {
    slug: "say", game: "say", kind: "speech", mode: "speak",
    name: "Say it",
    tagline: { en: "Say the Word Out Loud", zh: "大声说出单词", es: "Di la palabra en voz alta", ja: "言葉を声に出す" },
    metaDesc: {
      en: "Say It is a free one-minute voice game. A word appears, you say it, and the next word shows up. Play in desktop Chrome with a microphone.",
      zh: "说单词是一款免费的 1 分钟语音游戏：屏幕出现一个单词，你大声读出来，下一个单词马上出现。需要电脑版 Chrome 和麦克风。",
      es: "Say It es un juego de voz gratis de un minuto. Aparece una palabra, la dices y surge la siguiente. Juega en Chrome para escritorio con micrófono.",
      ja: "Say It は1分の無料ボイスゲーム。画面の単語を声に出すと次の単語が現れます。マイク付きのパソコン版 Chrome で。"
    },
    kicker: { en: "Say the word", zh: "读出这个词", es: "Di la palabra", ja: "言葉を言おう" },
    attract: { en: "Say the word out loud", zh: "大声读出屏幕上的词", es: "Di la palabra en voz alta", ja: "画面の言葉を声に出そう" },
    heard: {
      en: "A word appears. Say it.",
      zh: "屏幕会出现一个单词，读出来。",
      es: "Aparece una palabra. Dila.",
      ja: "単語が出たら声に出そう。"
    },
    prompt: { en: "word", zh: "单词", es: "palabra", ja: "ことば" },
    cardSmall: {
      en: "One word appears — say it", zh: "出现单词——读出来", es: "Aparece una palabra — dila", ja: "単語が出たら言う"
    },
    statLabel: { en: "correct", zh: "个正确", es: "correctas", ja: "問正解" },
    steps: {
      en: ["Press Start and allow the microphone.", "One word fills the screen. Say that word clearly.", "When it matches, the score goes up and a new word appears.", "You have 60 seconds. Press Stop to end early."],
      zh: ["点“开始”并允许麦克风。", "屏幕上会出现一个单词，清楚地把这个词读出来。", "识别匹配后得分 +1，下一个单词马上出现。", "限时 60 秒，可随时点“停止”结束。"],
      es: ["Pulsa Empezar y permite el micrófono.", "Una palabra llena la pantalla. Dila con claridad.", "Cuando coincida, suma un punto y aparece una nueva.", "Tienes 60 segundos. Pulsa Parar para terminar antes."],
      ja: ["スタートを押してマイクを許可。", "画面に単語が1つ出たら、はっきり声に出す。", "一致すると1点が入り、次の単語が出ます。", "制限は60秒。ストップで早く終えられます。"]
    },
    note: {
      en: "Say It uses Chrome’s speech service to turn your voice into text. This page does not store the recording. Open it in desktop Chrome.",
      zh: "说单词使用 Chrome 的语音服务把语音转成文字，本页面不保存录音。请用电脑版 Chrome 打开。",
      es: "Say It usa el servicio de voz de Chrome para convertir tu voz en texto. Esta página no guarda la grabación. Ábrela en Chrome para escritorio.",
      ja: "Say It は Chrome の音声サービスで声を文字に変えます。このページは録音を保存しません。パソコン版 Chrome で開いてください。"
    },
    faq: [
      { q: { en: "Why is my word not counting?", zh: "为什么读了却不得分？", es: "¿Por qué no cuenta mi palabra?", ja: "言っても得点にならないのは？" },
        a: { en: "Say the whole word clearly at normal volume. The bottom strip shows what Chrome heard — compare it with the word on screen and try again.", zh: "用正常音量把整个单词读清楚。底部状态条会显示 Chrome 听到的内容，对照屏幕上的单词再试一次。", es: "Di la palabra completa y con claridad. La tira inferior muestra lo que Chrome oyó — compárala con la palabra e inténtalo otra vez.", ja: "単語全体をはっきり普通の音量で言ってください。下のバーに Chrome が聞き取った文字が出ます。照らし合わせてもう一度。" } },
      { q: { en: "Can I play Say It in other languages?", zh: "说单词可以用其他语言玩吗？", es: "¿Puedo jugar a Say It en otros idiomas?", ja: "Say It は他の言語で遊べる？" },
        a: { en: "Yes — switch the site language in the top bar and the words change with it. Each version listens in its own language.", zh: "可以——用顶栏切换网站语言，单词表会跟着切换，每个语言版本都用该语言的语音识别。", es: "Sí — cambia el idioma del sitio en la barra superior y las palabras cambian con él. Cada versión escucha en su idioma.", ja: "はい——上部のバーで言語を切り替えると単語も変わります。各言語でそれぞれ認識します。" } }
    ]
  },
  {
    slug: "count", game: "count", kind: "speech", mode: "speak",
    name: "Count",
    tagline: { en: "Say the Numbers Out Loud", zh: "大声数数", es: "Cuenta en voz alta", ja: "数を声に出す" },
    metaDesc: {
      en: "Count is a free voice game. Say one, then two, and keep going up to thirty. You have 60 seconds. Play in desktop Chrome.",
      zh: "数数是一款免费的语音游戏：从“一”开始往上数，一直数到三十，限时 60 秒。需要电脑版 Chrome。",
      es: "Count es un juego de voz gratis. Di uno, luego dos, y sigue hasta treinta. Tienes 60 segundos. En Chrome para escritorio.",
      ja: "Count は無料のボイスゲーム。「1」から始めて三十まで数を数える、制限60秒。パソコン版 Chrome で。"
    },
    kicker: { en: "Say this number", zh: "读出这个数字", es: "Di este número", ja: "この数を言おう" },
    attract: { en: "Count up from one, out loud", zh: "从“一”开始大声往上数", es: "Cuenta desde uno en voz alta", ja: "1から声に出して数えよう" },
    heard: {
      en: "Start at one and keep going.",
      zh: "从“一”开始，一直往上数。",
      es: "Empieza en uno y sigue.",
      ja: "1から続けて数えよう。"
    },
    prompt: { en: "one", zh: "一", es: "uno", ja: "一" },
    cardSmall: {
      en: "Climb from one to thirty", zh: "从一数到三十", es: "De uno a treinta", ja: "1から30まで"
    },
    statLabel: { en: "correct", zh: "个正确", es: "correctas", ja: "問正解" },
    steps: {
      en: ["Press Start. The first number is one.", "Say the number on screen, then say the next one when it appears.", "The score adds one for every number it hears in order.", "The count stops at thirty, or when 60 seconds run out."],
      zh: ["点“开始”，第一个数字是“一”。", "读出屏幕上的数字，出现下一个就读下一个。", "按顺序每听对一个数字得 1 分。", "数到三十或时间用完（60 秒）就结束。"],
      es: ["Pulsa Empezar. El primer número es uno.", "Di el número en pantalla y el siguiente cuando aparezca.", "Cada número oído en orden suma un punto.", "La cuenta termina en treinta, o al acabarse los 60 segundos."],
      ja: ["スタートを押すと最初の数字は「一」。", "画面の数を声に出し、次が出たら続けて言う。", "順番に聞き取れるごとに1点。", "三十に達するか60秒経つと終了。"]
    },
    note: {
      en: "Count uses Chrome’s speech service to turn your voice into text. This page does not store the recording. Open it in desktop Chrome.",
      zh: "数数使用 Chrome 的语音服务把语音转成文字，本页面不保存录音。请用电脑版 Chrome 打开。",
      es: "Count usa el servicio de voz de Chrome para convertir tu voz en texto. Esta página no guarda la grabación. Ábrelo en Chrome para escritorio.",
      ja: "Count は Chrome の音声サービスで声を文字に変えます。録音は保存しません。パソコン版 Chrome で開いてください。"
    },
    faq: [
      { q: { en: "What if I say a number out of order?", zh: "数错顺序会怎样？", es: "¿Qué pasa si digo un número fuera de orden?", ja: "順番を間違えたら？" },
        a: { en: "Nothing bad — the screen keeps asking for the same number until it hears the right one. Only correct order scores.", zh: "没关系——屏幕会一直停在当前数字，直到听到对的为止。只有按顺序数对才得分。", es: "Nada malo — la pantalla sigue pidiendo el mismo número hasta oír el correcto. Solo el orden correcto suma.", ja: "大丈夫——正しい数を聞き取るまで同じ数字が表示され続けます。順番どおりだけ加点です。" } },
      { q: { en: "Does “twenty-one” have to be exact?", zh: "必须说得一字不差吗？", es: "¿Hay que decir el número exacto?", ja: "正確に言わないとだめ？" },
        a: { en: "Close is fine. The game accepts common variants and digits — “twenty one”, “21”, regional readings — so natural counting just works.", zh: "接近就行。游戏接受常见说法和数字形式（如“21”），自然地数就可以。", es: "Casi vale. El juego acepta variantes habituales y dígitos — «veintiuno», «21» — así que cuenta con naturalidad.", ja: "近似でもOK。よくある言い方や数字も受け付けますので、自然に数えれば大丈夫。" } }
    ]
  },
  {
    slug: "repeat", game: "repeat", kind: "speech", mode: "speak",
    name: "Repeat",
    tagline: { en: "Say the Whole Line", zh: "完整复述", es: "Repite la frase", ja: "全文を復唱" },
    metaDesc: {
      en: "Repeat is a free voice game. A two-word line appears and you say both words. The next line shows up when the whole line lands. 60 seconds, desktop Chrome.",
      zh: "复述是一款免费的语音游戏：屏幕出现一行短语，完整说出来，下一行马上出现。限时 60 秒，需要电脑版 Chrome。",
      es: "Repeat es un juego de voz gratis. Aparece una frase de dos palabras y la dices entera. La siguiente surge al acertar. 60 segundos, Chrome para escritorio.",
      ja: "Repeat は無料のボイスゲーム。2語のフレーズが出るので全文を言うと次が出ます。60秒、パソコン版 Chrome。"
    },
    kicker: { en: "Say the whole line", zh: "完整说出来", es: "Di la frase entera", ja: "全文言おう" },
    attract: { en: "Repeat the line, every word", zh: "把整句复述出来，一个词都不能少", es: "Repite la frase, palabra por palabra", ja: "一語残らず復唱しよう" },
    heard: {
      en: "Say every word in the line.",
      zh: "把整行里的每个词都说出来。",
      es: "Di cada palabra de la frase.",
      ja: "フレーズの全単語を言おう。"
    },
    prompt: { en: "red apple", zh: "红苹果", es: "manzana roja", ja: "あかい りんご" },
    cardSmall: {
      en: "Say the whole line back", zh: "整句复述出来", es: "Repite la frase entera", ja: "全文を復唱する"
    },
    statLabel: { en: "correct", zh: "个正确", es: "correctas", ja: "問正解" },
    steps: {
      en: ["Press Start and allow the microphone.", "A short line of two words appears, such as “red apple”.", "Say both words. The score only moves when the whole line is heard.", "A new line appears each time. You have 60 seconds."],
      zh: ["点“开始”并允许麦克风。", "屏幕会出现一行两个词的短语，比如“红苹果”。", "把两个词都说出来，只有完整听到整句才得分。", "每答对一次换新的一行。限时 60 秒。"],
      es: ["Pulsa Empezar y permite el micrófono.", "Aparece una frase corta de dos palabras, como «manzana roja».", "Di las dos palabras. Solo puntúa la frase completa.", "Cada acierto trae una frase nueva. Tienes 60 segundos."],
      ja: ["スタートを押してマイクを許可。", "2語の短いフレーズが出ます、例：「あかい りんご」。", "両方の単語を言う。全部聞き取れた点だけ入ります。", "正解ごとに次のフレーズ。制限60秒。"]
    },
    note: {
      en: "Repeat uses Chrome’s speech service to turn your voice into text. This page does not store the recording. Open it in desktop Chrome.",
      zh: "复述使用 Chrome 的语音服务把语音转成文字，本页面不保存录音。请用电脑版 Chrome 打开。",
      es: "Repeat usa el servicio de voz de Chrome para convertir tu voz en texto. Esta página no guarda la grabación. Ábrelo en Chrome para escritorio.",
      ja: "Repeat は Chrome の音声サービスで声を文字に変えます。録音は保存しません。パソコン版 Chrome で開いてください。"
    },
    faq: [
      { q: { en: "Do word order and extra words matter?", zh: "词序错了或多说词有影响吗？", es: "¿Importan el orden o palabras de más?", ja: "語順や余分な言葉は影響する？" },
        a: { en: "All words of the line must be heard; extra words around them are ignored, so natural speech is fine. Wrong order does not score.", zh: "整行的每个词都要被听到，多说其他词没关系，自然表达就行；但顺序错了不得分。", es: "Deben oírse todas las palabras de la frase; las extrañas se ignoran, así que hablar natural vale. El orden incorrecto no puntúa.", ja: "フレーズの全単語さえ聞き取れれば周りの言葉は無視されます。自然な話し方でOK。順番が違うと入りません。" } },
      { q: { en: "Can kids play Repeat?", zh: "小孩可以玩复述吗？", es: "¿Pueden jugar los niños a Repeat?", ja: "子どもでも遊べる？" },
        a: { en: "It is a popular reading warm-up: short lines, no timer pressure per line, and the score is just words heard. Try it together.", zh: "它很适合当朗读热身：句子短、单行没有时间压力、只按听到的词计分。可以陪孩子一起玩。", es: "Es un buen calentamiento de lectura: frases cortas, sin presión de tiempo por frase y el marcador cuenta palabras oídas. Pruébalo en familia.", ja: "音読のウォームアップに人気です——短いフレーズ、1行ごとの制限なし、聞き取れた語だけカウント。親子でどうぞ。" } }
    ]
  },
  {
    slug: "voice-over", game: "over", kind: "speech", mode: "speak",
    name: "Voice over",
    tagline: { en: "Read the Line", zh: "朗读台词", es: "Lee la línea", ja: "ナレーションを読む" },
    metaDesc: {
      en: "Voice Over is a free 60-second voice game. A short narration line appears, read it out loud, and the next one appears. Desktop Chrome with a microphone.",
      zh: "配音是一款免费的 60 秒语音游戏：屏幕出现一句旁白，完整读出来，下一句马上出现。需要电脑版 Chrome 和麦克风。",
      es: "Voice Over es un juego de voz gratis de 60 segundos. Aparece una línea de narración, léela en voz alta y surge la siguiente. Chrome para escritorio.",
      ja: "Voice Over は60秒の無料ボイスゲーム。ナレーションの一文を読み上げると次の文が出ます。マイク付きパソコン版 Chrome。"
    },
    kicker: { en: "Read the line", zh: "读出这句话", es: "Lee la línea", ja: "文を読もう" },
    attract: { en: "Read the narration out loud", zh: "把旁白大声读出来", es: "Lee la narración en voz alta", ja: "ナレーションを声に出そう" },
    heard: {
      en: "A narration line appears. Read it.",
      zh: "屏幕会出现一句旁白，读出来。",
      es: "Aparece una línea de narración. Léela.",
      ja: "ナレーションの文が出たら読もう。"
    },
    prompt: { en: "the train is late", zh: "火车晚点了", es: "el tren llega tarde", ja: "電車が遅れた" },
    cardSmall: {
      en: "Read the narration line", zh: "朗读旁白台词", es: "Lee la narración", ja: "ナレーションを読む"
    },
    statLabel: { en: "correct", zh: "个正确", es: "correctas", ja: "問正解" },
    steps: {
      en: ["Press Start and allow the microphone.", "A short narration line fills the screen, like “the train is late”.", "Read every word. The score moves when the whole line lands.", "A new line appears each time. You have 60 seconds."],
      zh: ["点“开始”并允许麦克风。", "屏幕会出现一句短旁白，比如“火车晚点了”。", "把每个词都读出来，完整听到整句才得分。", "每答对一次换新的一句。限时 60 秒。"],
      es: ["Pulsa Empezar y permite el micrófono.", "Una línea corta llena la pantalla, como «el tren llega tarde».", "Lee cada palabra. Solo puntúa la línea completa.", "Cada acierto trae una línea nueva. Tienes 60 segundos."],
      ja: ["スタートを押してマイクを許可。", "短いナレーションが1文出ます、例：「電車が遅れた」。", "全単語を読む。全文聞き取れた分だけ得点。", "正解ごとに次の文。制限60秒。"]
    },
    note: {
      en: "The lines are written for this game. Voice Over uses Chrome’s speech service to turn your voice into text. This page does not store the recording. Open it in desktop Chrome.",
      zh: "台词均为本站原创。配音使用 Chrome 的语音服务把语音转成文字，本页面不保存录音。请用电脑版 Chrome 打开。",
      es: "Las líneas están escritas para este juego. Voice Over usa el servicio de voz de Chrome. Esta página no guarda la grabación. Ábrelo en Chrome para escritorio.",
      ja: "文はこのゲームのために書き下ろしたものです。Voice Over は Chrome の音声サービスを利用し、録音は保存しません。パソコン版 Chrome で。"
    },
    faq: [
      { q: { en: "Is Voice Over good for reading practice?", zh: "配音适合练朗读吗？", es: "¿Sirve Voice Over para practicar lectura?", ja: "音読練習に使える？" },
        a: { en: "That is the idea. Lines are short and natural, and the game only hears whether the words landed — so it doubles as a read-aloud drill.", zh: "这正是设计初衷。句子短而自然，游戏只检测词有没有读到位——所以也能当朗读练习工具。", es: "Esa es la idea. Líneas cortas y naturales, y el juego solo oye si las palabras cayeron — vale como ejercicio de lectura en voz alta.", ja: "まさにその目的です。短く自然な文で、聞き取れたかどうかだけを見るので音読ドリルにもなります。" } },
      { q: { en: "How is this different from the Voice over game page?", zh: "这和“配音游戏（Voice over game）”页面有什么区别？", es: "¿En qué se diferencia de la página Voice Over Game?", ja: "「Voice Over Game」ページとは何が違う？" },
        a: { en: "This one is our own 60-second word game that runs here. The other page embeds an external studio, Choicer Voicer, for full dubbing projects.", zh: "本页是我们自研的 60 秒读词游戏，直接在这页玩；“配音游戏”页嵌入的是外部工具 Choicer Voicer，适合完整的配音项目。", es: "Esta es nuestro propio juego de palabras de 60 segundos que corre aquí. La otra página incrusta un estudio externo, Choicer Voicer, para doblajes completos.", ja: "こちらはこのサイト独自の60秒ゲーム。もう一方のページは外部スタジオ「Choicer Voicer」を埋め込んだ本格ダビング用です。" } }
    ]
  },
  {
    slug: "voice-acting", game: "act", kind: "speech", mode: "speak",
    name: "Voice acting",
    tagline: { en: "Say It in a Mood", zh: "带着情绪说", es: "Dilo con humor", ja: "感情を込めて言う" },
    metaDesc: {
      en: "Voice Acting is a free 60-second game. A mood appears above an original line — say the line and play the mood. Desktop Chrome with a microphone.",
      zh: "演台词是一款免费的 60 秒语音游戏：一句原创台词上方会出现情绪标签——把台词说出来，顺便把情绪演出来。需要电脑版 Chrome。",
      es: "Voice Acting es un juego gratis de 60 segundos. Un humor aparece sobre una línea original — dila y représentalo. Chrome para escritorio.",
      ja: "Voice Acting は60秒の無料ゲーム。オリジナル台詞の上に感情タグが出るので、台詞を言いながら感情を演じましょう。パソコン版 Chrome。"
    },
    kicker: { en: "In this mood", zh: "用这个情绪", es: "Con este humor", ja: "この感情で" },
    attract: { en: "Say the line in the mood", zh: "按情绪把台词说出来", es: "Di la línea con ese humor", ja: "感情を込めて台詞を言おう" },
    heard: {
      en: "Say the line. The mood is above it.",
      zh: "把台词说出来，情绪标在上方。",
      es: "Di la línea. El humor está encima.",
      ja: "台詞を言おう。感情は上に表示。"
    },
    prompt: { en: "put that down", zh: "把它放下", es: "dejalo ahora", ja: "それを置いて" },
    cardSmall: {
      en: "Say the line in the mood", zh: "带情绪演绎台词", es: "Dilo con ese humor", ja: "感情を込めて台詞を"
    },
    statLabel: { en: "correct", zh: "个正确", es: "correctas", ja: "問正解" },
    steps: {
      en: ["Press Start and allow the microphone.", "A mood appears above an original line, like whisper or angry.", "Say the line — and play the mood while you do.", "The score counts the words. The mood is yours to act. You have 60 seconds."],
      zh: ["点“开始”并允许麦克风。", "一句原创台词上方会出现情绪标签，比如“低语”“生气”。", "把台词说出来——顺便把情绪演出来。", "分数只统计词有没有说对，情绪演得怎么样由你自己发挥。限时 60 秒。"],
      es: ["Pulsa Empezar y permite el micrófono.", "Un humor aparece sobre una línea original, como susurro o enfadado.", "Di la línea — y representa el humor al hacerlo.", "El marcador cuenta palabras. El humor es tuyo. Tienes 60 segundos."],
      ja: ["スタートを押してマイクを許可。", "オリジナル台詞の上に感情が出ます、例：ひそひそ・おこる。", "台詞を言いながら感情を演じる。", "スコアは言葉のみ判定。感情の演技はあなたの自由。制限60秒。"]
    },
    note: {
      en: "This page cannot hear whether you sounded angry or quiet, so it does not score the performance — it only checks the words. The lines are written for this game. Voice Acting uses Chrome’s speech service to turn your voice into text, and the page does not store the recording.",
      zh: "本页面听不出你演得像不像，所以不会给“演技”打分——只检测词有没有说对。台词均为本站原创。演台词使用 Chrome 的语音服务转文字，不保存录音。",
      es: "Esta página no oye si sonaste enfadado o tranquilo, así que no puntúa la interpretación — solo comprueba las palabras. Las líneas están escritas para este juego. Voice Acting usa el servicio de voz de Chrome y no guarda la grabación.",
      ja: "このページは演技の巧拙を判定しないため、採点は言葉のみです。台詞は書き下ろし。Voice Acting は Chrome の音声サービスを使い、録音は保存しません。"
    },
    faq: [
      { q: { en: "Does acting the mood change my score?", zh: "演情绪会影响得分吗？", es: "¿Actuar el humor cambia mi puntuación?", ja: "演技はスコアに影響する？" },
        a: { en: "No — the score only checks that the words landed. The mood is there to make it fun and to practice range.", zh: "不会——得分只看词有没有说对。情绪标签是为了好玩和练习声音表现力。", es: "No — el marcador solo comprueba las palabras. El humor está para divertirse y practicar el registro.", ja: "いいえ——スコアは言葉だけの判定。感情タグは楽しさと表現の練習のためです。" } },
      { q: { en: "Can I use Voice acting for auditions or demos?", zh: "演台词可以用来练习试音或做 demo 吗？", es: "¿Sirve para pruebas o demos de voz?", ja: "オーディションやデモの練習になる？" },
        a: { en: "It is a handy warm-up for exactly that: random moods, short lines, one minute on the clock. For real recordings use a proper studio — this page keeps no audio.", zh: "作为试音前的热身非常合适：随机情绪、短句、限时 1 分钟。但正式录音请用专业工具——本页不保存任何音频。", es: "Como calentamiento antes de una prueba es perfecto: humores al azar, líneas cortas, un minuto en el reloj. Para grabaciones serias usa un estudio — esta página no guarda audio.", ja: "本番前のウォームアップに最適：ランダムな感情・短い台詞・1分の制限。本録りはちゃんとしたスタジオで——このページは音声を保存しません。" } }
    ]
  }
]

export const embedGame = {
  slug: "voice-over-game", kind: "embed", mode: "extra",
  name: "Voice Over Game",
  tagline: { en: "Play Choicer Voicer", zh: "玩 Choicer Voicer", es: "Juega Choicer Voicer", ja: "Choicer Voicer を遊ぶ" },
  cardSmall: {
    en: "Full studio, by Choicer Voicer",
    zh: "完整配音棚，来自 Choicer Voicer",
    es: "Estudio completo, por Choicer Voicer",
    ja: "本格スタジオ、Choicer Voicer 提供"
  },
  metaDesc: {
    en: "Voice Over Game embeds Choicer Voicer. Hear a line, record your take, and watch the scene. How to play is on this page. Play opens their studio.",
    zh: "配音游戏页内嵌 Choicer Voicer：听一句台词、录下你的版本、看它生成一幕场景。玩法见本页说明。",
    es: "Voice Over Game incrusta Choicer Voicer. Oye una línea, graba tu toma y mira la escena. Cómo jugar en esta página.",
    ja: "Voice Over Game は Choicer Voicer を埋め込みました。台詞を聞いて自分のテイクを録り、シーンを見届けよう。遊び方はこのページに。"
  },
  intro: {
    en: "A voice over game is a scene you perform out loud. Choicer Voicer plays a line, you record your own take, and it builds a scene you can watch. Their studio is embedded here. The button opens their page, which is where the game runs.",
    zh: "配音游戏就是用你的声音演一场戏：Choicer Voicer 播放一句台词，你录下自己的版本，它会自动生成一幕可观看的场景。这里内嵌了他们的工作室，点按钮会打开他们的页面开始游戏。",
    es: "Un juego de doblaje es una escena que interpretas en voz alta. Choicer Voicer suena una línea, tú grabas tu toma y él monta una escena que puedes ver. Su estudio está incrustado aquí. El botón abre su página, donde corre el juego.",
    ja: "ボイスゲームとは声で演じるシーンのこと。Choicer Voicer が台詞を流し、あなたのテイクを録り、見られるシーンを作ります。スタジオをここに埋め込んでいます。ボタンで彼らのページが開き、そこでゲームが動きます。"
  },
  what: {
    en: "Choicer Voicer is a browser studio made by someone else. You take the lines in a voice pack and say them yourself. Voicegames does not host the packs, the microphone session, or the finished scene. This page introduces the game and sends you to their studio to play.",
    zh: "Choicer Voicer 是别人开发的浏览器内录音棚。你按语音包逐句配音，全部由你自己完成。Voicegames 不托管语音包、不参与麦克风会话、也不保存成品场景。本页只做游戏介绍，实际游玩在他们的工作室进行。",
    es: "Choicer Voicer es un estudio de navegador hecho por otra persona. Tomas las líneas de un paquete de voz y las dices tú. Voicegames no aloja los paquetes, la sesión de micrófono ni la escena final. Esta página presenta el juego y te manda a su estudio.",
    ja: "Choicer Voicer は他の方が作ったブラウザ型スタジオです。ボイスパックの台詞をあなたが声にする仕組みで、Voicegames はパックもマイクセッションも完成シーンもホストしません。このページは紹介で、プレイは彼らのスタジオで行います。"
  },
  faq: [
    { q: { en: "Where do I play the voice over game?", zh: "配音游戏在哪里玩？", es: "¿Dónde se juega al juego de doblaje?", ja: "ボイスゲームはどこで遊ぶ？" },
      a: { en: "On Choicer Voicer. The studio is embedded above. Play on Choicer Voicer leaves this site and opens their page.", zh: "在 Choicer Voicer 上玩。上方已内嵌其工作室；点“去 Choicer Voicer 玩”会离开本站并打开他们的页面。", es: "En Choicer Voicer. El estudio está incrustado arriba. El botón sale de este sitio y abre su página.", ja: "Choicer Voicer のサイトで。スタジオを上に埋め込んでいます。「Choicer Voicer で遊ぶ」でこのサイトを離れて開きます。" } },
    { q: { en: "How do I play Choicer Voicer?", zh: "怎么玩 Choicer Voicer？", es: "¿Cómo se juega a Choicer Voicer?", ja: "Choicer Voicer の遊び方は？" },
      a: { en: "Open their studio, allow the microphone, pick a voice pack, listen to the line, record your take, and watch the scene they assemble.", zh: "打开他们的工作室，允许麦克风，选一个语音包，听台词、录下你的版本，然后看它生成的场景。", es: "Abre su estudio, permite el micrófono, elige un paquete de voz, escucha la línea, graba tu toma y mira la escena.", ja: "スタジオを開き、マイクを許可、ボイスパックを選び、台詞を聞いてテイクを録り、できたシーンを見ます。" } }
  ]
}
