// Tug — out-shout the machine. Your volume pulls the rope, the AI pulls back.
;(() => {
  const G = "tug"
  if (document.body.dataset.game !== G) return
  const canvas = document.querySelector("#world")
  const ctx = canvas.getContext("2d")

  const ROPE_Y = 186
  const LOSE_L = 175       // machine drags the marker past your line = round lost
  const WIN_R = 625        // you pull the marker past the machine's line = round won
  const START = 400
  let mx = START
  let aiPull = 24          // px/s the machine drags
  let flash = 0            // win flash timer

  function reset() {
    mx = START
    aiPull = 24
    flash = 0
  }

  function newRound(won) {
    if (won) {
      score += 1
      sfx("bonus")
      popup(mx, ROPE_Y - 34, "+1", "#8fd18a")
      aiPull = Math.min(58, aiPull + 5.5)
      flash = .5
    } else {
      sfx("crash")
      popup(mx, ROPE_Y - 34, "!", "#ff4d3a")
      aiPull = Math.max(24, aiPull - 2)
    }
    mx = START
  }

  function step(dt) {
    flash = Math.max(0, flash - dt)
    if (phase !== "run") return
    const yourPull = smooth * 300
    mx += (yourPull - aiPull) * dt
    if (mx >= WIN_R) newRound(true)
    else if (mx <= LOSE_L) newRound(false)
  }

  function drawGuy(x, flip, body, dark, lean) {
    ctx.save()
    ctx.translate(x, ROPE_Y + 52)
    ctx.rotate(lean * (flip ? -1 : 1))
    // legs braced
    ctx.strokeStyle = dark
    ctx.lineWidth = 5
    ctx.lineCap = "round"
    ctx.beginPath(); ctx.moveTo(-4, -8); ctx.lineTo(-20, 0); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(4, -8); ctx.lineTo(16, 0); ctx.stroke()
    // body
    ctx.fillStyle = body
    ctx.fillRect(-9, -32, 18, 25)
    // head
    ctx.fillStyle = "#f6d7a8"
    ctx.beginPath(); ctx.arc(0, -39, 7.5, 0, Math.PI * 2); ctx.fill()
    ctx.fillStyle = body === "#e15a2b" ? "#f0b15a" : "#7d7468"
    ctx.beginPath(); ctx.arc(0, -40, 8, Math.PI, 0); ctx.fill()
    // arms to the rope
    ctx.strokeStyle = dark
    ctx.lineWidth = 4
    ctx.beginPath(); ctx.moveTo(-6, -26); ctx.lineTo(-16, -46); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(6, -26); ctx.lineTo(14, -46); ctx.stroke()
    ctx.restore()
  }

  function draw() {
    skyGrad([[0, "#c8e9f8"], [.55, "#e8dcbf"], [1, "#e0b878"]])
    // hall floor
    ctx.fillStyle = "#c9844a"
    ctx.fillRect(0, ROPE_Y + 56, W, H - ROPE_Y - 56)
    ctx.fillStyle = "#b8743c"
    ctx.fillRect(0, ROPE_Y + 56, W, 5)
    // win lines: green on your side, red on the machine's
    ctx.fillStyle = "#ff4d3a"
    ctx.fillRect(LOSE_L - 3, ROPE_Y - 46, 6, 110)
    ctx.fillStyle = "#3c9a46"
    ctx.fillRect(WIN_R - 3, ROPE_Y - 46, 6, 110)
    // rope with slight sag toward the losing side
    const sag = Math.max(-1, Math.min(1, (mx - START) / 225))
    ctx.strokeStyle = "#8a5a34"
    ctx.lineWidth = 5
    ctx.beginPath()
    ctx.moveTo(40, ROPE_Y - 44)
    ctx.quadraticCurveTo((40 + 760) / 2, ROPE_Y - 44 + 26, 760, ROPE_Y - 44)
    ctx.stroke()
    // marker flag on the rope, positioned by progress
    const t = (mx - 40) / (760 - 40)
    const flagX = 40 + t * 720
    const flagY = ROPE_Y - 44 + Math.sin(Math.PI * t) * 26
    ctx.fillStyle = "#24160f"
    ctx.fillRect(flagX - 2, flagY - 26, 4, 26)
    ctx.fillStyle = flash > 0 ? "#8fd18a" : "#ffd15a"
    ctx.beginPath()
    ctx.moveTo(flagX + 2, flagY - 26); ctx.lineTo(flagX + 30, flagY - 19); ctx.lineTo(flagX + 2, flagY - 12)
    ctx.closePath(); ctx.fill()
    drawGuy(700, true, "#e15a2b", "#c44722", sag * .12 + .06)
    drawGuy(100, false, "#7d7468", "#57424f", sag * .12 - .06)
    // pull meter: your current volume against the machine's drag
    const mw = 220, mxx = (W - mw) / 2, my = 44
    ctx.fillStyle = "rgba(20,14,12,.62)"
    ctx.fillRect(mxx - 4, my - 4, mw + 8, 18)
    ctx.fillStyle = "#3a2c24"
    ctx.fillRect(mxx, my, mw, 10)
    const need = Math.min(1, aiPull / 300 * 3.4)
    ctx.fillStyle = "#7d7468"
    ctx.fillRect(mxx, my, mw * need, 10)
    const have = Math.min(1, smooth * 3.4)
    ctx.fillStyle = smooth > thresh ? "#8fd18a" : "#e7a35a"
    ctx.fillRect(mxx, my, mw * have, 10)
  }

  const probe = () => ({ mx: Math.round(mx), aiPull: +aiPull.toFixed(1), phase, score })
  ;(window.VG_HOOKS = window.VG_HOOKS || {})[G] = { reset, step, draw, probe }
  reset()
  draw()
})()
