import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'

import Loader from './Loader';

describe('<Loader />', () => {
  test('it should mount', () => {
    render(<Loader />);

    const test = screen.getByTestId('Loader');
    console.log(test)
    expect(test).toBeInTheDocument();
  });
});