document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll(".card");
  var windowHeight = window.innerHeight;

  function checkVisibility() {
    cards.forEach(function (card) {
      var positionFromTop = card.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        card.classList.add("visible");
      }
    });
  }

  // Jalankan fungsi pada saat halaman dimuat dan saat melakukan scroll
  checkVisibility();
  window.addEventListener("scroll", checkVisibility);
});

