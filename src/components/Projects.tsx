import { projects } from "@/data/resume";
import TechList from "@/components/TechList";

const Projects = () => {
  return (
    <ul className="group/list space-y-12">
      {projects.map((project) => {
        const mainLink = project.links[0];

        return (
          <li key={project.name}>
            <div className="group relative rounded-md transition-all lg:-mx-4 lg:p-4 lg:hover:bg-slate-800/50 lg:hover:!opacity-100 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover/list:opacity-50">
              <h3 className="font-medium leading-snug text-slate-200">
                {mainLink ? (
                  <a
                    href={mainLink.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group-hover:text-teal-300"
                  >
                    {/* Bikin seluruh kartu bisa diklik */}
                    <span className="absolute inset-0 rounded-md" aria-hidden="true" />
                    {project.name}
                    <span className="ml-1 inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                ) : (
                  project.name
                )}
              </h3>

              {project.company && (
                <p className="text-sm text-slate-500">{project.company}</p>
              )}

              <p className="mt-2 text-sm leading-normal">{project.description}</p>

              {project.links.length > 0 && (
                <ul className="relative z-10 mt-2 flex flex-wrap gap-x-4 gap-y-1" aria-label="Project links">
                  {project.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-slate-300 hover:text-teal-300"
                      >
                        🔗 {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              <TechList items={project.tech} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Projects;
