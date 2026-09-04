// 7. Lista de Presença

// 1. Crie um array chamado presenca que aceite apenas strings.
// 2. Adicione 5 nomes de alunos.
// 3. Tente adicionar um número e observe o erro do compilador.
// 4. Use um loop para imprimir cada nome em letras maiúsculas.

export function questao7array(): void {
    let presenca: string[] = []
    
    for (let i = 0; i < 5; i++) {
        let nome: string = String(prompt(`Digite o nome do aluno ${i + 1}:`))
        presenca.push(nome)
    }

    for (let i = 0; i < presenca.length; i++) {
        console.log(presenca[i].toUpperCase())
    }
}