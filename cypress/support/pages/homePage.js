export class HomePage {
    constructor() {
        this.todoListLink = '#todolistlink'
        this.onlineShop = '#onlineshoplink'
    }

    clickTodoListLink() {
        cy.get(this.todoListLink).click()
    }
    clickOnlineShop (){
        cy.get(this.onlineShop).click()
    }
}