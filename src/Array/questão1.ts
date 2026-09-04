// 1. Mostre-me as seguintes listas, derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// a) Números pares
// b) Números ímpares
// c) Todos os múltiplos de 2,3 e 4
// d) Lista reversa

export function questao1array():void{
    let lista: number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    let par: number[] = []
    let impar: number[] = []
    let multiplos: number[] = []
    let reversa: number[] = []

    par = lista.filter((num) => num % 2 == 0)
    impar = lista.filter((num) => num % 2 != 0)
    multiplos = lista.filter((num) => (num % 2 == 0) || (num % 3 == 0) || (num % 4 == 0))
    reversa = lista.reverse()

    console.log(`Números pares: ${par}`)
    console.log(`Números ímpares: ${impar}`)
    console.log(`Números múltiplos de 2, 3 e 4: ${multiplos}`)
    console.log(`Lista reversa: ${reversa}`)
}