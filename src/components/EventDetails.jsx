import { CALENDAR_URL, DATE_LINE, MAPS_URL, TIME_LINE, VENUE } from '../config.js'

export default function EventDetails() {
  return (
    <section className="event" aria-label="Event details">
      <div className="duo">
        {/* The date-sun: the day itself rendered in the motif */}
        <div className="semi semi--left duo-photo date-sun" aria-hidden="true">
          <div className="lockup">
            <span className="lockup-day">Sun</span>
            <span className="lockup-date">23</span>
            <span className="lockup-month">Aug 2026</span>
          </div>
        </div>

        <div className="info">
          <p className="eyebrow">Event Details</p>
          <h2 className="duo-name">The Muhurtham</h2>
          <dl className="ledger">
            <div className="ledger-row">
              <dt>When</dt>
              <dd>
                {DATE_LINE}
                <br />
                {TIME_LINE}
              </dd>
            </div>
            <div className="ledger-row">
              <dt>Where</dt>
              <dd>
                {VENUE.name}
                <br />
                {VENUE.place}
              </dd>
            </div>
          </dl>
          <div className="pill-row">
            <a className="pill pill--primary" href={MAPS_URL} target="_blank" rel="noreferrer">
              Open in Maps
            </a>
            <a className="pill pill--ghost" href={CALENDAR_URL} target="_blank" rel="noreferrer">
              Add to Calendar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
