import React from 'react'
import RegisterComponent from '../src/components/RegisterComponent'
import { render, within } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom'
import '@testing-library/jest-dom'





describe("Password field is available", () => {
    test('should contain an input field for password', () => {
      render(<RegisterComponent/>)
      const password = screen.getByTestId('password')
      expect(password).toBeInTheDocument()
    })
    
})

describe("Email field is available", () => {
  test('should contain an input field for Email', () => {
    render(<RegisterComponent/>)
    const email = screen.getByTestId('email')
    expect(email).toBeInTheDocument()
  })
  
})

describe("Name field is available", () => {
  test('should contain an input field for name', () => {
    render(<RegisterComponent/>)
    const name = screen.getByTestId('name')
    expect(name).toBeInTheDocument()
  })
  
})

describe("Phone field is available", () => {
  test('should contain an input field for phone', () => {
    render(<RegisterComponent/>)
    const phone = screen.getByTestId('phone')
    expect(phone).toBeInTheDocument()
  })
  
})

describe("Username field is available", () => {
  test('should contain an input field for username', () => {
    render(<RegisterComponent/>)
    const username = screen.getByTestId('username')
    expect(username).toBeInTheDocument()
  })
  
})


describe('Email is correct', () => {
  test('Email input should include @ and .', () => {
    render(<RegisterComponent/>)
    const emailInputNode = screen.getByTestId('email')
    const errorMessage = screen.getByTestId('errorMessage')
    const submitButton = screen.getByTestId('submit')

    
    fireEvent.change(emailInputNode, { target: { name: 'email', value: 'super', } })
    fireEvent.click(submitButton)
    
    const message = within(errorMessage).getByText('Please provide a valid email adress');
    
    console.log(errorMessage)
    
    console.log(emailInputNode.value)
  })  
})


