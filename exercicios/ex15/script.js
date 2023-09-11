function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'bebeMenino-removebg-preview.png')
                //criança
            } else if(idade < 21){
                img.setAttribute('src', 'jovemHom-removebg-preview.png')
                //adolescente
            }else if(idade < 50){
                img.setAttribute('src', 'adultomen2-removebg-preview.png')
                //adulto
            }else{
                img.setAttribute('src', 'bebeMenino_1-removebg-preview.png')
                //idoso
            }

        } 
        else if(fsex[1].checked){
            genero = "Mulher"
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'bebeMenin-removebg-preview.png')
                //criança
            } else if(idade < 21){
                img.setAttribute('src', 'jovemMulh-removebg-preview.png')
                //adolescente
            }else if(idade < 50){
                img.setAttribute('src', 'adultowomen-removebg-preview.png')
                //adulta
            }else{
                img.setAttribute('src', 'idosa-removebg-preview.png')
                //idosa
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}