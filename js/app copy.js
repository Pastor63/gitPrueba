// aleatory word
const words = ['alura', 'html', 'pekin', 'moscu', 'berlin', 'manzana'];
const word = words[Math.floor(Math.random()*words.length)];

// Canva
const screen = document.querySelector('#canvas');
const brush = screen.getContext('2d');

let numberLetters = [];
let wrongLetters = [];

// color of canvas
const guesslineColor = '#600643';
const colorLetter1 = '#600643';
const colorLetter2 = '#FF8A5B';
const colorGallow = '#600643';
const colorHangman = '#C9D5B5';

//  load EventListener
eventListener()
function eventListener() {
  // guessing letter add on the screen
  document.addEventListener('keypress', guessIntent);
}

// function
// add guessline on canvas
const hiddenWord = word.replace(/./g, guessLine);
function guessLine() {
  let x = 0;
  for (let i = 0 ; i < word.length; i++){
    brush.moveTo(50 + x ,350);
    brush.lineTo(90 + x ,350);
    brush.strokeStyle = guesslineColor;
    brush.lineWidth = 5;
    brush.stroke();
    x = x + 60;
  }
  
}
console.log(word);

// Guess
function guessIntent(e) {
  const exists = numberLetters.some(letter => letter === e.key );
  // only allow lowercase letters
  if(e.charCode >= 97 && e.charCode <= 122){
    // Verify letter
    let x = 0;
  
    for(let i = 0 ; i < word.length; i++){
      x = x + 60;
      
      //------ If is the true letter-------
      if(e.key === word[i]) {
        // draw on the line of canvas the letter 
        brush.font = "40px Arial";
        brush.fillStyle = colorLetter1;
        brush.fillText(e.key, x, 330);
        
        // add letter at numberLetter array
        
        if (exists ) {
          console.log('exists');
         
        } else {
          numberLetters = [...numberLetters, e.key];
        }
        console.log(numberLetters);
          // winning message
        if(numberLetters.length === word.length) {
          console.log('win');
        }
      }
     
      // ------ if is wrong letter ----------- 
      if(word.includes(e.key)) {
        
      }else{
        wrongLetters = [...wrongLetters, e.key];
        let y = 0;

        for(let i = 0; i < wrongLetters.length ; i++ ) {
          y = y + 30;
          brush.font = "40px Arial";
          brush.fillStyle = colorLetter2;
          brush.fillText(wrongLetters[i], 30 + y  , 390);
          
          // draw hangman on the screen
          hangman()
        }
        break
      }
    }
    
  }  
}

// Draw hangman on canvas
function hangman() {
  const lineW = 2;
  const lineMan = 2;
  if(1 === wrongLetters.length) {
  
    brush.moveTo(100 ,290);
    brush.lineTo(200 ,290);
    brush.strokeStyle = colorGallow;
    brush.lineWidth = lineW;
    brush.stroke();
  }

  if(2 === wrongLetters.length) {
    
    brush.moveTo(150  ,290);
    brush.lineTo(150 ,100);
    brush.strokeStyle = colorGallow;
    brush.lineWidth = lineW;
    brush.stroke();
  }
  
  if(3 === wrongLetters.length) {
    
    brush.moveTo(150  ,100);
    brush.lineTo(250 ,100);
    brush.strokeStyle = colorGallow;
    brush.lineWidth = lineW;
    brush.stroke();
  }
  
  if(4 === wrongLetters.length) {
    
    brush.moveTo(250  ,100);
    brush.lineTo(250 ,150);
    brush.strokeStyle = colorGallow;
    brush.lineWidth = lineW;
    brush.stroke();
  }

  if(5 === wrongLetters.length) {
    
    brush.beginPath();
    brush.arc(250, 150, 20, 0, 2 * Math.PI);
    brush.fillStyle = colorHangman;
    brush.strokeStyle = colorHangman;
    brush.lineWidth = lineMan;
    brush.stroke();
    brush.fill();
  }

  if(6 === wrongLetters.length) {
    
    brush.moveTo(250 ,180);
    brush.lineTo(250 ,250);
    brush.lineWidth = lineMan;
    brush.stroke();
  }

  if(7 === wrongLetters.length) {
    
    brush.moveTo(230 , 215);
    brush.lineTo(270 ,215);
    brush.lineWidth = lineMan;
    brush.stroke();
  }

  if( 8 === wrongLetters.length) {
    
    brush.moveTo(250 , 250);
    brush.lineTo(230 ,270);
    brush.lineWidth = lineMan;
    brush.stroke();

    brush.moveTo(250 , 250);
    brush.lineTo(270 ,270);
    brush.lineWidth = lineMan;
    brush.stroke();
  }

  if(9 === wrongLetters.length) {
    
    brush.beginPath();
    brush.arc(250, 150, 20, 0, 2 * Math.PI);
    brush.fillStyle = colorHangman;
    brush.strokeStyle = colorGallow;
    brush.lineWidth = 5;
    brush.stroke();
    brush.fill();
  }
}