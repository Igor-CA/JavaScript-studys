//Get user input
function getUserInput(){
    let input
    do{
        input = prompt() 
    }while (input === null)
    input = input.toLowerCase()
    return input
}

function getPcChoince(){
    let options = ['rock', 'paper', 'scissors']
    return options[Math.floor(Math.random()*options.length)]
}

function playRound(userChoice, pcChoice){
    if(userChoice === pcChoice){ return `It's a draw, both choose ${userChoice}` }
    else if(userChoice === 'rock' && pcChoice === 'paper'){ return 'pc wins' }
    else if(userChoice === 'paper' && pcChoice === 'scissors'){ return 'pc wins' }
    else if(userChoice === 'scissors' && pcChoice === 'rock'){ return 'pc wins' }
    else if(pcChoice === 'paper' && userChoice === 'scissors'){ return 'player wins' }
    else if(pcChoice === 'scissors' && userChoice === 'rock'){ return 'player wins' }
    else if(pcChoice === 'rock' && userChoice === 'paper'){ return 'player wins' }
    else { return `"${userChoice}" is not a valid input`}
}

let userPoints = 0
let pcPoints = 0

for(let i=0; i<5; i++){
    let user = getUserInput()
    let pc = getPcChoince()
    let round = playRound(user, pc)
    if( round === 'pc wins'){
        console.log(`You lose! ${pc} beats ${user}`)
        pcPoints++
    }
    else if( round === 'player wins'){
        console.log(`You win! ${user} beats ${pc}`)
        userPoints++
    }
    else{ console.log(round) }
}

if (userPoints > pcPoints){ console.log(`You win! ${userPoints} x ${pcPoints}`) }
else if (userPoints < pcPoints) { console.log(`You lose! ${userPoints} x ${pcPoints}`) }
else { console.log(`It's a draw! ${userPoints} x ${pcPoints}`) }