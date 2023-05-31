const Game = () =>{
    let board = []
    let currentPlayer = 'x'
    let winner = ''

    for(let i = 0; i < 9; i++){
        board.push(Cell());
    }
    
    const getCurrentPlayer = () => currentPlayer

    const getWinner = () => winner

    const playRound = (index) =>{
        if(board[index].getValue() === null){
            board[index].addValue(currentPlayer);
            checkForWin()
            togglePlayer();
        }
    }

    const togglePlayer = () =>{
        currentPlayer = (currentPlayer === 'x')? 'o' : 'x' 
        screenControler.showPlayerTurn()
    }

    const resetBoard = () => {
        board.forEach( cell => {
            currentPlayer = 'x'
            cell.addValue(null)
        })
    }

    const getBoard = () => board
 
    const checkForWin = () =>{
        let roundWon = false
        const winCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let i=0; i<winCombinations.length; i++){
            let combination = winCombinations[i]
            let valA = board[combination[0]].getValue()
            let valB = board[combination[1]].getValue()
            let valC = board[combination[2]].getValue()

            if(valA === null || valB === null || valC === null){
                continue
            }
            if(valA === valB && valB === valC){
                roundWon = true
                break
            }

        }

        if(roundWon){
            winner = currentPlayer
            screenControler.showResult()
        }

         //check for tie
        let filledSquares = board.filter((square) => {
            return square.getValue() !== null;
        })
        if(filledSquares.length == 9){
            winner = 'Tie'
            screenControler.showResult()
        }

    }

    return{getBoard, getCurrentPlayer, getWinner, checkForWin, playRound, resetBoard}
}
const Cell = ()=>{
    let value = null

    const addValue = (player) =>{
        value = player
    }

    const getValue = () => value

    return{addValue, getValue}
}

const screenControler = (() =>{
    let game = Game()
    let boardDiv = document.querySelector('#board')
    let resetButton = document.querySelector('#resetButton')
    
    const startNewGame = () => {
        let boardCells = document.querySelectorAll('.cell')
        let board = game.getBoard()
        game.resetBoard()        
        boardCells.forEach( cell => {
            let index = cell.dataset.cord
            cell.textContent = board[index].getValue()
        })
        resetButton.classList.toggle('invisible')
        let header = document.querySelector('#winner')
        header.textContent = '' 
    }

    const init = () => {
        createBoard()
        addListerners()
        showPlayerTurn()
    }
    
    const createBoard = ()=>{
        let board = game.getBoard()
        board.forEach( (cell) => {
            let cellButton = document.createElement('button')
            cellButton.classList += 'cell'
            cellButton.dataset.cord = board.indexOf(cell)
            boardDiv.appendChild(cellButton)
        })
    }

    const addListerners = ()=>{
        let boardCells = document.querySelectorAll('#board>.cell')
        let board = game.getBoard()
        boardCells.forEach( (cell) => {
            let index = cell.dataset.cord
            cell.addEventListener('click', ()=>{
                game.playRound(index)
                cell.textContent = board[index].getValue() 
            })
        })
    }

    const showResult = () => {
        let header = document.querySelector('#winner')
        if(game.getWinner() === 'Tie'){
            header.textContent = `It's a Tie`
        }else{
            header.textContent = `Jogador '${game.getCurrentPlayer()}' Ganhou`
        }
        hidePlayerTurn()
        toggleResetVisibility()
    }

    const showPlayerTurn = () => {
        let turnMensage = document.querySelector("#playerTurn")
        turnMensage.textContent = `Player '${game.getCurrentPlayer()}' turn`
    }

    const hidePlayerTurn = () => {
        let turnMensage = document.querySelector('#playerTurn')
        turnMensage.style.display = 'none'
    }

    const toggleResetVisibility = () =>{
        resetButton.classList.toggle('invisible')
    }


    init()
    resetButton.addEventListener('click', startNewGame)
    return{ showResult, showPlayerTurn }
})();
