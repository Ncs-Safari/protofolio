"use client";

import { useEffect, useState } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const Nav = () => {
  const [active, setActive] = useState(navItems[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const line = window.innerHeight * 0.4;
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;

      if (atBottom) {
        setActive(navItems[navItems.length - 1].id);
        return;
      }

      let current = navItems[0].id;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= line) {
          current = item.id;
        }
      }
      setActive(current);
    };

    handleScroll(); // cek sekali saat halaman dibuka
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav className="hidden lg:block" aria-label="In-page navigation">
      <ul className="mt-16 w-max">
        {navItems.map((item) => {
          const isActive = active === item.id;

          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className="group flex items-center py-3"
              >
                <span
                  className={`mr-4 h-px transition-all ${
                    isActive
                      ? "w-16 bg-slate-200"
                      : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                  }`}
                />
                <span
                  className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                    isActive
                      ? "text-slate-200"
                      : "text-slate-500 group-hover:text-slate-200"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
