const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const menuBtn = document.querySelector(".gnb .menuBtn");
const navMenu = document.querySelector(".gnb ul");
const exitBarFirst = menuBtn.querySelector("span:first-child");
const exitBarMiddle = menuBtn.querySelector("span:nth-child(2)");
const exitBarLast = menuBtn.querySelector("span:last-child");

menuBtn.addEventListener("click", function () {
  transformExitBtn();
  navMenu.classList.add("animate");
  navMenu.classList.toggle("mobile");
  modal.classList.toggle("visible");

  if (navMenu.classList.contains("mobile")) {
    // open
    navMenu.style.right = 0;
  } else {
    // close
    navMenu.style.right = "-220px";
  }
  setTimeout(() => {
    navMenu.classList.remove("animate");
  }, 1510);
});

function transformExitBtn() {
  exitBarMiddle.classList.toggle("hide");
  exitBarFirst.classList.toggle("exitBarFirst");
  exitBarLast.classList.toggle("exitBarLast");
}
