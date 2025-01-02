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

/**
 * 날짜를 포맷팅하는 함수
 * @param utcDate - 포맷팅할 `Date` 객체
 * @returns 포맷된 날짜 문자열
 */
export function formatRelativeDate(utcDate: Date): string {
  // UTC 시간을 한국 표준시(KST)로 변환
  const utc = new Date(utcDate);
  const now = new Date();
  const diffMs = now.getTime() - utc.getTime(); // 현재 시간과의 차이 (밀리초)
  const diffMinutes = Math.floor(diffMs / (1000 * 60)); // 분 단위로 변환
  const diffHours = Math.floor(diffMinutes / 60); // 시간 단위로 변환
  const diffDays = Math.floor(diffHours / 24); // 일 단위로 변환

  // 1분 이내
  if (diffMinutes < 1) return '방금 전';
  // 60분 이내
  if (diffMinutes < 60) return `${diffMinutes}분 전`;
  // 24시간 이내
  if (diffHours < 24) return `${diffHours}시간 전`;
  // 8일 이내
  if (diffDays < 7) return `${diffDays}일 전`;

  // 8일 이상
  const year = utc.getFullYear();
  const month = (utc.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 +1
  const day = utc.getDate().toString().padStart(2, '0');

  return `${year}. ${month}. ${day}`;
}

/**
 * 스크롤을 방지하고 현재 위치를 반환한다.
 * @returns {number} 현재 스크롤 위치
 */
export const preventScroll = () => {
  const currentScrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
  document.body.style.top = `-${currentScrollY}px`; // 현재 스크롤 위치
  document.body.style.overflowY = 'scroll';

  return currentScrollY;
};

/**
 * 스크롤을 허용하고, 스크롤 방지 함수에서 반환된 위치로 이동한다.
 * @param prevScrollY 스크롤 방지 함수에서 반환된 스크롤 위치
 */
export const allowScroll = (prevScrollY: number) => {
  document.body.style.position = '';
  document.body.style.width = '';
  document.body.style.top = '';
  document.body.style.overflowY = '';
  window.scrollTo(0, prevScrollY);
};

export const formatToYYYYMMDD = (dateString: string | Date) => {
  const date = new Date(dateString);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');

  return `${yyyy}-${mm}-${dd}`;
};
