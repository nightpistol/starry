let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscpara=document.querySelector("#uss");
const compscorepara = document.querySelector("#cumm")

const compchoice = () => {
  const options = ['rock', 'paper', 'scissors']
  let rndidx = Math.floor(Math.random() * 3);
  return options[rndidx];
};
const drawgame = () => {
  console.log('game is a draw')
  msg.innerText='game is drawn'
  msg.style.backgroundColor = 'rgb(27, 13, 13)';
};
const showWinner = (userWin,playGame,compChoice) =>{
  if(userWin){
    userScore++;
    userscpara.innerText=userScore;
    msg.innerText = `you win`;
    msg.style.backgroundColor = 'green';
  } else{
    compScore++;
    compscorepara.innerText=compScore;
    msg.innerText =`you lose `;
    msg.style.backgroundColor = 'red';
  }
}

const playGame = (userchoice) => {
  console.log('user choice is :', userchoice);
  const compChoice = compchoice();
  console.log('comp choice is :', compChoice)

  if (userchoice === compChoice) {
    drawgame();
  } else {
    let userWin = true;
    if (userchoice === 'rock') {
      userWin = compChoice === 'paper' ? false : true;
    } else if(userchoice === 'paper') {
      userWin = compChoice === 'rock' ? true : false;
    } else {
      userWin = compChoice === 'rock' ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  })
})