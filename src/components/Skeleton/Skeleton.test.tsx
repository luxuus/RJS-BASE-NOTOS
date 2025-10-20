import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'

import Skeleton from './Skeleton';

describe('<Skeleton />', () => {
  test('it should mount', () => {
    render(<Skeleton />);

    const test = screen.getByTestId('Skeleton');
    console.log(test)
    expect(test).toBeInTheDocument();
  });
});