// World engine v3 — voice-driven mini games.
// v3: smoothed mic input with on-canvas meter, thrust physics, difficulty ramp,
// near-miss bonuses, best-score memory, countdown, death slow-mo + particles,
// screen shake, synth sfx, fully redrawn 2D scenes (parallax, animated sprites).
const W = 800
const H = 360
const game = document.body.dataset.game
const look = document.body.dataset.look || ""
const canvas = document.querySelector("#world")
const ctx = canvas.getContext("2d")
const scoreEl = document.querySelector("#score")
const timeEl = document.querySelector("#time")
const ring = document.querySelector("#ring")
const heardEl = document.querySelector("#heard")
const lamp = document.querySelector("#lamp")
const go = document.querySelector("#go")
const kicker = document.querySelector("#kicker")
const VGW = window.VG || {}
const STR = Object.assign({
  offAir: "Off air", onAir: "On air", stop: "Stop", playAgain: "Play again",
  passed: "passed", micBlocked: "The microphone was blocked.",
  hitStone: "Hit a stone.", hitWall: "Hit a wall.", missedHole: "Missed the hole.",
  hitCeiling: "Caught by the spike ceiling.", hitSpikes: "Landed on the spikes.",
  hitBomb: "Caught a bomb.", hitCar: "Crashed into a car.",
  chased: "The spike wall caught you.", missedJump: "Missed the jump.",
  timeUp: "Time.", stopped: "Stopped.",
  hints: {
    "vox:dino": "Hold a sound, Space, or the mouse",
    "vox:flap": "Hold a sound, Space, or the mouse to rise",
    "vox:float": "Sound, Space, or the mouse lifts it",
    "2d:dino": "Hold the sound to stay up",
    "2d:flap": "Hold the sound to rise",
    "2d:float": "Louder lifts the balloon",
    "2d:miner": "Make a sound, Space, or click to drop the claw",
    "2d:floors": "Low hum walks left, high note walks right",
    "2d:catch": "Hum low to slide left, high to slide right",
    "2d:racer": "Hum low to steer left, high to steer right",
    "2d:bricks": "Hum low or high to slide, shout to launch",
    "2d:snake": "Low note turns left, high note turns right",
    "2d:march": "Hold a sound to walk, silence to stop",
    "2d:tug": "Louder pulls harder",
    "2d:puff": "Hold a sound to blow, go quiet to bank",
    "2d:hop": "Hold a sound to charge, go quiet to jump"
  }
}, VGW.strings || {})
const hintKey = (look === "vox" ? "vox" : "2d") + ":" + game
const RING = 97.4
const LINE = 308

// ---------- state ----------
let phase = "idle"            // idle | count | run | dying
let running = false           // loop alive (count/run/dying)
let countT = 0
let dyingT = 0
let left = 30
let score = 0
let stream, audio, analyser, data, raf, level = 0, smooth = 0
let keyLift = false
let pointerDown = false
let pointerLift = 0
let starting = false
let y = LINE - 22
let pace = 0
let vy = 0
let stones = []
let holes = []
let gates = []
let spawn = 0
let drift = 0
let clock = null
let shake = 0
let best = 0
let clouds = []
let particles = []
let popups = []
// miner (voice gold digger)
let fireEdge = false       // set by Space / canvas tap, consumed by minerStep
let mAngle = 0
let mDir = 1
let mState = "swing"        // swing | out | back
let mLen = 0
let mLoad = null            // grabbed item
let mItems = []
let mSpin = 0
// floors (voice descent)
let fGuy = { x: 400, y: 0, vy: 0, ground: null, dir: 0, pace: 0 }
let fPlats = []             // {y, x0, x1, spike, passed}
let fDepth = 0              // camera top in world px
let fCeil = 0               // ceiling bottom in world px
let fKeyDir = 0
let fPointDir = 0
let fPitch = 0
const GAP = 120
const PW = 54
const GROUND = 330
const BX = 156
const FLOOR_H = 96
const FLOORS_START = 200
const THRUST = { dino: 2600, flap: 2300, miner: 0, floors: 0, catch: 0, racer: 0, bricks: 0, snake: 0, march: 0, tug: 0, puff: 0, hop: 0 }
const GRAV = { dino: 1500, flap: 1400, miner: 0, floors: 1500, catch: 0, racer: 0, bricks: 0, snake: 0, march: 0, tug: 0, puff: 0, hop: 900 }
const VMIN = { dino: -430, flap: -390, miner: 0, floors: 0, catch: 0, racer: 0, bricks: 0, snake: 0, march: 0, tug: 0, puff: 0, hop: 0 }
const VMAX = { dino: 900, flap: 480, miner: 0, floors: 520, catch: 0, racer: 0, bricks: 0, snake: 0, march: 0, tug: 0, puff: 0, hop: 520 }
const BASE_SPEED = { dino: 225, flap: 190, float: 150, miner: 0, floors: 0, catch: 0, racer: 0, bricks: 0, snake: 0, march: 0, tug: 0, puff: 0, hop: 0 }
const thresh = game === "float" ? 0 : 0.055
const bestKey = "vg-best-" + game + (look ? "-" + look : "")
try { best = Number(localStorage.getItem(bestKey)) || 0 } catch (e) { best = 0 }

// ---------- tiny helpers ----------
const rnd = (a, b) => a + Math.random() * (b - a)
function loadBest() { try { best = Number(localStorage.getItem(bestKey)) || 0 } catch (e) {} }
function saveBest() { try { localStorage.setItem(bestKey, String(best)) } catch (e) {} }

let sfxCtx = null
function sfx(kind) {
  try {
    if (!sfxCtx) sfxCtx = new (window.AudioContext || window.webkitAudioContext)()
    const t = sfxCtx.currentTime
    const o = sfxCtx.createOscillator()
    const g = sfxCtx.createGain()
    o.connect(g); g.connect(sfxCtx.destination)
    if (kind === "tick") { o.type = "square"; o.frequency.value = 520; g.gain.setValueAtTime(.05, t); g.gain.exponentialRampToValueAtTime(.001, t + .07); o.start(t); o.stop(t + .08) }
    else if (kind === "go") { o.type = "square"; o.frequency.value = 880; g.gain.setValueAtTime(.06, t); g.gain.exponentialRampToValueAtTime(.001, t + .14); o.start(t); o.stop(t + .15) }
    else if (kind === "point") { o.type = "triangle"; o.frequency.setValueAtTime(880, t); o.frequency.setValueAtTime(1245, t + .05); g.gain.setValueAtTime(.05, t); g.gain.exponentialRampToValueAtTime(.001, t + .1); o.start(t); o.stop(t + .11) }
    else if (kind === "bonus") { o.type = "triangle"; o.frequency.setValueAtTime(1245, t); o.frequency.setValueAtTime(1660, t + .05); g.gain.setValueAtTime(.05, t); g.gain.exponentialRampToValueAtTime(.001, t + .12); o.start(t); o.stop(t + .13) }
    else if (kind === "crash") { o.type = "sawtooth"; o.frequency.setValueAtTime(190, t); o.frequency.exponentialRampToValueAtTime(55, t + .22); g.gain.setValueAtTime(.09, t); g.gain.exponentialRampToValueAtTime(.001, t + .24); o.start(t); o.stop(t + .25) }
  } catch (e) {}
}

function burst(x, y, n, colors, spread) {
  for (let i = 0; i < n; i++) {
    particles.push({
      x, y,
      vx: rnd(-(spread || 160), spread || 160),
      vy: rnd(-260, 60),
      life: rnd(.4, .9),
      t: 0,
      s: rnd(2.5, 5.5),
      c: colors[Math.floor(Math.random() * colors.length)]
    })
  }
}
function popup(x, y, txt, color) { popups.push({ x, y, txt, color: color || "#ffd15a", t: 0 }) }

