function reverseString(string){
    let secundaryString = ''
    for(let letter = string.length-1; letter >= 0; letter --){
        secundaryString += string[letter]
    }
    return secundaryString
}

export default reverseString