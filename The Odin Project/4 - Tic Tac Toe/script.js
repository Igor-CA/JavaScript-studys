const Game = () =>{
    let board = []
    let currentPlayer = 'x'

    for(let i = 0; i < 9; i++){
        board.push(Cell());
    }
    
    const playRound = (index) =>{
        if(board[index].getValue() === null){
            board[index].addValue(currentPlayer);
            togglePlayer();
            checkForWin(index);
        }
    }

    const togglePlayer = () =>{
        currentPlayer = (currentPlayer === 'x')? 'o' : 'x' 
    }

    const getBoard = () => board
 
    const checkForWin = (index) =>{
        const line = Math.floor(index/3);
        const column = index % 3;

        console.log({line, column})
        if(board[(line*3)].getValue() === board[(line*3)+1].getValue() && board[(line*3)+1].getValue() === board[(line*3)+2].getValue()){
            console.log('line equals')
        }
        if(board[column].getValue() === board[column+3].getValue() && board[column].getValue() === board[column+6].getValue()){
            console.log('column equals')
        }
        if(board[0].getValue() === board[4].getValue() && board[0].getValue() === board[8].getValue() && board[4].getValue() !== null && board[0].getValue() !== null && board[8].getValue() !== null){
            console.log('diagonals1 equals')
        }
        if(board[2].getValue() === board[4].getValue() && board[4].getValue() === board[6].getValue() && board[4].getValue() !== null && board[2].getValue() !== null && board[6].getValue() !== null){
            console.log('diagonals2 equals')
        }

    }

    return{getBoard, checkForWin, playRound}
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
    
    game.getBoard().forEach( (cell, index) =>{
        let cellButton = document.createElement('button')
        cellButton.dataset.coord = index
        cellButton.addEventListener('click', () =>{
            game.playRound(index)
            cellButton.innerText = cell.getValue()
        })
        //console.log(cell.getValue())
        boardDiv.appendChild(cellButton)
    })

})();

