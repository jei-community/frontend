import styled from '@emotion/styled';

import { TooltipArrowPosition } from '../types';

/** 툴팁 위치 스타일 인터페이스 */
interface TooltipPositionProps {
  $x: number;
  $y: number;
}

/** 툴팁 말풍선 화살표 스타일 인터페이스 */
interface TooltipArrowProps {
  $arrowPosition: TooltipArrowPosition;
}

export const S = {
  TooltipOuterContainer: styled.div`
    position: relative;
  `,
  TooltipInnerContainer: styled.div<TooltipPositionProps>`
    position: absolute;
    top: ${({ $y }) => `${$y / 10}rem`};
    left: ${({ $x }) => `${$x / 10}rem`};
    z-index: 100;
    display: flex;
    flex-direction: column;
  `,
  /** 툴팁 내용 영역 스타일 */
  TooltipContent: styled.div`
    min-width: 6rem;
    display: flex;
    justify-content: center;
    padding: 0.8rem;
    border-radius: 0.8rem;
    background-color: rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);

    ${({ theme }) => theme.typography.body3}
  `,
  /** 툴팁 화살표 컨테이너 스타일 */
  TooltipArrowContainer: styled.div<TooltipArrowProps>`
    width: 100%;
    padding: 0 1.2rem;
    display: flex;
    justify-content: ${({ $arrowPosition }) => {
      if ($arrowPosition.includes('left')) return 'flex-start';
      if ($arrowPosition.includes('center')) return 'center';
      if ($arrowPosition.includes('right')) return 'flex-end';
    }};
  `,
  /** 툴팁 화살표 스타일 */
  TooltipArrow: styled.div<TooltipArrowProps>`
    width: 1.8rem;
    height: 1.6rem;
    background-color: rgba(0, 0, 0, 0.15);
    /* TODO(성찬): 화살표 삼각형에 블러 효과를 입히면 화살표 삼각형 바깥 영역 사각형에 블러 효과가 적용되는 이슈 해결 */
    /* backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px); */
    clip-path: ${({ $arrowPosition }) => {
      if ($arrowPosition.includes('top')) return 'polygon(50% 0%, 0% 100%, 100% 100%)';
      if ($arrowPosition.includes('bottom')) return 'polygon(50% 100%, 0% 0%, 100% 0%)';
    }};
  `,
};
