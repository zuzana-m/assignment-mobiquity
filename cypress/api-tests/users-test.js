import { schemas } from '../schemas'
import { assertSchema } from '@cypress/schema-tools'

/*
Test finds user entity of specific user and validates content using schema.
*/

describe('Users test', () => {
  const assertUserStructure = assertSchema(schemas)('user', '2.0.0')

  before('Prepare test data', () => {
    cy.fixture('user.json').as('testData');
  })

  it('Check format of user object', () => {
    cy.get('@testData').then(user => {
      cy.getUserByUsername(user.username).then(r => {
        //check status is 200
        expect(r.status).to.eq(200);
        //check that response is an array
        expect(r.body).to.be.an('array');
        //check there is only one user with the given username
        expect(r.body).to.be.an('array').that.has.length(1);
        //check structure
        expect(() => { assertUserStructure(r.body[0]) }).to.not.throw();
        //check that username is correct
        expect(r.body[0].username).to.eq(user.username);
      });
    })
  })

})