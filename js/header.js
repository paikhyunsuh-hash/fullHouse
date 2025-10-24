$(function () {
  /*SIDE MENU*/
  $("header .inner nav .burger .open").on("click", function () {
    $("#menu").addClass("active");
    $(".open").hide();
    $(".close").show();
    // $("#container").addClass("active");
  });

  $("header .inner nav .burger .close").on("click", function () {
    $("#menu").removeClass("active");
    $(".close").hide();
    $(".open").show();
    // $("#container").removeClass("active");
  });
});
