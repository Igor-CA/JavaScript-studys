function analyzeArray(array){
    let average, length
    let min = array[0]
    let max = array[0]
    length = array.length
    let sum = 0
    for(let i=0; i<length; i++){
        if(array[i] > max)
            max = array[i]
        if(array[i] < min)
            min = array[i]
        sum += array[i]
    }
    average = sum/length

    return { average, min, max, length}
}

export default analyzeArray