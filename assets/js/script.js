let computerChoice = document.getElementsByClassName('computerChoice');
let playerChoice = document.getElementsByClassName('playerChoice');

// Load DOM and add event listener to buttons

document.addEventListener("DOMContentLoaded", function(){

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){

            if (this.getAttribute("data-type") === "submit"){ //when clicked checks for answer on who won, pc or player

            }else if (this.getAttribute("data-type") === "rock"){ //when clicked runs rock function
                
            }else if (this.getAttribute("data-type") === "paper"){ //when clicked runs paper function
                
            }else if (this.getAttribute("data-type") === "scissors"){ //when clicked runs scissors function
                
            }else if (this.getAttribute("data-type") === "lizard"){ //when clicked runs lizard function
                
            }else if (this.getAttribute("data-type") === "spock"){ //when clicked runs spock function
                
            }
        })
    }
})




// pcChoice calculation option

let pcChoice = Math.floor(Math.random() * 5) + 1;

if (pcChoice === 1){
    pcChoice = "Rock";
}else if(pcChoice === 2){
    pcChoice = "Paper";
}else if(pcChoice === 3){
    pcChoice = "Scissors";
}else if(pcChoice === 4){
    pcChoice = "Lizard";
}else if(pcChoice === 5){
    pcChoice = "Spock";
}


console.log(pcChoice);

// Set functions for playerChoice

function playerRock(){
    
}


function playerPaper(){
    
}

function playerScissors(){
    
}

function playerLizard(){
    
}

function playerSpock(){
    
}


// Used to check answers of who won 

/** Checks answer for if pcChoice and playerChoice are same, or winning or loosing
*/
function checkAnswer(){ 

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


// Message on how the game was won

function outcome(){
    
}
