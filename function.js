let pScore = 0;
let cScore = 0;
let gameMatch = 0;
let round = 0;



const roundArea = document.querySelector('#here'); 
const playerName = document.getElementById('playerName');
const playerScore = document.getElementById('playerScore');
const compScore = document.getElementById('compScore');
const gameResult = document.getElementById('result');
const buttonClck = document.querySelectorAll('.playerBox button')
const pcDiv = document.querySelector('.pcDiv');
const textBox = document.getElementById('txtBox');
const headerDiv = document.querySelector('.header');
const roundDiv = document.querySelector('.round');
const gameDiv = document.querySelector('.gameResult');
const header1 = document.querySelector('#header1');


const rckBtn = document.getElementById('rock');
const pprBtn = document.getElementById('paper');
const scsrBtn = document.getElementById('scissor');
const cRckShow = document.getElementById('cRck');
const cPprShow = document.getElementById('cPpr');
const cScsrShow = document.getElementById('cScsr');

const playerPick = [rckBtn, pprBtn,scsrBtn];
const compChoice = ['rock', 'paper', 'scissors'];
let clickedBtn ;
let randomChoice;
let compPick;
let userInput;


const tie = ()=>{
    gameResult.innerHTML = "It's a Tie !";
}
const win = ()=>{
    gameResult.innerHTML = userInput +" Wins !";
}      
const lose = ()=>{
      gameResult.innerHTML = "Computer Wins !";
}

  const game = () =>{
      header1.innerHTML = "Rock, Paper, Scissors!";
      textBox.style.display = 'none';
      roundArea.innerHTML = "Pick a weapon!";
      headerDiv.style.animation = 'slideUp1 .5s ease-in';
      roundDiv.style.animation='slideUp1 .5s ease-in';
      pcDiv.style.display = 'flex';
      gameDiv.style.display = 'flex';
      document.querySelector('.playerDiv').style.animation = 'slideLeft .5s ease-in';
      document.querySelector('.computerDiv').style.animation = 'slideRight .5s ease-in';
      gameDiv.style.animation = 'pop-in .5s ease-in';

      buttonClck.forEach(btn =>{ btn.addEventListener('click',(e)=>{
      clickedBtn= e.target.id;
      
      randomChoice  = Math.floor(Math.random() * buttonClck.length);
      compPick = compChoice[randomChoice];
      console.log(clickedBtn);
      console.log(compPick);
      
      
if (clickedBtn === compPick){
      playerScore.innerHTML = playerScore.innerHTML;
      compScore.innerHTML = compScore.innerHTML;
      if (compPick == 'rock'){
            cScsrShow.style.filter = 'blur(8px)';
            cPprShow.style.filter = 'blur(8px)';
            cRckShow.style.filter = 'blur(0)';
      }
      else if (compPick == 'paper'){
            cScsrShow.style.filter = 'blur(8px)';
            cPprShow.style.filter = 'blur(0)';
            cRckShow.style.filter = 'blur(8px)';
      }
      else{
            cScsrShow.style.filter = 'blur(0)';
            cPprShow.style.filter = 'blur(8px)';
            cRckShow.style.filter = 'blur(8px)';
      }
      tie();
      
}
      
      else if (clickedBtn == 'rock' && compPick == 'scissors'){
      pScore++;
      playerScore.innerHTML = 'Score: ' + pScore;
      cScsrShow.style.filter = 'blur(0)';
      cPprShow.style.filter = 'blur(8px)';
      cRckShow.style.filter = 'blur(8px)';
      win();
}
      else if(clickedBtn == 'paper' && compPick == 'scissors')
      {
         cScore++;
         compScore.innerHTML = 'Score: ' +  cScore;
         cScsrShow.style.filter = 'blur(0)';
         cPprShow.style.filter = 'blur(8px)';
         cRckShow.style.filter = 'blur(8px)';
         lose();
      }
      else if(clickedBtn == 'rock' && compPick == 'paper')
      {
         cScore++;   
         compScore.innerHTML = 'Score: ' +  cScore;
         cPprShow.style.filter = 'blur(0)';
         cRckShow.style.filter = 'blur(8px)';
         cScsrShow.style.filter = 'blur(8px)';
         lose();
      }
      else if(clickedBtn == 'scissors' && compPick == 'paper')
      {
         pScore++;
         playerScore.innerHTML = 'Score: ' + pScore;
         cPprShow.style.filter = 'blur(0)';
         cRckShow.style.filter = 'blur(8px)';
         cScsrShow.style.filter = 'blur(8px)';
         win();
      }
      else if(clickedBtn == 'paper' && compPick == 'rock')
      {
         pScore++;
         playerScore.innerHTML =  'Score: ' + pScore;
         cRckShow.style.filter = 'blur(0)';
         cPprShow.style.filter = 'blur(8px)';
         cScsrShow.style.filter = 'blur(8px)';
         win();
      }
      else if(clickedBtn == 'scissors' && compPick == 'rock')
      {
         cScore++;
         compScore.innerHTML = 'Score: ' + cScore;
         cRckShow.style.filter = 'blur(0)';
         cPprShow.style.filter = 'blur(8px)';
         cScsrShow.style.filter = 'blur(8px)';
         lose();
      }
      round++
      roundArea.innerHTML = "Round: " + round;
      console.log(round);
      if (round == 5){
      roundArea.style.color = 'darkred';
      roundArea.innerHTML = "Final Round!";
      roundArea.style.animation = 'shake .8s linear';
      }
      if (round == 6){
            gameRestart();
      }
      

  });
});
}

