/*
Test finds all posts of specific user. 
Then it looks for all comments under each post and validates its fields.
*/

describe('Comments test', () => {

    before('Prepare test data', () => {
        cy.fixture('user.json').as('testData');
    })

    it('Check format of comments under posts of a specific user', () => {
        cy.get('@testData').then(user => {
            cy.getUserByUsername(user.username).then(r => {
                var userId = r.body[0].id;
                cy.getPostsByUserId(userId).then(posts => {
                    expect(posts.status).to.eq(200);

                    // check each post
                    posts.body.forEach(post => {
                        cy.getCommentsByPostId(post.id).then(comments => {
                            expect(comments.status).to.eq(200);

                            //check each comment
                            comments.body.forEach(comment => {
                                expect(comment.email).to.match(/^[^\s@]+@[^\s@]+$/);
                                expect(comment.body).to.be.a('string').that.is.not.empty;
                                expect(comment.name).to.be.a('string').that.is.not.empty;
                            })
                        });
                    });
                })
            });
        })
    })
})