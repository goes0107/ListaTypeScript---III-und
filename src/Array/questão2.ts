// 2. Faça um programa que leia um número indeterminado de notas ou -1 para encerrar. Após esta
// entrada de dados, faça o seguinte:
// a) Mostre a quantidade de notas que foram lidas.
// b) Exiba todas as notas na ordem em que foram informadas.
// c) Exiba todas as notas na ordem inversa à que foram informadas.
// d) Calcule e mostre a soma das notas.
// e) Calcule e mostre a média das notas.
// f) Calcule e mostre a quantidade de notas acima da média calculada.

export function questao2array():void{
    let notas: number[] = []
    let notasPrompt: number = Number(prompt(`Insira uma nota ou -1 para encerrar: `))

    while (notasPrompt != -1) {
        notas.push(notasPrompt)
        notasPrompt = Number(prompt(`Insira uma nota ou -1 para encerrar: `))
    }
    
    let totalNotas: number = notas.length
    let notasInversa: any = notas.slice().reverse()
    let somaNotas: number = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
    let mediaNotas: number = somaNotas / totalNotas
    let acimaMediaNotas: number = 0

    for (let i = 0; i < notas.length; i++){
        if (notas[i] > mediaNotas){
            acimaMediaNotas++
        }
    }

    console.log(`Quantidade total de notas lidas: ${totalNotas}`)
    console.log(`Notas na ordem informada: ${notas}`)
    console.log(`Notas na ordem inversa: ${notasInversa}`)
    console.log(`Soma das notas: ${somaNotas.toFixed(2)}`)
    console.log(`Média das notas: ${mediaNotas.toFixed(2)}`)
    console.log(`Quantidade de notas acima da média: ${acimaMediaNotas}`)
}

 