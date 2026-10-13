# Presentasi AIK — MKCHM & Kepribadian Muhammadiyah

Website presentasi satu halaman (*single-page website*) untuk mata kuliah Al-Islam dan Kemuhammadiyahan (AIK). Materi disusun dalam tampilan editorial yang terang, sederhana, dan responsif agar isi presentasi tetap menjadi fokus utama.

## Isi Presentasi

Website terdiri dari enam bagian utama:

1. **Hero / Sampul** — judul presentasi, identitas kelompok, dan navigasi awal.
2. **Pendahuluan** — peran Muhammadiyah dalam pendidikan, kesehatan, dan pelayanan sosial serta fungsi MKCHM.
3. **Visi Berkemajuan** — tauhid, integrasi ilmu pengetahuan dan teknologi, serta tajdid dan sikap kritis.
4. **Sejarah dan Tokoh** — konteks internal dan eksternal, kronologi ringkas, serta tokoh yang berkaitan dengan pembahasan.
5. **Relevansi Era Digital** — literasi informasi, dakwah digital, etika bermedia, dan inovasi sosial.
6. **Kesimpulan dan Penutup** — rangkuman landasan, pedoman, dan pengamalan.

> **Catatan akademik:** Gunakan buku AIK atau rujukan resmi yang ditetapkan dosen untuk memeriksa kronologi sejarah, kutipan, dan peran tokoh sebelum presentasi.

## Teknologi

- HTML5
- CSS3
- JavaScript murni (*vanilla JavaScript*)
- Tailwind CSS melalui CDN
- Google Fonts: DM Sans dan DM Serif Display

Tidak diperlukan framework JavaScript, server backend, atau proses *build* untuk menjalankan versi statis ini.

## Struktur Folder

```text
aik-presentation/
├── index.html    # Struktur dan isi halaman
├── styles.css    # Desain, warna, layout, responsivitas, dan animasi
├── script.js     # Menu mobile, progres membaca, dan navigasi aktif
└── README.md     # Dokumentasi proyek
```

Pastikan keempat file berada di folder yang sama. Jangan mengganti nama file kecuali referensinya di `index.html` juga diperbarui.

## Menjalankan secara Lokal

1. Unduh atau kloning repositori proyek.
2. Buka folder proyek di VS Code.
3. Jalankan `index.html` di browser. Untuk pengalaman pengembangan yang lebih praktis, gunakan ekstensi **Live Server** di VS Code.
4. Periksa navigasi, tampilan layar kecil, dan seluruh tautan antarbagian.

Website ini memuat Tailwind CSS dan Google Fonts dari CDN, sehingga koneksi internet dibutuhkan untuk memuat sumber eksternal tersebut. Sebagian besar struktur dan desain kustom berada pada file lokal `styles.css`.

## Deploy ke GitHub Pages

1. Buat repositori GitHub untuk proyek ini.
2. Unggah `index.html`, `styles.css`, `script.js`, dan `README.md` ke direktori utama (*root*) repositori.
3. Buka **Settings → Pages** pada repositori.
4. Di bagian **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/(root)`, lalu simpan.
6. Setelah proses deployment selesai, buka URL yang ditampilkan pada halaman Pages.

### Memperbarui Website

Setelah mengubah isi atau desain:

- Jika menggunakan Git, simpan dan kirim perubahan ke repositori:

  ```bash
  git add .
  git commit -m "Perbarui materi presentasi AIK"
  git push
  ```

- Jika mengedit langsung di GitHub, simpan perubahan dengan **Commit changes**.

GitHub Pages akan menerbitkan perubahan dari sumber yang dikonfigurasi. Tidak perlu melakukan *undeploy* terlebih dahulu; URL website biasanya tetap sama.

## Deploy Alternatif

Website statis ini juga dapat diterbitkan melalui layanan seperti Netlify atau Cloudflare Pages. Ikuti instruksi layanan yang dipilih, dan pastikan `index.html` berada di direktori publikasi utama.

## Kustomisasi

- **Ubah materi atau navigasi:** edit `index.html`.
- **Ubah warna, font, jarak, dan tampilan responsif:** edit `styles.css`.
- **Ubah interaksi menu, progres membaca, atau navigasi aktif:** edit `script.js`.

Saat menambahkan ID section baru di HTML, periksa kembali tujuan tautan navigasi agar mengarah ke ID yang benar.

## Lisensi

Dokumen ini disediakan untuk kebutuhan pembelajaran dan presentasi. Pastikan materi, kutipan, serta aset pihak ketiga yang ditambahkan mengikuti ketentuan sumber masing-masing.
