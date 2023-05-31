import capitalize from './capitalize'

test('Only one letter',() => {
    expect(capitalize('a')).toBe('A')
})
test('A word', () => {
    expect(capitalize('word')).toBe('Word')
})
test('A world already capitalized', () => {
    expect(capitalize('Already')).toBe('Already')
})
test('A sentence', () => {
    expect(capitalize('look a sentence')).toBe('Look a sentence')
})
