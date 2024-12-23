import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Avatar from '..';

const meta = {
  component: Avatar,
  tags: ['autodocs', '!dev'],
  args: { size: 'medium' },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MediumAvatar: Story = {
  args: {
    src: 'https://i.pravatar.cc/64',
    size: 'medium',
    onClick: fn(),
  },
};

export const LargeUnclickableAvatar: Story = {
  args: {
    src: 'https://i.pravatar.cc/64',
    size: 'large',
  },
};

export const SmallDefaultAvatar: Story = {
  args: {
    size: 'small',
    onClick: fn(),
  },
};
