import Image from "next/image";
import {profile} from "@/data/resume";
import { FileIcon, GitHubIcon } from "@/components/Icons";
import CopyEmail from "@/components/CopyEmail";
import Nav from "@/components/Nav";

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
                    className="mb-6 h-28 w-28 rounded-full object-cover ring-2 ring-slate-700 transition-shadow duration-500 hover:ring-teal-300/70 motion-safe:animate-fade-up"
                />
                <h1 className="text-4xl font-bold tracking-tight
                text-slate-200 sm:text-5xl motion-safe:animate-fade-up [animation-delay:80ms]">
                    {profile.name}
                </h1>
                <h2 className="mt-3 text-lg font-medium text-slate-200 sm:text-xl motion-safe:animate-fade-up [animation-delay:160ms]">
                    {profile.title}
                </h2>
                {profile.availability && (
                    <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300 motion-safe:animate-fade-up [animation-delay:200ms]">
                        {/* Titik hijau berdenyut */}
                        <span className="relative flex h-2 w-2" aria-hidden="true">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                        {profile.availability}
                    </p>
                )}
                <p className="mt-4 max-w-xs leading-normal motion-safe:animate-fade-up [animation-delay:240ms]">
                    {profile.tagline}
                </p>
                <div className="motion-safe:animate-fade-up [animation-delay:320ms]">
                    <Nav />
                </div>
            </div>
            <ul className="mt-8 flex items-center gap-5 motion-safe:animate-fade-up [animation-delay:400ms]" aria-label="Social media">
                <li>
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub (opens in a new tab)"
                        title="GitHub"
                        className="block text-slate-400 transition duration-200 hover:-translate-y-0.5 hover:text-slate-200 motion-reduce:transform-none"
                    >
                        <GitHubIcon />
                    </a>
                </li>
                <li>
                    <CopyEmail
                        email={profile.email}
                        className="block text-slate-400 transition duration-200 hover:-translate-y-0.5 hover:text-slate-200 motion-reduce:transform-none"
                    />
                </li>
                <li>
                    <a
                        href={profile.resumePdf}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Résumé PDF (opens in a new tab)"
                        title="Résumé (PDF)"
                        className="block text-slate-400 transition duration-200 hover:-translate-y-0.5 hover:text-slate-200 motion-reduce:transform-none"
                    >
                        <FileIcon />
                    </a>
                </li>
            </ul>
        </header>
    )
}

export default Header;