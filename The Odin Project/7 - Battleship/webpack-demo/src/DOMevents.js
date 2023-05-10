import Player from "./Player"

const DOMHandler = (() => {

    let player = Player('Person')
    let pc = Player()

    const inicialSetup = (() => {
        player.PlayerBoard.placeShip(5 ,4 , 'x')
        player.PlayerBoard.placeShip(4 ,19 , 'y')
        player.PlayerBoard.placeShip(3 ,35 , 'x')
        player.PlayerBoard.placeShip(3 ,54 , 'x')
        player.PlayerBoard.placeShip(2 ,82 , 'x')

        pc.PlayerBoard.placeShip(5 ,7 , 'y')
        pc.PlayerBoard.placeShip(4 ,11 , 'y')
        pc.PlayerBoard.placeShip(3 ,33 , 'y')
        pc.PlayerBoard.placeShip(3 ,40 , 'y')
        pc.PlayerBoard.placeShip(2 ,55 , 'y')
    })()
    let playerBoardHTML = (player.PlayerBoard.updateHTML())
    let pcBoardHTML = (pc.PlayerBoard.updateHTML())
    let gameContainer = document.querySelector('#game-container')
    let playerBoardContainer = document.querySelector('#player-board')
    let pcBoardContainer = document.querySelector('#pc-board')
    playerBoardContainer.innerHTML = (playerBoardHTML)
    pcBoardContainer.innerHTML = (pcBoardHTML)
    let currentPlayer = player
    let currentEnemy = pc
    
    const toggle = () => {
        if(currentPlayer.playerName){
            currentPlayer = pc
            currentEnemy = player
        }
        else{
            currentPlayer = player
            currentEnemy = pc
        }
        setTurnTo()  
    }

    const setTurnTo = () => {
        let cells
        if(currentEnemy.playerName)
            cells = playerBoardContainer.querySelectorAll('.cell')
        else
            cells = pcBoardContainer.querySelectorAll('.cell')
        cells.forEach((cell, coord) => {
            cell.addEventListener('click', () => {
                currentEnemy.PlayerBoard.receiveAttack(coord)
                if(currentEnemy.playerName){
                    playerBoardContainer.innerHTML = (currentEnemy.PlayerBoard.updateHTML())
                }else{
                    pcBoardContainer.innerHTML = (currentEnemy.PlayerBoard.updateHTML())
                }
                toggle(currentPlayer)
            })
        })
    }


    return{setTurnTo, player}
      
})()

export default DOMHandler