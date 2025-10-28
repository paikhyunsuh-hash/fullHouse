//
$(function () {
  let total = $(".panel li").length; // 총 슬라이드 개수
  let i = 0; // 현재 슬라이드 인덱스
  let stop;

  // 슬라이드 표시 함수
  function fade() {
    $(".panel li").fadeOut(); // 모든 슬라이드 숨김
    $(".panel li").eq(i).fadeIn(); // 현재 슬라이드만 표시
  }

  // // 자동 슬라이드 시작
  // function start() {
  //   stop = setInterval(function () {
  //     i = (i + 1) % total; // 0~total-1 반복
  //     fade();
  //   }, 3000); // 3초마다 자동 전환
  // }

  // // 처음 로드 시 첫 슬라이드 표시
  // fade();
  // start();

  // // Prev 버튼 클릭
  // $(".prev a").on("click", function (e) {
  //   e.preventDefault();
  //   clearInterval(stop); // 자동 슬라이드 멈춤
  //   i = (i - 1 + total) % total; // 이전 슬라이드
  //   fade();
  //   start(); // 다시 자동 슬라이드 시작
  // });

  // // Next 버튼 클릭
  // $(".next a").on("click", function (e) {
  //   e.preventDefault();
  //   clearInterval(stop); // 자동 슬라이드 멈춤
  //   i = (i + 1) % total; // 다음 슬라이드
  //   fade();
  //   start(); // 다시 자동 슬라이드 시작
  // });
});
