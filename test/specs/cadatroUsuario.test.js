import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'

describe('Cadastro Usuário', () => {
    it('Deve cadastrar corretamente novo usuário', async () => {
        await homePage.openMenu('profile')
    })
})


