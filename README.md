# Portofolio Pelajar - Student Portfolio

Website portofolio personal yang modern dan responsif untuk pelajar, dibangun dengan HTML, CSS (Tailwind CSS + Custom), dan JavaScript.

![Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

## 🚀 Fitur Utama

- ** Desain Modern** - Tampilan profesional dengan efek animasi yang halus
- ** Responsif** - Tampilan optimal di semua ukuran layar (mobile, tablet, desktop)
- ** Interaktif** - Efek hover, scroll reveal, dan animasi 3D pada kartu skill
- ** SEO Friendly** - Struktur HTML yang baik untuk mesin pencarian
- ** легкая Кастомизация** - Mudah disesuaikan dengan data personal

## 🛠️ Tech Stack

- **HTML5** - Struktur halaman
- **CSS3** - Styling dan animasi
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Interaktivitas dan animasi
- **Font Awesome** - Ikon
- **Devicon** - Ikon teknologi

## 📂 Struktur Folder

```
portofolio/
├── profil.html      # Halaman utama portfolio
├── style.css        # Custom CSS dan animasi
├── script.js        # JavaScript untuk interaktivitas
└── README.md        # Dokumentasi project
```

## ⚡ Cara Menjalankan

1. **Local Development**
   
   Buka file `profil.html` langsung di browser:
   ```bash
   # Double-click pada file profil.html
   # ATAU
   npx serve .
   ```

2. **Menggunakan VS Code**
   
   Install ekstensi "Live Server" lalu klik "Go Live"

3. **Deploy ke GitHub Pages**
   
   - Push semua file ke repository GitHub
   - Pergi ke Settings > Pages
   - Select "main branch" sebagai source
   - Simpan dan tunggu beberapa menit

## 🎨 Cara Mengustomisasi

### 1. Mengubah Data Personal

Buka `profil.html` dan ubah bagian berikut:

```html
<!-- Nama -->
<span class="gradient-text">Muhamad rifqi s</span>

<!-- Deskripsi -->
<p>Seorang pelajar yang bersankton dalam dunia teknologi...</p>

<!-- Sekolah -->
<p>Siswa di <span class="text-white font-semibold text-purple-400">SMK Bina Kerja</span></p>

<!-- Alamat -->
<p class="text-xs text-gray-500">purwakarta, Indonesia</p>

<!-- Email -->
<a href="mailto:emailmu@gmail.com">emailmu@gmail.com</a>
```

### 2. Menambah/Mengubah Skills

Cari bagian `#tech` di `profil.html`:

```html
<!-- Tambah skill baru -->
<div class="tech-card ...">
    <i class="devicon-react-original colored"></i>
    <span>React</span>
</div>
```

### 3. Menambah Project

Cari bagian `#projek` di `profil.html`:

```html
<div class="project-card group cursor-pointer">
    <div class="relative overflow-hidden rounded-2xl ...">
        <img src="path-ke-gambar.jpg" class="...">
    </div>
    <h4>Nama Project</h4>
    <p>Deskripsi project</p>
</div>
```

### 4. Mengubah Warna Tema

Buka `style.css` dan cari variabel warna:

```css
/* Ubah warna purple sesuai keinginan */
--primary-color: #8B5CF6;  /* Purple */
--secondary-color: #6366f1; /* Indigo */
```

Atau di `profil.html`, ubah kelas Tailwind:
```html
<!-- Contoh: Ubah dari purple ke blue -->
<a class="bg-blue-600 hover:bg-blue-700">Tombol</a>
```

### 5. Mengubah Background

Di `style.css`, cari `.animated-bg`:

```css
.animated-bg {
    background: linear-gradient(-45deg, #0f0f1a, #1a1a2e, #16213e, #1f1f3a);
    /* Ubah warna di atas sesuai keinginan */
}
```

## 📱 Fitur Interaktif

| Fitur | Deskripsi |
|-------|-----------|
| **Scroll Reveal** | Elemen muncul saat discroll |
| **3D Tilt Effect** | Kartu skill bergerak mengikuti cursor |
| **Mouse Glow** | Efek cahaya mengikuti cursor (desktop) |
| **Floating Particles** | Partikel latar belakang animasi |
| **Typing Effect** | Teks berjalan di deskripsi |
| **Navbar Scroll** | Navbar berubah saat discroll |

## 🔧 Konfigurasi Tambahan

### Mengubah Foto Profil

```html
<img src="https://via.placeholder.com/400" alt="Foto Profil">
<!-- Ganti src dengan path foto kamu -->
```

### Menambah Link Sosial Media

```html
<a href="https://github.com/username" class="...">
    <i class="fab fa-github"></i>
</a>
```

## 📄 Lisensi

Project ini menggunakan lisensi MIT.

## 👤 Author

**Muhamad rifqi s**
- Email: emailmu@gmail.com
- Lokasi: Indonesia

---

Dibuat dengan ❤️ menggunakan Tailwind CSS

