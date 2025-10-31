$(function () {
  const total = $("#visual .panel li").length;
  let i = 0;
  let interval;

  // visual
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

  // con03

  // $(function () {
  //   const $imgBox = $(".con03 .imgBox");
  //   const $items = $(".con03 .imgBox li");
  //   const total = $items.length; // 4개
  //   let currentIndex = 0;

  //   const $bars = $(".con03 .bottom .bar, .con03 .bottom .on");

  //   function slideImage() {
  //     $imgBox.stop().animate({ "margin-left": "-100%" }, 800, function () {
  //       $(".con03 .imgBox li:first-child").appendTo($imgBox);
  //       $imgBox.css({ "margin-left": "0" });

  //       currentIndex = (currentIndex + 1) % total;
  //       updateBar();
  //     });
  //   }

  //   function updateBar() {
  //     $bars.css({ "background-color": "#ddd", "box-shadow": "none" });

  //     $bars.eq(currentIndex).css({
  //       "background-color": "#32f8ff",
  //       "box-shadow": "0 0 10px rgba(50, 248, 255, 0.5)",
  //     });
  //   }

  //   let slideInterval = setInterval(slideImage, 3000);

  //   // Prev 버튼
  //   $(".con03 .bottom p:first-child a").click(function (e) {
  //     e.preventDefault();
  //     clearInterval(slideInterval);

  //     // 마지막 아이템을 맨 앞으로
  //     $(".con03 .imgBox li:last-child").prependTo($imgBox);
  //     $imgBox.css({ "margin-left": "-100%" });
  //     $imgBox.stop().animate({ "margin-left": "0" }, 800);

  //     currentIndex = (currentIndex - 1 + total) % total;
  //     updateBar();

  //     // 다시 자동 재생
  //     slideInterval = setInterval(slideImage, 3000);
  //   });

  //   // Next 버튼
  //   $(".con03 .bottom p:last-child a").click(function (e) {
  //     e.preventDefault();
  //     clearInterval(slideInterval);
  //     slideImage();
  //     // 다시 자동 재생
  //     slideInterval = setInterval(slideImage, 3000);
  //   });

  //   // 초기 바 상태
  //   updateBar();
  // });
  // con03
  $(function () {
    const $imgBox = $(".con03 .imgBox");
    const $items = $(".con03 .imgBox li");
    const total = $items.length; // 4개
    let currentIndex = 0; // Bar/Dot 인덱스

    // Bar 선택자로 다시 변경
    const $bars = $(".con03 .bottom .bar, .con03 .bottom .on");

    // 슬라이드 기능 (왼쪽으로 밀고, 첫 번째 아이템을 뒤로 재배치)
    function slideImage() {
      // li의 너비가 1/3이므로 1칸 이동은 -100% (li 4개가 옆으로 나란히 있다고 가정)
      $imgBox.stop().animate({ "margin-left": "-100%" }, 800, function () {
        // ⭐ 첫 번째 li를 맨 뒤로 이동 (무한 순환의 핵심) ⭐
        $(".con03 .imgBox li:first-child").appendTo($imgBox);
        // margin-left를 0으로 초기화하여 다음 슬라이드를 준비
        $imgBox.css({ "margin-left": "0" });

        // Bar 인덱스 업데이트
        currentIndex = (currentIndex + 1) % total;
        updateBar();
      });
    }

    // Bar 인디케이터 업데이트 기능 (초기 코드로 복원)
    function updateBar() {
      $bars.css({ "background-color": "#ddd", "box-shadow": "none" });

      $bars.eq(currentIndex).css({
        "background-color": "#32f8ff",
        "box-shadow": "0 0 10px rgba(50, 248, 255, 0.5)",
      });
    }

    let slideInterval = setInterval(slideImage, 3000);

    // --- ⭐ 마우스 오버 시 멈춤/재개 기능 추가 ⭐ ---
    $(".con03 .imgBox").hover(
      function () {
        // 마우스 오버 시: 자동 재생 멈춤
        clearInterval(slideInterval);
      },
      function () {
        // 마우스 벗어날 시: 자동 재생 재개
        slideInterval = setInterval(slideImage, 3000);
      }
    );
    // --- 마우스 오버 시 멈춤/재개 기능 끝 ---

    // Prev 버튼 (기존 코드로 복원)
    $(".con03 .bottom p:first-child a").click(function (e) {
      e.preventDefault();
      clearInterval(slideInterval);

      // ⭐ 마지막 아이템을 맨 앞으로 재배치 (Prev의 핵심) ⭐
      $(".con03 .imgBox li:last-child").prependTo($imgBox);
      $imgBox.css({ "margin-left": "-100%" }); // 순간적으로 맨 앞으로 이동
      $imgBox.stop().animate({ "margin-left": "0" }, 800); // 부드럽게 원위치로 슬라이드

      // Bar 인덱스 업데이트
      currentIndex = (currentIndex - 1 + total) % total;
      updateBar();

      // 다시 자동 재생
      slideInterval = setInterval(slideImage, 3000);
    });

    // Next 버튼 (기존 코드로 복원)
    $(".con03 .bottom p:last-child a").click(function (e) {
      e.preventDefault();
      clearInterval(slideInterval);
      // slideImage()를 호출하면 Next 동작 수행
      slideImage();
      // 다시 자동 재생
      slideInterval = setInterval(slideImage, 3000);
    });

    // 초기 바 상태
    updateBar();
  });
});
