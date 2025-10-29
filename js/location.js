<<<<<<< HEAD
=======
$(function () {
  const total = $("#visual .panel li").length;
  let i = 0;
  let interval;

  // 초기 화면
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
});

// 이전 버튼
$("#visual .prev a").click(function (e) {
  e.preventDefault();
  clearInterval(interval);
  i = (i - 1 + total) % total;
  fadeSlide();
  startSlide();
});
>>>>>>> b1a5d166788fffa6cf5af897d7c29efcbb60458c
// DOMContentLoaded: HTML 문서를 모두 읽고 난 후 스크립트를 실행합니다.
document.addEventListener("DOMContentLoaded", () => {
  /**
   * 특정 섹션(section) 내부의 요소들만 제어하는 함수
   * @param {string} sectionSelector - 제어할 섹션의 CSS 선택자 (예: '.con01', '.con02')
   */
  function setupInteractiveSection(sectionSelector) {
    // 1. 해당 섹션 요소를 찾습니다. (예: <section class="con01">)
    const section = document.querySelector(sectionSelector);

    // 2. 페이지에 해당 섹션이 없으면 오류 방지를 위해 함수를 종료합니다.
    if (!section) {
      return;
    }

    // 3. *반드시* 해당 섹션 내부에서만 요소를 찾습니다.
    // (document 대신 section.querySelectorAll 사용)
    const bgItems = section.querySelectorAll(".bg li");
    const txtItems = section.querySelectorAll(".txt li");
    const imgItems = section.querySelectorAll(".right ul li");

    // 4. 활성 상태 업데이트 함수 (이 섹션 내부에서만 작동)
    function updateActive(selectedIndex) {
      // 4-1. 이 섹션 내부의 모든 'active' 클래스 제거
      bgItems.forEach((item) => item.classList.remove("active"));
      txtItems.forEach((item) => item.classList.remove("active"));
      imgItems.forEach((item) => item.classList.remove("active"));

      // 4-2. 이 섹션의 선택된 항목(selectedIndex)에만 'active' 클래스 추가
      bgItems[selectedIndex].classList.add("active");
      txtItems[selectedIndex].classList.add("active");
      imgItems[selectedIndex].classList.add("active");
    }

    // 5. 썸네일(bgItems)에 클릭 이벤트 추가 (이 섹션 내부)
    bgItems.forEach((item, index) => {
      item.addEventListener("click", (event) => {
        event.preventDefault(); // <a> 태그 점프 방지
        updateActive(index); // 해당 순번(index)으로 활성 상태 변경
      });
    });

    // 6. 이 섹션의 첫 번째 항목을 기본값으로 활성화
    updateActive(0);
  }

  // --- 스크립트 실행 ---
  // .con01 섹션에 대해 기능 적용
  setupInteractiveSection(".con01");

  // .con02 섹션에 대해 기능 적용
  setupInteractiveSection(".con02");
});
