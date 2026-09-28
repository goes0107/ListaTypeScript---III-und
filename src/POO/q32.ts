// 32. Motor de Pontuação de um Jogo Arcade
// Jogador inicia com pontuação zero. JogadorComum recebe 100 pontos por missão e JogadorPremium
// recebe 150 pontos. O sistema permite cadastrar jogadores, registrar missões e exibir a classificação.

export function questao32POO(): void {
    class Jogador {
        private _nickname: string
        protected _pontuacao: number

        constructor(nickname: string) {
            this._nickname = nickname
            this._pontuacao = 0
        }

        get nickname(): string {
            return this._nickname
        }

        get pontuacao(): number {
            return this._pontuacao
        }

        realizarMissao(): void {
            this._pontuacao += 100
        }
    }

    class JogadorPremium extends Jogador {
        realizarMissao(): void {
            this._pontuacao += 150
        }
    }

    let jogadores: Jogador[] = []
    let op: number = 0

    while (op != 3) {
        op = Number(prompt(`Escolha uma opção: (1 - Cadastrar jogador | 2 - Registrar missão | 3 - Encerrar torneio): `))

        switch (op) {
            case 1:
                let tipo: number = Number(prompt(`Qual é o tipo do jogador? (1 - Comum | 2 - Premium): `))
                let nickname: string = String(prompt(`Insira o nickname do jogador: `))

                if (tipo == 1) {
                    let jogador: Jogador = new Jogador(nickname)
                    jogadores.push(jogador)
                }
                else if (tipo == 2) {
                    let jogadorPremium: JogadorPremium = new JogadorPremium(nickname)
                    jogadores.push(jogadorPremium)
                }
                else {
                    alert(`Insira uma opção válida!`)
                }
                break

            case 2:
                let nomeBusca: string = String(prompt(`Qual jogador realizou a missão? `))
                let encontrado: boolean = false

                for (let jogador of jogadores) {
                    if (jogador.nickname == nomeBusca) {
                        jogador.realizarMissao()
                        encontrado = true
                        alert(`Missão registrada para ${jogador.nickname}!`)
                    }
                }

                if (encontrado == false) {
                    alert(`Jogador não encontrado!`)
                }
                break

            case 3:
                alert(`Torneio encerrado!`)
                break

            default:
                alert(`Insira uma opção válida!`)
                break
        }
    }

    for (let jogador of jogadores) {
        if (jogador.pontuacao > 1000) {
            alert(`Jogador: ${jogador.nickname} | Pontuação: ${jogador.pontuacao} | Campeão!`)
        }
        else {
            alert(`Jogador: ${jogador.nickname} | Pontuação: ${jogador.pontuacao}`)
        }
    }
}
