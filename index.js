const player = document.querySelector('.bi-arrows-angle-expand');
const artist = document.querySelector('.artist-overlay');
const playButton = document.querySelector('.play-button');
const longplayButton = document.querySelector('.long-play-button');


player.addEventListener('click', () => {
	window.location.href = 'play/play.html';
});

artist.addEventListener('click', () => {
	artist.classList.toggle ('clicked');
});

playButton.addEventListener('click', () => {
  playButton.classList.toggle('clicked');
});

longplayButton.addEventListener('click', () => {
  longplayButton.classList.toggle('clicked');
});

