import { create } from 'zustand';

/** ID에 따른 토스트 고유의 상태 인터페이스 */
interface ToastState {
  /** 토스트 ID */
  id: string | null;
  /** 토스트 열림 여부 */
  isOpened: boolean;
}

/** 토스트 Zustand 스토어 인터페이스 */
interface ToastContextState {
  /** 토스트 고유 상태 */
  toastState: ToastState;
  /** 토스트를 여는 함수 */
  onOpenToast: (id: string) => void;
  /** 토스트를 닫는 함수 */
  onCloseToast: () => void;
}

/** 토스트 Zustand 스토어 */
export const useToastStore = create<ToastContextState>((set) => ({
  toastState: { id: null, isOpened: false },
  onOpenToast: (id) => set({ toastState: { id, isOpened: true } }),
  onCloseToast: () => set({ toastState: { id: null, isOpened: false } }),
}));
