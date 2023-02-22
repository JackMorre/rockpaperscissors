//confirm player selection
let playerChoice;
const playerBtns = document.querySelectorAll(".btn");
const allComps = document.querySelectorAll(".comp");
const www = document.querySelector(".www");
const playerScoreHTML = document.querySelector(".player-score");
const compScoreHTML = document.querySelector(".comp-score");
const reset = document.querySelector(".reset");

let playerScore = 0;
let compScore = 0;

// confirm computer selection

playerBtns.forEach((btn) => {
	btn.addEventListener("click", function () {
		playerBtns.forEach((btn) => {
			btn.classList.remove("win", "lost", "draw");
		});
		allComps.forEach((btn) => {
			btn.classList.remove("win", "lost", "draw");
		});
	});
});

const selection = (num) => {
	if (num === 1) return "rock";
	else if (num === 2) {
		return "paper";
	} else if (num === 3) {
		return "scissors";
	}
};

const getComputerChoice = () => {
	allComps.forEach((comp) => {
		comp.classList.remove("select");
	});
	const randomNum = Math.trunc(Math.random() * 3 + 1);
	const compChoice = selection(randomNum);
	return compChoice;
};

const singleRound = (player, computer) => {
	const compSelection = document.querySelector(
		`.comp[data-type="${computer}"]`
	);
	const playerSelection = document.querySelector(`.btn[data-type="${player}"]`);
	if (
		(player === "scissors" && computer === "paper") ||
		(player === "paper" && computer === "rock") ||
		(player === "rock" && computer === "scissors")
	) {
		playerScore++;
		playerScoreHTML.textContent = playerScore;
		compSelection.classList.add("lost");
		playerSelection.classList.add("win");
	} else if (
		(computer === "scissors" && player === "paper") ||
		(computer === "paper" && player === "rock") ||
		(computer === "rock" && player === "scissors")
	) {
		compScore++;
		compScoreHTML.textContent = compScore;
		compSelection.classList.add("win");
		playerSelection.classList.add("lost");
	} else if (player === computer) {
		compSelection.classList.add("draw");
		playerSelection.classList.add("draw");
	}
};

const winner = function () {
	if (playerScore === 5) {
		www.textContent = "You have won!";
		playerBtns.forEach((btn) => (btn.disabled = " disabled"));
	} else if (compScore === 5) {
		www.textContent = "You have lost";
		playerBtns.forEach((btn) => (btn.disabled = " disabled"));
	}
};

const manualSelection = function (e) {
	playerBtns.forEach((btn) => {
		btn.classList.remove("active");
	});
	const mainTarget = e.target.closest(".btn");
	playerChoice = mainTarget.getAttribute("data-type");
	const computerChoiceGame = getComputerChoice();
	singleRound(playerChoice, computerChoiceGame);

	winner();
};

playerBtns.forEach(function (btn) {
	btn.addEventListener("click", manualSelection);
});

const resetFunct = function () {
	playerScore = 0;
	compScore = 0;
	compScoreHTML.textContent = compScore;
	playerScoreHTML.textContent = playerScore;
	www.textContent = "Who will win?";
	playerBtns.forEach((btn) => {
		btn.disabled = false;
		btn.classList.remove("win", "lost", "draw");
	});
	allComps.forEach((btn) => {
		btn.classList.remove("win", "lost", "draw");
	});
};

reset.addEventListener('click', resetFunct)

//prettier-ignore
// const checkSpelling = (str) => {

//     console.log(str)
// 	if (
//         (str === "rock") ||
//         (str === "paper") ||
//         (str === "scissors")
//         ) return true
// };

// const getPlayersChoice = (str) => {
// 	wordChoice = str;
// 	if (checkSpelling(strLC) === true) {
// 		wordChoice.toLowerCase();
// 		return strLC;
// 	} else {
// 		alert("incorrect spelling, please try again");
// 		getPlayersChoice();
// 	}
// 	return wordChoice;

// console.log(wordChoice);
// const wordChoiceLC = toLowerCase(wordChoice);
// console.log(wordChoiceLC, checkSpelling(wordChoiceLC));
// if (checkSpelling(wordChoiceLC) === true) return wordChoiceLC;
// };

// console.log(singleRound(getPlayersChoice(),getComputerChoice()))

// const game = () => {
// 	for (i = 0; i < 50; i++) {
// 		if (playerScore === 5) {
// 			console.log("You have won!");
// 			break;
// 		} else if (compScore === 5) {
// 			console.log("You have lost!");
// 			break;
// 		}
// 		console.log(playerScore, compScore);
// 		console.log(singleRound(getPlayersChoice(), getComputerChoice()));
// 	}
// };

// game()
