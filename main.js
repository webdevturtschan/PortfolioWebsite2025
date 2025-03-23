// von GPT
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navContainer = document.querySelector(".nav-container");
    const hamburgerIcon = document.querySelector("#hamburger img");
  
    let isOpen = false;
  
    hamburger.addEventListener("click", () => {
      navContainer.classList.toggle("nav-active");
      isOpen = !isOpen;
  
      // Icon umschalten (Hamburger ↔ X)
      hamburgerIcon.src = isOpen ? "images/icons/close.svg" : "images/icons/hamburger.svg";
      hamburgerIcon.alt = isOpen ? "Menü schließen" : "Menü öffnen";
    });
  });
  
//Projects - SLIDER

//Slider-Effekt
$(document).ready(function () {
    const $slider = $(".slider");
    const $nextBtn = $(".next-btn");
    const $prevBtn = $(".prev-btn");

    let scrollAmount = 0;
    let slidesToShow = 3;

    const updateSlidesToShow = () => {
        if (window.innerWidth <= 768) {
            slidesToShow = 1;
        } else {
            slidesToShow = 3;
        }

        scrollAmount = 0;
        $slider.css("transform", "translateX(0)");
    };

    // Dynamische Berechnung der Slide-Breite
    const calculateSlideWidth = () => {
        const gap = parseFloat(window.getComputedStyle($slider[0]).gap || "0");
        return $slider.width() / slidesToShow + gap; // Breite eines Slides inkl. Abstand
    };

    $(window).on("resize", updateSlidesToShow);

    updateSlidesToShow();
    
    $nextBtn.on("click", function () {
        const gap = parseFloat(window.getComputedStyle($slider[0]).gap || "0");
        const slideWidth = calculateSlideWidth();;
        const sliderWidth = $slider[0].scrollWidth;
        const maxScroll = sliderWidth - $slider.parent().width() + gap;

        if (scrollAmount + slideWidth < maxScroll) {
            scrollAmount += slideWidth;
        } else {
            scrollAmount = maxScroll;
        }

            $slider.css("transform", `translateX(-${scrollAmount}px)`);
    });

    $prevBtn.on("click", function () {
        const gap = parseFloat(window.getComputedStyle($slider[0]).gap || "0");
        const slideWidth = calculateSlideWidth();

        if (scrollAmount - slideWidth >= 0) {
            scrollAmount -= slideWidth;
        } else {
            scrollAmount = 0;
        }

        $slider.css("transform", `translateX(-${scrollAmount}px)`);
    });
});

//Lightbox-Effekt
$(document).on("click", ".slider img", function () {
    const imgSrc = $(this).attr("src");

    $(".lightbox-image").attr("src", imgSrc);
    $(".lightbox").css({
        "opacity": "1",
        "visibility": "visible"
    });

    $(".overlay").css({
        "display": "block",
        "opacity": "0.5"
    });
});

// Schließen der Lightbox und Zurücksetzen des Hintergrunds
$(document).on("click", ".close-btn", function () {
    $(".lightbox").css({
        "opacity": "0",
        "visibility": "hidden"
    });

    $(".overlay").css({
        "opacity": "0"
    });

    setTimeout(() => {
        $(".overlay").css("display", "none");
    }, 300); 
});


//Kontakt
//Formular
const form = document.querySelector("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const button = document.getElementById("submit");

function disableButton() {
    const button = document.getElementById("submit");
    button.disabled = true;
    button.textContent = "Sending...";
    setTimeout(() => {
        button.disabled = false;
        button.textContent = "Absenden";
    }, 2000);
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    disableButton(); 
    showSuccessMessage(); 

    setTimeout(() => {
        form.submit(); 
    }, 2000);
});


function showSuccessMessage() {
    alert("Form successfully submitted! ✅");
}


function saveToLocalStorage() {
    localStorage.setItem("firstname", firstname.value);
    localStorage.setItem("lastname", lastname.value);
}


function loadFromLocalStorage() {
    if (localStorage.getItem("firstname")) {
        firstname.value = localStorage.getItem("firstname");
    }
    if (localStorage.getItem("lastname")) {
        lastname.value = localStorage.getItem("lastname");
    }
}

firstname.addEventListener("input", saveToLocalStorage);
lastname.addEventListener("input", saveToLocalStorage);


window.addEventListener("load", loadFromLocalStorage);



// FAQ´s
// FAQ Accordion
// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      const answer = button.nextElementSibling;
  
      if (button.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = null;
      }
    });
  });
  
  