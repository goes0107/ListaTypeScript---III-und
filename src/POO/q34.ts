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

        abstract calcularValor(horasPermanencia: number): number
    }

    class Carro extends Veiculo{
        constructor(_placa: string, _horaEntrada: number){
            super(_placa, _horaEntrada)
        }

        calcularValor(horasPermanencia: number): number {
            let valorTotal: number = horasPermanencia * 5.00
            console.log(`Valor total a ser pago: ${valorTotal}`)
        }
    }

    class Moto extends Veiculo{
        constructor(_placa: string, _horaEntrada: number){
            super(_placa, _horaEntrada)
        }


    }
}