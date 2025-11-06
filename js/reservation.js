// visual

$(function () {
  const visual_total = $("#visual .panel li").length;
  let visual_i = 0;
  let visual_interval;

  // visual 초기화
  $("#visual .panel li").hide().eq(0).show();
  $("#visual .navi li:nth-child(2) span:first").text(visual_i + 1);
  $("#visual .navi li:nth-child(2) span:last").text(visual_total);
  $(".bar > div").css("width", ((visual_i + 1) / visual_total) * 100 + "%");

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
    clearInterval(interval);
    i = (i - 1 + total) % total;
    fadeSlide();
    startSlide();
  });

  // con03
  document.querySelectorAll("#con03 .room-card-wrapper").forEach((card) => {
    const img = card.querySelector(".room-image img");
    const viewMore = card.querySelector(".view-more");

    card.addEventListener("mouseenter", () => {
      gsap.to(img, {
        scale: 1.1,
        duration: 0.6,
        ease: "power2.out",
      });
      gsap.to(viewMore, {
        x: 10,
        color: "#85bfc1",
        duration: 0.3,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(img, {
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      });
      gsap.to(viewMore, {
        x: 0,
        color: "#999",
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
});
