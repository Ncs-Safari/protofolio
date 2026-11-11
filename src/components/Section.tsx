
type SectionProps = {
    id: string;
    title: string;
    children: React.ReactNode;
}

const Section = ({id, title, children}: SectionProps) => {
    return (
        <section id={id} aria-label={title} className="mb-16 
        scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen
            bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12
            md:px-12 lg:sr-only">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                    {title}
                </h2>
            </div>
            {children}
        </section>
    )
}

export default Section;