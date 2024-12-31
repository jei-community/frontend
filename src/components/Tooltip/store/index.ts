import { create } from 'zustand';

/** ID에 따른 툴팁 고유의 상태 인터페이스 */
interface TooltipState {
  /** 툴팁 ID */
  id: string | null;
  /** 툴팁 표시 여부 */
  isEnabled: boolean;
  /** 툴팁 X 좌표 (화살표 끝 기준) */
  x: number;
  /** 툴팁 Y 좌표 (화살표 끝 기준) */
  y: number;
  /** 툴팁을 표시할 요소 */
  el: Element | null;
}

/** 툴팁 Zustand 스토어 인터페이스 */
interface TooltipContextState {
  /** 툴팁 고유 상태 */
  tooltipState: TooltipState;
  /** 툴팁을 표시하는 함수 */
  onShowTooltip: (id: string, el: Element) => void;
  /** 툴팁을 가리는 함수 */
  onHideTooltip: () => void;
}

/** 툴팁 Zustand 스토어 */
export const useTooltipStore = create<TooltipContextState>((set) => {
  const defaultState: TooltipState = { id: null, isEnabled: false, x: 0, y: 0, el: null };

  return {
    tooltipState: defaultState,
    onShowTooltip: (id, el) => {
      const { x, width, bottom } = el.getBoundingClientRect();
      set({ tooltipState: { id, isEnabled: true, x: x + width / 2 + scrollX, y: bottom + scrollY, el } });
    },
    onHideTooltip: () => set({ tooltipState: defaultState }),
  };
});
