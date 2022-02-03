// Load DOM and add event listener to buttons

document.addEventListener("DOMContentLoaded", function(){

    let buttons = ducument.getElementsByTagName("button");

    for (let button of buttons){

        if (this.getAttibute('data-type') === "submit"){// if clicked submit check who won pc or player
            
        }else if (this.getAttibute('data-type') === "rock"){// if clicked rock use rock function 
            playerRock();
            
        }else if (this.getAttibute('data-type') === "paper"){ // if clicked paper use paper function 
            playerPaper();

        }else if (this.getAttibute('data-type') === "scissors"){ // if clicked scissors use paper function 
            playerScissors();

        }else if (this.getAttibute('data-type') === "lizard"){ // if clicked lizard use paper function 
            playerLizard();
            
        }else if (this.getAttibute('data-type') === "spock"){ // if clicked spock use paper function 
            playerSpock();
    
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
    let rock = document.getElementById('rock').innerText;
    
}
console.log(rock)

function playerPaper(){
    
}

function playerScissors(){
    
}

function playerLizard(){
    
}

function playerSpock(){
    
}


// Used to check answers of who won 


// Correct answer incrementation

// Incorrect answer incrementation


// Message on how the game was won