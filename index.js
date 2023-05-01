
const artist = document.querySelector('.artist-overlay');
const playButton = document.querySelector('.play-button');
const longplayButton = document.querySelector('.long-play-button');
const Playbtn=document.querySelector('.bi-play-circle');
const Pausebtn=document.querySelector('.bi-pause-circle');
Playbtn.addEventListener('click', () => {
  Playbtn.style.display = "none";
  Pausebtn.style.display = "block";
});
Pausebtn.addEventListener('click', () => {
  Pausebtn.style.display = "none";
  Playbtn.style.display = "block";
});
const player = document.querySelector('.bi-arrows-angle-expand');
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

