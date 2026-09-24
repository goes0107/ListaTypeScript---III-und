// 40. Abstração Herança Polimorfismo Repetição Encapsulamento
// Simulador de Investimentos Financeiros

// Uma corretora de valores quer disponibilizar uma calculadora para seus clientes. A classe abstrata
// Investimento possui o valor aplicado e o tempo em meses privados, além do método abstrato
// calcularRendimento(): number. O investimento em RendaFixa rende 0,8% ao mês de forma
// simples. O investimento em Acoes possui uma taxa de variação informada pelo usuário (podendo ser
// positiva ou negativa). O programa deve abrir um menu para o usuário testar simulações de
// investimento. A cada iteração, o sistema calcula o retorno financeiro via polimorfismo e exibe o saldo
// final projetado para o investidor.

export function questao40POO(): void {
    abstract class Investimento {
        private _valorAplicado: number
        private _tempoMeses: number

        constructor(valorAplicado: number, tempoMeses: number) {
            this._valorAplicado = valorAplicado
            this._tempoMeses = tempoMeses
        }

        get valorAplicado(): number {
            return this._valorAplicado
        }

        get tempoMeses(): number {
            return this._tempoMeses
        }

        abstract calcularRendimento(): number
    }

    class RendaFixa extends Investimento {
        calcularRendimento(): number {
            let rendimento: number = this.valorAplicado * 0.008 * this.tempoMeses
            return rendimento
        }
    }

    class Acoes extends Investimento {
        private _taxaVariacao: number

        constructor(valorAplicado: number, tempoMeses: number, taxaVariacao: number) {
            super(valorAplicado, tempoMeses)
            this._taxaVariacao = taxaVariacao
        }

        get taxaVariacao(): number {
            return this._taxaVariacao
        }

        calcularRendimento(): number {
            let rendimento: number = this.valorAplicado * (this.taxaVariacao / 100)
            return rendimento
        }
    }

    let op: number = 0

    while (op != 3) {
        op = Number(prompt(`Qual investimento deseja simular? (1 - Renda Fixa | 2 - Ações | 3 - Sair): `))

        switch (op) {
            case 1:
                let valorRF: number = Number(prompt(`Insira o valor que será aplicado: `))
                let tempoRF: number = Number(prompt(`Insira o tempo do investimento em meses: `))
                
                let rendaFixa: RendaFixa = new RendaFixa(valorRF, tempoRF)
                let rendimentoRF: number = rendaFixa.calcularRendimento()
                let saldoFinalRF: number = rendaFixa.valorAplicado + rendimentoRF

                alert(`Valor aplicado: R$${rendaFixa.valorAplicado.toFixed(2)} | Tempo: ${rendaFixa.tempoMeses} meses | Rendimento: R$${rendimentoRF.toFixed(2)} | Saldo final: R$${saldoFinalRF.toFixed(2)}`)
                break

            case 2:
                let valorAcoes: number = Number(prompt(`Insira o valor que será aplicado: `))
                let tempoAcoes: number = Number(prompt(`Insira o tempo do investimento em meses: `))
                let taxaAcoes: number = Number(prompt(`Insira a taxa de variação em %: `))
                
                let acoes: Acoes = new Acoes(valorAcoes, tempoAcoes, taxaAcoes)
                let rendimentoAcoes: number = acoes.calcularRendimento()
                let saldoFinalAcoes: number = acoes.valorAplicado + rendimentoAcoes

                alert(`Valor aplicado: R$${acoes.valorAplicado.toFixed(2)} | Taxa de variação: ${acoes.taxaVariacao}% | Rendimento: R$${rendimentoAcoes.toFixed(2)} | Saldo final: R$${saldoFinalAcoes.toFixed(2)}`)
                break

            case 3:
                alert(`Simulação encerrada!`)
                break

            default:
                alert(`Insira uma opção válida!`)
                break
        }

    }

}