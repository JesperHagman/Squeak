import React from "react";
import LoginComponent from "../src/components/LoginComponent";
import { render } from "@testing-library/react";
import { screen, fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom";

describe("login", () => {
  test("should contain an input field for password", () => {
    render(<LoginComponent />);
    const password = screen.getByTestId("password");
    expect(password).toBeInTheDocument();
  });
  test("should contain an input field for email", () => {
    render(<LoginComponent />);
    const email = screen.getByTestId("email");
    expect(email).toBeInTheDocument();
  });
  test("Email input should accept text", () => {
    render(<LoginComponent />);
    const emailInputNode = screen.getByTestId("email");
    fireEvent.change(emailInputNode, { target: { input: "super" } });
    expect(emailInputNode.input).toMatch("super");
  });
  test.skip('email input should include @ and .', () => {
    render(<LoginComponent />);
    const emailInputNode = screen.getByTestId('email')
    const passwordInputNode = screen.getByTestId('password')
    const errorMessage = screen.getByTestId("errorMessage");
    const submitButton = screen.getByTestId('submit')
    
    fireEvent.change(emailInputNode, { target: { value: 'hejcom' } })
    fireEvent.change(passwordInputNode, { target: { value: 'hej123' } })
    fireEvent.click(submitButton)
    expect(errorMessage).toHaveTextContent('Please provide a valid email adress')
  })

  test.skip('email input should include @', () => {
    render(<LoginComponent />);
    const emailInputNode = screen.getByTestId('email')
    const passwordInputNode = screen.getByTestId('password')
    const errorMessage = screen.getByTestId("errorMessage");
    const submitButton = screen.getByTestId('submit')
    
    fireEvent.change(emailInputNode, { target: { value: 'hej.com' } })
    fireEvent.change(passwordInputNode, { target: { value: 'hej123' } })
    fireEvent.click(submitButton)
    expect(errorMessage).toHaveTextContent('Please provide a valid email adress')
  })

  test.skip('email input should include .', () => {
    render(<LoginComponent />);
    const emailInputNode = screen.getByTestId('email')
    const passwordInputNode = screen.getByTestId('password')
    const errorMessage = screen.getByTestId("errorMessage");
    const submitButton = screen.getByTestId('submit')
    
    fireEvent.change(emailInputNode, { target: { value: 'hej@com' } })
    fireEvent.change(passwordInputNode, { target: { value: 'hej123' } })
    fireEvent.click(submitButton)
    expect(errorMessage).toHaveTextContent('Please provide a valid email adress')
  })
});
