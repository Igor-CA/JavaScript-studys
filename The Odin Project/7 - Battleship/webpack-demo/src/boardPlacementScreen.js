import DOMHandler from "./DOMevents"
import Player from "./Player"
import gamingLoop from "./gamingLoop"

const boardPlacementScreen = (() => {
    let fakePlayer
    let boardContainer = document.querySelector('.placement-board')
    let axisInput = document.querySelector('.board-placement-screen__checkbox')
    let axisLabel = document.querySelector('.board-placement-screen__label')
    let shipSizes = [5, 4, 3, 3, 2]
    let shipSpecs = []
    let cells 
    const start = () => {
        fakePlayer = Player()
        updatePlacementScreen()
        addListeners()
    }

    const toggleAxisLabel = () => {
        if (axisInput.checked)
            axisLabel.textContent = 'AXIS: Y'
        else 
            axisLabel.textContent = 'AXIS: X'
    }

    axisInput.addEventListener('change', toggleAxisLabel)

    const addListeners = () => {
        cells = boardContainer.querySelectorAll('.cell')
        cells.forEach((cell, coord) => {
            cell.addEventListener('mouseover', () => {
                showValidPlacement(coord)
            })
            cell.addEventListener('click', () => {
                addShip(coord)
                addListeners()
            })
        })
    }

    const addShip = (coord) => {
        let shipNumber = fakePlayer.PlayerBoard.ships.length 
        let shipSize = shipSizes[shipNumber]
        let shipOrientation = (axisInput.checked)? 'y' : 'x'
        let shipSpec = {size:shipSize, initialCoord: coord, orientation:shipOrientation} 
        shipSpecs.push(shipSpec)
        
        fakePlayer.PlayerBoard.placeShip(shipSize, coord, shipOrientation)
        updatePlacementScreen()
        
        if(shipNumber > shipSizes.length-2){
            finishSelection()
            return                    
        }
    }

    const finishSelection = () => {
        DOMHandler.changeToGameScreen()
        gamingLoop.startGame(DOMHandler.playerNameInput.value, shipSpecs)
        DOMHandler.playerNameInput.value = null
    }

    const resetVisual = () => {
        cells.forEach(cell => {
            cell.classList.remove('cell--ship-projection')
        })
    }

    const updatePlacementScreen = () => {
        let boardHTML = (fakePlayer.PlayerBoard.updateHTML(true))
        boardContainer.innerHTML = (boardHTML)
    }

    const showValidPlacement = (coord) => {
        resetVisual()
        let shipNumber = fakePlayer.PlayerBoard.ships.length 
        let orientation = (axisInput.checked)? 'y' : 'x'
        let validLocations = fakePlayer.PlayerBoard.generateValidLocations(shipSizes[shipNumber], coord, orientation)
        if(validLocations){
            validLocations.forEach(coord => {
                cells[coord].classList.add('cell--ship-projection')
            })            
        }else{
            cells[coord].style.cursor = 'not-allowed'
        }
    }

    return {start}
})()

export default boardPlacementScreen