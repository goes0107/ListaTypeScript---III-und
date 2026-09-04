// 1. Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
//  Métodos: trocaCor e mostraCor
export function questao1POO():void{
    class Bola {
        cor: string
        circunferencia: number
        material: string

        constructor(cor: string, circunferencia: number, material: string) {
            this.cor = cor
            this.circunferencia = circunferencia
            this.material = material
        }

        trocaCor(novaCor: string): void {
            this.cor = novaCor
        }

        mostraCor(): string {
            return this.cor
        }
    }

    const minhaBola = new Bola("vermelha", 30, "borracha")
    console.log(minhaBola.mostraCor())
    minhaBola.trocaCor("azul")
    console.log(minhaBola.mostraCor())
}