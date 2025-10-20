import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'

import Input from './Input';

describe('<Input />', () => {
  test('it should mount', () => {
    render(<Input />);

    const test = screen.getByTestId('Input');
    console.log(test)
    expect(test).toBeInTheDocument();
  });
});