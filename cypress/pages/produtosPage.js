/// <reference types="cypress" />


export class ProdutosPage {

    elements = {
        txtProduto: "//span[contains(text(),'Products')]",
        btnProdutoBackpack: "button[name='add-to-cart-sauce-labs-backpack']",
        btnProdutoBikeLight: "button[name='add-to-cart-sauce-labs-bike-light']",
        lblQtdCarrinho: "//span[@class='shopping_cart_badge']",
        btnCarrinho: "div[id='shopping_cart_container']",
        txtBackPack: "//div[contains(text(),'Sauce Labs Backpack')]",
        txtBikeLight: "//div[contains(text(),'Sauce Labs Bike Light')]",
        btnCheckout: "button[name='checkout']",
        inpNome: "input[name='firstName']",
        inpSobrenome: "input[name='lastName']",
        inpCodigoPostal: "input[name='postalCode']",
        inpContinue: "input[name='continue']"

    }

    inserirProdutosCarrinho() {
        cy.xpath(this.elements.txtProduto, { timeout: 30000 })
        cy.get(this.elements.btnProdutoBackpack).click()
        cy.get(this.elements.btnProdutoBikeLight).click()
        cy.xpath(this.elements.lblQtdCarrinho).should('have.text', '2')
        cy.get(this.elements.btnCarrinho).click()
        cy.xpath(this.elements.txtBackPack, { timeout: 30000 }).should("have.text", 'Sauce Labs Backpack')
        cy.xpath(this.elements.txtBikeLight).should("have.text", 'Sauce Labs Bike Light')
        cy.get(this.elements.btnCheckout).click()
    }

    preenchimentoDadosÇheckout(nome, sobrenome, codigoPostal) {
        cy.get(this.elements.inpNome, { timeout: 30000 }).type(nome)
        cy.get(this.elements.inpSobrenome).type(sobrenome)
        cy.get(this.elements.inpCodigoPostal).type(codigoPostal)
        cy.get(this.elements.inpContinue).click()
    }

}