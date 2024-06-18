import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField.tsx';

const meta = {
    title: 'Molecules/InputField',
    component: InputField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputFieldForm: Story = {
    args: {
        label: "Enter the site...",
        id: "input-enter-site",
        name: "enter-site"
    }
};
