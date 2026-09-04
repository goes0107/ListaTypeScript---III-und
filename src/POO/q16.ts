// 16. Herança Polimorfismo Encapsulamento
// Um zoológico possui mamíferos e aves. Ambos têm nome, espécie e idade. Mamíferos têm tipo de
// alimentação; aves têm se são migratórias ou não. Cada animal tem um comportamento de &#39;emitir som&#39;
// diferente. O sistema deve cadastrar animais, listar por tipo e simular a &#39;hora da alimentação&#39; chamando o
// método de som de cada um.

export function questao16POO():void{
    class Animal {
        nome: string
        especie: string
        idade: number

        constructor(nome: string, especie: string, idade: number) {
            this.nome = nome
            this.especie = especie
            this.idade = idade
        }

        emitirSom(): void {
            console.log(`${this.nome} está emitindo um som genérico.`)
        }

    }

    class Mamifero extends Animal {
        tipoAlimentacao: string

        constructor(nome: string, especie: string, idade: number, tipoAlimentacao: string) {
            super(nome, especie, idade)
            this.tipoAlimentacao = tipoAlimentacao
        }

        emitirSom(): void {
            console.log(`${this.nome} está emitindo um som de mamífero.`)
        }

    }

    class Ave extends Animal {
        migratoria: boolean

        constructor(nome: string, especie: string, idade: number, migratoria: boolean) {
            super(nome, especie, idade)
            this.migratoria = migratoria
        }

        emitirSom(): void {
            console.log(`${this.nome} está emitindo um som de ave.`)
        }

    }

    let animais: Animal[] = []

    let resposta: string = ''

    while (resposta.toLowerCase() !== 'n') {
        let tipo: number = Number(prompt('Insira o tipo de animal (1-mamifero/2-ave): '))

        let nome: string = String(prompt('Insira o nome do animal: '))
        let especie: string = String(prompt('Insira a espécie do animal: '))
        let idade: number = Number(prompt('Insira a idade do animal: '))

        if (tipo === 1) {
            let tipoAlimentacao: string = String(prompt('Insira o tipo de alimentação do mamífero: '))
            let newMamifero: Mamifero = new Mamifero(nome, especie, idade, tipoAlimentacao)
            animais.push(newMamifero)
        } else if (tipo === 2) {
            let migratoria: boolean = String(prompt('O animal é migratório? (s/n): ')).toLowerCase() === 's'
            let newAve: Ave = new Ave(nome, especie, idade, migratoria)
            animais.push(newAve)
        }
        
        resposta = String(prompt('Deseja cadastrar outro animal? (s/n): ')).toLowerCase()
    }

    console.log('Hora da alimentação:')
    for (let animal of animais) {
        animal.emitirSom()
    }
}