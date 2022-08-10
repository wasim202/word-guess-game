var start = document.querySelector(".start-button");
var card = document.querySelector(".card");
var wins = document.querySelector(".win");
var loses = document.querySelector(".lose");
var userInput = document.querySelector(".word-blanks");

var countWord = localStorage.getItem("word");
var words = ["football", "basketball", "vollyball"];
var chosenWord;
chosenWord = words[Math.floor(Math.random() * words.length)];
console.log(words);
// start.addEventListener("click", function (event) {
//   //event.preventDefault();

//   if (userInput.split("") === chosenWord.split("")) {
//     wins.textContent = countWord;
//   } else {
//     loses.textContent = countWord;
//     card.textContent = " ";
//   }
// });
