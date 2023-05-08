import Ship from "./ship";
import Gameboard from "./Gameboard"
import Player from "./Player";
describe('Ship tests', () => {
    
    let littleShip
    let biggerShip
    
    beforeEach(() => {
        littleShip = Ship(2, [[21], [31]])
        biggerShip = Ship(4, [[34], [35], [36], [37]])
    })
    test('Receive hit', () => {
        littleShip.hit([21])
        expect(littleShip.hitedCoords).toEqual([[21]])
    })
    test('Multiple hits', () => {
        biggerShip.hit([34])
        biggerShip.hit([35])
        biggerShip.hit([37])
        expect(biggerShip.hitedCoords).toEqual([[34], [35], [37]])
    })
    test('Show a ship is not sunked', () => {
        littleShip.hit([21])
        expect(littleShip.isSunk()).toBe(false)
    })
    test('Show a ship is sunked', () => {
        littleShip.hit([21])
        littleShip.hit([31])
        expect(littleShip.isSunk()).toBe(true)
    })
})

describe('Gameboard tests', () => {
    let board 

    beforeEach(() => {
        board = Gameboard()
    })

    test('Board created successfully', () => {
        let fakeBoard = []
        for(let i=0; i<10; i++){
            for(let j=0; j<10; j++){
                fakeBoard.push({ hited:false, hasShip:false})
            }
        }
        expect(board.board).toEqual(fakeBoard)
    })

    test('Confirms ship placement', () => {
        let lenght = 2
        let initialCoords = 11  
        let orientation = 'x'
        expect(board.placeShip(lenght, initialCoords, orientation)).toBe(true)
    })
    
    test('Reject ship placement that passes edge on X', () => {
        let lenght = 4
        let initialCoords = 17 
        let orientation = 'x'
        expect(board.placeShip(lenght, initialCoords, orientation)).toBe(false)
    })
    test('Reject ship placement that passes edge on Y', () => {
        let lenght = 4
        let initialCoords = 71  
        let orientation = 'y'
        expect(board.placeShip(lenght, initialCoords, orientation)).toBe(false)
    })
    test('Reject ship placement if colides with another ship', () => {
        let lenght = 4
        let initialCoords = 10  
        let orientation = 'x'
        board.placeShip(lenght, 23, orientation)
        board.placeShip(lenght, 13, orientation)
        expect(board.placeShip(lenght, initialCoords, orientation)).toBe(false)
    })
    test('One successfull attack', () => {
        board.placeShip(2, 0, 'x')
        expect(board.receiveAttack(0)).toBe(true)
    })
    test('Successfully sunk a ship', () => {
        board.placeShip(2, 0, 'x')
        board.receiveAttack(0)
        board.receiveAttack(1)
        expect(board.allSunk()).toBe(true)
    })
    test('All ships have been sunked', () => {
        board.placeShip(1, 0, 'x')
        board.placeShip(1, 1, 'x')
        board.placeShip(2, 2, 'y')
        board.placeShip(2, 5, 'y')
        board.receiveAttack(0)
        board.receiveAttack(1)
        board.receiveAttack(2)
        board.receiveAttack(12)
        board.receiveAttack(5)
        board.receiveAttack(15)
        expect(board.allSunk()).toBe(true)
    })
    test('Missed a attack', () => {
        board.placeShip(1, 0, 'x')
        board.receiveAttack(1)
        expect(board.board[1].hited).toBe(true)
        expect(board.allSunk()).toBe(false)
    })
})

describe('Player tests', () => {
    let player
    let fakeBoard
    beforeEach(() => {
        player = Player('ThatGuy')
        fakeBoard = {
            board: [],
            receiveAttack: jest.fn((coords) => {
                let x = coords[0]
                let y = coords[1]
                let cellNumber = (x*10)+y
                if(fakeBoard.board[cellNumber] === 'miss') return false
                fakeBoard.board[cellNumber] = 'miss'
                return true
            }) 
        }
        const emptyBoard = []
        for(let i=0; i<100; i++){
            emptyBoard.push('empty')
        }
        fakeBoard.board = emptyBoard
    })
    test('Create player with a name successfully', () => {
        expect(player.playerName).toBe('ThatGuy')
    })
    test('Attack a spot', () => {
        expect(player.attack([0, 0], fakeBoard)).toBe(true)
    })
    test('Reject a attack at same spot', () => {
        player.attack([0, 0], fakeBoard)
        expect(player.attack([0, 0], fakeBoard)).toBe(false)
    })
})
