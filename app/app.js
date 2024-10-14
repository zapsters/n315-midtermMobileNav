import { changeRoute } from "../model/model.js";

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
  $("#mobileNavHamburger").on("click", function () {
    let mobileNav = "#mobileNav";
    console.log($("#mobileNav").css("transform"));
    $(mobileNav).css("transition-duration", "0.2s");
    if ($(mobileNav).css("transform")[16] == "0") {
      $(mobileNav).css("transform", "scaleY(100%)");
    } else {
      $(mobileNav).css("transform", "scaleY(0)");
    }
  });
}

$(document).ready(function () {
  initURLListener();
});

export function setActiveNavElement(pageID) {
  $("nav .links a, .mobileNav a").each(function () {
    if ($(this).attr("href") == `#${pageID}`) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
}
