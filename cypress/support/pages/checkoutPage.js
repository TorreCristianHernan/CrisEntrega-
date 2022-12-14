export class CheckoutPage {
    constructor() {
        this.Firstname = '#FirstName';
        this.Lastname = '#lastName';
        this.CardNumber = '#cardNumber'
        this.name='Purchase'
    };

    escribirname(Firstname) {
        cy.get(this.Firstname).type(Firstname);
    };

    escribirlastname(Lastname) {
        cy.get(this.Lastname).type(Lastname);
    };
    escribircardnumber(CardNumber) {
        cy.get(this.CardNumber).type(CardNumber);
    };
    clickPurchase() {
        cy.contains(this.name).click()
    };
}
