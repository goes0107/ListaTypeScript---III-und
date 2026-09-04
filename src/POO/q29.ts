// 29. Catálogo de Biblioteca com Penalidades de Atraso
// Escreva um programa para gerenciar os empréstimos da biblioteca do campus. Cada obra possui título
// e autor. As obras dividem-se em Livros Físicos e Artigos Científicos Digitais. Os Livros Físicos
// possuem um método para calcular a multa por atraso (R$ 2,50 por dia de atraso), enquanto os Artigos
// Digitais não geram multa física, mas registram uma advertência virtual ao usuário. O programa deve
// solicitar continuamente que o bibliotecário informe o título da obra emprestada e a quantidade de dias
// de atraso na devolução. Todos os registros devem ser salvos em uma lista e, ao encerrar, o sistema
// exibe o valor total de multas que a biblioteca deve recolher.

export function questao29POO():void{
    class Obra {
        titulo: string
        autor: string

        constructor(titulo: string, autor: string) {
            this.titulo = titulo
            this.autor = autor
        }

        calcularPenalidade(dias: number): number {
            return 0
        }

        exibir(dias: number): string {
            return `Título: ${this.titulo}
    Autor: ${this.autor}
    Dias de atraso: ${dias}`
        }
    }

    class LivroFisico extends Obra {

        calcularPenalidade(dias: number): number {
            return dias * 2.5
        }

        exibir(dias: number): string {
            return `${super.exibir(dias)}
    Multa: R$ ${this.calcularPenalidade(dias).toFixed(2)}`
        }
    }

    class ArtigoDigital extends Obra {

        exibir(dias: number): string {
            return `${super.exibir(dias)}
    Advertência virtual registrada.`
        }
    }

    class Emprestimo {
        obra: Obra
        dias: number

        constructor(obra: Obra, dias: number) {
            this.obra = obra
            this.dias = dias
        }
    }

    let emprestimos: Emprestimo[] = []

    let resposta = "s"
    let totalMultas = 0

    while (resposta != "n") {

        let tipo = Number(prompt("Tipo (1-Livro / 2-Artigo): "))

        let titulo: string = String(prompt("Título: "))
        let autor: string = String(prompt("Autor: "))
        let dias: number = Number(prompt("Dias de atraso: "))

        if (tipo == 1) {
            let livro = new LivroFisico(titulo, autor)
            emprestimos.push(new Emprestimo(livro, dias))
        }

        if (tipo == 2) {
            let artigo = new ArtigoDigital(titulo, autor)
            emprestimos.push(new Emprestimo(artigo, dias))
        }

        resposta = String(prompt("Deseja cadastrar outro empréstimo? (s/n): ")).toLowerCase()
    }

    console.log("REGISTROS")

    for (let item of emprestimos) {
        console.log(item.obra.exibir(item.dias))

        totalMultas += item.obra.calcularPenalidade(item.dias)
    }

    console.log(`Total de multas: R$ ${totalMultas.toFixed(2)}`)
}