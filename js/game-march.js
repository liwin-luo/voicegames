// March — voice walk/stop. Hold a sound to walk, silence to stop before the spikes.
;(() => {
  const G = "march"
  if (document.body.dataset.game !== G) return
  const canvas = document.querySelector("#world")
  const ctx = canvas.getContext("2d")

  const GROUND = 300
  const SPEED = 132
  let manX = 0            // world x of the walker
  let wallX = -520        // world x of the chase wall
  let pace = 0
  let walking = false
  let spikes = []         // { x, w } world coords
  let genX = 420

  function gen() {
    while (genX < manX + W + 400) {
      spikes.push({ x: genX, w: rnd(90, 175) })
      genX += rnd(260, 430)
    }
    while (spikes.length && spikes[0].x + spikes[0].w < manX - 500) spikes.shift()
  }

  function reset() {
    manX = 0
    wallX = -520
    pace = 0
    walking = false
    spikes = []
    genX = 420
    gen()
  }

  function step(dt) {
    walking = phase === "run" && smooth > thresh
    if (walking) {
      manX += SPEED * dt
      pace += dt * 11
    }
    wallX += (56 + score * 1.2) * dt
    gen()
    const m = Math.floor(manX / 40)
    if (phase === "run" && m > score) {
      score = m
      if (m % 5 === 0) sfx("point")
    }
    if (phase === "run") {
      if (wallX >= manX - 16) { endRound(STR.chased); return }
      for (const s of spikes) {
        if (manX + 8 > s.x && manX - 8 < s.x + s.w) {
          burst(240, GROUND - 8, 22, ["#ff4d3a", "#f6d7a8", "#ffd15a"], 180)
          endRound(STR.hitSpikes)
          return
        }
      }
    }
  }

  function drawSpikeStrip(s, camX) {
    const sx = s.x - camX
    ctx.fillStyle = "#57424f"
    ctx.fillRect(sx, GROUND, s.w, 8)
    ctx.fillStyle = "#ff4d3a"
    for (let x = sx; x < sx + s.w - 8; x += 16) {
      ctx.beginPath()
      ctx.moveTo(x, GROUND); ctx.lineTo(x + 11, GROUND); ctx.lineTo(x + 5.5, GROUND - 13)
      ctx.closePath(); ctx.fill()
    }
  }

  function draw() {
    const camX = manX - 240
    skyGrad([[0, "#33251a"], [.7, "#241708"], [1, "#170e0a"]])
    // distant pillars for parallax
    ctx.fillStyle = "#3f2e1e"
    for (let i = -1; i < 6; i++) {
      const wx = Math.floor((camX * .4) / 220) * 220 + i * 220 - camX * .4
      ctx.fillRect(wx, GROUND - 90, 54, 90)
    }
    // ground
    ctx.fillStyle = "#57402b"
    ctx.fillRect(0, GROUND, W, H - GROUND)
    ctx.fillStyle = "#6e4526"
    ctx.fillRect(0, GROUND, W, 5)
    ctx.fillStyle = "rgba(0,0,0,.25)"
    for (let x = -((camX % 48) + 48) % 48; x < W; x += 48) ctx.fillRect(x, GROUND + 18, 22, 4)
    // meter marks every 10 m (400 px)
    ctx.font = '700 11px Silkscreen, monospace'
    ctx.fillStyle = "rgba(231,215,184,.45)"
    ctx.textAlign = "center"
    const firstM = Math.floor(camX / 400)
    for (let m = firstM; m <= firstM + 4; m++) {
      if (m <= 0) continue
      const sx = m * 400 - camX
      ctx.fillRect(sx, GROUND - 4, 2, 8)
      ctx.fillText(m * 10 + "m", sx, GROUND - 12)
    }
    ctx.textAlign = "left"
    for (const s of spikes) drawSpikeStrip(s, camX)
    // chase wall (world-drawn)
    const wallSx = wallX - camX
    if (wallSx > -70) {
      ctx.fillStyle = "#3d2f3a"
      ctx.fillRect(wallSx - 46, 60, 46, GROUND - 60)
      ctx.fillStyle = "#ff4d3a"
      for (let y = 74; y < GROUND; y += 22) {
        ctx.beginPath()
        ctx.moveTo(wallSx, y); ctx.lineTo(wallSx, y + 13); ctx.lineTo(wallSx + 13, y + 6.5)
        ctx.closePath(); ctx.fill()
      }
    }
    drawClimber(240, GROUND, pace, walking, false)
  }

  const probe = () => ({ manX: Math.round(manX), wallX: Math.round(wallX), meters: Math.floor(manX / 40), phase, score })
  ;(window.VG_HOOKS = window.VG_HOOKS || {})[G] = { reset, step, draw, probe }
  reset()
  draw()
})()
