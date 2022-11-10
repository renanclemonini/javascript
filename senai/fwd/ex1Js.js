function par(n){
    if (n % 2 == 0)
        return ("Par");
    else return ("Impar");
}

function botao1(){
    let x = document.getElementById('escrever').value;
    let y = Number(x);
    document.getElementById('ler').innerHTML = par(x);
}

function limpar(){
    document.getElementById('escrever').value = "";
    document.getElementById('ler').innerHTML = "...";
}

function limparImc(){
    document.getElementById('alt').value = "";
    document.getElementById('pes').value = "";
    document.getElementById('resImc').innerHTML = "IMC";
    document.getElementById('situacaoImc').innerHTML = "Resultado do IMC";
    resImc.style.color = "black";
    resImc.style.fontWeight = "normal";
    situacaoImc.style.color = "black";
    situacaoImc.style.fontWeight = "normal";
}

function imc(){
    var altura = (document.getElementById('alt').value)/100
    var peso = document.getElementById('pes').value

    var imc = (peso / altura ** 2).toFixed(2)
    document.getElementById('resImc').innerHTML = imc;

    if(imc<18.5){
        resImc.style.color = "red";
        resImc.style.fontWeight = "bold";
        situacaoImc.style.color = "red";
        situacaoImc.style.fontWeight = "bold";
        document.getElementById('situacaoImc').innerHTML = 'Você esta com Peso Baixo'
    }else if(imc>=18.5&&imc<=24.9){
        resImc.style.color = "green";
        resImc.style.fontWeight = "bold";
        situacaoImc.style.color = "green";
        situacaoImc.style.fontWeight = "bold";
        document.getElementById('situacaoImc').innerHTML = 'Você esta com Peso Normal';
    }else if(imc>=25&&imc<=29.9){
        resImc.style.color = "green";
        resImc.style.fontWeight = "bold";
        situacaoImc.style.color = "green";
        situacaoImc.style.fontWeight = "bold";
        document.getElementById('situacaoImc').innerHTML = 'Você esta com Sobrepeso';
    }else if(imc>=30&&imc<=34.9){
        resImc.style.color = "orange";
        resImc.style.fontWeight = "bold";
        situacaoImc.style.color = "orange";
        situacaoImc.style.fontWeight = "bold";
        document.getElementById('situacaoImc').innerHTML = 'Você esta com Obesidade Grau 1';
    }else if(imc>=35&&imc<=39.9){
        resImc.style.color = "orange";
        resImc.style.fontWeight = "bold";
        situacaoImc.style.color = "orange";
        situacaoImc.style.fontWeight = "bold";
        document.getElementById('situacaoImc').innerHTML = 'Você esta com Obesidade Grau 2';
    }else if(imc>=40){
        resImc.style.color = "red";
        resImc.style.fontWeight = "bold";
        situacaoImc.style.color = "red";
        situacaoImc.style.fontWeight = "bold";
        document.getElementById('situacaoImc').innerHTML = 'Você esta com Obesidade Grau 3'
    }
}