import RegisterComponent from '../src/components/RegisterComponent'
import { mount } from 'cypress/react'

Cypress.Commands.add('mount', mount)

describe('Form validation', () => {
    
    beforeEach(() => {
        cy.mount(<RegisterComponent/>)
    })
    
    it('mounts', () => {
        cy.wait(1000)
    })
    
    it('Form should accept text in every input field', () => {
        cy.get('[data-testid="name"]').type('test')
        cy.get('[data-testid="phone"]').type('test')
        cy.get('[data-testid="email"]').type('test')
        cy.get('[data-testid="password"]').type('test')
        cy.get('[data-testid="username"]').type('test')
        cy.wait(1000)
    })

    it('Form should not be able to submit invalid email', () => {
        cy.get('[data-testid="name"]').type('test')
        cy.get('[data-testid="phone"]').type('test')
        cy.get('[data-testid="email"]').type('test')
        cy.get('[data-testid="password"]').type('test')
        cy.get('[data-testid="username"]').type('test')
        cy.get('form').submit()
        cy.get('[data-testid="errorMessage"]').should('contain', 'Please provide a valid email adress')
        cy.wait(1000)
    })
    it('Form should not be able to submit without name', () => {
        cy.get('[data-testid="phone"]').type('test')
        cy.get('[data-testid="email"]').type('test')
        cy.get('[data-testid="password"]').type('test')
        cy.get('[data-testid="username"]').type('test')
        cy.get('form').submit()
        cy.get('[data-testid="errorMessage"]').should('contain', 'Please provide a valid email adress')
        cy.wait(1000)
    })







})
