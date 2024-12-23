import { useEffect, useRef, useState } from 'react';

import TBodyDefault from './TBodyDefault';
import TBodyManager from './TBodyManager';
import TBodyMemo from './TBodyMemo';
import TBodyTodo from './TBodyTodo';

interface Props {
  /** 컬럼명 */ col: string | number;
  /** 행 내 데이터 정보 (컬럼명 : 데이터) */ row: Record<string, string>;
  /** 데이터를 업데이트하는 함수 */ handleUpdateData: (targetName: string, targetCol: string | number, value: string) => void;
}

/**
 * 테이블 바디 컨텐츠
 */
export default function TBodyContent({ col, row, handleUpdateData }: Props) {
  const memoTooltipRef = useRef<HTMLDivElement>(null);
  const checkTooltipRef = useRef<HTMLDivElement>(null);

  // 툴팁 상태 관리
  const [isMemoTooltipOpen, setIsMemoTooltipOpen] = useState(false);
  const [isCheckTooltipOpen, setIsCheckTooltipOpen] = useState(false);

  /** 메모 툴팁을 열거나 닫는다. */
  const handleMemoTooltip = () => setIsMemoTooltipOpen((prev) => !prev);

  /** 체크박스 툴팁을 열거나 닫는다 */
  const handleCheckTooltip = () => setIsCheckTooltipOpen((prev) => !prev);

  //TODO(지애) : 각 ref.current 영역은 서로 외부영역으로 인식하지 않도록 처리해야함
  useEffect(() => {
    /** 툴팁 외부 클릭 시 툴팁을 닫는다. */
    const handleClickOutside = (event: MouseEvent) => {
      const isClickInsideMemoTooltip = memoTooltipRef.current?.contains(event.target as Node);
      const isClickInsideCheckTooltip = checkTooltipRef.current?.contains(event.target as Node);

      if (!isClickInsideMemoTooltip && !isClickInsideCheckTooltip) {
        setIsMemoTooltipOpen(false);
        setIsCheckTooltipOpen(false);
      }
    };

    document.addEventListener('pointerdown', handleClickOutside);

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, [memoTooltipRef, checkTooltipRef]);

  switch (col) {
    case '구분':
      return <TBodyTodo htmlString={row[col]} />;

    case '메모':
      return (
        <TBodyMemo
          row={row}
          col={col}
          memoTooltipRef={memoTooltipRef}
          isMemoTooltipOpen={isMemoTooltipOpen}
          handleMemoTooltip={handleMemoTooltip}
          handleUpdateData={handleUpdateData}
        />
      );

    case '담당자':
      return <TBodyManager name={row[col]} />;

    default:
      return (
        <TBodyDefault
          col={col}
          row={row}
          checkTooltipRef={checkTooltipRef}
          isCheckTooltipOpen={isCheckTooltipOpen}
          handleCheckTooltip={handleCheckTooltip}
          handleUpdateData={handleUpdateData}
        />
      );
  }
}
