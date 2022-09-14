// Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

// **Utilize o for...in para resolver**

let numero = Number(prompt("Digite um número"))
let arrayResultados = []

for(let i=1; i<=10 ; i++){
    arrayResultados.push(numero*i)
}

for(let i in arrayResultados){
    console.log(`${numero} x ${i} = ${arrayResultados[i]}`)
}



