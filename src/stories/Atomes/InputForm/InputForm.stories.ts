import type { Meta, StoryObj } from '@storybook/react';
import { InputForm } from './InputForm.tsx';
import {fn} from "@storybook/test";

const meta = {
    title: 'Atomes/InputForm',
    component: InputForm,
    parameters: {
        layout: 'centered',
    },
    args: { onChange: fn() },
    tags: ['autodocs'],
} satisfies Meta<typeof InputForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLabel: Story = {
    args: {
        label: 'Search',
        name: "input-form",
        id: "input-form",
    },
};

export const WithoutLabel: Story = {
    args: {
        label: '',
        name: "input-form",
        id: "input-form",
    },
};