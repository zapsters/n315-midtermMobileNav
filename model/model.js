import { setActiveNavElement } from "../app/app.js";

export function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  if (pageID == "") {
    pageID = "home";
  }
  $.get(`pages/${pageID}.html`, function (data) {
    $("#app").html(data);
  });
  setActiveNavElement(pageID);
}
