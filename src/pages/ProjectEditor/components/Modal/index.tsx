import { XIcon } from 'lucide-react';
import { PropsWithChildren, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import Button from '@/components/Button';

import styled from '@emotion/styled';

interface Props extends PropsWithChildren {
  close: () => void;
  title?: string;
  hasClose?: boolean;
  onClose?: () => void;
}

// 임시 컴포넌트: 공통 컴포넌트 구현 전까지 사용
export default function Modal({ title = '', hasClose = true, children, close, onClose = () => {} }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const detectOutsideClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        close();
        onClose();
      }
    };

    document.addEventListener('mousedown', detectOutsideClick);

    return () => {
      document.removeEventListener('mousedown', detectOutsideClick);
    };
  }, [close, onClose]);

  return (
    <>
      {createPortal(
        <S.Container>
          <S.Content ref={ref}>
            <S.Header>
              <S.Title>{title}</S.Title>
              {hasClose && (
                <Button variant='outlined' color='neutral' size='icon' onClick={close}>
                  <XIcon />
                </Button>
              )}
            </S.Header>
            <S.Body>{children}</S.Body>
          </S.Content>
        </S.Container>,
        document.body,
      )}
    </>
  );
}

const S = {
  Container: styled.div({
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    width: '100vw',
    height: '100vh',

    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  }),

  Content: styled.div({
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    display: 'flex',
    flexDirection: 'column',
    gap: '2.4rem',

    width: '80%',
    maxWidth: '600px',
    height: '60%',
    maxHeight: '600px',

    padding: '3.2rem',

    borderRadius: 16,

    backgroundColor: 'white',
  }),

  Header: styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  }),

  Title: styled.h2(({ theme }) => ({
    color: theme.colors.gray[900],
    ...theme.typography.subtitle,
  })),

  Body: styled.div({
    flex: 1,

    overflowY: 'auto',
  }),
};
