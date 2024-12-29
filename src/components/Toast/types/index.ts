import { PropsWithChildren } from 'react';

/** 토스트 배경 색상 */
export type ToastColors = 'primary' | 'success' | 'warning' | 'error' | 'neutral';

/**
 * 토스트 컴포넌트의 Props 인터페이스 (스토리에서도 사용하기 위해 분리)
 */
export interface ToastProps extends PropsWithChildren {
  /** 토스트 ID (각 토스트를 구분하는 문자열) */
  id: string;
  /** 토스트 메시지 노출 시간 (밀리초 단위) */
  duration: number;
  /** 토스트 배경 색상 */
  color: ToastColors;
  /** 토스트 취소(X) 버튼 클릭 이벤트 핸들러 */
  onCancel?: () => void;
}
