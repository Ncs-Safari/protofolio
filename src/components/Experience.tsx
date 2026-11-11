import { experiences, profile } from "@/data/resume";
import Highlight from "./Highlight";
import Reveal from "./Reveal";
import TechList from "./TechList";

const Experience = () => {
    return (
        <div>
            {/* group/list: saat salah satu item di-hover, item lain meredup */}
            <ol className="group/list space-y-12">
                {experiences.map((exp) => (
                    <Reveal as="li" key={`${exp.company}-${exp.period}`}>
                        <div className="group relative grid gap-1 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            {/* Latar kartu, hanya muncul saat hover di desktop */}
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                            {/* Kolom kiri: periode */}
                            <p className="z-10 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                                {exp.period}
                            </p>

                            {/* Kolom kanan: isi */}
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200 transition-colors lg:group-hover:text-teal-300">
                                    {exp.role} · {exp.company}
                                </h3>
                                {exp.type && (
                                    <p className="text-sm text-slate-500">{exp.type}</p>
                                )}

                                {exp.summary && (
                                    <p className="mt-2 text-sm leading-normal"><Highlight text={exp.summary} /></p>
                                )}

                                {exp.highlights && (
                                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-normal">
                                        {exp.highlights.map((h) => (
                                            <li key={h}><Highlight text={h} /></li>
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
                                                    <Highlight text={sub.description} />
                                                </p>
                                                <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-normal">
                                                    {sub.highlights.map((h) => (
                                                        <li key={h}><Highlight text={h} /></li>
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
                    </Reveal>
                ))}
            </ol>

            <a
                href={profile.resumePdf}
                target="_blank"
                rel="noreferrer"
                className="group/resume mt-12 inline-flex items-center font-semibold text-slate-200 transition-colors hover:text-teal-300"
            >
                View Full Résumé
                <span className="ml-1 inline-block transition-transform duration-300 group-hover/resume:translate-x-1 motion-reduce:transition-none">
                    →
                </span>
            </a>
        </div>
    );
};

export default Experience;
