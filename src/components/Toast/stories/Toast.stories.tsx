import Button from '@/components/Button';

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Toast from '..';
import { useToastStore } from '../store';
import type { ToastProps } from '../types';

/**
 * 스토리를 위한 토스트 컴포넌트
 *
 * (Zustand 스토어를 사용하는 컴포넌트를 만들어서 테스트)
 */
function ToastWithHooks({ id, duration, color, children }: ToastProps) {
  const { onOpenToast } = useToastStore();

  return (
    <div>
      <Button onClick={() => onOpenToast(id)}>Show Toast</Button>
      <Toast id={id} duration={duration} color={color}>
        {children}
      </Toast>
    </div>
  );
}

const meta = {
  title: 'Toast',
  component: Toast,
  tags: ['autodocs', '!dev'],
  args: { id: 'test', duration: 5000, color: 'primary', onCancel: fn() },
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof Toast>;

export const DefaultToast: Story = {
  args: { id: 'test', duration: 5000, color: 'primary' },
  render: (arg) => <ToastWithHooks {...arg}>안녕하세요! 이건 토스트에요.</ToastWithHooks>,
};

export const ShortToast: Story = {
  args: { id: 'short', duration: 3000, color: 'error' },
  render: (arg) => <ToastWithHooks {...arg}>3초만 나타나는 토스트입니다.</ToastWithHooks>,
};
