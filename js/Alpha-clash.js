// function play(){
// //    step -1:  hide the home screen. to hide the screen add the class hidden to the home section
// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden');

// // show the playground
// const playGroundSection = document.getElementById('play-ground');
// playGroundSection.classList.remove('hidden');
// }

function continueGame(){
 const alphabet = getARandomAlphabet();
 console.log(alphabet);

}

function play (){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}