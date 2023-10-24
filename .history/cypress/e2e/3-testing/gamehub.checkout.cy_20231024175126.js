// Complete the checkout process
describe("Checkout Process", () => {
  beforeEach(() => {
    //Visit the checkout page
    cy.visit("https://gamehub-wp-ca.netlify.app/checkout.html");
  });

  it("should complete the checkout process", () => {
    // Add your test steps here

    // Fill in payment information
    cy.get("#cardNumber").type("1234 5678 9012 3456");
    cy.get("#expirationDate").type("10/26");
    cy.get("#cvc").type("123");

    // Click the "Pay Now" button
    cy.get(".pay-now-button").click();

    // Check if input fields go green
    cy.get("input").each(($input) => {
      cy.wrap($input).should("have.css", "background-color", "rgb(143, 255, 152)");
    });

    // Assertions:
    // Check the order summary
    cy.get(".order-summary").should("contain", "$ 4.95");
    cy.get(".order-summary").should("contain", "VAT included");

    // Check the confirmation message
    cy.get("#payment-complete").should("contain", "Payment complete");

    // Check terms and conditions
    cy.get(".terms").should("contain", "By clicking “Pay Now” I agree to and confirm that I have read the shopping terms.");
  });
});
