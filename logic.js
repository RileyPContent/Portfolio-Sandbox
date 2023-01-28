let saveList = document.getElementById("save-list");
let counter = document.getElementById("count");
let calcDisp = document.querySelector(".calc-display>p");
let count = 0;
let calcFirst = 6;
let calcSec = 3;
let calcEqual = calcFirst + calcSec;

const rowText = document.querySelector(".row-text");

function add1() {
  count += 1;
  counter.textContent = count;
}

function sub1() {
  count -= 1;
  counter.textContent = count;
}

function reset() {
  count = 0;
  counter.textContent = 0;
}

function save() {
  let saveNum = count + ", ";
  saveList.textContent += saveNum;
  count = 0;
  counter.textContent = 0;
}

function purchaseError() {
  let error = document.getElementById("error");
  error.style.display = "block";
  let btn = document.querySelector(".btn:active");

  btn.style.transform = "scale(1.1)";
  btn.style.boxShadow = "0 0 0 2px red";
  error.textContent = "Something went wrong, please try again.";
}

function add() {}

function sub() {}

function mult() {}

function divi() {}

function calcClear() {
  calcNum = 0;
  calcDisp.textContent = calcNum;
  console.log("clearCalc");
}

function calcEquate() {
  calcNum = calcEqual;
  calcDisp.textContent = calcNum;
}

/// BLACK JACK SECTION ///

let cardSum = 0;
let hasBJ = false;
let isPlaying = false;
let msg = "";
let cardHistory = [];
let gameNumber = [];
let totalHistory = [];
let cardNum = document.querySelectorAll(".card-num");
let messageEl = document.getElementById("messageEl");
let hand = document.querySelector(".play-stats");
let cardContent = document.querySelector(".card-content");
let playBtns = document.querySelector(".play-btns");

playBtns.style.visibility = "hidden";
hand.textContent = "Hand: ";

function renderGame() {
  isPlaying = true;
  playBtns.style.visibility = "visible";
  messageEl.style.visibility = "hidden";
  cardNum.textContent = undefined;
  hand.textContent = "Hand: ";
  cardContent.textContent = null;
  cardSum = 0;
  messageEl.style.visibility = "visible";
  messageEl.textContent = "Lets Play BlackJack!";
  updateHistory();
}

function newGame() {
  renderGame();
}

function winCheck() {
  if (cardSum <= 20) {
    hasBJ = false;
    msg = "Do you want to HIT or STAY?";
  } else if (cardSum === 21) {
    hasBJ = true;
    msg = "Thats BLACKJACK! YOU WIN!!!";
    isPlaying = false;
    playBtns.style.visibility = "hidden";
  } else {
    hasBJ = false;
    isPlaying = false;
    msg = "BUST!";
    playBtns.style.visibility = "hidden";
  }
}

function updateHistory() {
  let historyRow = document.getElementsByClassName(".history-row");
  let historyId = document.getElementById(".history-id");
  let historyCards = document.getElementById(".history-cards");
  let historyTotal = document.getElementById(".history-total");
}

function hit() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
  }
  let card = getRandomInt(11);
  cardSum += card;
  cardContent.textContent = card;
  cardContent.classList.add("card-content");
  messageEl.style.visibility = "visible";
  winCheck();
  console.log(winCheck);
  messageEl.textContent = msg;
  hand.textContent += card + " , ";
  cardHistory.push(card);
}

function displayFacts() {
  // Get the div element with a class of "bj-facts"
  let factContainer = document.querySelector(".bj-facts");
  factContainer.innerHTML =
    "Blackjack is a popular card game that is played in casinos all over the world.";

  // Set the initial index to 0
  let index = 0;

  // Set the timer to run every 3 seconds (3000 milliseconds)
  setInterval(function () {
    // Update the innerHTML of the fact container to display the current fact
    factContainer.innerHTML = bjfacts[index];

    // Increment the index
    index++;

    // If the index is greater than or equal to the length of the "bjfacts" array, reset it to 0
    if (index >= bjfacts.length) {
      index = 0;
    }
  }, 6000);
}

var bjfacts = [
  "The objective of the game is to beat the dealer by having a hand value that is higher than the dealer's hand value, without going over 21.",
  "Cards 2 through 10 are worth their face value, while face cards (Jack, Queen, and King) are worth 10 points each.",
  "An Ace can be worth either 1 or 11 points, depending on which value would be most beneficial for the hand.",
];

displayFacts();

const main = document.querySelector(".main");
let rows = main.getElementsByClassName("row");

function alterColor(color, n) {
  // Split the color into its HSLA components
  const [h, s, l, a] = color.match(/\d+/g);

  // Alter the hue value
  const newHue = (h + n * 10) % 360;

  // Create a new HSLA string with the altered hue value
  const newColor = `hsla(${newHue}, ${s}%, ${l}%, ${a})`;

  return newColor;
}

function colorDivs() {
  const primaryColor = "hsla(0, 65%, 50%, 1)";
  for (let i = 0; i < rows.length; i++) {
    let el = rows[i];
    if (el.id === "blackjack") {
      continue;
    }
    el.style.backgroundColor = alterColor(primaryColor, i);
  }
}

colorDivs();
