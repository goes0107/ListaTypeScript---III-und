// 45. Repetição Encapsulamento
// Validador de Senhas e Segurança de Acesso
// Crie uma classe UsuarioSistema com os atributos privados login e senha. O setter da senha deve
// aplicar uma regra de segurança estrita: a senha precisa ter pelo menos 6 caracteres e não pode ser
// igual ao login. Caso a regra seja descumprida, o método deve exibir uma mensagem de erro e não
// alterar o atributo. O programa deve rodar em um laço de repetição solicitando que o usuário cadastre
// suas credenciais até que ele forneça uma senha válida que atenda a todos os requisitos de segurança
// do sistema.

export function questao45POO(): void {
    class UsuarioSistema {
        private _login: string
        private _senha: string

        constructor(login: string) {
            this._login = login
            this._senha = ""
        }

        get login(): string {
            return this._login
        }

        get senha(): string {
            return this._senha
        }

        set senha(senha: string) {
            if (senha.length >= 6 && senha != this._login) {
                this._senha = senha
            }
            else {
                alert(`Senha inválida! A senha deve ter pelo menos 6 caracteres e não pode ser igual ao login.`)
            }
        }
    }

    let login: string = String(prompt(`Insira o login: `))

    let usuario: UsuarioSistema = new UsuarioSistema(login)

    while (usuario.senha == "") {
        let senha: string = String(prompt(`Insira a senha: `))

        usuario.senha = senha
    }

    alert(`Usuário cadastrado com sucesso! | Login: ${usuario.login}`)
}