// __tests__/Dashboard.test.jsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Dashboard from '../components/Dashboard';

// Mock Recharts since it doesn't work well in test environment
jest.mock('recharts', () => ({
  ResponsiveContainer: ({ children }) => children,
  LineChart: ({ children }) => children,
  Line: () => null,
  XAxis: () => null,
  YAxis: () => null,
  CartesianGrid: () => null,
  Tooltip: () => null,
}));

describe('Dashboard Component', () => {
  const renderDashboard = () => {
    return render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
  };

  test('renders main dashboard elements', () => {
    renderDashboard();
    expect(screen.getByText('FinSight AI')).toBeInTheDocument();
    expect(screen.getByText('Portfolio Performance')).toBeInTheDocument();
    expect(screen.getByText('Watchlist')).toBeInTheDocument();
    expect(screen.getByText('Latest Financial News')).toBeInTheDocument();
  });

  test('displays stock information correctly', () => {
    renderDashboard();
    expect(screen.getByText('AAPL')).toBeInTheDocument();
    expect(screen.getByText('Apple Inc.')).toBeInTheDocument();
    expect(screen.getByText('GOOGL')).toBeInTheDocument();
    expect(screen.getByText('Alphabet Inc.')).toBeInTheDocument();
  });

  test('chat functionality works', async () => {
    renderDashboard();
    const input = screen.getByPlaceholderText('Ask about your investments...');
    const sendButton = screen.getByRole('button', { name: '' }); // MessageCircle icon button

    await userEvent.type(input, 'Test message');
    fireEvent.click(sendButton);

    expect(await screen.findByText('Test message')).toBeInTheDocument();
    expect(input).toHaveValue('');
  });
});