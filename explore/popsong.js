const playButton = document.querySelectorAll('.play-button');
playButton.forEach(element => {
  element.addEventListener('click', () => {
    element.classList.toggle('clicked');
  });
});
const player = document.querySelector('.bi-arrows-angle-expand');
player.addEventListener('click', () => {
	window.location.href = '../play/play.html';
});