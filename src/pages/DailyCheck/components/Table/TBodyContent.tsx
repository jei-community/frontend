import { useEffect, useRef, useState } from 'react';

import HtmlParser from '@/components/HtmlParser';

import { STATUS } from '../../constant';
import Tooltip from '../Tooltip';
import CheckBox from './CheckBox';
import { S } from './style';

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

  /** 오늘 날짜(일) */
  const today = new Date().getDate();

  /** 메모 툴팁을 열거나 닫는다. */
  const handleMemoTooltip = () => setIsMemoTooltipOpen((prev) => !prev);

  /** 체크박스 툴팁을 열거나 닫는다 */
  const handleCheckTooltip = () => setIsCheckTooltipOpen((prev) => !prev);

  /** 일일점검 상태 키를 찾는다 */
  const statusKey: keyof typeof STATUS =
    (Object.keys(STATUS).find((key) => STATUS[key as keyof typeof STATUS] === row[col]) as keyof typeof STATUS) || 'INCOMPLETE';

  useEffect(() => {
    /** 툴팁 외부 클릭 시 툴팁을을 닫는다. */
    const handleClickOutside = (event: MouseEvent) => {
      if (memoTooltipRef.current && !memoTooltipRef.current.contains(event.target as Node)) {
        setIsMemoTooltipOpen(false);
      }
      if (checkTooltipRef.current && !checkTooltipRef.current.contains(event.target as Node)) {
        setIsCheckTooltipOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [memoTooltipRef, checkTooltipRef]);

  switch (col) {
    case '구분':
      return (
        <S.TBody.TdTodo>
          <HtmlParser htmlString={row[col]} />
        </S.TBody.TdTodo>
      );

    case '메모':
      return (
        <S.TBody.Td>
          <S.Icon.Container ref={memoTooltipRef}>
            {row[col]?.length > 0 ? <S.Icon.Memo onClick={handleMemoTooltip} /> : <S.Icon.Plus onClick={handleMemoTooltip} />}
            {isMemoTooltipOpen && (
              <Tooltip
                type={'MEMO'}
                row={row}
                col={col}
                targetName={row['담당자']}
                handleClose={handleMemoTooltip}
                handleUpdateData={handleUpdateData}
              />
            )}
          </S.Icon.Container>
        </S.TBody.Td>
      );

    case '담당자':
      return <S.TBody.Td>{row[col]}</S.TBody.Td>;

    default:
      return (
        <S.TBody.Td>
          <S.Icon.Container ref={checkTooltipRef}>
            <CheckBox status={statusKey} isToday={col === today} handleTooltipOpen={handleCheckTooltip} />
            {isCheckTooltipOpen && (
              <Tooltip
                type={'CHECK'}
                row={row}
                col={col}
                targetName={row['담당자']}
                handleClose={handleCheckTooltip}
                handleUpdateData={handleUpdateData}
              />
            )}
          </S.Icon.Container>
        </S.TBody.Td>
      );
  }
}
