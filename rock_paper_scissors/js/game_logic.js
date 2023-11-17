//Helper functions
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function firstLetterUpperCase(word){
    let result = word[0].toUpperCase();
    return result += word.slice(1).toLowerCase();
}

//Game critical functions
function getComputerChoice(){
    const choice = getRandomInt(3);
    switch (choice){
        case 0:
            return("rock");
        case 1:
            return("paper");
        case 2:
            return("scissors");
    }
}

function playRound(playerSelection, computerSelection){
    const playerLowerCase = playerSelection.toLowerCase();
    let result = "";
    const checkComputerChoice = (choice)=>
    {
        if(computerSelection === choice) return "Lose";
        else return "Win";
    }
    
    switch (playerLowerCase){
        case computerSelection:
            result = "Draw";
            break;
        case "rock":
            result = checkComputerChoice("paper");
            break;
        case "paper":
            result = checkComputerChoice("scissors");
            break;
        case "scissors":
            result = checkComputerChoice("rock");
            break;
    }

    if (result === "Lose")      return `You lose! ${firstLetterUpperCase(computerSelection)} beats ${playerLowerCase}.`;
    else if (result === "Win")  return `You win! ${firstLetterUpperCase(playerLowerCase)} beats ${computerSelection}`;
    else                        return `It's a draw! You both have chosen ${playerLowerCase}`;
}

function game (){
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Choose one option: Rock, Paper or Scissors");
    console.log(`${playRound(playerSelection, computerSelection)}`)
}