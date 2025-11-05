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

/* ===== 데이터 ===== */
var rooms = [
  {
    img: "../img/reservation/v102_77.png",
    small: "../img/reservation/v102_76.png",
    title: "All Rooms Have Oceanview",
    desc: "모든 객실에서 아름다운 바다 전망을 감상하실 수 있습니다.",

    spec: [
      "침대룸A(싱글) + 침대룸B(싱글,퀸1) + 화장실2 + 거실1",
      "55평(약182㎡)",
      "독채, 테라스바베큐가능, 풀빌라, 바다전망, 복층",
      "기준 4명 ~ 최대 6명 / 4명 초과시 추가요금 발생",
    ],
    prices: [
      { date: "11/01 (토)", amt: "340,000<br>" },
      { date: "11/02 (토)", amt: "340,000<br>" },
      { date: "11/03 (일)", amt: "340,000<br>" },
      { date: "11/04 (월)", amt: "340,000<br>" },
    ],
    amen: [
      "🛏️ 킹사이즈 베드",
      "📺 스마트 TV",
      "❄️ 에어컨",
      "🛁 욕조",
      "☕ 미니바",
      "📶 무료 WiFi",
      "🔒 금고",
      "🌊 발코니",
    ],
  },
  {
    img: "../img/reservation/v102_63.png",
    small: "../img/reservation/v102_67.png",
    title: "Deluxe Suite Ocean View",
    desc: "넓은 공간과 럭셔리한 인테리어가 돋보이는 디럭스 스위트",

    spec: [
      "마스터 침실 + 거실 + 욕실2 + 발코니",
      "45평(약149㎡)",
      "오션뷰, 킹사이즈 베드, 욕조, 샤워부스",
      "기준 2명 ~ 최대 4명 / 2명 초과시 추가요금 발생",
    ],
    prices: [
      { date: "11/01 (금)", amt: "280,000" },
      { date: "11/02 (토)", amt: "320,000" },
      { date: "11/03 (일)", amt: "280,000" },
      { date: "11/04 (월)", amt: "250,000" },
    ],
    amen: [
      "🛏️ 킹사이즈 베드",
      "📺 스마트 TV",
      "❄️ 에어컨",
      "🛁 욕조",
      "☕ 미니바",
      "📶 무료 WiFi",
      "🔒 금고",
      "🌊 발코니",
    ],
  },
  {
    img: "../img/reservation/23.jpg",
    small: "../img/reservation/354.jpg",
    title: "Premium Pool Villa Suite",
    desc: "프라이빗 풀이 있는 최고급 풀빌라 스위트",

    spec: [
      "침실2 + 거실 + 욕실2 + 프라이빗 풀 + 테라스",
      "65평(약215㎡)",
      "독채, 프라이빗 풀, 바베큐 가능, 오션뷰",
      "기준 4명 ~ 최대 6명 / 4명 초과시 추가요금 발생",
    ],
    prices: [
      { date: "11/01 (금)", amt: "450,000" },
      { date: "11/02 (토)", amt: "500,000" },
      { date: "11/03 (일)", amt: "450,000" },
      { date: "11/04 (월)", amt: "420,000" },
    ],
    amen: [
      "🛏️ 킹사이즈 베드",
      "📺 스마트 TV",
      "❄️ 에어컨",
      "🛁 욕조",
      "☕ 미니바",
      "📶 무료 WiFi",
      "🏊 프라이빗 풀",
      "🌊 오션뷰",
    ],
  },
  {
    img: "../img/reservation/3.jpg",
    small: "../img/reservation/4.jpg",
    title: "Luxury Spa Suite",
    desc: "스파 시설이 완비된 럭셔리 스위트룸",

    spec: [
      "침실 + 스파룸 + 욕실 + 발코니",
      "40평(약132㎡)",
      "스파 욕조, 사우나, 오션뷰, 킹사이즈 베드",
      "기준 2명 ~ 최대 3명 / 2명 초과시 추가요금 발생",
    ],
    prices: [
      { date: "11/01 (금)", amt: "380,000" },
      { date: "11/02 (토)", amt: "420,000" },
      { date: "11/03 (일)", amt: "380,000" },
      { date: "11/04 (월)", amt: "350,000" },
    ],
    amen: [
      "🛏️ 킹사이즈 베드",
      "📺 스마트 TV",
      "❄️ 에어컨",
      "🛁 스파 욕조",
      "🧖 사우나",
      "📶 무료 WiFi",
      "🔒 금고",
      "🌊 오션뷰",
    ],
  },
];
const priceLine = rooms[0].prices
  .map((p) => {
    return p.amt ? `${p.date} ${p.amt}` : p.date;
  })
  .join("  ");

document.querySelector(".price-info").innerHTML = priceLine;

/* ===== 썸네일 생성 ===== */
function makeThumbs() {
  $("#thumbs").empty();
  $.each(rooms, function (i, r) {
    var t = $(
      '<div class="thumb" data-idx="' +
        i +
        '"><img src="' +
        r.img +
        '" alt="thumb' +
        (i + 1) +
        '"></div>'
    );
    if (i === 0) t.addClass("active");
    $("#thumbs").append(t);
  });
}

/* ===== 채우기 ===== */
function fill(idx) {
  var r = rooms[idx];
  $("#mainImg").fadeOut(180, function () {
    $(this).attr("src", r.img).fadeIn(180);
  });
  $("#small").fadeOut(180, function () {
    $(this).attr("src", r.small).fadeIn(180);
  });
  $("#title").html(r.title.toUpperCase().replaceAll(" ", "<br>"));
  $("#desc").text(r.desc);
  $("#type").text(r.type);

  $("#spec")
    .empty()
    .append("<p>" + r.spec[0] + "</p>")
    .append("<p>" + r.spec[1] + "</p>")
    .append("<p>" + r.spec[2] + "</p>")
    .append("<br/>")
    .append("<p>" + r.spec[3] + "</p>");

  $("#pgrid").empty();
  $.each(r.prices, function (_, p) {
    $("#pgrid").append(
      '<div class="pi"><div class="date">' +
        p.date +
        '</div><div class="amt">' +
        p.amt +
        "</div></div>"
    );
  });

  $("#amen").empty();
  $.each(r.amen, function (_, a) {
    $("#amen").append('<div class="a">' + a + "</div>");
  });

  $(".thumb").removeClass("active");
  $('.thumb[data-idx="' + idx + '"]').addClass("active");

  var percent = ((idx + 1) / rooms.length) * 100;
  $("#bar").css("width", percent + "%");
}

/* ===== 이벤트/자동재생 ===== */
var now = 0,
  timer = null;

$(document).on("click", ".thumb", function () {
  now = $(this).data("idx");
  fill(now);
  restart();
});
$(".btn-prev").on("click", function () {
  now = (now - 1 + rooms.length) % rooms.length;
  fill(now);
  restart();
});
$(".btn-next").on("click", function () {
  now = (now + 1) % rooms.length;
  fill(now);
  restart();
});

function start() {
  timer = setInterval(function () {
    now = (now + 1) % rooms.length;
    fill(now);
  }, 6000);
} // ← 6초로 느리게
function stop() {
  clearInterval(timer);
}
function restart() {
  stop();
  start();
}

makeThumbs();
fill(0);
start();

/* 썸네일/버튼 hover 시 일시정지 */
$(".thumbs, .btn-prev, .btn-next")
  .on("mouseenter", stop)
  .on("mouseleave", start);

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
