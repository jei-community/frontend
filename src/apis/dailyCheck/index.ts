import { DefaultError, UseMutationOptions, queryOptions } from '@tanstack/react-query';

import { ACTION, SHEET_CONFIG } from './constant';
import { DailyCheckResponse, SheetKey, TodayCheckResponse } from './type';
import { get, post } from './util';

/** 일일점검 데이터 호출
 * @param key 스크립트 유형
 * @param userName 담당자 이름
 */
export const getDailyCheck = (key: SheetKey, userName: string) => {
  const params = {
    fileId: SHEET_CONFIG[key].id,
    userName,
  };

  return get<DailyCheckResponse>(params);
};

/** 일일점검 데이터 변경
 * @param userName 담당자 이름
 */
export const getTodayCheck = (userName: string) => {
  const params = {
    fileIds: Object.values(SHEET_CONFIG).map((item) => item.id),
    action: ACTION.TODAY,
    userName,
  };

  return get<TodayCheckResponse>(params);
};

/** 일일점검 데이터 변경
 * @param key 스크립트 유형
 * @param name 담당자 이름
 * @param colName 행의 이름
 * @param checkStatus 일일점검 체크 상태
 */
export const postCellForUser = (key: SheetKey, userName: string, colName: string, checkStatus: string) => {
  const params = {
    fileId: SHEET_CONFIG[key].id,
    action: ACTION.UPDATE_CELL,
    userName,
    colName,
    checkStatus,
  };

  return post(params);
};

/** '구분' 셀의 노트 수정
 * @param key 스크립트 유형
 * @param userName 담당자 이름
 * @param note 노트 내용
 */
export const postNoteForUser = (key: SheetKey, userName: string, note: string) => {
  const params = {
    fileId: SHEET_CONFIG[key].id,
    action: ACTION.UPDATE_NOTE,
    userName,
    note,
  };

  return post(params);
};

//TODO(지애) : 추후 점검 후 사용
/** 일일점검 API Query Factory */
export const dailyCheckQueryFactory = {
  /** 일일점검 전체 데이터를 반환 */
  getDailyCheck: (key: SheetKey, userName: string) =>
    queryOptions({
      queryKey: [userName, key, 'dailyCheck'],
      queryFn: () => getDailyCheck(key, userName),
    }),
  /** 일일점검 유저 당일 데이터를 반환 */
  getTodayCheck: (userName: string) =>
    queryOptions({
      queryKey: [userName, 'todayCheck'],
      queryFn: () => getTodayCheck(userName),
    }),
  /** 일일점검 상태 수정 */
  getCellForUser: (key: SheetKey, userName: string, colName: string, CheckStatus: string) =>
    mutationOptions({
      mutationKey: ['updateCell'],
      mutationFn: () => postCellForUser(key, userName, colName, CheckStatus),
    }),
  /** '구분' 열의 노트 수정 */
  getNoteForUser: (key: SheetKey, userName: string, note: string) =>
    mutationOptions({
      mutationKey: ['updateNote'],
      mutationFn: () => postNoteForUser(key, userName, note),
    }),
};

/** mutation 옵션 설정 함수 */
export function mutationOptions<TData = unknown, TError = DefaultError, TVariables = void, TContext = unknown>(
  options: UseMutationOptions<TData, TError, TVariables, TContext>,
): UseMutationOptions<TData, TError, TVariables, TContext> {
  return options;
}
