import Ship from "./ship"

const Gameboard = () => {
    let board = []
    let ships = []
    const create = (() => {
        board = []
        for(let i=0; i<10; i++){
            for(let j=0; j<10; j++){
                board.push(cell(i, j))
            }
        }
    })()
    const checkColisions = (coordsArray) => {
        for(let coord in coordsArray){
            let x = coordsArray[coord][0]
            let y = coordsArray[coord][1]
            if(x > 9 || x < 0 || y > 9 || y < 0) return true
            for(let ship in ships){
                for(let shipCoord in ships[ship].coords){
                    let shipX = ships[ship].coords[shipCoord][0]
                    let shipY = ships[ship].coords[shipCoord][1]
                    if(x === shipX && y === shipY) return true                    
                }
            }
        }
        return false
    }
    const placeShip = (shipLenght, initialCoords, shipOrientation) => {
        let shipCoords = [initialCoords]
        if(shipOrientation === 0){
            for(let i=1; i<shipLenght; i++){
                let x = initialCoords[0]
                let y = initialCoords[1]
                let newCoords = [x + i, y]
                shipCoords.push(newCoords)
            }
        }else{
            for(let i=1; i<shipLenght; i++){
                let x = initialCoords[0]
                let y = initialCoords[1]
                let newCoords = [x, y + i]
                shipCoords.push(newCoords)
            }
        }

        if(checkColisions(shipCoords)) return false
        
        let newShip = Ship(shipLenght,shipCoords)
        shipCoords.forEach(coord => {
            let x = coord[0]
            let y = coord[1]
            let cellNumber = (x*10)+y
            board[cellNumber].hasShip = newShip
        })
        ships.push(newShip)
        return true
    }
    
    const receiveAttack = (coords) => {
        
        let x = coords[0]
        let y = coords[1]
        let cellNumber = (x*10)+y
        if(board[cellNumber].hited)  return false
        
        if(board[cellNumber].hasShip){
            return board[cellNumber].hasShip.hit(coords)
        }
        board.cell.hited = true

    }
    const allSunk = () => {
        for(let i in ships){
            let ship = ships[i]
            if(!ship.isSunk()) return false
        }
        return true
    }
    return {placeShip, board, receiveAttack, ships, allSunk}
}
const cell = (x, y) => {
    let coords = [x, y]
    let hited = false
    let hasShip = false
    return {coords, hited, hasShip}
}
export default Gameboard