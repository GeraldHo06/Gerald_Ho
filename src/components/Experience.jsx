import useFadeIn from '../hooks/useFadeIn'

const experience = [
  {
    hash: 'a3f9c12',
    date: 'April 2024 ',
    company: 'Small Animal Veterinary Clinic',
    role: 'Veterinary Assistant',
    description: 'Assisted vets with animal care, examinations, and medication administration. Maintained clinic cleanliness and organization.',
    current: false,
  }
]

export default function Experience() {
  const ref = useFadeIn()

  return (
    <section id="experience" className="px-8 py-9 border-b border-[#1e1e1e] fade-section" ref={ref}>
      <p className="font-mono text-[11px] text-[#4ade80] mb-5">/* experience */</p>

      <div className="font-mono text-[11px] text-[#666] mb-4">
        $ git log --oneline --career
      </div>

      <div className="space-y-0">
        {experience.map((item, i) => (
          <div key={item.hash} className="relative pl-6">
            {/* vertical line */}
            {i < experience.length - 1 && (
              <div className="absolute left-[7px] top-5 bottom-0 w-px bg-[#1e1e1e]" />
            )}
            {/* dot */}
            <div className="absolute left-0 top-[6px] w-3.5 h-3.5 rounded-full border border-[#2a2a2a] bg-[#0d0d0d] flex items-center justify-center">
              <div className={`w-1.5 h-1.5 rounded-full ${item.current ? 'bg-[#4ade80]' : 'bg-[#ef4444]'}`} />
            </div>

            <div className="pb-8">
              {/* commit line */}
              <div className="flex items-center gap-3 mb-2">
                <span className={`font-mono text-[11px] ${item.current ? 'text-[#4ade80]' : 'text-[#ef4444]'}`}>{item.hash}</span>
                <span className="font-mono text-[11px] text-[#666]">{item.date}</span>
                <span className="font-mono text-[11px] text-[#555]">{item.company}</span>
              </div>
              <p className="text-[13px] font-medium text-[#e2e2e2] mb-1">{item.role}</p>
              <p className="text-[12px] text-[#666] leading-[1.7]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}