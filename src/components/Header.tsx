import Image from "next/image";
import {profile} from "@/data/resume";

const navItems = [
    {id: "about", label:"About"},
    {id: "experience", label:"Experience"},
    {id: "projects", label:"Projects"},
]

const Header = () => {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen
        lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <Image
                    src={profile.photo}
                    alt={profile.name}
                    width={112}
                    height={112}
                    priority
                    className="mb-6 h-28 w-28 rounded-full object-cover ring-2 ring-slate-700"
                />
                <h1 className="text-4xl font-bold tracking-tight
                text-slate-200 sm:text-5xl">
                    {profile.name}
                </h1>
                <h2 className="mt-3 text-lg font-medium text-slate-200 sm:text-xl">
                    {profile.title}
                </h2>
                <p className="mt-4 max-w-xs leading-normal">
                    {profile.tagline}
                </p>
                <nav className="hidden lg:block" aria-label="in-page navigation">
                    <ul className="mt-16 w-max space-y-4">
                         {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                href={`#${item.id}`}
                                className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-200"
                                >
                                {item.label}
                                </a>
                            </li>
                            ))}
                    </ul> 
                </nav>
            </div>
            <ul className="mt-8 flex items-center gap-5" aria-label="Social media">
                <li>
                    <a href={profile.github} target="_blank" rel="noreferrer" 
                    className="hover:text-slate-200">
                        Github
                    </a>
                </li>
                <li>
                    <a href={`mailto:${profile.email}`} className="hover:text-slate-200">
                        Email
                    </a>
                </li>

            </ul>
        </header>
    )
}

export default Header;