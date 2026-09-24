// 43. Repetição Encapsulamento Arrays
// Avaliação de Desempenho de Atletas
// Um clube de corrida deseja registrar a performance de seus atletas em uma maratona. Crie a classe
// Atleta com os atributos privados nome, idade e tempoMinutos. Garanta o encapsulamento de todos
// os atributos. O sistema deve permitir que o treinador cadastre via prompt os dados de vários atletas
// em um laço de repetição até digitar &quot;SAIR&quot;. O programa armazena os objetos em um array e, ao final,
// faz uma busca na lista para identificar e exibir os dados do atleta que concluiu a prova no menor
// tempo (o campeão da prova).

export function questao43POO(): void {
    class Atleta {
        private _nome: string
        private _idade: number
        private _tempoMinutos: number

        constructor(nome: string, idade: number, tempoMinutos: number) {
            this._nome = nome
            this._idade = idade
            this._tempoMinutos = tempoMinutos
        }

        get nome(): string {
            return this._nome
        }

        get idade(): number {
            return this._idade
        }

        get tempoMinutos(): number {
            return this._tempoMinutos
        }

        set nome(nome: string) {
            this._nome = nome
        }

        set idade(idade: number) {
            this._idade = idade
        }

        set tempoMinutos(tempoMinutos: number) {
            this._tempoMinutos = tempoMinutos
        }
    }

    let atletas: Atleta[] = []

    let nome: string = String(prompt(`Insira o nome do atleta ou SAIR para encerrar: `))

    while (nome.toUpperCase() != "SAIR") {
        let idade: number = Number(prompt(`Insira a idade do atleta: `))
        let tempoMinutos: number = Number(prompt(`Insira o tempo do atleta em minutos: `))

        let atleta: Atleta = new Atleta(nome, idade, tempoMinutos)

        atletas.push(atleta)

        nome = String(prompt(`Insira o nome do próximo atleta ou SAIR para encerrar: `))
    }

    if (atletas.length > 0) {
        let campeao: Atleta = atletas[0]

        for (let atleta of atletas) {
            if (atleta.tempoMinutos < campeao.tempoMinutos) {
                campeao = atleta
            }
        }

        alert(`Campeão da prova | Nome: ${campeao.nome} | Idade: ${campeao.idade} anos | Tempo: ${campeao.tempoMinutos} minutos`)
    }
    else {
        alert(`Nenhum atleta foi cadastrado!`)
    }
}