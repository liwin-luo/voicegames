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
const RING = 97.4
const LINE = 308
let running = false
let left = 30
let score = 0
let stream, audio, analyser, data, raf, level = 0
let y = LINE - 22
let pace = 0
let vy = 0
let stones = []
let holes = []
let gates = []
let spawn = 0
let drift = 0
let clock = null
const GAP = 120
const PW = 54
const GROUND = 330
const BX = 156

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
if (overlaps(0, 0, 5, 40, 40, 8, 8)) throw new Error("far")
if (!overlaps(3, 3, 5, 0, 0, 8, 8)) throw new Error("near")
if (!inHole(20, 40, 8, { x: 0, w: 40, hy: 40, hr: 30 })) throw new Error("hole")
function hitGate(px, py, r, g) {
  if (px + r < g.x || px - r > g.x + PW) return false
  return py - r < g.gap || py + r > g.gap + GAP
}
if (!hitGate(100, 20, 10, { x: 90, gap: 80 })) throw new Error("gate top")
if (hitGate(100, 140, 10, { x: 90, gap: 80 })) throw new Error("gate hole")
if (hitGate(20, 20, 10, { x: 90, gap: 80 })) throw new Error("gate far")

function dino(x, py) {
  const lift = Math.abs(Math.sin(pace)) * 8
  ctx.strokeStyle = "#f4e7d4"
  ctx.fillStyle = "#f4e7d4"
  ctx.lineWidth = 7
  ctx.lineCap = "round"
  ctx.beginPath()
  ctx.moveTo(x - 8, py + 2)
  ctx.quadraticCurveTo(x - 34, py + 18, x - 50, py - 4)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(x - 4, py + 8)
  ctx.lineTo(x - 8, py + 22 - lift)
  ctx.stroke()
  ctx.beginPath()
  ctx.ellipse(x, py, 22, 13, 0, 0, Math.PI * 2)
  ctx.fill()
  ctx.beginPath()
  ctx.ellipse(x + 20, py - 14, 13, 10, -0.35, 0, Math.PI * 2)
  ctx.fill()
  ctx.beginPath()
  ctx.ellipse(x + 32, py - 10, 7, 4.5, 0.15, 0, Math.PI * 2)
  ctx.fill()
  ctx.fillStyle = "#140e0c"
  ctx.beginPath()
  ctx.arc(x + 24, py - 16, 1.8, 0, Math.PI * 2)
  ctx.fill()
  ctx.strokeStyle = "#e7a35a"
  ctx.beginPath()
  ctx.moveTo(x + 8, py + 8)
  ctx.lineTo(x + 14, py + 22 - (8 - lift))
  ctx.stroke()
}
function drawHop() {
  if (look === "vox") {
    Vox.hop(ctx, { W, H, LINE, y, pace, stones, drift })
    return
  }
  ctx.fillStyle = "#140e0c"
  ctx.fillRect(0, 0, W, H)
  ctx.fillStyle = "#e7a35a"
  ctx.globalAlpha = .35
  ctx.beginPath()
  ctx.arc(640, 78, 36, 0, Math.PI * 2)
  ctx.fill()
  ctx.globalAlpha = 1
  ctx.strokeStyle = "rgba(244,231,212,.35)"
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(0, LINE)
  ctx.lineTo(W, LINE)
  ctx.stroke()
  stones.forEach(s => {
    ctx.fillStyle = "#3a2922"
    ctx.fillRect(s.x, LINE - s.h, s.w, s.h)
    ctx.fillStyle = "#e7a35a"
    ctx.fillRect(s.x, LINE - s.h, s.w, 4)
  })
  dino(150, y)
}
function drawFloat() {
  if (look === "vox") {
    Vox.float(ctx, { W, H, y, holes, drift })
    return
  }
  ctx.fillStyle = "#140e0c"
  ctx.fillRect(0, 0, W, H)
  holes.forEach(hole => {
    ctx.fillStyle = "#2a1c16"
    ctx.fillRect(hole.x, 0, hole.w, H)
    ctx.globalCompositeOperation = "destination-out"
    ctx.beginPath()
    ctx.arc(hole.x + hole.w / 2, hole.hy, hole.hr, 0, Math.PI * 2)
    ctx.fill()
    ctx.globalCompositeOperation = "source-over"
    ctx.strokeStyle = "#e7a35a"
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.arc(hole.x + hole.w / 2, hole.hy, hole.hr, 0, Math.PI * 2)
    ctx.stroke()
  })
  ctx.beginPath()
  ctx.arc(170, y, 18, 0, Math.PI * 2)
  ctx.fillStyle = "#f4e7d4"
  ctx.fill()
  ctx.beginPath()
  ctx.moveTo(164, y + 16)
  ctx.lineTo(176, y + 16)
  ctx.lineTo(170, y + 28)
  ctx.fillStyle = "#e7a35a"
  ctx.fill()
}
function cell(x, y, color) {
  ctx.fillStyle = color
  ctx.fillRect(x, y, 6, 6)
}
function drawBird(px, py, up) {
  const s = 6
  const ox = Math.round(px / s) * s
  const oy = Math.round(py / s) * s
  const put = (dx, dy, c) => cell(ox + dx * s, oy + dy * s, c)
  put(-4, 0, "#c4843a")
  put(-3, 0, "#c4843a")
  put(-3, -1, "#c4843a")
  for (let i = -2; i <= 1; i++) for (let j = -1; j <= 1; j++) put(i, j, "#f4e7d4")
  put(2, -1, "#f4e7d4")
  put(2, 0, "#f4e7d4")
  put(3, -1, "#f4e7d4")
  put(2, -1, "#140e0c")
  put(3, 0, "#ff4d3a")
  put(4, 0, "#ff4d3a")
  const wy = up ? -2 : 2
  put(-1, wy, "#e7a35a")
  put(0, wy, "#e7a35a")
  put(1, wy, "#e7a35a")
  put(0, wy + (up ? -1 : 1), "#e7a35a")
}
function column(x, y, h) {
  const y1 = y + h
  for (let yy = Math.max(0, y); yy < y1; yy += 6) {
    for (let xx = x; xx < x + PW; xx += 6) {
      cell(xx, yy, ((xx / 6) + (yy / 6)) % 2 ? "#4a3024" : "#2a1c16")
    }
  }
}
function drawGate(g) {
  const x = Math.round(g.x / 6) * 6
  column(x, 0, g.gap)
  column(x, g.gap + GAP, GROUND - g.gap - GAP)
  ctx.fillStyle = "#e7a35a"
  const lip = Math.round(g.gap / 6) * 6
  ctx.fillRect(x - 6, lip - 6, PW + 12, 6)
  ctx.fillRect(x - 6, Math.round((g.gap + GAP) / 6) * 6, PW + 12, 6)
}
function drawFlap() {
  if (look === "vox") {
    Vox.flap(ctx, { W, H, GROUND, BX, y, pace, gates, drift })
    return
  }
  ctx.imageSmoothingEnabled = false
  ctx.fillStyle = "#140e0c"
  ctx.fillRect(0, 0, W, H)
  ctx.fillStyle = "#f4e7d4"
  ;[[150, 40], [230, 22], [340, 48], [470, 30], [690, 26], [740, 58]].forEach(([sx, sy]) => ctx.fillRect(sx, sy, 6, 6))
  ;[[1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [1, 3], [2, 3], [3, 3]].forEach(([cx, cy]) => cell(48 + cx * 6, 16 + cy * 6, "#e7a35a"))
  gates.forEach(drawGate)
  ctx.fillStyle = "#241814"
  ctx.fillRect(0, GROUND, W, H - GROUND)
  ctx.fillStyle = "#e7a35a"
  const off = Math.floor(drift / 6) * 6
  for (let x = -off; x < W; x += 24) ctx.fillRect(x, GROUND, 12, 6)
  drawBird(BX, y, Math.sin(pace) > 0)
}
function paintHud() {
  scoreEl.textContent = String(score)
  timeEl.textContent = String(left)
  ring.style.strokeDashoffset = String(RING * (1 - left / 30))
}
function endRound(why) {
  running = false
  document.body.classList.remove("live")
  lamp.textContent = "Off air"
  clearInterval(clock)
  if (raf) cancelAnimationFrame(raf)
  if (stream) stream.getTracks().forEach(t => t.stop())
  if (audio) audio.close().catch(() => {})
  stream = audio = analyser = raf = clock = null
  go.textContent = "Play again"
  kicker.textContent = score + " passed"
  heardEl.textContent = why
  paintHud()
}
function step(dt) {
  if (analyser) {
    analyser.getByteTimeDomainData(data)
    let sum = 0
    for (let i = 0; i < data.length; i++) { const v = (data[i] - 128) / 128; sum += v * v }
    level = Math.sqrt(sum / data.length)
  }
  if (game === "dino") {
    if (level > .06) {
      if (y > 78) vy = -480
      else { y = 78; vy = 0 }
    } else vy += 1600 * dt
    y += vy * dt
    if (y > LINE - 22) { y = LINE - 22; vy = 0 }
    pace += dt * 12
    if (look === "vox") drift = (drift + 220 * dt) % 100000
    stones.forEach(s => { s.x -= 220 * dt })
    spawn -= dt
    if (spawn <= 0) {
      stones.push({ x: W + 20, w: 36 + Math.random() * 40, h: 42 + Math.random() * 56, scored: false })
      spawn = 1.15 + Math.random() * .55
    }
    stones = stones.filter(s => s.x > -80)
    for (const s of stones) {
      if (!s.scored && s.x + s.w < 150) { s.scored = true; score += 1 }
      if (overlaps(150, y, 18, s.x, LINE - s.h, s.w, s.h)) { endRound("Hit a stone."); return }
    }
    drawHop()
  } else if (game === "flap") {
    if (level > .06) vy = -280
    else { vy += 1500 * dt; if (vy > 520) vy = 520 }
    y += vy * dt
    pace += dt * (level > .06 ? 16 : 8)
    drift = (drift + 190 * dt) % 24
    if (y < 20 || y > GROUND - 16) { endRound(y < 20 ? "Hit the top." : "Hit the ground."); return }
    gates.forEach(g => { g.x -= 190 * dt })
    spawn -= dt
    if (spawn <= 0) {
      gates.push({ x: W + 8, gap: 30 + Math.floor(Math.random() * 22) * 6, scored: false })
      spawn = 1.55
    }
    gates = gates.filter(g => g.x > -90)
    for (const g of gates) {
      if (hitGate(BX, y, 16, g)) { endRound("Hit a wall."); return }
      if (!g.scored && g.x + PW < BX) { g.scored = true; score += 1 }
    }
    drawFlap()
  } else {
    const target = H - 48 - Math.min(level / .16, 1) * (H - 96)
    y += (target - y) * Math.min(1, dt * 3.2)
    holes.forEach(h => { h.x -= 150 * dt })
    spawn -= dt
    if (spawn <= 0) {
      holes.push({ x: W + 10, w: 54, hy: 90 + Math.random() * 180, hr: 62, scored: false })
      spawn = 1.7
    }
    holes = holes.filter(h => h.x > -80)
    for (const h of holes) {
      const over = 170 > h.x && 170 < h.x + h.w
      if (over && !inHole(170, y, 16, h)) { endRound("Missed the hole."); return }
      if (!h.scored && h.x + h.w < 170) { h.scored = true; score += 1 }
    }
    drawFloat()
  }
  paintHud()
}
function frame(now) {
  if (!running) return
  const dt = Math.min(.033, (now - frame.last) / 1000 || .016)
  frame.last = now
  step(dt)
  if (running) raf = requestAnimationFrame(frame)
}
async function start() {
  try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }) }
  catch (e) { heardEl.textContent = "The microphone was blocked."; return }
  audio = new AudioContext()
  const source = audio.createMediaStreamSource(stream)
  analyser = audio.createAnalyser()
  analyser.fftSize = 1024
  source.connect(analyser)
  data = new Uint8Array(analyser.fftSize)
  running = true
  document.body.classList.add("live")
  lamp.textContent = "On air"
  go.textContent = "Stop"
  heardEl.textContent = game === "dino" ? "Hold the sound to stay up" : game === "flap" ? "Hold the sound to rise" : "Louder lifts the balloon"
  score = 0
  left = 30
  y = game === "dino" ? LINE - 22 : game === "flap" ? 180 : H / 2
  vy = 0
  pace = 0
  drift = 0
  stones = [{ x: 560, w: 48, h: 64, scored: false }]
  holes = [{ x: 620, w: 54, hy: 170, hr: 62, scored: false }]
  gates = [{ x: 680, gap: 100, scored: false }]
  spawn = game === "dino" ? 1.3 : game === "flap" ? 1.55 : 1.7
  clearInterval(clock)
  clock = setInterval(() => {
    left -= 1
    if (left <= 0) endRound("Time.")
  }, 1000)
  frame.last = performance.now()
  raf = requestAnimationFrame(frame)
}
go.addEventListener("click", () => {
  if (running) { endRound("Stopped."); return }
  start()
})
if (game === "flap" && look !== "vox") canvas.style.imageRendering = "pixelated"
if (game === "dino") {
  stones = [{ x: 560, w: 48, h: 64, scored: false }, { x: 760, w: 36, h: 90, scored: false }]
  drawHop()
} else if (game === "flap") {
  gates = [{ x: 500, gap: 120, scored: false }, { x: 720, gap: 66, scored: false }]
  y = 170
  drawFlap()
} else {
  holes = [{ x: 560, w: 54, hy: 180, hr: 62, scored: false }]
  y = 180
  drawFloat()
}
paintHud()
