import Button from '@/components/Button';

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Modal from '..';
import { useModalStore } from '../store';
import { ModalProps } from '../types';

/**
 * 스토리를 위한 모달 컴포넌트
 *
 * (Zustand 스토어를 사용하는 컴포넌트를 만들어서 테스트)
 */
function ModalWithHooks({ title, subtitle, onConfirm, onCancel, children }: ModalProps) {
  const { onOpenModal } = useModalStore();

  return (
    <>
      <Button onClick={() => onOpenModal('test')}>Open Modal</Button>
      <Modal id='test' title={title} subtitle={subtitle} onConfirm={onConfirm} onCancel={onCancel}>
        {children}
      </Modal>
    </>
  );
}

const meta = {
  title: 'Modal',
  component: ModalWithHooks,
  tags: ['autodocs', '!dev'],
  args: { title: 'Title', subtitle: 'Subtitle', onConfirm: fn(), onCancel: fn(), children: 'Content' },
} satisfies Meta<typeof ModalWithHooks>;

export default meta;

type Story = StoryObj<typeof ModalWithHooks>;

export const DefaultModal: Story = {
  args: { title: 'Title', subtitle: 'Subtitle', children: 'Content' },
};
