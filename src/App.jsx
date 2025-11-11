import React, { useMemo, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Infinity, Rocket, BrainCircuit, Shield, Sparkles, Menu } from 'lucide-react'

function App() {
  const [panelOpen, setPanelOpen] = useState(false)

  // Parallax for the headline based on scroll
  const { scrollYProgress } = useScroll()
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.6])

  // Generate infinite items for the mosaic section
  const tiles = useMemo(() => Array.from({ length: 60 }, (_, i) => i), [])

  useEffect(() => {
    if (panelOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [panelOpen])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top nav */}
      <header className="fixed top-0 left-0 right-0 z-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-500 grid place-items-center text-white">
              <Infinity size={18} />
            </div>
            <span className="font-extrabold tracking-tight text-lg">Infinity</span>
            <span className="hidden md:inline text-gray-500 ml-2">Blockchain × AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#explore" className="hover:text-gray-900">Explore</a>
            <a href="#vision" className="hover:text-gray-900">Vision</a>
            <a href="#tech" className="hover:text-gray-900">Tech</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </nav>
          <button className="md:hidden p-2 rounded-lg border border-gray-200 bg-white/80 backdrop-blur">
            <Menu size={18} />
          </button>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </header>

      {/* Hero with Spline cover */}
      <section className="relative w-full h-[88vh] md:h-[94vh] overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 flex items-center">
          <motion.div style={{ y: headlineY, opacity: headlineOpacity }} className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Build on the Infinite Edge
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-700">
              A living canvas where on-chain trust fuses with autonomous intelligence. 
              Compose agents, settle states, and stream verifiable insights—endlessly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#explore" className="rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-gray-800 transition">
                Explore Infinity
              </a>
              <a href="#vision" className="rounded-full bg-white/90 backdrop-blur text-gray-900 px-5 py-2.5 text-sm font-medium hover:bg-white transition border border-gray-200">
                Our Vision
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infinite ticker */}
      <section id="explore" className="relative overflow-hidden py-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50 to-transparent" />
        <InfiniteTicker />
      </section>

      {/* Feature ribbons */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<BrainCircuit className="text-fuchsia-600" />}
              title="Autonomous Agents"
              text="AI that reasons on-chain, coordinating capital, data, and compute with cryptographic guarantees."
              badge="AI Native"
            />
            <FeatureCard
              icon={<Shield className="text-cyan-600" />}
              title="Verifiable Compute"
              text="Proofs not promises. From rollups to zk-ML, ship systems that can be trusted at the speed of software."
              badge="On-Chain"
            />
            <FeatureCard
              icon={<Rocket className="text-violet-600" />}
              title="Infinite Composability"
              text="Protocols and models click together like atoms, forming emergent networks of value and knowledge."
              badge="Composable"
            />
          </div>
        </div>
      </section>

      {/* Infinite mosaic section */}
      <section id="vision" className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">An Ever-Expanding Universe</h2>
            <p className="mt-3 text-gray-700 max-w-2xl">
              Infinity isn't a page count. It's a principle. This space evolves with every block and every breakthrough—forever.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {tiles.map((i) => (
              <motion.div
                key={i}
                className="aspect-square rounded-lg bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 border border-gray-100 overflow-hidden relative"
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 opacity-70" style={{
                  backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(217,70,239,0.25), transparent 40%), radial-gradient(circle at 70% 70%, rgba(34,211,238,0.25), transparent 45%)'
                }} />
                <div className="absolute bottom-1 right-1 text-[10px] px-1.5 py-0.5 rounded bg-white/70 border border-white/80 text-gray-700">#{i + 1}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech section with subtle looping gradient background */}
      <section id="tech" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-[1] animate-[pulse_8s_ease-in-out_infinite] bg-[radial-gradient(1200px_500px_at_50%_-100px,rgba(217,70,239,0.08),transparent),radial-gradient(600px_300px_at_10%_60%,rgba(34,211,238,0.08),transparent)]" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Proof-first systems</h3>
              <p className="mt-4 text-gray-700">
                We architect from proofs outward—consensus, execution, and intelligence all converge with verifiability. 
                The result is an internet that compounds trust, not just traffic.
              </p>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex items-start gap-3"><Sparkles className="mt-0.5 text-fuchsia-600" size={18}/> zk-ML pipelines that attest to model integrity</li>
                <li className="flex items-start gap-3"><Sparkles className="mt-0.5 text-cyan-600" size={18}/> Agentic protocols that self-upgrade via governance</li>
                <li className="flex items-start gap-3"><Sparkles className="mt-0.5 text-violet-600" size={18}/> Data availability that scales with the network's curiosity</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
              <LoopingTimeline />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <h3 className="text-2xl md:text-3xl font-bold">FAQ</h3>
          <div className="mt-8 space-y-6">
            <FaqItem q="What makes this site ‘infinite’?" a="Endless ticker streams, generative mosaics, and looping timelines create a sense of boundless motion. Content is designed to scale indefinitely." />
            <FaqItem q="Is this about Blockchain or AI?" a="Both. We blend the certainty of on-chain systems with the creativity of intelligent agents." />
            <FaqItem q="How do I explore more?" a="Tap the right-edge button to open the Infinity Panel—our living footer with links, releases, and streams." />
          </div>
        </div>
      </section>

      {/* Floating right-edge button to open the side-footer */}
      <button
        aria-label="Open Infinity Panel"
        onClick={() => setPanelOpen(true)}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-40 h-12 w-12 rounded-full shadow-lg bg-gradient-to-br from-fuchsia-500 to-cyan-500 text-white grid place-items-center hover:brightness-110"
      >
        <Infinity size={22} />
      </button>

      {/* Right-side footer panel */}
      <motion.aside
        initial={false}
        animate={{ x: panelOpen ? 0 : 360 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-full w-[88vw] max-w-md z-50 bg-white/95 backdrop-blur border-l border-gray-200 shadow-2xl flex flex-col"
      >
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-500 grid place-items-center text-white">
              <Infinity size={16} />
            </div>
            <span className="font-semibold">Infinity Panel</span>
          </div>
          <button onClick={() => setPanelOpen(false)} className="px-3 py-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-sm">Close</button>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <PanelSection title="Latest Releases">
              <ul className="text-sm text-gray-700 space-y-2">
                <li>v0.7 — Agent-to-Agent intent markets</li>
                <li>v0.6 — zk-ML verifier toolkit</li>
                <li>v0.5 — Rollup-in-a-box for research</li>
              </ul>
            </PanelSection>
            <PanelSection title="Streams">
              <p className="text-sm text-gray-700">Live telemetry of blocks, proofs, and agent messages. Coming soon.</p>
            </PanelSection>
            <PanelSection title="Links">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <a className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50" href="#explore">Docs</a>
                <a className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50" href="#vision">Research</a>
                <a className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50" href="#tech">Roadmap</a>
                <a className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50" href="#faq">Community</a>
              </div>
            </PanelSection>
          </div>
        </div>

        <div className="mt-auto p-4 text-xs text-gray-500">
          Built on curiosity. Expands every time you visit.
        </div>
      </motion.aside>

      {/* Scrim when panel is open */}
      {panelOpen && (
        <button
          aria-label="Close Panel"
          onClick={() => setPanelOpen(false)}
          className="fixed inset-0 z-40 bg-black/20"
        />
      )}

      {/* Bottom spacer so the infinite feel continues */}
      <div className="h-32" />
    </div>
  )
}

