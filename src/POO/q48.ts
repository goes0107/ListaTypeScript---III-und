// 48. Repetição Encapsulamento Arrays
// Sistema de Monitoramento e Ajuste de Ar-Condicionado de Laboratórios
// Para garantir o clima ideal nos laboratórios de informática do campus, crie um sistema de controle
// centralizado. Crie a classe ArCondicionado com os atributos privados sala, potenciaBTUs e
// temperaturaAtual. O setter de temperaturaAtual deve validar estritamente o intervalo permitido
// de operação (somente aceitar valores entre 16°C e 30°C, emitindo um aviso de erro para tentativas
// fora desta faixa). Crie o método exibirStatus() para mostrar os dados do aparelho. O programa
// deve interagir com o usuário em um laço de repetição solicitando o cadastro de vários aparelhos até
// que o operador decida parar. Em seguida, o sistema abre um menu permitindo que o técnico informe o
// nome da sala para buscar o aparelho no array e ajustar a temperatura do ambiente. Ao final, o
// programa percorre a lista e exibe o relatório final da temperatura de todos os laboratórios.

export function questao48POO(): void {
    class ArCondicionado {
        private _sala: string
        private _potenciaBTUs: number
        private _temperaturaAtual: number

        constructor(sala: string, potenciaBTUs: number, temperaturaAtual: number) {
            this._sala = sala
            this._potenciaBTUs = potenciaBTUs
            this._temperaturaAtual = 16
            this.temperaturaAtual = temperaturaAtual
        }

        get sala(): string {
            return this._sala
        }

        get potenciaBTUs(): number {
            return this._potenciaBTUs
        }

        get temperaturaAtual(): number {
            return this._temperaturaAtual
        }

        set temperaturaAtual(temperaturaAtual: number) {
            if (temperaturaAtual >= 16 && temperaturaAtual <= 30) {
                this._temperaturaAtual = temperaturaAtual
            }
            else {
                alert(`Temperatura inválida! A temperatura deve estar entre 16°C e 30°C.`)
            }
        }

        exibirStatus(): void {
            alert(`Sala: ${this.sala} | Potência: ${this.potenciaBTUs} BTUs | Temperatura atual: ${this.temperaturaAtual}°C`)
        }
    }

    let aparelhos: ArCondicionado[] = []
    let op: number = 0

    while (op != 2) {
        let sala: string = String(prompt(`Insira o nome da sala: `))
        let potenciaBTUs: number = Number(prompt(`Insira a potência do ar-condicionado em BTUs: `))
        let temperaturaAtual: number = Number(prompt(`Insira a temperatura atual: `))

        let arCondicionado: ArCondicionado = new ArCondicionado(sala, potenciaBTUs, temperaturaAtual)

        aparelhos.push(arCondicionado)

        op = Number(prompt(`Deseja cadastrar outro aparelho? (1 - Sim | 2 - Não): `))
    }

    let salaBuscar: string = String(prompt(`Insira o nome da sala que deseja ajustar: `))
    let encontrado: boolean = false

    for (let aparelho of aparelhos) {
        if (aparelho.sala == salaBuscar) {
            let novaTemperatura: number = Number(prompt(`Insira a nova temperatura da sala ${aparelho.sala}: `))

            aparelho.temperaturaAtual = novaTemperatura

            encontrado = true

            alert(`Temperatura ajustada!`)
        }
    }

    if (encontrado == false) {
        alert(`Sala não encontrada!`)
    }

    for (let aparelho of aparelhos) {
        aparelho.exibirStatus()
    }
}