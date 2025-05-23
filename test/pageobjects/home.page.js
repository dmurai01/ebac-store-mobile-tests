import { $ } from '@wdio/globals'

class HomePage {
    async openMenu (menu){
        await $(`id:tab-${menu}`).click()
    }
    async logoutLink (){
        await $('new UiSelector().text("Logout")').click()
    }
}

export default new HomePage();
