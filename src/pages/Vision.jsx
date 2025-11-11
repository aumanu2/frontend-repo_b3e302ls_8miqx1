import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Infinity } from 'lucide-react'

export default function Vision() {
  const stripes = new Array(24).fill(0)
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

      <section className="relative h-[120vh] overflow-hidden">
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#fff,rgba(217,70,239,.08),#fff,rgba(34,211,238,.08),#fff)] animate-[spin_30s_linear_infinite]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(600px_300px_at_center,black,transparent_80%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Vision as a Vector</h1>
            <p className="mt-3 max-w-2xl text-lg text-gray-700">We treat vision like a field: gradients pull ideas into form. Rotate the field, feel the pull.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-4">
            {stripes.map((_, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="h-32 rounded-2xl border border-gray-200 bg-[linear-gradient(120deg,rgba(217,70,239,.12),transparent),linear-gradient(300deg,rgba(34,211,238,.12),transparent)]"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
