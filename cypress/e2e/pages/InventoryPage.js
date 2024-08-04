class InventoryPage {

    elements = {
        productSort: '[data-test="product-sort-container"]',
        shoppingCartBadge: '[data-test="shopping-cart-badge"]',
        shoppingCart: '[data-test="shopping-cart-link"]',
        itemPrice: '[data-test="inventory-item-price"]'
    }

    openShoppingCart() {
        //cy.scrollTo('top');
        cy.get(this.elements.shoppingCart).click();
    }

    getAddToCartSelector(productId) {
        return `[data-test="add-to-cart-${productId}"]`;
    }

    getRemoveFromCartSelector(productId) {
        return `[data-test="remove-${productId}"]`;
    }
    addProductToCart(productId) {
        cy.get(this.getAddToCartSelector(productId)).click();
    }

    removeProductFromCart(productId) {
        cy.get(this.getRemoveFromCartSelector(productId)).click();
    }

    selectNameAtoZSort() {
        cy.get(this.elements.productSort).select('Name (A to Z)');
    }

    selectNameZtoASort() {
        cy.get(this.elements.productSort).select('Name (Z to A)');
    }

    selectPriceLowToHighSort() {
        cy.get(this.elements.productSort).select('Price (low to high)');
    }

    selectPriceHighToLowSort() {
        cy.get(this.elements.productSort).select('Price (high to low)');
    }


}

export const inventoryPage = new InventoryPage()