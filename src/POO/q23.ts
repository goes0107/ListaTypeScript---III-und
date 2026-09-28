// 23. Cadastro de Produtos de um Supermercado com Desconto Progressivo
// Todo produto possui código, nome e preço de custo privados. Produtos Perecíveis possuem data de
// validade e recebem 30% de desconto caso estejam no dia do vencimento. Produtos Não Perecíveis
// não sofrem alteração de valor.

export function questao23POO(): void {

    class Produto {
        private _codigo: string
        private _nome: string
        private _precoCusto: number

        constructor(codigo: string, nome: string, precoCusto: number) {
            this._codigo = codigo
            this._nome = nome
            this._precoCusto = precoCusto
        }

        get codigo(): string {
            return this._codigo
        }

        get nome(): string {
            return this._nome
        }

        get precoCusto(): number {
            return this._precoCusto
        }

        calcularPrecoFinal(dataAtual: string): number {
            return this.precoCusto
        }
    }

    class ProdutoPerecivel extends Produto {
        private _dataValidade: string

        constructor(codigo: string, nome: string, precoCusto: number, dataValidade: string) {
            super(codigo, nome, precoCusto)
            this._dataValidade = dataValidade
        }

        get dataValidade(): string {
            return this._dataValidade
        }

        calcularPrecoFinal(dataAtual: string): number {
            let valorFinal: number = this.precoCusto

            if (this.dataValidade == dataAtual) {
                valorFinal = this.precoCusto * 0.70
            }

            return valorFinal
        }
    }

    class ProdutoNaoPerecivel extends Produto {
        calcularPrecoFinal(dataAtual: string): number {
            return this.precoCusto
        }
    }

    let estoque: Produto[] = []
    let op: number = 0

    while (op != 2) {
        let tipoProduto: number = Number(prompt(`Qual é o tipo do produto? (1 - Perecível | 2 - Não perecível): `))
        let codigo: string = String(prompt(`Insira o código do produto: `))
        let nome: string = String(prompt(`Insira o nome do produto: `))
        let precoCusto: number = Number(prompt(`Insira o preço de custo do produto: `))

        switch (tipoProduto) {
            case 1:
                let dataValidade: string = String(prompt(`Insira a data de validade (DD/MM/AAAA): `))
                let produtoPerecivel: ProdutoPerecivel = new ProdutoPerecivel(codigo, nome, precoCusto, dataValidade)
                estoque.push(produtoPerecivel)
                break
            case 2:
                let produtoNaoPerecivel: ProdutoNaoPerecivel = new ProdutoNaoPerecivel(codigo, nome, precoCusto)
                estoque.push(produtoNaoPerecivel)
                break
            default:
                alert(`Insira uma opção válida!`)
                break
        }

        op = Number(prompt(`Deseja cadastrar outro produto? (1 - Sim | 2 - Não): `))
    }

    let dataAtual: string = String(prompt(`Insira a data de hoje (DD/MM/AAAA): `))

    for (let produto of estoque) {
        let precoFinal: number = produto.calcularPrecoFinal(dataAtual)
        alert(`Código: ${produto.codigo} | Produto: ${produto.nome} | Preço final: R$${precoFinal.toFixed(2)}`)
    }
}
