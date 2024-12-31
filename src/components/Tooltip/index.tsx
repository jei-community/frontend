import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { useTooltipStore } from './store';
import { S } from './style';
import type { TooltipProps } from './types';

/**
 * 툴팁 컴포넌트
 */
export default function Tooltip({ id, arrowPosition = 'top-center', content, children }: TooltipProps) {
  const { tooltipState, onHideTooltip } = useTooltipStore();

  /** 툴팁 열림 여부 */
  const isEnabled = tooltipState.isEnabled && tooltipState.id === id;
  /** 툴팁 요소 */
  const tooltipRef = useRef<HTMLDivElement>(null);
  /** 툴팁의 오프셋 값 */
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  /** 클릭한 요소가 툴팁 요소거나 요소에 속하는지 여부를 반환하는 함수 */
  const isTooltipElement = useCallback(
    (el: Element) => {
      const parent = el.parentElement;
      if (!parent) return false;
      if (parent.id === id) return true;

      return isTooltipElement(parent);
    },
    [id],
  );

  /** 툴팁을 가리는 함수 */
  const handleHideTooltip = useCallback(
    (e: MouseEvent) => {
      if (!isEnabled) return;

      if (!isTooltipElement(e.target as Element)) {
        onHideTooltip();
        window.removeEventListener('click', handleHideTooltip);
      }
    },
    [isEnabled, isTooltipElement, onHideTooltip],
  );

  useEffect(() => {
    if (!tooltipRef.current) return;

    // TODO(성찬): 첫 렌더링 시 offsetX 값이 일시적으로 0이 되는 현상 해결
    const { width } = tooltipRef.current.getBoundingClientRect();

    // 툴팁이 왼쪽 위 기준으로 정렬되어 있으므로, `arrowPosition`별 오프셋 값 설정
    setOffset(() => {
      window.addEventListener('click', handleHideTooltip);

      let _x: number, _y: number;

      if (arrowPosition.includes('left')) _x = 20;
      else if (arrowPosition.includes('right')) _x = width - 20;
      else _x = width / 2;

      if (arrowPosition.includes('top')) _y = 0;
      else _y = (tooltipRef.current?.offsetHeight ?? 0) + (tooltipState.el?.scrollHeight ?? 0) + 4;

      return { x: _x, y: _y };
    });

    return () => {
      window.removeEventListener('click', handleHideTooltip);
    };
  }, [handleHideTooltip, arrowPosition, tooltipState.el]);

  return (
    <S.TooltipOuterContainer>
      {isEnabled &&
        arrowPosition.includes('bottom') &&
        createPortal(
          <S.TooltipInnerContainer ref={tooltipRef} id={id} $x={tooltipState.x - offset.x} $y={tooltipState.y - offset.y}>
            <S.TooltipContent>{content}</S.TooltipContent>
            <S.TooltipArrowContainer $arrowPosition={arrowPosition}>
              <S.TooltipArrow $arrowPosition={arrowPosition} />
            </S.TooltipArrowContainer>
          </S.TooltipInnerContainer>,
          document.body,
        )}
      {children}
      {isEnabled &&
        arrowPosition.includes('top') &&
        createPortal(
          <S.TooltipInnerContainer ref={tooltipRef} id={id} $x={tooltipState.x - offset.x} $y={tooltipState.y - offset.y}>
            <S.TooltipArrowContainer $arrowPosition={arrowPosition}>
              <S.TooltipArrow $arrowPosition={arrowPosition} />
            </S.TooltipArrowContainer>
            <S.TooltipContent>{content}</S.TooltipContent>
          </S.TooltipInnerContainer>,
          document.body,
        )}
    </S.TooltipOuterContainer>
  );
}
