import { useState } from 'react';
import { createPortal } from 'react-dom';

import Button from '@/components/Button';

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Modal from '..';
import { ModalProps } from '../types';

// TODO(성찬): 스토리북 컨트롤 패널에서 모달 상태를 관리할 수 있도록 스토리 & 컴포넌트 개선
/**
 * 스토리를 위한 모달 컴포넌트
 *
 * (모달 자체는 상태를 가지고 있지 않으므로, 상태를 가지는 컴포넌트를 만들어서 테스트)
 */
function ModalWithHooks({ title, subtitle, onClose }: ModalProps) {
  const [isOpened, setIsOpened] = useState(false);

  const handleChange = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      <Button onClick={handleChange}>Open Modal</Button>
      {isOpened &&
        createPortal(
          <Modal title={title} subtitle={subtitle} onClose={onClose}>
            test
          </Modal>,
          document.body,
        )}
    </>
  );
}

const meta = {
  title: 'Modal',
  component: ModalWithHooks,
  tags: ['autodocs', '!dev'],
  args: { title: 'Title', subtitle: 'Subtitle', onClose: fn(), onConfirm: fn(), children: 'Content' },
} satisfies Meta<typeof ModalWithHooks>;

export default meta;

type Story = StoryObj<typeof ModalWithHooks>;

export const DefaultModal: Story = {
  args: { title: 'Title', subtitle: 'Subtitle', onClose: fn(), onConfirm: fn(), children: 'Content' },
};
