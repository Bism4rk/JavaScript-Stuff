let valores = [5, 8, 2, 9, 3]
valores.push(7)
console.log(valores)
console.log(`Nosso vetor é o ${valores}!`)
console.log(`Ele tem ${valores.length} posições`)
console.log(`O primeiro valor do vetor é ${valores[0]}`)

for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    
}

let pos = valores.indexOf(valores[2])
console.log(`A chave do ${valores[1]} é ${pos}`)