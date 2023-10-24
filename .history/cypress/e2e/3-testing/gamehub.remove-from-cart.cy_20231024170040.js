// const { it } = require("node:test");

describe("Remove a Game from Cart Functionality", () => {
  // beforeEach(() => {
  // });

  it("Should add two games to the cart", () => {
    cy.visit("https://gamehub-wp-ca.netlify.app/psn-list.html");
    // Add the first game to the cart
    cy.get(".game-cards:first").as("firstGame");
    cy.get("@firstGame").find(".add-to-cart").click();

    // Add the second game to the cart
    cy.get(".game-cards:eq(1)").as("secondGame");
    cy.get("@secondGame").find(".add-to-cart").click();

    // Go to the cart page
    cy.get("a[aria-label='Open shopping cart']").click();

    // Verify that there are two items in the cart
    cy.get(".cart-total__quantity").should("contain", "2 items");

    // Verify that the games has a "howmany" value equal to 1
    cy.get(".howmany").should("have.value", "1");
  });

  it("Should remove a game from the cart", () => {
    cy.visit("https://gamehub-wp-ca.netlify.app/cart.html");
    // Remove the first game from the cart
    cy.get(".cart-item:first").as("firstCartItem");
    cy.get("@firstCartItem").find(".remove-from-cart").click();

    // Verify that there is only one item in the cart
    cy.get(".cart-total__quantity").should("contain", "1 item");

    // Verify that the remaining game has a "howmany" value equal to 1
    cy.get(".howmany").should("have.value", "1");
  });
});
