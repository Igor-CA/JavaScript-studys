const DOMHandler = (() => {
    let playerBoardContainer = document.querySelector('#player-board')
    let pcBoardContainer = document.querySelector('#pc-board')

    const updateScreen = (player) => {
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
    
    return{updateScreen, returnBoardList}
})()

export default DOMHandler