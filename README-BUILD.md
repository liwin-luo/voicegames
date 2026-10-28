# Voicegames — build & i18n

The site is plain static HTML, but **the pages are generated**. Edit the data files, run the build, commit the output. Vercel needs no build step.

## Languages

| Locale | URL | Speech recognition |
|---|---|---|
| English (default) | `/` | en-US |
| 简体中文 | `/zh/` | zh-CN |
| Español | `/es/` | es-ES |
| 日本語 | `/ja/` | ja-JP |
| Português (BR) | `/pt/` | pt-BR |
| Français | `/fr/` | fr-FR |
| Deutsch | `/de/` | de-DE |
| Italiano | `/it/` | it-IT |
| 한국어 | `/ko/` | ko-KR |
| Русский | `/ru/` | ru-RU |

Every page carries `hreflang` alternates + `x-default` (en), a language dropdown in the top bar (native `<details>`, no JS), and localized JSON-LD. All 10 versions are listed in `sitemap.xml` with cross-links.

## Edit workflow

```bash
# 1. Change copy / word lists in:
build/ui.mjs              # UI strings for en/zh/es/ja + locale registry (locales array)
build/ui-more.mjs         # UI strings for pt/fr/de/it/ko/ru
build/games-volume.mjs    # Dino/Flap/Float 3D+2D, Louder, Miner, Floors — meta, how-to, FAQ (en/zh/es/ja)
build/games-speech.mjs    # Say it/Count/Repeat/Voice over/Voice acting, embed (en/zh/es/ja)
build/games-more-1.mjs    # all games copy overlay: pt / fr / de
build/games-more-2.mjs    # all games copy overlay: it / ko / ru
build/words.mjs           # speech word lists: en/zh/es/ja
build/words-more.mjs      # speech word lists: pt/fr/de/it/ko/ru

# Hook games (catch/racer/bricks/snake/march/tug/puff/hop) live in js/game-<slug>.js.
# Each file registers itself into window.VG_HOOKS; world.js dispatches step/draw to it.
# A game object with a `hook: "<slug>"` field gets the script tag emitted automatically.

# 2. Regenerate:
node build/build.mjs

# 3. Commit everything (generated HTML is checked in).
```

Never hand-edit the generated `index.html` files — the next build overwrites them.
If you must hotfix a page, fix the data file and rebuild.

## How localized gameplay works

- Each page loads `/js/words-{en|zh|es|ja}.js` (generated) before the game script. It sets `window.VG` with the word lists and UI strings.
- `play.js` / `world.js` / `demo.js` read `window.VG` and fall back to English when absent.
- Speech games set the recognizer language from `<html lang>` + `VG.speechLang`. Chinese/Japanese matching strips spaces and matches by substring; Spanish accepts accent-less variants via the alias tables in `words.mjs`.

## Cache busting

`css/site.css?v=N` is referenced by every page — bump `N` in `build/build.mjs` (head template) when changing CSS, then rebuild. Script tags carry `?v=N` too (`play.js?v=2`, `world.js?v=2`, `vox.js?v=side`, `hud.js?v=1`, `demo.js?v=2`, `words-*.js?v=1`) — bump those in `build.mjs` when the JS changes.

## Deploy

Same as before — commit and `vercel --prod`. Nothing about the deployment changed: still a fully static directory.
