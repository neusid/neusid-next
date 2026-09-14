# Pedoman Pengembangan Neusid Portfolio

Dokumen ini berisi aturan baku, konvensi, dan batasan perilaku untuk proyek portofolio Neusid.

---

## 1. Verifikasi Ikon (Iconoir CSS)
- **Larangan**: Jangan pernah menebak atau mengasumsikan nama kelas ikon Iconoir.
- **Aturan**: Sebelum menambahkan atau mengganti elemen `<i className="iconoir-..." />`, selalu cek ketersediaan kelasnya di `public/assets/css/iconoir.css`.
- **Akar Masalah**: Iconoir menggunakan CSS `mask-image` pada `::before` dengan `background: currentColor; width: 1em; height: 1em;`. Jika nama kelas salah atau tidak terdaftar, elemen me-render kotak solid berwarna (`□` / tofu) tanpa gambar ikon.
- **Referensi Ikon Khusus**:
  - Experience / Pekerjaan / Tas Kerja: `iconoir-large-suitcase`
  - Skills / Kilat / Petir: `iconoir-flash`
  - Pendidikan: `iconoir-graduation-cap`
  - Prestasi / Sertifikat: `iconoir-medal`
  - Kode / Programming: `iconoir-code`
  - Desain / Alat: `iconoir-tools`

---

## 2. Konsistensi Komponen Lintas Halaman
- Jika memperbarui desain komponen yang digunakan berulang (seperti kartu Credentials, Profiles, atau CTA bar), selalu periksa dan perbarui halaman lain yang memiliki komponen serupa (`pages/index.js`, `pages/service.js`, `pages/about.js`).
- Jangan tinggalkan aset warisan lama (seperti `sign.png`) jika komponen sudah digantikan dengan badge modern (`.cta-inner-cred` / `.cred-badge-preview`).

---

## 3. Konvensi Gelar & Akademik Pengguna
- **Jenjang**: D4 (Sarjana Terapan) setara Bachelor's Degree (KKNI Level 6).
- **Gelar Resmi**: `Bachelor of Applied Science (S.Tr.Kom)`
- **Program Studi**: `Informatics Engineering` (Teknik Informatika).
- **Institusi**: `Politeknik Negeri Indramayu (Polindra)`.
- **Format Singkat (Badge)**: `B.A.Sc (S.Tr.Kom) · Informatics` dengan tag `GPA 3.7 · Polindra`.
- **Format Lengkap (Timeline)**: `Bachelor of Applied Science (S.Tr.Kom) in Informatics Engineering`.

---

## 4. Kehati-hatian dalam Eksperimen Layout
- Struktur Bento Grid diatur dengan rasio khusus (misal 65%:35% di row 2).
- Hindari merombak total grid dasar saat user meminta perubahan detail kecil (seperti ikon atau nomor). Buat perubahan terisolasi agar mudah dibalikkan jika user berubah pikiran.

---

## 5. Protokol Git
- Jangan pernah menjalankan `git push` secara otomatis.
- Commit lokal diperbolehkan jika diperlukan, namun `git push` HANYA dieksekusi saat user memberikan instruksi tegas ("push").
