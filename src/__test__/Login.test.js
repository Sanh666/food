import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LoginPopup from "../LoginPopup/LoginPopup.jsx";


test("toggles between Login and Sign Up", () => {
    render(<LoginPopup setShowLogin={() => { }} />);
    const toggleButton = screen.getByText(/Sign Up here/i);
    fireEvent.click(toggleButton);
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
});


test("renders LoginPopup component", () => {
    render(<LoginPopup setShowLogin={() => { }} />);
    const loginTitle = screen.getByRole("heading", { name: /Login/i });
    expect(loginTitle).toBeInTheDocument();
});





test("closes login popup", () => {
    const setShowLoginMock = jest.fn();
    render(<LoginPopup setShowLogin={setShowLoginMock} />);
    const closeButton = screen.getByAltText(/close/i);
    fireEvent.click(closeButton);
    expect(setShowLoginMock).toHaveBeenCalledWith(false);
});

test("renders input fields", () => {
    render(<LoginPopup setShowLogin={() => { }} />);

    const emailInput = screen.getByPlaceholderText("Your email");
    const passwordInput = screen.getByPlaceholderText("Password");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
});

test("toggles between 'Login' and 'Sign Up' text", () => {
    render(<LoginPopup setShowLogin={() => { }} />);

    const toggleButton = screen.getByText(/Login/i); // Assuming the button text initially displays "Login"
    fireEvent.click(toggleButton);

    const updatedText = screen.getByText(/Sign Up/i);
    expect(updatedText).toBeInTheDocument();
});
