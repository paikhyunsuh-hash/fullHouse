$(function () {
  // ------------------------------------
  // 1. Visual 섹션 슬라이드
  // ------------------------------------
  const visual_total = $("#visual .panel li").length;
  let visual_i = 0;
  let visual_interval;

  // visual 초기화
  $("#visual .panel li").hide().eq(0).show();
  $("#visual .navi li:nth-child(2) span:first").text(visual_i + 1);
  $("#visual .navi li:nth-child(2) span:last").text(visual_total);
  $(".bar > div").css("width", ((visual_i + 1) / visual_total) * 100 + "%");

  /**
   * [수정됨] 깜빡임 방지 (Cross-fade)
   * :visible 선택자를 사용하여 현재 보이는 패널만 fadeOut 시키고,
   * 동시에 다음 패널을 fadeIn 시킵니다.
   */
  function visual_fadeSlide() {
    // 1. 현재 보이는 패널을 사라지게 함
    $("#visual .panel li:visible").fadeOut(600);

    // 2. 다음 인덱스 패널을 나타나게 함
    $("#visual .panel li").eq(visual_i).fadeIn(600);

    // 3. 텍스트 및 프로그레스 바 업데이트
    $("#visual .navi li:nth-child(2) span:first").text(visual_i + 1);
    $(".bar > div").animate(
      { width: ((visual_i + 1) / visual_total) * 100 + "%" },
      500
    );
  }

  function visual_startSlide() {
    visual_interval = setInterval(function () {
      visual_i = (visual_i + 1) % visual_total;
      visual_fadeSlide();
    }, 3000); // 3초마다 전환
  }

  visual_startSlide();

  // 다음 버튼
  $("#visual .next").click(function (e) {
    e.preventDefault();
    clearInterval(visual_interval);
    visual_i = (visual_i + 1) % visual_total;
    visual_fadeSlide();
    visual_startSlide();
  });

  // 이전 버튼
  $("#visual .prev").click(function (e) {
    e.preventDefault();
    clearInterval(visual_interval);
    visual_i = (visual_i - 1 + visual_total) % visual_total;
    visual_fadeSlide();
    visual_startSlide();
<<<<<<< HEAD
=======
  });

  // (이하 con03 코드 ... )
});

// ------------------------------------
// 2. Con03 섹션 슬라이드 (중첩 제거)
// ------------------------------------
// (여기 있던 불필요한 $(function() { 제거)

const $imgBox = $(".con03 .imgBox");
const $items = $(".con03 .imgBox li");

// ⭐ [수정] 변수 충돌 방지를 위해 'total' -> 'con03_total'로 변경
const con03_total = $items.length;
let currentIndex = 0; // Bar/Dot 인덱스

// Bar 선택자로 다시 변경
const $bars = $(".con03 .bottom .bar, .con03 .bottom .on");

// 슬라이드 기능
function slideImage() {
  $imgBox.stop().animate({ "margin-left": "-100%" }, 800, function () {
    $(".con03 .imgBox li:first-child").appendTo($imgBox);
    $imgBox.css({ "margin-left": "0" });

    // ⭐ [수정] 'total' -> 'con03_total'로 변경
    currentIndex = (currentIndex + 1) % con03_total;
    updateBar();
>>>>>>> ce1e942a1e0f8c35146dfe83e43580874dad7a61
  });
}

// Bar 인디케이터 업데이트 기능
function updateBar() {
  $bars.css({ "background-color": "#ddd", "box-shadow": "none" });
  $bars.eq(currentIndex).css({
    "background-color": "#32f8ff",
    "box-shadow": "0 0 10px rgba(50, 248, 255, 0.5)",
  });
}

let slideInterval = setInterval(slideImage, 3000);

// 마우스 오버 시 멈춤/재개 기능
$(".con03 .imgBox").hover(
  function () {
    clearInterval(slideInterval);
  },
  function () {
    slideInterval = setInterval(slideImage, 3000);
  }
);

// Prev 버튼
$(".con03 .bottom p:first-child a").click(function (e) {
  e.preventDefault();
  clearInterval(slideInterval);

  $(".con03 .imgBox li:last-child").prependTo($imgBox);
  $imgBox.css({ "margin-left": "-100%" });
  $imgBox.stop().animate({ "margin-left": "0" }, 800);

  // ⭐ [수정] 'total' -> 'con03_total'로 변경
  currentIndex = (currentIndex - 1 + con03_total) % con03_total;
  updateBar();

  slideInterval = setInterval(slideImage, 3000);
});

<<<<<<< HEAD
// ------------------------------------
// 2. Con03 섹션 슬라이드 (중첩 제거)
// ------------------------------------
// (여기 있던 불필요한 $(function() { 제거)

const $imgBox = $(".con03 .imgBox");
const $items = $(".con03 .imgBox li");

// ⭐ [수정] 변수 충돌 방지를 위해 'total' -> 'con03_total'로 변경
const con03_total = $items.length;
let currentIndex = 0; // Bar/Dot 인덱스

// Bar 선택자로 다시 변경
const $bars = $(".con03 .bottom .bar, .con03 .bottom .on");

// 슬라이드 기능
function slideImage() {
  $imgBox.stop().animate({ "margin-left": "-100%" }, 800, function () {
    $(".con03 .imgBox li:first-child").appendTo($imgBox);
    $imgBox.css({ "margin-left": "0" });

    // ⭐ [수정] 'total' -> 'con03_total'로 변경
    currentIndex = (currentIndex + 1) % con03_total;
    updateBar();
  });
}

// Bar 인디케이터 업데이트 기능
function updateBar() {
  $bars.css({ "background-color": "#ddd", "box-shadow": "none" });
  $bars.eq(currentIndex).css({
    "background-color": "#32f8ff",
    "box-shadow": "0 0 10px rgba(50, 248, 255, 0.5)",
  });
}

let slideInterval = setInterval(slideImage, 3000);

// 마우스 오버 시 멈춤/재개 기능
$(".con03 .imgBox").hover(
  function () {
    clearInterval(slideInterval);
  },
  function () {
    slideInterval = setInterval(slideImage, 3000);
  }
);

// Prev 버튼
$(".con03 .bottom p:first-child a").click(function (e) {
  e.preventDefault();
  clearInterval(slideInterval);

  $(".con03 .imgBox li:last-child").prependTo($imgBox);
  $imgBox.css({ "margin-left": "-100%" });
  $imgBox.stop().animate({ "margin-left": "0" }, 800);

  // ⭐ [수정] 'total' -> 'con03_total'로 변경
  currentIndex = (currentIndex - 1 + con03_total) % con03_total;
  updateBar();

  slideInterval = setInterval(slideImage, 3000);
});

=======
>>>>>>> ce1e942a1e0f8c35146dfe83e43580874dad7a61
// Next 버튼
$(".con03 .bottom p:last-child a").click(function (e) {
  e.preventDefault();
  clearInterval(slideInterval);
  slideImage();
  slideInterval = setInterval(slideImage, 3000);
});

// 초기 바 상태
updateBar();

// (여기 있던 불필요한 }); 제거)
<<<<<<< HEAD
// }); // <-- 전체 코드를 감싸는 유일한 $(function() {})의 닫는 태그
=======
// <-- 전체 코드를 감싸는 유일한 $(function() {})의 닫는 태그
>>>>>>> ce1e942a1e0f8c35146dfe83e43580874dad7a61
