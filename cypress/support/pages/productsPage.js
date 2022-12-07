export class ProductsPage {
    constructor() {
       this.closeModalButton = '#closeModal'
       this.goshoppingcart = '#goShoppingCart'

    }

    agregarProducto(producto) {
        cy.get(`[value='${producto}']`).click()
        cy.get(this.closeModalButton).click()
        
        
            
    }
    
    clickGoToShoppingCart (){
        cy.get(this.goshoppingcart).click()
    }
}