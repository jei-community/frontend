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
