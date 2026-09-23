// 35. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Controle de Clientes do Posto de Saúde
// O posto de saúde municipal necessita de um sistema para organizar o atendimento diário. Todo
// paciente possui nome e número do cartão do SUS privados. Os pacientes dividem-se em
// PacienteComum e PacientePrioritario (que possui um atributo privado para o tipo de prioridade,
// como &quot;Idoso&quot; ou &quot;Gestante&quot;). A classe base possui o método exibirFicha(). A classe
// PacientePrioritario sobrescreve este método para incluir a informação da prioridade com um
// destaque no texto. O operador deve cadastrar a fila de pacientes do dia via teclado. Ao final do
// cadastro, o programa varre a lista, imprime as fichas de atendimento polimorficamente e exibe a
// quantidade total de pacientes prioritários atendidos.

export function questao35POO():void{
    class Paciente {
        private _nome: string
        private _numeroCartaoSUS: number

        constructor(nome: string, numeroCartaoSUS: number){
            this._nome = nome
            this._numeroCartaoSUS = numeroCartaoSUS
        }
        
        get nome(): string {
            return this._nome
        }
        
        get numeroCartaoSUS(): number{
            return this._numeroCartaoSUS
        }

        exibirFicha():void {}
    }

    class PacienteComum extends Paciente{
        exibirFicha(): void {
            alert(`Ficha: \n Nome: ${this.nome} | Número do cartão do SUS: ${this.numeroCartaoSUS}`)
        }
    }

    class PacientePrioritario extends Paciente {
        private _tipo: string
        
        constructor(nome: string, numeroCartaoSUS: number, tipo: string) {
            super(nome, numeroCartaoSUS)
            this._tipo = tipo
        }

        get tipo(): string{
            return this._tipo
        }

        exibirFicha(): void {
            alert(`Ficha paciente prioritário: \n Nome: ${this.nome} | Número do cartão do SUS: ${this.numeroCartaoSUS} | Tipo de prioridade: ${this.tipo}`)
        }
    }

    let filaPacientes: Paciente [] = []

    let op: number = 0

    while (op != 2){
        let tipoPaciente: number = Number(prompt(`Qual é o tipo do paciente (1 - Paciente comum | 2 - Paciente prioritário): `))

        switch (tipoPaciente) {
            case 1:
                let nomePC: string = String(prompt(`Insira o nome do paciente: `))
                let numeroCartaoSUSPC: number = Number(prompt(`Insira o número do cartão do SUS: `))

                let pacienteComum: PacienteComum = new PacienteComum(nomePC, numeroCartaoSUSPC)

                filaPacientes.push(pacienteComum)
                break
        
            case 2:
                let nomePP: string = String(prompt(`Insira o nome do pacinte: `))
                let numeroCartaoSUSPP: number = Number(prompt(`Insira o número do cartão do SUS: `))
                let tipoPP: string = String(prompt(`Insira o tipo do paciente: `))

                let pacientePrioritario: PacientePrioritario = new PacientePrioritario(nomePP, numeroCartaoSUSPP, tipoPP)
                
                filaPacientes.push(pacientePrioritario)
                break
            default:
                alert(`Insira uma opção válida!`)
                break
        }

        op = Number(prompt(`Deseja adcionar mais algum paciente? (1 - Sim | 2 - Não): `))
    }

    let totalPrioritarios: number = 0

    for (let paciente of filaPacientes) {
        paciente.exibirFicha()

        if (paciente instanceof PacientePrioritario){
            totalPrioritarios++
        }
    }

    alert(`Total de pacientes prioritários: ${totalPrioritarios}`)
}