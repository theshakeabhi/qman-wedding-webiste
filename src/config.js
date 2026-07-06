// Single source of truth for all site content.
// Edit this file (and drop photos into public/photos/) — no component changes needed.

export const COUPLE = {
  groom: 'Sreehari',
  bride: 'Athulya',
}

// Explicit +05:30 offset makes these fixed instants in time — the countdown is
// correct for a viewer in any timezone. Never build these with new Date(y, m, d, ...).
export const WEDDING_TIMESTAMP = Date.parse('2026-08-23T10:30:00+05:30')
export const CEREMONY_END = Date.parse('2026-08-23T11:30:00+05:30')

export const DATE_LINE = 'Sunday, August 23, 2026'
export const TIME_LINE = '10:30 – 11:30 AM IST'
export const DATE_COMPACT = '23 · 08 · 2026'

export const VENUE = {
  name: 'Century Auditorium',
  place: 'Chelari, Kerala',
}

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Century+Auditorium+Chelari+Kerala'

// 10:30–11:30 AM IST expressed in UTC (05:00–06:00Z)
export const CALENDAR_URL =
  'https://calendar.google.com/calendar/render?action=TEMPLATE' +
  '&text=Sreehari+%26+Athulya+%E2%80%94+Wedding' +
  '&dates=20260823T050000Z/20260823T060000Z' +
  '&location=Century+Auditorium%2C+Chelari%2C+Kerala'

// Set src to a path under public/ (e.g. '/photos/sreehari.jpg') once real
// photos exist; null renders the styled placeholder instead.
export const PHOTOS = {
  groom: { src: null, alt: 'Sreehari' },
  bride: { src: null, alt: 'Athulya' },
}

// The couple photo that fills the hero split-circle. Athulya is on the left of
// the frame, Sreehari on the right, so the left semicircle windows her and the
// right windows him. Save the image at this path; until then the hero falls
// back to the two solid accent halves.
export const HERO_PHOTO = '/photos/couple.webp'

// Keep bios to 2–3 short sentences — the text column is ~142px wide on the
// smallest phones and long copy will feel cramped.
export const BIOS = {
  groom: {
    eyebrow: 'The Groom',
    lines: ['A few warm lines about Sreehari go here —', 'his family, his home, what makes him him.'],
    detail: 'Family · Place',
  },
  bride: {
    eyebrow: 'The Bride',
    lines: ['A few warm lines about Athulya go here —', 'her family, her home, what makes her her.'],
    detail: 'Family · Place',
  },
}

