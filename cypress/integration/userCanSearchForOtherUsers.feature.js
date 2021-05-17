describe('Visitor can search other users', () => {
  describe('successfully', () => {
    beforeEach(()=> {
      cy.intercept(
        'GET',
        'https://api.github.com/users',
        {
          fixture: 'github.json',
        }
      )
       cy.visit('/')
      cy.get('[data-cy=input-field]').type('mojombo')
      cy.get('[data-cy=search-button]').click()
      cy.get('[data-cy=]')
    })
  })
    it('is expected to displays search results', () => {
      cy.get('[data-cy=user-container]').should('have.length', 0)
     
    })
  
    it('is expected to displays the expected user info', () => {
      cy.get('[data-cy=user-container]').within(()=>{
        cy.get('[data-cy=username]').should('contain', 'barak')
        cy.get('[data-cy=avatar]').should('have.attr', 'src', "https://avatars.githubusercontent.com/u/1?v=4")
        cy.get('[data-cy=avatar]').should('have', 'href', "https://api.github.com/users/mojombo")
      })
     
    })
})
