$(function () {
  const total = $("#visual .panel li").length;
  let i = 0;
  let interval;

  // 초기 화면
  $("#visual .panel li").hide().eq(0).show();
  $("#visual .navi li:nth-child(2) span:first").text(i + 1);
  $("#visual .navi li:nth-child(2) span:last").text(total);
  $(".bar > div").css("width", ((i + 1) / total) * 100 + "%");

  function fadeSlide() {
    $("#visual .panel li").fadeOut(600);
    $("#visual .panel li").eq(i).fadeIn(600);
    $("#visual .navi li:nth-child(2) span:first").text(i + 1);
    $(".bar > div").animate({ width: ((i + 1) / total) * 100 + "%" }, 500);
  }

  function startSlide() {
    interval = setInterval(function () {
      i = (i + 1) % total;
      fadeSlide();
    }, 3000); // 3초마다 전환
  }

  startSlide();

  // 다음 버튼
  $("#visual .next a").click(function (e) {
    e.preventDefault();
    clearInterval(interval);
    i = (i + 1) % total;
    fadeSlide();
    startSlide();
  });

  // 이전 버튼
  $("#visual .prev a").click(function (e) {
    e.preventDefault();
    clearInterval(interval);
    i = (i - 1 + total) % total;
    fadeSlide();
    startSlide();
  });
});

// con01, con02 자동 슬라이드
$(document).ready(function () {
  /**
   * 💡 범용 자동 및 상호작용 슬라이드 함수
   * @param {string} containerSelector - 제어할 섹션의 CSS 선택자 (예: '.con01', '.con02')
   */
  function initializeAutoSlider(containerSelector) {
    // 1. 변수 정의 (컨테이너 내에서 요소를 찾도록 범위 지정)
    const $container = $(containerSelector);

    // 해당 섹션이 없으면 종료하여 오류 방지
    if ($container.length === 0) return;

    const $txtItems = $container.find(".txt li");
    const $bgItems = $container.find(".bg li");
    const $imgItems = $container.find(".right ul li");
    const totalSlides = $txtItems.length;
    let currentIndex = 0;
    const slideDuration = 3000;
    let autoSlideTimer;

    // 2. 슬라이드 전환 핵심 함수 (상태 업데이트)
    function goToSlide(index) {
      // 인덱스 순환 처리
      if (index >= totalSlides) {
        index = 0;
      } else if (index < 0) {
        index = totalSlides - 1;
      }
      currentIndex = index;

      // 모든 active 클래스 제거 (텍스트/썸네일)
      $txtItems.removeClass("active");
      $bgItems.removeClass("active");

      // 이미지 전환 시 페이드 효과 적용
      $imgItems.removeClass("active").fadeOut(300);

      // 해당 인덱스의 항목에 active 클래스 및 fadeIn 적용
      $txtItems.eq(currentIndex).addClass("active");
      $bgItems.eq(currentIndex).addClass("active");
      $imgItems.eq(currentIndex).fadeIn(300).addClass("active");
    }

    // 3. 자동 슬라이드 시작
    function startAutoSlide() {
      stopAutoSlide();
      autoSlideTimer = setInterval(function () {
        goToSlide(currentIndex + 1);
      }, slideDuration);
    }

    // 4. 자동 슬라이드 중지
    function stopAutoSlide() {
      clearInterval(autoSlideTimer);
    }

    // 5. 썸네일 클릭 이벤트: 수동 전환
    $bgItems.on("click", function (e) {
      e.preventDefault(); // <a> 태그 점프 방지
      stopAutoSlide();
      const clickedIndex = $(this).index();
      goToSlide(clickedIndex);
      startAutoSlide(); // 다시 시작
    });

    // 6. 마우스 오버 시 슬라이드 중지/재시작
    $container.find(".wrap").hover(stopAutoSlide, startAutoSlide);

    // 7. 초기 시작 및 상태 설정
    // 첫 번째 슬라이드 (index 0)를 활성화하고 자동 슬라이드 시작
    goToSlide(0);
    startAutoSlide();
  }

  // 🚀 두 섹션에 범용 함수 적용
  initializeAutoSlider(".con01");
  initializeAutoSlider(".con02");
});
