// 12. Uma locadora quer controlar os carros disponíveis. O sistema deve solicitar o modelo do carro, o
// valor da diária e a quantidade de dias que o cliente deseja alugar. Crie um método que calcule o valor
// total do aluguel e exiba o resumo da locação. Por fim, o sistema deve perguntar se deseja fazer uma
// nova locação.

export function questao12POO():void{
    class Carro {
        modelo: string
        valorDiaria: number
        quantidadeDias: number

        constructor(modelo: string, valorDiaria: number, quantidadeDias: number) {
            this.modelo = modelo
            this.valorDiaria = valorDiaria
            this.quantidadeDias = quantidadeDias
        }

        calcularValorTotal(): number {
            return this.valorDiaria * this.quantidadeDias
        }

        exibirResumo(): void {
            let valorTotal: number = this.calcularValorTotal()
            console.log(`Modelo: ${this.modelo}, Valor da diária: ${this.valorDiaria}, Quantidade de dias: ${this.quantidadeDias}, Valor total do aluguel: ${valorTotal}`)
        }

    }

    let resposta: string = ''

    while (resposta.toLowerCase() !== 'n') {
        let modelo: string = String(prompt('Insira o modelo do carro: '))
        let valorDiaria: number = Number(prompt('Insira o valor da diária: '))
        let quantidadeDias: number = Number(prompt('Insira a quantidade de dias que deseja alugar: '))

        let newCarro: Carro = new Carro(modelo, valorDiaria, quantidadeDias)
        newCarro.exibirResumo()

        resposta = String(prompt('Deseja fazer uma nova locação? (s/n): ')).toLowerCase()
    }
}