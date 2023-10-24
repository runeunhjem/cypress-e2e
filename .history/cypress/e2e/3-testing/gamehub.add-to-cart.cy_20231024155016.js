describe("Game Cart Functionality", () => {
  beforeEach(() => {
    cy.visit("https://gamehub-wp-ca.netlify.app/psn-list.html");
    // cy.visit("https://gamehub-wp-ca.netlify.app/details.html?id=17");
  });

  it("should add a game to the cart, go to cart page, and verify item count", () => {
    // Add a game to the cart
    cy.get(".game-cards:first").as("firstGame");
    cy.get("@firstGame").find(".add-to-cart").click();
    cy.get(".game-cards:last").as("lastGame");
    cy.get("@lastGame").find(".add-to-cart").click();

    // Go to the cart page
    cy.get("a[aria-label='Open shopping cart']").click();

    <div class="cart-total__quantity">2 items: </div>;
    // Verify that the cart has one item
    cy.get(".howmany").should("have.value", "2");
    cy.get(".howmany").should("have.value", "2");
  });

  // it("should remove the game from the cart and verify it's empty", () => {
  //   // Remove the game from the cart
  //   cy.get(".remove-button[data-index='0']").click();

  //   // Verify the cart is empty
  //   cy.get(".howmany").should("have.value", "0");
  // });
});
