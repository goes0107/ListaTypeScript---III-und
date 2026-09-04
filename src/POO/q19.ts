// 19. Monitoramento de Sensores Industriais
// Uma fábrica instalou sensores para monitorar sua produção. Todo sensor possui um código
// identificador e a última leitura registrada. Um Sensor de Temperatura exibe sua leitura acompanhada
// da unidade &quot;°C&quot; e possui um alerta caso passe dos 40°C. Um Sensor de Pressão exibe sua leitura
// acompanhada de &quot;atm&quot; e alerta se passar de 5 atm. O programa deve solicitar repetidamente que o
// técnico digite os valores lidos pelos sensores espalhados pela fábrica, armazenando-os em um array.
// No final, o programa filtra a lista e exibe o relatório de todos os sensores que dispararam alertas de
// perigo.

export function questao19POO():void{
    class Sensor {
        codigo: string
        ultimaLeitura: number
        
        constructor(codigo: string, ultimaLeitura: number) {
            this.codigo = codigo
            this.ultimaLeitura = ultimaLeitura
        }
        
        exibirLeitura(): void {
            console.log(`Código: ${this.codigo}, Última Leitura: ${this.ultimaLeitura}`)
        }
    }

    class SensorTemperatura extends Sensor {
        exibirLeitura(): void {
            super.exibirLeitura()
            console.log(`Leitura de Temperatura: ${this.ultimaLeitura}°C`)
            if (this.ultimaLeitura > 40) {
                console.log('Alerta: Temperatura acima do limite seguro!')
            }
        }
    }

    class SensorPressao extends Sensor {
        exibirLeitura(): void {
            super.exibirLeitura()
            console.log(`Leitura de Pressão: ${this.ultimaLeitura} atm`)
            if (this.ultimaLeitura > 5) {
                console.log('Alerta: Pressão acima do limite seguro!')
            }
        }
    }

    let sensores: Sensor[] = []

    let resposta: string = ''

    while (resposta.toLowerCase() !== 'n') {
        let tipoSensor: number = Number(prompt('Digite o tipo de sensor (1-temperatura/2-pressao): '))
        let codigo: string = String(prompt('Digite o código do sensor: '))
        let leitura: number = Number(prompt('Digite a última leitura do sensor: '))

        if (tipoSensor === 1) {
            let sensorTemp: SensorTemperatura = new SensorTemperatura(codigo, leitura)
            sensores.push(sensorTemp)
        } else if (tipoSensor === 2) {
            let sensorPressao: SensorPressao = new SensorPressao(codigo, leitura)
            sensores.push(sensorPressao)
        }

        resposta = String(prompt('Deseja cadastrar outro sensor? (s/n): ')).toLowerCase()
    }

    console.log('Relatório de Sensores com Alertas:')
    for (let sensor of sensores) {
        sensor.exibirLeitura()
    }
}