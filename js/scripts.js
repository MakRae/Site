// NOTE Carousel Modal Play/Pause
$(function () {
  $(".carousel").carousel({ interval: 2000 });
  $("#carouselButton").click(function () {
    if ($("#carouselButton").children("i").hasClass("fa-pause")) {
      $(".carousel").carousel("pause");
      $("#carouselButton").children("i").removeClass("fa-pause");
      $("#carouselButton").children("i").addClass("fa-play");
    } else {
      $(".carousel").carousel("cycle");
      $("#carouselButton").children("i").removeClass("fa-play");
      $("#carouselButton").children("i").addClass("fa-pause");
    }
  });
});

// NOTE Reserve Modal Button

$(function(){
  $("#reserveButton").click(function(){
    $("#reserveModal").modal("show")
  })
})
$(function(){
  $("#reserveClose").click(function(){
    $("#reserveModal").modal("hide")
  })
})

// NOTE LogIn Modal Button

$(function(){
  $("#loginButton").click(function(){
    $("#loginModal").modal("show")
  })
})
$(function(){
  $("#loginClose").click(function(){
    $("#loginModal").modal("hide")
  })
})
