# Step 4 – Section About

Panduan mengisi section About di kolom kanan dengan paragraf dari
`profile.about` di `src/data/resume.ts`. Teks tidak ditulis ulang di
komponen, cukup diambil dari data.

## 0. Sebelum mulai

- [ ] Step 3 sudah di-commit
- [ ] Step 1–3 sudah dicentang di `docs/project-plan.md`

## 1. Buat `src/components/About.tsx`

```tsx
import { profile } from "@/data/resume";

const About = () => {
  return (
    <div className="space-y-4">
      {profile.about.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
  );
};

export default About;
```

Catatan:

- `profile.about` berupa array string, jadi satu item = satu paragraf.
  Mau menambah paragraf cukup edit `resume.ts`.
- `space-y-4` memberi jarak antar paragraf tanpa perlu `mb-*` di tiap `<p>`.
- `key={i}` aman di sini karena urutan paragraf tidak pernah berubah.
- Warna teks (`text-slate-300`) sudah diwarisi dari `body` di `layout.tsx`,
  jadi tidak perlu ditulis lagi.

## 2. Pakai di `src/app/page.tsx`

```tsx
import About from "@/components/About";
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
            <p className="h-96">Experience (Step 5)</p>
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

`h-96` di About sudah dihapus karena isinya sekarang teks asli.

## 3. (Opsional) Tebalkan kata kunci

Gaya portfolio seperti ini biasanya menyorot beberapa kata (nama perusahaan,
teknologi) dengan warna lebih terang. Karena data berupa string biasa, cara
paling sederhana: lewati dulu. Kalau nanti mau, ubah `about` di `resume.ts`
menjadi JSX atau pakai penanda seperti `**Toyota**` lalu dipecah di komponen.
Tidak wajib untuk Step 4.

## 4. Cek hasil

`npm run dev`, buka http://localhost:3000.

- [ ] Tiga paragraf About tampil di kolom kanan, ada jarak di antaranya
- [ ] Klik "About" di nav → scroll ke paragraf pertama
- [ ] Klik "Experience" di nav → scroll ke placeholder Experience
- [ ] Di HP: judul "ABOUT" menempel di atas saat scroll
- [ ] `npx tsc --noEmit`: tidak ada error
- [ ] `npm run build`: build berhasil

## 5. Commit

```bash
git add .
git commit -m "Step 4: about section"
```

## Hasil akhir Step 4

```
src/
├── app/
│   └── page.tsx          ← About dipakai
└── components/
    ├── About.tsx         ← baru
    ├── Header.tsx
    └── Section.tsx
```

Lanjut ke **Step 5 – Section Experience** (lihat `docs/project-plan.md`).
