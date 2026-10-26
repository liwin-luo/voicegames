const Vox = (() => {
  // ponytail: one draw call per box. Ceiling is a few hundred boxes; batch into one buffer if a frame drops.
  const SCALE = .12
  const CREAM = "#fff6ea"
  const GOLD = "#f0b15a"
  const INK = "#24160f"
  const HIDE = "#e15a2b"
  const LEAF = "#3c9a46"
  const RED = "#ff4d3a"
  const FOVY = 0.85
  const ALONG = 0.16
  // Side view. Travel runs along X; the eye sits across a thin strip of depth.
  const EYE = [8, 14, 58]
  const AT = [28, 16, 0]

  const batch = []
  function rgb(hex) {
    const n = parseInt(hex.slice(1), 16)
    return [(n >> 16) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]
  }
  function box(x, y, z, sx, sy, sz, color) {
    const c = rgb(color)
    batch.push(x, y, z, sx, sy, sz, c[0], c[1], c[2])
  }
  function along(gameX, anchor) { return (gameX - anchor) * ALONG }

  function perspective(fovy, aspect, near, far) {
    const f = 1 / Math.tan(fovy / 2)
    const nf = 1 / (near - far)
    return new Float32Array([
      f / aspect, 0, 0, 0,
      0, f, 0, 0,
      0, 0, (far + near) * nf, -1,
      0, 0, 2 * far * near * nf, 0
    ])
  }
  function norm(v) {
    const l = Math.hypot(v[0], v[1], v[2]) || 1
    return [v[0] / l, v[1] / l, v[2] / l]
  }
  function cross(a, b) {
    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
  }
  function lookAt(eye, at, up) {
    const f = norm([at[0] - eye[0], at[1] - eye[1], at[2] - eye[2]])
    const s = norm(cross(f, norm(up)))
    const u = cross(s, f)
    const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
    return new Float32Array([
      s[0], u[0], -f[0], 0,
      s[1], u[1], -f[1], 0,
      s[2], u[2], -f[2], 0,
      -dot(s, eye), -dot(u, eye), dot(f, eye), 1
    ])
  }
  function mul(a, b) {
    const o = new Float32Array(16)
    for (let c = 0; c < 4; c++) {
      for (let r = 0; r < 4; r++) {
        o[c * 4 + r] =
          a[r] * b[c * 4] + a[4 + r] * b[c * 4 + 1] +
          a[8 + r] * b[c * 4 + 2] + a[12 + r] * b[c * 4 + 3]
      }
    }
    return o
  }
  function clip(m, x, y, z) {
    return [
      m[0] * x + m[4] * y + m[8] * z + m[12],
      m[1] * x + m[5] * y + m[9] * z + m[13],
      m[2] * x + m[6] * y + m[10] * z + m[14],
      m[3] * x + m[7] * y + m[11] * z + m[15]
    ]
  }
  function ndc(m, x, y, z) {
    const c = clip(m, x, y, z)
    return [c[0] / c[3], c[1] / c[3], c[3]]
  }

  const VP = mul(perspective(FOVY, 800 / 480, 0.4, 220), lookAt(EYE, AT, [0, 1, 0]))
  const look = norm([AT[0] - EYE[0], AT[1] - EYE[1], AT[2] - EYE[2]])
  const side = norm(cross(look, [0, 1, 0]))
  const feet = ndc(VP, 2, 1, 0)
  const head = ndc(VP, 6, 12, 0)
  const nearX = ndc(VP, EYE[0] + look[0] * 12 + side[0] * 4, EYE[1] + look[1] * 12, EYE[2] + look[2] * 12)
  const farX = ndc(VP, EYE[0] + look[0] * 70 + side[0] * 4, EYE[1] + look[1] * 70, EYE[2] + look[2] * 70)
  const toRight = ndc(VP, AT[0] + side[0] * 6, AT[1], AT[2] + side[2] * 6)
  const toLeft = ndc(VP, AT[0] - side[0] * 6, AT[1], AT[2] - side[2] * 6)
  if (!(head[1] > feet[1])) throw new Error("up")
  if (!(Math.abs(nearX[0] - ndc(VP, EYE[0] + look[0] * 12, EYE[1] + look[1] * 12, EYE[2] + look[2] * 12)[0]) > Math.abs(farX[0] - ndc(VP, EYE[0] + look[0] * 70, EYE[1] + look[1] * 70, EYE[2] + look[2] * 70)[0]))) throw new Error("perspective")
  if (!(toRight[0] > toLeft[0])) throw new Error("yaw")
  if (!((308 - 22 - 78) * SCALE > 64 * 0.28)) throw new Error("jump")
  const gapTop = (330 - 100) * SCALE
  const gapBot = (330 - 220) * SCALE
  const mothY = (330 - 170) * SCALE
  if (!(mothY > gapBot && mothY < gapTop)) throw new Error("gap")
  const mothN = ndc(VP, 2, mothY, 0)
  if (!(mothN[0] < -0.05 && mothN[0] > -0.85 && Math.abs(mothN[1]) < 0.55)) throw new Error("moth frame")
  const jumpHead = ndc(VP, 6, (308 - 22 - 78) * SCALE + 8, 0)
  if (!(jumpHead[1] < 0.9 && jumpHead[1] > head[1])) throw new Error("jump frame")

  function profile(x, y, z, sx, sy, sz, color) {
    box(z, y, -(x + sx), sz, sy, sx, color)
  }
  function ground(drift) {
    const G = 8
    const shift = ((drift * ALONG) % G + G) % G
    for (let x = -28; x <= 120; x += G) {
      for (let z = -8; z <= 4; z += G) {
        const cell = Math.floor((x + shift) / G) + Math.floor(z / G)
        const lane = z > -4 && (Math.floor((x + shift) / G) % 2 === 0)
        const color = lane ? (cell & 1 ? "#e8c27a" : "#f3d7a4") : "#c9844a"
        box(x - shift, -0.5, z, G - 0.3, 0.5, G - 0.3, color)
      }
    }
  }
  function moon() {
    for (let dy = -2; dy <= 2; dy++) {
      for (let dx = -2; dx <= 2; dx++) {
        if (dx * dx + dy * dy <= 5) box(78 + dx * 1.5, 30 + dy * 1.5, -10, 1.5, 1.5, 1.5, "#ffd15a")
      }
    }
  }
  function blob(x) {
    box(x, 0.06, -1.4, 7.5, 0.14, 3.4, "#b47848")
  }
  function dino(lift, pace) {
    const y = lift
    const step = Math.sin(pace) * 1.15
    blob(1)
    profile(-2.3, y + 2.5, -1.2, 4.6, 3.3, 7.4, HIDE)
    profile(-1.1, y + 2.2, 0.4, 2.2, 1.6, 4.2, CREAM)
    profile(-1.6, y + 4.5, 5.2, 3.2, 2.5, 2.2, HIDE)
    profile(-1.8, y + 5.5, 6.8, 3.6, 2.5, 3.2, HIDE)
    profile(-1.15, y + 5.6, 9.6, 2.3, 1.35, 1.7, "#f08a3a")
    profile(-2.2, y + 6.5, 8.1, 0.42, 0.5, 0.55, CREAM)
    profile(-2.05, y + 6.55, 8.55, 0.18, 0.22, 0.2, INK)
    profile(-0.7, y + 3.5, -4.4, 1.4, 1.25, 3.5, "#c44722")
    profile(-1.9, y + Math.max(0, step), 3.8, 1.3, 2.6, 1.3, "#c44722")
    profile(0.55, y + Math.max(0, -step), 3.8, 1.3, 2.6, 1.3, "#c44722")
    profile(-1.9, y + Math.max(0, -step), -0.2, 1.3, 2.6, 1.3, "#c44722")
    profile(0.55, y + Math.max(0, step), -0.2, 1.3, 2.6, 1.3, "#c44722")
  }
  function moth(y, pace) {
    const up = Math.sin(pace) > 0
    const wy = y + (up ? 2.4 : -0.5)
    blob(1.5)
    box(-0.6, y - 0.7, -1.1, 5.4, 3.2, 2.2, CREAM)
    box(4.2, y + 0.2, -0.75, 2.1, 1.8, 1.6, "#c4843a")
    box(6.0, y + 0.45, -0.35, 1.15, 0.7, 0.8, RED)
    box(0.3, wy, -0.35, 4.4, 0.42, 3.0, "#f08a3a")
    box(0.8, wy + 0.2, 0.35, 3.6, 0.32, 2.2, "#7ec8ea")
  }
  function balloon(y) {
    const x0 = 3
    const bands = [[2.2, 1.15, "#e25c2a"], [3.0, 1.35, "#f6d7a8"], [3.4, 1.45, "#ffd15a"], [2.9, 1.3, "#e25c2a"], [1.9, 1.05, "#f6d7a8"]]
    blob(1.2)
    let yy = y - 2.2
    for (const [rx, h, color] of bands) {
      box(x0 - rx * 0.15, yy, -rx * 0.45, rx * 1.15, h, rx * 0.9, color)
      yy += h * 0.82
    }
    box(x0, y - 3.6, -0.15, 0.28, 1.8, 0.28, GOLD)
    box(x0 - 0.9, y - 4.7, -0.7, 2.1, 1.15, 1.5, GOLD)
  }
  function stack(s, anchor) {
    const x = along(s.x, anchor)
    if (x < -24 || x > 120) return
    const h = Math.max(4, s.h * 0.28)
    const w = Math.max(2.4, s.w * 0.07)
    box(x, 0, -w * 0.35, w, h, w * 0.7, LEAF)
    box(x - w * 0.15, h * 0.42, -w * 0.2, w * 0.45, h * 0.36, w * 0.5, "#2f8a40")
    box(x + w * 0.45, h * 0.28, -w * 0.15, w * 0.4, h * 0.3, w * 0.45, "#8fd18a")
  }
  function gate(g, groundY, anchor) {
    const x = along(g.x, anchor)
    if (x < -24 || x > 120) return
    const openTop = (groundY - g.gap) * SCALE
    const openBot = (groundY - (g.gap + 120)) * SCALE
    const top = groundY * SCALE
    const thick = 5.5
    const depth = 2.4
    box(x, 0, -depth / 2, thick, Math.max(0.2, openBot), depth, "#d86a3a")
    box(x, openTop, -depth / 2, thick, Math.max(0.2, top - openTop), depth, "#d86a3a")
    box(x - 0.15, Math.max(0, openBot - 0.55), -depth / 2 - 0.15, thick + 0.3, 0.7, depth + 0.3, GOLD)
    box(x - 0.15, openTop, -depth / 2 - 0.15, thick + 0.3, 0.7, depth + 0.3, GOLD)
  }
  function ring(hole) {
    const x = along(hole.x, 170)
    if (x < -24 || x > 120) return
    const cy = (360 - hole.hy) * SCALE
    const hr = hole.hr * SCALE
    const n = 22
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2
      box(x + Math.cos(a) * hr - 0.7, cy + Math.sin(a) * hr - 0.7, -0.6, 1.4, 1.4, 1.6, i % 2 ? "#ffd15a" : "#e25c2a")
    }
  }

  const BOX_VS = `
attribute vec3 aPos;
attribute vec3 aNrm;
uniform mat4 uVP;
uniform vec3 uOff;
uniform vec3 uSize;
uniform vec3 uColor;
varying vec3 vCol;
varying float vZ;
void main() {
  vec3 p = uOff + aPos * uSize;
  gl_Position = uVP * vec4(p, 1.0);
  float key = max(0.0, dot(aNrm, normalize(vec3(-0.35, 0.85, 0.4))));
  float fill = max(0.0, dot(aNrm, normalize(vec3(0.2, 0.35, -0.85))));
  float lam = min(1.15, 0.62 + 0.4 * key + 0.28 * fill);
  vCol = uColor * lam;
  vZ = p.x;
}`
  const BOX_FS = `
precision mediump float;
varying vec3 vCol;
varying float vZ;
void main() {
  float fog = clamp((vZ - 78.0) / 70.0, 0.0, 0.35);
  vec3 haze = vec3(0.53, 0.78, 0.92);
  gl_FragColor = vec4(mix(vCol, haze, fog), 1.0);
}`
  const SKY_VS = `attribute vec2 a; varying vec2 v; void main(){ v = a; gl_Position = vec4(a, 1.0, 1.0); }`
  const SKY_FS = `
precision mediump float;
varying vec2 v;
void main() {
  float t = v.y * 0.5 + 0.5;
  vec3 hor = vec3(0.97, 0.78, 0.55);
  vec3 top = vec3(0.35, 0.74, 0.93);
  gl_FragColor = vec4(mix(hor, top, smoothstep(0.05, 0.72, t)), 1.0);
}`

  let gl, glCanvas, boxProg, skyProg, uVP, uOff, uSize, uColor
  function shader(type, src) {
    const s = gl.createShader(type)
    gl.shaderSource(s, src)
    gl.compileShader(s)
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s))
    return s
  }
  function program(vs, fs) {
    const p = gl.createProgram()
    gl.attachShader(p, shader(gl.VERTEX_SHADER, vs))
    gl.attachShader(p, shader(gl.FRAGMENT_SHADER, fs))
    gl.linkProgram(p)
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p))
    return p
  }
  function boot() {
    if (gl) return true
    if (typeof document === "undefined") return false
    glCanvas = document.createElement("canvas")
    gl = glCanvas.getContext("webgl", { antialias: true, alpha: false, preserveDrawingBuffer: true })
    if (!gl) return false
    boxProg = program(BOX_VS, BOX_FS)
    skyProg = program(SKY_VS, SKY_FS)
    uVP = gl.getUniformLocation(boxProg, "uVP")
    uOff = gl.getUniformLocation(boxProg, "uOff")
    uSize = gl.getUniformLocation(boxProg, "uSize")
    uColor = gl.getUniformLocation(boxProg, "uColor")
    const faces = [
      [[0, 1, 0], [0, 1, 0], [1, 1, 0], [1, 1, 1], [0, 1, 1]],
      [[0, -1, 0], [0, 0, 1], [1, 0, 1], [1, 0, 0], [0, 0, 0]],
      [[1, 0, 0], [1, 0, 0], [1, 0, 1], [1, 1, 1], [1, 1, 0]],
      [[-1, 0, 0], [0, 0, 1], [0, 0, 0], [0, 1, 0], [0, 1, 1]],
      [[0, 0, 1], [0, 0, 1], [0, 1, 1], [1, 1, 1], [1, 0, 1]],
      [[0, 0, -1], [1, 0, 0], [1, 1, 0], [0, 1, 0], [0, 0, 0]]
    ]
    const data = []
    for (const [n, a, b, c, d] of faces) {
      for (const p of [a, b, c, a, c, d]) data.push(p[0], p[1], p[2], n[0], n[1], n[2])
    }
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
    gl.useProgram(boxProg)
    const stride = 24
    const pos = gl.getAttribLocation(boxProg, "aPos")
    const nrm = gl.getAttribLocation(boxProg, "aNrm")
    gl.enableVertexAttribArray(pos)
    gl.vertexAttribPointer(pos, 3, gl.FLOAT, false, stride, 0)
    gl.enableVertexAttribArray(nrm)
    gl.vertexAttribPointer(nrm, 3, gl.FLOAT, false, stride, 12)
    const skyBuf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, skyBuf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1]), gl.STATIC_DRAW)
    gl.useProgram(skyProg)
    const a = gl.getAttribLocation(skyProg, "a")
    gl.enableVertexAttribArray(a)
    gl.vertexAttribPointer(a, 2, gl.FLOAT, false, 0, 0)
    gl.skyBuf = skyBuf
    gl.boxBuf = buf
    return true
  }
  function paint(ctx, W, H, eye, at) {
    let ok = false
    try { ok = boot() } catch (e) { console.error(e) }
    if (!ok) {
      ctx.fillStyle = INK
      ctx.fillRect(0, 0, W, H)
      batch.length = 0
      return
    }
    const dpr = Math.min(2, (typeof window !== "undefined" && window.devicePixelRatio) || 1)
    const pw = Math.round(W * dpr)
    const ph = Math.round(H * dpr)
    if (glCanvas.width !== pw || glCanvas.height !== ph) {
      glCanvas.width = pw
      glCanvas.height = ph
    }
    gl.viewport(0, 0, pw, ph)
    gl.clearColor(0.45, 0.76, 0.93, 1)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
    gl.disable(gl.DEPTH_TEST)
    gl.useProgram(skyProg)
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.skyBuf)
    const skyA = gl.getAttribLocation(skyProg, "a")
    gl.enableVertexAttribArray(skyA)
    gl.vertexAttribPointer(skyA, 2, gl.FLOAT, false, 0, 0)
    gl.drawArrays(gl.TRIANGLES, 0, 6)
    gl.enable(gl.DEPTH_TEST)
    gl.useProgram(boxProg)
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.boxBuf)
    const stride = 24
    const pos = gl.getAttribLocation(boxProg, "aPos")
    const nrm = gl.getAttribLocation(boxProg, "aNrm")
    gl.enableVertexAttribArray(pos)
    gl.vertexAttribPointer(pos, 3, gl.FLOAT, false, stride, 0)
    gl.enableVertexAttribArray(nrm)
    gl.vertexAttribPointer(nrm, 3, gl.FLOAT, false, stride, 12)
    const vp = mul(perspective(FOVY, pw / ph, 0.4, 220), lookAt(eye, at, [0, 1, 0]))
    gl.uniformMatrix4fv(uVP, false, vp)
    for (let i = 0; i < batch.length; i += 9) {
      gl.uniform3f(uOff, batch[i], batch[i + 1], batch[i + 2])
      gl.uniform3f(uSize, batch[i + 3], batch[i + 4], batch[i + 5])
      gl.uniform3f(uColor, batch[i + 6], batch[i + 7], batch[i + 8])
      gl.drawArrays(gl.TRIANGLES, 0, 36)
    }
    batch.length = 0
    ctx.imageSmoothingEnabled = true
    ctx.drawImage(glCanvas, 0, 0, W, H)
  }

  function hop(ctx, view) {
    ground(view.drift)
    moon()
    for (const s of view.stones) stack(s, 150)
    dino(Math.max(0, (view.LINE - 22 - view.y) * SCALE), view.pace)
    paint(ctx, ctx.canvas.width, ctx.canvas.height, EYE, AT)
  }
  function flap(ctx, view) {
    ground(view.drift)
    moon()
    for (const g of view.gates) gate(g, view.GROUND, view.BX)
    moth((view.GROUND - view.y) * SCALE, view.pace)
    paint(ctx, ctx.canvas.width, ctx.canvas.height, EYE, AT)
  }
  function float(ctx, view) {
    ground(0)
    moon()
    for (const hole of view.holes) ring(hole)
    balloon((360 - view.y) * SCALE)
    paint(ctx, ctx.canvas.width, ctx.canvas.height, EYE, AT)
  }
  return { hop, flap, float }
})()
