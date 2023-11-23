const body = document.querySelector("body");
const menuBtn = document.querySelector(".gnb .menuBtn");
const navMenu = document.querySelector(".gnb ul");

menuBtn.addEventListener("click", function () {
  navMenu.classList.add("animate");
  navMenu.classList.toggle("mobile");

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
