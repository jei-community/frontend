import { HEADER, SCRIPT_URL } from '../constant';

/** Google Apps Script API GET 호출 함수 */
export const get = async <T>(params: Record<string, string | string[]>): Promise<T> => {
  const url = createUrl(params);
  const response = await fetch(url, HEADER);

  return response.json();
};

/** Google Apps Script API POST 호출 함수 */
export const post = async (params: Record<string, string | string[]>) => {
  const url = createUrl(params);

  return await fetch(url, { ...HEADER });
};

/** URL 생성 함수 */
export const createUrl = (params: Record<string, string | string[]>): string => {
  const queryString = Object.entries(params)
    .map(([key, value]) => {
      const encodedValue = Array.isArray(value) ? value.map((v) => encodeURIComponent(v)).join(',') : encodeURIComponent(value);

      return `${key}=${encodedValue}`;
    })
    .join('&');

  return `${SCRIPT_URL}?${queryString}`;
};
