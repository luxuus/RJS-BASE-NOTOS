/* eslint-disable */
import React, { useState } from 'react';
import Searchfield from './Searchfield';

export default {
  title: "UI/Searchfield",
  component: Searchfield,
  parameters: {
    docs: { autodocs: true },
  },
};

export const Default = () => <Searchfield />;

export const WithDefaultTerms = () => (
  <Searchfield defaultTerms={['react', 'typescript']} />
);

export const ControlledLike = () => {
  const [terms, setTerms] = useState<string[]>(['design', 'pattern']);
  return (
    <div style={{ display: 'grid', gap: 8 }}>
      <Searchfield
        defaultTerms={terms}
        onTermsChange={setTerms}
        placeholder="Tapez puis ',' ou Entrée"
      />
      <div>Terms: {JSON.stringify(terms)}</div>
    </div>
  );
};
