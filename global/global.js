let loggedIn = localStorage.getItem("loggedIn");
const loginButton = document.querySelector(".header-right > a:first-child");
const profile = document.querySelector(".profile");
const profileOverlay = document.querySelector(".profile-list");
const logoutButton = document.querySelector(".profile-list > div:last-child > a");
const closebtn = document.querySelector('.closebtn');

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
logoutButton.addEventListener('click', () => {
    localStorage.setItem("loggedIn", "false");
    location.href = "../index.html";
});