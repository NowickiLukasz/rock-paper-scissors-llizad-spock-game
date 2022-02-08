

// Load DOM and add event listener to buttons















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
