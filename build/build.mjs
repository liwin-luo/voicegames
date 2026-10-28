// Static site generator for voicegames.org — 4 locales (en root, zh, es, ja).
// Edit the data files in build/, then run: node build/build.mjs
// Output is plain static HTML checked into the repo; Vercel serves it unchanged.
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { locales, ui } from "./ui.mjs"
import { words } from "./words.mjs"
import { volumeGames } from "./games-volume.mjs"
import { speechGames, embedGame } from "./games-speech.mjs"
import { uiMore } from "./ui-more.mjs"
import { wordsMore } from "./words-more.mjs"
import { gamesMore1 } from "./games-more-1.mjs"
import { gamesMore2 } from "./games-more-2.mjs"
import { buildOgImages } from "./og.mjs"

Object.assign(ui, uiMore)
Object.assign(words, wordsMore)

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const SITE = "https://voicegames.org"
const L = Object.fromEntries(locales.map(l => [l.code, l]))
const GAMES = [...volumeGames, ...speechGames]
const byslug = Object.fromEntries(GAMES.map(g => [g.slug, g]))
// 3D pages share the stat label of their flat twin
for (const g of GAMES) {
  if (!g.statLabel && g.slug.startsWith("3d/") && byslug[g.game] && byslug[g.game].statLabel) {
    g.statLabel = byslug[g.game].statLabel
  }
}

// merge the six overlay locales (pt/fr/de/it/ko/ru) onto the game objects
for (const o of [gamesMore1, gamesMore2]) {
  for (const code of Object.keys(o)) {
    for (const [slug, fields] of Object.entries(o[code])) {
      const g = byslug[slug] || (slug === embedGame.slug ? embedGame : null)
      if (!g) continue
      for (const [key, val] of Object.entries(fields)) {
        if (key === "faq") {
          val.forEach((item, i) => { if (g.faq[i]) { g.faq[i].q[code] = item.q; g.faq[i].a[code] = item.a } })
        } else {
          if (!g[key]) g[key] = {}
          g[key][code] = val
        }
      }
    }
  }
}

const faqTitleFor = (code, name) => ({
  en: `Questions about ${name}`,
  zh: `${name} 常见问题`,
  es: `Preguntas sobre ${name}`,
  ja: `${name} のよくある質問`,
  pt: `Perguntas sobre ${name}`,
  fr: `Questions sur ${name}`,
  de: `Fragen zu ${name}`,
  it: `Domande su ${name}`,
  ko: `${name} 자주 묻는 질문`,
  ru: `Вопросы о ${name}`
}[code])

const keywordsFor = (code, name, tagline) => ({
  en: `voice game, microphone game, browser game, ${name.toLowerCase()}, ${tagline.toLowerCase()}`,
  zh: `声音游戏,语音游戏,麦克风游戏,网页游戏,${name},${tagline}`,
  es: `juego de voz, juego de micrófono, juego de navegador, ${name}, ${tagline}`,
  ja: `音声ゲーム,マイクゲーム,ブラウザゲーム,声ゲーム,${name},${tagline}`,
  pt: `jogo de voz, jogo de microfone, jogo de navegador, ${name}, ${tagline}`,
  fr: `jeu de voix, jeu au micro, jeu de navigateur, ${name}, ${tagline}`,
  de: `Sprachspiel, Mikrofonspiel, Browserspiel, ${name}, ${tagline}`,
  it: `gioco di voce, gioco con microfono, gioco da browser, ${name}, ${tagline}`,
  ko: `음성 게임, 마이크 게임, 브라우저 게임, ${name}, ${tagline}`,
  ru: `игра голосом, игра с микрофоном, браузерная игра, ${name}, ${tagline}`
}[code])

const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
const jsonld = o => JSON.stringify(o).replace(/</g, "\\u003c")

