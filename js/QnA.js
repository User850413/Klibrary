var top5 = $(".context .top5 ul li");
top5.on("click", function () {
  top5.removeClass("active");
  $(this).addClass("active");
  var idx = $(this).index();
  $(".questions").hide();
  $(".questions").eq(idx).show();
});

$(".search .Qname").on("click", function () {
  $(this).find("i").toggleClass("xi-checkbox-blank");
  $(this).find("i").toggleClass("xi-check-square");
});
$(".search .Qcontent").on("click", function () {
  $(this).find("i").toggleClass("xi-checkbox-blank");
  $(this).find("i").toggleClass("xi-check-square");
});

var title = $(".questions .question");
title.click(function () {
  $(this).find("i").toggleClass("xi-angle-down");
  $(this).find("i").toggleClass("xi-angle-up");
  var idx = $(this).index;

  if ($(this).hasClass("active")) {
    title.removeClass("active");
    $(".questions .answer").slideUp("fast");
    $(this).removeClass("active");
    $(this).next().slideUp("fast");
  } else {
    title.removeClass("active");
    $(".questions .answer").slideUp("fast");
    $(this).addClass("active");
    $(this).next().slideDown("fast");
  }
});
