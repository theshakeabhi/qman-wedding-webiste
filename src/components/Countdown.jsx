import { useCountdown } from '../hooks/useCountdown.js'
import { CEREMONY_END, WEDDING_TIMESTAMP } from '../config.js'

const pad = (n) => String(n).padStart(2, '0')

export default function Countdown() {
  const { days, hours, minutes, seconds, phase } = useCountdown(
    WEDDING_TIMESTAMP,
    CEREMONY_END,
  )

  const units = [
    [days, 'Days'],
    [hours, 'Hours'],
    [minutes, 'Minutes'],
    [seconds, 'Seconds'],
  ]

  return (
    <section className="countdown" aria-label="Countdown to the ceremony">
      <p className="eyebrow">Until the Muhurtham</p>

      <div className="sun-wrap">
        <div className="sun">
          {phase === 'before' ? (
            <div className="units">
              {units.map(([value, label]) => (
                <div className="unit" key={label}>
                  <b>{pad(value)}</b>
                  <small>{label}</small>
                </div>
              ))}
            </div>
          ) : (
            <p className="sun-message">
              {phase === 'during' ? 'Happening now' : 'Just married'}
            </p>
          )}
        </div>
      </div>

      <p className="countdown-date">Sunday, 23 August 2026 · 10:30 AM IST</p>
    </section>
  )
}
