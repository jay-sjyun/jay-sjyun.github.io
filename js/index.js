$(document).ready(function () {
  // Slick 커스텀
  (function () {
    // Slick init
    $(".js-slick").slick({
      infinite: true,
    });

    // Slick arrows
    const $prevSlideBtn = document.querySelector(".slick-prev");
    $prevSlideBtn.innerHTML = `<span class="material-symbols-outlined">arrow_back_ios</span>`;
    const $nextSlideBtn = document.querySelector(".slick-next");
    $nextSlideBtn.innerHTML = `<span class="material-symbols-outlined">arrow_forward_ios</span>`;

    // Slick 슬라이드 카운터(Num)
    const $slickSlider = $(".slick-slider");
    const $slickSlides = [...document.querySelectorAll(".slick-slide")];
    const $originalSlides = $slickSlides.filter((elm) => !elm.classList.contains("slick-cloned"));
    const $sliderPaging = document.querySelector(".js-project-paging");

    $sliderPaging.textContent = `1`;
    $slickSlider.on("afterChange", () => {
      let $currentSlide = document.querySelector(".slick-current");
      let currentIdx = $originalSlides.indexOf($currentSlide);
      $sliderPaging.textContent = `${currentIdx + 1}`;
    });
  })();

  // AOS init
  AOS.init();

  // copyright 연도
  (function () {
    const $yearTxt = document.querySelector(".js-copyright__year");

    const dateObj = new Date();
    $yearTxt.textContent = dateObj.getFullYear();
  })();

  // 메뉴 열기/닫기
  (function () {
    const $menuOpenBtn = document.querySelector(".js-btn--open-menu");
    const $menuCloseBtn = document.querySelector(".js-btn--close-menu");
    const $nav = document.querySelector(".nav");
    const $main = document.querySelector(".main");

    $menuOpenBtn.addEventListener("click", () => {
      $nav.classList.add("on");
      $main.style.pointerEvents = "none";
    });
    $menuCloseBtn.addEventListener("click", () => {
      $nav.classList.remove("on");
      $main.style.pointerEvents = "initial";
    });
  })();
});
