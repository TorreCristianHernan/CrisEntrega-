export class RecibePage {
    constructor() { 
        this.ShowTotalPrice = 'Show total price'
        this.price= '#productPrice'
        this.nombre= 'Cristian Torre'
        this.name='Go to Checkout'

    };

    

        
    
    Verificorecibo(name){
     return   cy.get(`[name='${name}']`)
        
    }
}s