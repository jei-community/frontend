import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import MoreButton from '..';

const meta = {
  title: 'MoreButton',
  component: MoreButton,
  tags: ['autodocs', '!dev'],
  args: { isOpen: false, onClick: fn() },
} satisfies Meta<typeof MoreButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultMoreButton: Story = {
  args: { isOpen: false, onClick: fn() },
  render: MoreButton,
};
