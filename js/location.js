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

$(document).ready(function () {
  /**
   * 💡 범용 수동 슬라이드 함수 (클릭 이벤트만 처리)
   * @param {string} containerSelector - 제어할 섹션의 CSS 선택자 (예: '.con01', '.con02')
   */
  function initializeManualSlider(containerSelector) {
    const $container = $(containerSelector);

    if ($container.length === 0) return;

    const $txtItems = $container.find(".txt li");
    const $bgItems = $container.find(".bg li");
    const $imgItems = $container.find(".right ul li");

    // 1. 슬라이드 전환 핵심 함수 (Active 클래스만 토글)
    function goToSlide(index) {
      // 모든 active 클래스 제거 (텍스트/썸네일/이미지)
      $txtItems.removeClass("active");
      $bgItems.removeClass("active");
      $imgItems.removeClass("active");

      // 해당 인덱스의 항목에 active 클래스 적용
      $txtItems.eq(index).addClass("active");
      $bgItems.eq(index).addClass("active");
      $imgItems.eq(index).addClass("active");
    }

    // 2. 썸네일 클릭 이벤트: 수동 전환
    $bgItems.on("click", function (e) {
      e.preventDefault(); // <a> 태그 점프 방지
      const clickedIndex = $(this).index();
      goToSlide(clickedIndex);
    });

    // 3. 초기 상태 설정
    // 첫 번째 슬라이드 (index 0)를 활성화
    goToSlide(0);
  }

  // 🚀 두 섹션에 범용 수동 함수 적용
  initializeManualSlider(".con01");
  initializeManualSlider(".con02");
});
