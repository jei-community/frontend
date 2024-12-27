import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import TextArea from '..';

const meta = {
  title: 'TextArea',
  component: TextArea,
  tags: ['autodocs', '!dev'],
  args: { placeholder: 'TextArea', isError: false, disabled: false, onKeyDown: fn(), onFocus: fn(), onBlur: fn() },
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultTextArea: Story = {
  args: {
    placeholder: 'TextArea',
  },
};

export const MultiRowTextArea: Story = {
  args: {
    placeholder: '3 Rows',
    rows: 3,
  },
};

export const DisabledTextArea: Story = {
  args: {
    placeholder: 'Disabled',
    disabled: true,
  },
};

export const ErrorTextArea: Story = {
  args: {
    placeholder: 'Error',
    isError: true,
  },
};
