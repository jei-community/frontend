/** 버튼 선택 시 보여줄 버튼 색상 */
export type ButtonGroupColor = 'success' | 'warning' | 'error' | 'neutral';

/** 버튼 그룹의 각 버튼 아이템 타입 */
export type ButtonGroupItem = {
  /** 화면에 표시할 레이블(텍스트) */
  label: string;
  /** 버튼이 선택됐을 때 실제로 사용할 문자열 데이터 */
  value: string;
  /** 버튼 선택 시 보여줄 버튼 색상 */
  color?: ButtonGroupColor;
  /** 버튼 선택 여부 */
  checked?: boolean;
};
