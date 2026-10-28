// Snake — voice-steered snake. Low note turns left, high note turns right (relative turns).
;(() => {
  const G = "snake"
  if (document.body.dataset.game !== G) return
  const canvas = document.querySelector("#world")
  const ctx = canvas.getContext("2d")

  const CELL = 26
  const COLS = 30
  const ROWS = 13
  const OX = (W - COLS * CELL) / 2
  const OY = (H - ROWS * CELL) / 2

  let body = []          // [{c, r}] head first
  let dir = { dx: 1, dy: 0 }
  let turns = []         // queued -1 / +1 rotations
  let grow = 0
  let food = { c: 20, r: 6 }
  let stepT = 0
  let keyTurn = 0
  let alive = true

  const stepTime = () => Math.max(.082, .148 - score * .004)

  function freeCell() {
    for (let tries = 0; tries < 300; tries++) {
      const c = Math.floor(Math.random() * COLS)
      const r = Math.floor(Math.random() * ROWS)
      if (!body.some(s => s.c === c && s.r === r)) return { c, r }
    }
    return { c: 0, r: 0 }
  }

  function queueTurn(t) {
    if (turns.length < 2) turns.push(t)
  }

  window.addEventListener("keydown", e => {
    if (e.repeat) return
    if (e.code === "ArrowLeft") { queueTurn(-1); e.preventDefault() }
    if (e.code === "ArrowRight") { queueTurn(1); e.preventDefault() }
  })

  function reset() {
    body = [{ c: 8, r: 6 }, { c: 7, r: 6 }, { c: 6, r: 6 }, { c: 5, r: 6 }]
    dir = { dx: 1, dy: 0 }
    turns = []
    grow = 0
    food = { c: 20, r: 6 }
    stepT = 0
    keyTurn = 0
    alive = true
  }

  function die() {
    if (!alive) return
    alive = false
    sfx("crash")
    const head = body[0]
    burst(OX + head.c * CELL + CELL / 2, OY + head.r * CELL + CELL / 2, 24, ["#8fd18a", "#3c9a46", "#ffd15a"], 200)
    endRound(STR.hitWall)
  }

  function step(dt) {
    if (!alive) return
    stepT += dt
    if (stepT < stepTime()) return
    stepT = 0
    // direction: queued key turns win, else the pitch
    let t = 0
    if (turns.length) t = turns.shift()
    else if (phase === "run") t = pitchDir()
    if (t === -1) dir = { dx: dir.dy, dy: -dir.dx }
    else if (t === 1) dir = { dx: -dir.dy, dy: dir.dx }
    const head = { c: body[0].c + dir.dx, r: body[0].r + dir.dy }
    if (head.c < 0 || head.c >= COLS || head.r < 0 || head.r >= ROWS) { die(); return }
    const tail = body[body.length - 1]
    const willGrow = grow > 0
    const hitSelf = body.some((s, i) => {
      if (!willGrow && i === body.length - 1) return false
      return s.c === head.c && s.r === head.r
    })
    if (hitSelf) { die(); return }
    body.unshift(head)
    if (head.c === food.c && head.r === food.r) {
      score += 1
      grow += 2
      sfx("point")
      popup(OX + head.c * CELL + CELL / 2, OY + head.r * CELL, "+1", "#ffd15a")
      food = freeCell()
    }
    if (grow > 0) grow--
    else body.pop()
  }

  function rr(x, y, w, h, r) {
    ctx.beginPath()
    ctx.moveTo(x + r, y)
    ctx.arcTo(x + w, y, x + w, y + h, r)
    ctx.arcTo(x + w, y + h, x, y + h, r)
    ctx.arcTo(x, y + h, x, y, r)
    ctx.arcTo(x, y, x + w, y, r)
    ctx.closePath()
    ctx.fill()
  }

  function draw() {
    ctx.fillStyle = "#1e2d1b"
    ctx.fillRect(0, 0, W, H)
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if ((c + r) % 2 === 0) continue
        ctx.fillStyle = "#233420"
        ctx.fillRect(OX + c * CELL, OY + r * CELL, CELL, CELL)
      }
    }
    ctx.strokeStyle = "#57402b"
    ctx.lineWidth = 6
    ctx.strokeRect(OX - 3, OY - 3, COLS * CELL + 6, ROWS * CELL + 6)
    // food
    ctx.fillStyle = "#ff4d3a"
    ctx.beginPath()
    ctx.arc(OX + food.c * CELL + CELL / 2, OY + food.r * CELL + CELL / 2, 8, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = "#3c9a46"
    ctx.fillRect(OX + food.c * CELL + CELL / 2 - 1, OY + food.r * CELL + 2, 3, 5)
    // snake
    for (let i = body.length - 1; i >= 0; i--) {
      const s = body[i]
      const x = OX + s.c * CELL + 2
      const y = OY + s.r * CELL + 2
      ctx.fillStyle = i === 0 ? "#8fd18a" : "#3c9a46"
      rr(x, y, CELL - 4, CELL - 4, 6)
      if (i === 0) {
        ctx.fillStyle = "#24160f"
        const ex = dir.dx * 5
        const ey = dir.dy * 5
        ctx.fillRect(x + CELL / 2 - 7 + ex, y + CELL / 2 - 6 + ey, 4, 4)
        ctx.fillRect(x + CELL / 2 + 3 + ex, y + CELL / 2 - 6 + ey, 4, 4)
      }
    }
  }

  const probe = () => ({ head: body[0], len: body.length, food, phase, score })
  ;(window.VG_HOOKS = window.VG_HOOKS || {})[G] = { reset, step, draw, probe }
  reset()
  draw()
})()
