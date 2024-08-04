class CheckoutCompletePage{
    elements = {
        completeHeader: '[data-test="complete-header"]',
        completeText: '[data-test="complete-text"]',
        backToHomeButton: '[data-test="back-to-products"]'
    }

    completeHeader = () => cy.get(this.elements.completeHeader)
    completeText = () => cy.get(this.elements.completeText)
    backToHomeButton = () => cy.get(this.elements.backToHomeButton).click()
}

export const checkoutCompletePage = new CheckoutCompletePage()