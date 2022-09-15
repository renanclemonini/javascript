function carregar(){
    var msg = document.getElementById('msg')
    var sds = document.getElementById('sds')
    var data = new Date()
    var hora = data.getHours()
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    
    msg.innerHTML = `Agora são ${hora} horas!`
    
    if (hora >= 0 && hora <= 5){
        // BOA MADRUGADA
        img.setAttribute('src','imagens/fotomadrugada.png')
        foto.appendChild(img)
        document.body.style.background = '#272b40'
        sds.innerHTML = 'Boa Madrugada!'
    }else if(hora >= 6 && hora < 12){
        // BOM DIA!
        img.setAttribute('src','imagens/fotomanha.png')
        foto.appendChild(img)
        document.body.style.background = '#afa39c'
        sds.innerHTML = 'Bom dia!'
    }else if (hora >= 12 && hora <= 18){
        // BOA TARDE
        img.setAttribute('src','imagens/fototarde.png')
        foto.appendChild(img)
        document.body.style.background = '#434d3b'
        sds.innerHTML = 'Boa tarde!'
    }else {
        // BOA NOITE
        img.setAttribute('src','imagens/fotonoite.png')
        foto.appendChild(img)
        document.body.style.background = '#011e2c'
        sds.innerHTML = 'Boa noite!'
    }
}