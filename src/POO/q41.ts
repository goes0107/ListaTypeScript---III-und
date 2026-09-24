// 41. Abstração Herança Polimorfismo Repetição Encapsulamento
// Gerenciador de Encomendas de Correios
// Um centro de distribuição precisa calcular o frete de suas entregas. A classe Encomenda possui o peso
// em kg e a cidade de destino privados. A classe EncomendaPadrão cobra R$ 10,00 por kg. A classe
// EncomendaExpressa cobra R$ 20,00 por kg e garante entrega em até 24 horas. O sistema solicita em
// um laço de repetição os dados das encomendas registradas no balcão. O programa processa cada uma,
// calcula o valor do frete utilizando o método sobrescrito nas subclasses e exibe o valor acumulado
// cobrado em taxas de frete expresso durante o dia.

export function questao41POO(): void {
    class Encomenda {
        private _peso: number
        private _cidadeDestino: string

        constructor(peso: number, cidadeDestino: string) {
            this._peso = peso
            this._cidadeDestino = cidadeDestino
        }

        get peso(): number {
            return this._peso
        }

        get cidadeDestino(): string {
            return this._cidadeDestino
        }

        calcularFrete(): number {
            return 0
        }
    }

    class EncomendaPadrao extends Encomenda {
        calcularFrete(): number {
            let valorFrete: number = this.peso * 10
            return valorFrete
        }
    }

    class EncomendaExpressa extends Encomenda {
        calcularFrete(): number {
            let valorFrete: number = this.peso * 20
            return valorFrete
        }
    }

    let op: number = 0
    let totalFreteExpresso: number = 0

    while (op != 2) {
        let tipoEncomenda: number = Number(prompt(`Qual é o tipo da encomenda? (1 - Encomenda padrão | 2 - Encomenda expressa): `))

        switch (tipoEncomenda) {
            case 1:
                let pesoEP: number = Number(prompt(`Insira o peso da encomenda em kg: `))
                let cidadeEP: string = String(prompt(`Insira a cidade de destino: `))
                
                let encomendaPadrao: EncomendaPadrao = new EncomendaPadrao(pesoEP, cidadeEP)
                let freteEP: number = encomendaPadrao.calcularFrete()

                alert(`Cidade de destino: ${encomendaPadrao.cidadeDestino} | Peso: ${encomendaPadrao.peso} kg | Valor do frete: R$${freteEP.toFixed(2)}`)
                break
            case 2:
                let pesoEE: number = Number(prompt(`Insira o peso da encomenda em kg: `))
                let cidadeEE: string = String(prompt(`Insira a cidade de destino: `))
                
                let encomendaExpressa: EncomendaExpressa = new EncomendaExpressa(pesoEE, cidadeEE)
                let freteEE: number = encomendaExpressa.calcularFrete()

                totalFreteExpresso += freteEE

                alert(`Cidade de destino: ${encomendaExpressa.cidadeDestino} | Peso: ${encomendaExpressa.peso} kg | Valor do frete: R$${freteEE.toFixed(2)} | Entrega: até 24 horas`)
                break
            default:
                alert(`Insira uma opção válida!`)
                break
        }

        op = Number(prompt(`Deseja registrar outra encomenda? (1 - Sim | 2 - Não): `))

    }

    alert(`Valor acumulado em fretes expressos durante o dia: R$${totalFreteExpresso.toFixed(2)}`)
}