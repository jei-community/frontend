import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button from '..';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs', '!dev'],
  args: { variant: 'filled', size: 'small', color: 'primary', disabled: false, isLoading: false, onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SmallPrimaryButton: Story = {
  args: {
    variant: 'filled',
    size: 'small',
    color: 'primary',
    disabled: false,
    isLoading: false,
    children: '?!',
  },
};

export const IconNeutralOutlineButton: Story = {
  args: {
    variant: 'outlined',
    size: 'icon',
    color: 'neutral',
    disabled: false,
    isLoading: false,
    children: '👍',
  },
};

export const FullDisabledButton: Story = {
  args: {
    variant: 'filled',
    size: 'full',
    color: 'neutral',
    disabled: true,
    isLoading: false,
    children: 'fullllllllllll',
  },
};

export const LargeLoadingButton: Story = {
  args: {
    variant: 'filled',
    size: 'large',
    color: 'success',
    disabled: true,
    isLoading: true,
    children: 'loading...',
  },
};
