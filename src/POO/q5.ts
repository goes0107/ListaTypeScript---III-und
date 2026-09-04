// 5. Classe Pessoa: Crie uma classe que modele uma pessoa:
// 1. Atributos: nome, idade, peso e altura
// 2. Métodos: Envelhecer, engordar, emagrecer, crescer.
// Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos,
// ela deve crescer 0,5 cm.

export function questao5POO():void{
    class Pessoa {
        nome: string
        idade: number
        peso: number
        altura: number

        constructor(nome: string, idade: number, peso: number, altura: number) {
            this.nome = nome
            this.idade = idade
            this.peso = peso
            this.altura = altura
        }

        envelhecer(): void {
            this.idade++
            if (this.idade < 21) {
                this.crescer(0.5)
            }
        }

        engordar(pesoGanho: number): void {
            this.peso += pesoGanho
        }

        emagrecer(pesoPerdido: number): void {
            this.peso -= pesoPerdido
        }

        crescer(alturaGanha: number): void {
            this.altura += alturaGanha
        }
    }

    let nome: string = String(prompt("Digite o nome da pessoa:"))
    let idade: number = Number(prompt("Digite a idade da pessoa:"))
    let peso: number = Number(prompt("Digite o peso da pessoa (em kg):"))
    let altura: number = Number(prompt("Digite a altura da pessoa (em cm):"))

    let pessoa = new Pessoa(nome, idade, peso, altura)

    let op: number = Number(prompt(`Escolha a opção desejada: \n 1 - Envelhecer \n 2 - Engordar \n 3 - Emagrecer \n 4 - Crescer`))

    switch (op) {
        case 1:
            pessoa.envelhecer()
            break;
        case 2:
            let pesoGanho: number = Number(prompt("Digite o peso ganho (em kg):")) 
            pessoa.engordar(pesoGanho)
            break;
        case 3:
            let pesoPerdido: number = Number(prompt("Digite o peso perdido (em kg):")) 
            pessoa.emagrecer(pesoPerdido)
            break;
        case 4:
            let alturaGanha: number = Number(prompt("Digite a altura ganha (em cm):")) 
            pessoa.crescer(alturaGanha)
            break;
    }

    console.log(`Nome: ${pessoa.nome}`)
    console.log(`Idade: ${pessoa.idade} anos`)
    console.log(`Peso: ${pessoa.peso} kg`)
    console.log(`Altura: ${pessoa.altura} cm`)
}