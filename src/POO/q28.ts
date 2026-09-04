// 28. Gestão de Diárias de um Hotel Fazenda
// Um hotel fazenda em Tobias Barreto quer automatizar o cálculo de suas hospedagens. Uma
// acomodação básica possui o número do quarto e o preço base da diária. A Suíte Master possui um
// valor adicional fixo referente ao uso da hidromassagem. O sistema deve interagir com o recepcionista
// perguntando os dados dos quartos e quantos dias o hóspede ficou alojado. O programa calcula o valor
// total devido de cada quarto inserido em uma lista de check-outs. Ao final, utilizando métodos de
// busca ou filtragem, o sistema deve exibir apenas os quartos que faturaram mais de R$ 1.000,00 na
// temporada.

export function questao28POO():void{
    class Acomodacao {
        private numeroQuarto: number
        private precoDiaria: number

        constructor(numeroQuarto: number, precoDiaria: number) {
            this.numeroQuarto = numeroQuarto
            this.precoDiaria = precoDiaria
        }

        calcularTotal(dias: number): number {
            return this.precoDiaria * dias
        }

        exibir(dias: number): string {
            return `Quarto: ${this.numeroQuarto} Valor Total: R$ ${this.calcularTotal(dias).toFixed(2)}`
        }
    }

    class SuiteMaster extends Acomodacao {
        private adicional: number

        constructor(numeroQuarto: number, precoDiaria: number, adicional: number) {
            super(numeroQuarto, precoDiaria)
            this.adicional = adicional
        }

        calcularTotal(dias: number): number {
            return super.calcularTotal(dias) + this.adicional
        }
    }

    class CheckOut {
        acomodacao: Acomodacao
        dias: number

        constructor(acomodacao: Acomodacao, dias: number) {
            this.acomodacao = acomodacao
            this.dias = dias
        }
    }

    let checkouts: CheckOut[] = []

    let resposta = "s"

    while (resposta != "n") {

        let tipo = Number(prompt("Tipo (1-Básica / 2-Suíte Master): "))

        let quarto = Number(prompt("Número do quarto: "))
        let diaria = Number(prompt("Preço da diária: "))
        let dias = Number(prompt("Dias hospedado: "))

        if (tipo == 1) {
            let acomodacao = new Acomodacao(quarto, diaria)
            checkouts.push(new CheckOut(acomodacao, dias))
        }

        if (tipo == 2) {
            let adicional = Number(prompt("Valor adicional da hidromassagem: "))

            let acomodacao = new SuiteMaster(quarto, diaria, adicional)
            checkouts.push(new CheckOut(acomodacao, dias))
        }

        resposta = String(prompt("Deseja cadastrar outro quarto? (s/n): ")).toLowerCase()
    }

    console.log("Quartos que faturaram mais de R$ 1000,00:")

    for (let checkout of checkouts) {
        if (checkout.acomodacao.calcularTotal(checkout.dias) > 1000) {
            console.log(checkout.acomodacao.exibir(checkout.dias))
        }
    }
}