import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import TextField from '..';

const meta = {
  component: TextField,
  tags: ['autodocs', '!dev'],
  args: { heightSize: 'medium', placeholder: 'TextField', isError: false, onKeyDown: fn(), onFocus: fn(), onBlur: fn() },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MediumTextField: Story = {
  args: {
    heightSize: 'medium',
    placeholder: 'Medium',
  },
};

export const SmallDisabledTextField: Story = {
  args: {
    heightSize: 'small',
    placeholder: 'Placeholder',
    disabled: true,
  },
};

export const LargeErrorTextField: Story = {
  args: {
    heightSize: 'large',
    placeholder: 'Error',
    isError: true,
  },
};
