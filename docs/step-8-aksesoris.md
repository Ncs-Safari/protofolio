# Step 8 – Aksesoris: Spotlight, Ikon Sosial, Résumé PDF, Footer

Sentuhan kecil yang membuat halaman terasa "hidup" dan lengkap.

## Ringkasan

| Aksesoris                  | File                          | Status |
| -------------------------- | ----------------------------- | ------ |
| Spotlight kursor           | `src/components/Spotlight.tsx` | sudah  |
| Animasi muncul saat scroll | `src/components/Reveal.tsx`    | sudah  |
| Animasi masuk header       | `tailwind.config.ts` (`fade-up`) | sudah |
| Ikon GitHub & Email        | `src/components/Icons.tsx`, `Header.tsx` | sudah |
| Ikon Résumé PDF (baru)     | `Icons.tsx` (`FileIcon`), `Header.tsx` | baru |
| Link "View Full Résumé"    | `src/components/Experience.tsx` | sudah |
| Footer kredit (baru)       | `src/components/Footer.tsx`, `src/app/page.tsx` | baru |

## 1. Ikon Résumé di deretan sosial

`FileIcon` ditambahkan di `Icons.tsx` (SVG inline, warna `currentColor`).
Di `Header.tsx`, satu `<li>` baru setelah Email, memakai
`profile.resumePdf` (`/Eri-Safari-Resume.pdf` di folder `public/`).

```
 [GitHub]  [Email]  [Résumé]
```

Gunanya: di HP, link résumé langsung terlihat di atas tanpa harus scroll
ke akhir Experience.

## 2. Footer

`src/components/Footer.tsx` dipasang di akhir `<main>`, setelah section
Projects. Isinya satu kalimat kredit (Next.js, Tailwind CSS, Vercel, Inter)
dengan link abu-abu yang berubah teal saat di-hover.

`pb-16` di HP memberi ruang di bawah; di desktop (`sm:pb-0`) padding
sudah datang dari `lg:py-24` milik `<main>`.

Logika nav aktif (Step 7) tidak terganggu: saat mentok bawah, Projects
tetap aktif.

## 3. Tambahan untuk menarik perhatian recruiter

### a. Badge "Open to new opportunities"
Di bawah jabatan pada `Header.tsx`, ada pill hijau dengan titik yang
berdenyut (`animate-ping`, hanya jika `motion-safe`). Teksnya diambil dari
`profile.availability` di `resume.ts`. Isi `""` untuk menyembunyikannya.

### b. Sorotan angka dan kata kunci
`renderHighlights` dipindah dari `About.tsx` menjadi komponen
`src/components/Highlight.tsx`, lalu dipakai juga di Experience (summary,
highlights, sub-project) dan Projects (description). Tandai teks di
`resume.ts` dengan `**...**`, contoh: `across **38 provinces**`.
Jangan terlalu banyak, 1–3 per kalimat sudah cukup.

### c. Copy email
`src/components/CopyEmail.tsx` (client component) menggantikan link
`mailto:`. Klik ikon → email tersalin → toast "Email copied!" muncul di atas
ikon selama 2 detik. Kalau clipboard tidak tersedia, jatuh ke `mailto:`.

### d. Animasi section mengikuti arah scroll
`src/components/Reveal.tsx` sekarang animasi setiap kali elemen masuk layar:
scroll ke bawah → muncul dari bawah, scroll ke atas → muncul dari atas.
Dua IntersectionObserver dipakai:
- **show**: elemen tampil saat sudah 10% masuk layar
- **hide**: elemen disembunyikan hanya saat sudah sepenuhnya keluar layar,
  dan posisinya (di atas/bawah) menentukan arah muncul berikutnya

Kalau terasa terlalu ramai, pakai `<Reveal once>` untuk animasi sekali saja.

## 4. Cek hasil

- [ ] Tiga ikon (GitHub, Email, Résumé) tampil, naik sedikit saat hover
- [ ] Klik ikon Résumé → PDF terbuka di tab baru
- [ ] Badge hijau tampil di bawah jabatan, titiknya berdenyut
- [ ] Klik ikon email → toast "Email copied!" dan email ada di clipboard
- [ ] Angka/kata kunci di Experience & Projects lebih terang, teal saat hover
- [ ] Scroll ke bawah: kartu muncul dari bawah; scroll ke atas: muncul dari atas
- [ ] Kartu yang masih terlihat sebagian tidak berkedip
- [ ] Footer tampil di bawah Projects, link berubah teal saat hover
- [ ] Spotlight mengikuti kursor (desktop), tidak tampil di HP
- [ ] Scroll ke paling bawah → nav "Projects" tetap aktif
- [x] `npx tsc --noEmit`: tidak ada error
- [x] `npm run build`: build berhasil

## 5. Commit

```bash
git add .
git commit -m "Step 8: accessories (resume icon, footer)"
```

Lanjut ke **Step 9 – Rapikan: SEO/metadata, favicon, cek mobile**.
