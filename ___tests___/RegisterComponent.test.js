import React from 'react'
import RegisterComponent from '../src/components/RegisterComponent'
import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom'
import '@testing-library/jest-dom'


describe("Register", () => {
    test('should contain an input field for password', () => {
      render(<RegisterComponent/>)
      const password = screen.getByTestId('password')
      expect(password).toBeInTheDocument()
    })
    
})
