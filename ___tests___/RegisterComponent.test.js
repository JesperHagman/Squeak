import React from "react";
import RegisterComponent from "../src/components/RegisterComponent";
import { render } from "@testing-library/react";
import { screen, fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom";
const renderSetup = () => render(<RegisterComponent />);

describe("Password field is available", () => {
  test("should contain an input field for password", () => {
    render(<RegisterComponent />);
    const password = screen.getByTestId("password");
    expect(password).toBeInTheDocument();
  });
});

describe("Email field is available", () => {
  test("should contain an input field for Email", () => {
    render(<RegisterComponent />);
    const email = screen.getByTestId("email");
    expect(email).toBeInTheDocument();
  });
});

describe("Name field is available", () => {
  test("should contain an input field for name", () => {
    render(<RegisterComponent />);
    const name = screen.getByTestId("name");
    expect(name).toBeInTheDocument();
  });
});

describe("Phone field is available", () => {
  test("should contain an input field for phone", () => {
    render(<RegisterComponent />);
    const phone = screen.getByTestId("phone");
    expect(phone).toBeInTheDocument();
  });
});

describe("Username field is available", () => {
  test("should contain an input field for username", () => {
    render(<RegisterComponent />);
    const username = screen.getByTestId("username");
    expect(username).toBeInTheDocument();
  });
});

describe("Registerform is correct", () => {
  test("name input should not be empty", () => {
    renderSetup();
    const nameInputNode = screen.getByTestId("name");
    const errorMessage = screen.getByTestId("errorMessage");
    const submitButton = screen.getByTestId("submit");

    fireEvent.change(nameInputNode, { target: { value: "" } });
    fireEvent.click(submitButton);
    expect(errorMessage).toHaveTextContent("Please provide your name");
  });

  test("phone input should not be empty", () => {
    renderSetup();
    const nameInputNode = screen.getByTestId("name");
    const errorMessage = screen.getByTestId("errorMessage");
    const submitButton = screen.getByTestId("submit");

    fireEvent.change(nameInputNode, { target: { value: "Jesper" } });
    fireEvent.click(submitButton);
    expect(errorMessage).toHaveTextContent("Please provide your phonenumber");
  });

  test("email input should not be empty", () => {
    renderSetup();
    const nameInputNode = screen.getByTestId("name");
    const phoneInputNode = screen.getByTestId("phone");
    const errorMessage = screen.getByTestId("errorMessage");
    const submitButton = screen.getByTestId("submit");

    fireEvent.change(nameInputNode, { target: { value: "Jesper" } });
    fireEvent.change(phoneInputNode, { target: { value: "012-345 67 89" } });
    fireEvent.click(submitButton);
    expect(errorMessage).toHaveTextContent(
      "Please provide a valid email adress"
    );
  });

  test('email input should include @ and .', () => {
    renderSetup()
    const nameInputNode = screen.getByTestId('name')
    const phoneInputNode = screen.getByTestId('phone')
    const emailInputNode = screen.getByTestId('email')
    const passwordInputNode = screen.getByTestId('password')
    const errorMessage = screen.getByTestId("errorMessage");
    const submitButton = screen.getByTestId('submit')
    
    fireEvent.change(nameInputNode, { target: { value: 'Jesper' } })
    fireEvent.change(phoneInputNode, { target: { value: '012-345 67 89' } })
    fireEvent.change(emailInputNode, { target: { value: 'hejcom' } })
    fireEvent.change(passwordInputNode, { target: { value: 'hej123' } })
    fireEvent.click(submitButton)
    expect(errorMessage).toHaveTextContent('Please provide a valid email adress')
  })

  test('email input should include @', () => {
    renderSetup()
    const nameInputNode = screen.getByTestId('name')
    const phoneInputNode = screen.getByTestId('phone')
    const emailInputNode = screen.getByTestId('email')
    const passwordInputNode = screen.getByTestId('password')
    const errorMessage = screen.getByTestId("errorMessage");
    const submitButton = screen.getByTestId('submit')
    
    fireEvent.change(nameInputNode, { target: { value: 'Jesper' } })
    fireEvent.change(phoneInputNode, { target: { value: '012-345 67 89' } })
    fireEvent.change(emailInputNode, { target: { value: 'hej.com' } })
    fireEvent.change(passwordInputNode, { target: { value: 'hej123' } })
    fireEvent.click(submitButton)
    expect(errorMessage).toHaveTextContent('Please provide a valid email adress')
  })

  test('email input should include .', () => {
    renderSetup()
    const nameInputNode = screen.getByTestId('name')
    const phoneInputNode = screen.getByTestId('phone')
    const emailInputNode = screen.getByTestId('email')
    const passwordInputNode = screen.getByTestId('password')
    const errorMessage = screen.getByTestId("errorMessage");
    const submitButton = screen.getByTestId('submit')
    
    fireEvent.change(nameInputNode, { target: { value: 'Jesper' } })
    fireEvent.change(phoneInputNode, { target: { value: '012-345 67 89' } })
    fireEvent.change(emailInputNode, { target: { value: 'hej@com' } })
    fireEvent.change(passwordInputNode, { target: { value: 'hej123' } })
    fireEvent.click(submitButton)
    expect(errorMessage).toHaveTextContent('Please provide a valid email adress')
  })

  test("password input should not be empty", () => {
    renderSetup();
    const nameInputNode = screen.getByTestId("name");
    const phoneInputNode = screen.getByTestId("phone");
    const emailInputNode = screen.getByTestId("email");
    const errorMessage = screen.getByTestId("errorMessage");
    const submitButton = screen.getByTestId("submit");

    fireEvent.change(nameInputNode, { target: { value: "Jesper" } });
    fireEvent.change(phoneInputNode, { target: { value: "012-345 67 89" } });
    fireEvent.change(emailInputNode, { target: { value: "hej@.com" } });
    fireEvent.click(submitButton);
    expect(errorMessage).toHaveTextContent("Please provide a password");
  });

  test("username input should not be empty", () => {
    renderSetup();
    const nameInputNode = screen.getByTestId("name");
    const phoneInputNode = screen.getByTestId("phone");
    const emailInputNode = screen.getByTestId("email");
    const passwordInputNode = screen.getByTestId("password");
    const errorMessage = screen.getByTestId("errorMessage");
    const submitButton = screen.getByTestId("submit");

    fireEvent.change(nameInputNode, { target: { value: "Jesper" } });
    fireEvent.change(phoneInputNode, { target: { value: "012-345 67 89" } });
    fireEvent.change(emailInputNode, { target: { value: "hej@.com" } });
    fireEvent.change(passwordInputNode, { target: { value: "hej123" } });
    fireEvent.click(submitButton);
    expect(errorMessage).toHaveTextContent("Please provide a username");
  });
});
