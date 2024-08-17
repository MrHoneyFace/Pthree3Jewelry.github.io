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
    let img = document.querySelectorAll(".slideManual img");
    img.forEach((img) => {
      img.src = img.src
        .replace("%20", " ")
        .replace(
          document.querySelector(".payTitle").textContent.toLowerCase(),
          "slider"
        );
    });

    document.querySelector(".payScreen").classList.add("hidden");

    document.querySelector(`.${currentPage}Section`).classList.add("hidden");
    document.querySelector(`.${currentPage}`).classList.remove("activeBtn");
    currentPage = btnName;

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
  abba: "HKJM9F2WBAWK2",
  elohim: "EWDCW7FDRMB3J",
  el_shaddai: "5KGH9WM7QYBLL",
  elyon: "8UQDPYY43Y2VJ",
  immanuel: "MCH495J7JXETE",
  jehovah_jireh: "PPRV7A9ZHAK4Q",
  jesus: "B2PEJKRQH7VN4",
  logos: "HXTNYNQ3JYJWE",
  messiah: "X9EVAQ3EVMAXL",
};

const showPayScreen = function (str) {
  document.querySelector(`#${str}`).addEventListener("click", function () {
    document.querySelector(".shopSection").classList.add("hidden");
    document.querySelector(".payScreen").classList.remove("hidden");

    document.querySelector(".changeVal").value = buttonVals[str];
    document.querySelector(".payTitle").textContent = str.replace("_", " ");
    document.querySelector(".payTitle").textContent[0].toUpperCase();

    let imgs = document.querySelectorAll(".slideManual img");

    imgs.forEach((img) => {
      img.src = img.src.replace(
        "slider",
        document.querySelector(".payTitle").textContent.toLowerCase()
      );

      // console.log(img.src);
    });

    document.querySelector(".payTitle").textContent = document
      .querySelector(".payTitle")
      .textContent.replace(
        document.querySelector(".payTitle").textContent[0],
        document.querySelector(".payTitle").textContent[0].toUpperCase()
      );

    // console.log(document.querySelector(".payTitle").textContent.indexOf(" "));

    if (document.querySelector(".payTitle").textContent.indexOf(" ") !== -1) {
      document.querySelector(".payTitle").textContent = document
        .querySelector(".payTitle")
        .textContent.replace(
          document.querySelector(".payTitle").textContent[
            document.querySelector(".payTitle").textContent.indexOf(" ") + 1
          ],
          document
            .querySelector(".payTitle")
            .textContent[
              document.querySelector(".payTitle").textContent.indexOf(" ") + 1
            ].toUpperCase()
        );
    }
  });
};

showPayScreen("abba");
showPayScreen("elohim");
showPayScreen("el_shaddai");
showPayScreen("elyon");
showPayScreen("immanuel");
showPayScreen("jehovah_jireh");
showPayScreen("jesus");
showPayScreen("logos");
showPayScreen("messiah");

document
  .querySelector(".material-symbols-outlined")
  .addEventListener("click", function () {
    document.querySelector(".payScreen").classList.add("hidden");
    document.querySelector(".shopSection").classList.remove("hidden");

    let img = document.querySelectorAll(".slideManual img");
    img.forEach((img) => {
      img.src = img.src
        .replace("%20", " ")
        .replace(
          document.querySelector(".payTitle").textContent.toLowerCase(),
          "slider"
        );
    });
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
  console.log(slides);
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
