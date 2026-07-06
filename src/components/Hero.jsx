import { COUPLE, DATE_LINE, HERO_PHOTO, VENUE } from "../config.js";

export default function Hero() {
  // Each half windows one side of the couple photo via CSS. With no photo set,
  // the mark falls back to two solid accent halves.
  const photoStyle = HERO_PHOTO
    ? { "--hero-photo": `url('${HERO_PHOTO}')` }
    : undefined;

  return (
    <header className="hero">
      <div className="hero-center">
        {/* eyebrow sits with the circle so they read as one group */}
        <p className="eyebrow hero-eyebrow">The Wedding Of</p>

        {/* The couple, split down the middle — Athulya left, Sreehari right */}
        <div
          className={HERO_PHOTO ? "hero-mark hero-mark--photo" : "hero-mark"}
          style={photoStyle}
          aria-hidden="true"
        >
          <div className="hero-half hero-half--l" />
          <div className="hero-half hero-half--r" />
          <span className="hero-amp">&amp;</span>
        </div>

        {/* stacked so long names never overflow; order matches the photo */}
        <h1 className="hero-names">
          <span className="hero-name">{COUPLE.bride}</span>
          <span className="hero-names-amp">&amp;</span>
          <span className="hero-name">{COUPLE.groom}</span>
        </h1>
        <p className="hero-meta">{DATE_LINE}</p>
      </div>

      <div className="hero-cue" aria-hidden="true">
        <span className="cue" />
        <span className="cue-label">Scroll</span>
      </div>
    </header>
  );
}
