$(document).ready(function () {
  let isClicked = false; // 클릭 상태 추적

  // 마우스 이동 이벤트 - window 전체에 적용
  $(window).mousemove(function (e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    // cursor1 위치 업데이트
    $(".cursor1").css({
      left: mouseX + "px",
      top: mouseY + "px",
    });

    // cursor2 위치 업데이트
    $(".cursor2").css({
      left: mouseX + "px",
      top: mouseY + "px",
    });
  });

  // 마우스 클릭 이벤트 - 토글 방식
  $(document).click(function (e) {
    if (!isClicked) {
      // 첫 번째 클릭: 이미지 변경
      $(".cursor1").hide();
      $(".cursor2 .click-image").show();
      isClicked = true;
    } else {
      // 두 번째 클릭: 원래대로
      $(".cursor2 .click-image").hide();
      $(".cursor1").show();
      isClicked = false;
    }
  });
});
