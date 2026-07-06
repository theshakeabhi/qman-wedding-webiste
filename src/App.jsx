import Hero from './components/Hero.jsx'
import Countdown from './components/Countdown.jsx'
import PersonCard from './components/PersonCard.jsx'
import EventDetails from './components/EventDetails.jsx'
import { BIOS, COUPLE, PHOTOS } from './config.js'

export default function App() {
  return (
    <main>
      <Hero />
      <Countdown />
      <section className="two" aria-label="The couple">
        <p className="eyebrow section-head">The Two</p>
        <PersonCard
          eyebrow={BIOS.groom.eyebrow}
          name={COUPLE.groom}
          lines={BIOS.groom.lines}
          detail={BIOS.groom.detail}
          photo={PHOTOS.groom}
          initial="S"
        />
        <div className="divider-dome" aria-hidden="true" />
        <PersonCard
          flip
          eyebrow={BIOS.bride.eyebrow}
          name={COUPLE.bride}
          lines={BIOS.bride.lines}
          detail={BIOS.bride.detail}
          photo={PHOTOS.bride}
          initial="A"
        />
      </section>
      <EventDetails />
      <footer className="site-footer">
        <p>
          made with <span className="footer-heart" aria-label="love">&#9829;</span> by
          Abhishek Chandrasenan
        </p>
        <p className="footer-sub">with the emotional support of Nourin</p>
      </footer>
    </main>
  )
}
