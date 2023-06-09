
const artist = document.querySelectorAll('.artist-overlay');
const playButton = document.querySelectorAll('.play-button');
const longplayButton = document.querySelectorAll('.long-play-button');
const Playbtn=document.querySelector('.bi-play-circle');
const Pausebtn = document.querySelector('.bi-pause-circle');


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
	window.location.href = '../play/play.html';
});

const profile = document.querySelector('.profile');
const profileOverlay = document.querySelector('.profile-list');
profile.addEventListener('click', () => {
  profileOverlay.style.opacity = "1";
  profile.style.opacity = "0";
});
const closebtn = document.querySelector('.closebtn');
closebtn.addEventListener('click', () => {
  profileOverlay.style.opacity = "0";
  profile.style.opacity = "1";
});


