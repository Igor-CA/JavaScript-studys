const calculator = () => {
    const add = (valOne, valTwo) => {
        return valOne + valTwo
    }
    const subtract = (valOne, valTwo) => {
        return valOne - valTwo
    }
    const divide = (valOne, valTwo) => {
        return valOne/valTwo
    }
    const multiply = (valOne, valTwo) => {
        return valOne*valTwo
    }
    return { add, subtract, divide, multiply }
}

export default calculator