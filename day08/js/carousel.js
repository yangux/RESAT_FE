const serviceList = [
  {
    text: "고객 데이터 분석으로\n 고객 중심 서비스 제공하기",
    img: "bl",
  },
  {
    text: "기업 유튜브 채널로\n 10만 구독자 모으기 (2탄)",
    tag: "#유튜브 #콘텐츠 #기획",
    img: "gr",
  },
  {
    text: "기업 유튜브 채널로\n 10만 구독자 모으기 (1탄)",
    tag: "#유튜브 #콘텐츠 #기획",
    img: "gr",
  },
  {
    text: "신규 입사자의 적응을\n 돕는 효과적인 온보딩\n 프로그램 알아보기",
    img: "bk",
  },
];

const carouselContainer = document.querySelector(".service-slider");
const slideContainer = document.querySelector(".slide-container");
const prevBtn = carouselContainer.querySelector(".prev");
const nextBtn = carouselContainer.querySelector(".next");

// variables
let autoSlide;
let currentSlide = 1;
const carouselSpeed = 500;
const carouselInterval = 2000;
const slideLength = serviceList.length;
let slideWidth = carouselContainer.offsetWidth;
let slideContainerWidth = `${slideLength * slideWidth}px`;

// init
createSlides();
goToSlide(0);
startAutoSlide();
slideContainer.style.transition = "0ms";
slideContainer.style.transform = `translate3d(-${slideWidth}px, 0px, 0px)`;

window.addEventListener("resize", () => {
  slideWidth = carouselContainer.offsetWidth;
  slideContainerWidth = `${slideLength * slideWidth}px`;
  slideContainer.style.transform = `translate3d(-${slideWidth}px, 0px, 0px)`;
});

prevBtn.addEventListener("click", () => {
  clearInterval(autoSlide);
  startAutoSlide();

  prevSlide();
});
nextBtn.addEventListener("click", () => {
  clearInterval(autoSlide);
  startAutoSlide();

  nextSlide();
});

// funcs
function createSlides() {
  serviceList.forEach((service) => {
    const slide = document.createElement("li");
    const slideImg = document.createElement("img");
    const text = document.createElement("p");

    slide.style.width = `${slideWidth}px`;
    slideImg.src = `./img/slide_${service.img}.png`;
    text.innerText = service.text;

    if (service.tag) {
      const tag = document.createElement("span");
      tag.innerText = service.tag;
      slide.append(tag);
    }

    window.addEventListener("resize", () => {
      slide.style.width = `${slideWidth}px`;
    });

    slide.append(slideImg, text);
    slideContainer.append(slide);
  });

  cloneSlides();
}

function cloneSlides() {
  let firstSlide = slideContainer.firstElementChild;
  let lastSlide = slideContainer.lastElementChild;
  let clonedFirst = firstSlide.cloneNode(true);
  let clonedLast = lastSlide.cloneNode(true);

  slideContainer.append(clonedFirst);
  slideContainer.prepend(clonedLast);
}

function updateCarousel() {
  slideContainer.style.transition = `${carouselSpeed}ms`;
  slideContainer.style.transform = `translateX(-${
    slideWidth * currentSlide
  }px)`;

  console.log(currentSlide);
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateCarousel();
  }

  if (currentSlide === 0) {
    currentSlide = slideLength;
    setTimeout(() => {
      slideContainer.style.transition = "0ms";
      slideContainer.style.transform = `translate3d(-${
        slideWidth * slideLength
      }px, 0px, 0px)`;
    }, carouselSpeed + 100);
  }
}

function nextSlide() {
  if (currentSlide < slideLength + 1) {
    currentSlide++;
    updateCarousel();
  }

  if (currentSlide === slideLength + 1) {
    currentSlide = 1;
    setTimeout(() => {
      slideContainer.style.transition = "0ms";
      slideContainer.style.transform = `translate3d(-${slideWidth}px, 0px, 0px)`;
    }, carouselSpeed + 100);
  }
}

function goToSlide(slideIndex) {
  currentSlide = slideIndex + 1;
  updateCarousel();
}

function startAutoSlide() {
  autoSlide = setInterval(() => {
    nextSlide();
  }, carouselInterval);
}
