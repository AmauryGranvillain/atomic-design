import type { Meta, StoryObj } from '@storybook/react';
import { LabelForm } from './LabelForm.tsx';

const meta = {
    title: 'Atomes/LabelForm',
    component: LabelForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof LabelForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Label: Story = {
    args: {
        label: 'Label Form',
    },
};