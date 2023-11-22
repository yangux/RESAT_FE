const serviceList = [
  {
    text: "고객 데이터 분석으로\n 고객 중심 서비스 제공하기",
    bg: "bl",
  },
  {
    text: "기업 유튜브 채널로\n 10만 구독자 모으기 (2탄)",
    tag: ["유튜브", "콘텐츠", "기획"],
    bg: "gr",
  },
  {
    text: "기업 유튜브 채널로\n 10만 구독자 모으기 (1탄)",
    tag: ["유튜브", "콘텐츠", "기획"],
    bg: "gr",
  },
  {
    text: "신규 입사자의 적응을\n 돕는 효과적인 온보딩\n 프로그램 알아보기",
    bg: "bk",
  },
];

const carouselContainer = document.querySelector(".service-slider");
const slideContainer = document.querySelector(".slide-container");
const prevBtn = carouselContainer.querySelector(".prev");
const nextBtn = carouselContainer.querySelector(".next");

// variables
const countPictures = serviceList.length;
const carouselWidth = carouselContainer.offsetWidth;
let thisImageOrder = 1;
let autoSlide;

// init
slideContainer.style.width = `${carouselWidth * (countPictures + 2)}px`;
slideContainer.style.marginLeft = `-${carouselWidth}px`;

createSlide();
startAutoSlide();

prevBtn.addEventListener("click", () => {
  clearInterval(autoSlide);

  thisImageOrder--;

  if (thisImageOrder < 1) {
    setTimeout(() => {
      slideContainer.classList.remove("animate");
      thisImageOrder = countPictures;
      goLastSlide(carouselWidth, thisImageOrder);
    }, 1000);
    setTimeout(() => {
      slideContainer.classList.add("animate");
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
      slideContainer.classList.remove("animate");
      thisImageOrder = 1;
      goFirstSlide(carouselWidth);
    }, 1000);

    setTimeout(() => {
      slideContainer.classList.add("animate");
    }, 1100);
  }

  startAutoSlide();
});

// funcs
function startAutoSlide() {
  autoSlide = setInterval(() => {
    nextBtn.click();
  }, 3000);
}

function goPrevSlide(carouselWidth, thisImageOrder) {
  slideContainer.style.marginLeft = `${-carouselWidth * thisImageOrder}px`;
}
function goNextSlide(carouselWidth, thisImageOrder) {
  slideContainer.style.marginLeft = `${
    -carouselWidth * (thisImageOrder + 1)
  }px`;
}

function goFirstSlide(carouselWidth) {
  slideContainer.style.marginLeft = `${-carouselWidth}px`;
}
function goLastSlide(carouselWidth, thisImageOrder) {
  slideContainer.style.marginLeft = `${-carouselWidth * thisImageOrder}px`;
}

function createSlide() {
  serviceList.forEach((service) => {
    const li = document.createElement("li");
    const p = document.createElement("p");

    li.style.width = `${carouselWidth}px`;
    li.style.backgroundImage = "url('./img/slide_" + service.bg + ".png')";
    p.innerText = service.text;

    li.append(p);
    slideContainer.append(li);
    slideContainer.classList.add("animate");
  });

  const beforeFirstLi = document.createElement("li");
  const afterLastLi = document.createElement("li");
  const fisrtP = document.createElement("p");
  const lastP = document.createElement("p");

  beforeFirstLi.style.width = `${carouselWidth}px`;
  afterLastLi.style.width = `${carouselWidth}px`;
  beforeFirstLi.style.backgroundImage =
    "url('./img/slide_" + serviceList[serviceList.length - 1].bg + ".png')";
  afterLastLi.style.backgroundImage =
    "url('./img/slide_" + serviceList[0].bg + ".png')";
  fisrtP.innerText = serviceList[0].text;
  lastP.innerText = serviceList[serviceList.length - 1].text;

  beforeFirstLi.append(lastP);
  afterLastLi.append(fisrtP);
  slideContainer.prepend(beforeFirstLi);
  slideContainer.append(afterLastLi);
}
