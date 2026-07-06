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

// The day's two events, shown in the details ledger.
// venue links open the venue's Google Maps place in a new tab.
export const EVENTS = [
  {
    label: 'Wedding',
    time: '10:30 AM – 11:30 AM',
    venue: 'Century Auditorium, Chelari',
    mapUrl:
      'https://www.google.com/maps/place/Century+Auditorium+Chelari/@11.1135101,75.8858792,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba651ef56b1dfad:0x28e702eb71a9f308!8m2!3d11.1135101!4d75.8884541!16s%2Fg%2F1tf68h5p?entry=tts&g_ep=EgoyMDI2MDYwMy4xIPu8ASoASAFQAw%3D%3D&skid=3ffbfbc9-0340-4550-a020-71c7ac9afda6',
  },
  {
    label: 'Reception',
    time: '5 PM – 9 PM',
    venue: 'Vintage 1955 Convention Centre, Kuttoolangadi, Farook College',
    mapUrl:
      'https://www.google.com/maps/place/1955+Vintage/@11.1927051,75.8601994,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba65b007ab11f39:0x5f5934987ac36537!8m2!3d11.1927051!4d75.8601994!16s%2Fg%2F11vr7v309p?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D',
  },
]

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Century+Auditorium+Chelari+Kerala'

// Linktree with directions / location details for the venues.
export const LOCATION_URL = 'https://linktr.ee/Sreehari_Athulya'

// 10:30–11:30 AM IST expressed in UTC (05:00–06:00Z)
export const CALENDAR_URL =
  'https://calendar.google.com/calendar/render?action=TEMPLATE' +
  '&text=Sreehari+%26+Athulya+%E2%80%94+Wedding' +
  '&dates=20260823T050000Z/20260823T060000Z' +
  '&location=Century+Auditorium%2C+Chelari%2C+Kerala'

// Set src to a path under public/ (e.g. '/photos/sreehari.jpg') once real
// photos exist; null renders the styled placeholder instead.
export const PHOTOS = {
  groom: { src: '/photos/sreehari.webp', alt: 'Sreehari' },
  bride: { src: '/photos/athulya.webp', alt: 'Athulya' },
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
    lines: ['S/O Asokan AC & Rajani N', 'Alungal Chembeettil', 'Farook College'],
    detail: 'Calicut',
  },
  bride: {
    eyebrow: 'The Bride',
    lines: ['D/O Radhakrishnan AV & Anila K', 'Avathaan Veettil', 'Chelari'],
    detail: 'Malappuram',
  },
}

