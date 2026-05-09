import { useEffect, useState } from 'react'
import avatar from '../assets/avatar.jpg'

const COMMANDS = [
  { prompt: 'whoami', output: 'Gerald Ho' },
  { prompt: 'role',   output: '// software engineer' },
]

const TYPING_SPEED = 60
const PAUSE_AFTER  = 700

export default function Hero() {
  const [lines, setLines]       = useState([])
  const [showDesc, setShowDesc] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function typeAll() {
      for (let i = 0; i < COMMANDS.length; i++) {
        const { prompt, output } = COMMANDS[i]

        for (let c = 0; c <= prompt.length; c++) {
          if (cancelled) return
          setLines((prev) => {
            const next = [...prev]
            next[i] = { prompt: prompt.slice(0, c), output: null, typing: true }
            return next
          })
          await sleep(TYPING_SPEED)
        }

        await sleep(PAUSE_AFTER)
        if (cancelled) return

        setLines((prev) => {
          const next = [...prev]
          next[i] = { prompt, output, typing: false }
          return next
        })

        await sleep(300)
      }

      if (!cancelled) setShowDesc(true)
    }

    typeAll()
    return () => { cancelled = true }
  }, [])

  return (
    <section className="px-8 py-14 border-b border-[#1e1e1e]">
      <div className="grid grid-cols-2 gap-8 items-center">

        {/* left — terminal content */}
        <div>
          <div className="mb-6 space-y-3">
            {lines.map((line, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 font-mono text-[12px] text-[#555]">
                  <span className="text-[#4ade80]">❯</span>
                  <span>{line.prompt}</span>
                  {line.typing && <span className="cursor-block" aria-hidden="true" />}
                </div>
                {line.output && (
                  <p
                    className="font-mono mt-1 ml-4"
                    style={{
                      fontSize: i === 0 ? '36px' : '15px',
                      fontWeight: i === 0 ? 500 : 400,
                      color: i === 0 ? '#f0f0f0' : '#4ade80',
                      lineHeight: 1.2,
                    }}
                  >
                    {line.output}
                  </p>
                )}
              </div>
            ))}

            {showDesc && (
              <div className="flex items-center gap-2 font-mono text-[12px] text-[#555]">
                <span className="text-[#4ade80]">❯</span>
                <span className="cursor-block" aria-hidden="true" />
              </div>
            )}
          </div>

          {showDesc && (
            <div className="transition-opacity duration-500">
              <p className="text-[14px] text-[#888] max-w-[440px] leading-[1.75] mb-7">
                I build modern web and mobile applications with a focus on UI
                and user experience. Currently exploring React and
                cross-platform development.
              </p>
              <div className="flex gap-3">
                <a
                  href="#projects"
                  className="font-mono text-[11px] bg-[#4ade80] text-[#0d0d0d] font-medium px-[18px] py-2 rounded hover:bg-[#22c55e] transition-colors"
                >
                  view projects
                </a>
                <a
                  href="#contact"
                  className="font-mono text-[11px] text-[#555] border border-[#2a2a2a] px-[18px] py-2 rounded hover:text-[#e2e2e2] hover:border-[#444] transition-colors"
                >
                  get in touch
                </a>
              </div>
            </div>
          )}
        </div>

        {/* right — photo */}
        <div className="flex justify-center items-center">
          <div className="relative">
            <img
              src={avatar}
              alt="Gerald Ho"
              className="w-64 h-64 object-cover rounded grayscale"
            />
            {/* green offset border accent */}
            <div className="absolute -bottom-2 -right-2 w-full h-full border border-[#4ade80] rounded pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  )
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
} 