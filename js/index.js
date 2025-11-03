$(function () {
  $(".title li").on("click", function () {
    $(".title li").removeClass("clicked");
    $(this).addClass("clicked");
    i = $(this).index();
    $(".innerRight ul").removeClass("on");
    $(".innerRight ul").eq(i).addClass("on");
  });
});
