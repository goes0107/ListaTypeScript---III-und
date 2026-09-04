// 32. Desenvolva o motor de pontuação de um jogo arcade. A superclasse Jogador possui os atributos privados nickname
// e pontuacao (iniciada em zero), sendo pontuacao acessível somente pelo método realizarMissao() — nunca
// diretamente. JogadorComum ganha 100 pontos por missão. JogadorPremium sobrescreve realizarMissao() e
// acumula 150 pontos (100 + 50% de bônus). O programa solicita ao usuário o tipo e o apelido de cada jogador. A
// cada rodada, o usuário informa qual jogador realizou uma missão. Ao final do torneio, o programa exibe a
// classificação completa e destaca quem ultrapassou 1.000 pontos.
// Requisitos mínimos:
// • pontuacao privada: modificada apenas por realizarMissao(), nunca diretamente.
// • JogadorPremium sobrescreve realizarMissao() com bônus de 50%.
// • Getter getPontuacao() para leitura controlada.
// • Loop de rodadas com condição de parada por comando do usuário.
// • Exibição final com classificação e destaque para campeões.

export function questao32POO():void{
    class Jogador {
        private nickname: string
        protected pontuacao: number

        constructor(nickname: string) {
            this.nickname = nickname
            this.pontuacao = 0
        }

        getNickname(): string {
            return this.nickname
        }

        getPontuacao(): number {
            return this.pontuacao
        }

        realizarMissao() {
            this.pontuacao += 100
        }
    }

    class JogadorPremium extends Jogador {
        realizarMissao() {
            this.pontuacao += 150
        }
    }

    let jogadores: Jogador[] = []

    let resposta = "s"

    while (resposta != "n") {

        let tipo = Number(prompt("Tipo (1-Comum / 2-Premium): "))
        let nickname: string = String(prompt("Nickname: "))

        if (tipo == 1) {
            jogadores.push(new Jogador(nickname))
        }

        if (tipo == 2) {
            jogadores.push(new JogadorPremium(nickname))
        }

        resposta = String(prompt("Cadastrar outro jogador? (s/n): ")).toLowerCase()
    }

    resposta = "s"

    while (resposta != "n") {

        let nome = prompt("Quem realizou a missão? ")

        for (let jogador of jogadores) {
            if (jogador.getNickname() == nome) {
                jogador.realizarMissao()
            }
        }

        resposta = String(prompt("Continuar outra rodada? (s/n): ")).toLowerCase()
    }

    console.log("CLASSIFICAÇÃO")

    for (let jogador of jogadores) {
        console.log(`${jogador.getNickname()} - ${jogador.getPontuacao()} pontos`)

        if (jogador.getPontuacao() > 1000) {
            console.log("Campeão!")
        }
    }
}