let num = [5, 5, 3, 1, 8]
num[2] = 6
//num.push(0)
num.sort()

console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
var pos = num.indexOf(6)
if(pos == -1){
   console.log('o valor não foi encontrado') 
}else{
    console.log(`o valor esta na posição ${pos}`)
}