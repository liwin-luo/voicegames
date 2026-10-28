// Additive HUD layer: flashes a "round over" banner when a round ends with a score,
// plus localized share/save buttons (see share.js) that render a card with the site domain.
// Watches the body.live class that play.js / world.js already toggle — touches no game logic.
(() => {
  const screenEl = document.querySelector(".screen")
  if (!screenEl) return
  const scoreEl = document.querySelector("#score")
  const labelEl = document.querySelector(".stat span")
  const strings = (window.VG && window.VG.strings) || {}
  let wasLive = false
  let banner = null
  let hideTimer = null

  new MutationObserver(() => {
    const live = document.body.classList.contains("live")
    if (wasLive && !live) {
      const score = scoreEl ? scoreEl.textContent.trim() : ""
      if (score && score !== "0") {
        if (!banner) {
          banner = document.createElement("div")
          banner.className = "over-banner"
          banner.setAttribute("role", "status")
          banner.appendChild(document.createElement("b"))
          banner.appendChild(document.createElement("span"))
          screenEl.appendChild(banner)
        }
        banner.querySelector("b").textContent = score + " " + (labelEl ? labelEl.textContent : "")
        banner.querySelector("span").textContent = strings.bannerSub || "Round over — press start to go again"
        if (window.VGShare) window.VGShare.attach(banner, Number(score), labelEl ? labelEl.textContent : "")
        banner.hidden = false
        clearTimeout(hideTimer)
        hideTimer = setTimeout(() => { banner.hidden = true }, 6500)
      }
    }
    wasLive = live
  }).observe(document.body, { attributes: true, attributeFilter: ["class"] })
})()
