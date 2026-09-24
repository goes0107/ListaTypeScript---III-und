// 42. Repetição Encapsulamento Arrays
// Controle de Estoque de Farmácia
// Uma farmácia precisa monitorar a quantidade de remédios em seu estoque. Crie a classe
// Medicamento com os atributos privados nome, lote, preco e quantidadeEstoque. Crie getters e
// setters com validação no setter de quantidadeEstoque para não permitir valores negativos. O
// programa deve solicitar via teclado o cadastro de até 10 medicamentos e armazená-los em um array.
// Em seguida, utilize um laço para percorrer o array e exibir apenas os medicamentos que estão com
// estoque crítico (quantidade menor que 5 unidades), mostrando o nome e a quantidade restante de cada
// um.

export function questao42POO(): void {
    class Medicamento {
        private _nome: string
        private _lote: string
        private _preco: number
        private _quantidadeEstoque: number

        constructor(nome: string, lote: string, preco: number, quantidadeEstoque: number) {
            this._nome = nome
            this._lote = lote
            this._preco = preco
            this._quantidadeEstoque = 0
            this.quantidadeEstoque = quantidadeEstoque
        }

        get nome(): string {
            return this._nome
        }

        set nome(nome: string) {
            this._nome = nome
        }

        get lote(): string {
            return this._lote
        }

        set lote(lote: string) {
            this._lote = lote
        }

        get preco(): number {
            return this._preco
        }

        set preco(preco: number) {
            this._preco = preco
        }

        get quantidadeEstoque(): number {
            return this._quantidadeEstoque
        }

        set quantidadeEstoque(quantidadeEstoque: number) {
            if (quantidadeEstoque >= 0) {
                this._quantidadeEstoque = quantidadeEstoque
            }
            else {
                alert(`A quantidade em estoque não pode ser negativa!`)
            }
        }

    }

    let medicamentos: Medicamento[] = []
    let op: number = 1

    while (op != 2 && medicamentos.length < 10) {
        let nome: string = String(prompt(`Insira o nome do medicamento: `))
        let lote: string = String(prompt(`Insira o lote do medicamento: `))
        let preco: number = Number(prompt(`Insira o preço do medicamento: `))
        let quantidadeEstoque: number = Number(prompt(`Insira a quantidade em estoque: `))

        let medicamento: Medicamento = new Medicamento(nome, lote, preco, quantidadeEstoque)

        medicamentos.push(medicamento)

        if (medicamentos.length < 10) {
            op = Number(prompt(`Deseja cadastrar outro medicamento? (1 - Sim | 2 - Não): `))
        }
        else {
            alert(`Limite de 10 medicamentos atingido!`)
        }

    }

    for (let medicamento of medicamentos) {
        if (medicamento.quantidadeEstoque < 5) {
            alert(`Medicamento: ${medicamento.nome} | Quantidade restante: ${medicamento.quantidadeEstoque}`)
        }
    }
}