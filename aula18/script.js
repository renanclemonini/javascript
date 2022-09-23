let num = document.getElementById('fnum')
let lis = document.getElementById('visor')
let res = document.getElementById('res')
let valores = []

function ehNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function taNaLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function add(){
    if (ehNumero(num.value) && !taNaLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lis.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor Inválido ou já esta na lista')
    }
    num.value = ''
    num.focus()
}

function finish(){
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            media = soma / tot
            arr = media.toFixed(2)
            if (valores[pos] > maior){
                maior = valores[pos]
            } else if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        

        res.innerHTML = ''
        res.innerText += `Ao todo temos ${tot} números cadastrados.`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é igual a ${arr}.</p>`

    }
}
    
