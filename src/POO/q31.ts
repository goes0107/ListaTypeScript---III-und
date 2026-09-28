// 31. Projeto Flor&Ser
// A superclasse Projeto possui título, coordenador e nota privados. A nota deve ser validada entre 0 e 10.
// ProjetoVerde e ProjetoCultural sobrescrevem descricaoCategoria(). Ao final, o programa calcula a média
// e exibe os projetos com nota acima dela usando polimorfismo.

export function questao31POO(): void {
    abstract class Projeto {
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

        abstract descricaoCategoria(): string
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
        let tipo: number = Number(prompt(`Qual é o tipo do projeto? (1 - Projeto Verde | 2 - Projeto Cultural): `))
        let titulo: string = String(prompt(`Insira o título do projeto: `))
        let coordenador: string = String(prompt(`Insira o coordenador do projeto: `))
        let nota: number = Number(prompt(`Insira a nota do projeto: `))

        switch (tipo) {
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
        let media: number = somaNotas / projetos.length
        alert(`Média das notas: ${media.toFixed(2)}`)

        for (let projeto of projetos) {
            if (projeto.nota > media) {
                alert(`Título: ${projeto.titulo} | Coordenador: ${projeto.coordenador} | Nota: ${projeto.nota} | Categoria: ${projeto.descricaoCategoria()}`)
            }
        }
    }
}
