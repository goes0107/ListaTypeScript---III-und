// 17. Controle de Frequência do Refeitório do IFS

// O Refeitório do IFS deseja controlar o acesso de seus usuários. Todo usuário possui um identificador
// numérico interno e o nome completo. Os usuários dividem-se em Alunos (que possuem o curso) e
// Servidores (que possuem o departamento). O sistema deve pedir para o operador cadastrar os usuários
// que estão na fila. Cada vez que um usuário passa pela catraca, um método deve registrar essa presença
// em um histórico (array). Ao digitar um comando de encerramento, o programa exibe a listagem de
// quem almoçou no dia, mostrando mensagens personalizadas para cada tipo de usuário através de um
// método comum de identificação, além de exibir a quantidade total de acessos de alunos.

export function questao17POO():void{
    class Usuario {
        private id: number
        private nome: string

        constructor(id: number, nome: string) {
            this.id = id
            this.nome = nome
        }

        getId(): number {
            return this.id
        }

        getNome(): string {
            return this.nome
        }

    }

    class Aluno extends Usuario {
        private curso: string
        
        constructor(id: number, nome: string, curso: string) {
            super(id, nome)
            this.curso = curso
        }

        getCurso(): string {
            return this.curso
        }

        identificar(): string {
            return `Aluno: ${this.getNome()}, Curso: ${this.curso}`
        }
    }

    class Servidor extends Usuario {
        private departamento: string

        constructor(id: number, nome: string, departamento: string) {
            super(id, nome)
            this.departamento = departamento
        }

        getDepartamento(): string {
            return this.departamento
        }

        identificar(): string {
            return `Servidor: ${this.getNome()}, Departamento: ${this.departamento}`
        }

    }

    let historico: Usuario[] = []
    let resposta: string = ''

    while (resposta.toLowerCase() !== 'n') {
        let tipoUsuario: number = Number(prompt('Digite o tipo de usuário (1-aluno/2-servidor): '))
        let id: number = Number(prompt('Digite o ID do usuário: '))
        let nome: string = String(prompt('Digite o nome completo do usuário: '))

        if (tipoUsuario === 1) {
            let curso: string = String(prompt('Digite o curso do aluno: '))
            let aluno: Aluno = new Aluno(id, nome, curso)
            historico.push(aluno)
        } else if (tipoUsuario === 2) {
            let departamento: string = String(prompt('Digite o departamento do servidor: '))
            let servidor: Servidor = new Servidor(id, nome, departamento)
            historico.push(servidor)
        }
        resposta = String(prompt('Deseja cadastrar outro usuário? (s/n): ')).toLowerCase()
    }

    console.log('Histórico de acessos ao refeitório:')
    let totalAlunos: number = 0

    for (let usuario of historico) {
        if (usuario instanceof Aluno) {
            console.log(usuario.identificar())
            totalAlunos++
        } else if (usuario instanceof Servidor) {
            console.log(usuario.identificar())
        }
    }

    console.log(`Total de acessos de alunos: ${totalAlunos}`)
}