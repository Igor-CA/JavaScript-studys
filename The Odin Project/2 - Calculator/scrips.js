let dotIn = false
let numberOne = null
let numberTwo = null
let operator = null
let isResetable = true

let numbersInput = document.querySelectorAll(".number")

numbersInput.forEach((number)=>{
    number.addEventListener('click', ()=>{
        let display = document.querySelector('#display')
        if(isResetable){
            isResetable = false
            display.innerText = null
            dotIn = false
        }
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
        isResetable = true
        if(numberOne === null){
            numberOne = (+display.innerText)
        }else{
            doCalculations()
        }
        operator = operation.value
    })
})

function doCalculations(){
    let display = document.querySelector('#display')
    numberTwo = (+display.innerText)
    let value = realizeOperation(numberOne, numberTwo, operator)
    numberOne = value
    display.innerText = value
}

let equalsBtn = document.querySelector('#equal')

equalsBtn.addEventListener('click', doCalculations)

let reset = document.querySelector('#ac')

reset.addEventListener('click', () => {
    let display = document.querySelector('#display')
    display.innerText = null
    numberOne = null
    numberTwo = null
    operator = null
})

let revert = document.querySelector('#invert')

revert.addEventListener('click', ()=>{
    let display = document.querySelector('#display')
    let value = numberTwo = (+display.innerText)
    value *= (-1)
    display.innerHTML = value
})

function add(number1, number2){ return number1+number2 }
function subtract(number1, number2){ return number1-number2 }
function multiply(number1, number2){ return number1*number2 }
function divide(number1, number2){ 
    if(number2 === 0) return "can't divide by 0"
    return number1/number2 
}

function realizeOperation(number1, number2, operator){
    if(operator === '+'){ return add(number1, number2)}
    else if(operator === '-'){ return subtract(number1, number2)}
    else if(operator === '*'){ return multiply(number1, number2)}
    else if(operator === '/'){ return divide(number1, number2) }
}