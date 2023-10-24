describe("Game Cart Functionality", () => {
  beforeEach(() => {
    cy.visit("https://gamehub-wp-ca.netlify.app/psn-list.html");
  });

  it("should add two games to the cart, go to cart page, and verify item count", () => {
    // Add the first game to the cart
    cy.get(".game-cards:first").as("firstGame");
    cy.get("@firstGame").find(".add-to-cart").click();

    // Add the second game to the cart
    cy.get(".game-cards:eq(1)").as("secondGame");
    cy.get("@secondGame").find(".add-to-cart").click();
    // Add the last game to the cart
    cy.get(".game-cards:last").as("lastGame");
    cy.get("@lastGame").find(".add-to-cart").click();

    // Go to the cart page
    cy.get("a[aria-label='Open shopping cart']").click();

    // Verify that there are two items in the cart
    cy.get(".cart-total__quantity").should("contain", "3 items");

    // Verify that all games have a "howmany" value equal to 1
    cy.get(".howmany").each((element) => {
      cy.wrap(element).should("have.value", "1");
    });
  });
});
