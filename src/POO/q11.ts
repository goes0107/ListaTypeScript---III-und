// 11. Uma lanchonete quer registrar pedidos dos clientes. O sistema deve solicitar o nome do cliente, o
// nome do pedido e o valor. Crie um método que exiba o resumo do pedido e o valor total.

export function questao11POO():void{
    class Pedido {
        nomeCliente: string
        nomePedido: string
        valor: number

        constructor(nomeCliente: string, nomePedido: string, valor: number) {
            this.nomeCliente = nomeCliente
            this.nomePedido = nomePedido
            this.valor = valor
        }

        exibirResumo(): void {
            console.log(`Cliente: ${this.nomeCliente}, Pedido: ${this.nomePedido}, Valor: ${this.valor}`)
        }

    }

    let pedidos: Pedido[] = []

    let resposta: string = ''

    while (resposta.toLowerCase() !== 'n') {
        let nomeCliente: string = String(prompt('Insira o nome do cliente: '))
        let nomePedido: string = String(prompt('Insira o nome do pedido: '))
        let valor: number = Number(prompt('Insira o valor do pedido: '))

        let newPedido: Pedido = new Pedido(nomeCliente, nomePedido, valor)
        pedidos.push(newPedido)

        resposta = String(prompt('Deseja cadastrar outro pedido? (s/n): ')).toLowerCase()
    }

    console.log('Resumo dos pedidos cadastrados:')
    for (let pedido of pedidos) {
        pedido.exibirResumo()
    }
}