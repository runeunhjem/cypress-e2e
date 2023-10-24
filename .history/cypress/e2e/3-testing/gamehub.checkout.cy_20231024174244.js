// Complete the checkout process
describe("Checkout Process", () => {
  beforeEach(() => {
    //Visit the checkout page
    cy.visit("https://gamehub-wp-ca.netlify.app/checkout.html");
  });

  it("should complete the checkout process", () => {
    // Add your test steps here

    // Example:
    // Fill in payment information
    cy.get("#cardNumber").type("4925 5600 4199 7856");
    cy.get("#expirationDate").type("10/26");
    cy.get("#cvc").type("329");

    // Choose the payment method
    cy.get("#paymentMethod").select("Card");

    // Click the "Pay Now" button
    cy.get(".pay-now-button").click();

    // Assertions:
    // Check the order summary
    cy.get(".order-summary").should("contain", "$ 4.95");
    cy.get(".order-summary").should("contain", "VAT included");

    // Check the confirmation message or the URL change after payment

    // Example:
    // cy.url().should("include", "confirmation");
    // cy.get(".confirmation-message").should("contain", "Payment successful");
  });
});
