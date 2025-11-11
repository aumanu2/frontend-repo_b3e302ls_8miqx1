import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Infinity } from 'lucide-react'

export default function Tech() {
  const waves = new Array(80).fill(0)
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <header className="fixed top-0 left-0 right-0 z-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-500 grid place-items-center text-white">
              <Infinity size={18} />
            </div>
            <span className="font-extrabold tracking-tight text-lg">Infinity</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <Link to="/explore" className="hover:text-gray-900">Explore</Link>
            <Link to="/vision" className="hover:text-gray-900">Vision</Link>
            <Link to="/tech" className="hover:text-gray-900">Tech</Link>
            <Link to="/faq" className="hover:text-gray-900">FAQ</Link>
          </nav>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </header>

      <section className="relative h-[110vh] overflow-hidden">
        <div className="absolute inset-0">
          <svg width="100%" height="100%">
            <defs>
              <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="rgba(217,70,239,0.4)" />
                <stop offset="100%" stopColor="rgba(34,211,238,0.4)" />
              </linearGradient>
              <filter id="blur"><feGaussianBlur stdDeviation="20" /></filter>
            </defs>
            {waves.map((_, i) => (
              <motion.path
                key={i}
                d={`M 0 ${i*8} Q 25 ${i*8+4}, 50 ${i*8} T 100 ${i*8}`}
                stroke="url(#g)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: i*0.02, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
                filter="url(#blur)"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/10 to-white/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 h-full flex items-end pb-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Technology in Motion</h1>
            <p className="mt-3 max-w-2xl text-lg text-gray-700">Parametric waves generated on the fly create a sense of living infrastructure.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
