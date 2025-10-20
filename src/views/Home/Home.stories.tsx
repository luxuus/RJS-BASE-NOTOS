/* Home.stories.tsx */
import type { Meta, StoryObj, Decorator } from '@storybook/react';
import Home from './index'; // export par défaut => Home.lazy -> Home.tsx

// Décorateur générique pour toutes les "views"
// (zone pleine hauteur, padding, fond neutre)
const withViewShell: Decorator = (Story) => (
  <div
    style={{
      minHeight: '100vh',
      padding: 16,
      background: '#f8fafc',
      boxSizing: 'border-box',
    }}
  >
    <Story />
  </div>
);

const meta: Meta<typeof Home> = {
  title: 'Views/Home',
  component: Home,
  decorators: [withViewShell],
  parameters: {
    docs: { autodocs: true }, // autodoc actif
  },
  tags: ['autodocs'], // utile/nécessaire sur certaines configs SB8
};

export default meta;
type Story = StoryObj<typeof Home>;

export const Default: Story = {
  name: 'Home (default)',
};

export const InCardLikeContainer: Story = {
  name: 'Home dans un conteneur',
  render: () => (
    <div
      style={{
        border: '1px dashed #cbd5e1',
        borderRadius: 12,
        padding: 12,
        background: '#fff',
        maxWidth: 960,
        margin: '0 auto',
      }}
    >
      <Home />
    </div>
  ),
};
