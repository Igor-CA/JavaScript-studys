const Cell = (coord, color) => {
    let HTML
    return {coord, color, HTML}
}

const Knight = (coords) => {
    let coord = coords
    let div = document.createElement('div')
    const createHTML = () =>{
        div.classList.add('knight')
        return div
    }
    div.addEventListener('click', ()=>{
        let possibleMoves = []
        possibleMoves.push([coord[0] + 1, coord[1] + 2])
        possibleMoves.push([coord[0] + 1, coord[1] - 2])
        possibleMoves.push([coord[0] - 1, coord[1] - 2])
        possibleMoves.push([coord[0] - 1, coord[1] + 2])
        possibleMoves.push([coord[0] + 2, coord[1] + 1])
        possibleMoves.push([coord[0] + 2, coord[1] - 1])
        possibleMoves.push([coord[0] - 2, coord[1] - 1])
        possibleMoves.push([coord[0] - 2, coord[1] + 1])
        console.log({possibleMoves})
        Board.showMoves(possibleMoves)
    })
    return {coord, createHTML}
}

const Board = (() => {
    let cells = []
    let knight = Knight([4,4])
    let container = document.querySelector('#container')
    const createBoard = (() =>{ 
        let color = 1
        for(let i = 7; i >= 0; i--){
            for(let j = 0; j < 8; j++){
                let newCell = Cell([j, i], color)
                color = (color === 1)? 0 : 1
                cells.push(newCell)
            }
            color = (color === 1)? 0 : 1
        }
    })()
    const createHTML = () =>{
        cells.forEach((cell)=>{
            let cellDiv = document.createElement('div')
            cellDiv.classList.add('cell')
            cellDiv.style.backgroundColor = (cell.color === 1)? 'white' : '#222222'
            if(cell.coord[0] === knight.coord[0] && cell.coord[1] === knight.coord[1]){
                cellDiv.appendChild(knight.createHTML())
            }
            cell.HTML = cellDiv  
            container.appendChild(cellDiv)
        })
    }
    const showMoves = (possibleMoves) => {
        possibleMoves.forEach((move) => {
            cells.forEach((cell) => {
                if(cell.coord[0] === move[0] && cell.coord[1] === move[1]){
                    let marker = document.createElement('div')
                    marker.classList = 'marker'
                    cell.HTML.appendChild(marker)
                }
            })
        })
    }
    const hideMoves = () =>{
        let divCells = document.querySelectorAll(".cell")
        divCells.forEach((cell) => {
            if(cell.innerHTML){
                let marker = cell.querySelector('.marker')
                if(marker)
                    cell.innerHTML = null
            }
        })
    }
    container.addEventListener('mousedown', hideMoves)
    createHTML()
    return{ cells, showMoves }
})()
