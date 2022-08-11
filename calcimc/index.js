function calculate(){
    var altura = (document.getElementById('altura').value)/100
    var peso = document.getElementById('peso').value

    var imc = (peso / altura ** 2).toFixed(2)
    var text = ""

    if(imc<18.5){
        text=(`Você esta com Peso Baixo, IMC = ${imc}`)
    }else if(imc>=18.5&&imc<=24.9){
        text=(`Você esta com Peso Normal, IMC = ${imc}`)
    }else if(imc>=25&&imc<=29.9){
        text=(`Você esta com Sobrepeso, IMC = ${imc}`)
    }else if(imc>=30&&imc<=34.9){
        text=(`Você esta com Obesidade Grau 1, IMC = ${imc}`)
    }else if(imc>=35&&imc<=39.9){
        text=(`Você esta com Obesidade Grau 2, IMC = ${imc}`)
    }else if(imc>=40){
        text=(`Você esta com Obesidade Grau 3, IMC = ${imc}`)
    }
    document.getElementById('text_area').innerText=text
}