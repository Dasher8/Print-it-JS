const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const btnSlideNext = document.querySelector('.carousel__button--right');
const btnSlidePrevious = document.querySelector('.carousel__button--left');
const dotsContainer = document.querySelector('.carousel__nav');
const slideImage = document.querySelector('.banner-img');
const slideText = document.querySelector('.slide_text');

let counter = 0;

displaySlide()

createSliderDots();





/**
 * Modifie l'affichage de la slide lorsque l'on clique sur le bouton suivant
 */
btnSlideNext.addEventListener('click', () => {
    counter = counter + 1 

    if(counter > slides.length - 1){
        counter = 0;   
    }

    displaySlide()
})

/**
 * Modifie l'affichage de la slide lorsque l'on clique sur le bouton précédent
 */
btnSlidePrevious.addEventListener('click', () => {
    counter = counter - 1

    if(counter < 0){
        counter = slides.length - 1
    }

    displaySlide()
})

/**
 * Affiche la slide courante en fonction du counter
 */
function displaySlide() {
    slideImage.setAttribute('src', `/assets/images/slideshow/${slides[counter].image}`)
    slideText.innerHTML = slides[counter].tagLine;
}

/**
 * Créer le même nombre de dots qu'il y a de slides à afficher
 */
function createSliderDots(){

    /*
    dot.classList.add('test') // <div class="test"></div>
    dot.classList.add('truc') // <div class="test truc"></div>
    dot.classList.remove('truc') // <div class="test"></div>
    */

    for(let i = 0; i < slides.length; i++){
        const dot = document.createElement('button'); // <button></button>
        dot.classList.add('navigation__indicator') // <button class="navigation__indicator"></button>
    
        dotsContainer.append(dot)
    
        dot.addEventListener('click', () => {
            counter = i
            displaySlide()
        })
    
    }

}

/*
<div class="color" id="orange">
    <p class="title">Mon super text</p>
    <img src="" alt="" />
</div>


const node = document.createElement('div')
node.setAttribute('id', 'orange')
node.classList.add('color')
node.innerHTML = `
    <p class="title">Mon super text</p>
    <img src="" alt="" />
`
*/





/**
 * I) On résout le problème
 * II) On améliore le code (lisibilité, performences, etc..)
 * 
 * TODO: 
 * - Terminer l'affichage des dots
 * - Terminer le click sur les dots
 * 
 * Prochain projet : 
 * - Fais comme ici : 
 * - On créer en javascript un tableau qui contient les projets
 * - Créer en javascript un projet et l'afficher dans l'HTML
 * - Boucler dessus pour afficher tous les projets
 */
