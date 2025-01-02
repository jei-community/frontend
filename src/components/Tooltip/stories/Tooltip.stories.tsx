import { CheckSquare, Square, TreePalm } from 'lucide-react';

import Button from '@/components/Button';

import type { Meta, StoryObj } from '@storybook/react';

import Tooltip from '..';
import { useTooltipStore } from '../store';
import type { TooltipProps } from '../types';

/**
 * 스토리를 위한 토스트 컴포넌트
 *
 * (Zustand 스토어를 사용하는 컴포넌트를 만들어서 테스트)
 */
function TooltipWithHooks({ id, arrowPosition = 'top-center', children, content }: TooltipProps) {
  const { onShowTooltip } = useTooltipStore();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Tooltip id={id} arrowPosition={arrowPosition} content={content}>
        <Button size='large' onClick={(e) => onShowTooltip(id, e.currentTarget)}>
          {children}
        </Button>
      </Tooltip>
    </div>
  );
}

const meta = {
  title: 'Tooltip',
  component: Tooltip,
  tags: ['autodocs', '!dev'],
  args: { id: 'test1', arrowPosition: 'top-center', content: 'Tooltip' },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const DefaultTooltip: Story = {
  args: { id: 'test2', arrowPosition: 'top-center', content: 'Tooltip' },
  render: (args) => <TooltipWithHooks {...args}>Show Tooltip</TooltipWithHooks>,
};

export const BottomArrowTooltip: Story = {
  args: { id: 'test3', arrowPosition: 'bottom-left', content: 'Tooltip' },
  render: (args) => <TooltipWithHooks {...args}>Bottom Arrow Tooltip</TooltipWithHooks>,
};

const IconContent = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
    <CheckSquare />
    <Square />
    <TreePalm />
  </div>
);

export const IconsTooltip: Story = {
  args: { id: 'test4', arrowPosition: 'bottom-center', content: <IconContent /> },
  render: (args) => <TooltipWithHooks {...args}>Icons</TooltipWithHooks>,
};
