const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const rightArrowButton = document.querySelector(".carousel_button_right");
const leftArrowButton = document.querySelector(".carousel_button_left");
const dotsContainer = document.querySelector(".carousel__nav");
const slideImage = document.querySelector(".banner-img");
const slideText = document.querySelector(".slide_text");

let counter = 0;

createArrowButtons();

createSliderDots();

displaySlide();

//create arrow buttons
function createArrowButtons() {
  // Select the div where you want to place the buttons
  const carousel = document.querySelector(".carousel");

  // Create left arrow button
  const leftArrowButton = document.createElement("button");
  leftArrowButton.classList.add("carousel_button", "carousel_button_left");

  const leftArrowImage = document.createElement("img");
  leftArrowImage.setAttribute("src", "/assets/images/arrow_left.png");
  leftArrowImage.setAttribute("alt", "Une flèche gauche");

  leftArrowButton.appendChild(leftArrowImage);

  // Create right arrow button
  const rightArrowButton = document.createElement("button");
  rightArrowButton.classList.add("carousel_button", "carousel_button_right");

  const rightArrowImage = document.createElement("img");
  rightArrowImage.setAttribute("src", "/assets/images/arrow_right.png");
  rightArrowImage.setAttribute("alt", "Une flèche droite");

  rightArrowButton.appendChild(rightArrowImage);

  // Append buttons to the carousel
  carousel.appendChild(leftArrowButton);
  carousel.appendChild(rightArrowButton);

  /**
   * Modifie l'affichage de la slide lorsque l'on clique sur le bouton suivant
   */
  rightArrowButton.addEventListener("click", () => {
    counter = counter + 1;

    if (counter > slides.length - 1) {
      counter = 0;
    }

    displaySlide();
  });

  /**
   * Modifie l'affichage de la slide lorsque l'on clique sur le bouton précédent
   */
  leftArrowButton.addEventListener("click", () => {
    counter = counter - 1;

    if (counter < 0) {
      counter = slides.length - 1;
    }

    displaySlide();
  });
}

/**
 * Affiche la slide courante en fonction du counter
 */
function displaySlide() {
  slideImage.setAttribute(
    "src",
    `/assets/images/slideshow/${slides[counter].image}`
  );
  slideText.innerHTML = slides[counter].tagLine;

  targetIndicator();
}

/**
 * Créer le même nombre de dots qu'il y a de slides à afficher
 */
function createSliderDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("button");
    dot.classList.add("navigation__indicator");

    dotsContainer.append(dot);

    /**
     * change the slide by cklicking on the indicator
     */
    dot.addEventListener("click", () => {
      counter = i;
      displaySlide();
    });
  }
}

/**
 * change le couleur d'indicateur s'il correspond au current slide
 **/
function targetIndicator() {
  const dots = document.querySelectorAll(".navigation__indicator");

  dots.forEach((dot, index) => {
    if (index === counter) {
      dot.classList.add("navigation__indicator--target");
    } else {
      dot.classList.remove("navigation__indicator--target");
    }
  });
}
