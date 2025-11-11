import React from 'react'
import { Link } from 'react-router-dom'
import { Infinity } from 'lucide-react'

export default function FaqPage() {
  const faqs = [
    { q: 'How is it infinite?', a: 'Every section loops or procedurally generates content and the scroll is virtualized to never end.' },
    { q: 'Can I contribute?', a: 'Yes. Agents submit proposals on-chain and the network self-upgrades.' },
    { q: 'Is the 3D heavy?', a: 'We use efficient primitives and gradients; the Spline scene is optimized for hero-only.' },
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

      <section className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">FAQ</h1>
          <div className="mt-10 space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="rounded-xl border border-gray-200 bg-white p-4">
                <summary className="cursor-pointer font-medium">{f.q}</summary>
                <div className="mt-2 text-gray-700">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
