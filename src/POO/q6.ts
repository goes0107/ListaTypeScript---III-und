// 6. Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir
// os seguintes atributos: número da conta, nome do correntista e saldo. Os métodos são os seguintes:
// alterarNome, depósito e saque. No construtor, saldo é opcional, com valor default zero e os demais
// atributos são obrigatórios. Por fim, faça com que esse sistema interaja com o usuário permitido que
// ele, depois de cadastrar as suas informações, possa usar os métodos disponíveis.

export function questao6POO():void{
    class ContaCorrente {
        numeroConta: string
        nomeCorrentista: string
        saldo: number

        constructor(numeroConta: string, nomeCorrentista: string, saldo: number = 0) {
            this.numeroConta = numeroConta
            this.nomeCorrentista = nomeCorrentista
            this.saldo = saldo
        }

        alterarNome(nome: string): void {
            this.nomeCorrentista = nome
        }

        deposito(valor: number): void {
            this.saldo += valor
        }

        saque(valor: number): void {
            if (this.saldo >= valor) {
                this.saldo -= valor
            } else {
                console.log("Saldo insuficiente.")
            }
        }
    }

    let numeroConta: string = String(prompt("Digite o número da conta:"))
    let nomeCorrentista: string = String(prompt("Digite o nome do correntista:"))
    let saldo: number = Number(prompt("Digite o saldo inicial (opcional):"))

    let conta = new ContaCorrente(numeroConta, nomeCorrentista, saldo)

    let op: number = Number(prompt(`Escolha a opção desejada: \n 1 - Alterar nome do correntista \n 2 - Depósito \n 3 - Saque`))

    switch (op) {
        case 1:
            let novoNome: string = String(prompt("Digite o novo nome do correntista:"))
            conta.alterarNome(novoNome)
            break;
        case 2:
            let valorDeposito: number = Number(prompt("Digite o valor do depósito:"))
            conta.deposito(valorDeposito)
            break;
        case 3:
            let valorSaque: number = Number(prompt("Digite o valor do saque:"))
            conta.saque(valorSaque)
            break;
    }

    console.log(`Número da conta: ${conta.numeroConta}`)
    console.log(`Nome do correntista: ${conta.nomeCorrentista}`)
    console.log(`Saldo atual: ${conta.saldo}`)
}