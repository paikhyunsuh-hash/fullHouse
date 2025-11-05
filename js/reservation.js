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
});

gsap.registerPlugin(ScrollTrigger);

// 타이틀 애니메이션
gsap.from("#con04 .title h2", {
  scrollTrigger: {
    trigger: "#con04",
    start: "top 80%",
    end: "top 30%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  x: -50,
  duration: 1,
  ease: "power2.out",
});

// 규칙 리스트 아이템 순차 애니메이션
gsap.from("#con04 .rules li", {
  scrollTrigger: {
    trigger: "#con04",
    start: "top 70%",
    end: "top 20%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 60,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
});

// 회전 이미지 등장 애니메이션
gsap.from("#con04 .round", {
  scrollTrigger: {
    trigger: "#con04",
    start: "top 80%",
    end: "top 30%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  scale: 0.3,
  duration: 1.2,
  ease: "back.out(1.7)",
});
