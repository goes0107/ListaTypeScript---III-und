// 33. Crie um sistema de gestão de empréstimos para a biblioteca do campus. A superclasse abstrata Obra possui os
// atributos privados titulo e autor, e declara o método abstrato registrarAtraso(diasDeAtraso) que deve ser
// sobrescrito pelas subclasses. LivroFisico calcula uma multa de R$ 2,50 por dia, enquanto ArtigoDigital não gera
// multa, mas registra uma string de advertência ao usuário. O bibliotecário informa continuamente o título e os dias
// de atraso de cada devolução. O sistema chama registrarAtraso() polimorficamente para cada objeto e, ao encerrar,
// exibe o valor total de multas a ser recolhido pela biblioteca.
// Requisitos mínimos:
// • Superclasse abstrata Obra com método abstrato registrarAtraso(dias).
// • LivroFisico retorna valor de multa; ArtigoDigital retorna mensagem de advertência.
// • Atributos titulo e autor privados, acessíveis apenas por getters.

// • Polimorfismo: percorrer lista com tipo Obra e chamar registrarAtraso().
// • Acumular e exibir total de multas ao final.

export function questao33POO():void{
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