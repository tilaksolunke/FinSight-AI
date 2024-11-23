

// __tests__/Signup.test.jsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Signup from '../components/Signup';

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Signup Component', () => {
  const renderSignup = () => {
    return render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
  };

  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test('renders signup form', () => {
    renderSignup();
    expect(screen.getByText('SIGN UP')).toBeInTheDocument();
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();
  });

  test('shows validation errors for empty fields', async () => {
    renderSignup();
    const submitButton = screen.getByText('SIGN UP');
    
    fireEvent.click(submitButton);
    
    expect(await screen.findByText('Full Name is required')).toBeInTheDocument();
    expect(await screen.findByText('Email is required')).toBeInTheDocument();
    expect(await screen.findByText('Username is required')).toBeInTheDocument();
    expect(await screen.findByText('Password is required')).toBeInTheDocument();
  });

  test('validates email format', async () => {
    renderSignup();
    const emailInput = screen.getByLabelText('Email');
    const submitButton = screen.getByText('SIGN UP');

    await userEvent.type(emailInput, 'invalid-email');
    fireEvent.click(submitButton);

    expect(await screen.findByText('Invalid email format')).toBeInTheDocument();
  });

  test('validates password match', async () => {
    renderSignup();
    const passwordInput = screen.getByLabelText('Password');
    const confirmPasswordInput = screen.getByLabelText('Confirm Password');
    const submitButton = screen.getByText('SIGN UP');

    await userEvent.type(passwordInput, 'password123');
    await userEvent.type(confirmPasswordInput, 'password456');
    fireEvent.click(submitButton);

    expect(await screen.findByText('Passwords do not match')).toBeInTheDocument();
  });

  test('successful signup navigates to login', async () => {
    renderSignup();
    
    await userEvent.type(screen.getByLabelText('Full Name'), 'Test User');
    await userEvent.type(screen.getByLabelText('Email'), 'test@example.com');
    await userEvent.type(screen.getByLabelText('Username'), 'testuser');
    await userEvent.type(screen.getByLabelText('Password'), 'password123');
    await userEvent.type(screen.getByLabelText('Confirm Password'), 'password123');
    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getByText('SIGN UP'));

    expect(mockNavigate).toHaveBeenCalledWith('/login');
  });
});