value = function (array, value){
    const contains = array.some( arrayValue => {return JSON.stringify(arrayValue) == JSON.stringify(value)})
    if(!(contains))
        return false
    return true
}

export default value