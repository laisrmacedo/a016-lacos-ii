// Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:

// **Utilize o for...of para resolver**

const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

let i = 0

for(let valor of maioresPaises){
    i++
    console.log(`${i} - ${valor}`)
}

