import { ACTION, HEADER, SCRIPT_URL, SHEET_CONFIG } from './constant';
import { DailyCheckResponse, SheetKey, TodayCheckResponse } from './type';

// TODO(지애) : React-Query로 관리하기

/** 일일점검 데이터 호출
 * @param key 구글 스크립트 키
 */
export const getDailyCheck = async (key: SheetKey, name: string): Promise<DailyCheckResponse | null> => {
  const fileId = encodeURIComponent(SHEET_CONFIG[key].id);
  const userName = encodeURIComponent(name);

  const response = await fetch(`${SCRIPT_URL}?fileId=${fileId}&userName=${userName}`, HEADER);

  return response.json();
};

/** 메인화면 내 일일점검 데이터 호출
 * @param userName 유저 이름
 */
export const getTodayCheck = async (name: string): Promise<TodayCheckResponse | null> => {
  const fileIds = Object.values(SHEET_CONFIG).map((item) => item.id);
  const action = ACTION.TODAY;
  const userName = encodeURIComponent(name);

  const response = await fetch(`${SCRIPT_URL}?fileIds=${fileIds}&action=${action}&userName=${userName}`, HEADER);

  return response.json();
};

/** 일일점검 데이터 변경
 * @param userName 유저 이름
 * @param colName 행의 이름
 * @param checkStatus 일일점검 체크 상태
 */
export const postCellForUser = async (key: SheetKey, name: string, colName: string | number, checkStatus: string) => {
  const fileId = encodeURIComponent(SHEET_CONFIG[key].id);
  const action = ACTION.UPDATE_CELL;
  const userName = encodeURIComponent(name);

  await fetch(`${SCRIPT_URL}?fileId=${fileId}&action=${action}&userName=${userName}&colName=${colName}&checkStatus=${checkStatus}`, HEADER);
};

/** '구분' 셀의 노트 수정
 * @param userName 유저 이름
 * @param note 노트 내용
 */
export const postNoteForUser = async (key: SheetKey, name: string, note: string) => {
  const fileId = encodeURIComponent(SHEET_CONFIG[key].id);
  const action = ACTION.UPDATE_NOTE;
  const userName = encodeURIComponent(name);

  await fetch(`${SCRIPT_URL}?fileId=${fileId}&action=${action}&userName=${userName}&note=${note}`, HEADER);
};
