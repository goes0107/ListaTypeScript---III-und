// 23. Cadastro de Produtos de um Supermercado com Desconto Progressivo
// Um mercado de atacado precisa atualizar os preços de suas mercadorias nas prateleiras. Todo produto
// possui código, nome e preço de custo ocultados do acesso externo direto. Os Produtos Perecíveis
// possuem uma data de validade e recebem um desconto de 30% caso estejam no dia do vencimento. Os
// Produtos Não Perecíveis não sofrem alteração de valor. O sistema deve interagir com o gerente para
// listar os produtos do estoque. Após preencher o estoque (array), o programa deve rodar um loop que
// simula a passagem do caixa, aplicando as regras de desconto conforme o tipo do produto e exibindo o
// valor final que o cliente pagará.

export function questao23POO():void{
    class Produto {
        private codigo: string
        private nome: string
        private precoCusto: number

        constructor(codigo: string, nome: string, precoCusto: number) {
            this.codigo = codigo
            this.nome = nome
            this.precoCusto = precoCusto
        }

        public getCodigo(): string {
            return this.codigo
        }

        public getNome(): string {
            return this.nome
        }

        public getPrecoCusto(): number {
            return this.precoCusto
        }

        public calcularPrecoFinal(): number {
            return this.precoCusto
        }

    }

    class ProdutoPerecivel extends Produto {
        private dataValidade: Date

        constructor(codigo: string, nome: string, precoCusto: number, dataValidade: Date) {
            super(codigo, nome, precoCusto)
            this.dataValidade = dataValidade
        }

        public calcularPrecoFinal(): number {
            const hoje: Date = new Date()
            if (this.dataValidade.toDateString() === hoje.toDateString()) {
                return this.getPrecoCusto() * 0.7
            }
            return this.getPrecoCusto()
        }
    }

    class ProdutoNaoPerecivel extends Produto {
        constructor(codigo: string, nome: string, precoCusto: number) {
            super(codigo, nome, precoCusto)
        }

        public calcularPrecoFinal(): number {
            return this.getPrecoCusto()
        }

    }

    let estoque: Produto[] = []

    let resposta: string = ''

    while (resposta.toLowerCase() !== 'n') {
        let tipoProduto: number = Number(prompt('Digite o tipo de produto (1-perecível/2-não perecível): '))
        let codigo: string = String(prompt('Digite o código do produto: '))
        let nome: string = String(prompt('Digite o nome do produto: '))
        let precoCusto: number = Number(prompt('Digite o preço de custo do produto: '))

        if (tipoProduto === 1) {
            let dataValidade: Date = new Date(String(prompt('Digite a data de validade (DD-MM-AAAA): ')))
            estoque.push(new ProdutoPerecivel(codigo, nome, precoCusto, dataValidade))
        } else if (tipoProduto === 2) {
            estoque.push(new ProdutoNaoPerecivel(codigo, nome, precoCusto))
        }

        resposta = String(prompt('Deseja adicionar mais produtos? (s/n): ')).toLowerCase()
    }

    console.log('Relatório de Produtos:')
    for (let produto of estoque) {
        console.log(`Código: ${produto.getCodigo()}, Nome: ${produto.getNome()}, Preço Final: R$ ${produto.calcularPrecoFinal().toFixed(2)}`)
    }
}