$(function () {
  $(function () {
    // con01, con02 각각에 대해 동일 동작
    $(".con01, .con02").each(function () {
      const section = $(this);

      // 각 섹션 안의 버튼들 클릭 시
      section.find(".btn li").on("click", function (e) {
        e.preventDefault();

        const index = $(this).index(); // 클릭한 버튼 순서 가져오기

        // 이미지 전환
        section.find(".right li").hide().eq(index).fadeIn();

        // 텍스트 전환
        section.find(".txt li").hide().eq(index).fadeIn();

        // 버튼 투명도 효과
        section.find(".btn li img").fadeTo(300, 0.5);
        $(this).find("img").fadeTo(300, 1);
      });
    });
  });
});
