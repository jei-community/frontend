import { PropsWithChildren, useRef } from 'react';

import useDraggable from './hooks/useDraggable';
import { S } from './style';

export default function DraggableScroller({ children }: PropsWithChildren) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const events = useDraggable(containerRef);

  return (
    <S.scrollerStyle ref={containerRef} {...events}>
      {children}
    </S.scrollerStyle>
  );
}
