# Step 2 – Data Resume

Panduan memindahkan isi `Eri Safari-Resume.pdf` ke `src/data/resume.ts`, supaya
semua section (About, Experience, Projects, dll.) mengambil konten dari satu file.

## 0. Sisa Step 1 (rapikan dulu)

- [ ] `tailwind.config.ts`: hapus `colors.background` dan `colors.foreground`
      (variabel `--background` dan `--foreground` sudah tidak ada di `globals.css`).
- [ ] Hapus folder `src/app/fonts/` (font Geist bawaan template, sudah diganti Inter).
- [ ] Pindahkan `src/app/Set up this app on Neon.md` ke `docs/` atau hapus.
- [ ] Jalankan `npm run dev` dan `npm run build`, pastikan tidak ada error.
- [ ] Centang Step 1 di `docs/project-plan.md`.

### Catatan: error `import "./globals.css"` di VS Code

Error ini muncul karena VS Code memakai TypeScript bawaannya yang lebih baru
(6.x/7). Di versi itu, opsi `noUncheckedSideEffectImports` aktif secara default.
Next 14 hanya mendeklarasikan tipe untuk `*.module.css`, jadi `./globals.css`
dianggap tidak dikenal. `npx tsc` dengan TypeScript proyek (5.9.3) tidak
mengeluarkan error.

Perbaikannya: file `src/global.d.ts` berisi

```ts
declare module "*.css";
```

Kalau error masih muncul: `Ctrl+Shift+P` → **TypeScript: Select TypeScript
Version** → **Use Workspace Version**, lalu **TypeScript: Restart TS Server**.
Buka folder `portofolio/` di VS Code, bukan folder induknya.

## 1. Putuskan dulu (dari `project-plan.md`)

- [ ] Bahasa situs: Inggris / Indonesia (usulan: Inggris, sama dengan PDF)
- [ ] LinkedIn: ada / tidak (kalau ada, catat URL-nya)
- [ ] Foto profil: ada / tidak

**Privasi:** alamat dan nomor HP dari PDF **tidak** ditampilkan di situs.
Cukup email dan GitHub.

## 2. Buat folder dan file

```bash
cd "/home/safari/Privates/Curiculum Vitae/portofolio"
mkdir -p src/data
touch src/data/resume.ts
```

## 3. Tipe data

Tulis tipe di bagian atas `src/data/resume.ts`:

```ts
export type Link = { label: string; href: string };

export type SubProject = {
  name: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
};

export type Experience = {
  period: string; // "Oct 2024 – Present"
  company: string;
  role: string;
  type?: string; // "Part-time"
  summary?: string;
  highlights?: string[];
  tech?: string[];
  subProjects?: SubProject[];
};

export type Project = {
  name: string;
  company?: string;
  description: string;
  tech: string[];
  links: Link[];
};

export type Education = { school: string; degree: string; period: string };

export type SkillGroup = { category: string; items: string[] };
```

## 4. Isi data (pemetaan dari PDF)

| Bagian PDF          | Variabel di `resume.ts`   | Dipakai di                |
| ------------------- | ------------------------- | ------------------------- |
| Nama, email, GitHub | `profile`                 | Kolom kiri, footer        |
| Summary             | `profile.about`           | Section About             |
| Experience          | `experiences`             | Section Experience        |
| Projects            | `projects`                | Section Projects          |
| Education           | `education`               | Section Education (opsi.) |
| Informal Education  | `courses`, `certificates` | Section Education (opsi.) |
| Skills              | `skills`                  | Section Skills (opsi.)    |

Contoh isi `profile`:

```ts
export const profile = {
  name: "Eri Safari",
  title: "Software Engineer",
  subtitle: "Full Stack Developer (.NET & React)",
  tagline: "", // 1 kalimat singkat, ditulis sendiri
  about: [
    // paragraf About, ditulis ulang dari Summary PDF
  ],
  email: "safari.erie@gmail.com",
  github: "https://github.com/safari05",
  resumePdf: "/Eri-Safari-Resume.pdf",
};
```

