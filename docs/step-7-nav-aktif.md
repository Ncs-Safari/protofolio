# Step 7 – Navigasi Aktif Mengikuti Scroll

Panduan membuat nav di kolom kiri (About · Experience · Projects) menandai
section yang sedang dibaca. Saat scroll ke Experience, item "Experience"
menjadi terang dan garis di depannya memanjang.

## Gambaran tampilan

```
 ──── ABOUT            ← biasa: garis pendek, abu-abu
 ──────────  EXPERIENCE ← aktif: garis panjang, putih
 ──── PROJECTS
```

Saat kursor di atas item yang tidak aktif, tampilannya juga ikut memanjang
dan terang, jadi terasa bisa diklik.

## 0. Sebelum mulai

- [ ] Step 6, foto profil, dan spotlight sudah di-commit
- [ ] Step 1–6 sudah dicentang di `docs/project-plan.md`

## 1. Kenapa nav dipisah jadi komponen sendiri

Untuk tahu posisi scroll, kode harus jalan di **browser** (pakai `window`,
`useState`, `useEffect`). Di Next.js App Router, komponen seperti itu harus
diberi `"use client"` di baris pertama.

Kalau `"use client"` ditaruh di `Header.tsx`, seluruh Header (foto, nama,
link sosial) ikut dikirim sebagai JavaScript ke browser. Lebih hemat kalau
hanya bagian nav yang dijadikan client component:

| File                     | Jenis            | Isi                                  |
| ------------------------ | ---------------- | ------------------------------------ |
| `src/components/Nav.tsx` | client (baru)    | Nav + logika section aktif           |
| `src/components/Header.tsx` | server (diubah) | Memakai `<Nav />`, sisanya tetap   |

## 2. Cara menentukan section aktif

Setiap kali halaman di-scroll:

1. Ambil posisi atas tiap section (`about`, `experience`, `projects`).
2. Section aktif = section **terakhir** yang bagian atasnya sudah melewati
   garis bayangan di 40% tinggi layar.
3. Pengecualian: kalau sudah mentok di bawah halaman, yang aktif adalah
   section terakhir (Projects). Tanpa ini, Projects bisa tidak pernah aktif
   karena isinya pendek dan tidak sempat melewati garis 40%.

```
┌──────────────────┐ ← atas layar
│                  │
│                  │
├ ─ ─ ─ ─ ─ ─ ─ ─ ─┤ ← garis 40%: section yang atasnya sudah lewat sini = aktif
│ EXPERIENCE ...   │
│                  │
└──────────────────┘ ← bawah layar
```

## 3. `src/components/Nav.tsx`

```tsx
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
```

Catatan:

- `navItems` pindah dari `Header.tsx` ke sini, karena hanya nav yang
  memakainya.
- `useState(navItems[0].id)`: saat pertama dibuka, About dianggap aktif.
- `{ passive: true }`: memberi tahu browser bahwa fungsi ini tidak akan
  menghentikan scroll, jadi scroll tetap mulus.
- Event `resize` ikut dipasang, karena saat ukuran jendela berubah, posisi
  section juga berubah.
- `return () => ...` di `useEffect`: melepas listener saat komponen dibuang,
  supaya tidak menumpuk.
- `aria-current`: memberi tahu screen reader item mana yang sedang aktif.
- `space-y-4` di `<ul>` diganti `py-3` di tiap link, supaya area klik lebih
  besar (termasuk garisnya).
- `group` + `group-hover:`: saat kursor di atas link, garis dan teks ikut
  berubah.
- `transition-all` pada garis: lebarnya berubah dengan animasi, bukan
  meloncat.

## 4. Ubah `src/components/Header.tsx`

1. Hapus `const navItems = [...]` di bagian atas.
2. Tambah import:

   ```tsx
   import Nav from "@/components/Nav";
   ```

3. Ganti seluruh blok `<nav> ... </nav>` dengan:

   ```tsx
   <Nav />
   ```

Bagian lain (foto, nama, tagline, link sosial) tidak berubah. Header tetap
server component, tanpa `"use client"`.

## 5. Cek hasil

`npm run dev`, buka http://localhost:3000 di jendela lebar (≥ 1024px).

- [ ] Saat halaman dibuka, "About" aktif (garis panjang, putih)
- [ ] Scroll pelan ke bawah → "Experience" aktif saat judul pengalaman
      pertama sampai sekitar 40% tinggi layar
- [ ] Scroll sampai mentok bawah → "Projects" aktif
- [ ] Scroll balik ke atas → aktifnya ikut kembali
- [ ] Klik "Projects" di nav → scroll halus, lalu "Projects" aktif
- [ ] Hover item yang tidak aktif → garis memanjang dan teks terang
- [ ] HP (375px): nav tetap tersembunyi, tidak ada error
- [ ] Console browser bersih
- [ ] `npx tsc --noEmit`: tidak ada error
- [ ] `npm run build`: build berhasil

## 6. Commit

```bash
git add .
git commit -m "Step 7: active nav on scroll"
```

## Hasil akhir Step 7

```
src/components/
├── About.tsx
├── Experience.tsx
├── Header.tsx      ← memakai <Nav />, navItems dihapus
├── Nav.tsx         ← baru (client component)
├── Projects.tsx
├── Section.tsx
├── Spotlight.tsx
└── TechList.tsx
```

Lanjut ke **Step 8 – Ikon sosial dan link resume PDF** (spotlight kursor
sudah selesai). Lihat `docs/project-plan.md`.
