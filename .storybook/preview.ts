import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    docs: {
      autodocs: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;