import { MouseEvent, RefObject, useCallback, useState } from 'react';

import { throttle } from '@/utils';

type DraggableHook = {
  onMouseDown: (e: MouseEvent) => void;
  onMouseMove: (e: MouseEvent) => void;
  onMouseUp: (e: MouseEvent) => void;
  onMouseLeave: (e: MouseEvent) => void;
};

export default function useDraggable(scrollerRef: RefObject<HTMLElement>): DraggableHook {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [totalX, setTotalX] = useState<number>(0);

  const preventUnexpectedEffects = useCallback((e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const onDragStart = (e: MouseEvent) => {
    preventUnexpectedEffects(e);
    setIsDragging(true);
    const x = e.clientX;
    setStartX(x);
    if (scrollerRef.current && 'scrollLeft' in scrollerRef.current) {
      setTotalX(x + scrollerRef.current.scrollLeft);
    }
  };

  const onDragEnd = (e: MouseEvent) => {
    if (!isDragging) return;
    if (!scrollerRef.current) return;

    setIsDragging(false);

    const endX = e.clientX;
    const childNodes = [...(scrollerRef.current?.childNodes || [])];
    const dragDiff = Math.abs(startX - endX);

    if (dragDiff > 10) {
      childNodes.forEach((child) => {
        child.addEventListener('click', () => preventUnexpectedEffects);
      });
    } else {
      childNodes.forEach((child) => {
        child.removeEventListener('click', () => preventUnexpectedEffects);
      });
    }
  };

  const onDragMove = (e: MouseEvent) => {
    if (!isDragging) return;
    throttle(function () {
      // 클릭 등 마우스 이동 외 다른 이벤트 실행되는 것 방지
      preventUnexpectedEffects(e);

      // 스크롤 포지션
      const scrollLeft = totalX - e.clientX;

      if (scrollerRef.current && 'scrollLeft' in scrollerRef.current) {
        // 스크롤 발생
        scrollerRef.current.scrollLeft = scrollLeft;
      }
    }, 100);
  };

  return {
    onMouseDown: onDragStart,
    onMouseMove: onDragMove,
    onMouseUp: onDragEnd,
    onMouseLeave: onDragEnd,
  };
}