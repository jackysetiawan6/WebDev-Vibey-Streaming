
const artist = document.querySelectorAll('.artist-overlay');
const playButton = document.querySelectorAll('.play-button');
const longplayButton = document.querySelectorAll('.long-play-button');
const player = document.querySelector('.bi-arrows-angle-expand');

artist.forEach(element => {
  element.addEventListener('click', () => {
    element.classList.toggle ('clicked');
  });
});
playButton.forEach(element => {
  element.addEventListener('click', () => {
    element.classList.toggle('clicked');
  });
});
longplayButton.forEach(element => {
  element.addEventListener('click', () => {
    element.classList.toggle('clicked');
  });
});
player.addEventListener('click', () => {
	window.location.href = 'play/play.html';
});
