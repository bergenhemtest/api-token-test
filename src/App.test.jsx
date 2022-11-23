import { describe, it, expect } from 'vitest';
import { render } from '@solidjs/testing-library';
import App from './App';

describe('App component', () => {
  it('should assert some dummy assertion', () => {
    render(() => <App />);
  });
});