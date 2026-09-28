// 27. Inventário Automatizado de Equipamentos de TI
// Para organizar os laboratórios, crie um sistema de inventário. Todo equipamento possui número de
// tombamento e descrição. Computadores registram memória RAM e Roteadores registram portas.
// O sistema valida os dados, armazena os equipamentos em um array e exibe as fichas ao final.

export function questao27POO(): void {
    class Equipamento {
        private _tombamento: number
        private _descricao: string

        constructor(tombamento: number, descricao: string) {
            this._tombamento = tombamento
            this._descricao = descricao
        }

        get tombamento(): number {
            return this._tombamento
        }

        get descricao(): string {
            return this._descricao
        }

        exibir(): void {}
    }

    class Computador extends Equipamento {
        private _memoriaRAM: number

        constructor(tombamento: number, descricao: string, memoriaRAM: number) {
            super(tombamento, descricao)
            this._memoriaRAM = memoriaRAM
        }

        get memoriaRAM(): number {
            return this._memoriaRAM
        }

        exibir(): void {
            alert(`Tombamento: ${this.tombamento} | Descrição: ${this.descricao} | Memória RAM: ${this.memoriaRAM} GB`)
        }
    }

    class Roteador extends Equipamento {
        private _portas: number

        constructor(tombamento: number, descricao: string, portas: number) {
            super(tombamento, descricao)
            this._portas = portas
        }

        get portas(): number {
            return this._portas
        }

        exibir(): void {
            alert(`Tombamento: ${this.tombamento} | Descrição: ${this.descricao} | Quantidade de portas: ${this.portas}`)
        }
    }

    let equipamentos: Equipamento[] = []
    let op: number = 0

    while (op != 2) {
        let tipo: number = Number(prompt(`Qual equipamento deseja cadastrar? (1 - Computador | 2 - Roteador): `))
        let tombamento: number = Number(prompt(`Insira o número de tombamento: `))
        let descricao: string = String(prompt(`Insira a descrição do equipamento: `))

        if (tombamento <= 0 || descricao == "") {
            alert(`Dados inválidos!`)
        }
        else {
            switch (tipo) {
                case 1:
                    let memoriaRAM: number = Number(prompt(`Insira a quantidade de memória RAM em GB: `))
                    if (memoriaRAM > 0) {
                        let computador: Computador = new Computador(tombamento, descricao, memoriaRAM)
                        equipamentos.push(computador)
                    }
                    else {
                        alert(`Quantidade de memória RAM inválida!`)
                    }
                    break
                case 2:
                    let portas: number = Number(prompt(`Insira a quantidade de portas do roteador: `))
                    if (portas > 0) {
                        let roteador: Roteador = new Roteador(tombamento, descricao, portas)
                        equipamentos.push(roteador)
                    }
                    else {
                        alert(`Quantidade de portas inválida!`)
                    }
                    break
                default:
                    alert(`Insira uma opção válida!`)
                    break
            }
        }

        op = Number(prompt(`Deseja cadastrar outro equipamento? (1 - Sim | 2 - Não): `))
    }

    for (let equipamento of equipamentos) {
        equipamento.exibir()
    }
}
