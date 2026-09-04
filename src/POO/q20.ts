// 20. Gestão de Pedidos de uma Pizzaria Local
// Para modernizar o atendimento de uma pizzaria, crie um sistema de pedidos. Um pedido base tem o
// número da mesa e o valor dos ingredientes. O Pedido de Entrega (Delivery) herda as propriedades do
// pedido base, mas precisa incluir uma taxa de entrega protegida e o endereço de destino. O software
// deve interagir com o atendente perguntando os detalhes de cada pedido feito na noite. Conforme os
// pedidos são criados, eles entram em um array de controle. Ao fechar o caixa, o sistema percorre a lista
// de pedidos, calcula os valores finais de cada um (aplicando as taxas quando necessário) e exibe o
// // faturamento total do estabelecimento.

export function questao20POO():void{
    class Pedido {
        private numeroMesa: number
        private valorIngredientes: number

        constructor(numeroMesa: number, valorIngredientes: number) {
            this.numeroMesa = numeroMesa
            this.valorIngredientes = valorIngredientes
        }

        calcularValorFinal(): number {
            return this.valorIngredientes
        }

    }

    class PedidoDelivery extends Pedido {
        private taxaEntrega: number
        private enderecoDestino: string

        constructor(numeroMesa: number, valorIngredientes: number, taxaEntrega: number, enderecoDestino: string) {
            super(numeroMesa, valorIngredientes)
            this.taxaEntrega = taxaEntrega
            this.enderecoDestino = enderecoDestino
        }

        calcularValorFinal(): number {
            return super.calcularValorFinal() + this.taxaEntrega
        }

    }

    let pedidos: Pedido[] = []

    let resposta: string = ''

    while (resposta.toLowerCase() !== 'n') {
        let tipoPedido: number = Number(prompt('Digite 1 para pedido na mesa ou 2 para pedido de entrega: '))

        let numeroMesa: number = Number(prompt('Insira o número da mesa: '))
        let valorIngredientes: number = Number(prompt('Insira o valor dos ingredientes: '))

        if (tipoPedido === 2) {
            let taxaEntrega: number = Number(prompt('Insira a taxa de entrega: '))
            let enderecoDestino: string = String(prompt('Insira o endereço de destino: '))
            let newPedidoDelivery: PedidoDelivery = new PedidoDelivery(numeroMesa, valorIngredientes, taxaEntrega, enderecoDestino)
            pedidos.push(newPedidoDelivery)
        } else {
            let newPedido: Pedido = new Pedido(numeroMesa, valorIngredientes)
            pedidos.push(newPedido)
        }

        resposta = String(prompt('Deseja cadastrar outro pedido? (s/n): ')).toLowerCase()
    }

    console.log('Resumo dos pedidos:')
    let faturamentoTotal: number = 0
    for (let pedido of pedidos) {
        let valorFinal: number = pedido.calcularValorFinal()
        faturamentoTotal += valorFinal
        console.log(`Valor final do pedido: ${valorFinal}`)
    }

    console.log(`Faturamento total do estabelecimento: ${faturamentoTotal}`)
}