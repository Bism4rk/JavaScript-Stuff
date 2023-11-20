var idade = 76

if (idade < 16){
    console.log(`Você tem ${idade} anos, portanto não pode votar!`)    
}
else if(idade < 18 || idade > 65){
    console.log(`Você tem ${idade} anos, portanto pode votar se quiser!`)
}
else{
    console.log(`Você tem ${idade} anos, portanto seu voto é obrigatório!`)
}
 