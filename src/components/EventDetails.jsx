import { EVENTS, LOCATION_URL } from "../config.js";

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
          <h2 className="duo-name">Event Details</h2>
          <dl className="ledger">
            {EVENTS.map((event) => (
              <div className="ledger-row" key={event.label}>
                <dt>{event.label}</dt>
                <dd>
                  {event.time}
                  <br />
                  <a
                    className="venue-link"
                    href={event.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {event.venue}
                    <svg
                      className="ext-icon"
                      viewBox="0 0 24 24"
                      width="0.75em"
                      height="0.75em"
                      aria-hidden="true"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"
                      />
                    </svg>
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="event-cta">
        <a
          className="pill pill--primary location-pill"
          href={LOCATION_URL}
          target="_blank"
          rel="noreferrer"
        >
          Location &amp; Details
        </a>
      </div>
    </section>
  );
}
