import React from 'react'
import LoginComponent from '../src/components/LoginComponent'
import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom'
import '@testing-library/jest-dom'


describe("login", () => {
    test('should contain an input field for password', () => {
      render(<LoginComponent/>)
      const password = screen.getAllByPlaceholderText('Lösenord')
      expect(password).toBeInTheDocument()
    })
    test('should contain an input field for email', () => {
      render(<LoginComponent/>)
      const email = screen.getByLabelText('E-mail:')
      expect(email).toBeInTheDocument()
    })
    test('Email input should accept text', () => {
        const { getByLabelText } = render(<LoginComponent/>)
        const emailInputNode = getByLabelText('E-mail:')

        expect(emailInputNode).toMatch("")
        fireEvent.change(emailInputNode, {target: {input: 'testing'}})
        expect(emailInputNode).toMatch("testing")
      })
})
