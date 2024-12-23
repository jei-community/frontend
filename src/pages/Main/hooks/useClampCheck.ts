import { useEffect, useRef, useState } from 'react';

/**
 * 지정한 줄 수를 기준으로 텍스트가 넘치는지 확인하는 커스텀 훅
 * @param maxLines 최대로 허용하는 줄 수
 * @returns
 *  - `isClamped`: 콘텐츠가 초과(clamp)되었는지 여부 (true/false)
 *  - `elementRef`: 확인할 DOM 요소를 참조하기 위한 `ref`
 */
export default function useClampCheck<REF extends HTMLElement>(maxLines: number) {
  const [isClamped, setIsClamped] = useState(false);
  const elementRef = useRef<REF>(null);

  useEffect(() => {
    if (elementRef.current) {
      const lineHeight = parseFloat(getComputedStyle(elementRef.current).lineHeight); // 한 줄의 높이
      const maxHeight = lineHeight * maxLines; // 지정된 줄 수의 높이
      const actualHeight = elementRef.current.offsetHeight; // 실제 텍스트 높이

      setIsClamped(actualHeight > maxHeight); // 콘텐츠 높이가 초과되었는지 확인
    }
  }, [elementRef, maxLines]);

  return { isClamped, elementRef };
}
