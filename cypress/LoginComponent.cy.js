import LoginComponent from '../src/components/LoginComponent'
import { mount } from 'cypress/react'

Cypress.Commands.add('mount', mount)

describe('Formvalidator', () => {

  beforeEach(() => {
    cy.mount(<LoginComponent />)
  })

  it('email input can not be empty', () => {
     cy.get('form').submit()
     cy.get('[data-testid="errorMessage"]').should('contain', 'Please provide a valid email adress')
    })

  it('email should contain a dot', () => {
     cy.get('[data-testid="email"]').type('Test@testcom')
     cy.get('form').submit()
     cy.get('[data-testid="errorMessage"]').should('contain', 'Please provide a valid email adress')
    })

    it('email should contain @', () => {
      cy.get('[data-testid="email"]').type('Testtest.com')
      cy.get('form').submit()
      cy.get('[data-testid="errorMessage"]').should('contain', 'Please provide a valid email adress')
     })

  it('requires password', () => {
    cy.get('[data-testid="email"]').type('Test@test.com')
    cy.get('form').submit()
    cy.get('[data-testid="errorMessage"]').should('contain', 'Please provide a password')
  })
  
  it('can submit a valid form', () => {
    cy.get('[data-testid="email"]').type('Test@test.com')
    cy.get('[data-testid="password"]').type('Password')
    cy.get('form').submit()
  })

  it('Should display if email is not registered', () => {
    cy.get('[data-testid="email"]').type('Test@test.com')
    cy.get('[data-testid="password"]').type('Password')
    cy.get('form').submit()
    cy.get('[data-testid="errorMessage"]').should('contain', 'E-mail is not registered')
  })

  it('Should display if password is invalid', () => {
    cy.get('[data-testid="email"]').type('testarn@test.com')
    cy.get('[data-testid="password"]').type('Password')
    cy.get('form').submit()
    cy.get('[data-testid="errorMessage"]').should('contain', 'Password is incorrect')
  })

  it('Should accept a user with correct email and password', () => {
    cy.get('[data-testid="email"]').type('testarn@test.com')
    cy.get('[data-testid="password"]').type('test')
    cy.get('form').submit()
    cy.get('[data-testid="errorMessage"]').should('be.empty')
  })


})








