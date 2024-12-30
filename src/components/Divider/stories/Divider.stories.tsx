import type { Meta, StoryObj } from '@storybook/react';

import Divider, { DividerDirection } from '..';

const meta = {
  title: 'Divider',
  component: Divider,
  tags: ['autodocs', '!dev'],
  args: { direction: 'horizontal' },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

const DividerTemplate = ({ direction }: { direction?: DividerDirection }) => {
  return (
    <div style={{ height: '12rem', display: 'flex', flexDirection: direction === 'horizontal' ? 'column' : 'row', gap: '1rem' }}>
      {direction}
      <Divider direction={direction} />
      divider
    </div>
  );
};

export const HorizontalDivider: Story = {
  args: { direction: 'horizontal' },
  render: DividerTemplate,
};

export const VerticalDivider: Story = {
  args: { direction: 'vertical' },
  render: DividerTemplate,
};
