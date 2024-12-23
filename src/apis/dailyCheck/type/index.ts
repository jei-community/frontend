import { SHEET_CONFIG } from '../constant';

/** script url Key */
export type SheetKey = keyof typeof SHEET_CONFIG;

/** 일일점검 전체 응답 데이터 */
export interface DailyCheckResponse {
  /** 일일점검 타이틀 */ title: string;
  /** 타이틀 행 */ columns: Array<string>;
  /** 일일점검 데이터 */ data: Array<Record<string, string>>;
}

/** 당일 유저의 일일점검 응답 데이터 */
export interface TodayCheckResponse {
  /** 일일점검 타이틀 */ title: string;
  /** 일일점검 데이터 */ data: Array<Record<string, string>>;
}
