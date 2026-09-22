// 34. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Sistema de Gestão de Estacionamento Rotativo
// Para organizar o fluxo de veículos em um estacionamento no centro da cidade, crie um software de
// bilhetagem. A superclasse abstrata Veiculo possui placa e hora de entrada (atributos privados) e o
// método abstrato calcularValor(horasPermanencia: number): number. A classe Carro cobra R$
// 5,00 por hora. A classe Moto cobra R$ 3,00 por hora. O programa deve rodar dentro de um laço de
// repetição permitindo cadastrar os veículos que estão saindo e a quantidade de horas que
// permaneceram. Os objetos devem ser armazenados em um array de veículos. Ao encerrar o
// expediente, o sistema percorre o array, chama o método de cálculo de forma polimórfica para cada
// item e exibe o faturamento total arrecadado no dia.

export function questao34POO():void{
    abstract class Veiculo {
        private _placa: string
        private _horaEntrada: number

        constructor(placa: string, horaEntrada: number){
            this._placa = placa
            this._horaEntrada = horaEntrada
        }
        
        getPlaca(): string {
            return this._placa;
        }

        getHoraEntrada(): number {
            return this._horaEntrada;
        }

        abstract calcularValor(horasPermanencia: number): number
    }

    class Carro extends Veiculo{
        calcularValor(horasPermanencia: number): number {
            let valorTotalC: number = horasPermanencia * 5.00
            return valorTotalC
        }
    }

    class Moto extends Veiculo{
        calcularValor(horasPermanencia: number): number {
            let valorTotalM: number = horasPermanencia * 3.00
            return valorTotalM
        }
    }

    let veiculos: Veiculo[] = []
    let horas: number[] = []

    let opcao: number = 0

    while (opcao !== 3) {
        opcao = Number(prompt(`1 - Cadastrar saída de Carro\n2 - Cadastrar saída de Moto\n3 - Encerrar expediente`))
        
        switch (opcao) {
            case 1:
                let placaC = String(prompt('Insira a placa do veículo: '))
                let horaEntradaC = Number(prompt('Insira a hora que você entrou: '))
                let horasPermanenciaC = Number(prompt(`Insira a quantidade de horas que você ficou: `))

                let carro: Carro  = new Carro(placaC, horaEntradaC)

                veiculos.push(carro)
                horas.push(horasPermanenciaC)
                break
            case 2:
                let placaM = String(prompt('Insira a placa do veículo: '))
                let horaEntradaM = Number(prompt('Insira a hora que você entrou: '))
                let horasPermanenciaM = Number(prompt(`Insira a quantidade de horas que você ficou: `))

                let moto: Moto = new Moto(placaM, horaEntradaM)

                veiculos.push(moto)
                horas.push(horasPermanenciaM)
                break
            case 3:
                console.log("Encerrando expediente...")
                break
            default:
                console.log(`Opção inválida!!`)
                break
        }
    }
    
    let faturamentoTotal: number = 0;

    for (let i = 0; i < veiculos.length; i++) {

        let valor = veiculos[i].calcularValor(horas[i])

        faturamentoTotal += valor

        console.log(`Placa: ${veiculos[i].getPlaca()} | Horas: ${horas[i]} | Valor: R$${valor.toFixed(2)}`)
    }
    
    console.log(`Faturamento total: R$${faturamentoTotal.toFixed(2)}`)
}