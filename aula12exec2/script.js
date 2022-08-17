function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novmente!')
        } else{
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id','foto')
            if (fsex[0].checked){
                genero = 'Homem'
                if (idade >= 0 && idade < 10){
                    // criança
                    img.setAttribute('src', 'imagens/babyh.png')
                } else if (idade < 30){
                    // adolescente
                    img.setAttribute('src', 'imagens/adolescenteh.png')
                } else if (idade < 50){
                    // adulto
                    img.setAttribute('src', 'imagens/adultoh.png')
                } else {
                    // idoso
                    img.setAttribute('src', 'imagens/idosoh.png')
                }
            } else {
                genero = 'Mulher'
                if (idade >= 0 && idade < 10){
                    // criança
                    img.setAttribute('src', 'imagens/babym.png')
                } else if (idade < 30){
                    // adolescente
                    img.setAttribute('src', 'imagens/adolescentem.png')
                } else if (idade < 50){
                    // adulto
                    img.setAttribute('src', 'imagens/adultom.png')
                } else {
                    // idoso
                    img.setAttribute('src', 'imagens/idosom.png')
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
    }
    
}