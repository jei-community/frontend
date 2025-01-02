import { PropsWithChildren, ReactNode } from 'react';

/** 툴팁 말풍선 화살표의 위치 타입 */
export type TooltipArrowPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

/**
 * 툴팁 컴포넌트의 Props 인터페이스 (스토리에서도 사용하기 위해 분리)
 */
export interface TooltipProps extends PropsWithChildren {
  /** 툴팁 ID (각 툴팁을 구분하는 문자열) */
  id: string;
  /** 툴팁 말풍선 화살표의 위치 */
  arrowPosition?: TooltipArrowPosition;
  /** 툴팁 안에 표시할 컨텐츠 */
  content: ReactNode;
  /** 툴팁 잠금 여부 (툴팁을 여는 요소를 클릭해도 열리지 않음) */
  locked?: boolean;
}
