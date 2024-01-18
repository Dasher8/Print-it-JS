/*const slides = [
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
]*/

const track = document.querySelector('.carousel__list');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);
// console.log(dots);

const slideWidth = slides[0].getBoundingClientRect().width;
//console.log(slideWidth);

//arrange the slides next to each other

//slides[0].style.left = slideWidth * 0 //number is an index// + 'px';
//slides[1].style.left = slideWidth * 1 + 'px';
//slides[2].style.left = slideWidth * 2 + 'px';

const setSlidePosition = (slide, index) => {
	slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);


const moveToSlide = (track, currentSlide, targetSlide) => {
	track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
	currentSlide.classList.remove('current-slide');
	targetSlide.classList.add('current-slide');
}




// when I click left, move to the left
prevButton.addEventListener('click', e => {
	const currentSlide = track.querySelector('.current-slide');
	const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1]; // length - 1 used to get the index of the last slide in the array

	moveToSlide(track, currentSlide, prevSlide);
	
});

// when I cklick right, move to the right
nextButton.addEventListener('click', e => {
const currentSlide = track.querySelector('.current-slide'); //use dot to find a class
//console.log(currentSlide);
const nextSlide = currentSlide.nextElementSibling || slides[0]; //If there is a next slide, use it. If there is no next slide, use the first slide.
/*const amountToMove = nextSlide.style.left;
//console.log(amountToMove);
	//move to the next slide
	track.style.transform = 'translateX(-' + amountToMove + ')';
	currentSlide.classList.remove('current-slide'); //no need to use dot 'cause searching for the class name (dot is not included in the name)
	nextSlide.classList.add('current-slide');
*/
moveToSlide(track, currentSlide, nextSlide);
});


// when I click the nav ind, move to that slide