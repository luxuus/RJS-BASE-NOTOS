/* eslint-disable */
import React, { useState } from 'react';
import AutoComplete from './AutoComplete';

export default {
  title: 'Core/AutoComplete',
  component: AutoComplete,
};

const CITIES = [
  'Paris','Berlin','Lisbonne','Madrid','Rome','Prague','Vienne','Budapest',
  'Copenhague','Stockholm','Helsinki','Oslo','Varsovie','Bruxelles','Amsterdam',
];

export const Default = () => (
  <AutoComplete options={CITIES} placeholder="Ville…" />
);
Default.story = { name: 'Défaut' };

export const MinCharsDebounced = () => (
  <AutoComplete options={CITIES} minChars={2} debounceMs={300} placeholder="Tapez ≥ 2 lettres…" />
);

export const Controlled = () => {
  const [val, setVal] = useState('Pa');
  return (
    <div style={{ display: 'grid', gap: 8 }}>
      <AutoComplete
        options={CITIES}
        value={val}
        onChange={setVal}
        onSelect={(v) => alert(`Sélection: ${v}`)}
      />
      <button onClick={() => setVal('')}>Reset</button>
    </div>
  );
};

export const CustomRender = () => (
  <AutoComplete
    options={CITIES.map(c => ({ label: c, value: c.toLowerCase() }))}
    renderOption={(o, active) => (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>{o.label}</span>
        <small>{active ? '↩ Entrée' : ''}</small>
      </div>
    )}
  />
);
