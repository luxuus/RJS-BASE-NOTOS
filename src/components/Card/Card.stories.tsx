/* eslint-disable */
import React from 'react';
import Card from './Card';

export default {
  title: 'UI/Card',
  component: Card,
};

export const Default = () => (
  <Card title="Titre de la carte">
    Contenu de la carte. Lorem ipsum dolor sit amet.
  </Card>
);
Default.story = { name: 'Défaut' };

export const WithActions = () => (
  <Card
    title="Actions dans l’en-tête"
    actions={[
      { label: 'Edit', onClick: () => alert('Edit') },
      { label: 'Delete', onClick: () => alert('Delete') },
    ]}
  >
    Contenu principal avec actions à droite.
  </Card>
);

export const CollapsibleClosed = () => (
  <Card title="Fermée par défaut" defaultOpen={false}>
    Je suis masqué au départ, cliquez sur ▸ pour ouvrir.
  </Card>
);

export const Controlled = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button onClick={() => setOpen((o) => !o)} style={{ marginBottom: 8 }}>
        {open ? 'Fermer' : 'Ouvrir'}
      </button>
      <Card
        title="Mode contrôlé"
        open={open}
        onToggle={setOpen}
      >
        Ce contenu suit l’état externe.
      </Card>
    </>
  );
};
