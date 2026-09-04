// 3. Classe Retângulo: Crie uma classe que modele um retângulo:
// A. Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
// B. Métodos:
//  Mudar valor dos lados,
//  Retornar valor dos lados,
//  Calcular Área,
//  Calcular Perímetro.
export function questao3POO():void{
    class Retangulo{
        _base: number
        _altura: number

        constructor(base: number, altura: number){
            this._base = base
            this._altura = altura
        }

        mudarValor(newBase: number, newAltura: number): void{
            this._base = newBase
            this._altura = newAltura
            console.log(`Valores mudados: Base: ${this._base}, Altura: ${this._altura}`)
        }

        retornarValor(): void{
            console.log(`Base: ${this._base}, Altura: ${this._altura}`)
        }

        calcularArea(): void{
            let area: number = this._base * this._altura
            console.log(`Área: ${area}`)
        }

        calcularPerimetro(): void{
            let perimetro: number = 2 * (this._base + this._altura)
            console.log(`Perímetro: ${perimetro}`)
        }
    }

    let base: number = Number(prompt(`Insira o valor da base de retângulo: `))
    let altura: number = Number(prompt(`Insira a altura do retângulo: `))

    let newRetangulo: Retangulo = new Retangulo(base, altura)

    let op: number = Number(prompt(`Escolha a opção desejada: \n 1 - Mudar os valores dos lados \n 2 - Retornar os valores dos lados \n 3 - Calcular a área \n 4 - Calcular o perímetro`))

    switch (op) {
        case 1:
            let newBase: number = Number(prompt(`Insira a nova base: `))
            let newAltura: number = Number(prompt(`Insira a nova altura: `))
            newRetangulo.mudarValor(newBase, newAltura)
            break;
        case 2:
            newRetangulo.retornarValor()
            break;
        case 3:
            newRetangulo.calcularArea()
            break;
        case 4:
            newRetangulo.calcularPerimetro()
            break;
    }
}