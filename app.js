document.addEventListener("DOMContentLoaded", () => {
	const options = ["Rock", "Paper", "Scissors"];

	let computerScore = 0;
	let humanScore = 0;
	let roundsPlayed = 0;

	const getHumanChoice = () => {
		let choice = prompt("Enter Rock, Paper or Scissors!");
		console.log("Player chose: " + choice);
		return choice;
	};

	const getComputerChoice = () => {
		rndNumber = Math.floor(Math.random() * 3);
		choice = options[rndNumber];
		console.log("Computer chose: " + choice);
		return choice;
	};

	const playRound = (humanChoice, computerChoice) => {
		const msg = (player) => {
			console.log(player + " won this round.");
		};

		if (humanChoice == "Rock" && computerChoice == "Scissors") {
			humanScore += 1;
			msg("Player 👨🏼‍💻");
		} else if (humanChoice == "Rock" && computerChoice == "Paper") {
			computerScore += 1;
			msg("Computer 🤖");
		} else if (humanChoice == "Paper" && computerChoice == "Scissors") {
			computerScore += 1;
			msg("Computer 🤖");
		} else if (humanChoice == "Paper" && computerChoice == "Rock") {
			humanScore += 1;
			msg("Player 👨🏼‍💻");
		} else if (humanChoice == "Scissors" && computerChoice == "Paper") {
			humanScore += 1;
			msg("Player 👨🏼‍💻");
		} else if (humanChoice == "Scissors" && computerChoice == "Rock") {
			computerScore += 1;
			msg("Computer 🤖");
		} else {
			msg("Nobody ❌");
		}
	};

	while (roundsPlayed < 5) {
		console.log("ROUND " + (roundsPlayed + 1));
		playRound(getHumanChoice(), getComputerChoice());
		roundsPlayed += 1;
	}

	if (roundsPlayed === 5) {
		let winnerMsg = humanScore > computerScore ? "Congratulations, you won! 🥳" : "Oh, looks like the computer won. 😕";
		console.log(winnerMsg);
	}
});
