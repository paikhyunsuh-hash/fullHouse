// $(function () {
//   /*SIDE MENU*/
//   $("header .inner nav .burger .open").on("click", function () {
//     $("#menu").addClass("active");
//     $(".open").hide();
//     $(".close").show();
//     $(".container").addClass("active");
//   });

//   $("header .inner nav .burger .close").on("click", function () {
//     $("#menu").removeClass("active");
//     $(".close").hide();
//     $(".open").show();
//     $(".container").removeClass("active");
//   });

//   $(window).on("resize", function () {
//     if ($(window).width() > 1024) {
//       $("#menu").removeClass("active"); // 메뉴 닫기
//       $(".close").hide(); // 닫기 아이콘 숨기기
//       $(".open").show(); // 열기 아이콘 보이기
//       $("#container").removeClass("active"); // 블러/opacity 해제
//     }
//   });
// });

$(function () {
  const $menu = $("#menu");
  const $container = $("#container");
  const $open = $(".burger .open");
  const $close = $(".burger .close");

  // 메뉴 열기
  $open.on("click", function () {
    $menu.addClass("active");
    $container.addClass("active");
    $open.hide();
    $close.show();
  });

  // 메뉴 닫기
  $close.on("click", function () {
    $menu.removeClass("active");
    $container.removeClass("active");
    $close.hide();
    $open.show();
  });

  // 창 크기 변경 시 상태 초기화
  function resetMenu() {
    if ($(window).width() > 1024) {
      // 데스크톱 기준
      $menu.removeClass("active");
      $container.removeClass("active");
      $close.hide();
      $open.show();
    }
  }

  $(window).on("resize", resetMenu);
  resetMenu(); // 로드 시 체크

  // 여기에 기존 header.js, reservation.js 기능도 같이 추가 가능
});

$(function () {
  const $menu = $("#menu");
  const $container = $("#container");
  const $open = $(".burger .open");
  const $close = $(".burger .close");

  // 메뉴 열기
  $open.on("click", function () {
    $menu.addClass("active");
    $container.addClass("active");
    $open.hide();
    $close.show();
  });

  // 메뉴 닫기
  $close.on("click", function () {
    $menu.removeClass("active");
    $container.removeClass("active");
    $close.hide();
    $open.show();
  });

  // 창 크기 변경 시 상태 초기화
  function resetMenu() {
    if ($(window).width() > 620) {
      // 620px 이상이면 메뉴 닫기
      $menu.removeClass("active");
      $container.removeClass("active");
      $close.hide();
      $open.show();
    }
  }

  $(window).on("resize", resetMenu);
  resetMenu(); // 로드 시 체크
});