Contoh satu entri `experiences` dengan sub-proyek:

```ts
{
  period: "Oct 2024 – Present",
  company: "PT. Berlian Sistem Informasi",
  role: "Software Engineer",
  type: "Part-time",
  summary: "Developed and maintained web applications for client projects, covering both front-end and back-end development.",
  subProjects: [
    {
      name: "New DNet (Dealer Network)",
      period: "May 2026 – Present",
      description: "Migrating the legacy DNet system to a new microservice-based platform.",
      highlights: [
        "Migrated the Training Management System module from legacy DNet to New DNet.",
        "Developed SAP integration for Delivery Order processing.",
        "Applied Domain-Driven Design (DDD) to structure business logic into clear domain boundaries.",
        "Implemented Redis caching to improve application performance.",
      ],
      tech: ["C#", ".NET", "DDD", "Microservices", "Entity Framework", "SQL Server", "Redis", "Docker"],
    },
    // DNet Change Request Team (Jan 2025 – Feb 2026)
    // Hyto – Employee Competency Assessment (Oct – Dec 2024)
  ],
},
```

Urutan entri `experiences` (terbaru di atas):

1. Oct 2024 – Present · PT. Berlian Sistem Informasi (3 sub-proyek)
2. Feb – Oct 2024 · LAPI – ITB · PROPAR PHE SHU Pertamina
3. 2022 – 2023 · PT Sawerigading Multi Kreasi · Frontend Developer
4. 2021 – 2022 · PT Sawerigading Multi Kreasi · Full Stack Developer
5. 2019 – 2020 · PT. Arkamaya · Software Engineer
6. 2015 – 2019 · PT Virtua Internasional Pratama · Software Engineer

Entri `projects`:

1. PIR – Potensi Investasi Regional (BKPM): link `/pir` dan `/admin`
   (PIR Admin digabung sebagai link kedua)
2. Satu Data MUBA: https://satudata.mubakab.go.id/
3. Sistem Informasi Bantuan Sosial Musi Banyuasin (tanpa link)

## 5. Typo di PDF yang dibetulkan saat dipindah

| Di PDF            | Ditulis di situs   |
| ----------------- | ------------------ |
| maintined         | maintained         |
| comptency         | competency         |
| Mei 2026          | May 2026           |
| Pereview          | Preview            |
| Cerifications     | Certifications     |
| Mirosoft          | Microsoft          |
| Visual Studi 2022 | Visual Studio 2022 |
| Net Core          | .NET Core          |
| SQlite            | SQLite             |

Kalimat seperti "I am graduated from..." juga ditulis ulang supaya lebih
natural.

## 6. Salin PDF resume ke `public/`

Dipakai untuk tombol "View Full Résumé" (Step 8). Nama file tanpa spasi:

```bash
cp "../Eri Safari-Resume.pdf" public/Eri-Safari-Resume.pdf
```

## 7. Cek hasil

Tes sementara di `src/app/page.tsx`:

```tsx
import { profile, experiences } from "@/data/resume";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12">
      <h1 className="text-4xl font-bold text-slate-200">{profile.name}</h1>
      <p>{experiences.length} experiences</p>
    </main>
  );
}
```

- `npm run dev`: nama dan jumlah experience (6) tampil
- `npx tsc --noEmit`: tidak ada error tipe

## 8. Commit

```bash
git add .
git commit -m "Step 2: resume data"
```

## Hasil akhir Step 2

```
portofolio/
├── docs/
│   ├── project-plan.md
│   ├── setup.md
│   └── step-2-data-resume.md
├── public/
│   └── Eri-Safari-Resume.pdf
└── src/
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── data/
    │   └── resume.ts
    └── global.d.ts
```

Lanjut ke **Step 3 – Layout 2 kolom** (lihat `docs/project-plan.md`).
