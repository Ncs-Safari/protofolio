# Step 5 – Section Experience

Panduan mengisi section Experience dari array `experiences` di
`src/data/resume.ts`. Tiap pengalaman menampilkan periode, jabatan dan
perusahaan, ringkasan, poin pencapaian, sub-proyek (khusus Berlian Sistem
Informasi), dan tag tech stack.

## Gambaran tampilan

Desktop / tablet (≥ 640px, prefix `sm:`), tanggal di kiri, isi di kanan:

```
┌────────────┬──────────────────────────────────────────┐
│ OCT 2024 – │ Software Engineer · PT. Berlian Sistem   │
│ PRESENT    │ Part-time                                │
│            │ Ringkasan ...                            │
│            │                                          │
│            │ │ New DNet (Dealer Network)  May 2026 –  │
│            │ │ deskripsi ...                          │
│            │ │ • highlight                            │
│            │ │ [C#] [.NET] [DDD] [Redis]              │
│            │ │                                        │
│            │ │ DNet – Change Request Team ...         │
├────────────┼──────────────────────────────────────────┤
│ FEB – OCT  │ Web Developer · LAPI – ITB               │
│ 2024       │ ...                                      │
│            │ [C#] [ASP.NET 4.8] [SQL Server]          │
└────────────┴──────────────────────────────────────────┘

View Full Résumé →
```

HP (< 640px): tanggal pindah ke atas, di atas jabatan.

## 0. Sebelum mulai

- [ ] Step 4 sudah di-commit
- [ ] Step 1–4 sudah dicentang di `docs/project-plan.md`
- [ ] **Perbaiki sisa Step 4** di `src/app/page.tsx`: `<About />` masih
      dibungkus `<p className="h-96">`. Hapus pembungkusnya.

  ```tsx
  <Section id="about" title="About">
    <About />
  </Section>
  ```

  Kenapa: `<About />` berisi `<div>` dan `<p>`. HTML tidak membolehkan
  `<div>` atau `<p>` di dalam `<p>`, jadi Next.js akan menampilkan error
  *hydration* di console. `h-96` juga membuat tinggi About terkunci.

## 1. File yang dibuat

| File                            | Isi                                                  |
| ------------------------------- | ---------------------------------------------------- |
| `src/components/TechList.tsx`   | Deretan tag tech stack (dipakai lagi di Step 6)      |
| `src/components/Experience.tsx` | Daftar pengalaman kerja                              |

## 2. `src/components/TechList.tsx`

```tsx
type TechListProps = {
  items: string[];
};

const TechList = ({ items }: TechListProps) => {
  return (
    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
      {items.map((item) => (
        <li key={item} className="mr-1.5 mt-2">
          <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TechList;
```

Catatan:

- Dibuat terpisah karena Step 6 (Projects) juga butuh tag yang sama.
- `flex-wrap`: tag turun ke baris berikutnya kalau tidak muat.
- `bg-teal-400/10`: teal dengan opasitas 10%, jadi latar tag samar di atas navy.
- `key={item}` aman karena nama teknologi dalam satu daftar tidak ada yang sama.

## 3. `src/components/Experience.tsx`

