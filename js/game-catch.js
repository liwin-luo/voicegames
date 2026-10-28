// Catch — voice-steered gold catcher. Hook game: registers into VG_HOOKS,
// world.js supplies mic level (smooth), phases, HUD, sfx and endRound.
;(() => {
  const G = "catch"
  if (document.body.dataset.game !== G) return
  const canvas = document.querySelector("#world")
  const ctx = canvas.getContext("2d")

  const BW = 78            // basket width
  const RIM = 312          // catch line
  let bx = 400
  let items = []
  let spawn = 0
  let keyDir = 0
  let pointDir = 0

  const side = e => {
    const r = canvas.getBoundingClientRect()
    return (e.clientX - r.left) < r.width / 2 ? -1 : 1
  }
  window.addEventListener("keydown", e => {
    if (e.repeat) return
    if (e.code === "ArrowLeft") { keyDir = -1; e.preventDefault() }
    if (e.code === "ArrowRight") { keyDir = 1; e.preventDefault() }
  })
  window.addEventListener("keyup", e => {
    if (e.code === "ArrowLeft" || e.code === "ArrowRight") keyDir = 0
  })
  canvas.addEventListener("pointerdown", e => { pointDir = side(e) })
  canvas.addEventListener("pointermove", e => { if (pointerDown) pointDir = side(e) })
  window.addEventListener("pointerup", () => { pointDir = 0 })
  window.addEventListener("pointercancel", () => { pointDir = 0 })

  function spawnItem() {
    const roll = Math.random()
    const type = roll < .56 ? "coin" : roll < .72 ? "gem" : "bomb"
    items.push({
      x: rnd(36, W - 36),
      y: -24,
      vy: 150 + Math.min(180, score * 3) + rnd(0, 40),
      type,
      taken: false
    })
  }

  function reset() {
    bx = 400
    items = []
    spawn = .7
    keyDir = 0
    pointDir = 0
  }

  function step(dt) {
    let dir = 0
    if (keyDir) dir = keyDir
    else if (pointerDown && pointDir) dir = pointDir
    else if (phase === "run") dir = pitchDir()
    bx = Math.max(42, Math.min(W - 42, bx + dir * 265 * dt))

    if (phase === "run") {
      spawn -= dt
      if (spawn <= 0) {
        spawnItem()
        spawn = Math.max(.45, .8 - score * .01)
      }
    }
    const prev = items
    items = []
    for (const it of prev) {
      it.y += it.vy * dt
      if (!it.taken && it.y >= RIM && it.y < RIM + 26 && Math.abs(it.x - bx) < BW / 2 + 8) {
        if (it.type === "bomb") {
          it.taken = true
          sfx("crash")
          burst(it.x, RIM, 24, ["#3a3835", "#ff4d3a", "#ffd15a"], 200)
          endRound(STR.hitBomb)
          items.push(it)
          continue
        }
        const v = it.type === "gem" ? 3 : 1
        score += v
        sfx(v > 1 ? "bonus" : "point")
        popup(it.x, RIM - 26, "+" + v, v > 1 ? "#7ec8ea" : "#ffd15a")
        continue
      }
      if (it.y < H + 26) items.push(it)
    }
  }

  function drawBasket(x, y) {
    ctx.fillStyle = "#8a5a34"
    ctx.beginPath()
    ctx.moveTo(x - BW / 2, y)
    ctx.lineTo(x + BW / 2, y)
    ctx.lineTo(x + BW / 2 - 12, y + 26)
    ctx.lineTo(x - BW / 2 + 12, y + 26)
    ctx.closePath()
    ctx.fill()
    ctx.fillStyle = "#ffd15a"
    ctx.fillRect(x - BW / 2, y - 5, BW, 6)
    ctx.strokeStyle = "#6e4526"
    ctx.lineWidth = 2
    for (let i = -2; i <= 2; i++) {
      ctx.beginPath()
      ctx.moveTo(x + i * 14, y + 2)
      ctx.lineTo(x + i * 11, y + 24)
      ctx.stroke()
    }
  }

  function drawItem(it) {
    if (it.type === "coin") {
      ctx.fillStyle = "#f0b15a"
      ctx.beginPath(); ctx.arc(it.x, it.y, 10, 0, Math.PI * 2); ctx.fill()
      ctx.fillStyle = "#ffd15a"
      ctx.beginPath(); ctx.arc(it.x, it.y, 6.5, 0, Math.PI * 2); ctx.fill()
    } else if (it.type === "gem") {
      ctx.fillStyle = "#7ec8ea"
      ctx.beginPath()
      ctx.moveTo(it.x, it.y - 11); ctx.lineTo(it.x + 8, it.y - 2)
      ctx.lineTo(it.x, it.y + 9); ctx.lineTo(it.x - 8, it.y - 2)
      ctx.closePath(); ctx.fill()
      ctx.fillStyle = "rgba(255,246,234,.85)"
      ctx.fillRect(it.x - 3, it.y - 5, 3, 3)
    } else {
      ctx.fillStyle = "#3a3835"
      ctx.beginPath(); ctx.arc(it.x, it.y, 10, 0, Math.PI * 2); ctx.fill()
      ctx.strokeStyle = "#c9844a"
      ctx.lineWidth = 2
      ctx.beginPath(); ctx.moveTo(it.x + 4, it.y - 8); ctx.quadraticCurveTo(it.x + 10, it.y - 16, it.x + 6, it.y - 20); ctx.stroke()
      ctx.fillStyle = Math.floor(performance.now() / 120) % 2 ? "#ffd15a" : "#ff4d3a"
      ctx.beginPath(); ctx.arc(it.x + 6, it.y - 21, 3, 0, Math.PI * 2); ctx.fill()
    }
  }

  function draw() {
    skyGrad([[0, "#8ec8ea"], [.6, "#c8e9f8"], [1, "#f2e2bd"]])
    drawClouds(30, "#ffffff", .8)
    // drop shaft shading
    ctx.fillStyle = "rgba(36,22,15,.06)"
    ctx.fillRect(W / 2 - 130, 0, 260, RIM)
    ctx.fillStyle = "#c9844a"
    ctx.fillRect(0, RIM + 30, W, H - RIM - 30)
    ctx.fillStyle = "#b8743c"
    for (let x = (Math.floor(performance.now() / 90) % 40) - 40; x < W; x += 40) ctx.fillRect(x, RIM + 34, 20, 4)
    for (const it of items) drawItem(it)
    drawBasket(bx, RIM + 4)
  }

  const probe = () => ({ bx: Math.round(bx), items: items.map(i => ({ x: Math.round(i.x), y: Math.round(i.y), t: i.type })), phase, score })
  ;(window.VG_HOOKS = window.VG_HOOKS || {})[G] = { reset, step, draw, probe }
  reset()
  draw()
})()
