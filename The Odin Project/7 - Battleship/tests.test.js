import Ship from "./ship";
import Gameboard from "./Gameboard"
describe('Ship tests', () => {
    
    let littleShip
    let biggerShip
    
    beforeEach(() => {
        littleShip = Ship(2, [[1,2], [1,3]])
        biggerShip = Ship(4, [[4,3], [5,3], [6,3], [7,3]])
    })
    test('Receive hit', () => {
        littleShip.hit([1,2])
        expect(littleShip.hitedCoords).toEqual([[1, 2]])
    })
    test('Multiple hits', () => {
        biggerShip.hit([4,3])
        biggerShip.hit([5,3])
        biggerShip.hit([7,3])
        expect(biggerShip.hitedCoords).toEqual([[4,3], [5,3], [7,3]])
    })
    test('Show a ship is not sunked', () => {
        littleShip.hit([1,2])
        expect(littleShip.isSunk()).toBe(false)
    })
    test('Show a ship is sunked', () => {
        littleShip.hit([1,2])
        littleShip.hit([1,3])
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
                fakeBoard.push({coords:[i, j], hited:false, hasShip:false})
            }
        }
        expect(board.board).toEqual(fakeBoard)
    })

    test('Confirms ship placement', () => {
        let lenght = 2
        let initialCoords = [1,1]  
        let orientation = 0
        expect(board.placeShip(lenght, initialCoords, orientation)).toBe(true)
    })
    
    test('Reject ship placement that passes edge on X', () => {
        let lenght = 4
        let initialCoords = [8,1]  
        let orientation = 0
        expect(board.placeShip(lenght, initialCoords, orientation)).toBe(false)
    })
    test('Reject ship placement that passes edge on Y', () => {
        let lenght = 4
        let initialCoords = [1,7]  
        let orientation = 1
        expect(board.placeShip(lenght, initialCoords, orientation)).toBe(false)
    })
    test('Reject ship placement if colides with another ship', () => {
        let lenght = 4
        let initialCoords = [0,1]  
        let orientation = 0
        board.placeShip(lenght, [3,2], orientation)
        board.placeShip(lenght, [3,1], orientation)
        expect(board.placeShip(lenght, initialCoords, orientation)).toBe(false)
    })
    test('One successfull attack', () => {
        board.placeShip(2, [0,0], 0)
        expect(board.receiveAttack([0,0])).toBe(true)
    })
    test('Successfully sunk a ship', () => {
        board.placeShip(2, [0,0], 0)
        board.receiveAttack([0,0])
        board.receiveAttack([1,0])
        expect(board.allSunk()).toBe(true)
    })
    test('All ships have been sunked', () => {
        board.placeShip(1, [0,0], 0)
        board.placeShip(1, [1,0], 0)
        board.placeShip(2, [2,0], 1)
        board.placeShip(2, [5,0], 1)
        board.receiveAttack([0,0])
        board.receiveAttack([1,0])
        board.receiveAttack([2,0])
        board.receiveAttack([2,1])
        board.receiveAttack([5,0])
        board.receiveAttack([5,1])
        expect(board.allSunk()).toBe(true)
    })
    /*
    test('See if all ships have sunked', ()=> {
        let lenght = 1
        let orientation = 0
        board.placeShip(lenght, [0,0], orientation)
        board.placeShip(lenght, [2,2], orientation)
    })
    */
    /*
    test.only('Test collision', () => {
        let lenght = 4
        let orientation = 0
        board.placeShip(lenght, [2,2], orientation)
        expect(board.checkColisions([[2,2]])).toBe(true)
    })
    */
})