const gameRestart = () => {
      headerDiv.style.animation = 'slideDown1 .5s ease-in';
      headerDiv.style.transform = 'translateY(300px)';
      roundDiv.style.animation ='slideDown1 .5s ease-in';
      roundDiv.style.transform = 'translateY(300px)';
      gameDiv.style.animation = 'slideDown2 .5s ease-in';
      gameDiv.style.transform = 'translateY(300px)';
      gameDiv.style.margin = '50px';
      gameDiv.style.backgroundColor = 'transparent';
      
     
      pcDiv.style.display = 'none';
      document.querySelector('#result').style.display = 'none';
      document.querySelector('#resetBtn').style.display = 'flex';
      
      if (pScore > cScore){
      header1.innerHTML = "Great Match, Champ!";
      header1.style.color = 'rgb(153, 117, 24)';
      }
      else if (pScore < cScore){
      header1.innerHTML = "You Lose, Wimp!";
      header1.style.color = 'red';
      }
      roundArea.innerHTML = "Wanna play again?";
      roundArea.style.color = 'white';
      document.querySelector('#resetBtn').addEventListener('click',() => {
            window.location.reload();
        })
}


textBox.addEventListener("keyup", function (event) {
      
      if (event.keyCode == 13) {
            userInput = textBox.value;
            if (userInput == ''){      
                  playerName.innerHTML = 'Blank';     
            }
            else if (userInput == ' ') {
                  playerName.innerHTML = 'Space';
            }
            else{
                  playerName.innerHTML = userInput;
            }

            game();
      }
});









// const pScore = document.getElementById('playerScore');
// const cScore = document.getElementById('computerScore');
// const buttons = document.querySelectorAll('.selection button');
// const showIcon = document.querySelector('.show i');
// const computerShowIcon = document.querySelector('.computer i');

// // Storing the scores.
// let computerScore = 1;
// let playerScore = 1;

// const rockIcon = "fas fa-hand-rock";
// const paperIcon = "fas fa-hand-paper";
// const scissorsIcon = "fas fa-hand-scissors";

// const randomClasses = [rockIcon, paperIcon, scissorsIcon];
// const text = document.getElementById('demo');
// const text2 = document.getElementById('demo2');

// const tie = ()=>{
//     text.innerHTML = "It's a Tie ! ";
//     text.style.color = 'orange';
//     text2.innerHTML = text.innerHTML;
//     text2.style.color = 'orange';
// }

// const win = ()=>{
//     text.innerHTML = "It's a Win ! ";
//     text.style.color = 'rgb(1, 146, 1)';
//     text2.innerHTML = text.innerHTML;
//     text2.style.color = 'rgb(1, 146, 1)';
// }

// const lose = ()=>{
//     text.innerHTML = "You Loosed ! ";
//     text.style.color = 'red';
//     text2.innerHTML = text.innerHTML;
//     text2.style.color = 'red';
// }

// // Game Functionality.
// const game = () =>{
//     buttons.forEach(btn =>{
//         btn.addEventListener('click',(e)=>{
//         // Random rock paper scissor for the computer and clicked ones for the player
//            let clickedBtn = e.target.className;
//            showIcon.className = clickedBtn;
//            let randomNum = Math.floor(Math.random() * randomClasses.length);
//            computerShowIcon.className = randomClasses[randomNum];

//            // If it's a Tie .
//            if(showIcon.className === computerShowIcon.className){
//                pScore.innerHTML = pScore.innerHTML;
//                cScore.innerHTML = cScore.innerHTML;
//                tie();
//            }

//            // if it's not a Tie.
//            else if(showIcon.className === rockIcon && computerShowIcon.className === scissorsIcon){
//                pScore.innerHTML = playerScore;
//                playerScore++;
//                win();
//            }else if(showIcon.className === rockIcon && computerShowIcon.className === paperIcon){
//                cScore.innerHTML = computerScore;
//                computerScore++;
//                lose();
//            }else if(showIcon.className === paperIcon && computerShowIcon.className === scissorsIcon){
//                cScore.innerHTML = computerScore;
//                computerScore++;
//                lose();
//            }else if(showIcon.className === paperIcon && computerShowIcon.className === rockIcon){
//                pScore.innerHTML = playerScore;
//                playerScore++;
//                win();
//            }else if(showIcon.className === scissorsIcon && computerShowIcon.className === rockIcon){
//                cScore.innerHTML = computerScore;
//                computerScore++;
//                lose();
//            }else if(showIcon.className === scissorsIcon && computerShowIcon.className === paperIcon){
//                pScore.innerHTML = playerScore;
//                playerScore++;
//                win();
//            }
//         });
//     });
// }

// // Run the game.
// game();


//This is for user input
// var userName = prompt ('Enter name here: ', 'John Doe');
// let playerName = document.getElementById("secondHeader1").innerHTML;

// function myFunction() {
//       document.getElementById("secondHeader1").replaceWith = userName;
// }
//  myFunction()
