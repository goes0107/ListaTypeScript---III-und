// 4. Crie um programa que utilize a classe acima. Ele deve pedir ao usuário que informe as medidas de um
// local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés
// necessárias para o local.

export function questao4POO():void{
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

        calcularArea(): any{
            let area: number = this._base * this._altura
            console.log(`Área: ${area}`)
        }

        calcularPerimetro(): any{
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

    let area: number = newRetangulo.calcularArea()
    let perimetro: number = newRetangulo.calcularPerimetro()
    console.log(`Área total do local: ${area.toFixed(2)} m²`)
    console.log(`Perímetro total do local: ${perimetro.toFixed(2)} metros`)
    console.log(`Quantidade de piso necessária: ${area.toFixed(2)} m²`)
    console.log(`Quantidade de rodapé necessária: ${perimetro.toFixed(2)} metros lineares`)
}