let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let highestScore = 0;

let h2 = document.querySelector("h2");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function highscore() {
  if (level > highestScore) {
    highestScore = level; // Update the highestScore with the current level
    localStorage.setItem("highestScore", highestScore); // Save to localStorage
  }
}

window.onload = function () {
  highestScore = parseInt(localStorage.getItem("highestScore")) || 0; // Load the highest score from localStorage
  document.getElementById("highest-score").innerText = ` Highest Score is ${highestScore}`;
};

document.addEventListener("click", function () {
  if (!started) {
    // Only when the game has not started
    console.log("Game is started");
    started = true;

    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash"); // After 250ms, remove the flash class
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash"); // After 250ms, remove the userflash class
  }, 250);
}

function levelUp() {
  userseq = []; // Reset user sequence when a new level starts
  level++;
  console.log(level);

  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4); // Generate random index (0-3)
  let randColor = btns[randIdx]; // Get the corresponding color
  let randBtn = document.querySelector(`.${randColor}`); // Select that button

  gameseq.push(randColor); // Add the random color to the game sequence

  gameFlash(randBtn); // Flash the random button
}

function checkAns(idx) {
  if (userseq[idx] === gameseq[idx]) {
    // If the user's choice matches the game sequence
    if (userseq.length === gameseq.length) {
      setTimeout(levelUp, 1000); // Move to the next level if the user completed the current level
    }
  } else {
    h2.innerHTML = `Game Over! Your Score is <b>${level}</b> <br> Press any key to Start`;
    document.querySelector("body").style.backgroundColor = "red"; // Flash the screen red on wrong input
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white"; // Reset the background color
    }, 150);

    highscore(); // Check and update high score
    reset(); // Reset the game
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id"); // Fetch the color from the button's id
  userseq.push(userColor); // Add to the user's sequence

  checkAns(userseq.length - 1); // Check if the user's sequence is correct
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", btnPress); // Add event listeners to all buttons
}

function reset() {
  started = false;
  userseq = [];
  gameseq = [];
  level = 0;
}
