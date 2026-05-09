import { useEffect, useState } from 'react'

const links = ['about', 'experience', 'projects', 'contact']

const STATUS = {
  active: true,
  label: 'looking for internship',
}

export default function Nav() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observers = []

    links.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <nav className="flex items-center justify-between px-8 py-[18px] border-b border-[#1e1e1e] sticky top-0 bg-[#0d0d0d] z-50">
      <div className="flex items-center gap-3">
        <span className="font-mono text-[13px] text-[#4ade80]">~/Gerald Ho</span>
        <span className="flex items-center gap-1.5 border border-[#1e1e1e] rounded-full px-2.5 py-[3px]">
          <span
            className="status-dot"
            style={{ background: STATUS.active ? '#4ade80' : '#555' }}
          />
          <span className="font-mono text-[10px]" style={{ color: STATUS.active ? '#4ade80' : '#555' }}>
            {STATUS.label}
          </span>
        </span>
      </div>
      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              className="font-mono text-[11px] transition-colors duration-150"
              style={{ color: active === link ? '#4ade80' : '#555' }}
            >
              {active === link ? `> ${link}` : link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}