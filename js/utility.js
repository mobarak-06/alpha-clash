function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}


function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function getARandomAlphabet(){
    const alphabetString  = 'qwertyuiopasdfghjklzxcvbnm';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet

}

function setBackgroundColor(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('bg-orange-400');
}

function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText)
    return value
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function setTextElementById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

