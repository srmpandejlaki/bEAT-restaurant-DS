## Course Menjadi Front-End Web Developer Expert - Dicoding Indonesia <br>Submission: Katalog Restoran

Dalam mengerjakan proyek ini Anda harus menggunakan environment Webpack. Tenang, kami sudah menyiapkan starter project yang dapat Anda gunakan untuk mengerjakan submission pertama, hingga submission akhir. Jadi Anda tidak perlu repot melakukan konfigurasi, dsb.
<ul>
  <li>Silakan unduh dan buka starter project submission menggunakan code editor yang digunakan.</li>
  <li>Jalankan perintah npm install untuk memasang seluruh dependencies.</li>
</ul>

Untuk menjalankan proyek, Anda bisa gunakan perintah-perintah berikut.
<ul>
  <li>npm run start-dev: menjalankan proyek pada mode development menggunakan webpack-dev-server.</li>
  <li>npm run build: membangun proyek dalam mode production.</li>
</ul>

Tuliskan semua source code dalam folder src. Kami telah mengelompokkan dalam folder-folder terpisah agar mudah mengatur aset-aset yang akan Anda buat.
<ul>
  <li>src → public: untuk menyimpan aset yang dapat diakses secara public seperti favicon, icons, gambar, video, atau font.</li>
  <li>src → styles: untuk menyimpan berkas styling seperti CSS.</li>
  <li>src → scripts: untuk menyimpan berkas JavaScript, termasuk entry point.</li>
  <li>src → templates: untuk menyimpan aset HTML.</li>
</ul>

Struktur folder tidak harus seperti dicontohkan, Anda bisa mengubah sesuai dengan kebutuhan. Anda juga boleh melakukan kustomisasi konfigurasi webpack seperti menambahkan konfigurasi SASS, file-loader, ataupun lainnya.

### Kriteria Wajib
Fitur yang harus ada pada aplikasi: 

#### 1. App Bar (Navigation Bar)
Syarat:
<ul>
  <li>Menampilkan nama aplikasi atau brand logo dari aplikasi katalog restoran (tentukan sendiri nama aplikasi atau brand logonya).</li>
  <li>Terdapat navigation menu:</li>
  <ul>
    <li>Home → mengarah ke root domain.</li>
    <li>Favorite → target URL cukup bernilai “#” (Sebagai placeholder untuk digunakan pada submission selanjutnya).</li>
    <li>About Us → arahkan ke profil LinkedIn/Github/Social Media Anda, atau boleh juga ke personal web/blog.</li>
  </ul>
  <li>Terdapat fitur navigation drawer yang berfungsi dengan baik bila diakses pada layar seluler.</li>
</ul>

#### 2. Hero Element (Jumbotron Element)
Syarat:
<ul>
  <li>Menampilkan hero element dengan gambar yang sudah ditentukan, silakan pilih salah satu aset yang disediakan di dalam starter proyek, src → public → images → hero. Gambar yang tidak digunakan, bisa Anda hapus.</li>
  <li>Gambar hero element yang ditampilkan haruslah full-width atau memenuhi persyaratan sebagai berikut.</li>
  <ul>
    <li>Tampilkan minimal dengan width 1000px pada ukuran viewport width >= 1200px.</li>
    <li>Jika ukuran viewport width < 1200px, hero element ditampilkan full-width.</li>
  </ul>
</ul>

#### 3. Daftar Restoran
Syarat:
<ul>
  <li>Menampilkan daftar restoran berdasarkan data yang sudah disediakan di dalam project starter–lokasinya ada di src → public → data → DATA.json. Untuk menampilkannya dapat melalui cara hardcoded–dituliskan dalam HTML secara langsung–atau DOM manipulation menggunakan JavaScript.</li>
  <li>Wajib menampilkan nama, gambar, dan minimal salah satu di antara kota, rating, dan/atau deskripsi pada restoran.</li>
</ul>

#### 4. Footer
Syarat:
<ul>
  <li>Terdapat footer yang ditampilkan di bawah halaman.</li>
  <li>Terdapat konten teks bebas sesuai dengan kreatifitas Anda. Misalnya, konten hak cipta yang mencangkup tahun dan nama aplikasi. Contoh: “Copyright © 2020 - Hunger Apps”.</li>
</ul>

Responsibilitas Tampilan
Syarat:
Tampilan web app harus responsif pada seluruh ukuran layar (mobile - tablet - desktop). Utamakan tampilan mobile terlebih dahulu.
Gunakan teknik Grid CSS atau Flexbox dalam menyusun layout. Bila terdapat float, submission Anda akan kami ditolak.
Menetapkan ukuran viewport secara dinamis berdasarkan layar device yang digunakan.

Aksesibilitas Website
Syarat:
Seluruh fungsionalitas website dapat dilakukan dengan menggunakan keyboard. Contohnya mengakses tombol hamburger button, mengakses tautan yang ada, dan lain sebagainya.
Menerapkan teknik Skip to Content untuk melewati focus pada menu navigasi.
Terdapat alternative teks pada seluruh gambar yang ditampilkan. Bila ada gambar yang tidak memiliki arti apa pun, cukup berikan atribut alt dengan nilai kosong. 
Dimensi touch target pada elemen yang diinteraksikan dengan touch harus memilliki ukuran elemen minimal 44x44px. Adapun beberapa contoh elemen tersebut meliputi button, anchor, input text, dan textarea.
Pastikan juga terdapat jarak antar elemen tersebut supaya dimensi touch target tidak menumpuk.
Menggunakan semantic element dalam menyusun struktur dan landmarking HTML.