// ---------- pitch (floors: low hum left, high note right) ----------
function detectPitch(buf, sr) {
  const n = buf.length
  let rms = 0
  for (let i = 0; i < n; i++) { const v = (buf[i] - 128) / 128; rms += v * v }
  rms = Math.sqrt(rms / n)
  if (rms < 0.018) return 0
  const minLag = Math.max(2, Math.floor(sr / 1100))
  const maxLag = Math.min(Math.floor(sr / 90), n >> 1)
  let bestCorr = 0
  const corr = new Float32Array(maxLag + 1)
  for (let lag = minLag; lag <= maxLag; lag++) {
    let c = 0
    for (let i = 0; i < n - lag; i += 2) {
      const a = buf[i] - 128
      const b = buf[i + lag] - 128
      c += a * b
    }
    corr[lag] = c / (n - lag)
    if (corr[lag] > bestCorr) bestCorr = corr[lag]
  }
  if (bestCorr < 260) return 0
  // the first lag near the peak is the fundamental; later ones are its multiples
  for (let lag = minLag; lag <= maxLag; lag++) {
    if (corr[lag] >= bestCorr * 0.9) return sr / lag
  }
  return 0
}

// shared voice steering: -1 low, +1 high, 0 silent/unsure (used by floors + pitch hook games)
function pitchDir() {
  if (!analyser || !data) return 0
  const f = detectPitch(data, audio.sampleRate) || 0
  if (f > 460) return 1
  if (f > 0 && f < 260) return -1
  return 0
}
// hook games register themselves here from js/game-*.js (loaded after world.js)
const hookFor = g => (window.VG_HOOKS || {})[g] || null

// ---------- miner (voice gold digger) ----------
const M_PIVOT_X = 400
const M_PIVOT_Y = 46
let mDots = null
function initMDots() {
  mDots = []
  for (let i = 0; i < 42; i++) mDots.push({ x: rnd(0, W), y: rnd(70, 332), r: rnd(1.5, 4), c: Math.random() < .5 ? "#4a3423" : "#57402b" })
}
function spawnItem() {
  const roll = Math.random()
  const type = roll < .42 ? "gold-s" : roll < .74 ? "gold-b" : roll < .93 ? "rock" : "gem"
  const conf = {
    "gold-s": { r: 11, value: 50, weight: 1 },
    "gold-b": { r: 17, value: 120, weight: 2.3 },
    "rock": { r: 15, value: 15, weight: 3.1 },
    "gem": { r: 10, value: 300, weight: .9 }
  }[type]
  for (let tries = 0; tries < 26; tries++) {
    const x = rnd(50, W - 50)
    const y = rnd(200, 330)
    let clash = false
    for (const it of mItems) {
      if ((it.x - x) * (it.x - x) + (it.y - y) * (it.y - y) < 46 * 46) { clash = true; break }
    }
    if (!clash) { mItems.push(Object.assign({ x, y, type }, conf)); return }
  }
}
function minerStep(dt) {
  mSpin += dt * mDir * 2.4
  const fire = fireEdge
  fireEdge = false
  const wasLoud = minerStep.loud || false
  const loud = smooth > thresh
  if (mState === "swing") {
    mAngle += mDir * 1.9 * dt
    if (mAngle > 1.05) { mAngle = 1.05; mDir = -1 }
    if (mAngle < -1.05) { mAngle = -1.05; mDir = 1 }
    mLen = 0
    if (phase === "run" && ((loud && !wasLoud) || fire)) {
      mState = "out"
      sfx("tick")
    }
  } else if (mState === "out") {
    mLen += 430 * dt
    const tx = M_PIVOT_X + Math.sin(mAngle) * mLen
    const ty = M_PIVOT_Y + Math.cos(mAngle) * mLen
    if (phase === "run") {
      for (let i = 0; i < mItems.length; i++) {
        const it = mItems[i]
        const dx = it.x - tx
        const dy = it.y - ty
        if (dx * dx + dy * dy < (it.r + 11) * (it.r + 11)) {
          mLoad = it
          mItems.splice(i, 1)
          mState = "back"
          break
        }
      }
    }
    if (mState === "out" && (ty > H + 14 || tx < -14 || tx > W + 14 || mLen > 520)) mState = "back"
  } else {
    const speed = 500 / (mLoad ? mLoad.weight : 1)
    mLen -= speed * dt
    if (mLen <= 8) {
      mLen = 8
      if (mLoad && phase === "run") {
        score += mLoad.value
        sfx(mLoad.value >= 120 ? "bonus" : "point")
        popup(M_PIVOT_X + Math.sin(mAngle) * 60, M_PIVOT_Y + 60, "+" + mLoad.value, mLoad.type === "rock" ? "#e7a35a" : "#ffd15a")
        spawnItem()
      }
      mLoad = null
      mState = "swing"
    }
  }
  minerStep.loud = loud
}
function drawClaw(x, y, a) {
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(-a)
  ctx.fillStyle = "#8f887c"
  ctx.fillRect(-3, -8, 6, 12)
  ctx.strokeStyle = "#b8b2a8"
  ctx.lineWidth = 4
  ctx.lineCap = "round"
  ctx.beginPath(); ctx.arc(-7, 8, 9, Math.PI * 1.05, Math.PI * 1.85); ctx.stroke()
  ctx.beginPath(); ctx.arc(7, 8, 9, Math.PI * 1.15, Math.PI * 1.95); ctx.stroke()
  ctx.restore()
}
function drawItem(it, x, y) {
  x = x == null ? it.x : x
  y = y == null ? it.y : y
  if (it.type === "gem") {
    ctx.fillStyle = "#7ec8ea"
    ctx.beginPath()
    ctx.moveTo(x, y - 12); ctx.lineTo(x + 9, y - 3); ctx.lineTo(x, y + 10); ctx.lineTo(x - 9, y - 3)
    ctx.closePath(); ctx.fill()
    ctx.fillStyle = "rgba(255,246,234,.85)"
    ctx.fillRect(x - 3, y - 6, 3, 3)
  } else if (it.type === "rock") {
    ctx.fillStyle = "#7d7468"
    ctx.beginPath(); ctx.ellipse(x, y + 2, it.r + 3, it.r, 0, 0, Math.PI * 2); ctx.fill()
    ctx.fillStyle = "#948a7c"
    ctx.beginPath(); ctx.ellipse(x - 3, y - 2, it.r - 4, it.r - 6, 0, 0, Math.PI * 2); ctx.fill()
  } else {
    const r = it.r
    ctx.fillStyle = "#f0b15a"
    ctx.beginPath()
    ctx.moveTo(x - r, y + r * .5); ctx.lineTo(x - r * .6, y - r * .7); ctx.lineTo(x + r * .5, y - r)
    ctx.lineTo(x + r, y + r * .4); ctx.lineTo(x + r * .3, y + r * .8)
    ctx.closePath(); ctx.fill()
    ctx.fillStyle = "#ffd15a"
    ctx.beginPath()
    ctx.moveTo(x - r * .5, y + r * .1); ctx.lineTo(x - r * .2, y - r * .5); ctx.lineTo(x + r * .4, y - r * .3); ctx.lineTo(x + r * .3, y + r * .3)
    ctx.closePath(); ctx.fill()
  }
}
function drawMiner() {
  if (look === "vox") { Vox.miner(ctx, { mAngle, mLen, mLoad, mItems, mSpin, shake }); return }
  if (!mDots) initMDots()
  skyGrad([[0, "#33220f"], [.5, "#3f2c15"], [1, "#241609"]])
  ctx.fillStyle = "rgba(0,0,0,.18)"
  for (let i = 0; i < 3; i++) ctx.fillRect(0, 126 + i * 66 + (i * 37) % 23, W, 3)
  for (const d of mDots) {
    ctx.fillStyle = d.c
    ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2); ctx.fill()
  }
  ctx.fillStyle = "#1c1207"
  ctx.fillRect(0, 338, W, H - 338)
  // head beam + supports
  ctx.fillStyle = "#6e4526"
  ctx.fillRect(66, 32, 10, 30)
  ctx.fillRect(W - 76, 32, 10, 30)
  ctx.fillStyle = "#8a5a34"
  ctx.fillRect(56, 18, W - 112, 14)
  ctx.fillStyle = "#c9844a"
  ctx.fillRect(56, 18, W - 112, 3)
  ctx.fillStyle = "#57381f"
  ctx.fillRect(56, 29, W - 112, 3)
  // pulley wheel
  ctx.save()
  ctx.translate(M_PIVOT_X, M_PIVOT_Y)
  ctx.rotate(mSpin)
  ctx.fillStyle = "#c9844a"
  ctx.beginPath(); ctx.arc(0, 0, 14, 0, Math.PI * 2); ctx.fill()
  ctx.strokeStyle = "#8a5a34"
  ctx.lineWidth = 3
  for (let i = 0; i < 3; i++) {
    const a = i * Math.PI / 3
    ctx.beginPath()
    ctx.moveTo(-Math.cos(a) * 11, -Math.sin(a) * 11)
    ctx.lineTo(Math.cos(a) * 11, Math.sin(a) * 11)
    ctx.stroke()
  }
  ctx.fillStyle = "#24160f"
  ctx.beginPath(); ctx.arc(0, 0, 4, 0, Math.PI * 2); ctx.fill()
  ctx.restore()
  // rope
  const len = Math.max(10, mLen)
  const tx = M_PIVOT_X + Math.sin(mAngle) * len
  const ty = M_PIVOT_Y + Math.cos(mAngle) * len
  ctx.strokeStyle = "#e7d7b8"
  ctx.lineWidth = 2.5
  ctx.beginPath(); ctx.moveTo(M_PIVOT_X, M_PIVOT_Y); ctx.lineTo(tx, ty); ctx.stroke()
  drawClaw(tx, ty, mAngle)
  if (mLoad) drawItem(mLoad, tx, ty + 16)
  for (const it of mItems) drawItem(it)
}

