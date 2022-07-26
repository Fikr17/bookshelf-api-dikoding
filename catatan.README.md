Submission Anda akan dinilai oleh Reviewer guna menentukkan kelulusan Anda. Untuk lulus dari kelas ini, proyek Bookshelf API harus memenuhi seluruh pengujian otomatis pada Postman request yang bertanda [Mandatory]. Bila salah satu pengujiannya gagal, maka proyek Anda akan kami tolak.

Submission Anda akan dinilai oleh Reviewer dengan skala 1-5. Untuk mendapatkan nilai tinggi, silakan penuhi pengujian otomatis pada request yang bertanda [Optional]. Berikut detail dari fitur atau persyaratan opsional dari submission ini:

- Tambahkan fitur query parameters pada route GET /books (Mendapatkan seluruh buku).
	?name : Tampilkan seluruh buku yang mengandung nama berdasarkan nilai yang diberikan pada query ini. Contoh /books?name=”dicoding”, maka akan menampilkan daftar buku yang mengandung nama “dicoding” secara non-case sensitive  (tidak peduli besar dan kecil huruf).
	?reading : Bernilai 0 atau 1. Bila 0, maka tampilkan buku yang sedang tidak dibaca (reading: false). Bila 1, maka tampilkan buku yang sedang dibaca (reading: true). Selain itu, tampilkan buku baik sedang dibaca atau tidak.
	?finished : Bernilai 0 atau 1. Bila 0, maka tampilkan buku yang sudah belum selesai dibaca (finished: false). Bila 1, maka tampilkan buku yang sudah selesai dibaca (finished: true). Selain itu, tampilkan buku baik yang sudah selesai atau belum dibaca.
- Menerapkan CORS pada seluruh resource yang ada.
- Menggunakan ESLint dan salah satu style guide agar gaya penulisan kode JavaScript lebih konsisten.

Berikut adalah detail penilaian submission:

- Bintang 1 : Semua ketentuan wajib terpenuhi, namun terdapat indikasi kecurangan dalam mengerjakan submission.
- Bintang 2 : Semua ketentuan wajib terpenuhi, namun terdapat kekurangan pada penulisan kode. Seperti tidak menerapkan modularization atau gaya penulisan tidak konsisten.
- Bintang 3 : Semua ketentuan wajib terpenuhi, namun tidak terdapat improvisasi atau persyaratan opsional yang dipenuhi.
- Bintang 4 : Semua ketentuan wajib terpenuhi dan menerapkan minimal satu persyaratan opsional.
- Bintang 5 : Semua ketentuan wajib terpenuhi dan menerapkan seluruh persyaratan opsional yang ada.

`Catatan:
Jika submission Anda ditolak maka tidak ada penilaian. Kriteria penilaian bintang di atas hanya berlaku jika submission Anda lulus.`

## Ketentuan Berkas Submission
- Berkas submission yang dikirim merupakan folder proyek dari Bookshelf API dalam bentuk ZIP. 
- Pastikan di dalam folder proyek yang Anda kirim terdapat berkas package.json.
- Pastikan Anda hapus dulu berkas node_modules pada folder proyek sebelum mengkompresi dalam bentuk ZIP.


## Submission Anda akan Ditolak bila
- Kriteria wajib Bookshelf API tidak terpenuhi.
- Ketentuan berkas submission tidak terpenuhi.
- Proyek yang Anda kirim tidak dapat dijalankan dengan baik (Reviewer menggunakan Node.js versi LTS 14.17.0).
- Menggunakan bahasa pemrograman dan teknologi lain, selain JavaScript dan Node.js.
- Menggunakan Framework Node.js selain Hapi Framework.
- Melakukan kecurangan seperti tindakan plagiasi.


## Ketentuan Proses Review
Beberapa hal yang perlu Anda ketahui mengenai proses review:

- Tim Reviewer akan mengulas submission Anda dalam waktu selambatnya 3 (tiga) hari kerja (tidak termasuk Sabtu, Minggu, dan hari libur nasional).
- Karena kelas ini merupakan kelas Pemula, mekanisme proses review pada kelas ini hanya pengetesan aplikasi dan tidak dengan kode. Untuk mendapatkan hasil review yang lebih komprehensif Anda dapat mengikuti kelas selanjutnya.
- Tidak disarankan untuk melakukan submit berkali-kali karena akan memperlama proses penilaian.
- Anda akan mendapatkan notifikasi hasil review submission via email. Status submission juga bisa dilihat dengan mengecek di halaman submission.