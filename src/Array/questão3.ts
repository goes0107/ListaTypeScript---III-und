// 3. Gerador de Lista de Compras Personalizada
// Sua mãe pediu para você fazer uma lista de compras para o supermercado. Ela quer que você possa
// adicionar itens e a quantidade de cada um.
// Crie uma função chamada gerar_lista_compras() que não recebe argumentos. A função deve:
// ● Permitir que o usuário adicione itens à lista(array) até que ele digite &quot;fim&quot;.
// ● Permitir que o usuário apresente todos os itens da lista.
// ● Permitir que o usuário apresente quantos itens há na lista.
// ● Permitir que o usuário remova itens da lista.

// 85. Gerador de Lista de Compras Personalizada
// Sua mãe pediu para você fazer uma lista de compras para o supermercado. Ela quer que você possa
// adicionar itens e a quantidade de cada um.
// Crie uma função chamada gerar_lista_compras() que não recebe argumentos. A função deve:
// ● Permitir que o usuário adicione itens à lista até que ele digite &quot;fim&quot;.
// ● Permitir que o usuário apresente todos os itens da lista.
// ● Permitir que o usuário apresente quantos itens há na lista.
// ● Permitir que o usuário remova itens da lista.


export function questao3array():void {
    function gerar_lista_compras():void{
        let itens: string[] = []
        let quantidades: number[] = []
        let opcao: number = 0

        while (opcao != 5) {
            opcao = Number(window.prompt("1. Add | 2. Ver lista | 3. Total | 4. Remover | 5. Sair"))

            if (opcao == 1) {
                let nome: string = String(prompt("Nome do item (ou 'fim'):"))
                
                while (nome != "fim") {
                    let qtd: number = Number(window.prompt(`Insira a quantidade do item ${nome}:`))

                    itens.push(nome)
                    quantidades.push(qtd)
                    
                    nome = String(prompt("Próximo item (ou 'fim'):"))
                }
            }

            if (opcao == 2) {
                let listaCompleta: string = ""
                for (let i = 0; i < itens.length; i++) {
                    listaCompleta = listaCompleta + itens[i] + ": " + quantidades[i] + "\n"
                }
                console.log(`Sua lista de compras:\n${listaCompleta}`)
            }

            if (opcao == 3) {
                console.log(`Total de itens na lista: ${itens.length}`)
            }

            if (opcao == 4) {
                let itemParaRemover: string = String(prompt("Nome do item para apagar:"))
                let posicao: number = itens.indexOf(itemParaRemover)

                if (posicao > -1) {
                    itens.splice(posicao, 1)
                    quantidades.splice(posicao, 1)
                    console.log(`${itemParaRemover} removido!`)
                } 
                else {
                    console.log("Não achei esse item.")
                }
            }
        }
    }
    gerar_lista_compras()  
}
