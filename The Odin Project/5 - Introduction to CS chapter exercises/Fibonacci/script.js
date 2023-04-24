function fibonacci(number){
    if(number == 1) return 0
    if(number == 2) return 1
    else return (fibonacci(number-1) + fibonacci(number-2))
}

function fibonacciList(len){
    let list = []
    for(let i=0; i<len; i++){
        list.push(fibonacci(i+1))
    }
    console.log(list)
}

fibonacciList(10)