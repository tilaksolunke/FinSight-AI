

// __tests__/Home.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';

describe('Home Component', () => {
  const renderHome = () => {
    return render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  };

  test('renders main heading and subheading', () => {
    renderHome();
    expect(screen.getByText('FinSight AI')).toBeInTheDocument();
    expect(screen.getByText('Your AI-Powered Financial Companion for Smart Investment Decisions')).toBeInTheDocument();
  });

  test('renders service cards', () => {
    renderHome();
    expect(screen.getByText('AI Chat Assistant')).toBeInTheDocument();
    expect(screen.getByText('Stock Price Prediction')).toBeInTheDocument();
    expect(screen.getByText('Real-Time Market Data')).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    renderHome();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });
});
