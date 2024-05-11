import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPopup from '../LoginPopup/LoginPopup.jsx'; // Assuming LoginPopup.js is in the same directory
import { StoreContext } from '../context/StoreContext';

// Mock StoreContext with default values
const mockStoreContext = { url: '/api/user/login', setToken: jest.fn() };

test('renders login form initially', () => {
    render(<LoginPopup setShowLogin={jest.fn()} {...mockStoreContext} />);

    const loginTitle = screen.getByText('Login');
    const emailInput = screen.getByPlaceholderText('Your email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByText('Login');

    expect(loginTitle).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});
