const Ship = (shipLenght, shipCoords) => {
    let lenght = shipLenght
    let coords = shipCoords
    let hitedCoords = []
    let numberOfHits = 0
    let sunked = false
    const hit = (hitCoords) => {
        const inCoords = coords.some( arrayValue => 
            {return JSON.stringify(arrayValue) === JSON.stringify(hitCoords)})
        const inHited = hitedCoords.some( arrayValue => 
            {return JSON.stringify(arrayValue) === JSON.stringify(hitCoords)})
        if(inHited)return
        if(!inCoords)return
        hitedCoords.push(hitCoords)
    }
    const isSunk = () => {
        
    }
    return {lenght, coords, numberOfHits, hit, hitedCoords , isSunk}
}

export default Ship