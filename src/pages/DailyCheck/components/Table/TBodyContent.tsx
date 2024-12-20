import { useEffect, useRef, useState } from 'react';

import HtmlParser from '@/components/HtmlParser';

import { STATUS } from '../../constant';
import Tooltip from '../Tooltip';
import CheckBox from './CheckBox';
import { S } from './style';

interface Props {
  col: string;
  row: Record<string, string>;
}

/**
 * 테이블 바디 컨텐츠
 */
export default function TBodyContent({ col, row }: Props) {
  const memoTooltipRef = useRef<HTMLDivElement>(null);
  const checkTooltipRef = useRef<HTMLDivElement>(null);

  // 툴팁 상태 관리
  const [isMemoTooltipOpen, setIsMemoTooltipOpen] = useState(false);
  const [isCheckTooltipOpen, setIsCheckTooltipOpen] = useState(false);

  /** 메모 툴팁을 열거나 닫는다. */
  const handleMemoTooltip = () => setIsMemoTooltipOpen((prev) => !prev);

  /** 체크박스 툴팁을 열거나 닫는다 */
  const handleCheckTooltip = () => setIsCheckTooltipOpen((prev) => !prev);

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

  /** 메모 버튼 클릭 시 동작한다. */
  const handleMemoBtnClick = () => {
    handleMemoTooltip();
  };

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
            {row[col]?.length > 0 ? <S.Icon.Memo onClick={handleMemoBtnClick} /> : <S.Icon.Plus onClick={handleMemoBtnClick} />}
            {isMemoTooltipOpen && <Tooltip type={'MEMO'} value={row[col]} />}
          </S.Icon.Container>
        </S.TBody.Td>
      );

    case '담당자':
      return <S.TBody.Td>{row[col]}</S.TBody.Td>;

    default:
      return (
        <S.TBody.Td>
          <S.Icon.Container ref={checkTooltipRef}>
            <CheckBox status={STATUS[row[col]] ?? 'INCOMPLETE'} isToday={true} handleTooltipOpen={handleCheckTooltip} />
            {isCheckTooltipOpen && <Tooltip type={'CHECK'} value={STATUS[row[col]]} />}
          </S.Icon.Container>
        </S.TBody.Td>
      );
  }
}
