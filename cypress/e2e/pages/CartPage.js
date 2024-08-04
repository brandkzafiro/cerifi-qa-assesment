class CartPage {
    elements = {
        continueShoppingButton: '[data-test="continue-shopping"]',
        checkoutButton: '[data-test="checkout"]',
    }

    getRemoveFromCartSelector(productId) {
        return `[data-test="remove-${productId}"]`;
    }

    removeProductFromCart(productId) {
        cy.get(this.getRemoveFromCartSelector(productId)).click();
    }

    continueShopping() {
        cy.get(this.elements.continueShoppingButton).click();
    }

    checkout() {
        cy.get(this.elements.checkoutButton).click();
    }
}

export const cartPage = new CartPage()