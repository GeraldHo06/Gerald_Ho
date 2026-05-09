import useFadeIn from '../hooks/useFadeIn'

const frontend = [
  { name: 'HTML', icon: 'devicon-html5-plain' },
  { name: 'CSS', icon: 'devicon-css3-plain' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain' },
  { name: 'React', icon: 'devicon-react-original' },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
]

const backend = [
  { name: 'Node.js', icon: 'devicon-nodejs-plain' },
  { name: 'Firebase', icon: 'devicon-firebase-plain' },
  { name: 'REST APIs', icon: 'devicon-postman-plain' },
]

const mobile = [
  { name: 'Flutter', icon: 'devicon-flutter-plain' },
]

const languages = [
  { name: 'JavaScript', icon: 'devicon-javascript-plain' },
  { name: 'C#', icon: 'devicon-csharp-plain' },
  { name: 'C++', icon: 'devicon-cplusplus-plain' },
  { name: 'Python', icon: 'devicon-python-plain' },
]

const tools = [
  { name: 'Git', icon: 'devicon-git-plain' },
  { name: 'GitHub', icon: 'devicon-github-original' },
  { name: 'VS Code', icon: 'devicon-vscode-plain' },
  { name: 'Vercel', icon: 'devicon-vercel-plain' },
]

const categories = [
  { label: '// frontend', items: frontend },
  { label: '// backend', items: backend },
  { label: '// mobile', items: mobile },
  { label: '// languages', items: languages },
  { label: '// tools', items: tools },
]

function SkillTag({ skill }) {
  return (
    <div className="flex items-center gap-2 bg-[#161616] border border-[#2a2a2a] rounded-[3px] px-3 py-2">
      <i className={`${skill.icon} text-[16px] text-[#aaa]`} />
      <span className="font-mono text-[11px] text-[#aaa]">{skill.name}</span>
    </div>
  )
}

export default function About() {
  const ref = useFadeIn()

  return (
    <section className="px-8 py-9 border-b border-[#1e1e1e] fade-section" ref={ref}>
      <p className="font-mono text-[11px] text-[#4ade80] mb-5">/* about */</p>
      <div className="grid grid-cols-2 gap-8">

        {/* bio */}
        <p className="text-[13px] text-[#888] leading-[1.8]">
          Year 2 Software Engineering student at Asia Pacific University.
          <br /><br />
          I enjoy building user-focused applications — from responsive websites
          to small interactive tools. I've worked with React, JavaScript, and
          C#, focusing on clean interfaces and practical solutions.
          <br /><br />
          Currently improving my skills in modern frontend frameworks and
          exploring cross-platform mobile development.
        </p>

        {/* skills */}
        <div className="space-y-4">
          <p className="font-mono text-[13px] text-[#4ade80]">// skills</p>
          {categories.map(({ label, items }) => (
            <div key={label}>
              <p className="font-mono text-[11px] text-[#555] mb-2">{label}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <SkillTag key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}