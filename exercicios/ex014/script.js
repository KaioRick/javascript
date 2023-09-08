function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 18
    msg.innerHTML = `agora são ${hora} horas.`
    if (hora >=0 && hora < 12){
        img.src = 'Design_sem_nome__5_-removebg-preview.png'
        document.body.style.background = '#778BA6'
    //BOM DIA!
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde-removebg-preview.png'
        document.body.style.background = '#BFA38A'
    //BOA TARDE!
    }else{
        img.src = "noite-removebg-preview.png"
        document.body.style.background = '#032340'
        //boa noite
    }
}