/* eslint-disable */
import React, { useState } from 'react';
import InputGroup from './Input';

export default {
  title: 'UI/Input',
  component: InputGroup,
  parameters: {
    docs: { autodocs: true },
  },
};

/**
 * Aide mémo :
 * - <InputGroup> fournit un contexte {invalid, setInvalid}
 * - <InputGroup.Label> : label associé (à relier par htmlFor si vous passez id à l’input)
 * - <InputGroup.Input> : input HTML5 qui déclenche setInvalid(true) sur onInvalid et
 *   revalide sur onBlur via checkValidity()
 * - <InputGroup.Error> : n’apparaît que lorsque invalid === true
 */

export const Required = () => (
  <div style={{ maxWidth: 360 }}>
    <InputGroup>
      <InputGroup.Label htmlFor="required">Nom (requis)</InputGroup.Label>
      <InputGroup.Input id="required" required placeholder="Tapez puis sortez du champ…" />
      <InputGroup.Error>Ce champ est requis.</InputGroup.Error>
    </InputGroup>
  </div>
);
Required.story = { name: 'Requis (onBlur / onInvalid)' };

export const WithPattern = () => (
  <div style={{ maxWidth: 360 }}>
    <InputGroup>
      <InputGroup.Label htmlFor="digits">Code (chiffres uniquement)</InputGroup.Label>
      <InputGroup.Input
        id="digits"
        pattern="^\d+$"
        placeholder="Ex: 12345"
        title="Chiffres uniquement"
      />
      <InputGroup.Error>Uniquement des chiffres sont autorisés.</InputGroup.Error>
    </InputGroup>
  </div>
);

export const Email = () => (
  <div style={{ maxWidth: 360 }}>
    <InputGroup>
      <InputGroup.Label htmlFor="email">Email</InputGroup.Label>
      <InputGroup.Input id="email" type="email" placeholder="name@example.com" />
      <InputGroup.Error>Veuillez saisir une adresse email valide.</InputGroup.Error>
    </InputGroup>
  </div>
);

export const ControlledLikeDemo = () => {
  // Démo légère pour montrer que l’UI réagit (sans changer le composant)
  const [value, setValue] = useState('');
  return (
    <div style={{ display: 'grid', gap: 8, maxWidth: 420 }}>
      <InputGroup>
        <InputGroup.Label htmlFor="search">Recherche</InputGroup.Label>
        <InputGroup.Input
          id="search"
          placeholder="Tapez quelque chose…"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <InputGroup.Error>Message d’erreur si invalide.</InputGroup.Error>
      </InputGroup>
      <div>Valeur actuelle : “{value}”</div>
    </div>
  );
};
