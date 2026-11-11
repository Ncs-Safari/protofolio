# Setup Project – Step 1

Panduan membuat kerangka proyek Next.js 14 di folder `protofolio`.

## Prasyarat

- Node.js 18.17+ (cek: `node -v`)
- npm (cek: `npm -v`)
- Git

## push to git
- git remote set-url origin git@github.com:Ncs-Safari/protofolio.git
- git remote -v
- git push origin main


## 1. Masuk ke folder proyek

```bash
cd "/home/safari/Privates/Curiculum Vitae/protofolio"
```

## 2. Pindahkan `initial_projects.md` ke `docs/`

`create-next-app` menolak jalan kalau di folder ada file yang tidak dikenalnya.
Folder `docs/` dan `.git/` aman, tapi `initial_projects.md` akan bentrok.

```bash
mv initial_projects.md docs/
```

## 3. Buat proyek Next.js 14

```bash
npx create-next-app@14 . --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

| Opsi                   | Arti                                               |
| ---------------------- | -------------------------------------------------- |
| `.`                    | Buat proyek di folder ini, bukan di subfolder baru |
| `--ts`                 | Pakai TypeScript                                   |
| `--tailwind`           | Pakai Tailwind CSS                                 |
| `--eslint`             | Pasang ESLint                                      |
| `--app`                | Pakai App Router                                   |
| `--src-dir`            | Kode di folder `src/`                              |
| `--import-alias "@/*"` | Import dengan `@/components/...`                   |
| `--use-npm`            | Pakai npm sebagai package manager                  |

## 4. Pastikan versi Next.js minimal 14.2.35

Versi 14 sebelum 14.2.35 punya celah keamanan.

```bash
npm ls next
```

Kalau versinya di bawah 14.2.35:

```bash
npm install next@14.2.35 eslint-config-next@14.2.35 --save-exact
```

## 5. Jalankan

```bash
npm run dev
```

Buka http://localhost:3000. Kalau muncul halaman awal Next.js, setup berhasil.

## 6. Bersihkan template bawaan

### `src/app/globals.css`

Sisakan hanya:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### `src/app/layout.tsx`

Ganti font ke Inter dan beri latar navy:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eri Safari",
  description: "Software Engineer – C# / .NET & React / Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-900 text-slate-400 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

### `src/app/page.tsx`

Ganti dengan halaman sederhana:

```tsx
export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12">
      <h1 className="text-4xl font-bold text-slate-200">Eri Safari</h1>
    </main>
  );
}
```

## 7. Cek hasil

- `npm run dev`: halaman berlatar navy dengan tulisan "Eri Safari"
- `npm run build`: build berhasil tanpa error

## 8. Commit

```bash
git add .
git commit -m "Step 1: setup Next.js 14 + Tailwind"
```

## Hasil akhir Step 1

```
protofolio/
├── docs/
│   ├── initial_projects.md
│   ├── project-plan.md
│   └── setup.md
├── public/
├── src/
│   └── app/
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── .eslintrc.json
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

Lanjut ke **Step 2 – Data resume** (lihat `docs/project-plan.md`).
