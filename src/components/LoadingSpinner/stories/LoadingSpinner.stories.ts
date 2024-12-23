import type { Meta, StoryObj } from '@storybook/react';

import LoadingSpinner from '..';

const meta = {
  component: LoadingSpinner,
  tags: ['autodocs', '!dev'],
  args: { size: 'small' },
} satisfies Meta<typeof LoadingSpinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SmallLoadingSpinner: Story = {
  args: {
    size: 'small',
  },
};

export const MediumLoadingSpinner: Story = {
  args: {
    size: 'medium',
  },
};

export const LargeLoadingSpinner: Story = {
  args: {
    size: 'large',
  },
};
