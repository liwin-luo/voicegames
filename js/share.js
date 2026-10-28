// VGShare — end-of-round share card (1200×630 PNG) with the site domain on it.
// Pure client side: the card is drawn from the page's own final frame, nothing uploaded.
// Sharing = save the PNG / copy it to the clipboard, plus prepared text + links
// that open each social network's composer with the copy and URL already filled in.
(() => {
  const CW = 1200
  const CH = 630
  const DOMAIN = "voicegames.org"

  const strings = () => (window.VG && window.VG.strings) || {}
  const t = (key, fallback) => strings()[key] || fallback

  function gameName() {
    const attract = document.querySelector("#title .attract")
    const h1 = document.querySelector("h1")
    if (!h1) return "Voicegames"
    let n = h1.textContent
    if (attract) n = n.replace(attract.textContent, "")
    return n.trim() || "Voicegames"
  }

  function bestScore(game) {
    const look = document.body.dataset.look
    try { return Number(localStorage.getItem("vg-best-" + game + (look ? "-" + look : ""))) || 0 } catch (e) { return 0 }
  }

  function pageUrl() {
    return location.origin + location.pathname
  }

  function socialText(score, statLabel) {
    const tpl = t("socialText", "I scored {score} {unit} in {game} — your voice is the controller! {url}")
    return tpl
      .replace("{score}", score)
      .replace("{unit}", statLabel || "")
      .replace("{game}", gameName())
      .replace("{url}", pageUrl())
  }

  function cover(ctx, src, w, h) {
    const ar = src.width / src.height
    const tar = w / h
    let dw = w, dh = h, dx = 0, dy = 0
    if (ar > tar) { dh = h; dw = h * ar; dx = (w - dw) / 2 }
    else { dw = w; dh = w / ar; dy = (h - dh) / 2 }
    ctx.drawImage(src, dx, dy, dw, dh)
  }

  function eqBars(ctx, w, h) {
    // decorative stand-in for games without a canvas (speech games, Louder)
    const n = 26
    const bw = w / n
    const colors = ["#e15a2b", "#ffd15a", "#7ec8ea", "#f6d7a8"]
    for (let i = 0; i < n; i++) {
      const v = .18 + Math.abs(Math.sin(i * 1.7)) * .55
      const bh = h * v
      ctx.fillStyle = colors[i % colors.length]
      ctx.globalAlpha = .8
      ctx.fillRect(i * bw + bw * .18, h - bh - 70, bw * .64, bh)
    }
    ctx.globalAlpha = 1
  }

  async function build(score, statLabel) {
    try { await document.fonts.ready } catch (e) {}
    const game = document.body.dataset.game
    const best = bestScore(game)
    const src = document.querySelector("#world")

    const card = document.createElement("canvas")
    card.width = CW
    card.height = CH
    const ctx = card.getContext("2d")
    ctx.fillStyle = "#1a1410"
    ctx.fillRect(0, 0, CW, CH)
    if (src && src.width) {
      ctx.globalAlpha = .92
      cover(ctx, src, CW, CH)
      ctx.globalAlpha = 1
      ctx.fillStyle = "rgba(26,20,16,.74)"
      ctx.fillRect(0, 0, CW, CH)
      const fade = ctx.createLinearGradient(0, 90, 0, CH - 80)
      fade.addColorStop(0, "rgba(26,20,16,.28)")
      fade.addColorStop(1, "rgba(26,20,16,.88)")
      ctx.fillStyle = fade
      ctx.fillRect(0, 0, CW, CH)
    } else {
      eqBars(ctx, CW, CH)
      ctx.fillStyle = "rgba(26,20,16,.45)"
      ctx.fillRect(0, 0, CW, CH)
    }

    // header: game name + brand
    ctx.textBaseline = "alphabetic"
    ctx.textAlign = "left"
    ctx.font = '700 40px Silkscreen, monospace'
    ctx.fillStyle = "#f6d7a8"
    ctx.fillText(gameName().toUpperCase(), 56, 84)
    ctx.textAlign = "right"
    ctx.font = '700 30px Silkscreen, monospace'
    ctx.fillStyle = "#ffd15a"
    ctx.fillText("VOICEGAMES", CW - 56, 82)

    // giant score
    ctx.textAlign = "center"
    const sc = String(score)
    ctx.font = '700 210px "Pixelify Sans", Silkscreen, monospace'
    ctx.fillStyle = "rgba(36,22,15,.9)"
    ctx.fillText(sc, CW / 2 + 6, 372 + 6)
    ctx.fillStyle = "#fff6ea"
    ctx.fillText(sc, CW / 2, 372)
    ctx.font = '700 34px Silkscreen, monospace'
    ctx.fillStyle = "#e7a35a"
    ctx.fillText(String(statLabel || "").toUpperCase(), CW / 2, 428)
    if (best > 0) {
      ctx.font = '700 27px Silkscreen, monospace'
      ctx.fillStyle = "#ffd15a"
      ctx.fillText("★ " + t("bestLabel", "BEST") + " " + best, CW / 2, 478)
    }

    // domain band
    ctx.fillStyle = "#e15a2b"
    ctx.fillRect(0, CH - 88, CW, 88)
    ctx.fillStyle = "#ffd15a"
    ctx.fillRect(0, CH - 88, CW, 6)
    ctx.textAlign = "left"
    ctx.font = '700 44px Silkscreen, monospace'
    ctx.fillStyle = "#24160f"
    ctx.fillText(DOMAIN, 56, CH - 30)
    ctx.textAlign = "right"
    ctx.font = '400 20px "Pixelify Sans", monospace'
    ctx.fillStyle = "rgba(36,22,15,.8)"
    ctx.fillText(t("taglineText", "Play Out Loud"), CW - 56, CH - 32)
    return card
  }

  function toBlob(card) {
    return new Promise(res => card.toBlob(res, "image/png"))
  }

  function save(card) {
    const a = document.createElement("a")
    a.download = "voicegames-" + (document.body.dataset.game || "score") + ".png"
    a.href = card.toDataURL("image/png")
    a.click()
  }

  // returns true when the PNG landed on the clipboard, false when it fell back to a download
  async function copyImage(card) {
    try {
      if (!navigator.clipboard || !window.ClipboardItem) return false
      const blob = await toBlob(card)
      await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })])
      return true
    } catch (e) {
      save(card)
      return false
    }
  }

  function flash(btn, ok) {
    const old = btn.textContent
    btn.textContent = ok ? t("copied", "Copied!") : t("savedTip", "Saved!")
    btn.disabled = true
    setTimeout(() => { btn.textContent = old; btn.disabled = false }, 1400)
  }

  // the sheet state is filled when the round ends so every link opens pre-filled
  const socialSheet = { text: "", url: "" }

  function networks() {
    const lang = (window.VG && window.VG.speechLang) || document.documentElement.lang || "en"
    const txt = encodeURIComponent(socialSheet.text)
    const url = encodeURIComponent(socialSheet.url)
    const list = [{ name: "X", href: `https://twitter.com/intent/tweet?text=${txt}&url=${url}` }]
    if (lang.indexOf("zh") === 0) list.push({ name: "微博", href: `https://service.weibo.com/share/share.php?url=${url}&title=${txt}` })
    if (lang.indexOf("ja") === 0) list.push({ name: "LINE", href: `https://social-plugins.line.me/lineit/share?url=${url}&text=${txt}` })
    if (lang.indexOf("ru") === 0) list.push({ name: "VK", href: `https://vk.com/share.php?url=${url}&title=${txt}` })
    list.push(
      { name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${txt}` },
      { name: "WhatsApp", href: `https://wa.me/?text=${txt + "%0A" + url}` },
      { name: "Telegram", href: `https://t.me/share/url?url=${url}&text=${txt}` }
    )
    return list
  }

  function buildSheet(banner) {
    let sheet = banner.querySelector(".over-sheet")
    if (sheet) {
      sheet.querySelector(".over-sheet-copy").textContent = socialSheet.text
      sheet.querySelectorAll(".over-sheet-net").forEach((a, i) => { a.href = networks()[i].href })
      return sheet
    }
    sheet = document.createElement("div")
    sheet.className = "over-sheet"
    const row1 = document.createElement("div")
    row1.className = "over-sheet-row"
    const copy = document.createElement("p")
    copy.className = "over-sheet-copy"
    copy.textContent = socialSheet.text
    const copyBtn = document.createElement("button")
    copyBtn.type = "button"
    copyBtn.textContent = t("copyTextBtn", "Copy text")
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(socialSheet.text)
        flash(copyBtn, true)
      } catch (e) {}
    })
    row1.appendChild(copy)
    row1.appendChild(copyBtn)
    const row2 = document.createElement("div")
    row2.className = "over-sheet-row"
    for (const n of networks()) {
      const a = document.createElement("a")
      a.className = "over-sheet-net"
      a.href = n.href
      a.target = "_blank"
      a.rel = "noopener"
      a.textContent = n.name
      row2.appendChild(a)
    }
    sheet.appendChild(row1)
    sheet.appendChild(row2)
    sheet.hidden = true
    banner.appendChild(sheet)
    return sheet
  }

  // adds localized save / copy-image / share buttons into the round-over banner
  function attach(banner, score, statLabel) {
    if (banner.querySelector(".over-share")) return
    socialSheet.text = socialText(score, statLabel)
    socialSheet.url = pageUrl()
    const row = document.createElement("span")
    row.className = "over-share"
    const mk = (label, fn) => {
      const b = document.createElement("button")
      b.type = "button"
      b.textContent = label
      b.addEventListener("click", async () => {
        b.disabled = true
        try { await fn() } catch (e) {}
        b.disabled = false
      })
      return b
    }
    row.appendChild(mk(t("saveBtn", "Save PNG"), async () => save(await build(score, statLabel))))
    const copyBtn = mk(t("copyImageBtn", "Copy image"), async () => {
      const card = await build(score, statLabel)
      const ok = await copyImage(card)
      flash(copyBtn, ok)   // true → copied to clipboard, false → PNG downloaded instead
    })
    row.appendChild(copyBtn)
    row.appendChild(mk(t("shareBtn", "Share"), () => {
      const sheet = buildSheet(banner)
      sheet.hidden = !sheet.hidden
    }))
    banner.appendChild(row)
  }

  window.VGShare = { build, save, copyImage, attach }
})()
