let information = document.getElementById('information')
let input_box = document.getElementById('number')
let select_box = document.getElementById('selection')
let number_list = []

function in_list(number){
    if(number_list.indexOf(number) != -1)
        return true
    else
        return
}

function add(){
    if(input_box.value.length == 0){
        window.alert("Indique um número")
    }
    else{
        let new_number = Number(input_box.value)
        if(new_number < 1 || new_number > 100){
            window.alert("Número inválido. O número deve estar entre 1 e 100")
        }
        else if(in_list(new_number)){
            window.alert("Número já adicionado")
        }
        else{
            information.innerHTML = ''
            number_list.push(new_number)
            var item = document.createElement('option')
            item.text = `Valor ${new_number} adicionado`
            select_box.appendChild(item)
        }
        input_box.value = null
        input_box.focus()


    }
}

function show_data(){

    if(number_list.length == 0)
        window.alert("Adicione números antes de finalizar")
    else{
        let biggest = number_list[0]
        let smallest = number_list[0]
        let length = number_list.length
        let soma = 0
        for(element in number_list){
            if(number_list[element] > biggest)
                biggest = number_list[element]
            if(number_list[element] < smallest)
                smallest = number_list[element]
            soma += number_list[element]
        }
        let media = soma/length
        console.log(number_list)
        information.innerHTML = ''
        information.innerHTML += `Ao todo temos ${length} números cadastrados <br>`
        information.innerHTML += `O maior valor foi ${smallest}  <br>`
        information.innerHTML += `O menor valor foi ${biggest}<br>`
        information.innerHTML += `A soma de todos os valores foi ${soma} <br>`
        information.innerHTML += `A media de todos os valores foi ${media}`
    }
    

}