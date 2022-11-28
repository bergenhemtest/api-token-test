import { describe, it, expect } from 'vitest';
import { render, screen } from '@solidjs/testing-library';
import App from './App';

describe('App Component Tests', () => {
  it('should render a link to learn solid', () => {
    render(() => <App />);
    const learnElement = screen.getByText('Learn Solid');
    expect(learnElement).toBeInTheDocument();
  });

  it('should render a button to generate errors', () => {
    render(() => <App />);
    const errorButton = screen.getByRole('button');
    expect(errorButton).toBeInTheDocument();
  });
});