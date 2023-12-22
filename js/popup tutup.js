// Fungsi untuk menampilkan SweetAlert saat tombol "DAFTAR" diklik
function showPopup(hmjName, href) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Pendaftaran " + hmjName + " sudah tidak menerima jawaban lagi!",
  });

  // Menambahkan logika untuk menggantikan href dengan SweetAlert jika diperlukan
  // Contoh: window.location.href = href;
}

// Mengambil semua elemen tombol "DAFTAR" menggunakan selector query
const daftarButtons = document.querySelectorAll(".card button");

// Menambahkan event listener pada setiap tombol
daftarButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Mencegah navigasi ke halaman yang ditentukan dalam atribut href
    event.preventDefault();

    // Mengambil nama HMJ dari elemen induk button
    const hmjName = button.closest(".card").querySelector("h2").innerText;

    // Mengambil nilai href dari atribut "href" pada tautan
    const href = button.parentElement.getAttribute("href");

    // Menampilkan SweetAlert dengan menggunakan fungsi showPopup
    showPopup(hmjName, href);
  });
});
