

function handleKeyboardKeyupEvent(event){
    const playerPressed = event.key;
// console.log(event.key);
if(playerPressed === 'Escape'){
    gameOver();
}

const currentAlphabetElement = document.getElementById('current-alphabet');
const currentAlphabet = currentAlphabetElement.innerText;
const expectedAlphabet = currentAlphabet.toLowerCase();
// console.log(playerPressed, expectedAlphabet);

if(playerPressed === expectedAlphabet){
  console.log('you get a point'); 

  const currentScore = getTextElementValueById('current-score');
  console.log(currentScore);
  const updatedScore = currentScore + 1;
  setTextElementValueById('current-score', updatedScore)

 
  removeBackgroundColorById(expectedAlphabet);
  continueGame();
}
else{
    console.log('you missed, you lost a life');
    const currentLife = getTextElementValueById('current-life');
    const updatedLife = currentLife - 1;
    setTextElementValueById('current-life', updatedLife);
    if(updatedLife === 0){
        gameOver();
    }
}
}

document.addEventListener('keyup', handleKeyboardKeyupEvent)

function continueGame(){
 const alphabet = getARandomAlphabet();
//  console.log(alphabet);

 const currentAlphabetElement = document.getElementById('current-alphabet');
 currentAlphabetElement.innerText = alphabet;

 setBackgroundColorById(alphabet)
}


function play(){
    hideElementById("home");
    hideElementById("final-score");
    showElementById("play-ground");
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame()
}

function gameOver(){
 hideElementById("play-ground");
 showElementById("final-score");
 const lastScore = getTextElementValueById('current-score');
 setTextElementValueById('last-score', lastScore);
 const currentAlphabet = getElementTextById('current-alphabet');
 console.log(currentAlphabet);
 removeBackgroundColorById(currentAlphabet)
}
