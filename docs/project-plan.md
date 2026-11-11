# Project Plan – Portfolio Eri Safari

## Tujuan

Mengganti situs resume lama https://eri-resume.vercel.app/ dengan tampilan bergaya
https://brittanychiang.com/ (layout ditulis sendiri, bukan salinan kode).

- Framework : Next.js 14 (App Router) + TypeScript
- Styling : Tailwind CSS, font Inter, tema navy gelap
- Deploy : Vercel
- Repo : https://github.com/Ncs-Safari/protofolio
- Konten : dari `Eri Safari-Resume.pdf`

## Menu / Section Situs

### Kolom Kiri (sticky)

- Nama : Eri Safari
- Jabatan : Software Engineer / Full Stack Developer (.NET & React)
- Tagline : 1 kalimat singkat
- Navigasi : About · Experience · Projects (aktif mengikuti scroll)
- Sosial : GitHub (github.com/safari05), Email (safari.erie@gmail.com)

### Kolom Kanan (scroll)

#### 1. About

- Ringkasan profil, pendidikan, fokus C# / .NET, React / Next.js

#### 2. Experience

- Okt 2024 – Sekarang : PT. Berlian Sistem Informasi (Part-time)
  - New DNet (Mei 2026 – Sekarang)
  - DNet Change Request Team (Jan 2025 – Feb 2026)
  - Hyto – Employee Competency Assessment (Okt – Des 2024)
- Feb – Okt 2024 : LAPI – ITB (Part-time) – PROPAR PHE SHU Pertamina
- 2022 – 2023 : PT Sawerigading Multi Kreasi – Frontend Developer
- 2021 – 2022 : PT Sawerigading Multi Kreasi – Full Stack Developer
- 2019 – 2020 : PT. Arkamaya – Software Engineer
- 2015 – 2019 : PT Virtua Internasional Pratama – Software Engineer
- Link : View Full Résumé (PDF)

#### 3. Projects

- PIR – Potensi Investasi Regional (BKPM) + PIR Admin
- Satu Data MUBA
- Sistem Informasi Bantuan Sosial Musi Banyuasin

#### 4. (Opsional) Education & Skills

- Education : Universitas Padjadjaran (D3), Universitas Indonesia Membangun (S1)
- Informal : Sanbercode, kursus Udemy, Microsoft Technology Associate
- Skills : Bahasa pemrograman, Database, Tools, OS

#### Footer

- Kredit singkat (dibuat dengan Next.js, Tailwind, deploy di Vercel)

## Langkah Pengerjaan (step by step)

- [ ] Step 1 – Setup dasar: Next.js 14, Tailwind, font Inter, tema navy, halaman kosong jalan
- [ ] Step 2 – Data resume: isi PDF dipindah ke `src/data/resume.ts`
- [ ] Step 3 – Layout 2 kolom: kiri sticky, kanan scroll, responsif di HP
- [ ] Step 4 – Section About
- [ ] Step 5 – Section Experience (tanggal, deskripsi, tag tech stack)
- [ ] Step 6 – Section Projects (link preview)
- [ ] Step 7 – Navigasi aktif mengikuti scroll
- [ ] Step 8 – Efek spotlight kursor, ikon sosial, link resume PDF
- [ ] Step 9 – Rapikan: SEO/metadata, favicon, cek mobile, `npm run build`
- [ ] Step 10 – Deploy: push ke GitHub, hubungkan ke Vercel

## Catatan / Keputusan

- Bahasa situs : (Inggris / Indonesia?)
- LinkedIn : (ada / tidak?)
- Foto profil : (ada / tidak?)
