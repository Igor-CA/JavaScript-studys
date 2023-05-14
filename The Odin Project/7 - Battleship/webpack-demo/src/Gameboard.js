import Ship from "./ship"

const Gameboard = () => {
    let board = []
    let ships = []
    const create = (() => {
        for(let i=0; i<100; i++){
                board.push({hited:false, hasShip:false})
        }
    })()
    const checkColisions = (coordsArray, orientattion) => {
        for(let index in coordsArray){
            let coord = coordsArray[index]
            let y = Math.floor(coord/10)
            let x = coord % 10
            if(y > 9) return true
            if(x === 9 && index < coordsArray.length - 1 && orientattion === 'x') return true
            if(board[coord].hasShip) return true
        }
        return false
    }

    const createLocationArray = (shipLength, initialCoords, axis) => { 
        let shipCoords = [initialCoords]
        for(let i=1; i<shipLength; i++){
            if(axis === 'x')
                shipCoords.push(initialCoords + i)
            else
                shipCoords.push(initialCoords + i * 10)
        }
        return shipCoords
    }

    const placeShip = (shipLength, initialCoords, shipOrientation) => { 
        let shipCoords = generateValidLocations(shipLength, initialCoords, shipOrientation)   
        if(shipCoords === false) return false
        
        let newShip = Ship(shipLength,shipCoords)
        shipCoords.forEach(coord => {
            board[coord].hasShip = newShip
        })
        ships.push(newShip)
        return true
    }

    const generateValidLocations = (shipLength, initialCoords, shipOrientation) => {
        let shipCoords = createLocationArray(shipLength, initialCoords, shipOrientation)
        if(checkColisions(shipCoords, shipOrientation)) return false
        
        return shipCoords
    }
    
    const receiveAttack = (coord) => {     
        if(board[coord].hited)  return false
        
        if(board[coord].hasShip)
            board[coord].hasShip.hit(coord)
        board[coord].hited = true
        boardHTML = generateHTMLfromBoard()
        return true

    }
    const allSunk = () => {         
        for(let i in ships){
            let ship = ships[i]
            if(!ship.isSunk()) return false
        }
        return true
    }

    const generateHTMLfromBoard = (playerIsHuman) => {
        let container = document.createElement('div')
        board.forEach((cell) => {
            let cellHTML = document.createElement('div')
            cellHTML.classList.add('cell')
            if(cell.hited){
                cellHTML.classList.add('cell--marked')
                let mark = document.createElement('div')
                mark.classList.add('cell__mark')
                cellHTML.appendChild(mark)
            }
            
            if(cell.hasShip){
                if(cell.hasShip.isSunk())
                    cellHTML.classList.add('cell--sunked-ship')
            }
            if(cell.hasShip && playerIsHuman)
                cellHTML.classList.add('cell--ship')
            if(cell.hited && cell.hasShip){
                cellHTML.classList.add('cell--marked-ship')
            }
            container.appendChild(cellHTML)

        })
        return container.innerHTML
    }

    const updateHTML = (playerIsHuman=false) => {
        boardHTML = generateHTMLfromBoard(playerIsHuman)
        return boardHTML
    }

    let boardHTML = generateHTMLfromBoard()

    return {placeShip, board, receiveAttack, ships, allSunk, updateHTML, generateValidLocations}
}

export default Gameboard