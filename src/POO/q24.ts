// 24. Gerenciador de Tarefas e Produtividade Acadêmica
// Uma tarefa possui descrição e status de concluída. Uma Tarefa Acadêmica inclui a disciplina e uma
// Tarefa Pessoal inclui a prioridade. O programa permite cadastrar, concluir e listar tarefas pendentes.

export function questao24POO(): void {
    class Tarefa {
        private _descricao: string
        private _concluida: boolean

        constructor(descricao: string) {
            this._descricao = descricao
            this._concluida = false
        }

        get descricao(): string {
            return this._descricao
        }

        get concluida(): boolean {
            return this._concluida
        }

        marcarConcluida(): void {
            this._concluida = true
        }
    }

    class TarefaAcademica extends Tarefa {
        private _disciplina: string

        constructor(descricao: string, disciplina: string) {
            super(descricao)
            this._disciplina = disciplina
        }

        get disciplina(): string {
            return this._disciplina
        }
    }

    class TarefaPessoal extends Tarefa {
        private _prioridade: number

        constructor(descricao: string, prioridade: number) {
            super(descricao)
            this._prioridade = prioridade
        }

        get prioridade(): number {
            return this._prioridade
        }
    }

    let tarefas: Tarefa[] = []
    let op: number = 0

    while (op != 5) {
        op = Number(prompt(`Escolha uma opção: (1 - Cadastrar tarefa acadêmica | 2 - Cadastrar tarefa pessoal | 3 - Marcar tarefa como concluída | 4 - Listar tarefas acadêmicas pendentes | 5 - Sair): `))

        switch (op) {
            case 1:
                let descricaoTA: string = String(prompt(`Insira a descrição da tarefa: `))
                let disciplina: string = String(prompt(`Insira a disciplina: `))
                let tarefaAcademica: TarefaAcademica = new TarefaAcademica(descricaoTA, disciplina)
                tarefas.push(tarefaAcademica)
                break
            case 2:
                let descricaoTP: string = String(prompt(`Insira a descrição da tarefa: `))
                let prioridade: number = Number(prompt(`Insira a prioridade (1 - Baixa | 2 - Média | 3 - Alta): `))
                let tarefaPessoal: TarefaPessoal = new TarefaPessoal(descricaoTP, prioridade)
                tarefas.push(tarefaPessoal)
                break
            case 3:
                let descricaoBusca: string = String(prompt(`Insira a descrição da tarefa concluída: `))
                let encontrada: boolean = false

                for (let tarefa of tarefas) {
                    if (tarefa.descricao == descricaoBusca) {
                        tarefa.marcarConcluida()
                        encontrada = true
                        alert(`Tarefa marcada como concluída!`)
                    }
                }

                if (encontrada == false) {
                    alert(`Tarefa não encontrada!`)
                }
                break
            case 4:
                for (let tarefa of tarefas) {
                    if (tarefa instanceof TarefaAcademica && tarefa.concluida == false) {
                        alert(`Descrição: ${tarefa.descricao} | Disciplina: ${tarefa.disciplina}`)
                    }
                }
                break
            case 5:
                alert(`Programa encerrado!`)
                break
            default:
                alert(`Insira uma opção válida!`)
                break
        }
    }
}
