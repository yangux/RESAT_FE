const carouselContainer = document.querySelector(".carousel-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// variables
const countPictures = 5;
const carouselWidth = 800;
let thisImageOrder = 1;
let autoSlide;

function StartAutoSlide() {
  autoSlide = setInterval(() => {
    nextBtn.click();
  }, 2000);
}
StartAutoSlide();

for (let i = 1; i <= countPictures; i++) {
  const li = document.createElement("li");
  const img = document.createElement("img");

  img.src = "./img/" + i + ".jpg";

  li.append(img);
  carouselContainer.append(li);
  carouselContainer.classList.add("animate");
}

const beforeFirstLi = document.createElement("li");
const afterLastLi = document.createElement("li");
const beforeFirstImg = document.createElement("img");
const afterLastImg = document.createElement("img");
beforeFirstImg.src = "./img/" + countPictures + ".jpg";
afterLastImg.src = "./img/1.jpg";
beforeFirstLi.prepend(beforeFirstImg);
afterLastLi.append(afterLastImg);
carouselContainer.prepend(beforeFirstLi);
carouselContainer.append(afterLastLi);

prevBtn.addEventListener("click", () => {
  clearInterval(autoSlide);
  StartAutoSlide();

  carouselContainer.style.marginLeft = `-${
    carouselWidth * (thisImageOrder - 1)
  }px`;
  thisImageOrder--;

  if (thisImageOrder < 1) {
    setTimeout(() => {
      carouselContainer.classList.remove("animate");
      thisImageOrder = 5;
      carouselContainer.style.marginLeft = `-${
        carouselWidth * (thisImageOrder + 1)
      }px`;
    }, 1000);
    setTimeout(() => {
      carouselContainer.classList.add("animate");
    }, 1100);
  }
});
nextBtn.addEventListener("click", () => {
  clearInterval(autoSlide);
  StartAutoSlide();

  carouselContainer.style.marginLeft = `${
    -carouselWidth * (thisImageOrder + 1)
  }px`;

  thisImageOrder++;

  if (thisImageOrder > countPictures) {
    setTimeout(() => {
      carouselContainer.classList.remove("animate");
      carouselContainer.style.marginLeft = `${-carouselWidth}px`;
      thisImageOrder = 1;
    }, 1000);
    setTimeout(() => {
      carouselContainer.classList.add("animate");
    }, 1100);
  }
});
