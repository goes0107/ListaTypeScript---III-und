// 28. Gestão de Diárias de um Hotel Fazenda
// Uma acomodação básica possui número do quarto e preço da diária. A Suíte Master possui um valor
// adicional fixo da hidromassagem. Ao final, o sistema mostra apenas os quartos que faturaram mais
// de R$ 1.000,00.

export function questao28POO(): void {
    class Acomodacao {
        private _numeroQuarto: number
        private _precoDiaria: number

        constructor(numeroQuarto: number, precoDiaria: number) {
            this._numeroQuarto = numeroQuarto
            this._precoDiaria = precoDiaria
        }

        get numeroQuarto(): number {
            return this._numeroQuarto
        }

        get precoDiaria(): number {
            return this._precoDiaria
        }

        calcularTotal(dias: number): number {
            let valorTotal: number = this.precoDiaria * dias
            return valorTotal
        }
    }

    class SuiteMaster extends Acomodacao {
        private _adicional: number

        constructor(numeroQuarto: number, precoDiaria: number, adicional: number) {
            super(numeroQuarto, precoDiaria)
            this._adicional = adicional
        }

        get adicional(): number {
            return this._adicional
        }

        calcularTotal(dias: number): number {
            let valorTotal: number = (this.precoDiaria * dias) + this.adicional
            return valorTotal
        }
    }

    class CheckOut {
        private _acomodacao: Acomodacao
        private _dias: number

        constructor(acomodacao: Acomodacao, dias: number) {
            this._acomodacao = acomodacao
            this._dias = dias
        }

        get acomodacao(): Acomodacao {
            return this._acomodacao
        }

        get dias(): number {
            return this._dias
        }
    }

    let checkouts: CheckOut[] = []
    let op: number = 0

    while (op != 2) {
        let tipo: number = Number(prompt(`Qual é o tipo da acomodação? (1 - Básica | 2 - Suíte Master): `))
        let numeroQuarto: number = Number(prompt(`Insira o número do quarto: `))
        let precoDiaria: number = Number(prompt(`Insira o preço da diária: `))
        let dias: number = Number(prompt(`Insira a quantidade de dias hospedado: `))

        switch (tipo) {
            case 1:
                let acomodacao: Acomodacao = new Acomodacao(numeroQuarto, precoDiaria)
                let checkOut: CheckOut = new CheckOut(acomodacao, dias)
                checkouts.push(checkOut)
                break
            case 2:
                let adicional: number = Number(prompt(`Insira o valor adicional da hidromassagem: `))
                let suiteMaster: SuiteMaster = new SuiteMaster(numeroQuarto, precoDiaria, adicional)
                let checkOutSuite: CheckOut = new CheckOut(suiteMaster, dias)
                checkouts.push(checkOutSuite)
                break
            default:
                alert(`Insira uma opção válida!`)
                break
        }

        op = Number(prompt(`Deseja cadastrar outro quarto? (1 - Sim | 2 - Não): `))
    }

    for (let checkout of checkouts) {
        let valorTotal: number = checkout.acomodacao.calcularTotal(checkout.dias)

        if (valorTotal > 1000) {
            alert(`Quarto: ${checkout.acomodacao.numeroQuarto} | Valor total: R$${valorTotal.toFixed(2)}`)
        }
    }
}
