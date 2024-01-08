

const activeModeAnimation=document.getElementById("imgTheme")
const mainElement = document.getElementById("main");
const nameProfile=document.getElementById("nameProfile");
let isDarkMode = false;

function theme() {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    mainElement.classList.add("dark-theme");
    mainElement.classList.remove("main-theme");
    activeModeAnimation.style.right="-20px"
    nameProfile.style.color="#fff"
  } else {
    mainElement.classList.add("main-theme");
    mainElement.classList.remove("dark-theme");
    activeModeAnimation.style.right="15px"
    nameProfile.style.color="#000"
  }
}
