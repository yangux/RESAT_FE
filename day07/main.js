const carouselContainer = document.querySelector(".carousel-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// variables
const countPictures = 5;
const carouselWidth = 800;
let thisImageOrder = 1;
let autoSlide;

// init
createSlide();
startAutoSlide();

prevBtn.addEventListener("click", () => {
  clearInterval(autoSlide);

  thisImageOrder--;

  if (thisImageOrder < 1) {
    setTimeout(() => {
      carouselContainer.classList.remove("animate");
      thisImageOrder = countPictures;
      goLastSlide(carouselWidth, thisImageOrder);
    }, 1000);
    setTimeout(() => {
      carouselContainer.classList.add("animate");
    }, 1100);
  }
  goPrevSlide(carouselWidth, thisImageOrder);
  startAutoSlide();
});

nextBtn.addEventListener("click", () => {
  clearInterval(autoSlide);

  goNextSlide(carouselWidth, thisImageOrder);

  thisImageOrder++;

  if (thisImageOrder > countPictures) {
    setTimeout(() => {
      carouselContainer.classList.remove("animate");
      thisImageOrder = 1;
      goFirstSlide(carouselWidth);
    }, 1000);

    setTimeout(() => {
      carouselContainer.classList.add("animate");
    }, 1100);
  }

  startAutoSlide();
});

// funcs
function startAutoSlide() {
  autoSlide = setInterval(() => {
    nextBtn.click();
  }, 2000);
}

function goPrevSlide(carouselWidth, thisImageOrder) {
  carouselContainer.style.marginLeft = `${-carouselWidth * thisImageOrder}px`;
}
function goNextSlide(carouselWidth, thisImageOrder) {
  carouselContainer.style.marginLeft = `${
    -carouselWidth * (thisImageOrder + 1)
  }px`;
}

function goFirstSlide(carouselWidth) {
  carouselContainer.style.marginLeft = `${-carouselWidth}px`;
}
function goLastSlide(carouselWidth, thisImageOrder) {
  carouselContainer.style.marginLeft = `${-carouselWidth * thisImageOrder}px`;
}

function createSlide() {
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
}
