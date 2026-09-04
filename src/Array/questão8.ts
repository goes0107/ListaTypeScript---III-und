// 8. Boletim Híbrido
// 1. Crie um array chamado notasSemestre que possa receber number ou a string &quot;N.A&quot; (Não
// Avaliado).
// 2. Insira os valores: 8.5, 10, &quot;N.A&quot;, 7.2.
// 3. Crie uma lógica que percorra o array e:
//  Se for um número, imprima: &quot;Nota: [valor]&quot;.
//  Se for &quot;N.A&quot;, imprima: &quot;O aluno não realizou a prova&quot;.

export function questao8array(): void {
    let notasSemestre: (number | string)[] = [8.5, 10, "N.A", 7.2]

    for (let i = 0; i < notasSemestre.length; i++) {
        if (typeof notasSemestre[i] === "number") {
            console.log(`Nota: ${notasSemestre[i]}`)
        } 
        else {
            console.log("O aluno não realizou a prova")
        }
    }
}