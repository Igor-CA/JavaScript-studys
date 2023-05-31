import analyzeArray from "./analyzeArray"

test('Average simple', () => {
    expect(analyzeArray([3,3,3,3,3,3]).average).toBe(3)
})
test('Normal average', () => {
    expect(analyzeArray([1,2,3,4,5]).average).toBe(3)
})
test('Average with negatives', () => {
    expect(analyzeArray([1,-2,3,-4,5]).average).toBe(0.6)
})
test('Min', () => {
    expect(analyzeArray([5,3,7,2]).min).toBe(2)
})
test('Min with negative', () => {
    expect(analyzeArray([5,3,7,2, -7, 3, -5]).min).toBe(-7)
})
test('Max', () => {
    expect(analyzeArray([5,3,7,2]).max).toBe(7)
})
test('Max with negative', () => {
    expect(analyzeArray([-3, -2, -8, -15, -5]).max).toBe(-2)
})
test('Lenght', () => {
    expect(analyzeArray([10,78,698,78,15,9,4,6,8]).length).toBe(9)
})