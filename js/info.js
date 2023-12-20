document.addEventListener('DOMContentLoaded', function () {
    const infoButton = document.getElementById('infoButton');
  
    // Daftar pendaftaran dan wawancara
    const pendaftaranDate = '19-22 Des 2023';
    const wawancaraDate = '23-24 Des 2023';
  
    // Waktu target: Tanggal 22 jam 12:00
    const targetDate = new Date('2023-12-22T12:00:00Z');
  
    // Cek apakah pop-up sudah ditampilkan sebelumnya
    const isPopupShown = localStorage.getItem('popupShown');
  
    // Hitung selisih waktu antara sekarang dan waktu target
    const currentTime = new Date();
    const timeDiff = targetDate - currentTime;
  
    // Menampilkan SweetAlert setelah waktu tertentu jika belum ditampilkan sebelumnya
    if (!isPopupShown && timeDiff > 0) {
      setTimeout(function () {
        // Menampilkan SweetAlert dengan info pendaftaran dan wawancara
        Swal.fire({
          icon: "info",
          title: "Info",
          html: `<p>1. Pendaftaran: ${pendaftaranDate}</p><p>2. Wawancara: ${wawancaraDate}</p>`,
          footer: `Pendaftaran Tersisa: ${formatTimeDiff(timeDiff)}`, // Panggil fungsi formatTimeDiff
        });
  
        // Menandai bahwa pop-up sudah ditampilkan
        localStorage.setItem('popupShown', 'true');
      }, timeDiff);
    }
  
    // Event listener untuk menampilkan pop-up saat Info diklik
    infoButton.addEventListener('click', function (event) {
      event.preventDefault();
  
      // Menampilkan SweetAlert dengan info pendaftaran dan wawancara
      Swal.fire({
        icon: "info",
        title: "Info",
        html: `<p>1. Pendaftaran: ${pendaftaranDate}</p><p>2. Wawancara: ${wawancaraDate}</p>`,
        footer: `Pendaftaran Tersisa: ${formatTimeDiff(timeDiff)}`, // Panggil fungsi formatTimeDiff
      });
    });
  
    // Fungsi untuk memformat selisih waktu menjadi format yang lebih mudah dibaca
    function formatTimeDiff(timeDiff) {
      const hours = Math.floor(timeDiff / 3600000);
      const minutes = Math.floor((timeDiff % 3600000) / 60000);
      const seconds = Math.floor((timeDiff % 60000) / 1000);
  
      return `${hours} jam ${minutes} menit ${seconds} detik`;
    }
  });