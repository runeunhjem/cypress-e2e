// Complete the checkout process
describe("Checkout Process", () => {
  beforeEach(() => {
    //Visit the checkout page
    cy.visit("https://gamehub-wp-ca.netlify.app/checkout.html");
  });

  it("should complete the checkout process", () => {
    // Add your test steps here

    // Fill in payment information
    cy.get("#cardnumber").type("1234 5678 9012 3456");
    cy.get("#exp_date").type("10/26");
    cy.get("#cvc").type("123");

    // Click the "Pay Now" button
    cy.get("#paynow-button").click();

    // Assertions:
    // Check if input fields go green when clicking Pay Now
    cy.get("input").each(($input) => {
      cy.wrap($input).should("have.css", "background-color", "rgb(143, 255, 152)");
    });

    // Check if the payment successful message is shown
    cy.get("#payment-complete").should("contain", "Your payment was successful\nWe are printing your receipt");

    // Check if the page redirects to checkout_success.html
    cy.url().should("include", "checkout_success.html");
  });
});
