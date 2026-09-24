// 36. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Portal de Cursos e Treinamentos Online

// Uma plataforma de ensino quer gerenciar a emissão de certificados de seus estudantes. A classe base
// Curso possui título e carga horária privados. A classe CursoLivre emite certificado automaticamente
// ao concluir as horas. A classe CursoTecnico possui um atributo adicional para o número do projeto
// final e só permite emitir o certificado se o projeto tiver nota aprovada (maior ou igual a 7). O
// programa deve solicitar repetidamente os dados dos cursos concluídos por um aluno e guardá-los em
// um array. No final, o sistema percorre a lista e dispara o método emitirCertificado() de cada
// curso, exibindo quais certificados foram liberados e quais ficaram pendentes.


export function questao36POO(): void{
    class Curso{
        private _titulo: string
        private _cargaHoraria: number

        constructor(titulo: string, cargahoraria: number){
            this._titulo = titulo
            this._cargaHoraria = cargahoraria
        }

        
        get titulo(): string {
            return this._titulo
        }

        get cargaHoraria(): number{
            return this._cargaHoraria
        }

        emitirCertificado(): void{}
        
    }

    class CursoLivre extends Curso{
        emitirCertificado() {
            alert(`${this.titulo}: Certificado liberado!`)
        }
    }

    class CursoTecnico extends Curso{
        private _nota: number
        constructor(titulo: string, cargaHoraria: number, nota: number){
            super(titulo, cargaHoraria)
            this._nota = nota
        }

        emitirCertificado() {
            if (this._nota >= 7){
                alert(`${this.titulo}: Certificado liberado!`)
            }
            else{
                alert(`${this.titulo}: Certificado negado!`)
            }
        }
    }

    let certificados: Curso [] = []

    let op: number = 0

    while (op != 2){
        let tipoCurso: number = Number(prompt(`Qual é o tipo do curso? (1 - Curso livre | 2 - Curso técnico): `))

        switch (tipoCurso) {
            case 1:
                let tituloCL: string = String(prompt(`Insira o título do curso: `))
                let cargaHorariaCL: number = Number(prompt(`Insira a carga horária: `))

                let cursoLivre: CursoLivre = new CursoLivre(tituloCL, cargaHorariaCL)

                certificados.push(cursoLivre)
                break
            case 2:
                let tituloCT: string = String(prompt(`Insira o título do curso: `))
                let cargaHorariaCT: number = Number(prompt(`Insira a carga horária: `))
                let notaCT: number = Number(prompt(`Insira a nota do curso: `))

                let cursoTecnico: CursoTecnico = new CursoTecnico(tituloCT, cargaHorariaCT, notaCT)

                certificados.push(cursoTecnico)
                break
            default:
                alert(`Insira uma opção válida!!`)
                break
        }

        op = Number(prompt(`Deseja verificar mais algum curso? (1 - Sim | 2 - Não): `))
    }

    for (let cursos of certificados){
        cursos.emitirCertificado()
    }
}