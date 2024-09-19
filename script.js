"use strict";

// document
//   .querySelector(".popupBox", ".popup")
//   .addEventListener("click", function () {
//     document.querySelector(".popup").classList.add("hidden");
//     document.querySelector(".popupBox").classList.add("hidden");
//     document.querySelector("body").classList.remove("yHidden");

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
// });

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
  // abba: "HKJM9F2WBAWK2",
  // elohim: "EWDCW7FDRMB3J",
  // el_shaddai: "5KGH9WM7QYBLL",
  // elyon: "8UQDPYY43Y2VJ",
  // immanuel: "MCH495J7JXETE",
  // jehovah_jireh: "PPRV7A9ZHAK4Q",
  // jesus: "B2PEJKRQH7VN4",
  // logos: "HXTNYNQ3JYJWE",
  // messiah: "X9EVAQ3EVMAXL",
  abba: "ZRTCEVY7MKLPQ",
  elohim: "RSVKANH4KMGPY",
  el_roi: "AY6EAPA7LEV9Q",
  el_shaddai: "WAV64ZG8TV48G",
  elyon: "SVGN5XAF86RN2",
  immanuel: "9S3XN7S79N2S8",
  jehovah_jireh: "4UTU9MXYQ5JU8",
  jesus: "Y29PTWS2QR7FS",
  logos: "KHAMC9DGVAGF2",
  messiah: "4Q4HKMVKEDAGE",
  custom: "JRJWZVBTT289U",
};

let buttonMeanings = {
  abba: "Father",
  elohim: "Creator",
  el_roi: "God who sees",
  el_shaddai: "God Almighty",
  elyon: "God Most High",
  immanuel: "God with us",
  jehovah_jireh: "The Lord Who provides",
  jesus: "God saves",
  logos: "The Word",
  messiah: "Chosen One",
  custom:
    "Use this option to purchase a custom necklace only after requesting and receiving confirmation of the design. To request a custom necklace, contact us at Pthree3Jewelry@gmail.com.",
};

const showPayScreen = function (str) {
  document.querySelector(`#${str}`).addEventListener("click", function () {
    document.querySelector(".shopSection").classList.add("hidden");
    document.querySelector(".payScreen").classList.remove("hidden");

    document.querySelector(".meaning").textContent = buttonMeanings[str];
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
showPayScreen("el_roi");
showPayScreen("el_shaddai");
showPayScreen("elyon");
showPayScreen("immanuel");
showPayScreen("jehovah_jireh");
showPayScreen("jesus");
showPayScreen("logos");
showPayScreen("messiah");
showPayScreen("custom");

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
