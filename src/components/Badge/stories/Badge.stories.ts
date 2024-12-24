import type { Meta, StoryObj } from '@storybook/react';

import Badge from '..';

const meta = {
  title: 'Badge',
  component: Badge,
  tags: ['autodocs', '!dev'],
  args: { size: 'medium', color: 'success', children: '서비스' },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MediumSuccessBadge: Story = {
  args: {
    size: 'medium',
    color: 'success',
    children: '서비스',
  },
};

export const SmallWarningBadge: Story = {
  args: {
    size: 'small',
    color: 'warning',
    children: '개발',
  },
};

export const SmallErrorBadge: Story = {
  args: {
    size: 'small',
    color: 'error',
    children: '서비스 중단',
  },
};
