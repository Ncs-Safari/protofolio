"use client";

import { useEffect, useRef, useState } from "react";
import { MailIcon } from "./Icons";

// Ikon email: klik = salin alamat ke clipboard + muncul toast "Copied!".
// Kalau clipboard tidak tersedia (mis. bukan HTTPS), jatuh ke mailto:.
type CopyEmailProps = {
    email: string;
    className?: string;
};

const CopyEmail = ({ email, className = "" }: CopyEmailProps) => {
    const [copied, setCopied] = useState(false);
    const timer = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => () => clearTimeout(timer.current), []);

    const handleClick = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            clearTimeout(timer.current);
            timer.current = setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = `mailto:${email}`;
        }
    };

    return (
        <div className="relative">
            <button
                type="button"
                onClick={handleClick}
                aria-label={`Copy email address ${email}`}
                title={`Copy ${email}`}
                className={className}
            >
                <MailIcon />
            </button>

            {/* Toast kecil di atas ikon */}
            <span
                role="status"
                aria-live="polite"
                className={`pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-teal-400/10 px-2.5 py-1 text-xs font-medium text-teal-300 ring-1 ring-teal-400/30 backdrop-blur transition duration-200 motion-reduce:transition-none ${
                    copied ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                }`}
            >
                {copied ? "Email copied!" : ""}
            </span>
        </div>
    );
};

export default CopyEmail;
