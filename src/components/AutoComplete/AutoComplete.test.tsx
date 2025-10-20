import { describe, expect, test, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import React from 'react';

import AutoComplete from './AutoComplete';

const CITIES = ['Paris','Berlin','Lisbonne','Rome'];

describe('<AutoComplete />', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  test('mount + saisie ouvre la liste après debounce', async () => {
    render(<AutoComplete options={CITIES} debounceMs={200} />);
    const ac = screen.getByTestId('AutoComplete');
    expect(ac).toBeInTheDocument();

    const input = within(ac).getByRole('combobox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'pa' } });

    // Pas encore de liste (debounce)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

    vi.advanceTimersByTime(200);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Paris' })).toBeInTheDocument();
  });

  test('minChars empêche l’ouverture trop tôt', () => {
    render(<AutoComplete options={CITIES} debounceMs={0} minChars={3} />);
    const input = screen.getByRole('combobox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'pa' } });
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'par' } });
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  test('navigation clavier + Enter sélectionne', () => {
    const onSelect = vi.fn();
    render(<AutoComplete options={CITIES} onSelect={onSelect} debounceMs={0} />);
    const input = screen.getByRole('combobox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'e' } }); // Berlin, Rome
    expect(screen.getByRole('listbox')).toBeInTheDocument();

    // Down -> active index 1
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    // Enter -> commit
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  test('Escape ferme la liste', () => {
    render(<AutoComplete options={CITIES} debounceMs={0} />);
    const input = screen.getByRole('combobox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'o' } });
    expect(screen.getByRole('listbox')).toBeInTheDocument();

    fireEvent.keyDown(input, { key: 'Escape' });
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });
});
