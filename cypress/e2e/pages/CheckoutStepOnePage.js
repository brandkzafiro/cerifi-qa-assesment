class CheckoutStepOnePage {
    elements = {
        firstName: '[data-test="firstName"]',
        lastName: '[data-test="lastName"]',
        zipCode: '[data-test="postalCode"]',
        continueButton: '[data-test="continue"]',
        cancelButton: '[data-test="cancel"]'
    }

    inputFirstName = () => cy.get(this.elements.firstName)
    inputLastName = () => cy.get(this.elements.lastName)
    inputZipCode = () => cy.get(this.elements.zipCode)
    continue = () => cy.get(this.elements.continueButton).click()
    cancel = () => cy.get(this.elements.cancelButton).click()

    fillFormAndContinue(firstName, lastName, zipCode) {
        this.inputFirstName().type(firstName)
        this.inputLastName().type(lastName)
        this.inputZipCode().type(zipCode)
        this.continue()
    }
}

export const checkoutStepOnePage = new CheckoutStepOnePage()