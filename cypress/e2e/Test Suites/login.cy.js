describe("The Internet Login Tests", () => {
  beforeEach(() => {
    cy.visit("http://the-internet.herokuapp.com/login");
  });

  it("Logs in with valid credentials", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/secure");
    cy.get(".flash.success").should(
      "contain",
      "You logged into a secure area!"
    );
  });

  it("Fails with invalid password", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("WrongPassword");
    cy.get('button[type="submit"]').click();
    cy.get(".flash.error").should("contain", "Your password is invalid!");
  });

  it("Fails when both username and password are empty", () => {
    cy.get("#username").clear();
    cy.get("#password").clear();
    cy.get('button[type="submit"]').click();
    cy.get(".flash.error").should("contain", "Your username is invalid!");
  });

  it("Fails when only username is filled", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").clear();
    cy.get('button[type="submit"]').click();
    cy.get(".flash.error").should("contain", "Your password is invalid!");
  });

  it("Fails when only password is filled", () => {
    cy.get("#username").clear();
    cy.get("#password").type("SuperSecretPassword!");
    cy.get('button[type="submit"]').click();
    cy.get(".flash.error").should("contain", "Your username is invalid!");
  });

  it("Fails with invalid username and valid password", () => {
    cy.get("#username").type("InvalidUsername");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get('button[type="submit"]').click();
    cy.get(".flash.error").should("contain", "Your username is invalid!");
  });

  it("Fails with valid username and invalid password", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("InvalidPassword");
    cy.get('button[type="submit"]').click();
    cy.get(".flash.error").should("contain", "Your password is invalid!");
  });

  it("Logs out successfully after login", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/secure");
    cy.get('a[href="/logout"]').click();
    cy.url().should("include", "/login");
    cy.get(".flash.success").should(
      "contain",
      "You logged out of the secure area!"
    );
  });

  it.only("Tests multiple invalid logins from data", () => {
    const badLogins = [
      { username: "tomsmith", password: "x" },
      { username: "baduser", password: "SuperSecretPassword!" },
      { username: " ", password: " " },
      {username: "baduser", password: "badpassword"},
      {username: " ", password: "SuperSecretPassword"},
      {username: "tomsmith", password: " "}
      
    ];
    badLogins.forEach((cred) => {
      cy.get("#username").clear().type(cred.username);
      cy.get("#password").clear().type(cred.password);
      cy.get('button[type="submit"]').click();
      cy.get(".flash.error").should("be.visible");
    });
  });
});
