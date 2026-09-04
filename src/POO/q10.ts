// 10. Classe Bichinho Virtual: Crie uma classe que modele um Tamagushi (Bichinho Eletrônico):
// A. Atributos: Nome, Fome, Saúde e Idade
// B. Métodos: Alterar Nome, Fome, Saúde e Idade;
// C. Retornar Nome, Fome, Saúde e Idade
// Obs: Existe mais uma informação que devemos levar em consideração, o Humor do nosso tamagushi,
// este humor é uma combinação entre os atributos Fome e Saúde, ou seja, um campo calculado, então não
// devemos criar um atributo para armazenar esta informação por que ela pode ser calculada a qualquer
// momento.

export function questao10POO():void{
    class BichinhoVirtual {
        nome: string
        fome: number
        saude: number
        idade: number

        constructor(nome: string, fome: number, saude: number, idade: number) {
            this.nome = nome
            this.fome = fome
            this.saude = saude
            this.idade = idade
        }

        alterarNome(novoNome: string): void {
            this.nome = novoNome
        }

        alterarFome(novoNivelFome: number): void {
            this.fome = novoNivelFome
        }

        alterarSaude(novoNivelSaude: number): void {
            this.saude = novoNivelSaude
        }

        alterarIdade(novaIdade: number): void {
            this.idade = novaIdade
        }

        retornarNome(): string {
            return this.nome
        }

        retornarFome(): number {
            return this.fome
        }

        retornarSaude(): number {
            return this.saude
        }

        retornarIdade(): number {
            return this.idade
        }

        retornarHumor(): number {
            return (this.fome + this.saude) / 2
        }

    }

    let nome: string = String(prompt("Digite o nome do bichinho virtual:"))
    let fome: number = Number(prompt("Digite o nível de fome do bichinho virtual (0 a 100):"))
    let saude: number = Number(prompt("Digite o nível de saúde do bichinho virtual (0 a 100):"))
    let idade: number = Number(prompt("Digite a idade do bichinho virtual:"))

    let bichinho = new BichinhoVirtual(nome, fome, saude, idade)

    let op: number = Number(prompt(`Escolha a opção desejada: \n 1 - Alterar Nome \n 2 - Alterar Fome \n 3 - Alterar Saúde \n 4 - Alterar Idade \n 5 - Retornar Nome \n 6 - Retornar Fome \n 7 - Retornar Saúde \n 8 - Retornar Idade \n 9 - Retornar Humor`))

    switch (op) {
        case 1:
            let novoNome: string = String(prompt("Digite o novo nome do bichinho virtual:"))
            bichinho.alterarNome(novoNome)
            break;
        case 2:
            let novoNivelFome: number = Number(prompt("Digite o novo nível de fome do bichinho virtual (0 a 100):"))
            bichinho.alterarFome(novoNivelFome)
            break;
        case 3:
            let novoNivelSaude: number = Number(prompt("Digite o novo nível de saúde do bichinho virtual (0 a 100):"))
            bichinho.alterarSaude(novoNivelSaude)
            break;
        case 4:
            let novaIdade: number = Number(prompt("Digite a nova idade do bichinho virtual:"))
            bichinho.alterarIdade(novaIdade)
            break;
        case 5:
            console.log(`Nome: ${bichinho.retornarNome()}`)
            break;
        case 6:
            console.log(`Fome: ${bichinho.retornarFome()}`)
            break;
        case 7:
            console.log(`Saúde: ${bichinho.retornarSaude()}`)
            break;
        case 8:
            console.log(`Idade: ${bichinho.retornarIdade()}`)
            break;
        case 9:
            console.log(`Humor: ${bichinho.retornarHumor()}`)
            break;
    }
}