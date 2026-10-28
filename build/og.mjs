// Build-time OG image generator: renders one 1200×630 PNG per game with a
// tiny 5×7 pixel font — no native deps. Output lands in og/ and is referenced
// as og:image by every game page, so any social share of a URL carries art.
import zlib from "node:zlib"

// ---------- minimal PNG encoder (RGBA, filter 0) ----------
const CRC_TABLE = (() => {
  const t = new Int32Array(256)
  for (let n = 0; n < 256; n++) {
    let c = n
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    t[n] = c
  }
  return t
})()
function crc32(buf) {
  let c = 0xffffffff
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}
function chunk(type, data) {
  const out = Buffer.alloc(8 + data.length + 4)
  out.writeUInt32BE(data.length, 0)
  out.write(type, 4, "ascii")
  data.copy(out, 8)
  out.writeUInt32BE(crc32(out.subarray(4, 8 + data.length)), 8 + data.length)
  return out
}
function encodePNG(w, h, rgba) {
  const raw = Buffer.alloc((w * 4 + 1) * h)
  for (let y = 0; y < h; y++) {
    raw[y * (w * 4 + 1)] = 0
    rgba.copy(raw, y * (w * 4 + 1) + 1, y * w * 4, (y + 1) * w * 4)
  }
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(w, 0)
  ihdr.writeUInt32BE(h, 4)
  ihdr[8] = 8   // bit depth
  ihdr[9] = 6   // RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", zlib.deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0))
  ])
}

// ---------- tiny canvas ----------
function makeCanvas(w, h) {
  const px = Buffer.alloc(w * h * 4)
  const hex = c => [parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16)]
  return {
    w, h, px,
    rect(x, y, rw, rh, c) {
      const [r, g, b] = hex(c)
      const x0 = Math.max(0, x | 0), y0 = Math.max(0, y | 0)
      const x1 = Math.min(w, (x + rw) | 0), y1 = Math.min(h, (y + rh) | 0)
      for (let yy = y0; yy < y1; yy++) {
        let i = (yy * w + x0) * 4
        for (let xx = x0; xx < x1; xx++) {
          px[i++] = r; px[i++] = g; px[i++] = b; px[i++] = 255
        }
      }
    }
  }
}