// ---------- floors (voice descent) ----------
function fGen() {
  let last = fPlats.length ? fPlats[fPlats.length - 1].y : FLOORS_START - FLOOR_H * 2
  while (last < fDepth + H + 260) {
    last += FLOOR_H
    const gapW = 118
    const gapX = rnd(90, W - 90 - gapW)
    const deep = last > FLOORS_START + FLOOR_H * 2.5
    const chance = Math.min(.32, .06 + (last - FLOORS_START) / 5200)
    const sp1 = deep && Math.random() < chance
    const sp2 = deep && Math.random() < chance
    const skip = Math.random() < .16
    if (skip ? Math.random() < .5 : true) fPlats.push({ y: last, x0: 24, x1: gapX, spike: sp1 })
    if (skip ? Math.random() >= .5 : true) fPlats.push({ y: last, x0: gapX + gapW, x1: W - 24, spike: !sp1 && sp2 })
  }
  while (fPlats.length && fPlats[0].y < fDepth - 140) fPlats.shift()
}
function floorsStep(dt) {
  const guy = fGuy
  // direction: keys, then pointer side, then voice pitch
  let dir = 0
  if (fKeyDir) dir = fKeyDir
  else if (pointerDown && fPointDir) dir = fPointDir
  else if (analyser && phase === "run") {
    fPitch = detectPitch(data, audio.sampleRate) || 0
    if (fPitch > 460) dir = 1
    else if (fPitch > 0 && fPitch < 260) dir = -1
  }
  guy.dir = dir
  if (dir) guy.pace += dt * 11
  if (phase === "run") guy.x = Math.max(38, Math.min(W - 38, guy.x + dir * 195 * dt))
  // ceiling creeps down
  if (phase === "run" || phase === "dying") fCeil += Math.min(130, 30 + score * .8) * dt
  const prevY = guy.y
  if (guy.ground) {
    guy.y = guy.ground.y
    guy.vy = 0
    if (guy.x < guy.ground.x0 - 7 || guy.x > guy.ground.x1 + 7) {
      guy.ground = null
      guy.vy = 40
    } else if (phase === "run" && fCeil >= guy.y - 34) {
      beginDying(STR.hitCeiling)
    }
  } else {
    guy.vy = Math.min(520, guy.vy + 1500 * dt)
    guy.y += guy.vy * dt
    for (const p of fPlats) {
      if (p.y > prevY && p.y <= guy.y && guy.x > p.x0 - 7 && guy.x < p.x1 + 7) {
        if (p.spike) {
          guy.y = p.y
          beginDying(STR.hitSpikes)
          break
        }
        guy.y = p.y
        guy.vy = 0
        guy.ground = p
        sfx("tick")
        break
      }
    }
  }
  fDepth = guy.y - 140
  fGen()
  const depth = Math.floor((guy.y - FLOORS_START) / FLOOR_H)
  if (depth > score && phase === "run") {
    score = depth
    sfx("point")
  }
  if (phase === "run" && fCeil >= guy.y - 34 && !guy.ground) beginDying(STR.hitCeiling)
}
function drawClimber(x, y, pace, walking, falling) {
  const step = walking ? Math.sin(pace) * 4 : 0
  ctx.save()
  ctx.translate(x, y)
  if (falling) ctx.rotate(Math.sin(pace * 2) * .08)
  ctx.strokeStyle = "#24160f"
  ctx.lineWidth = 4
  ctx.lineCap = "round"
  ctx.beginPath(); ctx.moveTo(-3, -10); ctx.lineTo(-5 + step, 0); ctx.stroke()
  ctx.beginPath(); ctx.moveTo(3, -10); ctx.lineTo(5 - step, 0); ctx.stroke()
  ctx.fillStyle = "#e15a2b"
  ctx.fillRect(-7, -27, 14, 18)
  ctx.strokeStyle = "#c44722"
  ctx.beginPath()
  if (falling) { ctx.moveTo(-6, -24); ctx.lineTo(-13, -32); ctx.moveTo(6, -24); ctx.lineTo(13, -32) }
  else { ctx.moveTo(-6, -24); ctx.lineTo(-11, -14); ctx.moveTo(6, -24); ctx.lineTo(11, -14) }
  ctx.stroke()
  ctx.fillStyle = "#f6d7a8"
  ctx.beginPath(); ctx.arc(0, -32, 6.5, 0, Math.PI * 2); ctx.fill()
  ctx.fillStyle = "#24160f"
  ctx.beginPath(); ctx.arc(2.4, -31, 1.3, 0, Math.PI * 2); ctx.fill()
  ctx.fillStyle = "#f0b15a"
  ctx.beginPath(); ctx.arc(0, -33.5, 7.2, Math.PI, 0); ctx.fill()
  ctx.fillRect(-8.2, -35, 16.4, 3)
  ctx.fillStyle = "#ffd15a"
  ctx.fillRect(4.5, -34.5, 4, 4)
  ctx.restore()
}
function drawFloors() {
  if (look === "vox") { Vox.floors(ctx, { guyX: fGuy.x, guyY: fGuy.y, fCeil, plats: fPlats, shake }); return }
  skyGrad([[0, "#2b1d15"], [.7, "#221510"], [1, "#170e0a"]])
  const cam = fDepth
  // shaft walls
  ctx.fillStyle = "#3a2a1c"
  ctx.fillRect(0, 0, 24, H)
  ctx.fillRect(W - 24, 0, 24, H)
  ctx.strokeStyle = "rgba(0,0,0,.3)"
  ctx.lineWidth = 2
  for (let y = -(cam % 34); y < H; y += 34) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(24, y); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(W - 24, y + 17); ctx.lineTo(W, y + 17); ctx.stroke()
  }
  // floor numbers on the left wall
  ctx.font = '700 11px Silkscreen, monospace'
  ctx.fillStyle = "rgba(231,215,184,.4)"
  ctx.textAlign = "center"
  for (const p of fPlats) {
    const sy = p.y - cam
    if (sy < -20 || sy > H + 20) continue
    const n = Math.round((p.y - FLOORS_START) / FLOOR_H)
    if (n > 0) ctx.fillText(String(n), 12, sy - 6)
  }
  ctx.textAlign = "left"
  // platforms
  for (const p of fPlats) {
    const sy = p.y - cam
    if (sy < -30 || sy > H + 30) continue
    ctx.fillStyle = p.spike ? "#57424f" : "#8a5a34"
    ctx.fillRect(p.x0, sy, p.x1 - p.x0, 13)
    ctx.fillStyle = p.spike ? "#6d5560" : "#c9844a"
    ctx.fillRect(p.x0, sy, p.x1 - p.x0, 4)
    ctx.fillStyle = "rgba(0,0,0,.3)"
    ctx.fillRect(p.x0, sy + 13, p.x1 - p.x0, 3)
    if (p.spike) {
      ctx.fillStyle = "#ff4d3a"
      for (let x = p.x0 + 6; x < p.x1 - 4; x += 16) {
        ctx.beginPath()
        ctx.moveTo(x, sy); ctx.lineTo(x + 9, sy); ctx.lineTo(x + 4.5, sy - 12)
        ctx.closePath(); ctx.fill()
      }
    }
  }
  // spiked ceiling
  const cy = fCeil - cam
  if (cy > -80) {
    ctx.fillStyle = "#3d2f3a"
    ctx.fillRect(0, cy - 34, W, 34)
    ctx.fillStyle = "#57424f"
    ctx.fillRect(0, cy - 7, W, 7)
    ctx.fillStyle = "#ff4d3a"
    for (let x = 8; x < W; x += 24) {
      ctx.beginPath()
      ctx.moveTo(x, cy); ctx.lineTo(x + 12, cy); ctx.lineTo(x + 6, cy + 15)
      ctx.closePath(); ctx.fill()
    }
    const close = fGuy.y - fCeil
    if (close < 280 && phase === "run") {
      ctx.fillStyle = "rgba(255,77,58," + (.38 * (1 - close / 280) * (0.6 + 0.4 * Math.sin(performance.now() / 90))) + ")"
      ctx.fillRect(0, cy - 4, W, Math.min(H, close + 4))
    }
  }
  drawClimber(fGuy.x, fGuy.y - cam, fGuy.pace, !!fGuy.dir && !!fGuy.ground, !fGuy.ground)
}

