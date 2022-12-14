export class RecibePage {
    constructor() { 
        
        this.nombre= 'Cristian Torre'
        this.name='#name'
        this.tarjeta='#creditCard'
        this.suma='#totalPrice'
    };

VerificoNombre(){
       return cy.contains(this.nombre)
    

        
    }
    VerificoProductos(producto){
        return   cy.get(`[id='${producto}']`)
           
       }
       VerificoTarjeta(){
        return   cy.get(this.tarjeta)
           
       }
       VerificoSuma(){
        return   cy.get(this.suma)
           
       }
}