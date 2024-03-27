// function play(){
// //    step -1:  hide the home screen. to hide the screen add the class hidden to the home section
// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden');

// // show the playground
// const playGroundSection = document.getElementById('play-ground');
// playGroundSection.classList.remove('hidden');
// }
function handleKeyboardButtonPress(event){
const playerPressed = event.key;
console.log('player pressed', playerPressed);

// get the expected to press
const currentAlphabetElement = document.getElementById('current-alphabet')
const currentAlphabet = currentAlphabetElement.innerText;
const expectedAlphabet = currentAlphabet.toLowerCase();
console.log(playerPressed, expectedAlphabet);

// check match or not 
if (playerPressed === expectedAlphabet) {
    console.log('you got a point');
    // update score:
    // 1.get the current score
    const currentScoreElement = document.getElementById('current-score');
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    console.log(currentScore);
    // 2.increase the score by 1
    const newScore = currentScore + 1;
    // 3. show the update score
    currentScoreElement.innerText = newScore;
    removeBackgroundColor(expectedAlphabet);
    continueGame();
} else {
    console.log('you missed.you lost a life');
    const currentLifeElement = document.getElementById('current-life');
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);

    const newLife = currentLife - 1;
    currentLifeElement.innerText = newLife;
    
}

}

document.addEventListener('keyup',handleKeyboardButtonPress)


function continueGame(){
 const alphabet = getARandomAlphabet();
//  console.log(alphabet);

//  set randomly generated alphabet to the screen (show it)

const currentAlphabet = document.getElementById('current-alphabet');
currentAlphabet.innerText = alphabet;

setBackgroundColor(alphabet);

}

function play (){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}