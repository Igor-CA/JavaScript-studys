const Cell = (coord, color) => {
    let HTML
    return {coord, color, HTML}
}

const Knight = (coords) => {
    let coord = coords
    let possibleMoves = []
    let div = document.createElement('div')
    const createHTML = () =>{
        div.classList.add('knight')
        return div
    }
    const definePossibleMoves = (startCoords = coord) => {
        possibleMoves = []
        possibleMoves.push([startCoords[0] + 1, startCoords[1] + 2])
        possibleMoves.push([startCoords[0] + 1, startCoords[1] - 2])
        possibleMoves.push([startCoords[0] - 1, startCoords[1] - 2])
        possibleMoves.push([startCoords[0] - 1, startCoords[1] + 2])
        possibleMoves.push([startCoords[0] + 2, startCoords[1] + 1])
        possibleMoves.push([startCoords[0] + 2, startCoords[1] - 1])
        possibleMoves.push([startCoords[0] - 2, startCoords[1] - 1])
        possibleMoves.push([startCoords[0] - 2, startCoords[1] + 1])
        possibleMoves = possibleMoves.filter((move) => {
            if((move[0] >= 0 && move[0] < 8) && (move[1] >= 0 && move[1] < 8))
                return true
            else
                return false
        })
    }
    const showMoves = () => {
        definePossibleMoves()
        Board.showMoves(possibleMoves)
        
    }

    const move = (newCoords) => {
        coord = newCoords
    }
    const getCoords = () => {
        return coord
    }
    div.addEventListener('click', showMoves)
    return {getCoords, createHTML, move}
}

const Board = (() => {
    let cells = []
    let knight = Knight([1,0])
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
        container.innerHTML = null
        cells.forEach((cell)=>{
            let cellDiv = document.createElement('div')
            cellDiv.classList.add('cell')
            cellDiv.style.backgroundColor = (cell.color === 1)? 'white' : '#222222'
            if(cell.coord[0] === knight.getCoords()[0] && cell.coord[1] === knight.getCoords()[1]){
                cellDiv.appendChild(knight.createHTML())
            }
            cell.HTML = cellDiv  
            container.appendChild(cellDiv)
        })
    }
    const showMoves = (possibleMoves) => {
        hideMoves()
        possibleMoves.forEach((move) => {
            cells.forEach((cell) => {
                if(cell.coord[0] === move[0] && cell.coord[1] === move[1]){
                    let marker = document.createElement('div')
                    marker.classList = 'marker'
                    marker.addEventListener('click', () => {
                        moveKnight(cell.coord)
                    })
                    cell.HTML.appendChild(marker)
                }
            })
        })
    }

    const moveKnight = (coord) => {
        knight.move(coord)
        createHTML()
        hideMoves()
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
    createHTML()
    return{ cells, showMoves }
})()

const node = (coordsValue, parent = null) => { 
    let children = []
    let coord = coordsValue

    const defineChildren = () => {
        possibleMoves = definePossibleMoves()
        possibleMoves.forEach((move) => {
            let newChildren = node(move, thisObject)
            children.push(newChildren)
        })
    }
    const definePossibleMoves = (startCoords = coord) => {
        possibleMoves = []
        possibleMoves.push([startCoords[0] + 1, startCoords[1] + 2])
        possibleMoves.push([startCoords[0] + 1, startCoords[1] - 2])
        possibleMoves.push([startCoords[0] - 1, startCoords[1] - 2])
        possibleMoves.push([startCoords[0] - 1, startCoords[1] + 2])
        possibleMoves.push([startCoords[0] + 2, startCoords[1] + 1])
        possibleMoves.push([startCoords[0] + 2, startCoords[1] - 1])
        possibleMoves.push([startCoords[0] - 2, startCoords[1] - 1])
        possibleMoves.push([startCoords[0] - 2, startCoords[1] + 1])
        possibleMoves = possibleMoves.filter((move) => {
            if((move[0] >= 0 && move[0] < 8) && (move[1] >= 0 && move[1] < 8))
                return true
            else
                return false
        })
        return possibleMoves
    }
    let thisObject = {defineChildren, children, coord, parent}
    return thisObject
}

const KnightTravailsGraph = (startCoords) => {
    let root = node(startCoords)
    root.defineChildren()

    const bmsSearch = (value) => {
        let queue = [root]
        while(queue.length > 0){
            let element = queue[0]
            if(element.coord[0] === value[0] && element.coord[1] === value[1])
                return element 
            element.children.forEach((node) => {
                queue.push(node)
            })
            queue.shift()
        }
        return null
        
    }

    const defineNewLevel = (node = root) => {
        if (node === null){
            return node
        }
        if(node.children.length === 0){
            node.defineChildren()
        }else{
            node.children.forEach((child) => {
                defineNewLevel(child)
            })
        }
        return node
    }

    const circleBack = (node) => {
        let steps = []
        let currentNode = node
        while(currentNode.parent){
            steps.unshift(currentNode.coord)
            currentNode = currentNode.parent
        }
        printSteps(steps)
    }
    const printSteps = (stepsArray) => {
        console.log(`You made it in ${stepsArray.length} moves!  Here's your path:`)
        stepsArray.forEach((step) => {
            console.log(step)
        })
    }
    return {root, bmsSearch, defineNewLevel, circleBack}
}

function knightMoves(start, end){
    let graph = KnightTravailsGraph(start)
    if((start[0] < 0 || start[0] > 7) || (start[1] < 0 || start[1] > 7)){
        console.log('invalid start')
        return
    }else if((end[0] < 0 || end[0] > 7) || (end[1] < 0 || end[1] > 7)){
        console.log('invalid end')
        return
    }
    while(true){
        let endNode = graph.bmsSearch(end)
        if(endNode){
            graph.circleBack(endNode)
            break
        }else{
            graph.defineNewLevel()
        }
    }
}


knightMoves([7,7], [0,0])
