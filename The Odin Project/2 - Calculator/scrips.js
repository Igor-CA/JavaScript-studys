let dotIn = false
let numberOne = null
let numberTwo = null
let operator = null

let numbersInput = document.querySelectorAll(".number")

numbersInput.forEach((number)=>{
    number.addEventListener('click', ()=>{
        let display = document.querySelector('#display')
        if(display.innerText.length < 9){ 
            if(number.value === '.' && !dotIn){
                dotIn = true
                display.innerText += number.value 
            }
            if(number.value !== '.'){ display.innerText += number.value }
        }
    })
})

let operationsInput = document.querySelectorAll(".operators")

operationsInput.forEach((operation) => {
    operation.addEventListener('click', () => {
        let display = document.querySelector('#display')
        if(numberOne === null){ numberOne = +display.innerText }
        else{ numberTwo = +display.innerText }
        operator = operation.value
        result = realizeOperation(numberOne, numberTwo, operator)
        if(numberTwo === null){
            numberOne = result
            numberTwo = null
        } 
        display.innerText = result
    })
})

function add(number1, number2){ return number1+number2 }
function subtract(number1, number2){ return number2-number1 }
function multiply(number1, number2){ return number1*number2 }
function divide(number1, number2){ 
    if(number2 === 0) return "can't divide by 0"
    return number1/number2 
}

function realizeOperation(number1, number2, operator){
    if(operator === '+'){ return add(number1, number2)}
    else if(operator === '-'){ return subtract(number1, number2)}
    else if(operator === '*'){ return multiply(number1, number2)}
    else { return divide(number1, number2) }
}