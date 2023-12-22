document.addEventListener('DOMContentLoaded', function () {
  const infoButton = document.getElementById('infoButton');

  // Daftar pendaftaran dan wawancara
  const pendaftaranDate = 'Sudah Tutup pada pukul 18:00 Tanggal 22 Des 2023';
  const wawancaraDate = 'Tanggal 23-24 Des 2023';

  // Cek apakah pop-up sudah ditampilkan sebelumnya
  const isPopupShown = localStorage.getItem('popupShown');

  // Menampilkan SweetAlert setelah 6 detik jika belum ditampilkan sebelumnya
  if (!isPopupShown) {
      setTimeout(function() {
          // Menampilkan SweetAlert dengan info pendaftaran dan wawancara
          Swal.fire({
              icon: "info",
              title: "Info",
              html: `<p>1. Pendaftaran: ${pendaftaranDate}</p><p>2. Wawancara: ${wawancaraDate}</p>`,
          });

          // Menandai bahwa pop-up sudah ditampilkan
          localStorage.setItem('popupShown', 'true');
      }, 15000); // 6000 milidetik = 6 detik
  }

  // Event listener untuk menampilkan pop-up saat Info diklik
  infoButton.addEventListener('click', function (event) {
      event.preventDefault();

      // Menampilkan SweetAlert dengan info pendaftaran dan wawancara
      Swal.fire({
          icon: "info",
          title: "Info",
          html: `<p>1. Pendaftaran: ${pendaftaranDate}</p><p>2. Wawancara: ${wawancaraDate}</p>`,
      });
  });
});
