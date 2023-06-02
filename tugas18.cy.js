describe('testing Login, make appointment, logout', () => {
  it('passes', () => {

    
    cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('button').click()
    cy.get('select').select('Hongkong CURA Healthcare Center').should('have.value','Hongkong CURA Healthcare Center')
    cy.get('.checkbox-inline').click()
    cy.get('[type="checkbox"]').check()
    cy.get('[id="txt_visit_date"]').type('02/06/2023')
    cy.get('[id="txt_comment"]').type('Tugas day 18',{force: true})
    cy.get('button').click()
    cy.get('#menu-toggle > .fa').click()
    cy.get(':nth-child(6) > a').click()
  })
})