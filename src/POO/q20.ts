// 20. Gestão de Pedidos de uma Pizzaria Local
// Para modernizar o atendimento de uma pizzaria, crie um sistema de pedidos. Um pedido base tem o
// número da mesa e o valor dos ingredientes. O Pedido de Entrega (Delivery) herda as propriedades do
// pedido base, mas precisa incluir uma taxa de entrega protegida e o endereço de destino. O software
// deve interagir com o atendente perguntando os detalhes de cada pedido feito na noite. Conforme os
// pedidos são criados, eles entram em um array de controle. Ao fechar o caixa, o sistema percorre a lista
// de pedidos, calcula os valores finais de cada um (aplicando as taxas quando necessário) e exibe o
// faturamento total do estabelecimento.

export function questao20POO(): void {
    class Pedido {
        private _numeroMesa: number
        private _valorIngredientes: number

        constructor(numeroMesa: number, valorIngredientes: number) {
            this._numeroMesa = numeroMesa
            this._valorIngredientes = valorIngredientes
        }

        get numeroMesa(): number {
            return this._numeroMesa
        }

        get valorIngredientes(): number {
            return this._valorIngredientes
        }

        calcularValorFinal(): number {
            return this.valorIngredientes
        }
    }

    class PedidoDelivery extends Pedido {
        protected _taxaEntrega: number
        private _enderecoDestino: string

        constructor(numeroMesa: number, valorIngredientes: number, taxaEntrega: number, enderecoDestino: string) {
            super(numeroMesa, valorIngredientes)
            this._taxaEntrega = taxaEntrega
            this._enderecoDestino = enderecoDestino
        }

        get taxaEntrega(): number {
            return this._taxaEntrega
        }

        get enderecoDestino(): string {
            return this._enderecoDestino
        }

        calcularValorFinal(): number {
            let valorFinal: number = this.valorIngredientes + this.taxaEntrega
            return valorFinal
        }
    }

    let pedidos: Pedido[] = []
    let op: number = 0

    while (op != 2) {
        let tipoPedido: number = Number(prompt(`Qual é o tipo do pedido? (1 - Pedido na mesa | 2 - Delivery): `))

        switch (tipoPedido) {
            case 1:
                let numeroMesaP: number = Number(prompt(`Insira o número da mesa: `))
                let valorIngredientesP: number = Number(prompt(`Insira o valor dos ingredientes: `))
                let pedido: Pedido = new Pedido(numeroMesaP, valorIngredientesP)
                pedidos.push(pedido)
                break

            case 2:
                let numeroMesaD: number = Number(prompt(`Insira o número da mesa: `))
                let valorIngredientesD: number = Number(prompt(`Insira o valor dos ingredientes: `))
                let taxaEntrega: number = Number(prompt(`Insira o valor da taxa de entrega: `))
                let enderecoDestino: string = String(prompt(`Insira o endereço de destino: `))
                let pedidoDelivery: PedidoDelivery = new PedidoDelivery(numeroMesaD, valorIngredientesD, taxaEntrega, enderecoDestino)
                pedidos.push(pedidoDelivery)
                break

            default:
                alert(`Insira uma opção válida!`)
                break
        }

        op = Number(prompt(`Deseja cadastrar outro pedido? (1 - Sim | 2 - Não): `))
    }

    let faturamentoTotal: number = 0

    for (let pedido of pedidos) {
        let valorFinal: number = pedido.calcularValorFinal()
        faturamentoTotal += valorFinal
        alert(`Mesa: ${pedido.numeroMesa} | Valor final: R$${valorFinal.toFixed(2)}`)
    }

    alert(`Faturamento total do estabelecimento: R$${faturamentoTotal.toFixed(2)}`)
}
