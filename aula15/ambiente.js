let valores = [8, 1, 5, 7, 2, 4, 9, 6]

/*for(let pos=0; pos < valores.length; pos++){
console.log(`O vetor original é ${valores}`)

    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}

valores.sort()
console.log(`O vetor array em ordem crescente é ${valores}`)*/

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}

console.log(valores.indexOf(9))
console.log(valores.indexOf(3))


