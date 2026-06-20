# Pintar dengan AI — Website (by PindAI)

Landing page single-page scroll, dwibahasa (ID/EN), dibangun dengan HTML/CSS/JS murni — tanpa framework, tanpa build step, tanpa backend. Siap di-push ke GitHub dan di-deploy langsung ke Vercel.

## Struktur Folder

```
pintar-dengan-ai/
├── index.html              # Seluruh halaman (9 section, urut sesuai dokumen)
├── vercel.json              # Config ringan: clean URLs
├── .gitignore
├── assets/
│   ├── css/
│   │   └── styles.css       # Design tokens (warna, tipografi) + semua styling
│   ├── js/
│   │   └── main.js          # Toggle bahasa, scroll reveal, sticky nav
│   └── img/
│       └── favicon.svg
└── README.md
```

Tidak ada `node_modules`, tidak ada proses build — buka `index.html` langsung di browser sudah jalan.

## Menjalankan secara lokal

Karena tidak ada backend, cukup buka filenya, atau pakai live server ringan supaya path relatif konsisten:

```bash
# opsi 1: Python
python3 -m http.server 5500

# opsi 2: Node (npx, tanpa install)
npx serve .
```

Lalu buka `http://localhost:5500`.

## Cara kerja toggle bahasa

Setiap teks dwibahasa ditandai dengan dua atribut pada elemen yang sama:

```html
<h1 data-id="Teks Indonesia" data-en="English text">Teks Indonesia</h1>
```

`assets/js/main.js` menukar `textContent` elemen berdasarkan bahasa aktif (default **ID**), lalu menyimpan pilihan di `localStorage` supaya tidak reset saat reload. Pendekatan ini sengaja dipilih dibanding dua node ID/EN terpisah + class toggle — DOM lebih ringan dan tidak ada risiko nama class toggle bentrok dengan class penanda bahasa.

Untuk menambah/mengubah teks: edit langsung kedua atribut `data-id` dan `data-en` pada elemen terkait di `index.html`, lalu samakan isi teks default (di antara tag) dengan `data-id` (supaya tampilan awal sebelum JS jalan tetap benar).

## Catatan implementasi sesuai brief

- **Grid 2 kolom** di mobile untuk section Materi Belajar, Untuk Siapa, Hasil yang Diharapkan (`.grid-2`), melebar jadi 4 kolom mulai breakpoint tablet (≥720px).
- **Cara Kami Mengajar** sengaja dibuat list (`<ol class="steps">`) 1 kolom vertikal di semua ukuran layar — tidak ada breakpoint yang mengubahnya jadi grid, karena urutan langkahnya bermakna.
- **Stat strip** menyatu di dalam Hero (`.stat-strip`), bukan section terpisah.
- **Teknologi yang Kami Gunakan** dipadatkan jadi 1 baris berisi 3 badge teks (`.badges`) — tanpa logo resmi AWS, hanya nama layanan + deskripsi singkat, untuk menghindari isu hak merek.
- **Navigasi** sticky; di breakpoint mobile (`<900px`) link-link nav disembunyikan (CSS saja, `.nav__links { display: none }`) dan hanya logo + toggle bahasa + tombol CTA yang tetap tampil — section lain tetap bisa dicapai dengan scroll.

## Palet warna & tipografi

| Token | Hex | Pemakaian |
|---|---|---|
| `--navy-900` | `#0a1830` | Background Hero, Gabung, Footer |
| `--orange-500` | `#f47b20` | Aksen utama, tombol primer, angka stat |
| `--coral-500` | `#ef5b4e` | Aksen sekunder (titik di mark logo) |
| `--paper` / `--paper-alt` | `#ffffff` / `#f5f3ee` | Background section terang, selang-seling |

Tipografi: **Space Grotesk** (display/heading), **Plus Jakarta Sans** (body/UI), **JetBrains Mono** (eyebrow, angka stat, nomor langkah) — dimuat dari Google Fonts di `<head>`.

## Yang masih perlu diisi sebelum live (lihat dokumen handoff §5)

1. **Email/link tujuan tombol "Daftar Minat"** — saat ini di-set sementara ke `mailto:fikri@pintardengan.ai`. Ganti di `index.html`, section `#gabung`, atribut `href` pada tombol `.btn--primary`.
2. **Channel pendaftaran final** — putuskan apakah tetap `mailto:`, atau diarahkan ke Google Form / Tally, lalu ganti `href` di tempat yang sama.
3. **Domain/subdomain deploy final** — set di pengaturan project Vercel setelah deploy pertama.

## Deploy ke GitHub

```bash
cd pintar-dengan-ai
git init
git add .
git commit -m "Initial commit: Pintar dengan AI landing page"
git branch -M main
git remote add origin https://github.com/<username>/<nama-repo>.git
git push -u origin main
```

## Deploy ke Vercel

**Lewat dashboard (paling mudah):**
1. Buka [vercel.com/new](https://vercel.com/new), pilih repo GitHub yang baru di-push.
2. Framework preset: pilih **Other** (tidak perlu, karena ini static site murni — Vercel akan mendeteksinya otomatis).
3. Build command: kosongkan. Output directory: kosongkan (root).
4. Klik **Deploy**.

**Lewat CLI:**
```bash
npm i -g vercel
cd pintar-dengan-ai
vercel
vercel --prod
```

Setelah deploy pertama, atur custom domain lewat tab **Settings → Domains** di project Vercel.

## Maintenance ke depan

- Semua teks ada di satu file (`index.html`) per section sesuai urutan dokumen handoff — gampang dicari dan diedit.
- Tidak ada dependency npm yang perlu di-update — satu-satunya resource eksternal adalah Google Fonts (CDN).
- Untuk ganti logo dengan file asli PindAI: ganti SVG inline di `.nav__mark` (dalam `index.html`) dan `assets/img/favicon.svg` dengan file logo resmi.
