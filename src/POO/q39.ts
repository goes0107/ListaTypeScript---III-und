// 39. Abstração Herança Polimorfismo Repetição Encapsulamento
// Processador de Pedidos de Restaurante (Drive-Thru)
// Para agilizar o atendimento de um Drive-Thru, crie um modelo de pedidos. A classe abstrata Pedido
// possui o número do pedido e o valor base dos itens privados, além do método abstrato
// calcularTotal(): number. 
// O PedidoLocal adiciona uma taxa de serviço de 10%. O

// PedidoDriveThru adiciona uma taxa fixa de embalagem especial de R$ 3,00. 

// O sistema interativo deve perguntar repetidamente ao caixa os dados dos pedidos atendidos. 
// A cada pedido inserido, o programa invoca o cálculo total e acumula o valor em uma 
// variável de faturamento bruto, exibindo na tela o resumo do pedido recém-calculado até que o 
// usuário opte por fechar o caixa.

export function questao39POO(): void {
    abstract class Pedido {
        private _numeroPedido: number
        private _valorBase: number

        constructor(numeroPedido: number, valorBase: number) {
            this._numeroPedido = numeroPedido
            this._valorBase = valorBase
        }

        get numeroPedido(): number {
            return this._numeroPedido
        }

        get valorBase(): number {
            return this._valorBase
        }

        abstract calcularTotal(): number
    }


    class PedidoLocal extends Pedido {

        calcularTotal(): number {
            let valorTotal: number = this.valorBase * 1.10
            return valorTotal
        }
    }


    class PedidoDriveThru extends Pedido {
        calcularTotal(): number {
            let valorTotal: number = this.valorBase + 3
            return valorTotal
        }
    }


    let faturamentoBruto: number = 0
    let op: number = 0

    while (op != 2) {
        let tipoPedido: number = Number(prompt(`Qual é o tipo do pedido? (1 - Pedido Local | 2 - Pedido Drive-Thru): `))

        switch (tipoPedido) {
            case 1:
                let numeroPL: number = Number(prompt(`Insira o número do pedido: `))

                let valorPL: number = Number(prompt(`Insira o valor base dos itens: `))

                let pedidoLocal: PedidoLocal = new PedidoLocal(numeroPL, valorPL)

                let totalPL: number = pedidoLocal.calcularTotal()

                faturamentoBruto += totalPL

                alert(`Pedido: ${pedidoLocal.numeroPedido} \n Valor base: R$${pedidoLocal.valorBase.toFixed(2)} \n Valor total: R$${totalPL.toFixed(2)}`)
                break
            case 2:
                let numeroPDT: number = Number(prompt(`Insira o número do pedido: `))

                let valorPDT: number = Number(prompt(`Insira o valor base dos itens: `))

                let pedidoDriveThru: PedidoDriveThru = new PedidoDriveThru(numeroPDT, valorPDT)

                let totalPDT: number = pedidoDriveThru.calcularTotal()

                faturamentoBruto += totalPDT

                alert(`Pedido: ${pedidoDriveThru.numeroPedido} \n Valor base: R$${pedidoDriveThru.valorBase.toFixed(2)} \n Valor total: R$${totalPDT.toFixed(2)}`)
                break
            default:
                alert(`Insira uma opção válida!`)
                break
        }

        op = Number(prompt(`Deseja registrar outro pedido? (1 - Sim | 2 - Fechar caixa): `))
    }

    alert(`Caixa fechado! \n Faturamento bruto: R$${faturamentoBruto.toFixed(2)}`)
}