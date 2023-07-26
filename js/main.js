$(".yourteamslider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1015,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 730,
      settings: {
        slidesToShow: 1,
        dots: true,
        centerMode: true,
        centerPadding: "0",
      },
    },
  ],
});

$(".portfolioWebsite").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1015,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".googelSlider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //     }
  //   }
  // ]
});

$(".faq_card .question").click(function (e) {
  e.preventDefault();
  if ($(this).hasClass("answer_inquestion")) {
    if ($(window).width() < 960) {
      if ($(this).parent().hasClass("question_opened")) {
        $(this).parent().removeClass("question_opened");
        $(this).next().css("max-height", "0px");
      } else {
        $(".question_opened").find(".answer").css("max-height", "0px");
        $(".question_opened").removeClass("question_opened");
        $(this).parent().addClass("question_opened");
        var heightinside = $(this).next().find(".inner").height() + 50;
        $(this)
          .next()
          .css("max-height", heightinside + "px");
      }
    }
  } else {
    if ($(this).parent().hasClass("question_opened")) {
      $(this).parent().removeClass("question_opened");
      $(this).next().css("max-height", "0px");
    } else {
      $(".question_opened").find(".answer").css("max-height", "0px");
      $(".question_opened").removeClass("question_opened");
      $(this).parent().addClass("question_opened");
      var heightinside = $(this).next().find(".inner").height() + 50;
      $(this)
        .next()
        .css("max-height", heightinside + "px");
    }
  }
});

$("nav .extendedNav .floatRight ul .dropdown .maina").click(function (e) {
  e.preventDefault();
  if ($(this).parent().hasClass("dropdown_opened")) {
    $(this).parent().removeClass("dropdown_opened");
    $(this).next().css("max-height", "0px");
  } else {
    $(this).parent().addClass("dropdown_opened");
    var heightinside = $(this).next().find("ul").height() + 50;
    $(this)
      .next()
      .css("max-height", heightinside + "px");
  }
});

$("nav .hamburger").click(function (e) {
  e.preventDefault();
  $("nav .extendedNav").addClass("extendedNav_open");
});
$("nav .xhamburger").click(function (e) {
  e.preventDefault();
  $("nav .extendedNav").removeClass("extendedNav_open");
});

$(window).scroll(function () {
  if ($(document).scrollTop() > 100) {
    $("nav").addClass("navFixed_prepare");
    if ($(document).scrollTop() > 200) {
      $("nav").addClass("navFixed_prepare2");
      if ($(document).scrollTop() > 300) {
        $("nav").addClass("navFixed");
      } else {
        $("nav").removeClass("navFixed");
      }
    } else {
      $("nav").removeClass("navFixed_prepare2");
    }
  } else {
    $("nav").removeClass("navFixed_prepare");
  }
});

$(".videoSection .videoPlace").on("click", function () {
  $(this).addClass("videoplace_active");
  $(this).find("video").trigger("play");
});
