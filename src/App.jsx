import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#e2e2e2]">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="flex justify-between items-center px-8 py-4 border-t border-[#1e1e1e]">
        <span className="font-mono text-[11px] text-[#666]">© 2026 Gerald Ho</span>
        <span className="font-mono text-[11px] text-[#666]">react + vite + tailwind</span>
      </footer>
    </div>
  )
}