import { ACTION } from './constant';
import { DailyCheckResponse, TodayCheckResponse } from './type';

/** apps script url */
const scriptURL = 'https://script.google.com/macros/s/AKfycbxT52WKSwAu2OHgWGn9fzGhnq6kB4NBediWo7yAG8OjAHj4KuGxebv2FFBG8iOb1d1y7A/exec';

/** API 호출 함수 */
const fetchApi = async <T>(url: string): Promise<T | null> => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);

    return null;
  }
};

const postApi = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    return true;
  } catch (error) {
    console.error('Post error:', error);

    return false;
  }
};

/** API 메서드 정의 */
const getDailyCheck = (userName: string): Promise<DailyCheckResponse | null> =>
  fetchApi<DailyCheckResponse>(`${scriptURL}?userName=${encodeURIComponent(userName)}`);

const getTodayCheck = (userName: string): Promise<TodayCheckResponse | null> =>
  fetchApi<TodayCheckResponse>(`${scriptURL}?userName=${encodeURIComponent(userName)}&action=${ACTION.TODAY}`);

const postCellForUser = (userName: string, colName: string, checkStatus: string): Promise<boolean> =>
  postApi(`${scriptURL}?userName=${encodeURIComponent(userName)}&action=${ACTION.UPDATE_CELL}&colName=${colName}&checkStatus=${checkStatus}`);

const postNoteForUser = (userName: string, note: string): Promise<boolean> =>
  postApi(`${scriptURL}?userName=${encodeURIComponent(userName)}&action=${ACTION.UPDATE_NOTE}&note=${note}`);

/** 일일점검 API */
export const dialyCheckApis = {
  /** 일일점검 전체 데이터 */
  getDailyCheck: (userName: string) => ({
    queryKey: [userName, 'dailyCheck'],
    queryFn: () => getDailyCheck(userName),
  }),
  /** 일일점검 유저 당일 데이터 */
  getTodayCheck: (userName: string) => ({
    queryKey: [userName, 'todayCheck'],
    queryFn: () => getTodayCheck(userName),
  }),
  /** 일일점검 상태 수정 */
  postCellForUser: (userName: string) => ({
    queryKey: [userName, 'updateCell'],
    queryFn: (colName: string, CheckStatus: string) => postCellForUser(userName, colName, CheckStatus),
  }),
  /** '구분' 열의 노트 수정 */
  postNoteForUser: (userName: string) => ({
    queryKey: [userName, 'updateNote'],
    queryFn: (note: string) => postNoteForUser(userName, note),
  }),
};
