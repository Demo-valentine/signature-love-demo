// NAME CHANGE
document.getElementById("girlName").innerText = "Her ❤️";

// SLIDER
const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
let index = 0;

const slideImg = document.getElementById("slideImg");
const sliderSection = document.getElementById("sliderSection");
const valentineSection = document.getElementById("valentineSection");
const finalSection = document.getElementById("finalSection");

const sliderInterval = setInterval(() => {
  index++;
  if (index < images.length) {
    slideImg.src = images[index];
  } else {
    clearInterval(sliderInterval);
    sliderSection.classList.remove("active");
    valentineSection.classList.add("active");
  }
}, 2500);

// YES / NO LOGIC
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questionText = document.getElementById("questionText");

let noCount = 0;

const noTexts = [
  "Think again 😏",
  "Are you sure? 🙄",
  "Try again 😌",
  "You know the answer ❤️",
  "Okay last chance 😳"
];

noBtn.addEventListener("click", () => {
  if (noCount < noTexts.length) {
    questionText.innerText = noTexts[noCount];
    yesBtn.style.transform = `scale(${1 + noCount * 0.3})`;
    noCount++;
  } else {
    noBtn.style.display = "none";
    yesBtn.style.transform = "scale(4)";
  }
});

yesBtn.addEventListener("click", () => {
  valentineSection.classList.remove("active");
  finalSection.classList.add("active");
  startHearts();
});

// HEART ANIMATION
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 300);
}
