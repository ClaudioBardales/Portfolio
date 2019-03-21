const textToggleNext = document.querySelector(".swiper-button-next");
const textTogglePrev = document.querySelector(".swiper-button-prev");

const mySwiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

textToggleNext.addEventListener("click", () => {
    console.log('It works!');
});
textTogglePrev.addEventListener("click", () => {
    console.log('it works!')
});
