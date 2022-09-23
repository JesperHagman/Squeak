import RegisterComponent from '../src/components/RegisterComponent'
import { mount } from 'cypress/react'


 Cypress.Commands.add('mount', mount)

describe('Form validation', () => {
    
    beforeEach(() => {
        cy.mount(<RegisterComponent/>)
    })
    
    it('mounts', () => {
    })
    
    it('Form should accept text in every input field', () => {
        cy.get('[data-testid="name"]').type('test')
        cy.get('[data-testid="phone"]').type('test')
        cy.get('[data-testid="email"]').type('test')
        cy.get('[data-testid="password"]').type('test')
        cy.get('[data-testid="username"]').type('test')
    })

    it('Form should not be able to submit invalid email', () => {
        cy.get('[data-testid="name"]').type('test')
        cy.get('[data-testid="phone"]').type('test')
        cy.get('[data-testid="email"]').type('test')
        cy.get('[data-testid="password"]').type('test')
        cy.get('[data-testid="username"]').type('test')
        cy.get('form').submit()
        cy.get('[data-testid="errorMessage"]').should('contain', 'Please provide a valid email adress')
    })
    it('Form should not be able to submit without name', () => {
        cy.get('[data-testid="phone"]').type('test')
        cy.get('[data-testid="email"]').type('test')
        cy.get('[data-testid="password"]').type('test')
        cy.get('[data-testid="username"]').type('test')
        cy.get('form').submit()
        cy.get('[data-testid="errorMessage"]').should('contain', 'Please provide your name')
    })
    it('Form should not be able to submit without phone', () => {
        cy.get('[data-testid="name"]').type('test')
        cy.get('[data-testid="email"]').type('test')
        cy.get('[data-testid="password"]').type('test')
        cy.get('[data-testid="username"]').type('test')
        cy.get('form').submit()
        cy.get('[data-testid="errorMessage"]').should('contain', 'Please provide your phone')
    })
    it('Form should not be able to submit without e-mail', () => {
        cy.get('[data-testid="name"]').type('test')
        cy.get('[data-testid="phone"]').type('test')
        cy.get('[data-testid="password"]').type('test')
        cy.get('[data-testid="username"]').type('test')
        cy.get('form').submit()
        cy.get('[data-testid="errorMessage"]').should('contain', 'Please provide a valid email')
    })
    it('Form should not be able to submit without password', () => {
        cy.get('[data-testid="name"]').type('test')
        cy.get('[data-testid="phone"]').type('test')
        cy.get('[data-testid="email"]').type('test@test.com')
        cy.get('[data-testid="username"]').type('test')
        cy.get('form').submit()
        cy.get('[data-testid="errorMessage"]').should('contain', 'Please provide a password')
    })
    it('Form should not be able to submit without a username', () => {
        cy.get('[data-testid="name"]').type('test')
        cy.get('[data-testid="phone"]').type('test')
        cy.get('[data-testid="email"]').type('test@test.com')
        cy.get('[data-testid="password"]').type('test')
        cy.get('form').submit()
        cy.get('[data-testid="errorMessage"]').should('contain', 'Please provide a username')
    })
    it('Email should contain @', () => {
        cy.get('[data-testid="name"]').type('test')
        cy.get('[data-testid="phone"]').type('test')
        cy.get('[data-testid="email"]').type('test.com')
        cy.get('[data-testid="password"]').type('test')
        cy.get('form').submit()
        cy.get('[data-testid="errorMessage"]').should('contain', 'Please provide a valid email')
    })
    it('Email should contain .', () => {
        cy.get('[data-testid="name"]').type('test')
        cy.get('[data-testid="phone"]').type('test')
        cy.get('[data-testid="email"]').type('test@testcom')
        cy.get('[data-testid="password"]').type('test')
        cy.get('form').submit()
        cy.get('[data-testid="errorMessage"]').should('contain', 'Please provide a valid email')
    })
    it('Form should accept submit if all inputs are correct', () => {
        cy.get('[data-testid="name"]').type('test')
        cy.get('[data-testid="phone"]').type('test')
        cy.get('[data-testid="email"]').type('test@test.com')
        cy.get('[data-testid="password"]').type('test')
        cy.get('[data-testid="username"]').type('test')
        cy.get('form').submit()
        cy.get('[data-testid="errorMessage"]').should('be.empty')
    })

})
