/* eslint-disable */
import { fn } from '@storybook/test';
import { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

/**
 * USAGE: Button description to complete.
 */
const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    level: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
  },
  args: { action: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  storyName: 'Primary Button',
  args: {
    level: 'primary',
    disabled: false,
    size: 'medium',
    children: 'Primary Button',
  },
};

export const Optional: Story = {
  storyName: 'Optional Button',
  args: {
    level: 'optional',
    disabled: false,
    size: 'medium',
    children: 'Optional Button',
  },
};

export const Critical: Story = {
  storyName: 'Critical Button',
  args: {
    level: 'critical',
    disabled: false,
    size: 'medium',
    children: 'Critical Button',
  },
};