function urlFor(code, slug) {
  const dir = L[code].dir
  if (!slug) return dir ? `${SITE}/${dir}` : `${SITE}/`
  return SITE + "/" + (dir ? dir + "/" : "") + slug
}
function pathFor(code, slug) {
  const dir = L[code].dir
  if (!slug) return dir ? `/${dir}` : `/`
  return "/" + (dir ? dir + "/" : "") + slug
}
function hreflangLinks(slug) {
  const links = locales.map(l =>
    `<link rel="alternate" hreflang="${l.htmlLang}" href="${urlFor(l.code, slug)}">`)
  links.push(`<link rel="alternate" hreflang="x-default" href="${urlFor("en", slug)}">`)
  return links.join("\n")
}
function langSwitcher(code, slug) {
  const items = locales.map(l => {
    const cur = l.code === code
    return `<a href="${pathFor(l.code, slug)}" hreflang="${l.htmlLang}"${cur ? ' aria-current="true"' : ""}>${l.long}</a>`
  })
  const current = locales.find(l => l.code === code)
  return `<details class="lang">
  <summary aria-label="Language">${current.label}</summary>
  <div class="lang-menu">${items.join("")}</div>
</details>`
}
function topBar(code, slug, { brand = false, lamp = true } = {}) {
  const left = brand
    ? `<a class="brand" href="${pathFor(code, "")}">Voicegames</a>`
    : `<a class="back" href="${pathFor(code, "")}">${ui[code].allGames}</a>`
  const right = []
  if (lamp) right.push(`<div class="lamp"><i></i> <span id="lamp">${ui[code].offAir}</span></div>`)
  right.push(langSwitcher(code, slug))
  return `<div class="top">
    ${left}
    <div class="top-right">${right.join("\n")}</div>
  </div>`
}
function head({ code, slug, title, desc, keywords, jsonldBlocks = [], lampColor = "#1a1410", og = null }) {
  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="keywords" content="${esc(keywords)}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${urlFor(code, slug)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:type" content="website">
<meta property="og:locale" content="${L[code].og}">
<meta property="og:url" content="${urlFor(code, slug)}">
<meta property="og:site_name" content="Voicegames">
<meta name="twitter:card" content="${og ? "summary_large_image" : "summary"}">
${og ? `<meta property="og:image" content="${og}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">` : ""}
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="theme-color" content="${lampColor}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@500;600&family=Silkscreen:wght@400;700&family=VT323&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/site.css?v=12">
${hreflangLinks(slug)}
${jsonldBlocks.length ? `<script type="application/ld+json">\n${jsonld(jsonldBlocks.length === 1 ? jsonldBlocks[0] : { "@context": "https://schema.org", "@graph": jsonldBlocks })}\n</script>` : ""}`
}
const FAQ_SCHEMA_CONTEXT = "https://schema.org"

function faqBlocks(code, game) {
  const u = ui[code]
  const name = game.name
  const shared = u.faqShared.map(item => ({
    q: item.q.replace("{name}", name),
    a: item.a.replace("{name}", name).replace("{browser}", game.kind === "speech" ? u.browserSpeech : u.browserVolume)
  }))
  return [...shared, ...game.faq.map(f => ({ q: f.q[code], a: f.a[code] }))]
}
function faqHtml(code, game) {
  const items = faqBlocks(code, game)
  return `<section class="faq">
  <h2>${esc(faqTitleFor(code, game.name))}</h2>
${items.map(i => `  <h3>${esc(i.q)}</h3>\n  <p>${esc(i.a)}</p>`).join("\n")}
</section>`
}
function moreNav(code, game, relatedSlugs) {
  const u = ui[code]
  const items = relatedSlugs.map(s => {
    const g = byslug[s]
    const small = (g.cardSmall || g.featureSmall)[code]
    return `    <li><a href="${pathFor(code, g.slug)}">${esc(g.name)}</a> — ${esc(small)}</li>`
  })
  return `<nav class="more" aria-label="${esc(u.otherGames)}">
  <h2>${esc(u.otherGames)}</h2>
  <ul>
${items.join("\n")}
  </ul>
</nav>`
}
const FOOTER = code => `<footer class="site-foot">
  <p>${esc(ui[code].footerLine)}</p>
  <p><a href="${pathFor(code, "privacy")}">${esc(ui[code].privacy)}</a> · <a href="mailto:svay9298@agent.qq.com">svay9298@agent.qq.com</a></p>
  <p>© 2026 Voicegames</p>
</footer>`

const RELATED = {
  "3d/dino": ["3d/flap", "3d/float", "dino"],
  "3d/flap": ["3d/dino", "3d/float", "flap"],
  "3d/float": ["3d/dino", "3d/flap", "float"],
  dino: ["flap", "float", "3d/dino"],
  flap: ["dino", "float", "3d/flap"],
  float: ["dino", "flap", "3d/float"],
  "3d/miner": ["miner", "floors", "3d/floors"],
  "3d/floors": ["floors", "miner", "3d/miner"],
  miner: ["floors", "3d/miner", "louder"],
  floors: ["miner", "3d/floors", "float"],
  catch: ["racer", "bricks", "floors"],
  racer: ["catch", "snake", "floors"],
  bricks: ["catch", "racer", "miner"],
  snake: ["racer", "bricks", "catch"],
  march: ["tug", "puff", "dino"],
  tug: ["march", "puff", "louder"],
  puff: ["march", "hop", "float"],
  hop: ["puff", "tug", "floors"],
  louder: ["dino", "flap", "float"],
  say: ["count", "repeat", "louder"],
  count: ["say", "repeat", "louder"],
  repeat: ["say", "count", "voice-over"],
  "voice-over": ["repeat", "voice-acting", "say"],
  "voice-acting": ["voice-over", "repeat", "say"]
}

function gamePage(code, g) {
  const u = ui[code]
  const tagline = g.tagline[code]
  const title = `${g.name} — ${tagline} | Voicegames`
  const keywords = keywordsFor(code, g.name, tagline)
  const vg = {
    "@context": FAQ_SCHEMA_CONTEXT, "@type": "VideoGame", name: g.name,
    url: urlFor(code, g.slug), description: g.metaDesc[code],
    playMode: "SinglePlayer", applicationCategory: "Game", operatingSystem: "Web",
    inLanguage: L[code].htmlLang,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    isPartOf: { "@type": "WebSite", name: "Voicegames", url: SITE + "/" }
  }
  const faqSchema = {
    "@context": FAQ_SCHEMA_CONTEXT, "@type": "FAQPage",
    mainEntity: faqBlocks(code, g).map(i => ({
      "@type": "Question", name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a }
    }))
  }
  const meters = `      <div class="meters">
        <div class="stat"><b id="score">0</b><span>${esc((g.statLabel && g.statLabel[code]) ? g.statLabel[code] : (g.kind === "speech" ? u.correct : u.passed))}</span></div>
        <div class="clock" aria-hidden="true">
          <svg viewBox="0 0 36 36"><circle class="track" cx="18" cy="18" r="15.5"></circle><circle class="value" id="ring" cx="18" cy="18" r="15.5" stroke-dasharray="97.4" stroke-dashoffset="0"></circle></svg>
          <b id="time">${g.kind === "speech" ? 60 : 30}</b>
        </div>
      </div>`
  const stage = g.kind === "speech" || g.kind === "louder"
    ? `  <div class="stage play">
    <p class="kicker" id="kicker">${esc(g.kicker[code])}</p>
    <div class="screen speak">
      <h1 id="title"><span class="attract">${esc(g.attract[code])}</span>${esc(g.name)}</h1>
      <p class="word" id="word" data-prompt="${esc(g.kind === "louder" ? u.louderPrompt : g.prompt[code])}" hidden></p>
${meters}
      <div class="actions"><button id="go" type="button">${esc(u.start)}</button></div>
      <p class="heard" id="heard">${esc(g.heard[code])}</p>
    </div>
  </div>`
    : `  <div class="stage play">
    <div class="game-head">
      <p class="kicker" id="kicker">${esc(g.kicker[code])}</p>
      <h1>${esc(g.name)}</h1>
    </div>
    <div class="screen">
      <canvas id="world" class="world" width="${g.kind === "vox" ? 800 : 800}" height="${g.kind === "vox" ? 480 : 360}" aria-label="${esc(g.name)}"></canvas>
${meters}
      <div class="actions"><button id="go" type="button">${esc(u.start)}</button></div>
      <p class="heard" id="heard">${esc(g.heard[code])}</p>
    </div>
  </div>`
  const scripts = g.kind === "vox"
    ? `<script src="/js/words-${code}.js?v=1"></script>
<script src="/js/vox.js?v=3"></script>
<script src="/js/world.js?v=7"></script>
<script src="/js/share.js?v=1"></script>
<script src="/js/hud.js?v=3"></script>`
    : g.kind === "flat"
      ? `<script src="/js/words-${code}.js?v=1"></script>
<script src="/js/world.js?v=7"></script>${g.hook ? `\n<script src="/js/game-${g.hook}.js?v=1"></script>` : ""}
<script src="/js/share.js?v=1"></script>
<script src="/js/hud.js?v=3"></script>`
      : `<script src="/js/words-${code}.js?v=1"></script>
<script src="/js/play.js?v=3"></script>
<script src="/js/share.js?v=1"></script>
<script src="/js/hud.js?v=3"></script>`
  const bodyAttrs = g.kind === "vox" ? ` data-game="${g.game}" data-look="vox"` : ` data-game="${g.game}"`
  return `<!DOCTYPE html>
<html lang="${L[code].htmlLang}">
<head>
${head({ code, slug: g.slug, title, desc: g.metaDesc[code], keywords, jsonldBlocks: [vg, faqSchema], og: SITE + "/og/" + g.slug.replace(/\//g, "-") + ".png" })}
</head>
<body${bodyAttrs}>
<div class="grain" aria-hidden="true"></div>
<section class="booth">
  ${topBar(code, g.slug)}
${stage}
</section>
<article>
  <h2>${esc(u.howTo)} ${esc(g.name)}</h2>
  <ol>
${g.steps[code].map(s => `    <li>${esc(s)}</li>`).join("\n")}
  </ol>
  <p>${esc(g.note[code])}</p>
</article>
${faqHtml(code, g)}
${moreNav(code, g, RELATED[g.slug])}
${FOOTER(code)}
${scripts}
</body>
</html>
`
}

function miniCard(code, g, extraClass = "") {
  const u = ui[code]
  const small = (g.cardSmall || g.featureSmall)[code]
  const modeLabel = u.modes[g.mode]
  let scene = ""
  if (g.kind === "vox" || g.kind === "flat") {
    scene = `<span class="mini-scene scene-${g.game}${extraClass}" aria-hidden="true"><i class="sprite"></i></span>`
  } else if (g.slug === "say") {
    scene = `<span class="mini-scene scene-speak" aria-hidden="true"><span class="glyph">${esc({ en: "WORD!", zh: "单词！", es: "¡DILA!", ja: "ことば！" }[code])}</span></span>`
  } else if (g.slug === "count") {
    scene = `<span class="mini-scene scene-time" aria-hidden="true"><span class="glyph">1 2 3</span></span>`
  } else if (g.slug === "repeat") {
    scene = `<span class="mini-scene scene-speak" aria-hidden="true"><span class="glyph">${esc({ en: "AGAIN", zh: "复述", es: "OTRA", ja: "リピート" }[code])}</span></span>`
  } else if (g.slug === "voice-over") {
    scene = `<span class="mini-scene scene-mic" aria-hidden="true"><span class="glyph">${esc({ en: "MIC", zh: "配音", es: "MICRO", ja: "ナレーション" }[code])}</span></span>`
  } else if (g.slug === "voice-acting") {
    scene = `<span class="mini-scene scene-time" aria-hidden="true"><span class="glyph">${esc({ en: "MOOD!", zh: "演技！", es: "¡ACTÚA!", ja: "お演技を！" }[code])}</span></span>`
  } else if (g.slug === "louder") {
    scene = `<span class="mini-scene scene-mic" aria-hidden="true"><span class="glyph">${esc({ en: "LOUD!", zh: "大声！", es: "¡FUERTE!", ja: "おおきい声！" }[code])}</span></span>`
  } else if (g.slug === "voice-over-game") {
    scene = `<span class="mini-scene scene-mic" aria-hidden="true"><span class="glyph">${esc({ en: "STUDIO", zh: "录音棚", es: "ESTUDIO", ja: "スタジオ" }[code])}</span></span>`
  }
  return `      <a href="${pathFor(code, g.slug)}">
${scene}
        <strong>${esc(g.name)}</strong>
        <small>${esc(small)}</small>
        <span class="mode ${g.mode}">${esc(modeLabel)}</span>
      </a>`
}

function homePage(code) {
  const u = ui[code]
  const title = code === "en"
    ? "Voice Games Online — Play Out Loud | Voicegames"
    : `${u.homeTitle} | Voicegames`
  const desc = u.heroLede
  const siteSchema = {
    "@context": FAQ_SCHEMA_CONTEXT, "@type": "WebSite", name: "Voicegames",
    url: urlFor(code, ""), inLanguage: L[code].htmlLang, description: u.heroLede
  }
  const itemList = {
    "@context": FAQ_SCHEMA_CONTEXT, "@type": "ItemList", name: u.articleTitle,
    itemListElement: GAMES.map((g, i) => ({
      "@type": "ListItem", position: i + 1, name: g.name, url: urlFor(code, g.slug)
    }))
  }
  const demo = `    <div class="screen hero-demo">
      <div class="eq idle" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
      <div class="actions"><button id="demo-go" type="button">${esc(u.demoBtn)}</button></div>
      <p class="demo-copy" id="demo-copy"></p>
    </div>`
  const big3 = ["3d/dino", "3d/flap", "3d/float", "3d/miner", "3d/floors"].map((s, i) => {
    const g = byslug[s]
    return `      <a class="play-tile${i === 0 ? " feature" : ""}" href="${pathFor(code, g.slug)}">
        <span class="diorama ${g.game}" aria-hidden="true"><i class="sprite"></i>${g.game === "dino" ? '<i class="sprite cactus"></i>' : ""}</span>
        <span class="tag">0${i + 1}</span>
        <strong>${esc(g.name)}</strong>
        <small>${esc(g.featureSmall[code])}</small>
      </a>`
  })
  const rowSpeak = ["say", "count", "repeat", "voice-over", "voice-acting"].map(s => miniCard(code, byslug[s])).join("\n")
  const rowVolume = ["louder", "dino", "flap", "float", "miner", "floors"].map(s => miniCard(code, byslug[s])).join("\n")
  const rowPitch = ["catch", "racer", "bricks", "snake"].map(s => byslug[s]).filter(Boolean).map(g => miniCard(code, g)).join("\n")
  const rowBeat = ["march", "tug", "puff", "hop"].map(s => byslug[s]).filter(Boolean).map(g => miniCard(code, g)).join("\n")
  const rowMore = miniCard(code, embedGame)
  const article = `    <h2>${esc(u.articleTitle)}</h2>
    <p>${esc(u.gameIntro)}</p>
${GAMES.map(g => `    <p><a href="${pathFor(code, g.slug)}">${esc(g.name)}</a> ${esc(g.metaDesc[code])}</p>`).join("\n")}
    <h2>${esc(u.micTitle)}</h2>
    <p>${esc(u.micArticle.replace("{privacy}", u.privacy))}</p>`
  const demoStrings = jsonld({
    idle: u.demoIdle, quiet: u.demoQuiet, good: u.demoGood, loud: u.demoLoud,
    noMic: u.demoNoMic, blocked: u.demoBlocked, start: u.demoBtn, stop: u.stop,
    offAir: u.offAir, onAir: u.onAir
  })
  return `<!DOCTYPE html>
<html lang="${L[code].htmlLang}">
<head>
${head({ code, slug: "", title, desc, keywords: keywordsFor(code, "voice games", u.tagline), jsonldBlocks: [siteSchema, itemList], og: SITE + "/og/site.png" })}
<script type="application/ld+json">${demoStrings}</script>
</head>
<body>
<div class="grain" aria-hidden="true"></div>
<section class="booth">
  ${topBar(code, "", { brand: true })}
  <div class="stage">
    <p class="kicker">${esc(u.tagline)}</p>
    <h1>${esc(u.heroTitle)}</h1>
    <p class="lede">${esc(u.heroLede)}</p>
${demo}
  </div>
</section>
<section class="shelf" aria-label="${esc(u.articleTitle)}">
  <div class="stage">
    <h2>${esc(u.sectionArcade)}</h2>
    <nav class="arcade" aria-label="Voicegames 3D">
${big3.join("\n")}
    </nav>
    <h2>${esc(u.sectionSpeak)}</h2>
    <div class="shelf-row">
${rowSpeak}
    </div>
    <h2>${esc(u.sectionVolume)}</h2>
    <div class="shelf-row">
${rowVolume}
    </div>
${rowPitch ? `    <h2>${esc(u.sectionPitch)}</h2>
    <div class="shelf-row">
${rowPitch}
    </div>` : ""}
${rowBeat ? `    <h2>${esc(u.sectionBeat)}</h2>
    <div class="shelf-row">
${rowBeat}
    </div>` : ""}
    <h2>${esc(u.sectionMore)}</h2>
    <div class="shelf-row">
${rowMore}
    </div>
  </div>
</section>
<article>
${article}
</article>
${FOOTER(code)}
<script>window.VG_DEMO_STRINGS = ${demoStrings};</script>
<script src="/js/demo.js?v=2"></script>
</body>
</html>
`
}

function privacyPage(code) {
  const u = ui[code]
  const c = {
    en: {
      title: "Privacy", h1: "Privacy",
      intro: "Voicegames is an independent browser game site at voicegames.org. There is no account.",
      micH: "Microphone",
      mic1: "The microphone stays off until you press Start. Press Stop, or let the round end, and the page releases it.",
      mic2: "Say it, Count, Repeat, Voice over, and Voice acting use the speech recognition built into desktop Chrome. That sends audio to Chrome’s speech service so the page can read the words. Voicegames does not receive that audio, does not keep a transcript, and does not sell it. The words are used only to score the round on your screen. On Voice acting, the mood is shown for you to play in. The score uses the line, not the mood.",
      mic3: "Every non-speaking game measures volume in the page. The audio stays on your device. It is not sent to a speech service, and no recording is saved.",
      storeH: "What this site stores",
      store: "Voicegames does not set cookies and does not run analytics. The score and the clock live in the page until you leave or play again. Type is loaded from Google Fonts.",
      contactH: "Contact",
      updated: "Updated 28 October 2026."
    },
    zh: {
      title: "隐私政策", h1: "隐私政策",
      intro: "Voicegames 是一个独立的浏览器游戏网站（voicegames.org），无需注册账号。",
      micH: "麦克风",
      mic1: "只有在你按下“开始”后麦克风才会启动。按下“停止”或本局结束后，页面会立即释放麦克风。",
      mic2: "说单词、数数、复述、配音、演台词使用电脑版 Chrome 内置的语音识别，音频会发送到 Chrome 的语音服务以便页面读取文字。Voicegames 不会收到该音频，不保存转写文本，也不会出售。文字只用于在屏幕上为本局计分。在“演台词”中，情绪标签仅供你表演参考，计分只依据台词文字。",
      mic3: "除说话类游戏外，全部游戏只在页面内测量音量。音频不离开你的设备，不发送给任何语音服务，也不保存任何录音。",
      storeH: "本站存储什么",
      store: "Voicegames 不设置 Cookie，也不运行统计工具。分数和倒计时只存在于页面中，离开页面或重新开始即消失。字体来自 Google Fonts。",
      contactH: "联系方式",
      updated: "更新于 2026 年 10 月 28 日。"
    },
    es: {
      title: "Privacidad", h1: "Privacidad",
      intro: "Voicegames es un sitio independiente de juegos de navegador en voicegames.org. No hay cuenta.",
      micH: "Micrófono",
      mic1: "El micrófono sigue apagado hasta que pulsas Empezar. Pulsa Parar, o deja que acabe la ronda, y la página lo libera.",
      mic2: "Say it, Count, Repeat, Voice over y Voice acting usan el reconocimiento de voz integrado en Chrome para escritorio. Eso envía el audio al servicio de voz de Chrome para que la página lea las palabras. Voicegames no recibe ese audio, no guarda transcripción y no lo vende. Las palabras solo se usan para puntuar la ronda en tu pantalla. En Voice acting, el humor se muestra para que lo interpretes. La puntuación usa la línea, no el humor.",
      mic3: "Todos los demás juegos miden el volumen dentro de la página. El audio se queda en tu dispositivo. No se envía a ningún servicio de voz y no se guarda grabación.",
      storeH: "Qué guarda este sitio",
      store: "Voicegames no usa cookies ni analíticas. La puntuación y el reloj viven en la página hasta que te vas o juegas otra vez. La tipografía se carga de Google Fonts.",
      contactH: "Contacto",
      updated: "Actualizado el 28 de octubre de 2026."
    },
    ja: {
      title: "プライバシー", h1: "プライバシー",
      intro: "Voicegames は voicegames.org の独立系ブラウザゲームサイトです。アカウント登録はありません。",
      micH: "マイクについて",
      mic1: "マイクはスタートを押すまでオフのままです。ストップを押すかラウンドが終わると、ページはすぐマイクを解放します。",
      mic2: "Say it・Count・Repeat・Voice over・Voice acting はパソコン版 Chrome 内蔵の音声認識を使います。音声はページが言葉を読み取れるよう Chrome の音声サービスへ送られますが、Voicegames はその音声を受け取らず、文字を保存せず、販売もしません。言葉は画面上のスコア計算だけに使われます。Voice acting の感情タグは演技のために表示されるもので、スコアは台詞の言葉のみで判定します。",
      mic3: "発話系以外のゲームはページ内で音量を測ります。音声は端末から出ず、音声サービスへ送信されず、録音も保存されません。",
      storeH: "このサイトが保存するもの",
      store: "Voicegames は Cookie を設定せず、アナリティクスも動かしません。スコアとタイマーはページの中だけに存在し、離脱 or 再プレイで消えます。フォントは Google Fonts から読み込みます。",
      contactH: "お問い合わせ",
      updated: "2026年10月28日 更新。"
    },
    pt: {
      title: "Privacidade", h1: "Privacidade",
      intro: "Voicegames é um site independente de jogos de navegador em voicegames.org. Não há conta.",
      micH: "Microfone",
      mic1: "O microfone só liga depois que você pulsa Começar. Pulse Parar, ou deixe a rodada acabar, e a página o libera.",
      mic2: "Say it, Count, Repeat, Voice over e Voice acting usam o reconhecimento de voz integrado ao Chrome para computador. Isso envia o áudio ao serviço de voz do Chrome para a página ler as palavras. O Voicegames não recebe esse áudio, não guarda transcrição e não o vende. As palavras servem só para pontuar a rodada na sua tela. No Voice acting, o humor é mostrado para você interpretar. A pontuação usa a linha, não o humor.",
      mic3: "Todos os outros jogos medem o volume na página. O áudio fica no seu dispositivo. Não vai a nenhum serviço de voz e nenhuma gravação é salva.",
      storeH: "O que este site guarda",
      store: "O Voicegames não usa cookies nem roda análises. A pontuação e o relógio vivem na página até você sair ou jogar de novo. As fontes vêm do Google Fonts.",
      contactH: "Contato",
      updated: "Atualizado em 28 de outubro de 2026."
    },
    fr: {
      title: "Confidentialité", h1: "Confidentialité",
      intro: "Voicegames est un site indépendant de jeux de navigateur sur voicegames.org. Il n'y a pas de compte.",
      micH: "Micro",
      mic1: "Le micro reste coupé jusqu'à ce que tu appuies sur Commencer. Appuie sur Arrêter, ou laisse finir la manche, et la page le libère.",
      mic2: "Say it, Count, Repeat, Voice over et Voice acting utilisent la reconnaissance vocale intégrée à Chrome pour ordinateur. Cela envoie l'audio au service vocal de Chrome pour que la page lise les mots. Voicegames ne reçoit pas cet audio, ne garde pas de transcription et ne le vend pas. Les mots servent seulement à noter la manche sur ton écran. Sur Voice acting, le ton est affiché pour ton interprétation. Le score utilise la ligne, pas le ton.",
      mic3: "Tous les autres jeux mesurent le volume dans la page. L'audio reste sur ton appareil. Il n'est envoyé à aucun service vocal et aucun enregistrement n'est sauvegardé.",
      storeH: "Ce que ce site garde",
      store: "Voicegames ne pose aucun cookie et ne fait aucune analyse. Le score et le chrono vivent dans la page jusqu'à ce que tu partes ou rejoues. Les polices viennent de Google Fonts.",
      contactH: "Contact",
      updated: "Mis à jour le 28 octobre 2026."
    },
    de: {
      title: "Datenschutz", h1: "Datenschutz",
      intro: "Voicegames ist eine unabhängige Browsergame-Seite unter voicegames.org. Es gibt kein Konto.",
      micH: "Mikrofon",
      mic1: "Das Mikrofon bleibt aus, bis du auf Start drückst. Drück Stopp oder lass die Runde enden — die Seite gibt es sofort wieder frei.",
      mic2: "Say it, Count, Repeat, Voice over und Voice acting nutzen die in Desktop-Chrome eingebaute Spracherkennung. Dabei geht Audio an den Sprachdienst von Chrome, damit die Seite die Worte lesen kann. Voicegames erhält dieses Audio nicht, speichert keine Mitschrift und verkauft nichts. Die Worte dienen nur der Punktevergabe auf deinem Bildschirm. Bei Voice acting wird die Stimmung nur zum Spielen angezeigt — gewertet wird der Satz, nicht die Stimmung.",
      mic3: "Alle anderen Spiele messen die Lautstärke in der Seite. Das Audio bleibt auf deinem Gerät. Es geht an keinen Sprachdienst, und keine Aufnahme wird gespeichert.",
      storeH: "Was diese Seite speichert",
      store: "Voicegames setzt keine Cookies und betreibt keine Analyse. Punkte und Uhr leben in der Seite, bis du gehst oder neu spielst. Die Schriften kommen von Google Fonts.",
      contactH: "Kontakt",
      updated: "Aktualisiert am 28. Oktober 2026."
    },
    it: {
      title: "Privacy", h1: "Privacy",
      intro: "Voicegames è un sito indipendente di giochi da browser su voicegames.org. Non ci sono account.",
      micH: "Microfono",
      mic1: "Il microfono resta spento finché non premi Start. Premi Stop, o lascia finire il round, e la pagina lo rilascia.",
      mic2: "Say it, Count, Repeat, Voice over e Voice acting usano il riconoscimento vocale integrato in Chrome per desktop. Questo manda l'audio al servizio vocale di Chrome perché la pagina legga le parole. Voicegames non riceve quell'audio, non conserva trascrizioni e non le vende. Le parole servono solo per il punteggio del round sul tuo schermo. In Voice acting il tono è mostrato per la tua interpretazione. Il punteggio usa la battuta, non il tono.",
      mic3: "Tutti gli altri giochi misurano il volume nella pagina. L'audio resta sul tuo dispositivo. Non va a nessun servizio vocale e nessuna registrazione viene salvata.",
      storeH: "Cosa salva questo sito",
      store: "Voicegames non imposta cookie e non fa analisi. Punti e cronometro vivono nella pagina finché esci o rigiochi. I font arrivano da Google Fonts.",
      contactH: "Contatti",
      updated: "Aggiornato il 28 ottobre 2026."
    },
    ko: {
      title: "개인정보", h1: "개인정보",
      intro: "Voicegames는 voicegames.org의 독립 브라우저 게임 사이트입니다. 계정 가입이 없습니다.",
      micH: "마이크",
      mic1: "마이크는 시작을 누르기 전까지 꺼져 있습니다. 정지를 누르거나 라운드가 끝나면 페이지가 즉시 마이크를 해제합니다.",
      mic2: "Say it·Count·Repeat·Voice over·Voice acting는 데스크톱 Chrome에 내장된 음성 인식을 사용합니다. 이때 오디오는 페이지가 글자를 읽을 수 있도록 Chrome의 음성 서비스로 전송됩니다. Voicegames는 그 오디오를 받지 않고, 받아쓰기를 저장하지 않으며, 판매하지도 않습니다. 글자는 화면의 라운드 점수에만 사용됩니다. Voice acting의 감정 태그는 연기를 위한 표시이며, 점수는 대사의 글자로만 판정합니다.",
      mic3: "말하기 게임을 제외한 모든 게임은 페이지 안에서 볼륨을 측정합니다. 오디오는 기기에 머무르며, 음성 서비스로 전송되지 않고 녹음도 저장되지 않습니다.",
      storeH: "이 사이트가 저장하는 것",
      store: "Voicegames는 쿠키를 설정하지 않고 분석 도구도 돌리지 않습니다. 점수와 타이머는 페이지 안에만 존재하며, 떠나거나 다시 플레이하면 사라집니다. 글꼴은 Google Fonts에서 불러옵니다.",
      contactH: "문의",
      updated: "2026년 10월 28일 업데이트."
    },
    ru: {
      title: "Конфиденциальность", h1: "Конфиденциальность",
      intro: "Voicegames — независимый сайт браузерных игр на voicegames.org. Без аккаунтов.",
      micH: "Микрофон",
      mic1: "Микрофон выключен, пока ты не нажмёшь Старт. Нажми Стоп или дай раунду закончиться — страница сразу его освобождает.",
      mic2: "Say it, Count, Repeat, Voice over и Voice acting используют распознавание речи, встроенное в Chrome для компьютера. Аудио уходит в голосовой сервис Chrome, чтобы страница прочитала слова. Voicegames не получает это аудио, не хранит расшифровки и не продаёт их. Слова нужны только для счёта раунда на твоём экране. В Voice acting настроение показано для твоей игры — счёт идёт по словам строки, а не по настроению.",
      mic3: "Все игры, кроме речевых, измеряют громкость прямо на странице. Аудио остаётся на твоём устройстве: ни отправки в речевые сервисы, ни сохранённых записей.",
      storeH: "Что хранит этот сайт",
      store: "Voicegames не ставит cookie и не ведёт аналитику. Очки и таймер живут в странице, пока ты не уйдёшь или не начнёшь заново. Шрифты загружаются с Google Fonts.",
      contactH: "Контакты",
      updated: "Обновлено 28 октября 2026 года."
    }
  }[code]
  return `<!DOCTYPE html>
<html lang="${L[code].htmlLang}">
<head>
${head({ code, slug: "privacy", title: `${c.title} | Voicegames`, desc: c.intro, keywords: keywordsFor(code, c.title, "Voicegames"), og: SITE + "/og/site.png" })}
</head>
<body>
<div class="grain" aria-hidden="true"></div>
<header class="top">
  <a class="brand" href="${pathFor(code, "")}">Voicegames</a>
  ${langSwitcher(code, "privacy")}
</header>
<article class="legal">
  <h1>${esc(c.h1)}</h1>
  <p>${esc(c.intro)}</p>
  <h2>${esc(c.micH)}</h2>
  <p>${esc(c.mic1)}</p>
  <p>${esc(c.mic2)}</p>
  <p>${esc(c.mic3)}</p>
  <h2>${esc(c.storeH)}</h2>
  <p>${esc(c.store)}</p>
  <h2>${esc(c.contactH)}</h2>
  <p><a href="mailto:svay9298@agent.qq.com">svay9298@agent.qq.com</a></p>
  <p>${esc(c.updated)}</p>
</article>
${FOOTER(code)}
</body>
</html>
`
}

// embed page copy for the six overlay locales
const embedMore = {
  pt: {
    intro: "Um jogo de doblagem é uma cena que você interpreta em voz alta. O Choicer Voicer toca uma linha, você grava sua versão e ele monta uma cena para assistir. O estúdio dele está incrustado aqui. O botão abre a página deles, onde o jogo roda.",
    what: "O Choicer Voicer é um estúdio de navegador feito por outra pessoa. Você pega as linhas de um pacote de voz e as diz você mesmo. O Voicegames não hospeda os pacotes, a sessão de microfone nem a cena final. Esta página apresenta o jogo e manda você para o estúdio deles.",
    steps: ["Pulse Play no Choicer Voicer. Sai desta página e abre o estúdio deles.", "Permita o microfone quando a página deles pedir.", "Escolha um pacote de voz.", "Ouça a linha e grave sua versão.", "Assista à cena que eles montam com as suas gravações."],
    faq: [
      { q: "Onde se joga ao jogo de doblagem?", a: "No Choicer Voicer. O estúdio está incrustado acima. O botão sai deste site e abre a página deles." },
      { q: "Como se joga o Choicer Voicer?", a: "Abra o estúdio deles, permita o microfone, escolha um pacote de voz, ouça a linha, grave sua versão e assista à cena montada." }
    ]
  },
  fr: {
    intro: "Un jeu de doublage, c'est une scène que tu joues à voix haute. Choicer Voicer joue une ligne, tu enregistres ta prise, et il monte une scène à regarder. Leur studio est incrusté ici. Le bouton ouvre leur page, où le jeu tourne.",
    what: "Choicer Voicer est un studio de navigateur fait par quelqu'un d'autre. Tu prends les lignes d'un pack de voix et tu les dis toi-même. Voicegames n'héberge ni les packs, ni la session micro, ni la scène finale. Cette page présente le jeu et t'envoie vers leur studio.",
    steps: ["Appuie sur Play chez Choicer Voicer. Cela quitte cette page et ouvre leur studio.", "Autorise le micro quand leur page le demande.", "Choisis un pack de voix.", "Écoute la ligne, puis enregistre ta prise.", "Regarde la scène qu'ils assemblent avec tes prises."],
    faq: [
      { q: "Où joue-t-on au jeu de doublage ?", a: "Sur Choicer Voicer. Le studio est incrusté ci-dessus. Le bouton quitte ce site et ouvre leur page." },
      { q: "Comment jouer à Choicer Voicer ?", a: "Ouvre leur studio, autorise le micro, choisis un pack de voix, écoute la ligne, enregistre ta prise et regarde la scène montée." }
    ]
  },
  de: {
    intro: "Ein Sprechspiel ist eine Szene, die du laut spielst. Choicer Voicer spielt eine Zeile, du nimmst deine Version auf, und es baut eine Szene zum Ansehen. Ihr Studio ist hier eingebettet. Der Knopf öffnet ihre Seite, dort läuft das Spiel.",
    what: "Choicer Voicer ist ein Browser-Studio von jemand anderem. Du nimmst die Zeilen eines Sprachpakets und sprichst sie selbst. Voicegames hostet weder die Pakete noch die Mikrofon-Session noch die fertige Szene. Diese Seite stellt das Spiel vor und schickt dich in ihr Studio.",
    steps: ["Drück Play bei Choicer Voicer. Das verlässt diese Seite und öffnet ihr Studio.", "Erlaube das Mikrofon, wenn ihre Seite fragt.", "Wähl ein Sprachpaket.", "Hör die Zeile und nimm deine Version auf.", "Sieh dir die Szene an, die sie aus deinen Takes bauen."],
    faq: [
      { q: "Wo spiele ich das Sprechspiel?", a: "Bei Choicer Voicer. Das Studio ist oben eingebettet. Der Knopf verlässt diese Seite und öffnet ihre Seite." },
      { q: "Wie spielt man Choicer Voicer?", a: "Öffne ihr Studio, erlaube das Mikrofon, wähl ein Sprachpaket, hör die Zeile, nimm deine Version auf und sieh die gebaute Szene an." }
    ]
  },
  it: {
    intro: "Un gioco di doppiaggio è una scena che interpreti a voce alta. Choicer Voicer suona una battuta, tu registri la tua versione, e lui monta una scena da guardare. Il loro studio è incorporato qui. Il pulsante apre la loro pagina, dove gira il gioco.",
    what: "Choicer Voicer è uno studio da browser fatto da qualcun altro. Prendi le battute di un pacchetto vocale e le dici tu. Voicegames non ospita i pacchetti, la sessione del microfono né la scena finita. Questa pagina presenta il gioco e ti manda al loro studio.",
    steps: ["Premi Play su Choicer Voicer. Esce da questa pagina e apre il loro studio.", "Consenti il microfono quando lo chiede la loro pagina.", "Scegli un pacchetto vocale.", "Ascolta la battuta, poi registra la tua versione.", "Guarda la scena che montano con le tue versioni."],
    faq: [
      { q: "Dove si gioca al gioco di doppiaggio?", a: "Su Choicer Voicer. Lo studio è incorporato sopra. Il pulsante esce da questo sito e apre la loro pagina." },
      { q: "Come si gioca a Choicer Voicer?", a: "Apri il loro studio, consenti il microfono, scegli un pacchetto vocale, ascolta la battuta, registra la tua versione e guarda la scena montata." }
    ]
  },
  ko: {
    intro: "더빙 게임은 목소리로 연기하는 장면입니다. Choicer Voicer가 대사를 틀어주면, 당신의 테이크를 녹음하고, 그것으로 볼 수 있는 장면을 만들어 줍니다. 스튜디오가 이 페이지에 내장되어 있고, 버튼을 누르면 게임이 돌아가는 그들의 페이지가 열립니다.",
    what: "Choicer Voicer는 다른 분이 만든 브라우저 스튜디오입니다. 보이스팩의 대사를 직접 목소리로 담는 방식이며, Voicegames는 팩이나 마이크 세션, 완성 장면을 호스팅하지 않습니다. 이 페이지는 게임을 소개하고 실제 플레이는 그들의 스튜디오로 안내합니다.",
    steps: ["Choicer Voicer에서 Play를 누르세요. 이 페이지를 떠나 그들의 스튜디오가 열립니다.", "그들의 페이지가 요청하면 마이크를 허용하세요.", "보이스팩을 고르세요.", "대사를 듣고 내 테이크를 녹음하세요.", "테이크로 조립된 장면을 감상하세요."],
    faq: [
      { q: "더빙 게임은 어디서 하나요?", a: "Choicer Voicer에서 합니다. 스튜디오가 위에 내장되어 있고, 버튼은 이 사이트를 떠나 그들의 페이지를 엽니다." },
      { q: "Choicer Voicer는 어떻게 하나요?", a: "스튜디오를 열고 마이크를 허용한 뒤 보이스팩을 고르고, 대사를 듣고 테이크를 녹음하면 완성된 장면을 볼 수 있습니다." }
    ]
  },
  ru: {
    intro: "Игра озвучивания — это сцена, которую ты играешь голосом. Choicer Voicer проигрывает строку, ты записываешь свой дубль, а он собирает сцену для просмотра. Их студия встроена здесь. Кнопка открывает их страницу — игра идёт там.",
    what: "Choicer Voicer — браузерная студия, сделанная другим автором. Ты берёшь строки голосового пакета и произносишь их сам. Voicegames не хранит ни пакеты, ни микрофонную сессию, ни готовую сцену. Эта страница знакомит с игрой и отправляет играть в их студию.",
    steps: ["Нажми Play на Choicer Voicer. Это покидает страницу и открывает их студию.", "Разреши микрофон, когда их страница попросит.", "Выбери голосовой пакет.", "Послушай строку и запиши свой дубль.", "Посмотри сцену, которую они соберут из твоих дублей."],
    faq: [
      { q: "Где играть в игру озвучивания?", a: "На Choicer Voicer. Студия встроена выше. Кнопка покидает этот сайт и открывает их страницу." },
      { q: "Как играть в Choicer Voicer?", a: "Открой их студию, разреши микрофон, выбери голосовой пакет, послушай строку, запиши дубль — и смотри собранную сцену." }
    ]
  }
}
const embedTaglines = { pt: "Jogue Choicer Voicer", fr: "Jouez à Choicer Voicer", de: "Spielen Sie Choicer Voicer", it: "Gioca a Choicer Voicer", ko: "Choicer Voicer를 플레이", ru: "Играйте в Choicer Voicer" }
for (const [code, f] of Object.entries(embedMore)) {
  embedGame.intro[code] = f.intro
  embedGame.what[code] = f.what
  embedGame.tagline[code] = embedTaglines[code]
  f.faq.forEach((item, i) => { if (embedGame.faq[i]) { embedGame.faq[i].q[code] = item.q; embedGame.faq[i].a[code] = item.a } })
}
const embedSteps = code => ({
  en: ["Press Play on Choicer Voicer. That leaves this page and opens their studio.", "Allow the microphone when their page asks.", "Choose a voice pack.", "Listen to the line, then record your take.", "Watch the scene they assemble from the takes."],
  zh: ["在 Choicer Voicer 上点 Play，会离开本页并打开他们的工作室。", "他们的页面询问时允许麦克风。", "选择一个语音包。", "听台词，然后录下你的版本。", "观看它用你的录音生成的场景。"],
  es: ["Pulsa Play en Choicer Voicer. Sale de esta página y abre su estudio.", "Permite el micrófono cuando lo pida su página.", "Elige un paquete de voz.", "Escucha la línea y graba tu toma.", "Mira la escena que montan con tus tomas."],
  ja: ["Choicer Voicer で Play を押す。このページを離れてスタジオが開きます。", "聞かれたらマイクを許可。", "ボイスパックを選ぶ。", "台詞を聞いて、自分のテイクを録音。", "テイクから組み立てられたシーンを見る。"]
}[code] || embedMore[code].steps)
const embedPlayBtn = code => ({
  en: "Play on Choicer Voicer", zh: "去 Choicer Voicer 玩", es: "Jugar en Choicer Voicer", ja: "Choicer Voicer で遊ぶ",
  pt: "Jogar no Choicer Voicer", fr: "Jouer sur Choicer Voicer", de: "Spielen auf Choicer Voicer",
  it: "Gioca su Choicer Voicer", ko: "Choicer Voicer에서 플레이", ru: "Играть на Choicer Voicer"
}[code])

function embedPage(code) {
  const u = ui[code]
  const g = embedGame
  const steps = embedSteps(code)
  const faqSchema = {
    "@context": FAQ_SCHEMA_CONTEXT, "@type": "FAQPage",
    mainEntity: [
      ...u.faqShared.slice(0, 1).map(i => ({
        "@type": "Question", name: i.q.replace("{name}", g.name),
        acceptedAnswer: { "@type": "Answer", text: i.a.replace("{name}", g.name) }
      })),
      ...g.faq.map(f => ({ "@type": "Question", name: f.q[code], acceptedAnswer: { "@type": "Answer", text: f.a[code] } }))
    ]
  }
  return `<!DOCTYPE html>
<html lang="${L[code].htmlLang}">
<head>
${head({ code, slug: g.slug, title: `${g.name} — ${g.tagline[code]} | Voicegames`, desc: g.metaDesc[code], keywords: keywordsFor(code, g.name, g.tagline[code]), jsonldBlocks: [faqSchema] })}
</head>
<body>
<div class="grain" aria-hidden="true"></div>
<header class="top">
  <a class="brand" href="${pathFor(code, "")}">Voicegames</a>
  ${langSwitcher(code, g.slug)}
</header>
<article class="legal wide">
  <p class="kicker">Choicer Voicer</p>
  <h1>${esc(g.name)}</h1>
  <p>${esc(g.intro[code])}</p>
  <iframe class="studio" src="https://thechoicervoicer.app/" title="Choicer Voicer voice over game" allow="microphone; autoplay; fullscreen" referrerpolicy="strict-origin-when-cross-origin"></iframe>
  <div class="actions"><a href="https://thechoicervoicer.app/">${esc(embedPlayBtn(code))}</a></div>
  <h2>${esc({ en: "What this voice over game is", zh: "这个配音游戏是什么", es: "Qué es este juego de doblaje", ja: "このボイスゲームについて" }[code])}</h2>
  <p>${esc(g.what[code])}</p>
  <h2>${esc(u.howTo)} Choicer Voicer</h2>
  <ol>
${steps.map(s => `    <li>${esc(s)}</li>`).join("\n")}
  </ol>
${faqHtml(code, { name: g.name, kind: "speech", faq: g.faq })}
</article>
${FOOTER(code)}
</body>
</html>
`
}

function sitemap() {
  const slugs = ["", "privacy", "voice-over-game", ...GAMES.map(g => g.slug)]
  const urls = slugs.map(slug => {
    const alts = locales.map(l =>
      `    <xhtml:link rel="alternate" hreflang="${l.htmlLang}" href="${urlFor(l.code, slug)}"/>`).join("\n")
    const xdefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor("en", slug)}"/>`
    return `  <url>
    <loc>${urlFor("en", slug)}</loc>
${alts}
${xdefault}
  </url>`
  })
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`
}

// ---- words files ----
function wordsFile(code) {
  const w = words[code]
  const u = ui[code]
  const strings = {
    offAir: u.offAir, onAir: u.onAir, stop: u.stop, playAgain: u.playAgain,
    listening: u.listening, heard: u.heard, roundOver: u.roundOver,
    correct: u.correct, loudSeconds: u.loudSeconds, passed: u.passed,
    needChrome: u.needChrome, micBlocked: u.micBlocked,
    louder: u.louderPrompt, yes: u.yesPrompt, loudEnough: u.loudEnough, tooQuiet: u.tooQuiet,
    hitStone: u.hitStone, hitWall: u.hitWall, missedHole: u.missedHole,
    hitCeiling: u.hitCeiling, hitSpikes: u.hitSpikes,
    hitBomb: u.hitBomb, hitCar: u.hitCar, chased: u.chased, missedJump: u.missedJump,
    timeUp: u.timeUp, stopped: u.stoppedMsg, hints: u.hints,
    bannerSub: u.bannerSub, shareBtn: u.shareBtn, saveBtn: u.saveBtn,
    bestLabel: u.bestLabel, taglineText: u.taglineText,
    copyImageBtn: u.copyImageBtn, copyTextBtn: u.copyTextBtn, copied: u.copied,
    savedTip: u.savedTip, socialText: u.socialText
  }
  return `// Generated by build/build.mjs — do not edit by hand.
window.VG = Object.assign(window.VG || {}, ${jsonld({ ...w, strings })});
`
}

function write(rel, content) {
  const p = path.join(ROOT, rel)
  fs.mkdirSync(path.dirname(p), { recursive: true })
  fs.writeFileSync(p, content)
}

// ---- run ----
buildOgImages(GAMES, write)
for (const l of locales) {
  const base = l.dir ? l.dir + "/" : ""
  write(base + "index.html", homePage(l.code))
  write(base + "privacy/index.html", privacyPage(l.code))
  write(base + "voice-over-game/index.html", embedPage(l.code))
  for (const g of GAMES) write(base + g.slug + "/index.html", gamePage(l.code, g))
  write("js/words-" + l.code + ".js", wordsFile(l.code))
}
write("sitemap.xml", sitemap())
console.log("Generated", locales.length * (GAMES.length + 3) + 1, "files into", ROOT)
