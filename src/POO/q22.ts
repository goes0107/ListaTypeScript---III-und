// 22. Oficina Mecânica e Revisão de Frotas
// O setor de transportes públicos precisa mapear a manutenção de seus veículos. Os Ônibus precisam
// fazer revisão a cada 10.000 km, enquanto as Ambulâncias precisam de revisão preventiva a cada 5.000 km.
// O sistema guarda os veículos em um array e consulta um veículo específico.

export function questao22POO(): void {

    class Veiculo {
        private _placa: string
        private _quilometragemAtual: number

        constructor(placa: string, quilometragemAtual: number) {
            this._placa = placa
            this._quilometragemAtual = quilometragemAtual
        }

        get placa(): string {
            return this._placa
        }

        get quilometragemAtual(): number {
            return this._quilometragemAtual
        }

        precisaRevisao(): boolean {
            return false
        }
    }

    class Onibus extends Veiculo {
        precisaRevisao(): boolean {
            return this.quilometragemAtual >= 10000
        }
    }

    class Ambulancia extends Veiculo {
        precisaRevisao(): boolean {
            return this.quilometragemAtual >= 5000
        }
    }

    let frota: Veiculo[] = []
    let op: number = 0

    while (op != 2) {
        let tipoVeiculo: number = Number(prompt(`Qual é o tipo do veículo? (1 - Ônibus | 2 - Ambulância): `))
        let placa: string = String(prompt(`Insira a placa do veículo: `))
        let quilometragemAtual: number = Number(prompt(`Insira a quilometragem atual do veículo: `))

        switch (tipoVeiculo) {
            case 1:
                let onibus: Onibus = new Onibus(placa, quilometragemAtual)
                frota.push(onibus)
                break
            case 2:
                let ambulancia: Ambulancia = new Ambulancia(placa, quilometragemAtual)
                frota.push(ambulancia)
                break
            default:
                alert(`Insira uma opção válida!`)
                break
        }

        op = Number(prompt(`Deseja cadastrar outro veículo? (1 - Sim | 2 - Não): `))
    }

    let placaConsulta: string = String(prompt(`Insira a placa do veículo que deseja consultar: `))
    let encontrado: boolean = false

    for (let veiculo of frota) {
        if (veiculo.placa == placaConsulta) {
            encontrado = true

            if (veiculo.precisaRevisao() == true) {
                alert(`O veículo de placa ${veiculo.placa} precisa de revisão.`)
            }
            else {
                alert(`O veículo de placa ${veiculo.placa} não precisa de revisão.`)
            }
        }
    }

    if (encontrado == false) {
        alert(`Veículo não encontrado!`)
    }
}
