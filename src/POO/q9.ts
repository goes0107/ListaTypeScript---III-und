// 9. Uma loja deseja controlar seu estoque de produtos. O sistema deve pedir ao usuário o nome do
// produto, o preço e a quantidade em estoque. Cada produto deve ser representado por um objeto. Crie
// um método que calcule o valor total em estoque (preço × quantidade) e exiba essa informação para
// cada produto.

export function questao9POO():void{
    class Produto {
        nome: string
        preco: number
        quantidade: number

        constructor(nome: string, preco: number, quantidade: number) {
            this.nome = nome
            this.preco = preco
            this.quantidade = quantidade
        }

        calcularValorTotal(): number {
            return this.preco * this.quantidade
        }
    }

    let produtos: Produto[] = []

    let resposta: string = ''

    while (resposta.toLowerCase() !== 'n') {
        let nome: string = String(prompt('Insira o nome do produto: '))
        let preco: number = Number(prompt('Insira o preço do produto: '))
        let quantidade: number = Number(prompt('Insira a quantidade em estoque: '))

        let newProduto: Produto = new Produto(nome, preco, quantidade)
        produtos.push(newProduto)

        resposta = String(prompt('Deseja cadastrar outro produto? (s/n): ')).toLowerCase()
    }

    console.log('Resumo dos produtos cadastrados:')
    for (let produto of produtos) {
        let valorTotal: number = produto.calcularValorTotal()
        console.log(`Produto: ${produto.nome}, Preço: ${produto.preco}, Quantidade: ${produto.quantidade}, Valor total em estoque: ${valorTotal}`)
    }
}