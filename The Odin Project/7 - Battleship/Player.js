import Gameboard from "./Gameboard"

const Player = (name) => {
    let playerName = name
    let PlayerBoard = Gameboard()
    const attack = (coord, enemyBoard) => {
        return enemyBoard.receiveAttack(coord)
    }

    return {playerName, PlayerBoard, attack}
}

export default Player