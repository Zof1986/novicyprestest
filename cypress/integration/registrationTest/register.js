

describe('My First Test', () => {
    it('clicks the link "type"', () => {
      cy.visit('https://gallery-app.vivifyideas.com/login')
  
     
      //cy.get('#email').type("nikola.zof@gmail.com");
     // cy.get('#password').type("dukenukem3d");

      cy.get('#email').type("");
      cy.get('#password').type("");

      cy.get('button[type="submit"]').click();

    
    })
  })