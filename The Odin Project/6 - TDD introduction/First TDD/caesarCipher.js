function caesarCipher(string, range){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let upperCaseAlphabet = alphabet.toUpperCase()

    const returnCipherLetter = (char, array) => {
        for(let letterIndex=0; letterIndex < array.length; letterIndex++){
            if(char === array[letterIndex]){
                if(range < 0)
                    range += array.length
                let index = (letterIndex + range) % (array.length)
                return array[index]
            }
        }
    }

    let newString = ''
    
    for(let letter=0; letter<string.length; letter++){
        let char = string.charAt(letter)
        if(alphabet.includes(char)){
            newString += returnCipherLetter(char, alphabet)
        }else if(upperCaseAlphabet.includes(char)){
            newString += returnCipherLetter(char, upperCaseAlphabet)
        }
        else{
            newString += char
        }
    }

    return newString
}
export default caesarCipher