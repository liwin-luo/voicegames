const WORDS = ["apple","banana","tiger","rocket","piano","castle","orange","window","silver","coffee","thunder","pebble","garden","mirror","candle","pirate","circle","forest","rabbit","yellow","bridge","camera","dolphin","mountain","sandwich","umbrella","bicycle","diamond","penguin","volcano","lantern","trumpet","galaxy","octopus","compass","meadow","helmet","walnut","cactus","zebra"]
const LINES = ["red apple","blue ocean","gold ring","fast tiger","cold winter","green forest","loud drum","silver moon","open window","round table","black cat","white horse","hot coffee","big castle","small pebble"]
const OVERS = ["the train is late","fresh bread at dawn","a small boat leaves","rain on the station roof","the shop opens at nine","lights over the city","a letter on the desk","the river under the bridge","warm soup tonight","the clock strikes three","clouds across the field","a red kite in the wind","the cafe door opens","snow on the quiet road","the last bus turns"]
const ACTS = [{mood:"angry",line:"put that down"},{mood:"whisper",line:"keep your voice low"},{mood:"excited",line:"we won the race"},{mood:"sad",line:"the show is over"},{mood:"calm",line:"take a slow breath"},{mood:"scared",line:"do not open it"},{mood:"angry",line:"that was my seat"},{mood:"whisper",line:"someone is outside"},{mood:"excited",line:"look at the sky"},{mood:"sad",line:"I missed the train"},{mood:"calm",line:"the water is still"},{mood:"scared",line:"turn off the light"}]
const NUMBERS = ["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","twenty one","twenty two","twenty three","twenty four","twenty five","twenty six","twenty seven","twenty eight","twenty nine","thirty"]
const ALIAS = { two:["two","to","too","2"], four:["four","for","4"], eight:["eight","ate"], ten:["ten","10"], one:["one","won","1"], three:["three","3"], five:["five","5"], six:["six","6"], seven:["seven","7"], nine:["nine","9"] }
const RING = 97.4
const Speech = window.SpeechRecognition || window.webkitSpeechRecognition
const game = document.body.dataset.game
const wordEl = document.querySelector("#word")
const titleEl = document.querySelector("#title")
const kicker = document.querySelector("#kicker")
const heardEl = document.querySelector("#heard")
const scoreEl = document.querySelector("#score")
const timeEl = document.querySelector("#time")
const ring = document.querySelector("#ring")
const lamp = document.querySelector("#lamp")
const go = document.querySelector("#go")
let running = false
let left = game === "louder" ? 30 : 60
let total = left
let score = 0
let prompt = wordEl.dataset.prompt
let mood = ""
let actLine = ""
const kickerHome = kicker.textContent
let expect = 1
let rec, timer, stream, audio, raf, loudMs = 0

