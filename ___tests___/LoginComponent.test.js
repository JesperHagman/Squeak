import React from 'react'
import LoginComponent from '../src/components/LoginComponent'
import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom'
import '@testing-library/jest-dom'


describe("login", () => {
    test('should contain an input field for password', () => {
      render(<LoginComponent/>)
      const password = screen.getByTestId('password')
      expect(password).toBeInTheDocument()
    })
    test('should contain an input field for email', () => {
      render(<LoginComponent/>)
      const email = screen.getByTestId('email')
      expect(email).toBeInTheDocument()
    })
    test('Email input should accept text', () => {
        const { getByTestId } = render(<LoginComponent/>)
        const emailInputNode = getByTestId('email')

        fireEvent.change(emailInputNode, { target: { input: 'super' } })
        expect(emailInputNode.input).toMatch('super')
      })
})
