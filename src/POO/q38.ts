// 38. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Plataforma de Vendas e Cashback
// Uma loja virtual quer implementar um programa de fidelidade. 

// A classe base Cliente possui nome e
// e-mail privados. 

// A classe ClientePadrao acumula 1% do valor das compras como saldo de
// cashback. 

// A classe ClienteVIP acumula 5% de cashback e possui frete grátis garantido. Ambas as
// classes possuem o método processarCompra(valor: number). 

// O sistema deve interagir com o atendente para registrar as compras do dia, 
// solicitando o tipo de cliente e o valor gasto. Tudo deve ser
// armazenado em uma lista de clientes. Ao encerrar o programa, a lista é percorrida para exibir o saldo
// final de cashback acumulado por cada cliente e o valor total de cashback concedido pela loja.

export function questao38POO(): void{
    class Cliente{
        private _nome: string
        private _email: string
        saldoCashback = 0

        constructor(nome: string, email: string){
            this._nome = nome
            this._email = email
        }

        get nome(){
            return this._nome
        }

        get email(){
            return this._email
        }

        processarCompra(valor: number): void{}

        exibirSaldo(): void{}
    }

    class ClientePadrao extends Cliente{
        processarCompra(valor: number): void {
            let valorCashback: number = valor * 0.01
            this.saldoCashback += valorCashback
        }

        exibirSaldo(): void {
            alert(`Nome: ${this.nome} \n Email: ${this.email} \n Saldo de cashback: R$${this.saldoCashback} \n Frete grátis: Não garantido`)
        }
    }

    class ClienteVIP extends Cliente{
        processarCompra(valor: number): void {
            let valorCashback: number = valor * 0.05
            this.saldoCashback += valorCashback
        }

        exibirSaldo(): void {
            alert(`Nome: ${this.nome} \n Email: ${this.email} \n Saldo de cashback: R$${this.saldoCashback} \n Frete grátis: garantido`)
        }
    }

    let lClientes: Cliente [] = []

    let op: number = 0

    while (op != 2){
        let tipoCliente: number = Number(prompt(`Qual é o tipo de cliente? (1 - Cliente padrão | 2 - Cliente VIP): `))

        switch (tipoCliente) {
            case 1:
                let nomeCP: string = String(prompt(`Insira o nome do cliente: `))
                let emailCP: string = String(prompt(`Insira o email do cliente: `))
                let valorCP: number = Number(prompt(`Insira o valor total da compra: `))

                let clientePadrao: ClientePadrao = new ClientePadrao(nomeCP, emailCP)
                clientePadrao.processarCompra(valorCP)

                lClientes.push(clientePadrao)
                break
            case 2:
                let nomeCVIP: string = String(prompt(`Insira o nome do cliente: `))
                let emailCVIP: string = String(prompt(`Insira o email do cliente: `))
                let valorCVIP: number = Number(prompt(`Insira o valor total da compra: `))

                let clienteVIP: ClienteVIP = new ClienteVIP(nomeCVIP, emailCVIP)
                clienteVIP.processarCompra(valorCVIP)

                lClientes.push(clienteVIP)
                break
            default:
                alert(`Insira uma opção válida!!`)
                break
        }

        op = Number(prompt(`Deseja adcionar mais algum consumidor? (1 - Sim | 2 - Não): `))
    }

    let totalCashback:number = 0
    for (let clientes of lClientes){
        clientes.exibirSaldo()

        totalCashback += clientes.saldoCashback
    }

    alert(`Total de cashback concedido pela loja: R$${totalCashback}`)
}