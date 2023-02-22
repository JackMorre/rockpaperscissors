<<<<<<< HEAD
// const selection = (num) => {
// 	if (num === 1) return "rock";
// 	else if (num === 2) {
// 		return "paper";
// 	} else if (num === 3) {
// 		return "scissors";
// 	}
// };

// const getComputerChoice = () => {
// 	const randomNum = Math.trunc(Math.random() * 3 + 1);
// 	return selection(randomNum);
// };

//prettier-ignore
// const checkSpelling = (str) => {
// 	if (
//         (str === "rock") || 
//         (str === "paper") || 
=======
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
>>>>>>> rps-ui
//         (str === "scissors")
//         ) return true
// };

<<<<<<< HEAD
// const getPlayersChoice = () => {
// 	wordChoice = prompt("rock, paper, scissors?");
// 	if (checkSpelling(wordChoice) === true) {
// 		wordChoice.toLowerCase();
// 		return wordChoice;
=======
// const getPlayersChoice = (str) => {
// 	wordChoice = str;
// 	if (checkSpelling(strLC) === true) {
// 		wordChoice.toLowerCase();
// 		return strLC;
>>>>>>> rps-ui
// 	} else {
// 		alert("incorrect spelling, please try again");
// 		getPlayersChoice();
// 	}
// 	return wordChoice;

<<<<<<< HEAD
// 	// console.log(wordChoice);
// 	// const wordChoiceLC = toLowerCase(wordChoice);
// 	// console.log(wordChoiceLC, checkSpelling(wordChoiceLC));
// 	// if (checkSpelling(wordChoiceLC) === true) return wordChoiceLC;
// };

// let playerScore = 0;
// let compScore = 0;

// const singleRound = (player, computer) => {
// 	if (
// 		(player === "scissors" && computer === "paper") ||
// 		(player === "paper" && computer === "rock") ||
// 		(player === "rock" && computer === "scissors")
// 	) {
// 		playerScore++;
// 		return "You Win! " + player + " beats " + computer;
// 	} else if (
// 		(computer === "scissors" && player === "paper") ||
// 		(computer === "paper" && player === "rock") ||
// 		(computer === "rock" && player === "scissors")
// 	) {
// 		compScore++;
// 		return "You Lose! " + computer + " beats " + player;
// 	} else {
// 		return "It's a draw. " + player + " and " + computer;
// 	}
// };
=======
// console.log(wordChoice);
// const wordChoiceLC = toLowerCase(wordChoice);
// console.log(wordChoiceLC, checkSpelling(wordChoiceLC));
// if (checkSpelling(wordChoiceLC) === true) return wordChoiceLC;
// };

// console.log(singleRound(getPlayersChoice(),getComputerChoice()))
>>>>>>> rps-ui

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

<<<<<<< HEAD
// game();

const repeatString = function(str, num) {
    let mainString = ""
    for(i = 0; i < num; i++) {
        mainString += str
    }
    return mainString
};

repeatString('hey', 3)

// .toString converts everything to a string
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

// .join() joins together array with what ever parameter
const fruitsJoined = fruits.join(" ")
console.log(fruitsJoined)

//.pop() removes last element in array
const fruitsPopped = fruits.pop()
console.log(fruits,fruitsPopped)

//.push adds a new element to an array
fruits.push('Kiwi')
console.log(fruits)

//.shift() removes first element and shifts all other elements to lower index
const firstFruit = fruits.shift()
console.log(firstFruit, fruits)

//.unshift
fruits.unshift("Lemon")
console.log(fruits)

//array index starts from zero, If i wanted to get the second element in the array, i would use fruits[1]

console.log(fruits[1])

//.length gets the length and if you want indexs from this just minus 1 when create the variable
console.log(fruits.length)

//.concat
const veg = ["Broccoli", "Cabbage", "Carrot", "Leak"]
const meat = ["Bacon", "Chicken", "Beef"]
const fruitAndVeg = fruits.concat(veg, meat)
console.log(fruitAndVeg)

//you can even use concant on multiple different arrays

fruits.splice(2, 0, "Lemon", "Kiwi")
console.log(fruits)
fruits.pop()
fruits.shift()
console.log(fruits)
fruits.splice(3,0,"Oranges")
console.log(fruits)
fruits.splice(1, 2, "Peach", "Grapes")
console.log(fruits)
fruits.splice(0,1)
console.log(fruits)

//.slice
const newList = fruits.slice(1)
console.log(newList)
=======
// game()
>>>>>>> rps-ui
