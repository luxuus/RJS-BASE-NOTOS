import { describe, expect, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import React from 'react';

import Card from './Card';

describe('<Card />', () => {
  test('mount + affiche le titre et le contenu', () => {
    render(<Card title="Hello">World</Card>);
    expect(screen.getByTestId('Card')).toBeInTheDocument();
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('World')).toBeInTheDocument();
  });

  test('bascule ouvert/fermé en non-contrôlé', () => {
    render(
      <Card title="Toggle" defaultOpen={false}>
        Contenu caché
      </Card>
    );
    // le contenu est caché
    expect(screen.queryByText('Contenu caché')).not.toBeInTheDocument();

    // clique sur le bouton de toggle
    const toggle = screen.getByRole('button', { name: /afficher\/masquer/i });
    fireEvent.click(toggle);

    // le contenu apparaît
    expect(screen.getByText('Contenu caché')).toBeInTheDocument();
  });

  test('déclenche les actions', () => {
    const onEdit = vi.fn();
    render(
      <Card
        title="Actions"
        actions={[{ label: 'Edit', onClick: onEdit }]}
      >
        Body
      </Card>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Edit' }));
    expect(onEdit).toHaveBeenCalledTimes(1);
  });

  test('mode contrôlé: onToggle est appelé mais le rendu suit la prop open', () => {
    const onToggle = vi.fn();
    const { rerender } = render(
      <Card title="Ctrl" open={false} onToggle={onToggle}>
        Body
      </Card>
    );

    // Toggle ne doit pas ouvrir tant que open reste false
    fireEvent.click(screen.getByRole('button', { name: /afficher\/masquer/i }));
    expect(onToggle).toHaveBeenCalledWith(true);
    expect(screen.queryByText('Body')).not.toBeInTheDocument();

    // on simule le parent qui ouvre
    rerender(
      <Card title="Ctrl" open={true} onToggle={onToggle}>
        Body
      </Card>
    );
    expect(screen.getByText('Body')).toBeInTheDocument();
  });
});
