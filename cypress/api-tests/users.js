import { schemas } from '../schemas'
import { assertSchema } from '@cypress/schema-tools'

describe('Users', () => {
  const baseUrl = Cypress.config().baseUrl;
  const assertUserStructure = assertSchema(schemas)('user','2.0.0')

  beforeEach('get response', () => {
    cy.request({
      method: 'GET',
      url: baseUrl + "/users/",
    }).as("response")
  })

  it('/users - status code is 200', () => {
    cy.get("@response").then(r => {
      expect(r.status).to.eq(200);
    });
  })

  it('/users - check json structure', () => {
    cy.get("@response").then(r => {
      expect(r.body).to.be.an('array');
      if (r.body.length>0) {
          expect(() => { assertUserStructure(r.body[0])}).to.not.throw();
          expect(r.body[0].email).to.match(/^[^\s@]+@[^\s@]+$/);
      }
    });
  })

})