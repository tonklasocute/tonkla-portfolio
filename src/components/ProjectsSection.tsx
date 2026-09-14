import FadeIn from './FadeIn'
import ProjectCard from './ProjectCard'
import { PROJECTS } from '../data/projects'

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative bg-white px-5 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24"
    >
      <FadeIn>
        <h2
          className="text-[#181512] font-black uppercase leading-none tracking-tight text-center mb-12 sm:mb-16 md:mb-20"
          style={{ fontSize: 'clamp(2.25rem, 9vw, 120px)' }}
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
