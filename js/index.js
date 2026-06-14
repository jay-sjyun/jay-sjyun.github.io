//Nav
const menuContainer = document.querySelector(".nav__menu_list");

menuContainer.addEventListener("click", function (e) {
  // 클릭된 요소가 nav__link 클래스를 가지고 있는지 확인
  if (e.target.classList.contains("nav__link")) {
    e.preventDefault(); // 히스토리 쌓이는 기본 이동 막기

    const targetId = e.target.getAttribute("href"); // "#section1" 같은 값 가져오기
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // fixed 메뉴바의 높이만큼 상단 여백을 주고 싶을 때 유용한 방식
      const headerOffset = 40;
      // 만약 고정 메뉴바 높이가 80px 라면 가려지지 않게 조절
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
});
