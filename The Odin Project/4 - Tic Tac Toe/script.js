const Game = () =>{
    let board = []
    let currentPlayer = 'x'

    for(let i = 0; i < 9; i++){
        board.push(Cell());
    }
    
    const getCurrentPlayer = () => currentPlayer

    const playRound = (index) =>{
        if(board[index].getValue() === null){
            board[index].addValue(currentPlayer);
            checkForWin()
            togglePlayer();
        }
    }

    const togglePlayer = () =>{
        currentPlayer = (currentPlayer === 'x')? 'o' : 'x' 
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
            screenControler.showWhinner()
        }

         //check for tie
        let filledSquares = board.filter((square) => {
            return square.getValue() !== null;
        })
        if(filledSquares.length == 9){
            screenControler.showTie()
        }

    }

    return{getBoard, getCurrentPlayer, checkForWin, playRound}
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
    
    const init = () => {
        createBoard()
        addListerners()
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

    const showWhinner = () => {
        let header = document.querySelector('#turn')
        header.textContent = `Jogador '${game.getCurrentPlayer()}' Ganhou`
    }
    const showTie = () => {
        let header = document.querySelector('#turn')
        header.textContent = `It's a Tie`
    }

    init()
    return{ showWhinner, showTie }
})();

