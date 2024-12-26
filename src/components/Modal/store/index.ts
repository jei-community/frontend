import { create } from 'zustand';

/** 모달 Zustand 스토어 인터페이스 */
interface ModalContextState {
  /** 모달 열림 여부 */
  isOpened: boolean;
  /** 모달을 여는 함수 */
  onOpenModal: () => void;
  /** 모달을 닫는 함수 */
  onCloseModal: () => void;
}

/** 모달 Zustand 스토어 */
export const useModalStore = create<ModalContextState>((set) => ({
  isOpened: false,
  onOpenModal: () => set({ isOpened: true }),
  onCloseModal: () => set({ isOpened: false }),
}));
