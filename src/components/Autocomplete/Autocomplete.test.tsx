import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'

import Autocomplete from './Autocomplete';

describe('<Autocomplete />', () => {
  test('it should mount', () => {
    render(<Autocomplete />);

    const test = screen.getByTestId('Autocomplete');
    console.log(test)
    expect(test).toBeInTheDocument();
  });
});