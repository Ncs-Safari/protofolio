"use client";

import { useEffect, useRef } from "react";

// Cahaya samar yang mengikuti kursor.
// - Posisi disimpan di CSS variable (--x, --y), jadi React tidak render ulang.
// - Gerakan dihaluskan (easing): tiap frame cahaya bergerak sebagian jarak
//   menuju kursor, jadi terasa "mengejar" dengan lembut.
const EASE = 0.12; // 0–1. Makin kecil makin lambat/halus.

const Spotlight = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const target = { x: -1000, y: -1000 };
    const pos = { x: -1000, y: -1000 };
    let frame = 0;
    let started = false;

    const tick = () => {
      pos.x += (target.x - pos.x) * EASE;
      pos.y += (target.y - pos.y) * EASE;
      el.style.setProperty("--x", `${pos.x}px`);
      el.style.setProperty("--y", `${pos.y}px`);

      // Berhenti kalau sudah sampai, supaya tidak memakan CPU saat diam.
      if (Math.abs(target.x - pos.x) > 0.5 || Math.abs(target.y - pos.y) > 0.5) {
        frame = requestAnimationFrame(tick);
      } else {
        frame = 0;
      }
    };

    const handleMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!started) {
        // Gerakan pertama: langsung ke posisi kursor, tanpa meluncur dari pojok.
        pos.x = target.x;
        pos.y = target.y;
        started = true;
      }
      if (!frame) frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", handleMove);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 hidden lg:block"
      style={{
        // Banyak titik warna supaya cahaya memudar bertahap, tanpa tepi "cincin".
        background: `radial-gradient(700px circle at var(--x, -1000px) var(--y, -1000px),
          rgba(29, 78, 216, 0.15) 0%,
          rgba(29, 78, 216, 0.11) 20%,
          rgba(29, 78, 216, 0.07) 40%,
          rgba(29, 78, 216, 0.035) 60%,
          rgba(29, 78, 216, 0.01) 80%,
          transparent 100%)`,
      }}
    />
  );
};

export default Spotlight;
