import calculator from "./calculator"
let calculatorObject = calculator()
test('add', () => {
    expect(calculatorObject.add(1, 3)).toBe(4)
})
test('add with negatives', () => {
    expect(calculatorObject.add(1, -3)).toBe(-2)
})
test('add with both as negatives', () => {
    expect(calculatorObject.add(-1, -3)).toBe(-4)
})
test('subtract normal', () => {
    expect(calculatorObject.subtract(5, 2)).toBe(3)
})
test('subtract second negative', () => {
    expect(calculatorObject.subtract(5, -2)).toBe(7)
})
test('subtract first negative', () => {
    expect(calculatorObject.subtract(-5, 2)).toBe(-7)
})
test('subtract both negative', () => {
    expect(calculatorObject.subtract(-5, -2)).toBe(-3)
})
test('subtract first smaller', () => {
    expect(calculatorObject.subtract(2, 5)).toBe(-3)
})
test('subtract first smaller and negativa', () => {
    expect(calculatorObject.subtract(-2, 5)).toBe(-7)
})
test('subtract first smaller and both negative', () => {
    expect(calculatorObject.subtract(-2, -5)).toBe(3)
})
test('divide', () => {
    expect(calculatorObject.divide(10, 2)).toBe(5)
})
test('multiply', () => {
    expect(calculatorObject.multiply(10,10)).toBe(100)
})
test('multiply with one negative', () => {
    expect(calculatorObject.multiply(-10,10)).toBe(-100)
})
test('multiply with both negatives', () => {
    expect(calculatorObject.multiply(10,10)).toBe(100)
})
