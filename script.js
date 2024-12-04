"use strict";

let slideIndex;

let buttonVals = {
  abba: "H2HRNW57C8TVE",
  adonai: "6FUYXL6D7Z4CW",
  alpha_and_omega: "7E3J44MNGQC8Q",
  elohim: "KBXKANS5JCRZG",
  el_olam: "YDFBAGUSTUC3L",
  el_roi: "NS9ZH5T5HJEW8",
  el_shaddai: "QAYK89B6AH5AG",
  elyon: "3GQRWMQ54NEJW",
  immanuel: "ZCQUQXEXE96VN",
  jehovah_jireh: "9EQ6YQP9AR5Z4",
  jehovah_mkaddesh: "8QA9PSE374SY2",
  jesus: "RN3N72ZAMA5JA",
  logos: "G7N9N4DEY7FE2",
  messiah: "8E3BXRP8JFPE2",
  custom: "74EKPA53WB3GS",
};

//10080003380
//lol ignore that

let cheapVals = {
  abba: "B9B2A5XPLN4CA",
  adonai: "ZWCPS2FK5NV44",
  alpha_and_omega: "9P3DW8P3F5LUY",
  elohim: "UYA84KKN2672E",
  el_olam: "MJQ2E2EC65H5W",
  el_roi: "A2XYM48BVX4LN",
  el_shaddai: "W86BD79XVKQKU",
  elyon: "TFZQGLNZ7FYQ4",
  immanuel: "A2ASZRKKE7L8J",
  jehovah_jireh: "7QW5QH4Q6B27A",
  jehovah_mkaddesh: "KE2HG4DCFAXVA",
  jesus: "97X87TGXCSD9C",
  logos: "WZ5WHAPHAYXBU",
  messiah: "5T3WEFTRE87PJ",
  custom: "5FXT7SWTB2SBA",
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

// discount

let isDiscountActive;
let curBtnVal = {};

let discountStartDate = new Date(1732942800000);
let discountEndDate = new Date(1733029199999);
new Date() > discountStartDate && new Date() < discountEndDate
  ? (isDiscountActive = true)
  : (isDiscountActive = false);

if (isDiscountActive == true) {
  document.querySelector("body").classList.add("yHidden");
  document.querySelector(".popupBox").classList.remove("hidden");
  curBtnVal = cheapVals;
} else {
  document.querySelector(".popupBox").classList.add("hidden");
  document.querySelector("body").classList.remove("yHidden");
  curBtnVal = buttonVals;
}

// popup

document
  .querySelector(".popupBox", ".popup")
  .addEventListener("click", function () {
    document.querySelector(".popup").classList.add("hidden");
    document.querySelector(".popupBox").classList.add("hidden");
    document.querySelector("body").classList.remove("yHidden");
  });

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

const showPayScreen = function (str) {
  document.querySelector(`#${str}`).addEventListener("click", function () {
    document.querySelector(".shopSection").classList.add("hidden");
    document.querySelector(".payScreen").classList.remove("hidden");

    document.querySelector(".meaning").textContent = buttonMeanings[str];
    document.querySelector(".changeVal").value = curBtnVal[str];
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

// exit payscreen

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

slideIndex = 1;
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
