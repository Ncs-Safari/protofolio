import {experiences, profile} from "@/data/resume";
import TechList from "./TechList";


const Experience = () => {
    return (
        <div>
            <ol className="space-y-12"> 
                {experiences.map((exp) => (
                    <li key={`${exp.company}-${exp.period}`}>
                        <div className="grid gap-1 sm:grid-cols-8 sm:gap-8 md:gap-4">
                            <p className="mt-1 text-xs font-semibold uppercase tracking-wide
                             text-slate-500 sm:col-span-2">
                                {exp.period}
                            </p>

                            {/** Kolom Kanan : isi */}
                            <div className="sm:col-span-6">
                                <h3 className="font-medium leading-snug">{exp.role} .  {exp.company}</h3>
                                {exp.type && (
                                    <p className="text-sm text-slate-500">{exp.type}</p>
                                )}

                                {exp.summary && (
                                    <p className="mt-2 text-sm leading-normal">{exp.summary}</p>
                                    )}
                                {exp.highlights && (
                                <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-normal">
                                    {exp.highlights.map((h) => (
                                    <li key={h}>{h}</li>
                                    ))}
                                </ul>
                                )}
                                {exp.subProjects && (
                  <ul className="mt-4 space-y-6 border-l border-slate-700 pl-4">
                    {exp.subProjects.map((sub) => (
                      <li key={sub.name}>
                        <h4 className="text-sm font-medium text-slate-200">
                          {sub.name}
                          <span className="ml-2 text-xs font-normal text-slate-500">
                            {sub.period}
                          </span>
                        </h4>
                        <p className="mt-1 text-sm leading-normal">
                          {sub.description}
                        </p>
                        <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-normal">
                          {sub.highlights.map((h) => (
                            <li key={h}>{h}</li>
                          ))}
                        </ul>
                        <TechList items={sub.tech} />
                      </li>
                    ))}
                  </ul>
                )}

                {exp.tech && <TechList items={exp.tech} />}
              </div>
            </div>
          </li>
        ))}
      </ol>

      <a
        href={profile.resumePdf}
        target="_blank"
        rel="noreferrer"
        className="mt-12 inline-block font-semibold text-slate-200 hover:text-teal-300"
      >
        View Full Résumé →
      </a>
    </div>
  );
};

export default Experience;