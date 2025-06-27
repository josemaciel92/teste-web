/// <reference types="cypress" />


export class CheckoutPage {

    elements = {
        txtCheckout: "//span[contains(text(),'Checkout: Overview')]",
        btnCheckout: "button[name='finish']"
    }

    validarPaginaCheckout() {
        cy.xpath(this.elements.txtCheckout, { timeout: 30000 }).should("have.text", 'Checkout: Overview')
    }

    prosseguirCheckout() {
        cy.get(this.elements.btnCheckout).click()
    }

}