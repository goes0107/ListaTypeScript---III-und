// 44. Repetição Encapsulamento Arrays
// Gestão de Manutenção de Computadores
// O setor de suporte técnico do campus precisa de um controle de chamados. Crie a classe Chamado
// com os atributos privados id, descricaoEquipamento, laboratorio e concluido (boolean). Crie
// um método finalizarChamado() que altera o status de concluido para true. O programa deve
// pedir ao técnico para cadastrar os chamados do dia em um array. Após o cadastro, o programa entra

// em um novo laço permitindo que o técnico informe o id dos chamados que ele conseguiu resolver no
// turno para marcá-los como concluídos. Ao final, o sistema exibe o relatório de quantos chamados
// foram atendidos e quantos continuam pendentes.

export function questao44POO(): void {
    class Chamado {
        private _id: number
        private _descricaoEquipamento: string
        private _laboratorio: string
        private _concluido: boolean

        constructor(id: number, descricaoEquipamento: string, laboratorio: string) {
            this._id = id
            this._descricaoEquipamento = descricaoEquipamento
            this._laboratorio = laboratorio
            this._concluido = false
        }

        get id(): number {
            return this._id
        }

        get descricaoEquipamento(): string {
            return this._descricaoEquipamento
        }

        get laboratorio(): string {
            return this._laboratorio
        }

        get concluido(): boolean {
            return this._concluido
        }

        finalizarChamado(): void {
            this._concluido = true
        }
    }

    let chamados: Chamado[] = []
    let op: number = 0

    while (op != 2) {
        let id: number = Number(prompt(`Insira o ID do chamado: `))
        let descricaoEquipamento: string = String(prompt(`Insira a descrição do equipamento: `))
        let laboratorio: string = String(prompt(`Insira o laboratório: `))

        let chamado: Chamado = new Chamado(id, descricaoEquipamento, laboratorio)

        chamados.push(chamado)

        op = Number(prompt(`Deseja cadastrar outro chamado? (1 - Sim | 2 - Não): `))
    }

    for (let chamado of chamados) {
        let resolvido: number = Number(prompt(`O chamado ${chamado.id} foi resolvido? (1 - Sim | 2 - Não): `))

        if (resolvido == 1) {
            chamado.finalizarChamado()
        }
    }

    let atendidos: number = 0
    let pendentes: number = 0

    for (let chamado of chamados) {
        if (chamado.concluido == true) {
            atendidos++
        }
        else {
            pendentes++
        }
    }

    alert(`Chamados atendidos: ${atendidos} | Chamados pendentes: ${pendentes}`)
}