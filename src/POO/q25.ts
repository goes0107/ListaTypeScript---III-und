// 25. Aplicativo de Streaming e Assinaturas de Vídeo
// Um provedor de internet quer lançar um serviço de streaming de vídeo. Cada assinatura possui o e-
// mail do usuário e o valor do plano mensal. A Assinatura Padrão dá direito a 2 telas simultâneas. A
// Assinatura Premium dá direito a 4 telas e inclui suporte à resolução 4K. O sistema deve pedir para o
// atendente cadastrar novos clientes e selecionar seus planos correspondentes em um loop. Com os
// dados salvos em uma lista de contratos, o programa deve permitir fazer uma busca pelo e-mail do
// usuário e exibir o contrato detalhado formatado dinamicamente, revelando os benefícios e o preço
// correto do plano escolhido por meio de polimorfismo.

export function questao25POO():void{
    class Assinatura {
        private email: string
        private valorPlano: number

        constructor(email: string, valorPlano: number) {
            this.email = email
            this.valorPlano = valorPlano
        }

        public getEmail(): string {
            return this.email
        }

        public getValorPlano(): number {
            return this.valorPlano
        }

        public exibirDetalhes(): string {
            return `Email: ${this.email}, Valor do Plano: R$ ${this.valorPlano.toFixed(2)}`
        }

    }

    class AssinaturaPadrao extends Assinatura {
        private telasSimultaneas: number = 2

        constructor(email: string, valorPlano: number) {
            super(email, valorPlano)
        }

        public getTelasSimultaneas(): number {
            return this.telasSimultaneas
        }

        public exibirDetalhes(): string {
            return `${super.exibirDetalhes()}, Telas Simultâneas: ${this.telasSimultaneas}`
        }
    }

    class AssinaturaPremium extends Assinatura {
        private telasSimultaneas: number = 4
        private resolucao4K: boolean = true

        constructor(email: string, valorPlano: number) {
            super(email, valorPlano)
        }

        public getTelasSimultaneas(): number {
            return this.telasSimultaneas
        }

        public getResolucao4K(): boolean {
            return this.resolucao4K
        }

        public exibirDetalhes(): string {
            return `${super.exibirDetalhes()}, Telas Simultâneas: ${this.telasSimultaneas}, Resolução 4K: ${this.resolucao4K}`
        }
    }

    let assinaturas: Assinatura[] = []

    let resposta: string = ''

    while (resposta.toLowerCase() !== 'n') {
        let tipoAssinatura: number = Number(prompt('Digite o tipo de tarefa (1-padrão/2-premium): '))

        if (tipoAssinatura == 1) {
            let email: string = String(prompt("Email: "))
            let valor: number = Number(prompt("Valor do plano: "))

            let assinatura = new AssinaturaPadrao(email, valor)
            assinaturas.push(assinatura)
        }

        if (tipoAssinatura == 2) {
            let email: string = String(prompt("Email: "))
            let valor: number = Number(prompt("Valor do plano: "))

            let assinatura = new AssinaturaPremium(email, valor)
            assinaturas.push(assinatura)
        }

        resposta = String(prompt('Deseja cadastrar um novo cliente? (s/n): ')).toLowerCase()
    }
    let busca: string = String(prompt("Digite o e-mail para buscar: "))

    let encontrou: boolean = false

    for (let assinatura of assinaturas) {
        if (assinatura.getEmail() == busca) {
            console.log("Contrato encontrado:")
            console.log(assinatura.exibirDetalhes())
            encontrou = true
        }
    }

    if (!encontrou) {
        console.log("Assinatura não encontrada.")
    }
}