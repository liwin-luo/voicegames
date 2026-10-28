// Bricks — voice-steered breakout. Pitch slides the paddle, a shout launches the ball.
;(() => {
  const G = "bricks"
  if (document.body.dataset.game !== G) return
  const canvas = document.querySelector("#world")
  const ctx = canvas.getContext("2d")

  const COLS = 10
  const ROWS = 5
  const BW = 70
  const BH = 16
  const GAP = 4
  const WALL_X = (W - (COLS * (BW + GAP) - GAP)) / 2
  const WALL_Y = 46
  const ROW_VALUE = [3, 3, 2, 2, 1]
  const ROW_COLOR = ["#ffd15a", "#f0b15a", "#e7a35a", "#c9844a", "#b8743c"]
  const PW2 = 94
  const PH = 12
  const PY2 = 332

  let paddleX = 400
  let state = "wait"        // wait | live
  let ball = { x: 400, y: 0, vx: 0, vy: 0 }
  let bricks = []
  let prevLoud = false
  let launch = false
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
    if (e.code === "Space") launch = true
  })
  window.addEventListener("keyup", e => {
    if (e.code === "ArrowLeft" || e.code === "ArrowRight") keyDir = 0
  })
  canvas.addEventListener("pointerdown", e => {
    pointDir = side(e)
    launch = true
  })
  canvas.addEventListener("pointermove", e => { if (pointerDown) pointDir = side(e) })
  window.addEventListener("pointerup", () => { pointDir = 0 })
  window.addEventListener("pointercancel", () => { pointDir = 0 })

  function buildWall() {
    bricks = []
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        bricks.push({ x: WALL_X + c * (BW + GAP), y: WALL_Y + r * (BH + GAP), v: ROW_VALUE[r], col: ROW_COLOR[r] })
      }
    }
  }
  const ballSpeed = () => 300 + Math.min(150, score * 2.5)

  function serve() {
    const sp = ballSpeed()
    const a = rnd(-.55, .55)
    ball.vx = Math.sin(a) * sp
    ball.vy = -Math.cos(a) * sp
    state = "live"
    sfx("go")
  }

  function reset() {
    paddleX = 400
    state = "wait"
    ball = { x: 400, y: PY2 - 9, vx: 0, vy: 0 }
    buildWall()
    prevLoud = false
    launch = false
    keyDir = 0
    pointDir = 0
  }

  function hitBrick(b) {
    // circle vs AABB overlap already known true; find smaller penetration axis
    const cx = Math.max(b.x, Math.min(ball.x, b.x + BW))
    const cy = Math.max(b.y, Math.min(ball.y, b.y + BH))
    const dx = ball.x - cx
    const dy = ball.y - cy
    if (Math.abs(dx) > Math.abs(dy)) ball.vx = Math.abs(ball.vx) * (dx > 0 ? 1 : -1)
    else ball.vy = Math.abs(ball.vy) * (dy > 0 ? 1 : -1)
  }

  function step(dt) {
    let dir = 0
    if (keyDir) dir = keyDir
    else if (pointerDown && pointDir) dir = pointDir
    else if (phase === "run") dir = pitchDir()
    paddleX = Math.max(WALL_X + PW2 / 2, Math.min(WALL_X + COLS * (BW + GAP) - GAP - PW2 / 2, paddleX + dir * 285 * dt))

    const loud = smooth > thresh
    const doLaunch = (loud && !prevLoud) || launch
    launch = false
    prevLoud = loud

    if (state === "wait") {
      ball.x = paddleX
      ball.y = PY2 - 9
      if (phase === "run" && doLaunch) serve()
      return
    }
    const steps = 2
    for (let s = 0; s < steps; s++) {
      const sdt = dt / steps
      ball.x += ball.vx * sdt
      ball.y += ball.vy * sdt
      if (ball.x < 9) { ball.x = 9; ball.vx = Math.abs(ball.vx) }
      if (ball.x > W - 9) { ball.x = W - 9; ball.vx = -Math.abs(ball.vx) }
      if (ball.y < 9) { ball.y = 9; ball.vy = Math.abs(ball.vy) }
      // paddle
      if (ball.vy > 0 && ball.y + 7 >= PY2 && ball.y - 7 <= PY2 + PH && Math.abs(ball.x - paddleX) < PW2 / 2 + 7) {
        const off = Math.max(-1, Math.min(1, (ball.x - paddleX) / (PW2 / 2)))
        const sp = ballSpeed()
        const a = off * 1.05
        ball.vx = Math.sin(a) * sp
        ball.vy = -Math.abs(Math.cos(a) * sp)
        ball.y = PY2 - 8
        sfx("tick")
      }
      // bricks
      for (let i = 0; i < bricks.length; i++) {
        const b = bricks[i]
        const cx = Math.max(b.x, Math.min(ball.x, b.x + BW))
        const cy = Math.max(b.y, Math.min(ball.y, b.y + BH))
        const dx = ball.x - cx
        const dy = ball.y - cy
        if (dx * dx + dy * dy < 49) {
          hitBrick(b)
          bricks.splice(i, 1)
          score += b.v
          sfx("point")
          popup(b.x + BW / 2, b.y + BH, "+" + b.v, "#ffd15a")
          if (!bricks.length) buildWall()
          break
        }
      }
    }
    if (ball.y > H + 18) {
      state = "wait"
      sfx("crash")
    }
  }

  function draw() {
    skyGrad([[0, "#241609"], [1, "#382414"]])
    ctx.strokeStyle = "rgba(231,215,184,.12)"
    ctx.lineWidth = 2
    ctx.strokeRect(WALL_X - 8, WALL_Y - 8, COLS * (BW + GAP) - GAP + 16, H - WALL_Y - 20)
    for (const b of bricks) {
      ctx.fillStyle = b.col
      ctx.fillRect(b.x, b.y, BW, BH)
      ctx.fillStyle = "rgba(255,246,234,.35)"
      ctx.fillRect(b.x, b.y, BW, 3)
      ctx.fillStyle = "rgba(36,22,15,.3)"
      ctx.fillRect(b.x, b.y + BH - 3, BW, 3)
    }
    // paddle
    ctx.fillStyle = "#f6d7a8"
    ctx.fillRect(paddleX - PW2 / 2, PY2, PW2, PH)
    ctx.fillStyle = "#ffd15a"
    ctx.fillRect(paddleX - PW2 / 2, PY2, PW2, 4)
    // ball
    ctx.fillStyle = "#fff6ea"
    ctx.beginPath(); ctx.arc(ball.x, ball.y, 7, 0, Math.PI * 2); ctx.fill()
    if (state === "wait" && phase === "run") {
      ctx.font = '700 15px Silkscreen, monospace'
      ctx.textAlign = "center"
      ctx.fillStyle = "rgba(243,230,208,.8)"
      ctx.fillText("!", paddleX, PY2 - 18)
      ctx.textAlign = "left"
    }
  }

  const probe = () => ({ paddleX: Math.round(paddleX), state, ball: { x: Math.round(ball.x), y: Math.round(ball.y) }, bricksLeft: bricks.length, phase, score })
  ;(window.VG_HOOKS = window.VG_HOOKS || {})[G] = { reset, step, draw, probe }
  reset()
  draw()
})()
