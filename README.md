# Portfolio – Panduan Setup & Prompt Antigravity

## Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (opsional, untuk animasi lebih smooth)
- Vercel (deploy)

---

## Cara pakai file ini di Antigravity

Buka folder project di Antigravity, lalu gunakan prompt-prompt di bawah ini secara berurutan.

---

## Prompt 1 – Init Project

```
Buatkan project Next.js 14 baru dengan TypeScript dan Tailwind CSS.
Nama folder: portfolio
Gunakan App Router.
Setelah selesai, install dependencies berikut:
- framer-motion
Lalu copy file-file berikut ke dalam project:
- src/app/page.tsx
- src/components/ui/IntroAnimation.tsx
- src/components/ui/TechMarquee.tsx
- src/components/sections/HeroSection.tsx
- tailwind.config.ts
```

---

## Prompt 2 – Sesuaikan Data Pribadi

```
Di dalam file HeroSection.tsx dan IntroAnimation.tsx, ganti semua placeholder berikut:
- "Nama Kamu." → nama lengkap saya: [ISI NAMA]
- "YN" (inisial avatar) → inisial saya: [ISI INISIAL]
- "YN." (logo navbar) → inisial saya: [ISI INISIAL]
- URL GitHub, LinkedIn, Instagram → URL profil saya yang sebenarnya
- "12+" proyek, "2+" tahun, "5+" klien → angka yang sesuai dengan pengalaman saya
- Deskripsi hero → [ISI DESKRIPSI SINGKAT TENTANG DIRI SENDIRI]
```

---

## Prompt 3 – Tambah Section Proyek

```
Buatkan komponen baru: src/components/sections/ProjectsSection.tsx
Section ini menampilkan kartu proyek dengan:
- Gambar thumbnail (gunakan placeholder dari picsum.photos)
- Nama proyek
- Deskripsi singkat
- Tag teknologi (styled seperti pill dengan warna gradient)
- Link GitHub dan Live Demo
- Hover effect: card sedikit naik (translateY) dengan shadow

Gunakan data proyek berikut sebagai dummy:
1. Sistem Absensi Digital – Next.js, Laravel, PostgreSQL
2. E-Commerce Platform – React, TypeScript, MySQL
3. Sistem Manajemen Aset – Laravel, Tailwind CSS, Alpine.js

Daftarkan komponen ini di src/app/page.tsx di bawah HeroSection.
```

---

## Prompt 4 – Tambah Section Tentang

```
Buatkan komponen: src/components/sections/AboutSection.tsx
Isinya:
- Foto profil (gunakan placeholder atau path /images/profile.jpg)
- Paragraf perkenalan diri (2-3 paragraf)
- Grid skill dengan logo devicon dari cdn.jsdelivr.net
- Tombol Download CV yang link ke /cv.pdf

Style: light mode, white background, gradient accent warna violet-pink-orange.
```

---

## Prompt 5 – Tambah Section Kontak

```
Buatkan komponen: src/components/sections/ContactSection.tsx
Isinya:
- Form kontak (Nama, Email, Pesan) – gunakan state React, tidak perlu backend dulu
- Info kontak: email, lokasi
- Tombol submit dengan gradient violet-pink

Tambahkan juga footer simpel di bagian bawah dengan copyright dan link sosial.
```

---

## Prompt 6 – Animasi Scroll

```
Tambahkan animasi fade-up saat section masuk viewport menggunakan Framer Motion.
Setiap section (HeroSection, ProjectsSection, AboutSection, ContactSection)
harus punya wrapper motion.div dengan:
- initial: { opacity: 0, y: 40 }
- whileInView: { opacity: 1, y: 0 }
- transition: { duration: 0.6, ease: "easeOut" }
- viewport: { once: true }
```

---

## Prompt 7 – Deploy ke Vercel

```
Pastikan project sudah bisa di-build tanpa error:
npm run build

Jika ada error, perbaiki. Setelah clean build, buat file .env.example kosong
dan tambahkan README singkat tentang cara menjalankan project secara lokal.
```

---

## Struktur File Final

```
portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx              ← Main page (intro + semua section)
│   │   ├── layout.tsx            ← Root layout + font
│   │   └── globals.css           ← Global styles
│   └── components/
│       ├── ui/
│       │   ├── IntroAnimation.tsx ← Animasi halo multi-bahasa
│       │   └── TechMarquee.tsx   ← Scrolling tech stack dengan logo
│       └── sections/
│           ├── HeroSection.tsx   ← Hero + navbar + stats
│           ├── ProjectsSection.tsx
│           ├── AboutSection.tsx
│           └── ContactSection.tsx
├── public/
│   ├── images/
│   └── cv.pdf
├── tailwind.config.ts
└── README.md
```

---

## Catatan Penting

- Ganti semua inisial `YN` dengan inisialmu sendiri
- Upload foto profil ke `public/images/profile.jpg`
- Upload CV ke `public/cv.pdf`
- Sesuaikan warna di `tailwind.config.ts` jika ingin ubah palette

---

## Menjalankan Project Secara Lokal

1. Salin `.env.example` ke `.env.local` (jika ada environment variable yang diperlukan, misal untuk backend/API).
2. Masuk ke folder project:
   ```bash
   cd portfolio
   ```
3. Install dependensi project (jika baru di-clone):
   ```bash
   npm install
   ```
4. Jalankan development server:
   ```bash
   npm run dev
   ```
5. Buka browser dan arahkan ke [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya.

### Build untuk Production
Untuk mengecek apakah project siap untuk di-deploy (production):
```bash
npm run build
npm start
```
