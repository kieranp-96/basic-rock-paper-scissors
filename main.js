const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log('You must choose either "Rock", "Paper" or "Scissors"');
  }
};

const getComputerChoice = () => {
  const randomChoice = Math.floor(Math.random() * 3);
  let choiceOutput = "";
  if (randomChoice === 0) {
    choiceOutput = "rock";
  } else if (randomChoice === 1) {
    choiceOutput = "paper";
  } else if (randomChoice === 2) {
    choiceOutput = "scissors";
  }
  return choiceOutput;
};
//console.log(getComputerChoice())

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "User found a cheat and won";
  }
  if (userChoice === computerChoice) {
    return "The game was tied!";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won!";
    } else {
      return "User won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won!";
    } else {
      return "User won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won!";
    } else {
      return "User won!";
    }
  }
};

// console.log(determineWinner("rock", "scissors"))

const playGame = () => {
  const userChoice = getUserChoice("paper"); // enter your choice like "rock"
  const computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
