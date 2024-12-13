import { PropsWithChildren, useRef } from 'react';

import useDraggable from './hooks/useDraggable';
import { S } from './styles';

export default function DraggableScroller({ children }: PropsWithChildren) {
  const containerRef = useRef<HTMLDivElement>(null);
  const events = useDraggable(containerRef);

  return (
    <S.scrollerStyle ref={containerRef} {...events}>
      {children}
    </S.scrollerStyle>
  );
}
