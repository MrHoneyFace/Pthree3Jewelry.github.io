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
  // abba: "ZRTCEVY7MKLPQ",
  // adonai: "2RDG2QZD9M87E",
  // alpha_and_omega: "YPPTYUPEJSX3Y",
  // elohim: "RSVKANH4KMGPY",
  // el_olam: "EA6W9HMUQA64A",
  // el_roi: "AY6EAPA7LEV9Q",
  // el_shaddai: "WAV64ZG8TV48G",
  // elyon: "SVGN5XAF86RN2",
  // immanuel: "9S3XN7S79N2S8",
  // jehovah_jireh: "4UTU9MXYQ5JU8",
  // jehovah_mkaddesh: "U4TYF5RRRVGLU",
  // jesus: "Y29PTWS2QR7FS",
  // logos: "KHAMC9DGVAGF2",
  // messiah: "4Q4HKMVKEDAGE",
  // custom: "JRJWZVBTT289U",
  abba: "84H6M6TPQ84M8",
  adonai: "DWXZFUHL234JW",
  alpha_and_omega: "WW6XF9TLUGP7N",
  elohim: "LK6XTDU8LF3WJ",
  el_olam: "TNAP8GVKMJD32",
  el_roi: "X5HTBEWEL5C4Y",
  el_shaddai: "2MMXSSN8WAVB8",
  elyon: "S39SGTXHV22XQ",
  immanuel: "8YLLVP67HBHAU",
  jehovah_jireh: "7EJWH3N2XSJ88",
  jehovah_mkaddesh: "TZG92YX2GV8CE",
  jesus: "QYERLYD4KVK8L",
  logos: "NNWX8PR528S3L",
  messiah: "FW8MNLM6S7K62",
  custom: "ZK3GYZ8QVU57S",
};

let buttonMeanings = {
  abba: "Father",
  adonai: "Lord",
  alpha_and_omega: "The Beginning and the End",
  elohim: "Creator",
  el_olam: "Everlasting God",
  el_roi: "God who sees",
  el_shaddai: "God Almighty",
  elyon: "God Most High",
  immanuel: "God with us",
  jehovah_jireh: "The Lord Who provides",
  jehovah_mkaddesh: "The Lord who sanctifies",
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

    let uglyVariableXD = document.querySelector(".payTitle").textContent;

    if (uglyVariableXD == "Jehovah Mkaddesh") {
      document.querySelector(".payTitle").textContent = "Jehovah M'kaddesh";
      document.querySelector(".payDesc").textContent =
        '5/8" gold-plated round on 16" chain. Special two-sided design; slight imprint from opposite side may be visible on each face.';
    } else if (uglyVariableXD == "AlphA and_omega") {
      document.querySelector(".payTitle").textContent = "Alpha and Omega";
      document.querySelector(".payDesc").textContent =
        '5/8" gold-plated round on 16" chain. Special two-sided design; slight imprint from opposite side may be visible on each face.';
    } else {
      document.querySelector(".payDesc").textContent =
        '5/8" gold-plated round on 16" chain';
    }
  });

  //  Special two-sided design; slight imprint from opposite side may be visible on each face.
};

showPayScreen("abba");
showPayScreen("adonai");
showPayScreen("alpha_and_omega");
showPayScreen("elohim");
showPayScreen("el_olam");
showPayScreen("el_roi");
showPayScreen("el_shaddai");
showPayScreen("elyon");
showPayScreen("immanuel");
showPayScreen("jehovah_jireh");
showPayScreen("jehovah_mkaddesh");
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
      function replaceSecondSpace(string) {
        let splitArr = string.split(" ");

        if (splitArr.length > 2) {
          splitArr[1] = splitArr[1] + "_" + splitArr[2];
          splitArr.splice(2, 1);
        }
        return splitArr.join(" ");
      }

      img.src = img.src
        .replaceAll("%20", " ")
        .replace(
          replaceSecondSpace(
            document.querySelector(".payTitle").textContent
          ).toLowerCase(),
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
  // console.log(slides);
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
