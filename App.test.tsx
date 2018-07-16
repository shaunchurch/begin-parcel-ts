import React from 'react';
import { render, cleanup } from 'react-testing-library';
import App from './App';

it('should run', () => {
  expect(true).toBe(true);
});

afterEach(cleanup);

it('should render', () => {
  const { getByText } = render(<App />);
  expect(getByText('Hello, world!').textContent).toBe('Hello, world!');
});
