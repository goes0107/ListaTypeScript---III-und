// 34. Sistema de Gestão de Estacionamento Rotativo
// A superclasse abstrata Veiculo possui placa e hora de entrada privados e o método abstrato
// calcularValor(). Carro cobra R$ 5,00 por hora e Moto cobra R$ 3,00 por hora. Ao final,
// o sistema percorre os veículos e calcula o faturamento total.

export function questao34POO(): void {

    abstract class Veiculo {
        private _placa: string
        private _horaEntrada: number

        constructor(placa: string, horaEntrada: number) {
            this._placa = placa
            this._horaEntrada = horaEntrada
        }

        get placa(): string {
            return this._placa
        }

        get horaEntrada(): number {
            return this._horaEntrada
        }

        abstract calcularValor(horasPermanencia: number): number
    }

    class Carro extends Veiculo {
        calcularValor(horasPermanencia: number): number {
            let valorTotal: number = horasPermanencia * 5
            return valorTotal
        }
    }

    class Moto extends Veiculo {
        calcularValor(horasPermanencia: number): number {
            let valorTotal: number = horasPermanencia * 3
            return valorTotal
        }
    }

    let veiculos: Veiculo[] = []
    let horasPermanencia: number[] = []
    let op: number = 0

    while (op != 3) {
        op = Number(prompt(`Qual veículo deseja cadastrar? (1 - Carro | 2 - Moto | 3 - Encerrar expediente): `))

        switch (op) {
            case 1:
                let placaC: string = String(prompt(`Insira a placa do carro: `))
                let horaEntradaC: number = Number(prompt(`Insira a hora de entrada do carro: `))
                let horasC: number = Number(prompt(`Insira a quantidade de horas de permanência: `))
                let carro: Carro = new Carro(placaC, horaEntradaC)
                veiculos.push(carro)
                horasPermanencia.push(horasC)
                break

            case 2:
                let placaM: string = String(prompt(`Insira a placa da moto: `))
                let horaEntradaM: number = Number(prompt(`Insira a hora de entrada da moto: `))
                let horasM: number = Number(prompt(`Insira a quantidade de horas de permanência: `))
                let moto: Moto = new Moto(placaM, horaEntradaM)
                veiculos.push(moto)
                horasPermanencia.push(horasM)
                break

            case 3:
                alert(`Expediente encerrado!`)
                break

            default:
                alert(`Insira uma opção válida!`)
                break
        }
    }

    let faturamentoTotal: number = 0
    let contador: number = 0

    for (let veiculo of veiculos) {
        let valor: number = veiculo.calcularValor(horasPermanencia[contador])
        faturamentoTotal += valor
        alert(`Placa: ${veiculo.placa} | Horas de permanência: ${horasPermanencia[contador]} | Valor: R$${valor.toFixed(2)}`)
        contador++
    }

    alert(`Faturamento total do dia: R$${faturamentoTotal.toFixed(2)}`)
}
