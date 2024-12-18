addEventListener("load", () => {
  let progress = document.querySelectorAll(".progress .style-background");
  let progress_container = document.querySelector(".progress-container");

  window.addEventListener("scroll", () => {
    if (progress_container.offsetHeight <= window.scrollY) {
      progress.forEach((ele) => {
        ele.style.width = ele.getAttribute("data-set");
      });
    }
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });

});