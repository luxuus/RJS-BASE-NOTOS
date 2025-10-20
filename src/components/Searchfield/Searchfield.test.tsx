import { describe, expect, test } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import Searchfield from './Searchfield';

describe('<Searchfield />', () => {
  test('mount', () => {
    render(<Searchfield />);
    expect(screen.getByTestId('Searchfield')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /recherche/i })).toBeInTheDocument();
  });

  test('ajoute un tag avec la virgule', () => {
    render(<Searchfield />);
    const input = screen.getByRole('textbox', { name: /recherche/i });
    fireEvent.change(input, { target: { value: 'alpha' } });
    fireEvent.keyDown(input, { key: ',' });
    expect(screen.getByTestId('chip-0')).toHaveTextContent('alpha');
  });

  test('ajoute un tag avec Enter et mémorise la dernière recherche', () => {
    render(<Searchfield />);
    const input = screen.getByRole('textbox', { name: /recherche/i });
    fireEvent.change(input, { target: { value: 'beta' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(screen.getByTestId('chip-0')).toHaveTextContent('beta');
    expect(screen.getByTestId('last-search-tag')).toHaveTextContent('beta');
  });

  test('cliquer le tag dernière recherche remet la valeur dans le champ', () => {
    render(<Searchfield />);
    const input = screen.getByRole('textbox', { name: /recherche/i });
    fireEvent.change(input, { target: { value: 'gamma' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    const last = screen.getByTestId('last-search-tag');
    fireEvent.click(last);
    expect((input as HTMLInputElement).value).toBe('gamma');
  });

  test('Backspace à vide supprime le dernier tag', () => {
    render(<Searchfield defaultTerms={['a', 'b']} />);
    const wrapper = screen.getByTestId('Searchfield');
    const input = within(wrapper).getByRole('textbox', { name: /recherche/i });
    fireEvent.keyDown(input, { key: 'Backspace' });
    expect(screen.queryByTestId('chip-1')).not.toBeInTheDocument();
  });
});