// ---------- geometry (unchanged contracts) ----------
function overlaps(cx, cy, r, x, y0, w, h) {
  const nx = Math.max(x, Math.min(cx, x + w))
  const ny = Math.max(y0, Math.min(cy, y0 + h))
  const dx = cx - nx
  const dy = cy - ny
  return dx * dx + dy * dy < r * r
}
function inHole(bx, by, br, hole) {
  const dx = bx - (hole.x + hole.w / 2)
  const dy = by - hole.hy
  return dx * dx + dy * dy < (hole.hr - br) * (hole.hr - br)
}
function hitGate(px, py, r, g) {
  if (px + r < g.x || px - r > g.x + PW) return false
  return py - r < g.gap || py + r > g.gap + GAP
}
if (overlaps(0, 0, 5, 40, 40, 8, 8)) throw new Error("far")
if (!overlaps(3, 3, 5, 0, 0, 8, 8)) throw new Error("near")
if (!inHole(20, 40, 8, { x: 0, w: 40, hy: 40, hr: 30 })) throw new Error("hole")
if (!hitGate(100, 20, 10, { x: 90, gap: 80 })) throw new Error("gate top")
if (hitGate(100, 140, 10, { x: 90, gap: 80 })) throw new Error("gate hole")
if (hitGate(20, 20, 10, { x: 90, gap: 80 })) throw new Error("gate far")

