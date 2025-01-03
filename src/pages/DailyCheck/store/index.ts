import { create } from 'zustand';

import { DailyCheckResponse, SheetKey } from '@/apis/dailyCheck/type';

interface CurrSheetState {
  currSheet: SheetKey;
  setCurrSheet: (value: SheetKey) => void;
}

/** 현재 보고있는 일일점검 시트 관리 스토어 */
export const useCurrSheetStore = create<CurrSheetState>((set) => ({
  currSheet: 'MATH',
  setCurrSheet: (value: SheetKey) => set({ currSheet: value }),
}));

interface DailyCheckListState {
  dailyCheckData: DailyCheckResponse | null;
  setDailyCheckData: (value: DailyCheckResponse) => void;
}

/** 일일점검 페이지에서 관리되는 일일점검 전체 리스트 데이터 */
export const useDailyCheckListStore = create<DailyCheckListState>((set) => ({
  dailyCheckData: null,
  setDailyCheckData: (value: DailyCheckResponse) => set({ dailyCheckData: value }),
}));
