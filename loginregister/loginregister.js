const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const main = document.getElementById('main');
const toLogIn = document.querySelector(".signInButton");

toLogIn.addEventListener('click', () => {
  localStorage.setItem("loggedIn", "true");
});
signUpButton.addEventListener('click', () => {
	main.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	main.classList.remove("right-panel-active");
});
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