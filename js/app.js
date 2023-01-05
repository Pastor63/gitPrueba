// aleatory word
const words = ['alura', 'html', 'pekin', 'moscu', 'berlin', 'manzana'];
const word = words[Math.floor(Math.random()*words.length)];

// buttons
const newGame = document.querySelector('.newGame');

let numberLetters = [];
let wrongLetters = [];


//  load EventListener
eventListener()
function eventListener() {
  // guessing letter add on the screen
  // newGame.addEventListener('click', change);
  document.addEventListener('keypress', guessIntent);
  // newGame.addEventListener('click',() => change(words));
}


// function
function change(){
  wrongLetters.splice(0, wrongLetters.length);
  numberLetters.splice(0, numberLetters.length);

  console.log(wrongLetters);
  console.log(numberLetters);
  
  brush.beginPath();
  brush.clearRect(0, 0, screen.width, screen.height);

  let word = words[Math.floor(Math.random()*words.length)];
  // const hiddenWord = word.replace(/./g, guessLine);
  
  console.log(word);
  return word
  
  // location.reload()
}
/* function change(array){
  const test = Math.floor(Math.random()*words.length);

  console.log(array[test]);
} */

// let word = change();
console.log(word);
// add guessline on canvas
let hiddenWord = word.replace(/./g, guessLine);
function guessLine() {
  let x = 0;
  for (let i = 0 ; i < word.length; i++){
    
    brush.moveTo(30 + x ,380);
    brush.lineTo(60 + x ,380);
    brush.strokeStyle = guesslineColor;
    brush.lineWidth = 5;
    brush.stroke();
    x = x + 40;
  }
  
}

console.log(word);

// Guess
function guessIntent(e) {
  let exists = numberLetters.some(letter => letter === e.key );
  console.log(numberLetters);
  console.log(word);
  // only allow lowercase letters
  if(e.charCode >= 97 && e.charCode <= 122){
    // Verify letter
    let x = 0;
  
    for(let i = 0 ; i < word.length; i++){
      x = x + 40;
      
      //------ If is the true letter-------
      if(e.key === word[i]) {
        // draw on the line of canvas the letter 
        brush.font = "small-caps 700 25px Space Grotesk";
        brush.fillStyle = colorLetter1;
        brush.fillText(e.key, x, 360);
        
        // add letter at numberLetter array
        // console.log('exists');
        // if it doesn't exists
        if(!exists) {
          numberLetters = [...numberLetters, e.key];
        }
        // console.log(numberLetters);
          // winning message
        if(numberLetters.length === word.length) {
          
          const win = document.querySelector('.win');
          win.style.display = 'inline';
          
        }
      }
     
      // ------ if is wrong letter ----------- 
      // if it is not included in the word
      if (!word.includes(e.key)) {
        wrongLetters = [...wrongLetters, e.key];
        let y = 0;

        for(let i = 0; i < wrongLetters.length ; i++ ) {
          y = y + 30;
          brush.font = "25px Space Grotesk";
          brush.fillStyle = colorLetter2;
          brush.fillText(wrongLetters[i], 10 + y  , 430);
          
          // draw hangman on canvas
          hangman()
        }
        break
      }
    }
    
  }  
}

// scroll reveal animation
const sr = ScrollReveal({
  distance: '90px',
  duration: 3000,
});

sr.reveal('.data_home', {origin: 'top', delay: 400});
sr.reveal('#canvas', {origin: 'bottom', delay: 600});
sr.reveal('.div_button', {origin: 'bottom', delay: 600});