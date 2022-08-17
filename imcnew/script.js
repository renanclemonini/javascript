function calc(){
    var peso = document.getElementById('peso')
    var altura = document.getElementById('altura')
    var imc = peso / altura ** 2

    if (peso.value.length == 0 || altura.value.length == 0){
        alert('[ERRO] Digite o valor no campo determinado')
    } else{
        alert('tudo certo prossiga')
    }







    

}