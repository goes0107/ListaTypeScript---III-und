// 21. Concurso de Projetos de Extensão Reforest
// O projeto socioambiental "Flor&Ser" abriu inscrições para novas propostas de reflorestamento no
// campus. Cada projeto inscrito possui título, coordenador e uma nota de avaliação avaliada de forma
// estrita (protegida por métodos de validação para que não receba valores fora do intervalo de 0 a 10).
// Existem Projetos Verdes (focados em plantio urbano) e Projetos Culturais (focados em conscientização).
// O programa calcula a média das notas e lista, em ordem inversa, os projetos acima da média.

export function questao21POO(): void {
    class Projeto {
        private _titulo: string
        private _coordenador: string
        private _nota: number

        constructor(titulo: string, coordenador: string, nota: number) {
            this._titulo = titulo
            this._coordenador = coordenador
            this._nota = 0
            this.nota = nota
        }

        get titulo(): string {
            return this._titulo
        }

        get coordenador(): string {
            return this._coordenador
        }

        get nota(): number {
            return this._nota
        }

        set nota(nota: number) {
            if (nota >= 0 && nota <= 10) {
                this._nota = nota
            }
            else {
                alert(`Nota inválida! A nota deve estar entre 0 e 10.`)
            }
        }

        descricaoCategoria(): string {
            return ""
        }
    }

    class ProjetoVerde extends Projeto {
        descricaoCategoria(): string {
            return "Projeto Verde - Plantio urbano"
        }
    }

    class ProjetoCultural extends Projeto {
        descricaoCategoria(): string {
            return "Projeto Cultural - Conscientização"
        }
    }

    let projetos: Projeto[] = []
    let op: number = 0

    while (op != 2) {
        let tipoProjeto: number = Number(prompt(`Qual é o tipo do projeto? (1 - Projeto Verde | 2 - Projeto Cultural): `))
        let titulo: string = String(prompt(`Insira o título do projeto: `))
        let coordenador: string = String(prompt(`Insira o nome do coordenador: `))
        let nota: number = Number(prompt(`Insira a nota do projeto: `))

        switch (tipoProjeto) {
            case 1:
                let projetoVerde: ProjetoVerde = new ProjetoVerde(titulo, coordenador, nota)
                projetos.push(projetoVerde)
                break
            case 2:
                let projetoCultural: ProjetoCultural = new ProjetoCultural(titulo, coordenador, nota)
                projetos.push(projetoCultural)
                break
            default:
                alert(`Insira uma opção válida!`)
                break
        }

        op = Number(prompt(`Deseja cadastrar outro projeto? (1 - Sim | 2 - Não): `))
    }

    let somaNotas: number = 0

    for (let projeto of projetos) {
        somaNotas += projeto.nota
    }

    if (projetos.length > 0) {
        let mediaNotas: number = somaNotas / projetos.length
        alert(`Média das notas: ${mediaNotas.toFixed(2)}`)

        for (let i: number = projetos.length - 1; i >= 0; i--) {
            if (projetos[i].nota > mediaNotas) {
                alert(`Título: ${projetos[i].titulo} | Coordenador: ${projetos[i].coordenador} | Nota: ${projetos[i].nota} | Categoria: ${projetos[i].descricaoCategoria()}`)
            }
        }
    }
}