// ---------- 5×7 pixel font (A-Z 0-9 and a little punctuation) ----------
const FONT = {
  A: [0x0e, 0x11, 0x11, 0x1f, 0x11, 0x11, 0x11], B: [0x1e, 0x11, 0x11, 0x1e, 0x11, 0x11, 0x1e],
  C: [0x0e, 0x11, 0x10, 0x10, 0x10, 0x11, 0x0e], D: [0x1e, 0x11, 0x11, 0x11, 0x11, 0x11, 0x1e],
  E: [0x1f, 0x10, 0x10, 0x1e, 0x10, 0x10, 0x1f], F: [0x1f, 0x10, 0x10, 0x1e, 0x10, 0x10, 0x10],
  G: [0x0e, 0x11, 0x10, 0x17, 0x11, 0x11, 0x0f], H: [0x11, 0x11, 0x11, 0x1f, 0x11, 0x11, 0x11],
  I: [0x0e, 0x04, 0x04, 0x04, 0x04, 0x04, 0x0e], J: [0x07, 0x02, 0x02, 0x02, 0x02, 0x12, 0x0c],
  K: [0x11, 0x12, 0x14, 0x18, 0x14, 0x12, 0x11], L: [0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x1f],
  M: [0x11, 0x1b, 0x15, 0x15, 0x11, 0x11, 0x11], N: [0x11, 0x19, 0x15, 0x13, 0x11, 0x11, 0x11],
  O: [0x0e, 0x11, 0x11, 0x11, 0x11, 0x11, 0x0e], P: [0x1e, 0x11, 0x11, 0x1e, 0x10, 0x10, 0x10],
  Q: [0x0e, 0x11, 0x11, 0x11, 0x15, 0x12, 0x0d], R: [0x1e, 0x11, 0x11, 0x1e, 0x14, 0x12, 0x11],
  S: [0x0f, 0x10, 0x10, 0x0e, 0x01, 0x01, 0x1e], T: [0x1f, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04],
  U: [0x11, 0x11, 0x11, 0x11, 0x11, 0x11, 0x0e], V: [0x11, 0x11, 0x11, 0x11, 0x11, 0x0a, 0x04],
  W: [0x11, 0x11, 0x11, 0x15, 0x15, 0x15, 0x0a], X: [0x11, 0x11, 0x0a, 0x04, 0x0a, 0x11, 0x11],
  Y: [0x11, 0x11, 0x11, 0x0a, 0x04, 0x04, 0x04], Z: [0x1f, 0x01, 0x02, 0x04, 0x08, 0x10, 0x1f],
  "0": [0x0e, 0x11, 0x13, 0x15, 0x19, 0x11, 0x0e], "1": [0x04, 0x0c, 0x04, 0x04, 0x04, 0x04, 0x0e],
  "2": [0x0e, 0x11, 0x01, 0x02, 0x04, 0x08, 0x1f], "3": [0x1f, 0x02, 0x04, 0x02, 0x01, 0x11, 0x0e],
  "4": [0x02, 0x06, 0x0a, 0x12, 0x1f, 0x02, 0x02], "5": [0x1f, 0x10, 0x1e, 0x01, 0x01, 0x11, 0x0e],
  "6": [0x06, 0x08, 0x10, 0x1e, 0x11, 0x11, 0x0e], "7": [0x1f, 0x01, 0x02, 0x04, 0x08, 0x08, 0x08],
  "8": [0x0e, 0x11, 0x11, 0x0e, 0x11, 0x11, 0x0e], "9": [0x0e, 0x11, 0x11, 0x0f, 0x01, 0x02, 0x0c],
  " ": [0, 0, 0, 0, 0, 0, 0], "-": [0, 0, 0, 0, 0, 0x1f, 0],
  ".": [0, 0, 0, 0, 0, 0x0c, 0x0c], "!": [0x04, 0x04, 0x04, 0x04, 0x04, 0, 0x04]
}
function measure(text, scale) { return text.length * 6 * scale - scale }
function drawText(c, text, x, y, scale, color) {
  let cx = x
  for (const ch of text.toUpperCase()) {
    const glyph = FONT[ch]
    if (glyph) {
      for (let row = 0; row < 7; row++) {
        for (let col = 0; col < 5; col++) {
          if (glyph[row] & (0x10 >> col)) c.rect(cx + col * scale, y + row * scale, scale, scale, color)
        }
      }
    }
    cx += 6 * scale
  }
}

// ---------- the card ----------
function drawCard(name, seed) {
  const W = 1200, H = 630
  const c = makeCanvas(W, H)
  c.rect(0, 0, W, H, "#1a1410")
  for (let y = 0; y < H; y += 40) {
    for (let x = 0; x < W; x += 40) {
      if (((x / 40) | 0) % 2 === ((y / 40) | 0) % 2) c.rect(x, y, 40, 40, "#201812")
    }
  }
  // a few confetti blocks, positions derived from the slug
  const colors = ["#e15a2b", "#ffd15a", "#7ec8ea", "#3c9a46"]
  let hsh = seed
  const rnd = () => { hsh = (hsh * 1103515245 + 12345) & 0x7fffffff; return hsh / 0x7fffffff }
  for (let i = 0; i < 9; i++) {
    const s = 12 + rnd() * 26
    const x = 60 + rnd() * (W - 140)
    const y = 90 + rnd() * (H - 300)
    c.rect(x, y, s, s, colors[(rnd() * 4) | 0])
  }
  drawText(c, "VOICEGAMES", 56, 46, 3, "#ffd15a")
  drawText(c, name, 56, 150, 9, "#fff6ea")
  c.rect(58, 268, 230, 10, "#e15a2b")
  drawText(c, "PLAY OUT LOUD", 56, 320, 3, "#e7a35a")
  // bottom domain band
  c.rect(0, H - 120, W, 120, "#e15a2b")
  c.rect(0, H - 120, W, 8, "#ffd15a")
  drawText(c, "VOICEGAMES.ORG", 56, H - 76, 6, "#24160f")
  return encodePNG(W, H, c.px)
}

export function buildOgImages(games, write) {
  const made = []
  for (const g of games) {
    const file = "og/" + g.slug.replace(/\//g, "-") + ".png"
    let hsh = 0
    for (const ch of g.slug) hsh = (hsh * 31 + ch.charCodeAt(0)) & 0x7fffffff
    write(file, drawCard(g.name, hsh || 1))
    made.push(file)
  }
  write("og/site.png", drawCard("Voice Games", 7))
  made.push("og/site.png")
  return made
}
