function calc(){
    var peso = document.getElementById('pes').value
    var altura = (document.getElementById('alt').value)/100
    var imc = (peso / altura ** 2).toFixed(2)
    var txt = ""

    if (peso.length == 0 || altura.length == 0){
        alert('[ERRO] Digite o valor no campo determinado')
    } else {
        res.style.padding = '10px'
        res.innerHTML = `Seu IMC é igual a ${imc}`
    } 
    
    if (imc < 18.5){
        txt = "Sua condição esta abaixo do peso ideal"
    }
    
    document.getElementById('cond').innerHTML=txt

}