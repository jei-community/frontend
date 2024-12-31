import { createPortal } from 'react-dom';

import Button from '../Button';
import { useModalStore } from './store';
import { S } from './style';
import type { ModalProps } from './types';

/**
 * 공통 모달 컴포넌트
 */
export default function Modal({ id, title, subtitle, onConfirm, onCancel, children }: ModalProps) {
  const { modalState, onCloseModal } = useModalStore();

  /** 모달 열림 여부 */
  const isOpened = modalState.isOpened && modalState.id === id;

  const handleConfirm = () => {
    onConfirm?.();
    onCloseModal();
  };
  const handleCancel = () => {
    onCancel?.();
    onCloseModal();
  };

  if (!isOpened) return null;

  return createPortal(
    <S.Overlay>
      <S.ModalContainer>
        <S.Header>
          <S.TitleArea>
            <S.Title>{title}</S.Title>
            {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
          </S.TitleArea>
          <S.CloseButtonWrapper onClick={onCloseModal}>
            <S.CloseButton />
          </S.CloseButtonWrapper>
        </S.Header>
        <S.Content>{children}</S.Content>
        <S.Footer>
          {onConfirm && (
            <Button size='medium' onClick={handleConfirm}>
              확인
            </Button>
          )}
          {onCancel && (
            <Button size='medium' onClick={handleCancel}>
              취소
            </Button>
          )}
        </S.Footer>
      </S.ModalContainer>
    </S.Overlay>,
    document.body,
  );
}
