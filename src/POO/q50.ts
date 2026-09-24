// 50. Repetição Encapsulamento Arrays
// Controle de Ponto e Escala de Funcionários da Reitoria
// O setor de gestão de pessoas precisa de um software para registrar as batidas de ponto dos servidores.
// Crie a classe RegistroPonto com os atributos privados matricula, nomeServidor, horaEntrada e
// horaSaida (armazenados como números inteiros de 0 a 23). Crie métodos setters com validação para
// garantir que as horas informadas estejam entre 0 e 23, e que a horaSaida seja obrigatoriamente maior
// que a horaEntrada. Crie também o método calcularHorasTrabalhadas(): number. O programa
// deve rodar dentro de uma estrutura de repetição solicitando que o operador cadastre o ponto de vários
// servidores em um array. Ao encerrar as entradas, o programa varre a lista, invoca o método de cálculo
// de horas trabalhadas de cada objeto e exibe o relatório final com o nome de cada servidor, o total de
// horas cumpridas no dia e o somatório geral de horas trabalhadas por toda a equipe da reitoria.

export function questao50POO(): void {
    class RegistroPonto {
        private _matricula: number
        private _nomeServidor: string
        private _horaEntrada: number
        private _horaSaida: number

        constructor(matricula: number, nomeServidor: string, horaEntrada: number, horaSaida: number) {
            this._matricula = matricula
            this._nomeServidor = nomeServidor
            this._horaEntrada = 0
            this._horaSaida = 0
            this.horaEntrada = horaEntrada
            this.horaSaida = horaSaida
        }

        get matricula(): number {
            return this._matricula
        }

        get nomeServidor(): string {
            return this._nomeServidor
        }

        get horaEntrada(): number {
            return this._horaEntrada
        }

        set horaEntrada(horaEntrada: number) {
            if (horaEntrada >= 0 && horaEntrada <= 23) {
                this._horaEntrada = horaEntrada
            }
            else {
                alert(`Hora de entrada inválida! Informe uma hora entre 0 e 23.`)
            }
        }

        get horaSaida(): number {
            return this._horaSaida
        }

        set horaSaida(horaSaida: number) {
            if (horaSaida >= 0 && horaSaida <= 23 && horaSaida > this._horaEntrada) {
                this._horaSaida = horaSaida
            }
            else {
                alert(`Hora de saída inválida! A hora deve estar entre 0 e 23 e ser maior que a hora de entrada.`)
            }
        }

        calcularHorasTrabalhadas(): number {
            let horasTrabalhadas: number = this.horaSaida - this.horaEntrada
            return horasTrabalhadas
        }
    }

    let registros: RegistroPonto[] = []
    let op: number = 0

    while (op != 2) {
        let matricula: number = Number(prompt(`Insira a matrícula do servidor: `))
        let nomeServidor: string = String(prompt(`Insira o nome do servidor: `))
        let horaEntrada: number = Number(prompt(`Insira a hora de entrada (0 a 23): `))
        let horaSaida: number = Number(prompt(`Insira a hora de saída (0 a 23): `))

        let registro: RegistroPonto = new RegistroPonto(matricula, nomeServidor, horaEntrada, horaSaida)

        registros.push(registro)

        op = Number(prompt(`Deseja cadastrar outro servidor? (1 - Sim | 2 - Não): `))
    }

    let totalHorasEquipe: number = 0

    for (let registro of registros) {
        let horasTrabalhadas: number = registro.calcularHorasTrabalhadas()

        alert(`Servidor: ${registro.nomeServidor} | Horas trabalhadas: ${horasTrabalhadas} horas`)

        totalHorasEquipe += horasTrabalhadas
    }

    alert(`Total de horas trabalhadas pela equipe: ${totalHorasEquipe} horas`)
}