// Test add to cart functionality
describe("Game Cart Functionality", () => {
  beforeEach(() => {
    cy.visit("https://gamehub-wp-ca.netlify.app/psn-list");
  });

  it("should add a game to the cart", () => {
    cy.get(".game-card:first").as("firstGame");
    cy.get("@firstGame").find(".add-to-cart").click();
    cy.get(".cart-count").should("have.text", "1");
    cy.get("@firstGame").find(".remove-from-cart").should("exist");
  });

  it("should remove a game from the cart", () => {
    cy.get(".game-card:first").as("firstGame");
    cy.get("@firstGame").find(".add-to-cart").click();
    cy.get("@firstGame").find(".remove-from-cart").click();
    cy.get(".cart-count").should("have.text", "0");
    cy.get("@firstGame").find(".add-to-cart").should("exist");
  });
});
