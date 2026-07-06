// One block of the reference pattern: semicircle portrait, flat edge facing
// the text. `flip` mirrors the whole block (photo right, text right-aligned).
export default function PersonCard({ eyebrow, name, lines, detail, photo, initial, flip }) {
  return (
    <div className={flip ? 'duo duo--flip' : 'duo'}>
      <div className={`semi duo-photo ${flip ? 'semi--right' : 'semi--left'}`}>
        {photo?.src ? (
          <img src={photo.src} alt={photo.alt} loading="lazy" />
        ) : (
          <span className="ph-initial" aria-hidden="true">
            {initial}
          </span>
        )}
      </div>
      <div className="info">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="duo-name">{name}</h2>
        {lines.map((line) => (
          <p className="duo-line" key={line}>
            {line}
          </p>
        ))}
        <hr className="rule" />
        <p className="duo-detail">{detail}</p>
      </div>
    </div>
  )
}
