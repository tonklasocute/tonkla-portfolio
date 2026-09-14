import FadeIn from './FadeIn'
import ProjectCard from './ProjectCard'
import { PROJECTS } from '../data/projects'

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative bg-white px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn>
        <h2
          className="text-[#181512] font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            totalCards={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  )
}
