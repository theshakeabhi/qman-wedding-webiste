import { useEffect, useState } from 'react'

// Live countdown to a fixed instant. Recomputes from Date.now() every tick
// (never decrements), so interval jitter and in-app-browser throttling can't
// accumulate drift — the first tick after a tab resumes snaps to the truth.
export function useCountdown(targetMs, endMs) {
  const [now, setNow] = useState(() => Date.now())
  const isOver = now >= endMs

  useEffect(() => {
    if (isOver) return
    const id = setInterval(() => setNow(Date.now()), 1000)
    const resync = () => {
      if (!document.hidden) setNow(Date.now())
    }
    document.addEventListener('visibilitychange', resync)
    return () => {
      clearInterval(id)
      document.removeEventListener('visibilitychange', resync)
    }
  }, [isOver, targetMs, endMs])

  const diff = Math.max(0, targetMs - now)
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1_000) % 60,
    phase: now < targetMs ? 'before' : isOver ? 'after' : 'during',
  }
}
