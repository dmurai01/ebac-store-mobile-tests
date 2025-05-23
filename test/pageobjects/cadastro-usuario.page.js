import { $ } from '@wdio/globals'

class CadastroUsuarioPage {
    get signUp(){
        return $('android=new UiSelector().text("Sign up")')
    }
    get nome(){
        return $('id:firstName')
    }
    get sobrenome(){
        return $('id:lastName')
    }
    get telefone(){
        return $('id:phone')
    }
    get email(){
        return $('id:email')
    }
    get senha(){
        return $('id:password')
    }
    get repetirSenha(){
        return $('id:repassword')
    }
    get criar(){
        return  $('id:create')
    }

    async cadastrar(nome, sobrenome, telefone, email, senha, repetirSenha){
        await this.signUp.click()
        await this.nome.setValue(nome)
        await this.sobrenome.setValue(sobrenome)
        await this.telefone.setValue(telefone)
        await this.email.setValue(email)
        await this.senha.setValue(senha)
        await this.repetirSenha.setValue(repetirSenha)
        await this.criar.click()

    }
    
}

export default new CadastroUsuarioPage();
