"use client";

import { useEffect, useRef, useState } from "react";

// Membungkus elemen supaya muncul pelan (fade-in + geser sedikit) saat masuk
// layar, mengikuti arah scroll:
// - scroll ke bawah → elemen muncul dari bawah (naik)
// - scroll ke atas  → elemen muncul dari atas (turun)
// Elemen baru disembunyikan lagi setelah BENAR-BENAR keluar layar, jadi yang
// masih terlihat sebagian tidak berkedip.
// once = true → hanya animasi sekali (perilaku lama).
// Pengguna dengan pengaturan "kurangi gerakan" langsung melihat isinya.

type RevealProps = {
  as?: "div" | "li";
  className?: string;
  once?: boolean;
  children: React.ReactNode;
};

// "below" = tersembunyi di bawah layar, "above" = tersembunyi di atas layar.
type State = "visible" | "below" | "above";

const hiddenClass: Record<State, string> = {
  visible: "translate-y-0 opacity-100",
  below: "translate-y-4 opacity-0",
  above: "-translate-y-4 opacity-0",
};

const Reveal = ({ as: Tag = "div", className = "", once = false, children }: RevealProps) => {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<State>("below");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 1) Munculkan: saat elemen sudah 10% masuk dari bawah (atau atas) layar.
    const showObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setState("visible");
        if (once) {
          showObserver.disconnect();
          hideObserver.disconnect();
        }
      },
      { rootMargin: "-10% 0px -10% 0px" }
    );

    // 2) Sembunyikan: hanya saat elemen sudah sepenuhnya keluar layar.
    //    Posisinya menentukan dari arah mana ia akan muncul lagi.
    const hideObserver = new IntersectionObserver(([entry]) => {
      if (once || entry.isIntersecting) return;
      setState(entry.boundingClientRect.top < 0 ? "above" : "below");
    });

    showObserver.observe(el);
    hideObserver.observe(el);
    return () => {
      showObserver.disconnect();
      hideObserver.disconnect();
    };
  }, [once]);

  return (
    <Tag
      // Ref yang sama dipakai untuk <div> atau <li>.
      ref={ref as React.Ref<HTMLDivElement & HTMLLIElement>}
      className={`transition duration-500 ease-out motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${hiddenClass[state]} ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
