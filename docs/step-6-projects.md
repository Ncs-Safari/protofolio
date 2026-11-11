# Step 6 – Section Projects

Panduan mengisi section Projects dari array `projects` di
`src/data/resume.ts`. Tiap proyek tampil sebagai kartu: nama (bisa diklik
ke situsnya), perusahaan, deskripsi, daftar link, dan tag tech stack.

## Gambaran tampilan

```
┌──────────────────────────────────────────────────────┐
│ PIR – Potensi Investasi Regional ↗                   │  ← klik = buka link pertama
│ PT Virtua Internasional Pratama                      │
│ Deskripsi ...                                        │
│ 🔗 PIR   🔗 PIR Admin                                │
│ [C#] [PostgreSQL] [GIS]                              │
└──────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────┐
│ Satu Data MUBA ↗                                     │
│ ...                                                  │
└──────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────┐
│ Sistem Informasi Bantuan Sosial Musi Banyuasin       │  ← tanpa link, tanpa ↗
│ ...                                                  │
└──────────────────────────────────────────────────────┘
```

Saat kursor di atas kartu (desktop): latar kartu sedikit terang dan judul
berubah teal. Itu efek "link preview": pengunjung langsung tahu kartu bisa
diklik.

## 0. Sebelum mulai

- [ ] Step 5 sudah di-commit
- [ ] Step 1–5 sudah dicentang di `docs/project-plan.md`
- [ ] Rapikan sisa Step 5:
  - `src/app/page.tsx`: hapus import yang tidak dipakai,
    `import TechList ...` dan `import { Exo } from "next/font/google";`
  - `src/components/Experience.tsx`: di `<h3>`, pemisahnya masih titik
    (`{exp.role} .  {exp.company}`). Ganti jadi `{exp.role} · {exp.company}`
    dan tambahkan `text-slate-200` di className supaya judul lebih terang
    dari isi.

## 1. File yang dibuat

| File                          | Isi                    |
| ----------------------------- | ---------------------- |
| `src/components/Projects.tsx` | Daftar kartu proyek    |

`TechList` dari Step 5 dipakai lagi, jadi tidak perlu dibuat ulang.

## 2. `src/components/Projects.tsx`

```tsx
import { projects } from "@/data/resume";
import TechList from "@/components/TechList";

const Projects = () => {
  return (
    <ul className="space-y-12">
      {projects.map((project) => {
        const mainLink = project.links[0];

        return (
          <li key={project.name}>
            <div className="group relative rounded-md transition-all lg:-mx-4 lg:p-4 lg:hover:bg-slate-800/50">
              <h3 className="font-medium leading-snug text-slate-200">
                {mainLink ? (
                  <a
                    href={mainLink.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group-hover:text-teal-300"
                  >
                    {/* Bikin seluruh kartu bisa diklik */}
                    <span className="absolute inset-0 rounded-md" aria-hidden="true" />
                    {project.name}
                    <span className="ml-1 inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                ) : (
                  project.name
                )}
              </h3>

              {project.company && (
                <p className="text-sm text-slate-500">{project.company}</p>
              )}

              <p className="mt-2 text-sm leading-normal">{project.description}</p>

              {project.links.length > 0 && (
                <ul className="relative z-10 mt-2 flex flex-wrap gap-x-4 gap-y-1" aria-label="Project links">
                  {project.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-slate-300 hover:text-teal-300"
                      >
                        🔗 {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              <TechList items={project.tech} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Projects;
```

Catatan:

- `mainLink = project.links[0]`: link pertama dipakai sebagai tujuan saat
  kartu diklik. Proyek tanpa link (Bantuan Sosial) judulnya teks biasa,
  tanpa ↗.
- `group` dan `group-hover:`: saat kursor di atas kartu (`group`), elemen di
  dalamnya ikut berubah, misalnya judul jadi teal dan panah ↗ bergeser.
- `<span className="absolute inset-0">` di dalam link: span ini menutupi
  seluruh kartu (karena kartu `relative`), jadi klik di mana saja pada kartu
  membuka link pertama. `aria-hidden` supaya screen reader tidak membacanya.
- `relative z-10` pada daftar link: daftar link berada **di atas** span
  penutup tadi, jadi "PIR Admin" tetap bisa diklik sendiri dan tidak
  tertimpa link utama.
- `lg:-mx-4 lg:p-4`: di desktop kartu diberi padding untuk latar hover, lalu
  digeser balik dengan margin negatif supaya teksnya tetap sejajar dengan
  section lain.
- `key={link.href}`: tiap URL di satu proyek pasti berbeda.

## 3. Pakai di `src/app/page.tsx`

```tsx
import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Section from "@/components/Section";

const Home = () => {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />

        <main className="pt-24 lg:w-1/2 lg:py-24">
          <Section id="about" title="About">
            <About />
          </Section>

          <Section id="experience" title="Experience">
            <Experience />
          </Section>

          <Section id="projects" title="Projects">
            <Projects />
          </Section>
        </main>
      </div>
    </div>
  );
};

export default Home;
```

Placeholder `h-96` terakhir sudah hilang.

## 4. (Opsional) Gambar preview

Situs referensi menampilkan screenshot kecil di samping tiap proyek. Kalau
mau, nanti:

1. Simpan screenshot di `public/projects/` (misal `pir.png`, lebar ±400px).
2. Tambah `image?: string;` di type `Project` dan isi `image: "/projects/pir.png"`.
3. Tampilkan dengan `next/image` di dalam kartu.

Tidak wajib untuk Step 6. Bisa dikerjakan di Step 9 saat merapikan.

## 5. Cek hasil

`npm run dev`, buka http://localhost:3000.

Desktop:

- [ ] 3 proyek tampil sebagai kartu
- [ ] Hover kartu PIR → latar sedikit terang, judul teal, panah ↗ bergeser
- [ ] Klik di area kosong kartu PIR → buka situs PIR di tab baru
- [ ] Klik "🔗 PIR Admin" → buka halaman admin (bukan PIR)
- [ ] Kartu Bantuan Sosial tidak punya ↗ dan tidak bisa diklik
- [ ] Klik "Projects" di nav → scroll ke proyek pertama

HP (lebar 375px):

- [ ] Tidak ada latar hover dan teks sejajar dengan section lain
- [ ] Tidak ada scroll ke samping

Lalu:

- [ ] Console browser bersih
- [ ] `npx tsc --noEmit`: tidak ada error
- [ ] `npm run build`: build berhasil

## 6. Commit

```bash
git add .
git commit -m "Step 6: projects section"
```

## Hasil akhir Step 6

```
src/
├── app/
│   └── page.tsx          ← Projects dipakai, import tak terpakai dihapus
└── components/
    ├── About.tsx
    ├── Experience.tsx    ← pemisah · dan warna judul
    ├── Header.tsx
    ├── Projects.tsx      ← baru
    ├── Section.tsx
    └── TechList.tsx
```

Lanjut ke **Step 7 – Navigasi aktif mengikuti scroll** (lihat
`docs/project-plan.md`).
