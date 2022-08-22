import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Logo from './components/Logo';

it('renders learn react link', () => {
  render(
    <BrowserRouter>
      <Logo />
    </BrowserRouter>,
  );
  const linkElement = screen.getByText(/sneakers/i);
  expect(linkElement).toBeInTheDocument();
});
