// Puff — blow the balloon up, bank it before it pops. Hidden pop point per balloon.
;(() => {
  const G = "puff"
  if (document.body.dataset.game !== G) return
  const canvas = document.querySelector("#world")
  const ctx = canvas.getContext("2d")

  const CX = 400
  const CY = 186
  const GROW = 44          // px per second while blowing
  const BANK_T = .6        // seconds of silence to bank
  let r = 14
  let popR = 60
  let quietT = 0
  let wobble = 0
  let blown = 0            // balloons banked
  let popped = 0

  function newBalloon() {
    r = 14
    popR = rnd(48, 112)
    quietT = 0
  }

  function reset() {
    blown = 0
    popped = 0
    wobble = 0
    newBalloon()
  }

  function step(dt) {
    if (phase !== "run") return
    const blowing = smooth > thresh
    if (blowing) {
      quietT = 0
      r += GROW * dt
      if (r >= popR) {
        popped++
        sfx("crash")
        burst(CX, CY, 26, ["#e25c9a", "#f6a8c8", "#ffd15a"], 240)
        newBalloon()
        return
      }
    } else {
      quietT += dt
      if (quietT >= BANK_T && r > 17) {
        const pts = Math.round(r)
        score += pts
        blown++
        sfx("bonus")
        popup(CX, CY - r - 18, "+" + pts, "#e25c9a")
        newBalloon()
      }
    }
    wobble += dt * (r > 74 ? 14 : 6)
  }

  function draw() {
    const t = performance.now() / 1000
    skyGrad([[0, "#8ec8ea"], [.6, "#c8e9f8"], [1, "#f2e2bd"]])
    drawClouds(24, "#ffffff", .85)
    ctx.fillStyle = "#c9844a"
    ctx.fillRect(0, 330, W, H - 330)
    ctx.fillStyle = "#b8743c"
    ctx.fillRect(0, 330, W, 4)
    const jx = CX + Math.sin(wobble) * Math.min(7, r * .06)
    const jy = CY + Math.cos(wobble * .8) * Math.min(5, r * .04)
    // string
    ctx.strokeStyle = "#6e4526"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(jx, jy + r + 8)
    ctx.quadraticCurveTo(jx + 8, jy + r + 42, jx - 4, jy + r + 78)
    ctx.stroke()
    // balloon
    ctx.fillStyle = "#e25c9a"
    ctx.beginPath(); ctx.arc(jx, jy, r, 0, Math.PI * 2); ctx.fill()
    ctx.fillStyle = "#f6a8c8"
    ctx.beginPath(); ctx.arc(jx - r * .3, jy - r * .35, r * .32, 0, Math.PI * 2); ctx.fill()
    ctx.fillStyle = "#c2447e"
    ctx.beginPath(); ctx.moveTo(jx - 6, jy + r - 2); ctx.lineTo(jx + 6, jy + r - 2); ctx.lineTo(jx, jy + r + 8); ctx.closePath(); ctx.fill()
    // size label
    ctx.font = '700 15px Silkscreen, monospace'
    ctx.textAlign = "center"
    ctx.fillStyle = "rgba(20,14,12,.6)"
    ctx.fillText(String(Math.round(r)), jx, jy + 5)
    // bank gauge
    const mw = 190, mx0 = (W - mw) / 2, my = 344
    ctx.fillStyle = "rgba(20,14,12,.62)"
    ctx.fillRect(mx0 - 4, my - 4, mw + 8, 16)
    ctx.fillStyle = "#3a2c24"
    ctx.fillRect(mx0, my, mw, 8)
    const banked = Math.max(0, 1 - quietT / BANK_T)
    ctx.fillStyle = quietT > 0 ? "#8fd18a" : "rgba(143,209,138,.25)"
    ctx.fillRect(mx0, my, mw * banked, 8)
    ctx.textAlign = "left"
    ctx.font = '700 12px Silkscreen, monospace'
    ctx.fillStyle = "rgba(20,14,12,.6)"
    ctx.fillText("x" + blown + "  !" + popped, mx0 + mw + 14, my + 8)
  }

  const probe = () => ({ r: Math.round(r), popR: Math.round(popR), quietT: +quietT.toFixed(2), blown, popped, phase, score })
  ;(window.VG_HOOKS = window.VG_HOOKS || {})[G] = { reset, step, draw, probe }
  reset()
  draw()
})()
