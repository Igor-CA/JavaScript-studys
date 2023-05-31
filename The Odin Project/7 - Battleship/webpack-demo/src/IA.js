import Player from "./Player"
const IA = () => {
    
    const attackRandomSpot = (enemyBoard) => {
        let availableCells = []
        enemyBoard.board.forEach((cell, coord) => {
            if(cell.hited === false)
                availableCells.push(coord)
        })
        let randomValue = Math.floor(Math.random() * availableCells.length)
        enemyBoard.receiveAttack(availableCells[randomValue])
    }

    const seeHitedShips = (enemyBoard) => {
        let markedCells = []
        enemyBoard.board.forEach((cell, coord) => {
            if(cell.hited && cell.hasShip)
            markedCells.push(coord)
        })
        return markedCells
    }

    const validAdjacents = (left, right, up, down) => {
        let validOptions = []
        if(left%10 !== 9 && left >= 0)
            validOptions.push(left)
        if(right%10 !== 0)
            validOptions.push(right)
        if(up > 0)
            validOptions.push(up)
        if(down < 100)
            validOptions.push(down)
        return validOptions
    }
    const seeAdjacentCells = (arrayOfCoords) => {
        let adjacentsArray = []
        arrayOfCoords.forEach(coord => {
            let left = coord - 1
            let right = coord + 1
            let up = coord - 10
            let down = coord + 10
            adjacentsArray = adjacentsArray.concat(validAdjacents(left, right, up, down))
        })
        return adjacentsArray
    }

    const checkForAlreadyMarked = (enemyBoard, listOfCoords) => {
        let fullArray = []
        listOfCoords.forEach(coord => {
            if(enemyBoard.board[coord].hited === false)
                fullArray.push(coord)
        })
        return fullArray
    }
    
    const removeDoubles = (array) => {
        let set = new Set(array)
        array = [...set]
        return array
    }

    const attackSpotCloseToHitedSpot = (enemyBoard) => {
        let hitedShips = seeHitedShips(enemyBoard)
        let allAdjascents = seeAdjacentCells(hitedShips)
        let possibleSpots = checkForAlreadyMarked(enemyBoard, allAdjascents)
        possibleSpots = removeDoubles(possibleSpots)
        
        if(possibleSpots.length > 0){
            let randomValue = Math.floor(Math.random() * possibleSpots.length)
            enemyBoard.receiveAttack(possibleSpots[randomValue])
            return true
        }else
            return false
    }

    const IAAttack = (enemyBoard) => {
        if(attackSpotCloseToHitedSpot(enemyBoard) === false){
            attackRandomSpot(enemyBoard)
        }     
    }

    const placeRandomShip = (Gameboard, length) => {
        let coords = []
        let randomAxis = Math.floor((Math.random() * 2))
        let axis = (randomAxis === 0)? 'x' : 'y'
        Gameboard.board.forEach((cell, coord) => coords.push(coord))
        let possibleSpots = coords.filter(coord => {
            if(Gameboard.generateValidLocations(length, coord, axis))
                return true
            return false
        })
        
        let randomValue = Math.floor(Math.random() * possibleSpots.length)
        Gameboard.placeShip(length, possibleSpots[randomValue], axis)
    }

    return Object.assign(
        {IAAttack, placeRandomShip}, 
        Player()
    )
}

export default IA