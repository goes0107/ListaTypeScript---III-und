// 26. Simulador de Contas Bancárias Cooperativas

// Uma cooperativa de crédito local precisa de um protótipo para gerenciar contas de clientes. A conta
// deve ter o nome do titular e o saldo protegido, acessível apenas por métodos de depósito e saque.
// Existem dois tipos de contas: a Conta Corrente (que cobra uma taxa de R$ 2,00 a cada saque) e a
// Conta Poupança (que possui um método de rendimento que acrescenta 1% ao saldo atual). O
// programa deve interagir com o usuário perguntando qual conta ele deseja movimentar, solicitando
// valores para depósito e saque através de um menu repetitivo até que ele decida sair, exibindo o saldo
// atualizado de forma protegida após cada operação.

export function questao26POO():void{
    class Conta {
        nome: string
        private saldo: number

        constructor(nome: string, saldo: number) {
            this.nome = nome
            this.saldo = saldo
        }

        getSaldo(): number {
            return this.saldo
        }

        depositar(valor: number) {
            this.saldo += valor
        }

        sacar(valor: number) {
            if (valor <= this.saldo) {
                this.saldo -= valor
            } else {
                console.log("Saldo insuficiente.")
            }
        }
    }

    class ContaCorrente extends Conta {
        sacar(valor: number) {
            super.sacar(valor + 2)
        }
    }

    class ContaPoupanca extends Conta {
        render() {
            this.depositar(this.getSaldo() * 0.01)
        }
    }

    let nome: string = String(prompt("Nome do titular: "))
    let saldo: number = Number(prompt("Saldo inicial: "))

    let tipoConta: number = Number(prompt('Digite o tipo de tarefa (1-corrente/2-poupança): '))

    let conta: Conta

    if (tipoConta == 1) {
        conta = new ContaCorrente(nome, saldo)
    } else {
        conta = new ContaPoupanca(nome, saldo)
    }

    let opcao = -1

    while (opcao != 0) {
        opcao = Number(prompt("Escolha: 0 - Sair \n 1 - Depositar \n 2 - Sacar \n 3 - Render (apenas poupança) \n 4 - Ver saldo"))

        if (opcao == 1) {
            let valor = Number(prompt("Valor: "))
            conta.depositar(valor)
        }

        if (opcao == 2) {
            let valor = Number(prompt("Valor: "))
            conta.sacar(valor)
        }

        if (opcao == 3) {
            if (conta instanceof ContaPoupanca) {
                conta.render()
            } else {
                console.log("Apenas conta poupança possui rendimento.")
            }
        }

        if (opcao == 4) {
            console.log("Saldo: R$", conta.getSaldo().toFixed(2))
        }
    }
}