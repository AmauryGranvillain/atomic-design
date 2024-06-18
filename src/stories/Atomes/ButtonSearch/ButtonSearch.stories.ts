import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ButtonSearch } from './ButtonSearch.tsx';

const meta = {
  title: 'Atomes/ButtonSearch',
  component: ButtonSearch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof ButtonSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Search',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Search',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Search',
  },
};
