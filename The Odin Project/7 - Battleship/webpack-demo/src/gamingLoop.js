import Player from "./Player"
import DOMHandler from "./DOMevents"
const gamingLoop = (() =>{
    let pc
    let person
    let currentPlayer
    let currentEnemy

    const startGame = (name='Person') => {
        person = Player(name)
        person.PlayerBoard.placeShip(5 ,4 , 'x')
        person.PlayerBoard.placeShip(4 ,19 , 'y')
        person.PlayerBoard.placeShip(3 ,35 , 'x')
        person.PlayerBoard.placeShip(3 ,54 , 'x')
        person.PlayerBoard.placeShip(2 ,82 , 'x')
        currentPlayer = person
        DOMHandler.updateScreen(person)

        pc = Player()
        pc.PlayerBoard.placeShip(5 ,7 , 'y')
        pc.PlayerBoard.placeShip(4 ,11 , 'y')
        pc.PlayerBoard.placeShip(3 ,33 , 'y')
        pc.PlayerBoard.placeShip(3 ,40 , 'y')
        pc.PlayerBoard.placeShip(2 ,55 , 'y')
        currentEnemy = pc
        DOMHandler.updateScreen(pc)
        
        setTurnTo(person)
    }

    const endGame = (player) => {
        if(player.playerName){
            console.log(`${player.playerName} won`)
        }else{
            console.log('PC won')
        }
    }

    const togglePlayer = () => {
        if(currentPlayer.playerName){
            currentPlayer = pc
            currentEnemy = person
        }else{
            currentPlayer = person
            currentEnemy = pc
        }
        
        setTurnTo()  
    }

    const setTurnTo = () => {
        let enemyCells = DOMHandler.returnBoardList(currentEnemy)            
        enemyCells.forEach((cell, coord) => {
            cell.addEventListener('click', () => {
                if(currentPlayer.attack(coord, currentEnemy)){
                    DOMHandler.updateScreen(currentEnemy)
                    if(!currentEnemy.PlayerBoard.allSunk())
                        togglePlayer()
                    else
                        endGame(currentPlayer)
                }
            })
        })
    }


    return {startGame}
})()

export default gamingLoop