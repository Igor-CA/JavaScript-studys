import reverseString from './reverseString'

test('two letters', () => {
    expect(reverseString('ab')).toBe('ba')
})
test('word', () => {
    expect(reverseString('word')).toBe('drow')
})
test('sentence', () => {
    expect(reverseString('Look a sentence')).toBe('ecnetnes a kooL')
})