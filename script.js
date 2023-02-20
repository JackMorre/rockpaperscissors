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
//         (str === "scissors")
//         ) return true
// };

// const getPlayersChoice = () => {
// 	wordChoice = prompt("rock, paper, scissors?");
// 	if (checkSpelling(wordChoice) === true) {
// 		wordChoice.toLowerCase();
// 		return wordChoice;
// 	} else {
// 		alert("incorrect spelling, please try again");
// 		getPlayersChoice();
// 	}
// 	return wordChoice;

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
