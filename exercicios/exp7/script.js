var num = document.querySelector('input#txtn')
var sel = document.getElementById('selval')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} foi adicionado!`
        sel.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor invalido ou ja endontrado na lista.')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
       var tot = valores.length
       var maior = valores[0]
       var menor = valores[0]
       var soma = 0
       var media = 0
       
       for(var pos in valores){
        soma += valores[pos]
        if(valores[pos] > maior)
            maior  = valores [pos]
        if(valores[pos] < menor)
            menor = valores[pos]
       }
       
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos o valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}