import React from "react";
import RegisterComponent from "../src/components/RegisterComponent";
import { render } from "@testing-library/react";
import { screen, fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom";
var testUsers = require("./TestUsers.json");

describe("Password field is available", () => {
  test.skip("should contain an input field for password", () => {
    render(<RegisterComponent />);
    const password = screen.getByTestId("password");
    expect(password).toBeInTheDocument();
  });
});

describe("Email field is available", () => {
  test.skip("should contain an input field for Email", () => {
    render(<RegisterComponent />);
    const email = screen.getByTestId("email");
    expect(email).toBeInTheDocument();
  });
});

describe("Name field is available", () => {
  test.skip("should contain an input field for name", () => {
    render(<RegisterComponent />);
    const name = screen.getByTestId("name");
    expect(name).toBeInTheDocument();
  });
});

describe("Phone field is available", () => {
  test.skip("should contain an input field for phone", () => {
    render(<RegisterComponent />);
    const phone = screen.getByTestId("phone");
    expect(phone).toBeInTheDocument();
  });
});

describe("Username field is available", () => {
  test.skip("should contain an input field for username", () => {
    render(<RegisterComponent />);
    const username = screen.getByTestId("username");
    expect(username).toBeInTheDocument();
  });
});

describe("Registerform is correct", () => {
  const renderSetup = () => render(<RegisterComponent />);

  test.skip("name input should not be empty", () => {
    renderSetup();
    const nameInputNode = screen.getByTestId("name");
    const errorMessage = screen.getByTestId("errorMessage");
    const submitButton = screen.getByTestId("submit");

    fireEvent.change(nameInputNode, { target: { value: "" } });
    fireEvent.click(submitButton);
    expect(errorMessage).toHaveTextContent("Please provide your name");
  });

  test.skip("phone input should not be empty", () => {
    renderSetup();
    const nameInputNode = screen.getByTestId("name");
    const errorMessage = screen.getByTestId("errorMessage");
    const submitButton = screen.getByTestId("submit");

    fireEvent.change(nameInputNode, { target: { value: "Jesper" } });
    fireEvent.click(submitButton);
    expect(errorMessage).toHaveTextContent("Please provide your phonenumber");
  });

  test.skip("email input should not be empty", () => {
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

  /*   test('email input should include @ and .', () => {
    renderSetup()
    const nameInputNode = screen.getByTestId('name')
    const phoneInputNode = screen.getByTestId('phone')
    const emailInputNode = screen.getByTestId('email')
    const passwordInputNode = screen.getByTestId('password')
    const submitButton = screen.getByTestId('submit')
    
    fireEvent.change(nameInputNode, { target: { value: 'Jesper' } })
    fireEvent.change(phoneInputNode, { target: { value: '012-345 67 89' } })
    fireEvent.change(emailInputNode, { target: { value: 'hej@.com' } })
    fireEvent.change(passwordInputNode, { target: { value: 'hej123' } })
    fireEvent.click(submitButton)
    expect(emailInputNode).toHaveTextContent('Please provide a valid email adress')
  }) */

  test.skip("password input should not be empty", () => {
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

  test.skip("username input should not be empty", () => {
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

const renderSetup = () => render(<RegisterComponent />);

describe("Dumb test", () => {
  renderSetup();
  const nameInputNode = screen.getByTestId("name");
  const phoneInputNode = screen.getByTestId("phone");
  const emailInputNode = screen.getByTestId("email");
  const passwordInputNode = screen.getByTestId("password");
  const usernameInputNode = screen.getByTestId("username");
  let errorMessage = "";
  const submitButton = screen.getByTestId("submit");

  describe.each(testUsers)("test all users", (user) => {
    test("Testing user:" + user.name, async () => {

      fireEvent.change(nameInputNode, { target: { value: user.name } });
      fireEvent.change(phoneInputNode, { target: { value: user.phone } });
      fireEvent.change(emailInputNode, { target: { value: user.email } });
      fireEvent.change(passwordInputNode, { target: { value: user.password } });
      fireEvent.change(usernameInputNode, { target: { value: user.username } });
      fireEvent.click(submitButton);

      if (user.name === "") {
        errorMessage = "Please provide your name";
      }

      if (user.phone === "") {
        errorMessage = "Please provide your phonenumber";
      }

      if (user.email === "" || !user.email.includes("@") || !user.email.includes(".")){
        errorMessage = "Please provide a valid email adress";
      }

      if (user.password === "") {
        errorMessage = "Please provide a password";
      }

      if (user.username === "") {
        errorMessage = "Please provide a username";
      } 

     

      console.log(user.name + " " + errorMessage)
    });
  });
});
