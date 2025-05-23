import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import cadastroUsuarioPage from '../pageobjects/cadastro-usuario.page.js'
import profilePage from '../pageobjects/profile.page.js'

describe('Cadastro Usuário', () => {
    var nome = `Daniela${Math.floor(Math.random() * 100000000)}`
    var email = `teste${Math.floor(Math.random() * 100000000)}`
    it('Deve cadastrar corretamente novo usuário', async () => {
        await homePage.openMenu('profile')
        await cadastroUsuarioPage.cadastrar(nome, 'Teste', '1199999999', 'email', 'Teste123!', 'Teste123!')
        expect((await profilePage.profileName(nome)).isDisplayed()).toBeTruthy()
    })
})


