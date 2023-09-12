function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if(ini.value.lentgh == 0 || fim.value.length == 0 || passo.value.legth == 0){
        res.innerHTML = 'impossivel contar!'
        window.alert('[erro]faltam dados')
    }else{
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('passo invalido')
            p = 1
        }
        if(i < f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f449} `
            }
        }else{
            for(let c = i; c >= f;c -= p){
                 res.innerHTML += `${c} \u{1f449} `
            }
        }
        res.innerHTML += ` \u{1f3c1} `
    }

}