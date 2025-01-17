import { PropsWithChildren } from 'react';

/**
 * 공통 모달 컴포넌트의 Props 인터페이스 (스토리에서도 사용하기 위해 분리)
 */
export interface ModalProps extends PropsWithChildren {
  /** 모달 ID (각 모달을 구분하는 문자열) */
  id: string;
  /** 모달 제목 */
  title: string;
  /** 모달 부제목 */
  subtitle?: string;
  /** 모달 확인 버튼 클릭 이벤트 핸들러 */
  onConfirm?: () => void;
  /** 모달 취소 버튼 클릭 이벤트 핸들러 (우측 상단 X 버튼과 별개의 버튼) */
  onCancel?: () => void;
}
