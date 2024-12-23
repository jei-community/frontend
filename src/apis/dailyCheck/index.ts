import { ACTION, HEADER, SCRIPT_URL, SHEET_CONFIG } from './constant';
import { DailyCheckResponse, SheetKey, TodayCheckResponse } from './type';

// TODO(지애) : React-Query로 관리하기

/** 일일점검 데이터 호출
 * @param key 구글 스크립트 키
 */
export const getDailyCheck = async (key: SheetKey, userName: string): Promise<DailyCheckResponse | null> => {
  const response = await fetch(`${SCRIPT_URL}?fileId=${encodeURIComponent(SHEET_CONFIG[key].id)}&userName=${encodeURIComponent(userName)}`, HEADER);

  return response.json();
};

/** 메인화면 내 일일점검 데이터 호출
 * @param userName 유저 이름
 */
export const getTodayCheck = async (userName: string): Promise<TodayCheckResponse | null> => {
  const fileIds = Object.values(SHEET_CONFIG).map((item) => item.id);
  const response = await fetch(`${SCRIPT_URL}?fileIds=${fileIds}$userName=${encodeURIComponent(userName)}&action=${ACTION.TODAY}`, HEADER);

  return response.json();
};

/** 일일점검 데이터 변경
 * @param userName 유저 이름
 * @param colName 행의 이름
 * @param checkStatus 일일점검 체크 상태
 */
export const postCellForUser = async (key: SheetKey, userName: string, colName: string | number, checkStatus: string) => {
  await fetch(
    `${SCRIPT_URL}?fileId=${encodeURIComponent(SHEET_CONFIG[key].id)}&userName=${encodeURIComponent(userName)}&action=${ACTION.UPDATE_CELL}&colName=${colName}&checkStatus=${checkStatus}`,
    HEADER,
  );
};

/** '구분' 셀의 노트 수정
 * @param userName 유저 이름
 * @param note 노트 내용
 */
export const postNoteForUser = async (key: SheetKey, userName: string, note: string) => {
  await fetch(
    `${SCRIPT_URL}?fileId=${encodeURIComponent(SHEET_CONFIG[key].id)}?userName=${encodeURIComponent(userName)}&action=${ACTION.UPDATE_NOTE}&note=${note}`,
    HEADER,
  );
};
