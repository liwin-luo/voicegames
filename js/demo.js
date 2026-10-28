// Homepage hero: a 10-second volume demo so the "voice is the controller" idea
// lands before a visitor reads a single rule. Falls back to the idle wave
// animation when the microphone is missing or blocked.
(() => {
  const eq = document.querySelector(".eq")
  const go = document.querySelector("#demo-go")
  const copy = document.querySelector("#demo-copy")
  const lamp = document.querySelector("#lamp")
  if (!eq || !go || !copy) return

  const S = Object.assign({
    idle: "Press start and make some noise — nothing is recorded.",
    quiet: "Too quiet — the games need sound. Say something!",
    good: "That is the whole idea — your volume drives the game.",
    loud: "LOUD. You are a natural at this.",
    noMic: "This browser has no microphone input — the games above still work with Space and the mouse.",
    blocked: "The microphone was blocked. Allow it and try again — or just pick a game below.",
    start: "Press start", stop: "Stop", offAir: "Off air", onAir: "On air"
  }, window.VG_DEMO_STRINGS || {})

  const bars = Array.from(eq.querySelectorAll("i"))
  let running = false
  let stream = null
  let audio = null
  let raf = 0

  copy.textContent = S.idle

  function paintIdle() {
    bars.forEach((bar) => bar.style.setProperty("--h", ""))
  }

  function stop() {
    running = false
    cancelAnimationFrame(raf)
    if (stream) stream.getTracks().forEach((t) => t.stop())
    if (audio) audio.close().catch(() => {})
    stream = audio = null
    document.body.classList.remove("live")
    if (lamp) lamp.textContent = S.offAir
    eq.classList.remove("idle")
    void eq.offsetWidth
    eq.classList.add("idle")
    paintIdle()
    go.textContent = S.start
    copy.textContent = S.idle
  }

  async function start() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      copy.textContent = S.noMic
      return
    }
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    } catch (e) {
      copy.textContent = S.blocked
      return
    }
    document.body.classList.add("live")
    if (lamp) lamp.textContent = S.onAir
    eq.classList.remove("idle")
    running = true
    go.textContent = S.stop
    audio = new AudioContext()
    const analyser = audio.createAnalyser()
    analyser.fftSize = 256
    audio.createMediaStreamSource(stream).connect(analyser)
    const data = new Uint8Array(analyser.fftSize)
    const tick = () => {
      if (!running) return
      analyser.getByteTimeDomainData(data)
      let sum = 0
      for (let i = 0; i < data.length; i++) { const x = (data[i] - 128) / 128; sum += x * x }
      const level = Math.min(1, Math.sqrt(sum / data.length) * 4.5)
      bars.forEach((bar, i) => {
        const wobble = 0.75 + 0.25 * Math.abs(Math.sin(performance.now() / 130 + i * 1.7))
        bar.style.setProperty("--h", String(Math.round(Math.max(6, level * 100 * wobble))))
      })
      if (level < 0.08) copy.textContent = S.quiet
      else if (level > 0.55) copy.textContent = S.loud
      else copy.textContent = S.good
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
  }

  go.addEventListener("click", () => { running ? stop() : start() })
})()
