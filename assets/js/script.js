let playerChoiceOption;
let computerChoiceOption;

// Load DOM and add event listener to buttons

    let buttons = document.getElementsByTagName("button");

    for (button of buttons){ // listens for button clicks
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

    }

    function computerChoice(){

    }


    /** Calculates which choice has won the game */
    function playGame(){

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
