// 21. Concurso de Projetos de Extensão Reforest
// O projeto socioambiental &quot;Flor&amp;Ser&quot; abriu inscrições para novas propostas de reflorestamento no
// campus. Cada projeto inscrito possui título, coordenador e uma nota de avaliação avaliada de forma
// estrita (protegida por métodos de validação para que não receba valores fora do intervalo de 0 a 10).
// Existem Projetos Verdes (focados em plantio urbano) e Projetos Culturais (focados em
// conscientização). O usuário deve preencher a lista de projetos avaliados através do terminal. O
// programa deve calcular a média aritmética de todas as notas usando estruturas de array e, em seguida,
// listar de forma inversa à inscrição quais projetos ganharam nota acima da média da competição.

export function questao21POO():void{
    class Projeto {
    private titulo: string
    private coordenador: string
    private nota: number

    constructor(titulo: string, coordenador: string, nota: number) {
        this.titulo = titulo
        this.coordenador = coordenador
        this.nota = nota
    }

    getTitulo(): string {
        return this.titulo
    }

    getCoordenador(): string {
        return this.coordenador
    }

    getNota(): number {
        return this.nota
    }

    setNota(nota: number): void {
        if (nota >= 0 && nota <= 10) {
        this.nota = nota
        } else {
        console.error("Nota inválida. Deve estar entre 0 e 10.")
        }
    }
    }

    class ProjetoVerde extends Projeto {
    descricaoCategoria(): string {
        return "Projeto Verde: Focado em plantio urbano."
    } 
    }

    class ProjetoCultural extends Projeto {
    descricaoCategoria(): string {
        return "Projeto Cultural: Focado em conscientização."
    }
    }

    let projetos: Projeto[] = []

    let resposta: string = ''

    while (resposta.toLowerCase() !== 'n') {
        let titulo: string = String(prompt('Insira o título do projeto: '))
        let coordenador: string = String(prompt('Insira o nome do coordenador: '))
        let nota: number = Number(prompt('Insira a nota do projeto (0 a 10): '))

        let tipo: number = Number(prompt('Insira o tipo de projeto (1-Verde/2-Cultural): '))

        let newProjeto: Projeto

        if (tipo === 1) {
            newProjeto = new ProjetoVerde(titulo, coordenador, nota)
            projetos.push(newProjeto)
        } else if (tipo === 2) {
            newProjeto = new ProjetoCultural(titulo, coordenador, nota)
            projetos.push(newProjeto)
        }

        resposta = String(prompt('Deseja cadastrar outro projeto? (s/n): ')).toLowerCase()
    }

    let somaNotas: number = 0
    for (let projeto of projetos) {
        somaNotas += projeto.getNota()
    }

    let mediaNotas: number = somaNotas / projetos.length

    console.log(`Média das notas: ${mediaNotas.toFixed(2)}`)
    console.log('Projetos com nota acima da média (em ordem inversa):')
    for (let i = projetos.length - 1; i >= 0; i--) {
        if (projetos[i].getNota() > mediaNotas) {
            console.log(`Título: ${projetos[i].getTitulo()}, Coordenador: ${projetos[i].getCoordenador()}, Nota: ${projetos[i].getNota()}`)
        }
    }
}