// 26. Simulador de Contas Bancárias Cooperativas
// A conta possui nome do titular e saldo protegido. Conta Corrente cobra R$ 2,00 por saque e Conta
// Poupança possui rendimento de 1%. O sistema utiliza um menu repetitivo para movimentar a conta.

export function questao26POO(): void {
    class Conta {
        private _nome: string
        private _saldo: number

        constructor(nome: string, saldo: number) {
            this._nome = nome
            this._saldo = saldo
        }

        get nome(): string {
            return this._nome
        }

        get saldo(): number {
            return this._saldo
        }

        depositar(valor: number): void {
            if (valor > 0) {
                this._saldo += valor
            }
            else {
                alert(`Valor inválido!`)
            }
        }

        sacar(valor: number): void {
            if (valor > 0 && valor <= this._saldo) {
                this._saldo -= valor
            }
            else {
                alert(`Saldo insuficiente ou valor inválido!`)
            }
        }
    }

    class ContaCorrente extends Conta {
        sacar(valor: number): void {
            let valorComTaxa: number = valor + 2
            super.sacar(valorComTaxa)
        }
    }

    class ContaPoupanca extends Conta {
        render(): void {
            let rendimento: number = this.saldo * 0.01
            this.depositar(rendimento)
        }
    }

    let nome: string = String(prompt(`Insira o nome do titular: `))
    let saldoInicial: number = Number(prompt(`Insira o saldo inicial: `))
    let tipoConta: number = Number(prompt(`Qual é o tipo da conta? (1 - Conta Corrente | 2 - Conta Poupança): `))

    let conta: Conta

    if (tipoConta == 1) {
        conta = new ContaCorrente(nome, saldoInicial)
    }
    else {
        conta = new ContaPoupanca(nome, saldoInicial)
    }

    let op: number = 0

    while (op != 5) {
        op = Number(prompt(`Escolha uma opção: (1 - Depositar | 2 - Sacar | 3 - Render | 4 - Ver saldo | 5 - Sair): `))

        switch (op) {
            case 1:
                let valorDeposito: number = Number(prompt(`Insira o valor do depósito: `))
                conta.depositar(valorDeposito)
                alert(`Saldo atualizado: R$${conta.saldo.toFixed(2)}`)
                break
            case 2:
                let valorSaque: number = Number(prompt(`Insira o valor do saque: `))
                conta.sacar(valorSaque)
                alert(`Saldo atualizado: R$${conta.saldo.toFixed(2)}`)
                break
            case 3:
                if (conta instanceof ContaPoupanca) {
                    conta.render()
                    alert(`Rendimento aplicado! | Saldo: R$${conta.saldo.toFixed(2)}`)
                }
                else {
                    alert(`Apenas a conta poupança possui rendimento!`)
                }
                break
            case 4:
                alert(`Titular: ${conta.nome} | Saldo: R$${conta.saldo.toFixed(2)}`)
                break
            case 5:
                alert(`Programa encerrado!`)
                break
            default:
                alert(`Insira uma opção válida!`)
                break
        }
    }
}
