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
function ModalWithHooks({ id, title, subtitle, onConfirm, onCancel, children }: ModalProps) {
  const { onOpenModal } = useModalStore();

  return (
    <>
      <Button onClick={() => onOpenModal(id)}>Open Modal</Button>
      <Modal id={id} title={title} subtitle={subtitle} onConfirm={onConfirm} onCancel={onCancel}>
        {children}
      </Modal>
    </>
  );
}

const meta = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs', '!dev'],
  args: { id: 'test', title: 'Title', subtitle: 'Subtitle', onConfirm: fn(), onCancel: fn(), children: 'Content' },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const DefaultModal: Story = {
  args: { id: 'test', title: 'Title', subtitle: 'Subtitle' },
  render: (arg) => <ModalWithHooks {...arg}>Content</ModalWithHooks>,
};
