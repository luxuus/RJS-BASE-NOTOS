import { describe, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import React from 'react';

import Image from './Image';

const BROKEN = 'https://example.com/broken.jpg';
const FALLBACK = 'https://example.com/fallback.jpg';

describe('<Image />', () => {
  test('mount + alt depuis description si alt absent', () => {
    render(<Image src={BROKEN} description="Une image décrite" fallbackSrc={FALLBACK} />);
    const wrapper = screen.getByTestId('Image');
    expect(wrapper).toBeInTheDocument();
    const img = wrapper.querySelector('img')!;
    expect(img).toHaveAttribute('alt', 'Une image décrite');
  });

  test('onError bascule vers fallback une seule fois', () => {
    render(<Image src={BROKEN} fallbackSrc={FALLBACK} description="desc" />);
    const img = screen.getByTestId('Image').querySelector('img')!;
    // simule une erreur de chargement sur la source principale
    fireEvent.error(img);
    expect(img.getAttribute('src')).toBe(FALLBACK);
    // si le fallback échoue, on ne reboucle pas indéfiniment (on garde fallback)
    fireEvent.error(img);
    expect(img.getAttribute('src')).toBe(FALLBACK);
  });

  test('overlay affiche la description', () => {
    render(<Image src={BROKEN} fallbackSrc={FALLBACK} description="Texte overlay" />);
    expect(screen.getByText('Texte overlay')).toBeInTheDocument();
  });
});
