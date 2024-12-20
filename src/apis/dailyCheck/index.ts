import { ACTION } from './constant';
import { DailyCheckResponse, TodayCheckResponse } from './type';

/** apps script url */
const scriptURL = 'https://script.google.com/macros/s/AKfycbxT52WKSwAu2OHgWGn9fzGhnq6kB4NBediWo7yAG8OjAHj4KuGxebv2FFBG8iOb1d1y7A/exec';

/** 일일점검 데이터 호출 */
export const getDailyCheck = async (userName: string): Promise<DailyCheckResponse | null> => {
  try {
    const response = await fetch(`${scriptURL}?userName=${encodeURIComponent(userName)}`);
    if (!response.ok) throw new Error('HTTP error!');

    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);

    return null;
  }
};

/** 일일점검 데이터 호출
 * @param userName 유저 이름
 */
export const getTodayCheck = async (userName: string): Promise<TodayCheckResponse | null> => {
  try {
    const response = await fetch(`${scriptURL}?userName=${encodeURIComponent(userName)}&action=${ACTION.TODAY}`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);

    return null;
  }
};

/** 일일점검 데이터 변경
 * @param userName 유저 이름
 * @param colName 행의 이름
 * @param checkStatus 일일점검 체크 상태
 */
export const postCellForUser = async (userName: string, colName: string, checkStatus: string) => {
  try {
    await fetch(`${scriptURL}?userName=${encodeURIComponent(userName)}&action=${ACTION.UPDATE_CELL}&colName=${colName}&checkStatus=${checkStatus}`);
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

/** '구분' 셀의 노트 수정
 * @param userName 유저 이름
 * @param note 노트 내용
 */
export const postNoteForUser = async (userName: string, note: string) => {
  try {
    await fetch(`${scriptURL}?userName=${encodeURIComponent(userName)}&action=${ACTION.UPDATE_NOTE}&note=${note}`);
  } catch (error) {
    console.error('Fetch error:', error);
  }
};
