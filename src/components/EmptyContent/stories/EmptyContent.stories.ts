import type { Meta, StoryObj } from '@storybook/react';

import EmptyContent from '..';

const meta = {
  title: 'EmptyContent',
  component: EmptyContent,
  tags: ['autodocs', '!dev'],
  args: { size: 'small', children: '담당 중인 일일점검이 없어요' },
} satisfies Meta<typeof EmptyContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SmallEmptyContent: Story = {
  args: {
    size: 'small',
    children: '담당 중인 일일점검이 없어요',
  },
};

export const MediumEmptyContent: Story = {
  args: {
    size: 'medium',
    children: '참여 중이거나 참여한 프로젝트가 없어요',
  },
};

export const LargeEmptyContent: Story = {
  args: {
    size: 'large',
    children: '볼 수 있는 앨범이 없어요',
  },
};
