import { create } from 'zustand';

import { SheetKey } from '@/apis/dailyCheck/type';

interface CurrSheetState {
  currSheet: SheetKey;
  setCurrSheet: (value: SheetKey) => void;
}

/** 현재 보고있는 일일점검 시트 관리 스토어 */
export const useCurrSheetStore = create<CurrSheetState>((set) => ({
  currSheet: 'MATH',
  setCurrSheet: (value: SheetKey) => set({ currSheet: value }),
}));
