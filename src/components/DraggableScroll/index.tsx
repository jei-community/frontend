import { ReactNode, useRef } from 'react';

import styled from '@emotion/styled';

import { useDraggable } from './hooks/useDraggable';

type DraggableScrollerProps = {
  children: ReactNode;
};

const DraggableScroller = ({ children }: DraggableScrollerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const events = useDraggable(containerRef);

  return (
    <S.scrollerStyle ref={containerRef} {...events}>
      {children}
    </S.scrollerStyle>
  );
};

export default DraggableScroller;

const S = {
  scrollerStyle: styled.div({
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    overflowX: 'auto',
    // scrollBehavior: 'smooth',
    // 스크롤바 숨기기
    '&::-webkit-scrollbar': {
      display: 'none', // 크롬, 사파리
    },
    '-ms-overflow-style': 'none', // IE, Edge
    'scrollbar-width': 'none', // Firefox
  }),
};
