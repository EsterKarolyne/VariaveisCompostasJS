let num = window.document.querySelector('input#fnum')
let lista = window.document.querySelector('select#flista')
let res = window.document.querySelector('div#res')
let valores = []

// lista []
// objeto {}
// parametro ()

function isNumero(numero){
    if(Number(numero) >= 1 && Number(numero) <= 100 ){
        return true
    }else{
        return false
    }
}

function inLista(numero, lista){
    if(lista.indexOf(Number(numero)) != -1){
        return true
    } else{
        return false
    }

}


function adicionar(){
    //tem que ser numero && !(nao)esta na lista;
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('valor inválido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()

} 

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione um valor antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores [pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }

}

