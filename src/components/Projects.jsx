import useFadeIn from '../hooks/useFadeIn'

const projects = [
  {
    name: 'coming soon',
    description: 'Working on something. Check back later.',
    tags: [],
    url: 'https://github.com/GeraldHo06',
    wip: true,
  },
]

export default function Projects() {
  const ref = useFadeIn()

  return (
    <section id="projects" className="px-8 py-9 border-b border-[#1e1e1e] fade-section" ref={ref}>
      <p className="font-mono text-[11px] text-[#4ade80] mb-1">/* projects */</p>
      <p className="font-mono text-[11px] text-[#666] mb-5">$ ls -la ./projects</p>

      <div className="border border-[#1e1e1e] rounded">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-5 py-4 group hover:bg-[#111] transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] text-[#333]">drwxr-xr-x</span>
              <span className="font-mono text-[13px] text-[#e2e2e2]">{project.name}</span>
              {project.wip && (
                <span className="font-mono text-[10px] text-[#555] border border-[#2a2a2a] px-2 py-0.5 rounded">
                  wip
                </span>
              )}
            </div>
            <span className="font-mono text-[11px] text-[#333] group-hover:text-[#4ade80] transition-colors">↗</span>
          </a>
        ))}
      </div>

      <p className="font-mono text-[11px] text-[#666] mt-4">
        // more projects on{' '}
        <a
          href="https://github.com/GeraldHo06"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4ade80] hover:underline"
        >
          github
        </a>
      </p>
    </section>
  )
}