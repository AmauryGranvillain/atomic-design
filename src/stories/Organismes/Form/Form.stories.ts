import type { Meta, StoryObj } from '@storybook/react';
import {Form} from "./Form.tsx";

const meta = {
    title: 'Organismes/Form',
    component: Form,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Formulaire: Story = {
    args: {},
};