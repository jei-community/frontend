import Button from '../Button';
import { S } from './style';
import type { ModalProps } from './types';

/**
 * 공통 모달 컴포넌트
 */
export default function Modal({ title, subtitle, onClose, onConfirm, children }: ModalProps) {
  return (
    <S.Overlay onClick={onClose}>
      <S.ModalContainer>
        <S.Header>
          <S.TitleArea>
            <S.Title>{title}</S.Title>
            {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
          </S.TitleArea>
          <S.CloseButtonWrapper onClick={onClose}>
            <S.CloseButton />
          </S.CloseButtonWrapper>
        </S.Header>
        <S.Content>{children}</S.Content>
        <S.Footer>
          {onConfirm && (
            <Button size='medium' onClick={onConfirm}>
              확인
            </Button>
          )}
          <Button size='medium' onClick={onClose}>
            취소
          </Button>
        </S.Footer>
      </S.ModalContainer>
    </S.Overlay>
  );
}
