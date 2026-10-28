// Racer — voice-steered traffic dodger. Hook game for world.js.
;(() => {
  const G = "racer"
  if (document.body.dataset.game !== G) return
  const canvas = document.querySelector("#world")
  const ctx = canvas.getContext("2d")

  const ROAD_L = 250
  const ROAD_R = 550
  const CW = 44          // car width
  const CH = 70          // car height
  const PY = 268         // player car y (top)
  let px = 400
  let cars = []
  let spawn = 1
  let dash = 0
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

  const speed = () => 235 + Math.min(190, score * 5)

  function reset() {
    px = 400
    cars = []
    spawn = .9
    dash = 0
    keyDir = 0
    pointDir = 0
  }

  function step(dt) {
    let dir = 0
    if (keyDir) dir = keyDir
    else if (pointerDown && pointDir) dir = pointDir
    else if (phase === "run") dir = pitchDir()
    px = Math.max(ROAD_L + CW / 2 + 6, Math.min(ROAD_R - CW / 2 - 6, px + dir * 265 * dt))

    dash = (dash + speed() * dt) % 46
    if (phase === "run") {
      spawn -= dt
      if (spawn <= 0) {
        const lane = Math.floor(Math.random() * 3)
        const cx = ROAD_L + 50 + lane * 100 + rnd(-8, 8)
        const busy = cars.some(c => Math.abs(c.x - cx) < 60 && c.y < 170)
        if (!busy) cars.push({ x: cx, y: -CH - 10, passed: false })
        spawn = Math.max(.5, .95 - score * .012) * (235 / speed())
      }
    }
    const keep = []
    for (const c of cars) {
      c.y += speed() * dt
      if (phase === "run" && Math.abs(c.x - px) < (CW + CW) / 2 - 8 && c.y + CH > PY + 6 && c.y < PY + CH - 6) {
        sfx("crash")
        burst(px, PY + CH / 2, 26, ["#e15a2b", "#ffd15a", "#3a3835"], 220)
        endRound(STR.hitCar)
        return
      }
      if (!c.passed && c.y > PY + CH + 8) {
        c.passed = true
        if (phase === "run") {
          score += 1
          sfx("point")
          popup(c.x, PY - 30, "+1", "#ffd15a")
        }
      }
      if (c.y < H + 90) keep.push(c)
    }
    cars = keep
  }

  function drawCar(x, y, body, dark) {
    ctx.fillStyle = dark
    ctx.fillRect(x - CW / 2 + 5, y + 4, 8, 12)
    ctx.fillRect(x + CW / 2 - 13, y + 4, 8, 12)
    ctx.fillRect(x - CW / 2 + 5, y + CH - 16, 8, 12)
    ctx.fillRect(x + CW / 2 - 13, y + CH - 16, 8, 12)
    ctx.fillStyle = body
    ctx.fillRect(x - CW / 2, y, CW, CH)
    ctx.fillStyle = "rgba(255,246,234,.75)"
    ctx.fillRect(x - CW / 2 + 7, y + 16, CW - 14, 16)
    ctx.fillStyle = "rgba(36,22,15,.35)"
    ctx.fillRect(x - CW / 2 + 7, y + CH - 30, CW - 14, 12)
  }

  function draw() {
    // roadside grass
    ctx.fillStyle = "#2e5233"
    ctx.fillRect(0, 0, ROAD_L - 14, H)
    ctx.fillRect(ROAD_R + 14, 0, W - ROAD_R - 14, H)
    ctx.fillStyle = "#3c6b3a"
    for (let y = -(dash % 64); y < H; y += 64) {
      ctx.fillRect(20, y, 26, 12)
      ctx.fillRect(W - 46, y + 32, 26, 12)
    }
    // asphalt
    ctx.fillStyle = "#57544f"
    ctx.fillRect(ROAD_L, 0, ROAD_R - ROAD_L, H)
    ctx.fillStyle = "#f3e6d0"
    ctx.fillRect(ROAD_L, 0, 5, H)
    ctx.fillRect(ROAD_R - 5, 0, 5, H)
    ctx.fillStyle = "rgba(243,230,208,.55)"
    for (const lx of [ROAD_L + 100, ROAD_L + 200]) {
      for (let y = -46 + dash; y < H; y += 46) ctx.fillRect(lx - 2, y, 4, 24)
    }
    for (const c of cars) drawCar(c.x, c.y, "#8d94a8", "#3a3835")
    drawCar(px, PY, "#e15a2b", "#c44722")
  }

  const probe = () => ({ px: Math.round(px), cars: cars.map(c => ({ x: Math.round(c.x), y: Math.round(c.y) })), phase, score })
  ;(window.VG_HOOKS = window.VG_HOOKS || {})[G] = { reset, step, draw, probe }
  reset()
  draw()
})()
