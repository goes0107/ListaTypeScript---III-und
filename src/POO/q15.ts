// 15. Herança Encapsulamento
// Uma empresa possui dois tipos de funcionários: horistas (pagos por hora trabalhada) e assalariados
// (salário fixo mensal). Crie uma hierarquia de classes com Funcionário como superclasse e
// FuncionarioHorista e FuncionarioAssalariado como subclasses. O programa deve solicitar os dados via
// teclado e calcular o salário de cada um.

export function questao15POO():void{
    class Funcionario {
        private nome: string

        constructor(nome: string) {
            this.nome = nome
        }

        public getNome(): string {
            return this.nome
        }

        public calcularSalario(): number {
            return 0
        }

    }

    class FuncionarioHorista extends Funcionario {
        private horasTrabalhadas: number
        private valorHora: number
        
        constructor(nome: string, horasTrabalhadas: number, valorHora: number) {
            super(nome)
            this.horasTrabalhadas = horasTrabalhadas
            this.valorHora = valorHora
        }

        public calcularSalario(): number {
            return this.horasTrabalhadas * this.valorHora
        }
    }

    class FuncionarioAssalariado extends Funcionario {
        private salarioMensal: number

        constructor(nome: string, salarioMensal: number) {
            super(nome)
            this.salarioMensal = salarioMensal
        }

        public calcularSalario(): number {
            return this.salarioMensal
        }
    }

    let funcionarios: Funcionario[] = []

    let resposta: string = ''

    while (resposta.toLowerCase() !== 'n') {
        let tipoFuncionario: number = Number(prompt('Digite o tipo de funcionário (1-horista/2-assalariado): '))
        let nome: string = String(prompt('Insira o nome do funcionário: '))

        if (tipoFuncionario === 1) {
            let horasTrabalhadas: number = Number(prompt('Insira o número de horas trabalhadas: '))
            let valorHora: number = Number(prompt('Insira o valor da hora: '))
            let newFuncionario: FuncionarioHorista = new FuncionarioHorista(nome, horasTrabalhadas, valorHora)
            funcionarios.push(newFuncionario)
        } else if (tipoFuncionario === 2) {
            let salarioMensal: number = Number(prompt('Insira o salário mensal: '))
            let newFuncionario: FuncionarioAssalariado = new FuncionarioAssalariado(nome, salarioMensal)
            funcionarios.push(newFuncionario)
        }

        resposta = String(prompt('Deseja cadastrar outro funcionário? (s/n): ')).toLowerCase()
    }

    console.log('Resumo dos funcionários cadastrados:')
    for (let funcionario of funcionarios) {
        console.log(`Nome: ${funcionario.getNome()}, Salário: ${funcionario.calcularSalario()}`)
    }
}