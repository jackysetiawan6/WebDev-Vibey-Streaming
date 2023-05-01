const player = document.querySelector('.bi-arrows-angle-expand');
player.addEventListener('click', () => {
	window.location.href = 'play/play.html';
});


const playButton = document.querySelector('.play-button');
const longplayButton = document.querySelector('.longplay-button');


playButton.addEventListener('click', () => {
  playButton.classList.toggle('clicked');
});

longplayButton.addEventListener('click', () => {
  longplayButton.classList.toggle('clicked');
});

