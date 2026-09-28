// 25. Aplicativo de Streaming e Assinaturas de Vídeo
// Cada assinatura possui e-mail e valor do plano. A Assinatura Padrão possui 2 telas simultâneas.
// A Assinatura Premium possui 4 telas e resolução 4K. O sistema cadastra as assinaturas em um array
// e permite buscar um contrato pelo e-mail.

export function questao25POO(): void {
    class Assinatura {
        private _email: string
        private _valorPlano: number

        constructor(email: string, valorPlano: number) {
            this._email = email
            this._valorPlano = valorPlano
        }

        get email(): string {
            return this._email
        }

        get valorPlano(): number {
            return this._valorPlano
        }

        exibirDetalhes(): void {
            alert(`Email: ${this.email} | Valor do plano: R$${this.valorPlano.toFixed(2)}`)
        }
    }

    class AssinaturaPadrao extends Assinatura {
        private _telasSimultaneas: number

        constructor(email: string, valorPlano: number) {
            super(email, valorPlano)
            this._telasSimultaneas = 2
        }

        get telasSimultaneas(): number {
            return this._telasSimultaneas
        }

        exibirDetalhes(): void {
            alert(`Email: ${this.email} | Valor do plano: R$${this.valorPlano.toFixed(2)} | Telas simultâneas: ${this.telasSimultaneas}`)
        }
    }

    class AssinaturaPremium extends Assinatura {
        private _telasSimultaneas: number
        private _resolucao4K: boolean

        constructor(email: string, valorPlano: number) {
            super(email, valorPlano)
            this._telasSimultaneas = 4
            this._resolucao4K = true
        }

        get telasSimultaneas(): number {
            return this._telasSimultaneas
        }

        get resolucao4K(): boolean {
            return this._resolucao4K
        }

        exibirDetalhes(): void {
            alert(`Email: ${this.email} | Valor do plano: R$${this.valorPlano.toFixed(2)} | Telas simultâneas: ${this.telasSimultaneas} | Resolução 4K: Sim`)
        }
    }

    let assinaturas: Assinatura[] = []
    let op: number = 0

    while (op != 2) {
        let tipoAssinatura: number = Number(prompt(`Qual é o tipo da assinatura? (1 - Padrão | 2 - Premium): `))
        let email: string = String(prompt(`Insira o e-mail do cliente: `))
        let valorPlano: number = Number(prompt(`Insira o valor do plano: `))

        switch (tipoAssinatura) {
            case 1:
                let assinaturaPadrao: AssinaturaPadrao = new AssinaturaPadrao(email, valorPlano)
                assinaturas.push(assinaturaPadrao)
                break
            case 2:
                let assinaturaPremium: AssinaturaPremium = new AssinaturaPremium(email, valorPlano)
                assinaturas.push(assinaturaPremium)
                break
            default:
                alert(`Insira uma opção válida!`)
                break
        }

        op = Number(prompt(`Deseja cadastrar outra assinatura? (1 - Sim | 2 - Não): `))
    }

    let emailBusca: string = String(prompt(`Insira o e-mail que deseja buscar: `))
    let encontrou: boolean = false

    for (let assinatura of assinaturas) {
        if (assinatura.email == emailBusca) {
            assinatura.exibirDetalhes()
            encontrou = true
        }
    }

    if (encontrou == false) {
        alert(`Assinatura não encontrada!`)
    }
}
