import Tooltip from '../Tooltip';
import { S } from './style';

interface Props {
  /** 행 내 데이터 정보 (컬럼명 : 데이터) */
  row: Record<string, string>;
  /** 컬럼명 */
  col: string;
  memoTooltipRef: React.RefObject<HTMLDivElement | null>;
  /** 메모 툴팁 오픈 여부 */
  isMemoTooltipOpen: boolean;
  /** 메모 툴팁을 열거다 닫는 함수 */
  handleMemoTooltip: () => void;
  /** 데이터를 업데이트하는 함수 */
  handleUpdateData: (targetName: string, targetCol: string | number, value: string) => void;
}

/**
 * 메모 셀 컴포넌트
 */
export default function TBodyMemo({ memoTooltipRef, isMemoTooltipOpen, handleMemoTooltip, row, col, handleUpdateData }: Props) {
  return (
    <S.TBody.Td>
      <S.Icon.Container ref={memoTooltipRef}>
        {row[col]?.length > 0 ? <S.Icon.Memo onClick={handleMemoTooltip} /> : <S.Icon.Plus onClick={handleMemoTooltip} />}
        {isMemoTooltipOpen && (
          <Tooltip type={'MEMO'} row={row} col={col} targetName={row['담당자']} handleClose={handleMemoTooltip} handleUpdateData={handleUpdateData} />
        )}
      </S.Icon.Container>
    </S.TBody.Td>
  );
}
