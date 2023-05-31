import Gameboard from "./Gameboard"

const Player = (name) => {
    let playerName = name
    let PlayerBoard = Gameboard()
    const attack = (coord, enemy) => {
        return enemy.PlayerBoard.receiveAttack(coord)
    }

    return {playerName, PlayerBoard, attack}
}

export default Player