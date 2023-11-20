const carouselContainer = document.querySelector(".carousel-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// variables
const countPictures = 5;
const carouselWidth = 800;
let thisImageOrder = 1;

for (let i = 1; i <= countPictures; i++) {
  const li = document.createElement("li");
  const img = document.createElement("img");

  img.src = "./img/" + i + ".jpg";

  li.append(img);
  carouselContainer.append(li);
}

prevBtn.addEventListener("click", () => {
  console.log(thisImageOrder);
  thisImageOrder--;
  carouselContainer.style.marginLeft = `-${
    carouselWidth * (thisImageOrder - 1)
  }px`;

  if (thisImageOrder < 1) {
    thisImageOrder = 5;
    carouselContainer.style.marginLeft = `-${
      carouselWidth * (thisImageOrder - 1)
    }px`;
  }
});
nextBtn.addEventListener("click", () => {
  carouselContainer.style.marginLeft = `${-carouselWidth * thisImageOrder}px`;
  thisImageOrder++;

  if (thisImageOrder > countPictures) {
    thisImageOrder = 1;
    carouselContainer.style.marginLeft = 0;
  }
});
