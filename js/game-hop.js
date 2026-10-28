// Hop — charge your voice, leap to the next pillar. Hold a sound to charge, go quiet to jump.
;(() => {
  const G = "hop"
  if (document.body.dataset.game !== G) return
  const canvas = document.querySelector("#world")
  const ctx = canvas.getContext("2d")

  const TOP = 268          // pillar top y (feet line)
  const PILLAR_W = 58
  const GRAV = 940
  const CHARGE_T = 1.2     // seconds of sound for a full charge

  let cur = { x: 0 }
  let next = { x: 0 }
  let dir = 1
  let px = 0               // world x of the jumper
  let py = TOP             // feet y (world == screen y)
  let vy = 0
  let airborne = false
  let fromX = 0
  let power = 0
  let prevLoud = false
  let jumps = 0
  let camX = 0

  function genNext() {
    dir = Math.random() < .5 ? -1 : 1
    const dist = rnd(84, 200)
    next = { x: cur.x + dir * dist }
  }

  function reset() {
    cur = { x: 0 }
    genNext()
    px = 0
    py = TOP
    vy = 0
    airborne = false
    power = 0
    prevLoud = false
    jumps = 0
    camX = -200
  }

  function landOn(x) {
    if (Math.abs(x - next.x) <= 24) {
      const perfect = Math.abs(x - next.x) <= 9
      score += perfect ? 2 : 1
      jumps++
      sfx(perfect ? "bonus" : "point")
      popup(x, TOP - 44, perfect ? "+2" : "+1", perfect ? "#8fd18a" : "#ffd15a")
      cur = next
      genNext()
      return true
    }
    if (Math.abs(x - fromX) <= 24) return true   // hopped in place / back home
    return false
  }

  function step(dt) {
    const loud = smooth > thresh
    if (!airborne) {
      if (phase === "run" && loud) power = Math.min(1, power + dt / CHARGE_T)
      // go quiet to jump
      if (phase === "run" && prevLoud && !loud && power > .12) {
        airborne = true
        fromX = cur.x
        px = cur.x
        vy = -300 - power * 130
        vx0 = dir * (110 + power * 330)
        power = 0
        sfx("tick")
      } else if (!loud) {
        power = Math.max(0, power - dt * .8)
      }
      px = cur.x
      py = TOP
    } else {
      vy += GRAV * dt
      px += vx0 * dt
      py += vy * dt
      if (vy > 0 && py >= TOP) {
        if (landOn(px)) {
          airborne = false
          py = TOP
          vy = 0
        } else if (py > H + 40) {
          endRound(STR.missedJump)
          return
        }
      }
    }
    prevLoud = loud
    camX = px - 360
  }

  let vx0 = 0

  function draw() {
    skyGrad([[0, "#2b1d15"], [.65, "#221510"], [1, "#170e0a"]])
    // canyon floor far below
    ctx.fillStyle = "#120b07"
    ctx.fillRect(0, H - 26, W, 26)
    // pillars
    const drawPillar = (x, hot) => {
      const sx = x - camX
      if (sx < -90 || sx > W + 90) return
      ctx.fillStyle = "#8a5a34"
      ctx.fillRect(sx - PILLAR_W / 2, TOP, PILLAR_W, H - TOP)
      ctx.fillStyle = hot ? "#ffd15a" : "#c9844a"
      ctx.fillRect(sx - PILLAR_W / 2, TOP, PILLAR_W, 12)
      ctx.fillStyle = "rgba(0,0,0,.28)"
      ctx.fillRect(sx + PILLAR_W / 2 - 8, TOP, 8, H - TOP)
    }
    drawPillar(next.x, true)
    drawPillar(cur.x, false)
    drawClimber(px - camX, py, jumps * 3, !airborne, airborne)
    // charge arc
    if (!airborne && power > 0) {
      ctx.strokeStyle = power >= 1 ? "#8fd18a" : "#ffd15a"
      ctx.lineWidth = 5
      ctx.beginPath()
      ctx.arc(px - camX, py - 34, 22, -Math.PI / 2, -Math.PI / 2 + power * Math.PI * 2)
      ctx.stroke()
    }
    // gap hint
    ctx.font = '700 12px Silkscreen, monospace'
    ctx.textAlign = "center"
    ctx.fillStyle = "rgba(231,215,184,.5)"
    ctx.fillText(Math.round(Math.abs(next.x - cur.x)) + "cm", (cur.x + next.x) / 2 - camX, TOP - 64)
    ctx.textAlign = "left"
  }

  const probe = () => ({ px: Math.round(px), py: Math.round(py), cur: Math.round(cur.x), next: Math.round(next.x), power: +power.toFixed(2), airborne, phase, score })
  ;(window.VG_HOOKS = window.VG_HOOKS || {})[G] = { reset, step, draw, probe }
  reset()
  draw()
})()
