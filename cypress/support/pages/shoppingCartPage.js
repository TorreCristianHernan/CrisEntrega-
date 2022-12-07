export class ShoppingCartPage {
    constructor() { 
        this.ShowTotalPrice = 'Show total price'
        this.price= '#productPrice'
        this.nombre= '#productName'

    };

    

    clickShowTotalPrice() {
        cy.contains(this.ShowTotalPrice).click()
        
    };
    VerificoProductos(name){
        cy.get(`[name='${name}']`).should('include.text',name)
        
    }
    VerificoPrecios(price){
        cy.get(`[name='${price}']`).should('include.text',price)

    } 
    ValorSumaProductos(price){
        cy.get("[id='price']").should('include.text',price)
    }


    
        
    
};