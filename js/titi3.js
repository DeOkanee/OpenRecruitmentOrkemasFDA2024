document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const sidebar = document.querySelector('.sidebar');
    const body = document.querySelector('body');
  
    // Fungsi untuk membuka atau menutup menu
    function toggleSidebar() {
      if (sidebar.style.width === '0px' || sidebar.style.width === '') {
        // Menu ditutup, buka menu
        sidebar.style.width = '200px';
        sidebar.style.height = '100%';
      } else {
        // Menu terbuka, tutup menu
        sidebar.style.width = '0';
        sidebar.style.height = '0';
      }
    }
  
    // Event listener untuk membuka atau menutup menu saat menu-icon diklik
    menuIcon.addEventListener('click', toggleSidebar);
  
    // Event listener untuk menutup menu saat close-icon diklik
    closeIcon.addEventListener('click', toggleSidebar);
  
    // Event listener untuk menutup menu saat melakukan double click di luar menu
    body.addEventListener('dblclick', toggleSidebar);
  });
  