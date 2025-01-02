import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useToastStore } from './store';
import { S } from './style';
import type { ToastProps } from './types';

/**
 * 토스트 컴포넌트
 */
export default function Toast({ id, duration, color, onCancel, children }: ToastProps) {
  // TODO(성찬): 토스트를 여러 개 열 수 없는 문제 해결
  const { toastState, onCloseToast } = useToastStore();

  /** 모달 열림 여부 */
  const isOpened = toastState.isOpened && toastState.id === id;

  const handleCancel = () => {
    onCancel?.();
    onCloseToast();
  };

  useEffect(() => {
    if (!isOpened) return;

    const _id = setTimeout(() => {
      onCloseToast();
    }, duration + 250);

    return () => {
      clearTimeout(_id);
    };
  }, [duration, isOpened, onCloseToast]);

  if (!isOpened) return null;

  return createPortal(
    <S.ToastContainer $duration={duration / 1000}>
      <S.ToastMessageContainer $color={color}>
        <S.Message>{children}</S.Message>
        <S.CloseButton onClick={handleCancel} />
      </S.ToastMessageContainer>
      <S.LoadingBarContainer>
        <S.LoadingBar $color={color} $duration={duration / 1000} />
      </S.LoadingBarContainer>
    </S.ToastContainer>,
    document.body,
  );
}
