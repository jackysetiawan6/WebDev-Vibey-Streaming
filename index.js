const playButton = document.querySelector('.play-button');
const longplayButton = document.querySelector('.longplay-button');


playButton.addEventListener('click', () => {
  playButton.classList.toggle('clicked');
});

longplayButton.addEventListener('click', () => {
  longplayButton.classList.toggle('clicked');
});