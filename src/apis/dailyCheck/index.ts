export interface DAILY_CHECK_RESPONSE {
  status: string;
  data: { title: string; columns: Array<string>; data: Array<Record<string, string>> };
}

/** 일일점검 데이터 호출 */
export const fetchDailyCheck = async (url: string, userName: string): Promise<DAILY_CHECK_RESPONSE | null> => {
  try {
    const response = await fetch(`${url}?userName=${encodeURIComponent(userName)}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);

    return null;
  }
};
