// 46. Repetição Encapsulamento
// Calculadora de Rendas de Aluguel Imobiliário
// Uma imobiliária quer controlar o recebimento de aluguéis. Crie a classe Imovel com os atributos
// privados codigo, valorAluguel e diasAtraso. Crie um método público
// calcularValorComMulta(): number que aplica uma multa de 2% sobre o valor do aluguel mais R$
// 5,00 por dia de atraso (caso haja atraso). O sistema deve permitir que o corretor digite os dados do
// imóvel e os dias de atraso do inquilino em um menu repetitivo. Após cada digitação, o programa
// exibe o valor atualizado da cobrança. O laço se encerra quando o usuário informar o código 0.

export function questao46POO(): void {
    class Imovel {
        private _codigo: number
        private _valorAluguel: number
        private _diasAtraso: number

        constructor(codigo: number, valorAluguel: number, diasAtraso: number) {
            this._codigo = codigo
            this._valorAluguel = valorAluguel
            this._diasAtraso = diasAtraso
        }

        get codigo(): number {
            return this._codigo
        }

        get valorAluguel(): number {
            return this._valorAluguel
        }

        get diasAtraso(): number {
            return this._diasAtraso
        }

        calcularValorComMulta(): number {

            let valorAtualizado: number = this.valorAluguel

            if (this.diasAtraso > 0) {
                valorAtualizado = this.valorAluguel + (this.valorAluguel * 0.02) + (this.diasAtraso * 5)
            }

            return valorAtualizado
        }
    }

    let codigo: number = Number(prompt(`Insira o código do imóvel ou 0 para encerrar: `))

    while (codigo != 0) {
        let valorAluguel: number = Number(prompt(`Insira o valor do aluguel: `))
        let diasAtraso: number = Number(prompt(`Insira a quantidade de dias de atraso: `))

        let imovel: Imovel = new Imovel(codigo, valorAluguel, diasAtraso)

        let valorAtualizado: number = imovel.calcularValorComMulta()

        alert(`Código do imóvel: ${imovel.codigo} | Valor do aluguel: R$${imovel.valorAluguel.toFixed(2)} | Dias de atraso: ${imovel.diasAtraso} | Valor atualizado: R$${valorAtualizado.toFixed(2)}`)

        codigo = Number(prompt(`Insira o código do próximo imóvel ou 0 para encerrar: `))
    }
}