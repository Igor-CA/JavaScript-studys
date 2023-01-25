
function contar(){
    var number_input = document.getElementById('numero')
    var tabuada = document.getElementById('tabuada')   
    var number = Number(number_input.value)
    tabuada.innerHTML = ''
    for(var i=1; i <= 10 ; i++){
        var item = document.createElement('option')
        item.text = `${number} x ${i} = ${number*i}`
        tabuada.appendChild(item)
    }
}
