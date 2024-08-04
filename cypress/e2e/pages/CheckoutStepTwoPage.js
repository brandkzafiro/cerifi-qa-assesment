class CheckoutStepTwoPage {
    elements = {
        finish: '[data-test="finish"]',
        cancelButton: '[data-test="cancel"]',
        paymentInformation: '[data-test="payment-info-value"]',
        shippingInformation: '[data-test="shipping-info-value"]',
        priceTotal: '[data-test="total-label"]',
    }

    finish = () => cy.get(this.elements.finish).click()
    cancelButton = () => cy.get(this.elements.cancelButton).click()
    paymentInformation = () => cy.get(this.elements.paymentInformation)
    shippingInformation = () => cy.get(this.elements.shippingInformation)
    priceTotal = () => cy.get(this.elements.priceTotal)

}

export const checkoutStepTwoPage = new CheckoutStepTwoPage()