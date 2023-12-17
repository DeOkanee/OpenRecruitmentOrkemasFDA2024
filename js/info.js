document.addEventListener('DOMContentLoaded', function () {
    const infoButton = document.getElementById('infoButton');
  
    // Event listener untuk menampilkan pop-up saat Info diklik
    infoButton.addEventListener('click', function (event) {
      event.preventDefault();
  
      // Menampilkan SweetAlert
      Swal.fire({
        icon: "info",
        title: "Oops...",
        text: "Belum ada info!!",
      });
    });
  });
  