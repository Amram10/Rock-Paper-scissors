let ComputerResult=0
let YourResult=0
let GameIsntOver=true
const computerScore=document.querySelector(".computerScore")
const playerScore=document.querySelector(".yourScore")
const massege= document.querySelector(".result")
const endGame = document.querySelector(".endGame")
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')
restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const computerchouse=document.querySelector(".computer");



function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function getComputerChoice(){
 let random = getRandomInt(3)
 let result=""
 switch (random) {
    case 0:
      computerchouse.style.background= ' center/cover no-repeat url("https://cdn1.iconfinder.com/data/icons/game-ui-set-part-2/96/Stone_bronze-512.png")';
          computerchouse.style.width='10rem'
    computerchouse.style.height='10rem'
    computerchouse.style.padding ='left'
        return result= "rock";
    case 1:
    computerchouse.style.background= 'center/cover no-repeat url("https://cdn4.iconfinder.com/data/icons/general-office/91/General_Office_01-512.png")';
    computerchouse.style.width='10rem'
    computerchouse.style.height='10rem'
    computerchouse.style.padding ='left'
        return  result= "paper";
    case 2:
     computerchouse.style.background= 'center/cover no-repeat url("https://cdn0.iconfinder.com/data/icons/beauty-42/64/Crop-cut-scissors-tool-512.png")';
         computerchouse.style.width='10rem'
    computerchouse.style.height='10rem'
    computerchouse.style.padding ='left'
        return  result= "scissors";
      default:
        break
 }
}

function playRound(PlayerChoice, ComputerChoice) {

  if (PlayerChoice===ComputerChoice)
     return {print:"The result is equality",winner:"equal"}

  if (PlayerChoice==="rock"&& ComputerChoice==="paper"||PlayerChoice==="paper"&&ComputerChoice==="scissors"||PlayerChoice==="scissors"&& ComputerChoice==="rock")
     return {print:`You Lose! ${ComputerChoice} beats ${PlayerChoice}`, winner:"Computer"};

  if (PlayerChoice==="rock"&& ComputerChoice==="scissors"||PlayerChoice==="scissors"&& ComputerChoice==="paper"||PlayerChoice==="paper"&& ComputerChoice==="rock")
     return {print:`Computer Lose! ${PlayerChoice} beats ${ComputerChoice}`, winner:"You"}
}

function openEndgameModal() {
  endgameModal.classList.add('active')
  overlay.classList.add('active')
}

function closeEndgameModal() {
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}

function Game(){
if (GameIsntOver){
   let  ComputerChoice= getComputerChoice()
   let  PlayerChoice=this.dataset.button;
   let play = playRound(PlayerChoice, ComputerChoice)
        if (play.winner==="Computer")
        {
         ComputerResult+=1;
         computerScore.innerHTML="Computer: "+ComputerResult
         massege.innerHTML=play.print
        }
       else if (play.winner==="You")
        {
         YourResult+=1;
         playerScore.innerHTML="Player: "+YourResult
         massege.innerHTML=play.print
        }
        if(ComputerChoice===PlayerChoice)
        {
          return massege.innerHTML="the score is tie";
        }
   if (ComputerResult==5||YourResult==5)
    {
      GameIsntOver=false
    if (YourResult>ComputerResult)
    {
     return endGame.innerHTML="Yoh win!!! \r  Game over!"
    }
    else if (YourResult<ComputerResult)
    {
     return endGame.innerHTML="The computer won!!! \r  Game over!"
    }
    else
    {
    openEndgameModal()
    }
   }}
   else 
   {
       openEndgameModal()
     
   }

}

function restartGame() {
  
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
  ComputerResult=0
  YourResult=0
  GameIsntOver=true
  computerScore.innerHTML="Computer: "+ComputerResult
  playerScore.innerHTML="Player: "+YourResult
  massege.innerHTML="let's play!!!"
  computerchouse.style.background="none"

}

//User's button event listener 
rockButton.addEventListener('click', Game );
paperButton.addEventListener('click', Game) ;
scissorsButton.addEventListener('click', Game);


