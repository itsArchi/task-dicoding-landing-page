// SCRIPT UNTUK CAROUSEL
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  speed: 600,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
}); // END SCRIPT UNTUK CAROUSEL

// SCRIPT UNTUK BUTTON DIRECT LINK
function linkDiscord() {
  window.location.href = "https://discord.gg/invite/arriere";
} // END SCRIPT BUTTON DIRECT LINK

// SCRIPT UNTUK SCROLL
document.querySelectorAll("a[href='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
  });
}); // END SCRIPT UNTUK SCROLL

document.querySelectorAll(".list-menu a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const brand = this.id;

    document.querySelectorAll(".car-item").forEach((item) => {
      if (brand === "all" || item.getAttribute("data-brand") === brand) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Tampilkan semua mobil saat halaman dimuat
document.querySelectorAll(".car-item").forEach((item) => {
  item.style.display = "block";
});
