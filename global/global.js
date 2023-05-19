let loggedIn = localStorage.getItem("loggedIn");
const loginButton = document.querySelector(".header-right > a:first-child");
const profile = document.querySelector(".profile");
const profileOverlay = document.querySelector(".profile-list");
const logoutButton = document.querySelector(".profile-list > div:last-child > a");
const closebtn = document.querySelector('.closebtn');
const Playbtn = document.querySelector('.bi-play-circle');
const Pausebtn = document.querySelector('.bi-pause-circle');
const progressBar = document.querySelector(".player-mid-track > progress");
const currDuration = document.querySelector(".current-duration");
const maxDuration = document.querySelector(".max-duration");
const like = document.querySelector(".bi-heart");
const likeButton = document.querySelector(".bi-heart > path:first-child");
const likedButton = document.querySelector(".bi-heart > path:last-child");
const volumeUp = document.querySelector(".bi-volume-up");
const volumeMute = document.querySelector(".bi-volume-mute");
const volumeBar = document.querySelector(".player-right > progress");

if (loggedIn == null || loggedIn == "false") {
    loginButton.style.display = "block";
    profile.style.display = "none";
} else {
    loginButton.style.display = "none";
    profile.style.display = "flex";
}
profile.addEventListener('click', () => {
  profileOverlay.style.display = "flex";
  profile.style.display = "none";
});
closebtn.addEventListener('click', () => {
  profileOverlay.style.display = "none";
  profile.style.display = "flex";
});
like.addEventListener('click', () => {
  if (likeButton.classList.contains("hide")) {
    likeButton.classList.remove("hide");
    likedButton.classList.add("hide");
  } else {
    likeButton.classList.add("hide");
    likedButton.classList.remove("hide");
  }
});
volumeUp.addEventListener('click', () => {
  volumeUp.classList.add("hide");
  volumeMute.classList.remove("hide");
  volumeBar.value = 0;
});
volumeMute.addEventListener('click', () => {
  volumeMute.classList.add("hide");
  volumeUp.classList.remove("hide");
  volumeBar.value = 50;
});
logoutButton.addEventListener('click', () => {
    localStorage.setItem("loggedIn", "false");
    location.href = "../index.html";
});

Playbtn.style.display = "block";
Pausebtn.style.display = "none";
progressBar.max = 223;
progressBar.value = 0;
currDuration.innerHTML = "00:00";
setInterval(() => {
  if (Playbtn.style.display == "none") {
    progressBar.value += 1;
    let minute = Math.floor(progressBar.value / 60);
    let second = progressBar.value % 60;
    currDuration.innerHTML = ("0" + minute).slice(-2) + ":" + ("0" + second).slice(-2);
  }
}, 1000);
Playbtn.addEventListener('click', () => {
  Playbtn.style.display = "none";
  Pausebtn.style.display = "block";
});
Pausebtn.addEventListener('click', () => {
  Pausebtn.style.display = "none";
  Playbtn.style.display = "block";
});