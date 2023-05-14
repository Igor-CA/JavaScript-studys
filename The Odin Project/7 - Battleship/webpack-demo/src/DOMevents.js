const DOMHandler = (() => {
    let startScreenContainer = document.querySelector('#start-screen')
    let playerNameInput = document.querySelector('.start-screen__name-input')
    let startGameInput = document.querySelector('.start-screen__start-input')

    let boardPlacementScreen = document.querySelector('#board-placement-screen')

    let gameScreenContainer = document.querySelector('#game-screen')
    let playerBoardContainer = document.querySelector('#player-board')
    let pcBoardContainer = document.querySelector('#pc-board')

    let endScreenContainer = document.querySelector('#end-screen')
    let endScreenText = document.querySelector('.end-screen__text')
    let endScreenInput = document.querySelector('.end-screen__play-again')


    const changeToBoardScreen = () => {
        startScreenContainer.classList.add('start-screen--invisible')
        boardPlacementScreen.classList.remove('board-placement-screen--invisible')
    }

    const changeToGameScreen = () => {
        boardPlacementScreen.classList.add('board-placement-screen--invisible')
        gameScreenContainer.classList.remove('game-screen--invisible')
    }

    const changeToEndScreen = (winner) => {
        gameScreenContainer.classList.add('game-screen--invisible')
        endScreenContainer.classList.remove('end-screen--invisible')
        endScreenText.textContent = `${winner} WINS`
    }

    const backToStartScreen = () => {
        endScreenContainer.classList.add('end-screen--invisible')
        startScreenContainer.classList.remove('start-screen--invisible')
    }

    endScreenInput.addEventListener('click', backToStartScreen)

    const updateGameScreen = (player) => {
        let boardHTML
        if(player.playerName){
            boardHTML = (player.PlayerBoard.updateHTML(true))
            playerBoardContainer.innerHTML = (boardHTML)
        }else{
            boardHTML = (player.PlayerBoard.updateHTML())
            pcBoardContainer.innerHTML = (boardHTML)
        }
        
    }

    const returnBoardList = (player) => {
        let cells
        if(player.playerName){
            cells = playerBoardContainer.querySelectorAll('.cell')

        }else{
            cells = pcBoardContainer.querySelectorAll('.cell')
        }
        return cells
    }
    
    return{playerNameInput, startGameInput,changeToBoardScreen, changeToGameScreen, changeToEndScreen, updateGameScreen, returnBoardList}
})()

export default DOMHandler