// ---------- skies & shared scenery ----------
function skyGrad(stops) {
  const g = ctx.createLinearGradient(0, 0, 0, H)
  for (const [at, c] of stops) g.addColorStop(at, c)
  ctx.fillStyle = g
  ctx.fillRect(0, 0, W, H)
}
function initClouds(n, ymin, ymax) {
  clouds = []
  for (let i = 0; i < n; i++) {
    clouds.push({ x: rnd(0, W), y: rnd(ymin, ymax), s: rnd(.7, 1.5), v: rnd(6, 16) })
  }
}
function drawClouds(speed, tint, alpha) {
  ctx.save()
  ctx.globalAlpha = alpha == null ? .9 : alpha
  for (const c of clouds) {
    c.x -= (c.v + speed * .12) * .016
    if (c.x < -90) { c.x = W + 90; c.y = c.y }
    ctx.fillStyle = tint
    const s = c.s
    ctx.beginPath()
    ctx.arc(c.x, c.y, 13 * s, 0, Math.PI * 2)
    ctx.arc(c.x + 14 * s, c.y - 6 * s, 10 * s, 0, Math.PI * 2)
    ctx.arc(c.x + 27 * s, c.y, 12 * s, 0, Math.PI * 2)
    ctx.arc(c.x + 13 * s, c.y + 6 * s, 11 * s, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.restore()
}

// ---------- 2D sprites: dino ----------
function dino2d(x, py, dead, tilt) {
  const run = Math.sin(pace)
  const bob = dead ? 0 : Math.abs(run) * 2.4
  const lift = Math.abs(run) * 6
  ctx.save()
  ctx.translate(x, py)
  if (dead) ctx.rotate(tilt || .5)
  // tail
  ctx.strokeStyle = "#c44722"
  ctx.lineWidth = 9
  ctx.lineCap = "round"
  ctx.beginPath()
  ctx.moveTo(-10, -2 - bob * .3)
  ctx.quadraticCurveTo(-30, 10 - bob * .4, -48, -2 - Math.sin(pace * .5) * 4)
  ctx.stroke()
  // back leg / front leg
  ctx.strokeStyle = "#c44722"
  ctx.lineWidth = 7
  const l1 = Math.max(-4, run * 9)
  const l2 = Math.max(-4, -run * 9)
  ctx.beginPath(); ctx.moveTo(-2, 8); ctx.lineTo(-4 + l1, 22); ctx.stroke()
  ctx.beginPath(); ctx.moveTo(8, 8); ctx.lineTo(10 + l2, 22); ctx.stroke()
  // body
  ctx.fillStyle = "#e15a2b"
  ctx.beginPath(); ctx.ellipse(0, -bob, 22, 13, 0, 0, Math.PI * 2); ctx.fill()
  // belly
  ctx.fillStyle = "#f6d7a8"
  ctx.beginPath(); ctx.ellipse(4, 2 - bob, 13, 7, 0, 0, Math.PI * 2); ctx.fill()
  // back ridges
  ctx.fillStyle = "#c44722"
  for (let i = 0; i < 3; i++) {
    ctx.beginPath()
    ctx.moveTo(-14 + i * 9, -11 - bob)
    ctx.lineTo(-10 + i * 9, -16 - bob)
    ctx.lineTo(-6 + i * 9, -11 - bob)
    ctx.fill()
  }
  // head
  ctx.fillStyle = "#e15a2b"
  ctx.beginPath(); ctx.ellipse(20, -14 - bob, 13, 10, -.35, 0, Math.PI * 2); ctx.fill()
  ctx.beginPath(); ctx.ellipse(32, -10 - bob, 7.5, 4.8, .15, 0, Math.PI * 2); ctx.fill()
  // eye
  ctx.fillStyle = "#fff6ea"
  ctx.beginPath(); ctx.arc(23, -17 - bob, 3, 0, Math.PI * 2); ctx.fill()
  ctx.fillStyle = "#24160f"
  ctx.beginPath(); ctx.arc(24, -17 - bob, 1.6, 0, Math.PI * 2); ctx.fill()
  // arm
  ctx.strokeStyle = "#e7a35a"
  ctx.lineWidth = 5
  ctx.beginPath(); ctx.moveTo(8, 2 - bob); ctx.lineTo(15, 8 - bob + (6 - lift) * .3); ctx.stroke()
  ctx.restore()
}
function dustPuff() {
  particles.push({ x: 138 + rnd(0, 16), y: LINE - 2, vx: rnd(-60, -10), vy: rnd(-50, -8), life: rnd(.3, .55), t: 0, s: rnd(2, 4), c: "rgba(222,180,120,.7)" })
}

// ---------- 2D sprites: moth (pixel bird) ----------
function drawBird(px, py, wingPhase, vyv) {
  const s = 6
  const ox = Math.round(px / s) * s
  const oy = Math.round(py / s) * s
  const put = (dx, dy, c) => { ctx.fillStyle = c; ctx.fillRect(ox + dx * s, oy + dy * s, s, s) }
  const frame = Math.floor(wingPhase * 3) % 3      // 0 up, 1 mid, 2 down
  const tilt = Math.max(-1, Math.min(1, vyv / 420))
  ctx.save()
  ctx.translate(ox + 3 * s, oy + 3 * s)
  ctx.rotate(tilt * .35)
  ctx.translate(-(ox + 3 * s), -(oy + 3 * s))
  for (let i = -2; i <= 1; i++) for (let j = -1; j <= 1; j++) put(i, j, "#f4e7d4")
  put(-3, 0, "#c4843a"); put(-4, 0, "#c4843a"); put(-3, -1, "#c4843a")
  put(2, -1, "#f4e7d4"); put(2, 0, "#f4e7d4"); put(3, -1, "#f4e7d4")
  put(2, -1, "#140e0c"); put(3, 0, "#ff4d3a"); put(4, 0, "#ff4d3a")
  const wy = frame === 0 ? -2 : frame === 2 ? 2 : 0
  for (let i = -1; i <= 1; i++) put(i, wy, "#e7a35a")
  put(0, wy + (frame === 0 ? -1 : frame === 2 ? 1 : 0), "#e7a35a")
  if (frame === 0) { put(-2, -2, "#f08a3a"); put(-1, -2, "#f08a3a") }
  ctx.restore()
  return tilt
}
function column(x, y, h) {
  const y1 = y + h
  for (let yy = Math.max(0, y); yy < y1; yy += 6) {
    const shade = ((x / 6) % 2) ? "#3d2f3a" : "#4a3a45"
    for (let xx = x; xx < x + PW; xx += 6) {
      const edge = (xx === x || xx === x + PW - 6) ? "#332730" : (((xx / 6) + (yy / 6)) % 2 ? shade : "#57424f")
      cell(xx, yy, edge)
    }
  }
}
function cell(x, y, color) {
  ctx.fillStyle = color
  ctx.fillRect(x, y, 6, 6)
}
function drawGate(g) {
  const x = Math.round(g.x / 6) * 6
  column(x, 0, g.gap)
  column(x, g.gap + GAP, GROUND - g.gap - GAP)
  ctx.fillStyle = "#4f7a4a"
  const lip = Math.round(g.gap / 6) * 6
  ctx.fillRect(x - 6, lip - 6, PW + 12, 6)
  ctx.fillRect(x - 6, Math.round((g.gap + GAP) / 6) * 6, PW + 12, 6)
  ctx.fillStyle = "#69995f"
  ctx.fillRect(x - 6, lip - 6, PW + 12, 2)
  ctx.fillRect(x - 6, Math.round((g.gap + GAP) / 6) * 6, PW + 12, 2)
}

// ---------- 2D sprites: balloon ----------
function balloon2d(x, py, tilt, t) {
  ctx.save()
  ctx.translate(x, py)
  ctx.rotate(tilt * .3)
  // envelope
  ctx.fillStyle = "#e25c2a"
  ctx.beginPath()
  ctx.moveTo(0, -30)
  ctx.bezierCurveTo(-24, -30, -26, -6, -10, 6)
  ctx.lineTo(10, 6)
  ctx.bezierCurveTo(26, -6, 24, -30, 0, -30)
  ctx.fill()
  // stripes
  ctx.fillStyle = "#f6d7a8"
  ctx.beginPath()
  ctx.moveTo(-6, -30)
  ctx.bezierCurveTo(-9, -18, -9, -4, -4, 5)
  ctx.lineTo(4, 5)
  ctx.bezierCurveTo(9, -4, 9, -18, 6, -30)
  ctx.fill()
  ctx.fillStyle = "rgba(255,246,234,.85)"
  ctx.beginPath(); ctx.ellipse(-9, -20, 4, 8, .3, 0, Math.PI * 2); ctx.fill()
  // ropes + basket
  ctx.strokeStyle = "#8a5a34"
  ctx.lineWidth = 1.5
  ctx.beginPath(); ctx.moveTo(-8, 6); ctx.lineTo(-5, 16); ctx.moveTo(8, 6); ctx.lineTo(5, 16); ctx.stroke()
  ctx.fillStyle = "#c9844a"
  ctx.fillRect(-7, 16, 14, 9)
  ctx.fillStyle = "#a8663a"
  ctx.fillRect(-7, 16, 14, 3)
  // gentle bob
  ctx.restore()
}

// ---------- draw: dino scene ----------
function drawHop() {
  if (look === "vox") {
    Vox.hop(ctx, { W, H, LINE, y, pace, stones, drift, shake })
    return
  }
  skyGrad([[0, "#8fd3f0"], [.62, "#c8e9f8"], [1, "#f2e2bd"]])
  // sun
  ctx.fillStyle = "rgba(255,209,90,.35)"
  ctx.beginPath(); ctx.arc(640, 78, 52, 0, Math.PI * 2); ctx.fill()
  ctx.fillStyle = "#ffd15a"
  ctx.beginPath(); ctx.arc(640, 78, 34, 0, Math.PI * 2); ctx.fill()
  drawClouds(60, "#ffffff", .85)
  // far dunes
  ctx.fillStyle = "#d9b076"
  ctx.beginPath()
  ctx.moveTo(0, 250)
  for (let i = 0; i <= 4; i++) ctx.quadraticCurveTo(60 + i * 200 - (drift * .18) % 200, 218, 130 + i * 200 - (drift * .18) % 200, 250)
  ctx.lineTo(W, 300); ctx.lineTo(0, 300); ctx.fill()
  // near dunes
  ctx.fillStyle = "#e8c27a"
  ctx.beginPath()
  ctx.moveTo(0, 290)
  for (let i = 0; i <= 5; i++) ctx.quadraticCurveTo(70 + i * 170 - (drift * .4) % 170, 258, 150 + i * 170 - (drift * .4) % 170, 290)
  ctx.lineTo(W, 330); ctx.lineTo(0, 330); ctx.fill()
  // ground
  ctx.fillStyle = "#f0cf8e"
  ctx.fillRect(0, LINE, W, H - LINE)
  ctx.fillStyle = "#e0b878"
  const off = (drift % 34)
  for (let x = -off; x < W; x += 34) ctx.fillRect(x, LINE + 12, 16, 4)
  for (let x = -off + 17; x < W; x += 34) ctx.fillRect(x, LINE + 30, 10, 4)
  ctx.fillStyle = "#c9985e"
  ctx.fillRect(0, LINE, W, 4)
  // stones
  stones.forEach(s => {
    ctx.fillStyle = "#a8744f"
    ctx.beginPath()
    ctx.moveTo(s.x, LINE)
    ctx.lineTo(s.x + 3, LINE - s.h + 8)
    ctx.quadraticCurveTo(s.x + s.w / 2, LINE - s.h - 10, s.x + s.w - 3, LINE - s.h + 8)
    ctx.lineTo(s.x + s.w, LINE)
    ctx.fill()
    ctx.fillStyle = "#c99263"
    ctx.beginPath()
    ctx.moveTo(s.x + 4, LINE - 4)
    ctx.lineTo(s.x + 6, LINE - s.h + 12)
    ctx.quadraticCurveTo(s.x + s.w / 2, LINE - s.h - 2, s.x + s.w - 8, LINE - s.h + 16)
    ctx.lineTo(s.x + s.w - 8, LINE - 4)
    ctx.fill()
    ctx.fillStyle = "#7c5033"
    ctx.fillRect(s.x + 2, LINE - 6, s.w - 4, 6)
  })
  dino2d(150, y, phase === "dying", phase === "dying" ? .9 : 0)
}

// ---------- draw: flap scene ----------
let stars = null
function initStars() {
  stars = []
  for (let i = 0; i < 26; i++) stars.push({ x: rnd(0, W), y: rnd(8, 200), s: rnd(1, 2.4), p: rnd(0, 6) })
}
function drawFlap() {
  if (look === "vox") {
    Vox.flap(ctx, { W, H, GROUND, BX, y, pace, gates, drift, shake })
    return
  }
  if (!stars) initStars()
  skyGrad([[0, "#1b2340"], [.6, "#33406e"], [1, "#5a5f8f"]])
  const t = performance.now() / 1000
  stars.forEach(st => {
    ctx.globalAlpha = .45 + .45 * Math.sin(t * 2 + st.p)
    ctx.fillStyle = "#f4e7d4"
    ctx.fillRect(st.x, st.y, st.s, st.s)
  })
  ctx.globalAlpha = 1
  // crescent moon
  ctx.fillStyle = "#f4e7d4"
  ctx.beginPath(); ctx.arc(660, 60, 26, 0, Math.PI * 2); ctx.fill()
  ctx.fillStyle = "#33406e"
  ctx.beginPath(); ctx.arc(670, 54, 22, 0, Math.PI * 2); ctx.fill()
  // far treeline
  ctx.fillStyle = "#20263f"
  for (let i = -1; i < 7; i++) {
    const tx = ((i * 150 - drift * .22) % 1050 + 1050) % 1050 - 60
    for (let k = 0; k < 4; k++) {
      const th = 46 + ((i * 7 + k * 13) % 30)
      ctx.beginPath()
      ctx.moveTo(tx + k * 36, 260)
      ctx.lineTo(tx + k * 36 + 16, 260 - th)
      ctx.lineTo(tx + k * 36 + 32, 260)
      ctx.fill()
    }
  }
  ctx.fillRect(0, 258, W, GROUND - 258)
  // near treeline
  ctx.fillStyle = "#161b2e"
  for (let i = -1; i < 8; i++) {
    const tx = ((i * 120 - drift * .5) % 960 + 960) % 960 - 60
    for (let k = 0; k < 3; k++) {
      const th = 34 + ((i * 5 + k * 11) % 26)
      ctx.beginPath()
      ctx.moveTo(tx + k * 42, 300)
      ctx.lineTo(tx + k * 42 + 20, 300 - th)
      ctx.lineTo(tx + k * 42 + 40, 300)
      ctx.fill()
    }
  }
  ctx.fillRect(0, 298, W, GROUND - 298)
  // ground
  ctx.fillStyle = "#241814"
  ctx.fillRect(0, GROUND, W, H - GROUND)
  ctx.fillStyle = "#e7a35a"
  const off = Math.floor(drift / 6) * 6
  for (let x = -off; x < W; x += 24) ctx.fillRect(x, GROUND, 12, 6)
  gates.forEach(drawGate)
  drawBird(BX, y, pace, vy)
}

// ---------- draw: float scene ----------
function drawFloat() {
  if (look === "vox") {
    Vox.float(ctx, { W, H, y, holes, drift, shake })
    return
  }
  skyGrad([[0, "#ffb36b"], [.45, "#ffd9a0"], [1, "#9fd4ec"]])
  // low sun
  ctx.fillStyle = "rgba(255,209,90,.4)"
  ctx.beginPath(); ctx.arc(400, 330, 90, 0, Math.PI * 2); ctx.fill()
  ctx.fillStyle = "#ffd15a"
  ctx.beginPath(); ctx.arc(400, 330, 64, 0, Math.PI * 2); ctx.fill()
  // wind streaks
  ctx.strokeStyle = "rgba(255,246,234,.4)"
  ctx.lineWidth = 2
  for (let i = 0; i < 5; i++) {
    const sx = ((i * 210 - drift * .9) % 950 + 950) % 950 - 80
    const sy = 50 + i * 46
    ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(sx + 60, sy); ctx.stroke()
  }
  drawClouds(40, "#fff0dd", .8)
  // hills
  ctx.fillStyle = "#c9844a"
  ctx.beginPath()
  ctx.moveTo(0, 340)
  for (let i = 0; i <= 6; i++) ctx.quadraticCurveTo(80 + i * 150 - (drift * .25) % 150, 296, 160 + i * 150 - (drift * .25) % 150, 340)
  ctx.lineTo(W, 360); ctx.lineTo(0, 360); ctx.fill()
  // rings
  holes.forEach(hole => {
    ctx.strokeStyle = "#e25c2a"
    ctx.lineWidth = 7
    ctx.beginPath(); ctx.arc(hole.x + hole.w / 2, hole.hy, hole.hr, 0, Math.PI * 2); ctx.stroke()
    ctx.strokeStyle = "#ffd15a"
    ctx.lineWidth = 3
    ctx.beginPath(); ctx.arc(hole.x + hole.w / 2, hole.hy, hole.hr + 5, 0, Math.PI * 2); ctx.stroke()
  })
  balloon2d(170, y, Math.max(-1, Math.min(1, (H - 48 - y) * .012)), 0)
}

// ---------- juice overlay (both engines) ----------
function drawOverlay(dt) {
  // particles
  particles = particles.filter(p => p.t < p.life)
  for (const p of particles) {
    p.t += dt
    p.x += p.vx * dt
    p.y += p.vy * dt
    p.vy += 700 * dt
    ctx.globalAlpha = Math.max(0, 1 - p.t / p.life)
    ctx.fillStyle = p.c
    ctx.fillRect(p.x, p.y, p.s, p.s)
  }
  ctx.globalAlpha = 1
  // popups
  popups = popups.filter(p => p.t < .8)
  ctx.textAlign = "center"
  for (const p of popups) {
    p.t += dt
    ctx.globalAlpha = Math.max(0, 1 - p.t / .8)
    ctx.fillStyle = p.color
    ctx.font = '700 22px Silkscreen, monospace'
    ctx.fillText(p.txt, p.x, p.y - p.t * 46)
  }
  ctx.globalAlpha = 1
  ctx.textAlign = "left"
  // best
  if (best > 0) {
    ctx.font = '700 13px Silkscreen, monospace'
    ctx.fillStyle = "rgba(20,14,12,.62)"
    ctx.fillRect(W / 2 - 34, 10, 68, 22)
    ctx.fillStyle = "#ffd15a"
    ctx.fillText("★ " + best, W / 2 - 16, 26)
  }
  // volume meter
  const mx = 14, my = H - 62, mw = 150, mh = 12
  ctx.fillStyle = "rgba(20,14,12,.62)"
  ctx.fillRect(mx - 3, my - 3, mw + 6, mh + 6)
  ctx.fillStyle = "#3a2c24"
  ctx.fillRect(mx, my, mw, mh)
  const norm = Math.max(0, Math.min(1, smooth / .2))
  ctx.fillStyle = smooth >= thresh ? "#8fd18a" : "#e7a35a"
  ctx.fillRect(mx, my, mw * norm, mh)
  if (thresh > 0) {
    const tx = mx + mw * (thresh / .2)
    ctx.fillStyle = "#f3e6d0"
    ctx.fillRect(tx, my - 3, 2, mh + 6)
  }
  // floors: pitch direction lamps
  if (game === "floors") {
    ctx.font = '700 15px Silkscreen, monospace'
    ctx.textAlign = "center"
    const active = phase === "run" ? (fKeyDir || (pointerDown && fPointDir) || (fPitch > 460 ? 1 : fPitch > 0 && fPitch < 260 ? -1 : 0)) : 0
    ctx.fillStyle = active < 0 ? "#ffd15a" : "rgba(231,163,90,.35)"
    ctx.fillText("◀", mx + mw + 22, my + 11)
    ctx.fillStyle = active > 0 ? "#ffd15a" : "rgba(231,163,90,.35)"
    ctx.fillText("▶", mx + mw + 46, my + 11)
    ctx.textAlign = "left"
  }
  // countdown
  if (phase === "count") {
    const n = Math.ceil(countT / .5)
    ctx.textAlign = "center"
    ctx.font = '700 84px "Pixelify Sans", Silkscreen, monospace'
    ctx.fillStyle = "rgba(20,14,12,.55)"
    ctx.fillText(String(n), W / 2 + 4, H / 2 + 30)
    ctx.fillStyle = "#f3e6d0"
    ctx.fillText(String(n), W / 2, H / 2 + 26)
    ctx.textAlign = "left"
  }
}

// ---------- HUD ----------
function paintHud() {
  scoreEl.textContent = String(score)
  timeEl.textContent = String(left)
  ring.style.strokeDashoffset = String(RING * (1 - left / 30))
}

// ---------- round end ----------
function endRound(why) {
  phase = "idle"
  running = false
  document.body.classList.remove("live")
  lamp.textContent = STR.offAir
  clearInterval(clock)
  if (raf) cancelAnimationFrame(raf)
  if (stream) stream.getTracks().forEach(t => t.stop())
  if (audio) audio.close().catch(() => {})
  stream = audio = analyser = raf = clock = null
  go.textContent = STR.playAgain
  const statLabelEl = document.querySelector(".stat span")
  kicker.textContent = score + " " + ((hookFor(game) || game === "miner" || game === "floors") && statLabelEl ? statLabelEl.textContent : STR.passed)
  heardEl.textContent = why
  if (score > best) { best = score; saveBest() }
  paintHud()
}
function beginDying(why) {
  if (phase !== "run") return
  phase = "dying"
  dyingT = .7
  shake = 9
  sfx("crash")
  const bx = game === "floors" ? fGuy.x : (look === "vox" ? 200 : 150)
  const by = game === "floors" ? fGuy.y - fDepth : y
  burst(bx, by, 26, ["#e15a2b", "#f6d7a8", "#ffd15a", "#c44722"], 220)
  clearInterval(clock)
  heardEl.textContent = why
}

// ---------- gameplay step ----------
function step(dt) {
  if (analyser) {
    analyser.getByteTimeDomainData(data)
    let sum = 0
    for (let i = 0; i < data.length; i++) { const v = (data[i] - 128) / 128; sum += v * v }
    level = Math.sqrt(sum / data.length)
  } else level = 0
  const keyBoost = pointerDown ? (game === "float" ? pointerLift * .16 : .13) : (keyLift ? (game === "float" ? .1 : .13) : 0)
  level = Math.max(level, keyBoost)
  smooth += (level - smooth) * Math.min(1, dt * 16)
  if (smooth < .012) smooth = 0

  const speed = Math.min(BASE_SPEED[game] * 1.85, BASE_SPEED[game] * (1 + score * .028))

  if (phase === "count") {
    countT -= dt
    drift += speed * .25 * dt
    const n = Math.ceil(countT / .5)
    if (countT <= 0) {
      phase = "run"
      sfx("go")
      heardEl.textContent = STR.hints[hintKey] || ""
      clearInterval(clock)
      clock = setInterval(() => {
        left -= 1
        if (left <= 0) {
          clearInterval(clock)
          if (hookFor(game) || game === "miner" || game === "floors") endRound(STR.timeUp)
          else beginDying(STR.timeUp)
        }
      }, 1000)
    } else if (n !== step.lastN) { step.lastN = n; sfx("tick") }
  }

  if (phase === "dying") {
    dyingT -= dt
    vy += GRAV[game] * dt
    if (game !== "float") y = Math.min(LINE - 22, y + vy * dt)
    if (dyingT <= 0) endRound(heardEl.textContent)
  }

  const active = phase !== "idle"
  if (active && game === "dino") {
    const flying = phase === "run" && smooth > thresh
    if (flying) vy = Math.max(VMIN.dino, vy - THRUST.dino * dt)
    else vy = Math.min(VMAX.dino, vy + GRAV.dino * dt)
    y += vy * dt
    const ceil = 78
    if (y < ceil) { y = ceil; vy = Math.max(vy, 0) }
    if (y > LINE - 22) { y = LINE - 22; vy = 0; if (Math.abs(vy) < 1 && Math.sin(pace) > .9) dustPuff() }
    pace += dt * (flying ? 14 : 12)
    drift += speed * dt
    if (!flying && y >= LINE - 23 && Math.sin(pace * .5) > .95) dustPuff()
    stones.forEach(s => { if (phase === "run" || phase === "count" || phase === "dying") s.x -= (phase === "dying" ? speed * .3 : speed) * dt })
    spawn -= dt
    if (spawn <= 0 && phase === "run") {
      stones.push({ x: W + 20, w: 36 + Math.random() * 40, h: 42 + Math.random() * 56, scored: false })
      spawn = (1.15 + Math.random() * .55) * (BASE_SPEED.dino / speed)
    }
    stones = stones.filter(s => s.x > -80)
    for (const s of stones) {
      if (phase !== "run") continue
      if (!s.scored && s.x + s.w < 150) {
        s.scored = true
        score += 1
        sfx("point")
        const clear = (LINE - s.h) - y
        if (clear > 0 && clear < 34) { score += 1; popup(s.x + s.w / 2, y - 46, "+1", "#8fd18a"); sfx("bonus") }
        else popup(s.x + s.w / 2, y - 46, "+1", "#ffd15a")
      }
      if (overlaps(150, y, 18, s.x, LINE - s.h, s.w, s.h)) { beginDying(STR.hitStone); break }
    }
    drawHop()
  } else if (active && game === "flap") {
    const flying = phase === "run" && smooth > thresh
    if (flying) vy = Math.max(VMIN.flap, vy - THRUST.flap * dt)
    else vy = Math.min(VMAX.flap, vy + GRAV.flap * dt)
    y += vy * dt
    pace += dt * (flying ? 15 : 8)
    drift += speed * dt
    if (y < 20 || y > GROUND - 16) {
      y = Math.max(20, Math.min(GROUND - 16, y))
      beginDying(y < 20 ? "Hit the top." : "Hit the ground.")
    }
    gates.forEach(g => { if (phase !== "idle") g.x -= (phase === "dying" ? speed * .3 : speed) * dt })
    spawn -= dt
    if (spawn <= 0 && phase === "run") {
      gates.push({ x: W + 8, gap: 30 + Math.floor(Math.random() * 22) * 6, scored: false })
      spawn = 1.55 * (BASE_SPEED.flap / speed)
    }
    gates = gates.filter(g => g.x > -90)
    for (const g of gates) {
      if (phase !== "run") continue
      if (hitGate(BX, y, 16, g)) { beginDying(STR.hitWall); break }
      if (!g.scored && g.x + PW < BX) {
        g.scored = true
        score += 1
        sfx("point")
        const edge = Math.min(Math.abs(y - g.gap), Math.abs(y - (g.gap + GAP)))
        if (edge < 24) { score += 1; popup(BX + 40, y - 40, "+1", "#8fd18a"); sfx("bonus") }
        else popup(BX + 40, y - 40, "+1", "#ffd15a")
      }
    }
    drawFlap()
  } else if (active && game === "miner") {
    minerStep(dt)
    drawMiner()
  } else if (active && game === "floors") {
    floorsStep(dt)
    drawFloors()
  } else if (active && hookFor(game)) {
    const hk = hookFor(game)
    hk.step(dt)
    hk.draw()
  } else if (active) {
    const target = H - 48 - Math.min(smooth / .16, 1) * (H - 96)
    y += (target - y) * Math.min(1, dt * 3.2)
    drift += speed * dt
    holes.forEach(h => { if (phase !== "idle") h.x -= (phase === "dying" ? speed * .3 : speed) * dt })
    spawn -= dt
    if (spawn <= 0 && phase === "run") {
      holes.push({ x: W + 10, w: 54, hy: 90 + Math.random() * 180, hr: 62, scored: false })
      spawn = 1.7 * (BASE_SPEED.float / speed)
    }
    holes = holes.filter(h => h.x > -80)
    for (const h of holes) {
      const over = 170 > h.x && 170 < h.x + h.w
      if (phase === "run" && over && !inHole(170, y, 16, h)) { beginDying(STR.missedHole); break }
      if (!h.scored && h.x + h.w < 170) {
        h.scored = true
        if (phase === "run") {
          score += 1
          sfx("point")
          const d = Math.abs(y - h.hy)
          if (d < 26) { score += 1; popup(h.x + h.w / 2, y - 46, "+1", "#8fd18a"); sfx("bonus") }
          else popup(h.x + h.w / 2, y - 46, "+1", "#ffd15a")
        }
      }
    }
    drawFloat()
  } else {
    // idle: keep the scene on screen
    if (game === "dino") drawHop()
    else if (game === "flap") drawFlap()
    else if (game === "miner") drawMiner()
    else if (game === "floors") drawFloors()
    else if (hookFor(game)) hookFor(game).draw()
    else drawFloat()
  }

  shake = Math.max(0, shake - dt * 26)
  drawOverlay(dt)
  paintHud()
}
function frame(now) {
  if (!running) return
  const dt = Math.min(.033, (now - frame.last) / 1000 || .016)
  frame.last = now
  ctx.save()
  if (shake > 0 && look !== "vox") ctx.translate(rnd(-shake, shake) * .5, rnd(-shake, shake) * .5)
  step(dt)
  ctx.restore()
  if (running) raf = requestAnimationFrame(frame)
}

// ---------- start ----------
async function start() {
  if (running || starting) return
  starting = true
  running = true
  phase = "count"
  countT = 1.5
  step.lastN = 4
  document.body.classList.add("live")
  lamp.textContent = STR.onAir
  go.textContent = STR.stop
  heardEl.textContent = STR.hints[hintKey] || ""
  score = 0
  left = 30
  loadBest()
  y = game === "dino" ? LINE - 22 : game === "flap" ? 180 : H / 2
  vy = 0
  pace = 0
  smooth = 0
  particles = []
  popups = []
  stones = [{ x: 620, w: 48, h: 64, scored: false }]
  holes = [{ x: 680, w: 54, hy: 170, hr: 62, scored: false }]
  gates = [{ x: 720, gap: 100, scored: false }]
  if (game === "miner") {
    mItems = []
    for (let i = 0; i < 7; i++) spawnItem()
    mAngle = rnd(-.9, .9)
    mDir = 1
    mLen = 0
    mState = "swing"
    mLoad = null
    mSpin = 0
  }
  if (game === "floors") {
    fPlats = []
    fGuy = { x: 400, y: FLOORS_START, vy: 0, ground: null, dir: 0, pace: 0 }
    fDepth = FLOORS_START - 140
    fCeil = FLOORS_START - 620
    fPitch = 0
    fGen()
  }
  const hk0 = hookFor(game)
  if (hk0 && hk0.reset) hk0.reset()
  spawn = game === "dino" ? 1.6 : game === "flap" ? 1.8 : 2
  clearInterval(clock)
  frame.last = performance.now()
  raf = requestAnimationFrame(frame)
  starting = false
  // the mic attaches in the background; if the permission prompt hangs
  // (embedded browsers, kiosks) the round simply continues on Space / mouse
  try {
    if (!navigator.mediaDevices) throw new Error("no mic")
    const mic = navigator.mediaDevices.getUserMedia({ audio: true })
    const gate = new Promise((_, rej) => setTimeout(() => rej(new Error("slow")), 1500))
    stream = await Promise.race([mic, gate])
    if (!running) { stream.getTracks().forEach(t => t.stop()); return }
    audio = new AudioContext()
    const source = audio.createMediaStreamSource(stream)
    analyser = audio.createAnalyser()
    analyser.fftSize = 1024
    source.connect(analyser)
    data = new Uint8Array(analyser.fftSize)
  } catch (e) {
    if (stream) { stream.getTracks().forEach(t => t.stop()); stream = null }
    stream = audio = analyser = null
    heardEl.textContent = STR.micBlocked
  }
}
go.addEventListener("click", () => {
  if (running) {
    const why = STR.stopped
    phase = "idle"
    endRound(why)
    return
  }
  start()
})

// ---------- input (every game, every look) ----------
function pointerAmount(e) {
  const r = canvas.getBoundingClientRect()
  return Math.max(0, Math.min(1, 1 - (e.clientY - r.top) / Math.max(1, r.height)))
}
function pointerSide(e) {
  const r = canvas.getBoundingClientRect()
  return (e.clientX - r.left) < r.width / 2 ? -1 : 1
}
canvas.style.cursor = "pointer"
window.addEventListener("keydown", (e) => {
  if (e.repeat) return
  if (game === "floors" && (e.code === "ArrowLeft" || e.code === "ArrowRight")) {
    e.preventDefault()
    fKeyDir = e.code === "ArrowLeft" ? -1 : 1
    if (!running) start()
    return
  }
  if (e.code !== "Space" && e.code !== "ArrowUp") return
  e.preventDefault()
  keyLift = true
  if (game === "miner") fireEdge = true
  if (!running) start()
})
window.addEventListener("keyup", (e) => {
  if (e.code === "Space" || e.code === "ArrowUp") keyLift = false
  if (game === "floors" && (e.code === "ArrowLeft" || e.code === "ArrowRight")) fKeyDir = 0
})
canvas.addEventListener("pointerdown", (e) => {
  pointerDown = true
  pointerLift = pointerAmount(e)
  if (game === "floors") fPointDir = pointerSide(e)
  else if (game === "miner" && running) fireEdge = true
  try { canvas.setPointerCapture(e.pointerId) } catch (err) {}
  if (!running) start()
})
canvas.addEventListener("pointermove", (e) => {
  if (pointerDown) {
    pointerLift = pointerAmount(e)
    if (game === "floors") fPointDir = pointerSide(e)
  }
})
window.addEventListener("pointerup", () => { pointerDown = false })
window.addEventListener("pointercancel", () => { pointerDown = false })

if (game === "flap" && look !== "vox") canvas.style.imageRendering = "pixelated"
initClouds(game === "flap" ? 4 : 5, game === "flap" ? 60 : 40, 140)
if (game === "dino") {
  stones = [{ x: 560, w: 48, h: 64, scored: false }, { x: 760, w: 36, h: 90, scored: false }]
  drawHop()
} else if (game === "flap") {
  gates = [{ x: 500, gap: 120, scored: false }, { x: 720, gap: 66, scored: false }]
  y = 170
  drawFlap()
} else if (game === "miner") {
  mAngle = .5
  for (let i = 0; i < 6; i++) spawnItem()
  drawMiner()
} else if (game === "floors") {
  fPlats = []
  fGuy = { x: 400, y: FLOORS_START, vy: 0, ground: null, dir: 0, pace: 0 }
  fDepth = FLOORS_START - 140
  fCeil = FLOORS_START - 620
  fGen()
  drawFloors()
} else {
  holes = [{ x: 560, w: 54, hy: 180, hr: 62, scored: false }]
  y = 180
  drawFloat()
}
paintHud()
