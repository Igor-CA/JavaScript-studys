import caesarCipher from "./caesarCipher"
test('simple two letters', () => {
    expect(caesarCipher('ab', 1)).toBe('bc')
})
test('full alphabet', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe('bcdefghijklmnopqrstuvwxyza')
})
test('Actual word', () => {
    expect(caesarCipher('word', 1)).toBe('xpse')
})
test('backwards way', () => {
    expect(caesarCipher('ab', -1)).toBe('za')
})
test('bigger range', () => {
    expect(caesarCipher('oh my', 10)).toBe('yr wi')
})
test('backwards bigger range', () => {
    expect(caesarCipher('oh my', -10)).toBe('ex co')
})
test('Upper case letters', () => {
    expect(caesarCipher('AB', 1)).toBe('BC')
})
test('dots, commas and shit', () => {
    expect(caesarCipher('oh, my. GOD!', 10)).toBe('yr, wi. QYN!')
})
