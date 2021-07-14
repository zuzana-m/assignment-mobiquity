describe('Users', () => {
  const baseUrl = Cypress.config().baseUrl;

  it('/users - status code is 200', () => {

    cy.request({
      method: 'GET',
      url: baseUrl + "/users/",
    }).as("response")

    cy.get("@response").then(r => {
      expect(r.status).to.eq(200);
    });
  })

})