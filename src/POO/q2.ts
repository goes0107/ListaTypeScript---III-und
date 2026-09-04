// 2. Classe Quadrado: Crie uma classe que modele um quadrado:
//  Atributos: Tamanho do lado
//  Métodos: Mudar valor do Lado,
//  Retornar valor do Lado e calcular Área;

export function questao2POO():void{
    class Quadrado {
        lado: number

        constructor(lado: number) {
            this.lado = lado
        }

        mudarLado(novoLado: number): void {
            this.lado = novoLado
        }

        retornarLado(): number {
            return this.lado
        }

        calcularArea(): number {
            return this.lado * this.lado
        }
    }

    let meuQuadrado = new Quadrado(5)
    console.log(`Lado do quadrado: ${meuQuadrado.retornarLado()}`)
    console.log(`Área do quadrado: ${meuQuadrado.calcularArea()}`)
}