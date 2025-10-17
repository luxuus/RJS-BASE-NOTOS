import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'

import SearchField from './SearchField';

describe('<SearchField />', () => {
  test('it should mount', () => {
    render(<SearchField />);

    const test = screen.getByTestId('SearchField');
    console.log(test)
    expect(test).toBeInTheDocument();
  });
});