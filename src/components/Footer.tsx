const linkClass = "font-medium text-slate-400 transition-colors hover:text-teal-300";

// Kredit singkat di bagian paling bawah kolom kanan.
const Footer = () => {
    return (
        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p>
                Designed and built by Eri Safari with{" "}
                <a href="https://nextjs.org/" target="_blank" rel="noreferrer" className={linkClass}>
                    Next.js
                </a>{" "}
                and{" "}
                <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className={linkClass}>
                    Tailwind CSS
                </a>
                , deployed on{" "}
                <a href="https://vercel.com/" target="_blank" rel="noreferrer" className={linkClass}>
                    Vercel
                </a>
                . Text set in{" "}
                <a href="https://rsms.me/inter/" target="_blank" rel="noreferrer" className={linkClass}>
                    Inter
                </a>
                .
            </p>
        </footer>
    );
};

export default Footer;
