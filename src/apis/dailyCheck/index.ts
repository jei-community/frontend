/** 일일점검 응답 데이터 */
export interface DailyCheckResponse {
  /** 일일점검 타이틀 */ title: string;
  /** 타이틀 행 */ columns: Array<string>;
  /** 일일점검 데이터 */ data: Array<Record<string, string>>;
}

/** 일일점검 데이터 호출 */
export const getDailyCheck = async (userName: string): Promise<DailyCheckResponse | null> => {
  /** apps script url */
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwZAIQn6XlNbFfJjo1Z3Ayy-Tq9yaOji7YfAa2byZ7-pQwIVoqiLaM-eWQE-YQ-wn5O/exec';

  try {
    const response = await fetch(`${scriptURL}?userName=${encodeURIComponent(userName)}`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);

    return null;
  }
};
