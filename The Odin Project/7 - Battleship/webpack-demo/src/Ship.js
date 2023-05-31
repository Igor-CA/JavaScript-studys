const Ship = (shipLenght, shipCoords) => {
    let lenght = shipLenght
    let coords = shipCoords
    let hitedCoords = []
    const hit = (hitCoords) => {
        hitedCoords.push(hitCoords)
        return true
    }
    const isSunk = () => {
        if(hitedCoords.length === coords.length) return true
        return false
    }
    return {lenght, coords, hit, hitedCoords , isSunk}
}

export default Ship