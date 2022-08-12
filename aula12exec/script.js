function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var sds = document.getElementById('sds')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas!`
    

    if (hora >= 0 && hora <= 5){
        // BOA MADRUGADA
        img.src = 'imagens/fotomadrugada.png'
        document.body.style.background = '#272b40'
        sds.innerHTML = 'Boa Madrugada!'
    }else if(hora >= 6 && hora < 12){
        // BOM DIA!
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#afa39c'
        sds.innerHTML = 'Bom dia!'
    }else if (hora >= 12 && hora <= 18){
        // BOA TARDE
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#434d3b'
        sds.innerHTML = 'Boa tarde!'
    }else {
        // BOA NOITE
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#011e2c'
        sds.innerHTML = 'Boa noite!'
    }
}