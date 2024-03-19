const upBtn = document.querySelector('.controls__upButton');
const downBtn = document.querySelector('.controls__downButton');
const container = document.querySelector('.container');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.mainSlide');
const slidesCount = mainSlide.querySelectorAll('.mainSlide__item').length;
let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

const changeSlide = (direction) => {
	if (direction === 'up') {
		activeSlideIndex++;
		if (activeSlideIndex === slidesCount) {
			activeSlideIndex = 0;
		}
	} else if (direction === 'down') {
		activeSlideIndex--;
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesCount - 1;
		}
	}
	const height = container.clientHeight;
	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
	sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
};

upBtn.addEventListener('click', () => {
	changeSlide('up');
	console.log('up');
});

downBtn.addEventListener('click', () => {
	changeSlide('down');
	console.log('down');
});