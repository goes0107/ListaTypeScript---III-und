// 37. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Sistema de Consumo de Energia Elétrica
// Uma concessionária de energia precisa calcular a conta de luz dos consumidores. A superclasse
// Consumidor possui o número da conta e a quantidade de kWh consumidos no mês privados. A
// subclasse ConsumidorResidencial cobra R$ 0,75 por kWh. A subclasse ConsumidorComercial
// cobra R$ 0,60 por kWh para consumos de até 1000 kWh e R$ 0,50 por kWh para o que exceder esse
// limite. O sistema deve interagir com o usuário solicitando os dados de vários consumidores em um
// laço. Após o preenchimento da lista, o programa exibe o detalhamento de cada fatura chamando o
// método de cálculo de valor polimorficamente e mostra a média de consumo em kWh de todos os
// cadastrados.

export function questao37POO(): void{
    class Consumidor{
        private _numeroConta: number
        private _qntKwh: number

        constructor(numeroConta: number, qntKwt: number){
            this._numeroConta = numeroConta
            this._qntKwh = qntKwt
        }

        get numeroConta(): number{
            return this._numeroConta
        }

        get qntKwh(): number{
            return this._qntKwh
        }

        calcularValor(): void{}
    }

    class ConsumidorResidencial extends Consumidor{
        calcularValor(): void {
            let valor: number = this.qntKwh * 0.75
            alert(`Consumidor: ${this.numeroConta} \n Valor total a pagar: R$${valor}`)
        }
    }

    class ConsumidorComercial extends Consumidor{
        calcularValor(): void {
            let valor: number = 0

            if (this.qntKwh <= 1000){
                valor = this.qntKwh * 0.60
                alert(`Consumidor: ${this.numeroConta} \n Valor total a pagar: R$${valor}`)
            }
            else{
                valor = this.qntKwh * 0.50
                alert(`Consumidor: ${this.numeroConta} \n Valor total a pagar: R$${valor}`)
            }
        }
    }

    let lConsumidores: Consumidor [] = []

    let op: number = 0

    while (op != 2){
        let tipoConsumidor: number = Number(prompt(`Qual é o tipo de consumidor? (1 - Consumidor residencial | 2 - Consumidor comercial: )`))

        switch (tipoConsumidor){
            case 1:
                let numeroContaCR: number = Number(prompt(`Insira o número da conta: `))
                let qntKwhCR: number = Number(prompt(`Insira a quantidade de KWh consumidos: `))
                
                let consumidorResidencial: ConsumidorResidencial = new ConsumidorResidencial(numeroContaCR, qntKwhCR)

                lConsumidores.push(consumidorResidencial)
                break
            case 2:
                let numeroContaCC: number = Number(prompt(`Insira o número da conta: `))
                let qntKwhCC: number = Number(prompt(`Insira a quantidade de KWh consumidos: `))
                
                let consumidorComercial: ConsumidorComercial = new ConsumidorComercial(numeroContaCC, qntKwhCC)

                lConsumidores.push(consumidorComercial)
                break
            default:
                alert(`Insira uma opção válida!!`)
                break
        }

        op = Number(prompt(`Deseja adcionar mais algum consumidor? (1 - Sim | 2 - Não): `))
    }

    let somaKwh: number = 0

    for (let consumidor of lConsumidores) {
        consumidor.calcularValor()
        somaKwh = somaKwh + consumidor.qntKwh
    }

    let media: number = somaKwh / lConsumidores.length

    alert(`Média de KWh: ${media}`)
}
