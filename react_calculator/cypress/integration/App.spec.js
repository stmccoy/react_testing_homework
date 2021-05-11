describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have numbers that update the display', () => {
    cy.get('#number4').click();
    cy.get('.display').should('contain', '4')
  })

  it('should have arithmetical operations that update the display correctly', () => {
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '7')
  })

  it('should be able to chain arithmetical operations together and update the display correctly', () => {
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('#operator_multiply').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('#operator_divide').click();
    cy.get('#number7').click();
    cy.get('#operator_equals').click();
    cy.get('#operator_subtract').click();
    cy.get('#number1').click();
    cy.get('.display').should('contain', '1')
  })

  it('should be able to process large numbers', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1000000000000')
  })
  it('should be able to process negative numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator_subtract').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-8')
  })
  it('should be able to process decimal numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '0.5')
  })

  it('should be able to divide by 0', () => {
    cy.get('#number1').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'Error cannot divide by zero')
  })
})