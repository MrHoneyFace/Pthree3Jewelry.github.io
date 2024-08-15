"use strict";

// SLIDER

const sliderAuto = document.querySelector(".sliderAuto");
const images = document.querySelectorAll(".sliderAuto img");
let index = 0;

function cloneImages() {
  const firstImage = images[0].cloneNode(true);
  const lastImage = images[images.length - 1].cloneNode(true);
  sliderAuto.appendChild(firstImage);
  sliderAuto.insertBefore(lastImage, images[0]);
}

function moveSlider() {
  index++;
  sliderAuto.style.transform = `translateX(${-index * 100}%)`;
  if (index >= images.length) {
    setTimeout(() => {
      sliderAuto.style.transition = "none";
      index = 0;
      sliderAuto.style.transform = `translateX(${-index * 100}%)`;
      setTimeout(() => {
        sliderAuto.style.transition = "transform 0.5s ease-in-out";
      }, 0);
    }, 500);
  }
}

cloneImages();
setInterval(moveSlider, 3000);

// PAGES

let currentPage = "home";
document.querySelector(`.${currentPage}Section`).classList.remove("hidden");
document.querySelector(`.${currentPage}`).classList.add("activeBtn");

function checkForClick(btnName) {
  document.querySelector(`.${btnName}`).addEventListener("click", function () {
    // console.log(`${btnName} clicked!`);

    document.querySelector(".payScreen").classList.add("hidden");

    document.querySelector(`.${currentPage}Section`).classList.add("hidden");
    document.querySelector(`.${currentPage}`).classList.remove("activeBtn");
    currentPage = btnName;
    // console.log(currentPage);
    document.querySelector(`.${currentPage}Section`).classList.remove("hidden");
    document.querySelector(`.${currentPage}`).classList.add("activeBtn");
  });
}

checkForClick("home");
checkForClick("shop");
checkForClick("about");
checkForClick("faq");
checkForClick("contact");

// .shopCard and .payScreen

let buttonVals = {
  Abba: "HKJM9F2WBAWK2",
  Elohim: "EWDCW7FDRMB3J",
  El_Shaddai: "5KGH9WM7QYBLL",
  Elyon: "8UQDPYY43Y2VJ",
  Immanuel: "MCH495J7JXETE",
  Jehovah_Jireh: "PPRV7A9ZHAK4Q",
  Jesus: "B2PEJKRQH7VN4",
  Logos: "HXTNYNQ3JYJWE",
  Messiah: "X9EVAQ3EVMAXL",
};

const showPayScreen = function (str) {
  document.querySelector(`#${str}`).addEventListener("click", function () {
    document.querySelector(".shopSection").classList.add("hidden");
    document.querySelector(".payScreen").classList.remove("hidden");

    document.querySelector(".changeVal").value = buttonVals[str];
    document.querySelector(".payTitle").textContent = str.replace("_", " ");

    let imgs = document.querySelectorAll(".slideManual img");
    imgs.forEach((img) => {
      img.src = img.src.replace(
        "slider",
        document.querySelector(".payTitle").textContent
      );
      console.log(img.src);
    });
  });
};

showPayScreen("Abba");
showPayScreen("Elohim");
showPayScreen("El_Shaddai");
showPayScreen("Elyon");
showPayScreen("Immanuel");
showPayScreen("Jehovah_Jireh");
showPayScreen("Jesus");
showPayScreen("Messiah");

document
  .querySelector(".material-symbols-outlined")
  .addEventListener("click", function () {
    // console.log("X clicked! .payScreen hiding!");
    document.querySelector(".payScreen").classList.add("hidden");
    document.querySelector(".shopSection").classList.remove("hidden");

    let img = document.querySelectorAll(".slideManual img");
    img.forEach((img) => {
      // console.log(document.querySelector(".payTitle").textContent);

      img.src = img.src
        .replace("%20", " ")
        .replace(document.querySelector(".payTitle").textContent, "slider");
    });
    // console.log(document.querySelector(".payTitle").textContent);
  });

// MANUAL SLIDER

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideManual");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
