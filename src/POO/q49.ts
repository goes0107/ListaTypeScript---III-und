// 49. Repetição Encapsulamento Arrays
// Ficha de Triagem e Vacinação de Clínica Veterinária
// Uma clínica veterinária precisa de um programa para controlar a fila de vacinação do dia. Crie a
// classe Pet com os atributos privados nome, especie, peso e vacinado (boolean com valor inicial
// false). Crie métodos de leitura e escrita para todos os atributos e o método aplicarVacina(), que
// altera o status de vacinado para true e exibe uma mensagem confirmando a imunização. O programa
// deve interagir com o recepcionista solicitando em um laço os dados de até 10 animais que chegaram
// para atendimento, armazenando-os em um array. Após o cadastro completo da fila, o sistema executa
// um novo laço simulando o atendimento do veterinário: para cada pet da lista, se o animal ainda não
// estiver vacinado, o programa chama o método aplicarVacina(). Ao término, exibe-se a quantidade
// total de pets imunizados na sessão.

export function questao49POO(): void {
    class Pet {
        private _nome: string
        private _especie: string
        private _peso: number
        private _vacinado: boolean

        constructor(nome: string, especie: string, peso: number) {
            this._nome = nome
            this._especie = especie
            this._peso = peso
            this._vacinado = false
        }

        get nome(): string {
            return this._nome
        }

        set nome(nome: string) {
            this._nome = nome
        }

        get especie(): string {
            return this._especie
        }

        set especie(especie: string) {
            this._especie = especie
        }

        get peso(): number {
            return this._peso
        }

        set peso(peso: number) {
            this._peso = peso
        }

        get vacinado(): boolean {
            return this._vacinado
        }

        set vacinado(vacinado: boolean) {
            this._vacinado = vacinado
        }

        aplicarVacina(): void {
            this._vacinado = true
            alert(`Vacina aplicada com sucesso no pet ${this.nome}!`)
        }

    }

    let pets: Pet[] = []

    for (let i: number = 0; i < 10; i++) {
        let nome: string = String(prompt(`Insira o nome do pet: `))
        let especie: string = String(prompt(`Insira a espécie do pet: `))
        let peso: number = Number(prompt(`Insira o peso do pet em kg: `))

        let pet: Pet = new Pet(nome, especie, peso)

        pets.push(pet)

        let op: number = Number(prompt(`Deseja cadastrar outro pet? (1 - Sim | 2 - Não): `))

        if (op == 2) {
            break
        }
    }

    let totalImunizados: number = 0

    for (let pet of pets) {
        if (pet.vacinado == false) {
            pet.aplicarVacina()
            totalImunizados++
        }
    }

    alert(`Total de pets imunizados na sessão: ${totalImunizados}`)
}