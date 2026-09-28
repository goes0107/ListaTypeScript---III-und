// 29. Catálogo de Biblioteca com Penalidades de Atraso
// Livros Físicos possuem multa de R$ 2,50 por dia de atraso. Artigos Digitais não geram multa,
// mas registram uma advertência virtual. Ao final, o sistema exibe o total de multas.

export function questao29POO(): void {

    class Obra {
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

        calcularPenalidade(dias: number): number {
            return 0
        }

        exibir(dias: number): void {
            alert(`Título: ${this.titulo} | Autor: ${this.autor} | Dias de atraso: ${dias}`)
        }
    }

    class LivroFisico extends Obra {
        calcularPenalidade(dias: number): number {
            let multa: number = dias * 2.5
            return multa
        }

        exibir(dias: number): void {
            alert(`Título: ${this.titulo} | Autor: ${this.autor} | Dias de atraso: ${dias} | Multa: R$${this.calcularPenalidade(dias).toFixed(2)}`)
        }
    }

    class ArtigoDigital extends Obra {
        exibir(dias: number): void {
            alert(`Título: ${this.titulo} | Autor: ${this.autor} | Dias de atraso: ${dias} | Advertência virtual registrada.`)
        }
    }

    class Emprestimo {
        private _obra: Obra
        private _dias: number

        constructor(obra: Obra, dias: number) {
            this._obra = obra
            this._dias = dias
        }

        get obra(): Obra {
            return this._obra
        }

        get dias(): number {
            return this._dias
        }
    }

    let emprestimos: Emprestimo[] = []
    let op: number = 0

    while (op != 2) {
        let tipo: number = Number(prompt(`Qual é o tipo da obra? (1 - Livro físico | 2 - Artigo digital): `))
        let titulo: string = String(prompt(`Insira o título: `))
        let autor: string = String(prompt(`Insira o autor: `))
        let dias: number = Number(prompt(`Insira os dias de atraso: `))

        switch (tipo) {
            case 1:
                let livro: LivroFisico = new LivroFisico(titulo, autor)
                let emprestimoLivro: Emprestimo = new Emprestimo(livro, dias)
                emprestimos.push(emprestimoLivro)
                break
            case 2:
                let artigo: ArtigoDigital = new ArtigoDigital(titulo, autor)
                let emprestimoArtigo: Emprestimo = new Emprestimo(artigo, dias)
                emprestimos.push(emprestimoArtigo)
                break
            default:
                alert(`Insira uma opção válida!`)
                break
        }

        op = Number(prompt(`Deseja cadastrar outro empréstimo? (1 - Sim | 2 - Não): `))
    }

    let totalMultas: number = 0

    for (let item of emprestimos) {
        item.obra.exibir(item.dias)
        totalMultas += item.obra.calcularPenalidade(item.dias)
    }

    alert(`Total de multas: R$${totalMultas.toFixed(2)}`)
}
