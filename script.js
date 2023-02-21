const selection = (num) => {
	if (num === 1) return "rock";
	else if (num === 2) {
		return "paper";
	} else if (num === 3) {
		return "scissors";
	}
};

const getComputerChoice = () => {
	const randomNum = Math.trunc(Math.random() * 3 + 1);
	return selection(randomNum);
};

//prettier-ignore
const checkSpelling = (str) => {
    
    console.log(str)
	if (
        (str === "rock") || 
        (str === "paper") || 
        (str === "scissors")
        ) return true
};

const getPlayersChoice = () => {
	wordChoice = prompt("rock, paper, scissors?");
    const strLC = wordChoice.toLowerCase()
	if (checkSpelling(strLC) === true) {
		wordChoice.toLowerCase();
		return strLC;
	} else {
		alert("incorrect spelling, please try again");
		getPlayersChoice();
	}
	return wordChoice;

	// console.log(wordChoice);
	// const wordChoiceLC = toLowerCase(wordChoice);
	// console.log(wordChoiceLC, checkSpelling(wordChoiceLC));
	// if (checkSpelling(wordChoiceLC) === true) return wordChoiceLC;
};

let playerScore = 0;
let compScore = 0;

const singleRound = (player, computer) => {
	if (
		(player === "scissors" && computer === "paper") ||
		(player === "paper" && computer === "rock") ||
		(player === "rock" && computer === "scissors")
	) {
		playerScore++;
		return "You Win! " + player + " beats " + computer;
	} else if (
		(computer === "scissors" && player === "paper") ||
		(computer === "paper" && player === "rock") ||
		(computer === "rock" && player === "scissors")
	) {
		compScore++;
		return "You Lose! " + computer + " beats " + player;
	} else {
		return "It's a draw. " + player + " and " + computer;
	}
};

console.log(singleRound(getPlayersChoice(),getComputerChoice()))

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