```tsx
import { experiences, profile } from "@/data/resume";
import TechList from "@/components/TechList";

const Experience = () => {
  return (
    <div>
      <ol className="space-y-12">
        {experiences.map((exp) => (
          <li key={`${exp.company}-${exp.period}`}>
            <div className="grid gap-1 sm:grid-cols-8 sm:gap-8 md:gap-4">
              {/* Kolom kiri: periode */}
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                {exp.period}
              </p>

              {/* Kolom kanan: isi */}
              <div className="sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  {exp.role} · {exp.company}
                </h3>
                {exp.type && (
                  <p className="text-sm text-slate-500">{exp.type}</p>
                )}

                {exp.summary && (
                  <p className="mt-2 text-sm leading-normal">{exp.summary}</p>
                )}

                {exp.highlights && (
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-normal">
                    {exp.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}

                {exp.subProjects && (
                  <ul className="mt-4 space-y-6 border-l border-slate-700 pl-4">
                    {exp.subProjects.map((sub) => (
                      <li key={sub.name}>
                        <h4 className="text-sm font-medium text-slate-200">
                          {sub.name}
                          <span className="ml-2 text-xs font-normal text-slate-500">
                            {sub.period}
                          </span>
                        </h4>
                        <p className="mt-1 text-sm leading-normal">
                          {sub.description}
                        </p>
                        <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-normal">
                          {sub.highlights.map((h) => (
                            <li key={h}>{h}</li>
                          ))}
                        </ul>
                        <TechList items={sub.tech} />
                      </li>
                    ))}
                  </ul>
                )}

                {exp.tech && <TechList items={exp.tech} />}
              </div>
            </div>
          </li>
        ))}
      </ol>

      <a
        href={profile.resumePdf}
        target="_blank"
        rel="noreferrer"
        className="mt-12 inline-block font-semibold text-slate-200 hover:text-teal-300"
      >
        View Full Résumé →
      </a>
    </div>
  );
};

export default Experience;
```

Catatan:

- `<ol>`: pengalaman punya urutan (terbaru di atas), jadi pakai daftar
  berurutan. Urutannya mengikuti array di `resume.ts`.
- `key`: gabungan perusahaan dan periode, karena PT Sawerigading muncul dua
  kali dengan periode berbeda.
- `sm:grid-cols-8`: di layar ≥ 640px dibagi 8 kolom. Periode ambil 2
  (`sm:col-span-2`), isi ambil 6 (`sm:col-span-6`). Di HP, grid jadi satu
  kolom, jadi periode otomatis di atas.
- `{exp.summary && ...}`: field bertanda `?` di type `Experience` boleh
  kosong. Pola `&&` hanya merender bagian itu kalau datanya ada.
- Sub-proyek diberi garis kiri (`border-l`) supaya terlihat sebagai bagian
  dari Berlian Sistem Informasi.
- Tech stack Berlian ada di tiap sub-proyek, bukan di level perusahaan, jadi
  `exp.tech` di sana kosong dan tidak tampil dobel.
- `profile.resumePdf` mengarah ke `public/Eri-Safari-Resume.pdf`.

## 4. Pakai di `src/app/page.tsx`

```tsx
import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
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
            <p className="h-96">Projects (Step 6)</p>
          </Section>
        </main>
      </div>
    </div>
  );
};

export default Home;
```

## 5. Cek hasil

`npm run dev`, buka http://localhost:3000.

Desktop:

- [ ] 6 pengalaman tampil, terbaru di atas
- [ ] Periode di kolom kiri, isi di kanan
- [ ] Berlian Sistem Informasi menampilkan 3 sub-proyek dengan garis kiri
- [ ] Tag tech stack berwarna teal, turun baris kalau penuh
- [ ] "View Full Résumé →" membuka PDF di tab baru
- [ ] Klik "Experience" di nav → scroll ke pengalaman pertama

HP (DevTools → `Ctrl+Shift+M`, lebar 375px):

- [ ] Periode tampil di atas jabatan
- [ ] Tidak ada scroll ke samping

Lalu:

- [ ] Console browser bersih (tidak ada error hydration atau `key`)
- [ ] `npx tsc --noEmit`: tidak ada error
- [ ] `npm run build`: build berhasil

## 6. Commit

```bash
git add .
git commit -m "Step 5: experience section"
```

## Hasil akhir Step 5

```
src/
├── app/
│   └── page.tsx          ← Experience dipakai, pembungkus About dihapus
└── components/
    ├── About.tsx
    ├── Experience.tsx    ← baru
    ├── Header.tsx
    ├── Section.tsx
    └── TechList.tsx      ← baru
```

Lanjut ke **Step 6 – Section Projects** (lihat `docs/project-plan.md`).
