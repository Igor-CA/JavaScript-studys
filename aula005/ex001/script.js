var start_input = document.getElementById('inicio')
var end_input = document.getElementById('fim')
var step_input = document.getElementById('passo')
var res = document.getElementById('res')
function contar(){
    var start = Number(start_input.value)
    var end = Number(end_input.value)
    var step = Number(step_input.value)
    if(step == 0){
        alert("Passo 0 logo foi transformado em 1")
        step = 1
    }
    else if(step < 0){
        step *= -1
    }
    if(start > end){
        for(var i=start; i >= end ; i-= step){
            res.innerHTML += `${i} &#x1F449`
        }
    }
    else{
        for(var i=start; i <= end ; i+= step){
            res.innerHTML += `${i} &#x1F449`
        }
    }
    res.innerHTML += `&#x1F3C1`
}
