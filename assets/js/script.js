let userChoice = "";
let pcChoice = Math.floor(Math.random()* 5) + 1;

// Set pcChoice selection to randomly pick one of the choices
/* 
Choices are as follows: 
rock = 1
paper = 2
scissors = 3
lizard = 4
spock = 5 
 */

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

// return pcChoice();


