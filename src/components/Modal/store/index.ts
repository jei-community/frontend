import { create } from 'zustand';

/** ID에 따른 모달 고유의 상태 인터페이스 */
interface ModalState {
  /** 모달 ID */
  id: string | null;
  /** 모달 열림 여부 */
  isOpened: boolean;
}

/** 모달 Zustand 스토어 인터페이스 */
interface ModalContextState {
  /** 모달 고유 상태 */
  modalState: ModalState;
  /** 모달을 여는 함수 */
  onOpenModal: (id: string) => void;
  /** 모달을 닫는 함수 */
  onCloseModal: () => void;
}

/** 모달 Zustand 스토어 */
export const useModalStore = create<ModalContextState>((set) => ({
  modalState: { id: null, isOpened: false },
  onOpenModal: (id) => set({ modalState: { id, isOpened: true } }),
  onCloseModal: () => set({ modalState: { id: null, isOpened: false } }),
}));
