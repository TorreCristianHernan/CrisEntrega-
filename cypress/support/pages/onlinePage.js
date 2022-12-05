export class OnlinePage {
    constructor() {
        this.blacksocks = "[name='Black Socks']";
        this.beigeshorts = "[name='Beige Shorts']"
        this.priceblacksoks="[name='10']"
        this.pricebeigeshorts="[name='19']"
    };

    

    clickShowTotalPrice() {
        cy.contains('Show total price').click()
        
    };
    VerificoProductos(){
        cy.get(this.blacksocks).should('exist')
        cy.get(this.beigeshorts).should('exist')
    }
    VerificoPrecios(){
    cy.get(this.blacksocks).siblings(this.priceblacksoks).should('exist')
        cy.get(this.beigeshorts).siblings(this.pricebeigeshorts).should('exist')
    }
};