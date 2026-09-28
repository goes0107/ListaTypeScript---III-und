// 30. O Sistema de Bilhetagem de Transporte Intermunicipal
// Cada passagem possui nome do passageiro, CPF e valor base. A Passagem Estudantil aplica 50%
// de desconto. O programa cadastra as passagens em um array e calcula o faturamento total do dia.

export function questao30POO(): void {

    class Passagem {
        private _nome: string
        private _cpf: string
        private _valorBase: number

        constructor(nome: string, cpf: string, valorBase: number) {
            this._nome = nome
            this._cpf = cpf
            this._valorBase = valorBase
        }

        get nome(): string {
            return this._nome
        }

        get cpf(): string {
            return this._cpf
        }

        get valorBase(): number {
            return this._valorBase
        }

        calcularValor(): number {
            return this.valorBase
        }

        exibir(): void {
            alert(`Nome: ${this.nome} | CPF: ${this.cpf} | Valor: R$${this.calcularValor().toFixed(2)}`)
        }
    }

    class PassagemEstudantil extends Passagem {
        calcularValor(): number {
            let valorFinal: number = this.valorBase * 0.5
            return valorFinal
        }
    }

    let passagens: Passagem[] = []
    let op: number = 0

    while (op != 2) {
        let tipo: number = Number(prompt(`Qual é o tipo da passagem? (1 - Comum | 2 - Estudantil): `))
        let nome: string = String(prompt(`Insira o nome do passageiro: `))
        let cpf: string = String(prompt(`Insira o CPF: `))
        let valorBase: number = Number(prompt(`Insira o valor da passagem: `))

        switch (tipo) {
            case 1:
                let passagemComum: Passagem = new Passagem(nome, cpf, valorBase)
                passagens.push(passagemComum)
                break
            case 2:
                let passagemEstudantil: PassagemEstudantil = new PassagemEstudantil(nome, cpf, valorBase)
                passagens.push(passagemEstudantil)
                break
            default:
                alert(`Insira uma opção válida!`)
                break
        }

        op = Number(prompt(`Deseja cadastrar outra passagem? (1 - Sim | 2 - Não): `))
    }

    let faturamentoTotal: number = 0

    for (let passagem of passagens) {
        passagem.exibir()
        faturamentoTotal += passagem.calcularValor()
    }

    alert(`Faturamento total do dia: R$${faturamentoTotal.toFixed(2)}`)
}
