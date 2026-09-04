// 9. Implemente uma função chamada gerarIntervaloFiltrado que receba dois parâmetros numéricos:
// inicio e fim. A função deve seguir os seguintes requisitos:
//  Antes de iniciar o laço, verifique se o valor de inicio é menor ou igual ao valor de fim. Caso não
// seja, exiba uma mensagem de erro ou inverta os valores para garantir que o intervalo seja válido.
//  Utilize uma estrutura de repetição (for ou while) para percorrer todos os números inteiros
// contidos nesse intervalo (inclusive o início e o fim).
//  Durante a iteração, armazene todos os números do intervalo em um array.
//  Após preencher o array, utilize um novo laço de repetição (ou um método de array) para percorrer
// a lista criada.
//  Imprima no console apenas os números que são múltiplos e divisores da sua idade.
//  Ao final, exiba a quantidade total de números que foram impressos.

export function questao9array(): void {
    function gerarIntervaloFiltrado(inicio: number, fim: number): void {
        if (inicio > fim) {
            console.log("Valor de início é maior que o valor de fim. Invertendo os valores.")
            let temp = inicio
            inicio = fim
            fim = temp
        }

        let numeros: number[] = []
        for (let i = inicio; i <= fim; i++) {
            numeros.push(i)
        }

        let idade: number = Number(prompt("Digite sua idade:"))
        let numerosFiltrados: number[] = numeros.filter(num => num % idade === 0 && idade % num === 0)
        console.log(`Números múltiplos e divisores da sua idade: ${numerosFiltrados}`)
        console.log(`Quantidade total de números impressos: ${numerosFiltrados.length}`)
    }

    let inicio: number = Number(prompt("Digite o valor de início do intervalo:"))
    let fim: number = Number(prompt("Digite o valor de fim do intervalo:"))
    gerarIntervaloFiltrado(inicio, fim)
}