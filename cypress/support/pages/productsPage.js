export class ProductsPage {
    constructor() {
        this.clickaddtocart ="Add to cart"
        this.button2 = '#closeModal'
        this.goshoppingcart = '#goShoppingCart'
        this.button1 = 'Add to cart'
        this.clikaddtocart
        this.blacksock = '#blacksocks';
        this.beigeshort = '#beigepants'

    }

    clickAddtocart() {
        cy.get(this.blacksock).click()
        cy.get(this.button2).click()
        cy.get(this.beigeshort).click()
        cy.get(this.button2).click()
        

    }
    
    clickGoToShoppingCart (){
        cy.get(this.goshoppingcart).click()
    }
}