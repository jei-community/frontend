/** 일일점검 상태값 */
export const STATUS: Record<string, 'COMPLETE' | 'VACATION'> = {
  O: 'COMPLETE',
  '-': 'VACATION',
};

/** 컬럼 사이즈 */
export const COLUMN_WIDTHS: Record<string, number> = {
  구분: 552,
  메모: 60,
  담당자: 100,
};
