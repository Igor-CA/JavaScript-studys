//Get user input
let rockBtn = document.querySelector("#rock")
let paperBtn = document.querySelector('#paper')
let scissorsBtn = document.querySelector('#scissors')

rockBtn.addEventListener('click', () => {
    let userChoice = 'rock'
    playRound(userChoice)
    updateScore()
})
paperBtn.addEventListener('click', () => {
    let userChoice = 'paper'
    playRound(userChoice)
    updateScore()
})
scissorsBtn.addEventListener('click', () => {
    let userChoice = 'scissors'
    playRound(userChoice)
    updateScore()
})

function getPcChoince(){
    let options = ['rock', 'paper', 'scissors']
    return options[Math.floor(Math.random()*options.length)]
}

function checkWinner(userChoice, pcChoice){
    if(userChoice === pcChoice){ return `It's a draw, both choose ${userChoice}` }
    else if(userChoice === 'rock' && pcChoice === 'paper'){ return 'pc wins' }
    else if(userChoice === 'paper' && pcChoice === 'scissors'){ return 'pc wins' }
    else if(userChoice === 'scissors' && pcChoice === 'rock'){ return 'pc wins' }
    else if(pcChoice === 'paper' && userChoice === 'scissors'){ return 'player wins' }
    else if(pcChoice === 'scissors' && userChoice === 'rock'){ return 'player wins' }
    else if(pcChoice === 'rock' && userChoice === 'paper'){ return 'player wins' }
    else { return `"${userChoice}" is not a valid input`}
}

let pcPoints = 0
let playerPoints = 0

function playRound(user){
    let pc = getPcChoince()
    let result = checkWinner(user, pc)
    let resultDiv = document.querySelector('#result')
    if( result === 'pc wins'){
        resultDiv.innerHTML = `You lose! ${pc} beats ${user}`
        console.log(`You lose! ${pc} beats ${user}`)
        pcPoints++;
    }
    else if( result === 'player wins'){
        resultDiv.innerHTML = `You win! ${user} beats ${pc}`
        console.log(`You win! ${user} beats ${pc}`)
        playerPoints++;
    }
    else{ 
        resultDiv.innerHTML = result
        console.log(result) 
    }
}

function updateScore(){
    let resultDiv = document.querySelector('#result')
    resultDiv.innerHTML += `<br> <h2>Score</h2> PC ${pcPoints} x ${playerPoints} Jogador`
}
