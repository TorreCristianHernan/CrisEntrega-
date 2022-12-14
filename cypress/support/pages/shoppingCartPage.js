export class ShoppingCartPage {
    constructor() { 
        this.ShowTotalPrice = 'Show total price'
        this.price= '#productPrice'
        this.nombre= '#productName'
        this.name='Go to Checkout'

    };

    

    clickShowTotalPrice() {
        cy.contains(this.ShowTotalPrice).click()
        
    };
    VerificoProductos(name){
     return   cy.get(`[name='${name}']`)
        
    }
    VerificoPrecios(price){
     return   cy.get(`[name='${price}']`)

    } 
    ValorSumaProductos(price){
      return  cy.get("[id='price']")
    }


    clickGotoCheckout() {
        cy.contains(this.name).click()
    }
        
    
};