/* =====================================================
MIND PUMP CLONE - MAIN JAVASCRIPT
This file controls small interactions on the website.
===================================================== */


/* =====================================================
1. MOBILE HAMBURGER MENU
Shows or hides the navigation menu on smaller screens.
===================================================== */

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

/* Safety check so JS doesn't break if element missing */
if (hamburger && menu) {

  hamburger.addEventListener("click", function () {

    /* Toggle the "active" class on the menu */
    menu.classList.toggle("active");

  });

}



/* =====================================================
2. PRESS SLIDER
Moves between the press testimonials.
===================================================== */

const sliderTrack = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");

const nextBtn = document.querySelector(".press-slider .arrow.right");
const prevBtn = document.querySelector(".press-slider .arrow.left");

/* Keep track of which slide we are on */
let currentSlide = 0;

/* Only run slider code if slider exists */
if (sliderTrack && slides.length > 0) {

  function updateSlider() {

    /* Move track horizontally */
    sliderTrack.style.transform =
      "translateX(-" + currentSlide * 100 + "%)";

  }

  /* NEXT BUTTON */

  if (nextBtn) {

    nextBtn.addEventListener("click", function () {

      currentSlide++;

      /* Loop back to first slide */
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }

      updateSlider();

    });

  }

  /* PREVIOUS BUTTON */

  if (prevBtn) {

    prevBtn.addEventListener("click", function () {

      currentSlide--;

      /* Loop back to last slide */
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }

      updateSlider();

    });

  }

}



/* =====================================================
3. FAQ ACCORDION
Click a question to open the answer.
Only one answer stays open at a time.
===================================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {

  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const icon = item.querySelector(".faq-icon");

  question.addEventListener("click", function () {

    /* Close all other FAQ answers */
    faqItems.forEach(function (otherItem) {

      const otherAnswer = otherItem.querySelector(".faq-answer");
      const otherIcon = otherItem.querySelector(".faq-icon");

      if (otherItem !== item) {

        otherAnswer.style.display = "none";
        otherIcon.textContent = "+";

      }

    });

    /* Toggle current answer */

    if (answer.style.display === "block") {

      answer.style.display = "none";
      icon.textContent = "+";

    } else {

      answer.style.display = "block";
      icon.textContent = "−";

    }

  });

});