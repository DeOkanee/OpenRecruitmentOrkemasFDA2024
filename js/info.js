document.addEventListener('DOMContentLoaded', function () {
  const infoButton = document.getElementById('infoButton');

  // Daftar pendaftaran dan wawancara
  const pendaftaranDate = '19-22 Des 2023';
  const wawancaraDate = '23-24 Des 2023';

  // Waktu target: Tanggal 22 jam 12:00
  const targetDate = new Date('2023-12-22T12:00:00Z');

  // Cek apakah pop-up sudah ditampilkan sebelumnya
  const isPopupShown = localStorage.getItem('popupShown');

  // ID interval untuk memperbarui waktu mundur setiap detik
  let countdownInterval;

  // Function untuk memperbarui dan menampilkan waktu mundur setiap detik
  function updateCountdown() {
    const currentTime = new Date();
    const timeDiff = targetDate - currentTime;

    // Jika waktu mundur habis, hentikan pembaruan dan pop-up
    if (timeDiff <= 0) {
      clearInterval(countdownInterval);
      Swal.close();
      return;
    }

    // Memformat selisih waktu menjadi format yang lebih mudah dibaca
    const formattedTimeDiff = formatTimeDiff(timeDiff);

    // Menampilkan SweetAlert dengan info pendaftaran, wawancara, dan waktu mundur yang terus berubah
    Swal.update({
      title: "Info",
      html: `<p>1. Pendaftaran: ${pendaftaranDate}</p><p>2. Wawancara: ${wawancaraDate}</p>`,
      footer: `Pendaftaran Tersisa: ${formattedTimeDiff}`,
    });
  }

  // Fungsi untuk memformat selisih waktu menjadi format yang lebih mudah dibaca
  function formatTimeDiff(timeDiff) {
    const hours = Math.floor(timeDiff / 3600000);
    const minutes = Math.floor((timeDiff % 3600000) / 60000);
    const seconds = Math.floor((timeDiff % 60000) / 1000);

    return `${hours} jam ${minutes} menit ${seconds} detik`;
  }

  // Fungsi untuk menampilkan pop-up setelah 3 detik
  function showPopupAfterDelay() {
    // Menampilkan SweetAlert dengan info pendaftaran dan wawancara
    Swal.fire({
      icon: "info",
      title: "Info",
      html: `<p>1. Pendaftaran: ${pendaftaranDate}</p><p>2. Wawancara: ${wawancaraDate}</p>`,
      footer: `Pendaftaran Tersisa: ${formatTimeDiff(targetDate - new Date())}`,
    });

    // Memulai pembaruan waktu mundur setiap detik
    countdownInterval = setInterval(updateCountdown, 1000);

    // Menandai bahwa pop-up sudah ditampilkan
    localStorage.setItem('popupShown', 'true');
  }

  // Menampilkan pop-up setelah 3 detik
  setTimeout(showPopupAfterDelay, 3000);

  // Event listener untuk menampilkan pop-up saat Info diklik
  infoButton.addEventListener('click', function (event) {
    event.preventDefault();

    // Menampilkan SweetAlert dengan info pendaftaran dan wawancara
    Swal.fire({
      icon: "info",
      title: "Info",
      html: `<p>1. Pendaftaran: ${pendaftaranDate}</p><p>2. Wawancara: ${wawancaraDate}</p>`,
      footer: `Pendaftaran Tersisa: ${formatTimeDiff(targetDate - new Date())}`,
    });

    // Memulai pembaruan waktu mundur setiap detik
    countdownInterval = setInterval(updateCountdown, 1000);

    // Menandai bahwa pop-up sudah ditampilkan
    localStorage.setItem('popupShown', 'true');
  });

});
