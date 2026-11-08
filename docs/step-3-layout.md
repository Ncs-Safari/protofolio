# Step 3 – Layout 2 Kolom

Panduan membuat kerangka halaman: kolom kiri tetap di tempat (sticky), kolom
kanan bisa di-scroll. Di HP, kedua kolom ditumpuk dari atas ke bawah.

Isi section (About, Experience, Projects) belum dibuat di step ini. Cukup
kotak kosong dengan judul, supaya layout dan scroll bisa dicek dulu.

## Gambaran layout

Desktop (lebar ≥ 1024px, prefix Tailwind `lg:`):

```
┌──────────────────────────┬──────────────────────────┐
│ Eri Safari               │ ABOUT                    │
│ Software Engineer        │ ...                      │
│ tagline                  │                          │
│                          │ EXPERIENCE               │
│ — About                  │ ...                      │
│ — Experience             │                          │
│ — Projects               │ PROJECTS                 │
│                          │ ...                      │
│ [GitHub] [Email]         │                          │
│  (sticky, tidak ikut     │  (scroll)                │
│   scroll)                │                          │
└──────────────────────────┴──────────────────────────┘
```

HP (lebar < 1024px):

```
┌──────────────────────────┐
│ Eri Safari               │
│ Software Engineer        │
│ tagline                  │
│ [GitHub] [Email]         │  ← navigasi disembunyikan
├──────────────────────────┤
│ ABOUT                    │
│ EXPERIENCE               │
│ PROJECTS                 │
└──────────────────────────┘
```

## 0. Sebelum mulai

- [ ] Step 2 sudah di-commit (`git commit -m "Step 2: resume data"`)
- [ ] Step 2 sudah dicentang di `docs/project-plan.md`

## 1. Buat folder komponen

```bash
cd "/home/safari/Privates/Curiculum Vitae/portofolio"
mkdir -p src/components
```

File yang dibuat di step ini:

| File                         | Isi                                           |
| ---------------------------- | --------------------------------------------- |
| `src/components/Header.tsx`  | Kolom kiri: nama, jabatan, tagline, nav, sosial |
| `src/components/Section.tsx` | Pembungkus tiap section di kolom kanan        |
| `src/app/page.tsx`           | Menyusun kolom kiri dan kanan                 |

## 2. `src/components/Header.tsx`

```tsx
import { profile } from "@/data/resume";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          {profile.name}
        </h1>
        <h2 className="mt-3 text-lg font-medium text-slate-200 sm:text-xl">
          {profile.title}
        </h2>
        <p className="mt-4 max-w-xs leading-normal">{profile.tagline}</p>

        <nav className="hidden lg:block" aria-label="In-page navigation">
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
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-slate-200">
            GitHub
          </a>
        </li>
        <li>
          <a href={`mailto:${profile.email}`} className="hover:text-slate-200">
            Email
          </a>
        </li>
      </ul>
    </header>
  );
}
```

Catatan:

- `lg:sticky lg:top-0 lg:max-h-screen`: di desktop, header menempel di atas
  dan tingginya setinggi layar.
- `lg:justify-between`: nama dan nav di atas, link sosial di bawah.
- `hidden lg:block` pada `<nav>`: navigasi hanya muncul di desktop.
- Link sosial masih berupa teks. Ikon dibuat di Step 8.
- Garis di depan item nav dan status "aktif" dibuat di Step 7.

## 3. `src/components/Section.tsx`

```tsx
type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} aria-label={title} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
```

Catatan:

- `id` dipakai oleh link nav (`href="#about"`).
- `scroll-mt-*`: memberi jarak supaya judul section tidak tertutup saat
  diklik dari nav.
- Judul section **menempel di atas saat scroll di HP**, dan di desktop
  disembunyikan secara visual (`lg:sr-only`) karena sudah ada nav di kiri.
  Tetap terbaca oleh screen reader.

## 4. `src/app/page.tsx`

```tsx
import Header from "@/components/Header";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />

        <main className="pt-24 lg:w-1/2 lg:py-24">
          <Section id="about" title="About">
            <p className="h-96">About (Step 4)</p>
          </Section>

          <Section id="experience" title="Experience">
            <p className="h-96">Experience (Step 5)</p>
          </Section>

          <Section id="projects" title="Projects">
            <p className="h-96">Projects (Step 6)</p>
          </Section>
        </main>
      </div>
    </div>
  );
}
```

Catatan:

- `lg:flex`: di desktop kiri dan kanan berdampingan. Di bawah `lg` ditumpuk.
- `lg:w-1/2` di header dan main: masing-masing setengah lebar.
- `h-96` hanya sementara, supaya halaman cukup panjang untuk tes scroll.
  Dihapus di Step 4–6.

## 5. Scroll halus saat klik nav

Di `src/app/globals.css`, tambahkan di bawah `@tailwind utilities;`:

```css
html {
  scroll-behavior: smooth;
}
```

## 6. Cek hasil

`npm run dev`, buka http://localhost:3000.

Desktop (jendela lebar):

- [ ] Kolom kiri dan kanan berdampingan
- [ ] Saat scroll, kolom kiri tetap di tempat
- [ ] Link sosial ada di bagian bawah kolom kiri
- [ ] Klik About / Experience / Projects di nav → scroll halus ke section-nya
- [ ] Judul section di kolom kanan tidak terlihat (hanya di nav)

HP (DevTools → `Ctrl+Shift+M`, pilih iPhone atau lebar 375px):

- [ ] Kolom kiri di atas, kolom kanan di bawah
- [ ] Nav tidak muncul
- [ ] Judul section menempel di atas saat scroll
- [ ] Tidak ada scroll ke samping

Lalu:

- [ ] `npx tsc --noEmit`: tidak ada error
- [ ] `npm run build`: build berhasil

## 7. Commit

```bash
git add .
git commit -m "Step 3: two-column layout"
```

## Hasil akhir Step 3

```
portofolio/
├── docs/
│   ├── project-plan.md
│   ├── setup.md
│   ├── step-2-data-resume.md
│   └── step-3-layout.md
├── public/
│   └── Eri-Safari-Resume.pdf
└── src/
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    │   ├── Header.tsx
    │   └── Section.tsx
    ├── data/
    │   └── resume.ts
    └── global.d.ts
```

Lanjut ke **Step 4 – Section About** (lihat `docs/project-plan.md`).
