const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const main = document.getElementById("main");
const toLogIn = document.querySelector(".signInButton");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

toLogIn.addEventListener("click", () => {
  if (username.value == "joelganteng" && password.value == "password") {
    localStorage.setItem("loggedIn", "true");
  } else {
    alert("Username atau password salah!");
  }
});
signUpButton.addEventListener("click", () => {
  main.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  main.classList.remove("right-panel-active");
});
const player = document.querySelector(".bi-arrows-angle-expand");
player.addEventListener("click", () => {
  window.location.href = "../play/play.html";
});
