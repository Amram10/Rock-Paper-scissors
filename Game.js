
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice(){
 let random = getRandomInt(3)
 let result=""
 switch (random) {
    case 0:
        return result= "rock";
    case 1:
        return  result= "paper";
    case 2:
        return  result= "scissors";
      default:
        break
 }

}

function playRound() {
  let ComputerChoice= getComputerChoice()
  let  PlayerChoice=prompt("Plaese enter your choice").toLowerCase()

   console.log("Your choice is: ",PlayerChoice);
   console.log("The computer's choice is: ",ComputerChoice);
  if (PlayerChoice===ComputerChoice)
     return {print:"The result is equality",winner:"equal"};

  if (PlayerChoice=="rock"&& ComputerChoice=="paper")
     return {print:"You Lose! Paper beats Rock", winner:"Computer"};

  if (PlayerChoice=="rock"&& ComputerChoice=="scissors")
     return {print:"Computer Lose! Rock beats Scissors", winner:"You"}

  if (PlayerChoice=="scissors"&& ComputerChoice=="rock")
     return  {print:"You Lose! Rock beats Scissors", winner:"Computer"};

  if (PlayerChoice=="scissors"&& ComputerChoice=="paper")
     return {print:"Computer Lose! Scissors beats Paper",winner:"You"};

  if (PlayerChoice=="paper"&& ComputerChoice=="scissors")
     return  {print:"You Lose! Scissors beats Paper", winner:"Computer"};

  if (PlayerChoice=="paper"&& ComputerChoice=="rock")
     return {print:"Computer Lose! Paper beats Rock",winner:"You"}; 
}

function Game(){
   let YourResult=0
   let ComputerResult=0
    for (let i=0; i<5; i++)
    {
      let play = playRound()
        console.log(play.print); 
        if (play.winner==="Computer")
        {
         ComputerResult+=1
        }
        if (play.winner==="You")
        {
         YourResult+=1
        }
        console.log("your score is: ",YourResult);
        console.log("Computer score is: ",ComputerResult);

    }
    if (YourResult>ComputerResult)
    {
      console.log("You won!!!!");
    }
    else if (YourResult<ComputerResult)
    {
     console.log("Computer won!!!!");
    }
    else
    {
     console.log("The score is equal, try again!");
    }

    return console.log("The game is over")
}
  Game()