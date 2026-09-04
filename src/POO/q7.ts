// 7. Uma empresa quer cadastrar funcionários e aplicar aumento salarial. O sistema deve pedir nome,
// cargo e salário. Crie um método que receba um percentual de aumento e atualize o salário do
// funcionário, exibindo o seu nome e novo valor.

export function questao7POO():void{
    class Funcionario{
        nome: string
        cargo: string
        salario: number

        constructor(nome: string, cargo: string, salario: number){
            this.nome = nome
            this.cargo = cargo
            this.salario = salario
        }

        atualizarSalario(percentualAumento: number): number{
            let novoSalario = this.salario + (this.salario * (percentualAumento / 100))
            return novoSalario
        }
    }


    let nome: string = String(prompt('Insira o nome do funcionário: '))
    let cargo: string = String(prompt('Insira seu cargo: '))
    let salario: number = Number(prompt('Insira seu salário: '))
    let percentualAumento: number = Number(prompt('Insira seu percentual de aumento em porcentagem (Ex: 25%): '))

    let newFuncionario: Funcionario = new Funcionario(nome, cargo, salario)

    let novoSalario: number = newFuncionario.atualizarSalario(percentualAumento)

    console.log(`Nome: ${nome}`)
    console.log(`Cargo: ${cargo}`)
    console.log(`Salário antes do aumento: ${salario}`)
    console.log(`Novo salário: ${novoSalario}`)
}