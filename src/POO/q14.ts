// 14. Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.

export function questao14POO():void{
    class Livro {
        titulo: string
        autor: string
        anoPublicacao: number
        disponivel: boolean

        constructor(titulo: string, autor: string, anoPublicacao: number, disponivel: boolean) {
            this.titulo = titulo
            this.autor = autor
            this.anoPublicacao = anoPublicacao
            this.disponivel = disponivel
        }
    }

    let livros: Livro[] = []

    for (let i = 0; i < 15; i++) {
        let titulo: string = String(prompt('Insira o título do livro: '))
        let autor: string = String(prompt('Insira o autor do livro: '))
        let anoPublicacao: number = Number(prompt('Insira o ano de publicação do livro: '))
        let disponivel: boolean = Boolean(prompt('O livro está disponível? (true/false): '))

        let newLivro: Livro = new Livro(titulo, autor, anoPublicacao, disponivel)
        livros.push(newLivro)
    }

    let tituloPesquisa: string = String(prompt('Insira o título do livro que deseja emprestar: '))
    let livroEncontrado: Livro | undefined = livros.find(livro => livro.titulo.toLowerCase() === tituloPesquisa.toLowerCase())

    if (livroEncontrado) {
        if (livroEncontrado.disponivel) {
            livroEncontrado.disponivel = false
            console.log(`O livro "${livroEncontrado.titulo}" foi emprestado com sucesso.`)
        } else {
            console.log(`O livro "${livroEncontrado.titulo}" não está disponível para empréstimo.`)
        }
    } else {
        console.log(`O livro com título "${tituloPesquisa}" não foi encontrado.`)
    }

    console.log('Livros disponíveis:')
    for (let livro of livros) {
        if (livro.disponivel) {
            console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Ano de Publicação: ${livro.anoPublicacao}`)
        }
    }
}