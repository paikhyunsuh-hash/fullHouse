$(document).ready(function () {
  $(document).mousemove(function (e) {
    var mouseX = e.pageX;
    var mouseY = e.pageY;

    $(".cursor1").css({
      left: mouseX + "px",
      top: mouseY + "px",
    });
  });
});

$(document).ready(function () {
  $(document).mousemove(function (e) {
    var mouseX = e.pageX;
    var mouseY = e.pageY;

    // 1. .cursor1 (기존 커서) 위치 업데이트
    $(".cursor1").css({
      left: mouseX + "px",
      top: mouseY + "px",
    });

    // 2. .cursor2 (클릭 커서) 위치 동기화
    // .cursor2 자체가 아니라 자식인 .click-image 또는 부모 .cursor2의 위치를 업데이트합니다.
    $(".cursor2").css({
      left: mouseX + "px",
      top: mouseY + "px",
    });
  });

  // 2. 마우스 클릭 이벤트 (click)
  $(document).click(function (e) {
    // 1. 기존 이미지 (커서) 숨기기
    $(".cursor1").hide();

    // 2. 새로운 이미지 보이게 하기 (cursor2 전체 대신 내부 이미지를 제어하는 것이 명확합니다.)
    $(".cursor2 .click-image").show();

    // 3. 2초(2000ms) 후에 원래대로 되돌리는 타이머 설정
    setTimeout(function () {
      // 새로운 이미지를 숨깁니다.
      $(".cursor2 .click-image").hide();

      // 기존 커서를 다시 보이게 합니다.
      $(".cursor1").show();
    }, 1000); // 👈 1초로 수정
  });
});
