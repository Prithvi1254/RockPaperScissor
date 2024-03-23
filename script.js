let score = 0
function getComputerChoice() {
  let computers = Math.ceil(Math.random() * 3)
  if (computers == 1) return "rock"
  else if (computers == 2) return "paper"
  else return "scissor"
}
function getResult(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    showResult(score, playerChoice, computerChoice, "tie")
  }
  else if (playerChoice == 'rock' && computerChoice == 'paper') {
    score--
    showResult(score, playerChoice, computerChoice, "loss")
  }
  else if (playerChoice == 'scissor' && computerChoice == 'paper') {
    score++
    showResult(score, playerChoice, computerChoice, "win")
  }
  else if (playerChoice == 'rock' && computerChoice == 'scissor') {
    score++
    showResult(score, playerChoice, computerChoice, "win")
  }
  else if (playerChoice == 'paper' && computerChoice == 'scissor') {
    score--
    showResult(score, playerChoice, computerChoice, "loss")
  }
  else if (playerChoice == 'paper' && computerChoice == 'rock') {
    score++
    showResult(score, playerChoice, computerChoice, "win")
  }
  else if (playerChoice == 'scissor' && computerChoice == 'rock') {
    score--
    showResult(score, playerChoice, computerChoice, "loss")
  }
}
let log = ""
let a = document.getElementById('player-score')
let b = document.getElementById('hands')
function showResult(score, playerChoice, computerChoice, result) {
  // let a = document.getElementById('player-score')
  let res = result
  a.innerHTML = `${score} `


  b.innerHTML = `  ${res} YOU CHOOSED ${playerChoice} COMPUTER CHOOSED ${computerChoice}`
}
function onClickRPS(playerChoice) {
  let player = playerChoice
  let computer = getComputerChoice()
  getResult(player, computer)
}
function playGame() {


}
function endGame() {

}

playGame()

