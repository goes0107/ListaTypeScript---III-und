// 8. Uma empresa precisa de um sistema simples para cadastrar seus funcionários. O sistema deve solicitar
// ao usuário o nome, o cargo e o salário de vários funcionários. Para cada funcionário cadastrado, deve
// ser criado um objeto que armazene essas informações. Ao final, o sistema deve exibir um resumo de
// todos os funcionários cadastrados, utilizando um método da classe.

export function questao8POO():void{
    class Funcionario {
        nome: string
        cargo: string
        salario: number

        constructor(nome: string, cargo: string, salario: number) {
            this.nome = nome
            this.cargo = cargo
            this.salario = salario
        }

        exibirResumo(): void {
            console.log(`Nome: ${this.nome}, Cargo: ${this.cargo}, Salário: ${this.salario}`)
        }

    }

    let funcionarios: Funcionario[] = []

    let resposta: string = ''

    while (resposta.toLowerCase() !== 'n') {
        let nome: string = String(prompt('Insira o nome do funcionário: '))
        let cargo: string = String(prompt('Insira seu cargo: '))
        let salario: number = Number(prompt('Insira seu salário: '))

        let newFuncionario: Funcionario = new Funcionario(nome, cargo, salario)
        funcionarios.push(newFuncionario)

        resposta = String(prompt('Deseja cadastrar outro funcionário? (s/n): ')).toLowerCase()
    }

    console.log('Resumo dos funcionários cadastrados:')
    for (let funcionario of funcionarios) {
        funcionario.exibirResumo()

    }
}