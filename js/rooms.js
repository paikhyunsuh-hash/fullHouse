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
  $("#visual .next a").click(function (e) {
    e.preventDefault();
    clearInterval(visual_interval);
    visual_i = (visual_i + 1) % visual_total;
    visual_fadeSlide();
    visual_startSlide();
  });

  // 이전 버튼
  $("#visual .prev a").click(function (e) {
    e.preventDefault();
    clearInterval(visual_interval);
    visual_i = (visual_i - 1 + visual_total) % visual_total;
    visual_fadeSlide();
    visual_startSlide();
  });

  // (이하 con03 코드 ... )
});
