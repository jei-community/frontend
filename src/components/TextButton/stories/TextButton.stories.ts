import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import TextButton from '..';

const meta = {
  component: TextButton,
  tags: ['autodocs', '!dev'],
  args: { color: 'primary', size: 'medium', disabled: false, children: 'TextButton', onClick: fn() },
} satisfies Meta<typeof TextButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryMediumTextButton: Story = {
  args: {
    color: 'primary',
    size: 'medium',
  },
};

export const NeutralSmallTextButton: Story = {
  args: {
    color: 'neutral',
    size: 'small',
    children: 'Small',
  },
};

export const PrimarySmallDisabledTextButton: Story = {
  args: {
    color: 'primary',
    size: 'small',
    disabled: true,
    children: 'Disabled',
  },
};
