import { describe, expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import React from 'react';
import Header from './Header';
import { MemoryRouter } from 'react-router';

const renderAt = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Header />
    </MemoryRouter>
  );

describe('<Header />', () => {
  test('monte et expose les éléments de base (titre + nav)', () => {
    renderAt('/');
    const root = screen.getByTestId('Header');
    expect(root).toBeInTheDocument();

    // Titre présent
    expect(screen.getByText(/Header Component/i)).toBeInTheDocument();

    // Nav et ses items
    const nav = within(root).getByRole('navigation', { hidden: true });
    const links = within(nav).getAllByRole('link', { hidden: true });
    expect(links).toHaveLength(4);
    expect(links.map((a) => a.textContent)).toEqual(['Home', 'Products', 'Flights', 'Users']);
  });

  test('à la route "/" seul Home est actif (classe "yellow")', () => {
    renderAt('/');
    const nav = screen.getByRole('navigation', { hidden: true });
    const home = within(nav).getByRole('link', { name: 'Home', hidden: true });
    const products = within(nav).getByRole('link', { name: 'Products', hidden: true });
    const flights = within(nav).getByRole('link', { name: 'Flights', hidden: true });
    const users = within(nav).getByRole('link', { name: 'Users', hidden: true });

    expect(home).toHaveClass('yellow');
    expect(products).not.toHaveClass('yellow');
    expect(flights).not.toHaveClass('yellow');
    expect(users).not.toHaveClass('yellow');
  });

  test('à la route "/products" Home et Products sont actifs (NavLink "/" matche les sous-routes)', () => {
    renderAt('/products');
    const nav = screen.getByRole('navigation', { hidden: true });
    const home = within(nav).getByRole('link', { name: 'Home', hidden: true });
    const products = within(nav).getByRole('link', { name: 'Products', hidden: true });
    const flights = within(nav).getByRole('link', { name: 'Flights', hidden: true });
    const users = within(nav).getByRole('link', { name: 'Users', hidden: true });

    // Par conception actuelle (pas de 'end' sur le lien '/'), Home est aussi actif
    expect(home).toHaveClass('yellow');
    expect(products).toHaveClass('yellow');
    expect(flights).not.toHaveClass('yellow');
    expect(users).not.toHaveClass('yellow');
  });

  test('à la route "/users" Home et Users sont actifs', () => {
    renderAt('/users');
    const nav = screen.getByRole('navigation', { hidden: true });
    const home = within(nav).getByRole('link', { name: 'Home', hidden: true });
    const users = within(nav).getByRole('link', { name: 'Users', hidden: true });
    expect(home).toHaveClass('yellow');
    expect(users).toHaveClass('yellow');
  });
});
