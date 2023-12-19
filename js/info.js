document.addEventListener('DOMContentLoaded', function () {
  const infoButton = document.getElementById('infoButton');

  // Daftar pendaftaran dan wawancara
  const pendaftaranDate = '19-22 Des 2023';
  const wawancaraDate = '23-24 Des 2023';

  // Event listener untuk menampilkan pop-up saat Info diklik
  infoButton.addEventListener('click', function (event) {
    event.preventDefault();

    // Menampilkan SweetAlert dengan info pendaftaran dan wawancara
    Swal.fire({
      icon: "info",
      title: "Info",
      text: "Pendaftaran dan Wawancara",
      html: `<p>~ Pendaftaran: ${pendaftaranDate}</p><p>~ Wawancara: ${wawancaraDate}</p>`,
    });
  });
});
