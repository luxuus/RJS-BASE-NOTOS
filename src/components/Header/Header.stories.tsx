/* eslint-disable */
import React from 'react';
import Header from './Header';
import { MemoryRouter } from 'react-router';

export default {
  title: 'UI/Header',
  component: Header,
  parameters: {
    docs: { autodocs: true },
  },
};

/**
 * Affiche le header au chemin donné.
 * Note: le <nav> a une opacité 0 par défaut et devient visible au survol (CSS).
 * Dans Storybook, survolez le header pour voir le menu.
 */
const WithRoute = ({ initialPath = '/' }: { initialPath?: string }) => (
  <MemoryRouter initialEntries={[initialPath]}>
    <Header />
  </MemoryRouter>
);

export const Home = () => <WithRoute initialPath="/" />;
Home.story = { name: 'Route: / (Home actif)' };

export const Products = () => <WithRoute initialPath="/products" />;
Products.story = { name: 'Route: /products (Home + Products actifs)' };

export const Flights = () => <WithRoute initialPath="/flights" />;
Flights.story = { name: 'Route: /flights (Home + Flights actifs)' };

export const Users = () => <WithRoute initialPath="/users" />;
Users.story = { name: 'Route: /users (Home + Users actifs)' };
