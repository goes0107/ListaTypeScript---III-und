// 33. Gestão de Empréstimos para Biblioteca
// A superclasse abstrata Obra possui título e autor privados e o método abstrato registrarAtraso().
// LivroFisico calcula multa de R$ 2,50 por dia. ArtigoDigital registra uma advertência virtual.
// Ao final, o sistema soma e exibe o total das multas.

export function questao33POO(): void {
    abstract class Obra {
        private _titulo: string
        private _autor: string

        constructor(titulo: string, autor: string) {
            this._titulo = titulo
            this._autor = autor
        }

        get titulo(): string {
            return this._titulo
        }

        get autor(): string {
            return this._autor
        }

        abstract registrarAtraso(diasDeAtraso: number): number | string
    }

    class LivroFisico extends Obra {
        registrarAtraso(diasDeAtraso: number): number {
            let multa: number = diasDeAtraso * 2.5
            return multa
        }
    }

    class ArtigoDigital extends Obra {
        registrarAtraso(diasDeAtraso: number): string {
            return "Advertência virtual registrada."
        }
    }

    class Emprestimo {
        private _obra: Obra
        private _diasDeAtraso: number

        constructor(obra: Obra, diasDeAtraso: number) {
            this._obra = obra
            this._diasDeAtraso = diasDeAtraso
        }

        get obra(): Obra {
            return this._obra
        }

        get diasDeAtraso(): number {
            return this._diasDeAtraso
        }
    }

    let emprestimos: Emprestimo[] = []
    let op: number = 0

    while (op != 2) {
        let tipo: number = Number(prompt(`Qual é o tipo da obra? (1 - Livro físico | 2 - Artigo digital): `))
        let titulo: string = String(prompt(`Insira o título da obra: `))
        let autor: string = String(prompt(`Insira o autor da obra: `))
        let diasDeAtraso: number = Number(prompt(`Insira os dias de atraso: `))

        switch (tipo) {
            case 1:
                let livro: LivroFisico = new LivroFisico(titulo, autor)
                let emprestimoLivro: Emprestimo = new Emprestimo(livro, diasDeAtraso)
                emprestimos.push(emprestimoLivro)
                break
            case 2:
                let artigo: ArtigoDigital = new ArtigoDigital(titulo, autor)
                let emprestimoArtigo: Emprestimo = new Emprestimo(artigo, diasDeAtraso)
                emprestimos.push(emprestimoArtigo)
                break
            default:
                alert(`Insira uma opção válida!`)
                break
        }

        op = Number(prompt(`Deseja cadastrar outro empréstimo? (1 - Sim | 2 - Não): `))
    }

    let totalMultas: number = 0

    for (let emprestimo of emprestimos) {
        let resultado: number | string = emprestimo.obra.registrarAtraso(emprestimo.diasDeAtraso)

        if (typeof resultado == "number") {
            totalMultas += resultado
            alert(`Título: ${emprestimo.obra.titulo} | Autor: ${emprestimo.obra.autor} | Multa: R$${resultado.toFixed(2)}`)
        }
        else {
            alert(`Título: ${emprestimo.obra.titulo} | Autor: ${emprestimo.obra.autor} | ${resultado}`)
        }
    }

    alert(`Total de multas: R$${totalMultas.toFixed(2)}`)
}
