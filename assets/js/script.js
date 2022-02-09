let playerChoiceOption;
let computerChoiceOption;

// Load DOM and add event listener to buttons
document.addEventListener("DOMContentLoaded", function(){

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){ // listens for button clicks
        button.addEventListener("click", playerChoice)
    }

    /** Selects buttons by attribute type */
    function playerChoice(event){
        playerChoiceOption = event.target.getAttribute("data-type");
        playRound();
    }

    /** Game logic */
    function playRound(){

        computerChoice();
        winner = playGame();
        displayRoundOutcome(winner);
    
    }

    /** Randomly assigns a choice to the PC selection */
    function computerChoice(){
        let choices = ['rock', 'scissors', 'paper', 'lizard', 'spock'];
        let randomChoice = Math.floor(Math.random () * choices.length);
        computerChoiceOption = choices[randomChoice];
    }

    /** Calculates which choice has won the game */
    function playGame(){
        
         // Tie calculation
         if (playerChoiceOption === computerChoiceOption){ // tie
            return "tie"
        }
        // Scissors options
        if ((playerChoiceOption === "scissors") && (computerChoiceOption === "paper")){ // win
            incrementCorrectAnswer();
            return "player";
        }

        if ((playerChoiceOption === "scissors") && (computerChoiceOption === "rock")){ // loss
            incrementIncorrectAnswer();
            return "pc";
        }

        if ((playerChoiceOption === "scissors") && (computerChoiceOption === "lizard")){ // win
            incrementCorrectAnswer();
            return "player";
        }

        if ((playerChoiceOption === "scissors") && (computerChoiceOption === "spock")){ // loss
            incrementIncorrectAnswer();
            return "pc";
        }

        // Rock options
        if ((playerChoiceOption === "rock") && (computerChoiceOption === "paper")){ // loss
            incrementIncorrectAnswer();
            return "pc";
        }

        if ((playerChoiceOption === "rock") && (computerChoiceOption === "scissors")){ // win
            incrementCorrectAnswer();
            return "player";
        }

        if ((playerChoiceOption === "rock") && (computerChoiceOption === "lizard")){ // win
            incrementCorrectAnswer();
            return "player";
        }

        if ((playerChoiceOption === "rock") && (computerChoiceOption === "spock")){ // loss
            incrementIncorrectAnswer();
            return "pc";
        }

        // Paper Options
        if ((playerChoiceOption === "paper") && (computerChoiceOption === "rock")){ // win
            incrementCorrectAnswer();
            return "player";
        }

        if ((playerChoiceOption === "paper") && (computerChoiceOption === "scissors")){ // loss
            incrementIncorrectAnswer();
            return "pc";
        }

        if ((playerChoiceOption === "paper") && (computerChoiceOption === "lizard")){ // loss
            incrementIncorrectAnswer();
            return "pc";
        }

        if ((playerChoiceOption === "paper") && (computerChoiceOption === "spock")){ // win
            incrementCorrectAnswer();
            return "player";
        }

        // Lizard options
        if ((playerChoiceOption === "lizard") && (computerChoiceOption === "rock")){ // loss
            incrementIncorrectAnswer();
            return "pc";
        }

        if ((playerChoiceOption === "lizard") && (computerChoiceOption === "scissors")){ // loss
            incrementIncorrectAnswer();
            return "pc";
        }

        if ((playerChoiceOption === "lizard") && (computerChoiceOption === "paper")){ // loss
            return "pc";
        }

        if ((playerChoiceOption === "lizard") && (computerChoiceOption === "spock")){ // win
            incrementCorrectAnswer();
            return "player";
        }

        // Spock options
        if ((playerChoiceOption === "spock") && (computerChoiceOption === "rock")){ // win
            incrementCorrectAnswer();
            return "player";
        }

        if ((playerChoiceOption === "spock") && (computerChoiceOption === "scissors")){ // win
            incrementCorrectAnswer();
            return "player";
        }

        if ((playerChoiceOption === "spock") && (computerChoiceOption === "lizard")){ // loss
            incrementIncorrectAnswer();
            return "pc";
        }

        if ((playerChoiceOption === "spock") && (computerChoiceOption === "paper")){ // loss
            incrementIncorrectAnswer();
            return "pc";
        }
        
    }   

    // Correct answer incrementation

    function incrementCorrectAnswer(){
        let oldScore = parseInt(document.getElementById('player-score').innerText);
        document.getElementById('player-score').innerText = ++oldScore;
    }

    // Incorrect answer incrementation
    function incrementIncorrectAnswer(){
        let oldScore = parseInt(document.getElementById('pc-score').innerText);
        document.getElementById('pc-score').innerText = ++oldScore;
    }

    /** Prints outsome to the game screen */
    function displayRoundOutcome(winner){
        if (winner == "player"){
            document.getElementById("who-won").innerHTML = "Player chose " + playerChoiceOption + " and PC chose " + computerChoiceOption + "." + " You win!"; 
        }

        if (winner == "pc"){
            document.getElementById("who-won").innerHTML = "PC chose " +computerChoiceOption + " and Player chose " + playerChoiceOption + "." + " You lose!"; 
        }
    }
    
})