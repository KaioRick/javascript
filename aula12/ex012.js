/*  Hora real
var agora = new Date()
var hora = agora.getHours()*/
var hora = 1
console.log(`agora são exatmente ${hora} horas.`)
if (hora < 12){
    console.log('Bom dia!')
} else if(hora <= 17){
    console.log('Boa tarde!')
} else if(hora >= 18){
    console.log('Boa Noite!')
}