const baseUrl = Cypress.config().baseUrl;

//some useful reusable functions 

Cypress.Commands.add('getUserByUsername', (username) => {
    return cy.request({
        method: 'GET',
        url: baseUrl + "/users/?username=" + username,
    });
});

Cypress.Commands.add('getPostsByUserId', (id) => {
    return cy.request({
        method: 'GET',
        url: baseUrl + "/posts/?userId=" + id,
    });
});

Cypress.Commands.add('getCommentsByPostId', (id) => {
    return cy.request({
        method: 'GET',
        url: baseUrl + "/comments/?postId=" + id,
    });
});
