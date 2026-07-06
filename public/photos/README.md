# Photos

The site uses up to **3 photos**. The hero couple photo is wired up now; the
two individual portraits are optional (they fall back to styled placeholders
until you add them). Drop files here, then point the matching entry in
`src/config.js` at them.

| File           | Used in                             | Set via / crop guidance                                                                                                                                                                 |
| -------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `couple.webp`  | **Hero split-circle** (both faces)  | `HERO_PHOTO` in `src/config.js`. **Landscape** shot of the couple together, Athulya on the **left** of the frame, Sreehari on the **right**, both faces in the upper-middle. Framing is tuned in `global.css` under `.hero-mark--photo`. |
| `sreehari.jpg` | Groom's semicircle (curves left)    | `PHOTOS.groom.src`. Portrait ~1:2. Face in the **right half** of the frame, gazing right/inward.                                                                                       |
| `athulya.jpg`  | Bride's semicircle (curves right)   | `PHOTOS.bride.src`. Portrait ~1:2. Face in the **left half** of the frame, gazing left/inward.                                                                                         |

To fine-tune how the hero windows each person, adjust `background-position` on
`.hero-mark--photo .hero-half--l` / `--r` in `src/styles/global.css`.

Optimization targets (the site is opened on phones over WhatsApp):

- Resize to ~800–1600px on the long edge before adding.
- Compress to **under 150KB each** (WebP, or JPG quality ~75). `couple.webp` is ~140KB.
- A `couple.png` is also kept for the social/WhatsApp link-preview card (`og:image` in `index.html`), since WhatsApp does not reliably render WebP previews.
