import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import ButtonGroup from '..';
import { ButtonGroupItem } from '../types';

const sampleItems: ButtonGroupItem[] = [
  { label: '서비스', value: 'LIVE', color: 'success' },
  { label: '개발', value: 'DEVELOP', color: 'warning', checked: true },
  { label: '서비스 중단', value: 'STOP', color: 'error' },
];

const meta = {
  title: 'ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs', '!dev'],
  args: { items: sampleItems, onChange: fn() },
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultButtonGroup: Story = {
  args: {
    items: sampleItems,
  },
  render: ButtonGroup,
};