function FeatureCard({ icon, title, text, badge }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
    >
      <div className="flex items-center justify-between">
        <div className="h-10 w-10 rounded-xl grid place-items-center bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 text-gray-900">
          {icon}
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700">{badge}</span>
      </div>
      <h4 className="mt-5 text-lg font-semibold">{title}</h4>
      <p className="mt-2 text-gray-700">{text}</p>
    </motion.div>
  )
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden">
      <button onClick={() => setOpen(v => !v)} className="w-full text-left p-4 bg-white flex items-center justify-between">
        <span className="font-medium">{q}</span>
        <span className="text-sm text-gray-500">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="p-4 bg-gray-50 text-gray-700 text-sm">{a}</div>
      )}
    </div>
  )
}

function InfiniteTicker() {
  const items = ['Zero-Knowledge', 'Agentic AI', 'Rollups', 'DeFi', 'On-Chain Oracles', 'zk-ML', 'DA Layers', 'Governance', 'Autonomy']
  return (
    <div className="relative">
      <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-8 whitespace-nowrap animate-[ticker_30s_linear_infinite] text-sm font-medium text-gray-700">
          {[...items, ...items, ...items].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-500" /> {t}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
      `}</style>
    </div>
  )
}

function LoopingTimeline() {
  const rows = [
    { t: 'Block', c: 'New L2 block committed' },
    { t: 'Agent', c: 'Policy updated via on-chain vote' },
    { t: 'Proof', c: 'zk-ML inference verified' },
    { t: 'Oracle', c: 'Signal streamed to agents' },
    { t: 'Settlement', c: 'Batch finalized across shards' },
  ]
  return (
    <div className="relative overflow-hidden">
      <div className="space-y-3 animate-[timeline_12s_linear_infinite]">
        {[...rows, ...rows, ...rows].map((r, i) => (
          <div key={i} className="flex items-center gap-3 text-sm">
            <div className="h-2 w-2 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-500" />
            <div className="flex-1 flex items-center justify-between">
              <span className="text-gray-800 font-medium">{r.t}</span>
              <span className="text-gray-600">{r.c}</span>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes timeline { 0% { transform: translateY(0); } 100% { transform: translateY(-33.333%); } }
      `}</style>
    </div>
  )
}

function PanelSection({ title, children }) {
  return (
    <div className="mb-6">
      <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">{title}</div>
      <div className="rounded-xl border border-gray-200 bg-white p-3">
        {children}
      </div>
    </div>
  )
}

export default App
