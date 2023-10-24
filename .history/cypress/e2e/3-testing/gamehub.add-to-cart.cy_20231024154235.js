describe("Game Cart Functionality", () => {
  beforeEach(() => {
    cy.visit("https://gamehub-wp-ca.netlify.app/details.html?id=17");
  });

  it("should add a game to the cart, go to cart page, and verify item count", () => {
    // Add a game to the cart
    cy.get(".game-cards:first").as("firstGame");
    cy.get("@firstGame").find(".add-to-cart").click();

    // Go to the cart page
    cy.get("a[aria-label='Open shopping cart']").click();

    // Verify that the cart has one item
    cy.get(".howmany").should("have.value", "1");
  });

  // it("should remove the game from the cart and verify it's empty", () => {
  //   // Remove the game from the cart
  //   cy.get(".remove-button[data-index='0']").click();

    // Verify the cart is empty
    cy.get(".howmany").should("have.value", "0");
  });
});
