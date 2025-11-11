import React, { useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'
import { Infinity } from 'lucide-react'

export default function Explore() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useSpring(useTransform(y, [-100, 100], [8, -8]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(x, [-100, 100], [-8, 8]), { stiffness: 200, damping: 20 })

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - (rect.left + rect.width / 2))
    y.set(e.clientY - (rect.top + rect.height / 2))
  }

  const [active, setActive] = useState(0)

  const cards = [
    { t: 'Agents', d: 'Self-directed on-chain intelligence.' },
    { t: 'Proofs', d: 'zk-verified compute primitives.' },
    { t: 'Signals', d: 'Oracles that sing in sync.' },
    { t: 'Rollups', d: 'Composable execution fabrics.' },
  ]

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

      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80" />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 grid grid-rows-[1fr_auto]">
          <div />
          <div className="pb-20">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Explore the Infinite</h1>
            <p className="mt-3 text-lg text-gray-700 max-w-2xl">Move your cursor, tilt space, select a motif. This scene bends with your attention.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div
            onMouseMove={onMove}
            onMouseLeave={() => { x.set(0); y.set(0) }}
            className="relative rounded-3xl border border-gray-200 overflow-hidden bg-gradient-to-br from-fuchsia-50 to-cyan-50"
          >
            <motion.div
              style={{ rotateX: rx, rotateY: ry }}
              className="p-8 md:p-12 will-change-transform"
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cards.map((c, i) => (
                  <motion.button
                    key={c.t}
                    onClick={() => setActive(i)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`text-left rounded-2xl p-4 border ${active===i?'border-gray-900 bg-white':'border-gray-200 bg-white/70'} backdrop-blur shadow-sm`}
                  >
                    <div className="text-sm text-gray-500">{i+1 < 10 ? `0${i+1}` : i+1}</div>
                    <div className="mt-1 font-semibold">{c.t}</div>
                    <div className="mt-1 text-sm text-gray-700">{c.d}</div>
                  </motion.button>
                ))}
              </div>
              <motion.div layout className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                <div className="text-sm text-gray-500">Selection</div>
                <div className="mt-2 text-lg font-semibold">{cards[active].t}</div>
                <p className="mt-1 text-gray-700">{cards[active].d}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
