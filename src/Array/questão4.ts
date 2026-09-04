// 4. Calculadora de Média do ENEM
// Um professor de cursinho pré-ENEM precisa de uma ferramenta para calcular a média de seus
// alunos em diferentes disciplinas. Ele quer que a média seja arredondada para duas casas decimais.
// Crie uma função chamada calcular_media(notas) que receba um array de notas como argumento.
// A função deve:
// ● Calcular a média das notas.
// ● Arredondar a média para duas casas decimais.
// ● Retornar o valor da média.

export function questao4array():void {
    function calcular_media(notas: number[]): number {
        let soma: number = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
        let media: number = soma / notas.length
        return media
    }

    let notasAluno: number[] = []
    let notaPrompt: number = Number(prompt("Escolha uma disciplina: 1 - Linguagens | 2 - Humanas | 3 - Natureza | 4 - Matemática | 5 - Redação (ou -1 para encerrar):"))
    while (notaPrompt != -1) {
        if (notaPrompt == 1) {
            notaPrompt = Number(prompt("Insira a nota de Linguagens (ou -1 para encerrar):"))
        }
        else if (notaPrompt == 2) {
            notaPrompt = Number(prompt("Insira a nota de Humanas (ou -1 para encerrar):"))
        }
        else if (notaPrompt == 3) {
            notaPrompt = Number(prompt("Insira a nota de Natureza (ou -1 para encerrar):"))
        }
        else if (notaPrompt == 4) {
            notaPrompt = Number(prompt("Insira a nota de Matemática (ou -1 para encerrar):"))
        }
        else if (notaPrompt == 5) {
            notaPrompt = Number(prompt("Insira a nota de Redação (ou -1 para encerrar):"))
        }
        else {
            console.log("Disciplina inválida. Tente novamente.")
            notaPrompt = Number(prompt("Escolha uma disciplina: 1 - Linguagens | 2 - Humanas | 3 - Natureza | 4 - Matemática | 5 - Redação (ou -1 para encerrar):"))
        }
        if (notaPrompt != -1) {
            notasAluno.push(notaPrompt)
        }
    }
    let mediaAluno: number = calcular_media(notasAluno)
    console.log(`A média do aluno é: ${mediaAluno.toFixed(2)}`)
}