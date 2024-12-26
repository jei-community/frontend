/**
 * 함수의 실행을 지정된 시간 간격 내에서 한 번으로 제한합니다.
 * @param func - 제한할 함수. 이 함수는 delay 간격 동안 최대 한 번만 실행됩니다.
 * @param delay - 단위: ms. 함수가 호출될 수 있는 간격을 밀리초 단위로 지정합니다.
 */
export const throttle = (func: () => void, delay: number) => {
  let timer;
  if (!timer) {
    timer = setTimeout(function () {
      timer = null;
      func();
    }, delay);
  }
};

/**
 * UTC 기준 날짜 데이터를 받아서 한국 시간대로 변환한 뒤 YYYY. MM. DD 형식의 날짜를 반환
 * @param utcDate ISO 8601 형식의 UTC 날짜 문자열
 * @returns YYYY. MM. DD 형식의 문자열
 */
export function formatKoreanDate(utcDate: Date): string {
  // UTC 시간에 9시간 추가
  const koreanTime = new Date(utcDate.getTime() + 9 * 60 * 60 * 1000);

  // 연도, 월, 일 추출
  const year = koreanTime.getFullYear();
  const month = String(koreanTime.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
  const day = String(koreanTime.getDate()).padStart(2, '0');

  // YYYY. MM. DD 형식으로 반환
  return `${year}. ${month}. ${day}`;
}
