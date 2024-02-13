// function play(){
//    const homeSection = document.getElementById("home");
//    homeSection.classList.add('hidden');


//    const playgroundSection = document.getElementById("play-ground");
//    playgroundSection.classList.remove('hidden'); 

// }

function continueGame(){
 const alphabet = getARandomAlphabet();
 console.log(alphabet);

 const currentAlphabetElement = document.getElementById('current-alphabet');
 currentAlphabetElement.innerText = alphabet;

 setBackgroundColorById(alphabet)
}


function play(){
    hideElementById("home");
    showElementById("play-ground");
    continueGame()
}
