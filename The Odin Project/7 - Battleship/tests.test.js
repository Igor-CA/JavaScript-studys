import Ship from "./ship";
import value from "./sandbox";
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
    test('Hit misses', () => {
        littleShip.hit([5,4])
        expect(littleShip.hitedCoords).toEqual([])
    })
    test('Hits at same spot', () => {
        littleShip.hit([1,2])
        littleShip.hit([1,2])
        expect(littleShip.hitedCoords).toEqual([[1, 2]])
    })
    
})

test('Includes', () => {
    let array = [[1, 2], 3]
    expect(value(array, [1, 2])).toBe(true)
})
test("Don't Includes", () => {
    let array = [[1], [2], [3]]
    expect(value(array, [5])).toBe(false)
})