function norm(s) { return s.toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim() }
function has(said, token) { return new RegExp("(?:^| )" + token + "(?: |$)").test(said) }
function paint() {
  wordEl.textContent = prompt || "Ready"
  wordEl.classList.toggle("long", (prompt || "").length > 12)
  titleEl.hidden = running
  wordEl.hidden = !running
  if (game === "act") kicker.textContent = running ? mood : kickerHome
  scoreEl.textContent = String(score)
  timeEl.textContent = String(left)
  ring.style.strokeDashoffset = String(RING * (1 - left / total))
}
function lineHit(said, line) { return norm(line).split(" ").every(part => part && has(said, part)) }
function pickAct() {
  let next = ACTS[0]
  while (next.line === actLine) next = ACTS[Math.floor(Math.random() * ACTS.length)]
  actLine = next.line
  return next
}
function pick(list, current) {
  let next = current
  while (next === current) next = list[Math.floor(Math.random() * list.length)]
  return next
}
function stopRound() {
  running = false
  document.body.classList.remove("live")
  lamp.textContent = "Off air"
  clearInterval(timer)
  if (raf) cancelAnimationFrame(raf)
  if (rec) { rec.onend = null; try { rec.stop() } catch (e) {} }
  if (stream) stream.getTracks().forEach(t => t.stop())
  if (audio) audio.close().catch(() => {})
  rec = stream = audio = raf = null
  go.textContent = "Play again"
  paint()
}
function finish() {
  const last = score
  stopRound()
  kicker.textContent = game === "louder" ? last + " loud seconds" : last + " correct"
  heardEl.textContent = "Round over."
}
function beginClock() {
  running = true
  document.body.classList.add("live")
  lamp.textContent = "On air"
  go.textContent = "Stop"
  clearInterval(timer)
  timer = setInterval(() => {
    left -= 1
    paint()
    if (left <= 0) finish()
  }, 1000)
}
function onSaid(raw) {
  const said = norm(raw)
  if (!said || !running) return
  heardEl.textContent = "Heard: " + said
  if (game === "say" && has(said, prompt)) {
    score += 1
    prompt = pick(WORDS, prompt)
  } else if (game === "count") {
    const name = NUMBERS[expect]
    const ok = name.split(" ").every(part => (ALIAS[part] || [part]).some(token => has(said, token)))
    if (ok) {
      score += 1
      expect += 1
      if (expect > 30) { finish(); return }
      prompt = NUMBERS[expect]
    }
  } else if ((game === "repeat" || game === "over") && lineHit(said, prompt)) {
    score += 1
    prompt = pick(game === "over" ? OVERS : LINES, prompt)
  } else if (game === "act" && lineHit(said, prompt)) {
    score += 1
    const next = pickAct()
    prompt = next.line
    mood = next.mood
  }
  paint()
}
function startSpeech() {
  if (!Speech) { heardEl.textContent = "Open this page in desktop Chrome."; return }
  rec = new Speech()
  rec.lang = "en-US"
  rec.continuous = false
  rec.interimResults = true
  rec.onresult = (event) => {
    let said = ""
    for (let i = 0; i < event.results.length; i++) said += event.results[i][0].transcript + " "
    onSaid(said)
  }
  rec.onerror = () => {}
  rec.onend = () => { if (running) { try { rec.start() } catch (e) {} } }
  try { rec.start() } catch (e) {}
  if (game === "say") prompt = pick(WORDS, "")
  if (game === "repeat") prompt = pick(LINES, "")
  if (game === "over") prompt = pick(OVERS, "")
  if (game === "act") { const next = pickAct(); prompt = next.line; mood = next.mood }
  if (game === "count") { expect = 1; prompt = "one" }
  heardEl.textContent = "Listening"
  beginClock()
  paint()
}
async function startLouder() {
  try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }) }
  catch (e) { heardEl.textContent = "The microphone was blocked."; return }
  audio = new AudioContext()
  const source = audio.createMediaStreamSource(stream)
  const analyser = audio.createAnalyser()
  analyser.fftSize = 1024
  source.connect(analyser)
  const data = new Uint8Array(analyser.fftSize)
  loudMs = 0
  prompt = "Louder"
  beginClock()
  let last = performance.now()
  const tick = (now) => {
    if (!running) return
    analyser.getByteTimeDomainData(data)
    let sum = 0
    for (let i = 0; i < data.length; i++) { const x = (data[i] - 128) / 128; sum += x * x }
    const level = Math.sqrt(sum / data.length)
    const dt = now - last
    last = now
    if (level > 0.07) {
      loudMs += dt
      score = Math.floor(loudMs / 1000)
      prompt = level > 0.16 ? "Yes" : "Louder"
      heardEl.textContent = "Loud enough"
    } else {
      prompt = "Louder"
      heardEl.textContent = "Too quiet"
    }
    paint()
    raf = requestAnimationFrame(tick)
  }
  raf = requestAnimationFrame(tick)
}
if (!lineHit(norm("I missed the train"), "I missed the train")) throw new Error("line")
if (lineHit(norm("sad"), "I missed the train")) throw new Error("mood")
go.addEventListener("click", () => {
  if (running) { stopRound(); heardEl.textContent = "Stopped."; return }
  score = 0
  left = total
  if (game === "louder") startLouder()
  else startSpeech()
})
paint()
