function calc(){
    var peso = document.getElementById('pes').value
    var altura = (document.getElementById('alt').value)/100
    var imc = (peso / altura ** 2).toFixed(2)
    var txt = ""

    if (peso.length == 0 || altura.length == 0){
        res.style.paddingLeft = '25px'
        res.style.maxWidth = '340px'
        res.style.textDecoration = 'underline'
        res.style.fontWeight = 'bold'
        res.style.color = 'red'
        res.style.paddingTop = '20px'
        res.innerHTML = "[ERRO] Digite seu peso e altura!"
    } else if (imc < 18.5){
        res.style.paddingLeft = '25px'
        res.style.maxWidth = '340px'
        res.style.textDecoration = 'underline'
        res.style.fontWeight = 'bold'
        res.style.color = 'black'
        res.style.paddingTop = '20px'
        res.innerHTML = `Seu IMC é igual a ${imc} e sua condição esta abaixo do peso ideal.`
    } else if (imc < 24.9){
        res.style.paddingLeft = '25px'
        res.style.maxWidth = '340px'
        res.style.textDecoration = 'underline'
        res.style.fontWeight = 'bold'
        res.style.color = 'black'
        res.style.paddingTop = '20px'
        res.innerHTML = `Seu IMC é igual a ${imc} e sua condição esta com peso ideal.`
    } else if (imc < 29.9){
        res.style.paddingLeft = '25px'
        res.style.maxWidth = '340px'
        res.style.textDecoration = 'underline'
        res.style.fontWeight = 'bold'
        res.style.color = 'black'
        res.style.paddingTop = '20px'
        res.innerHTML = `Seu IMC é igual a ${imc} e sua condição esta acima do peso ideal - sobrepeso!`
    } else if (imc < 34.99){
        res.style.paddingLeft = '25px'
        res.style.maxWidth = '340px'
        res.style.textDecoration = 'underline'
        res.style.fontWeight = 'bold'
        res.style.color = 'black'
        res.style.paddingTop = '20px'
        res.innerHTML = `Seu IMC é igual a ${imc} e sua condição esta acima do peso ideal - obesidade grau 1!`
    } else if (imc < 39.99){
        res.style.paddingLeft = '25px'
        res.style.maxWidth = '340px'
        res.style.textDecoration = 'underline'
        res.style.fontWeight = 'bold'
        res.style.color = 'black'
        res.style.paddingTop = '20px'
        res.innerHTML = `Seu IMC é igual a ${imc} e sua condição esta acima do peso ideal - obesidade grau 2!"`
    } else {
        res.style.paddingLeft = '25px'
        res.style.maxWidth = '340px'
        res.style.textDecoration = 'underline'
        res.style.fontWeight = 'bold'
        res.style.color = 'black'
        res.style.paddingTop = '20px'
        res.innerHTML = `Seu IMC é igual a ${imc} e sua condição esta acima do peso ideal - obesidade grau 3!"`
    }
        
}