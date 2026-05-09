import { useState } from 'react'
import useFadeIn from '../hooks/useFadeIn'

const EMAIL = 'hogerald06@gmail.com'

const socialLinks = [
  {
    label: 'github',
    href: 'https://github.com/GeraldHo06',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
    ),
  },
  {
    label: 'linkedin',
    href: 'https://www.linkedin.com/in/gerald-ho-40a264301/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
    ),
  },
]

export default function Contact() {
  const ref = useFadeIn()
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section id="contact" className="px-8 py-9 fade-section" ref={ref}>
      <p className="font-mono text-[11px] text-[#4ade80] mb-2">/* contact */</p>
      <p className="text-[13px] text-[#666] mb-6 leading-relaxed max-w-sm">
        Open to interesting roles and conversations. Drop me a line.
      </p>

      <div className="flex flex-wrap items-center gap-6">
        {/* copy email button */}
        <button
          onClick={copyEmail}
          className="flex items-center gap-2 font-mono text-[12px] transition-colors group"
          style={{ color: copied ? '#4ade80' : '#555', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          aria-label="Copy email address"
        >
          {copied ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
              copied!
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              {EMAIL}
            </>
          )}
        </button>

        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="flex items-center gap-2 font-mono text-[12px] text-[#555] hover:text-[#4ade80] transition-colors"
          >
            {link.icon}
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}