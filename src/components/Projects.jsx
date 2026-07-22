import { projects } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <p className="eyebrow">// projets</p>
      <h2 className="section-title">Ce que j'ai construit</h2>
      <p className="mt-3 max-w-2xl text-sm text-ink-500 dark:text-ink-400">
        Projets universitaires et personnels réalisés dans le cadre de ma
        formation en informatique.
      </p>

      <div className="mt-10 space-y-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
