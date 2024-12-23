import { STATUS } from '../../constant';
import { DailyCheckStatus } from '../../type';
import Tooltip from '../Tooltip';
import CheckBox from './CheckBox';
import { S } from './style';

interface Props {
  /** 컬럼명 */
  col: string | number;
  /** 행 내 데이터 정보 (컬럼명 : 데이터) */
  row: Record<string, string>;
  /** 체크박스 오픈 여부 */
  isCheckTooltipOpen: boolean;
  /** 체크박스 툴팁 Ref */
  checkTooltipRef: React.RefObject<HTMLDivElement | null>;
  /** 툴팁을 열거다 닫는 함수 */
  handleCheckTooltip: () => void;
  /** 데이터를 업데이트하는 함수 */
  handleUpdateData: (targetName: string, targetCol: string | number, value: string) => void;
}
/**
 * 날짜 셀 컴포넌트
 */
export default function TBodyDefault({ col, row, isCheckTooltipOpen, checkTooltipRef, handleCheckTooltip, handleUpdateData }: Props) {
  /** 일일점검 상태 키를 찾는다 */
  const statusKey: DailyCheckStatus =
    (Object.keys(STATUS).find((key) => STATUS[key as DailyCheckStatus] === row[col]) as DailyCheckStatus) ?? 'INCOMPLETE';
  /** 오늘 날짜(일) */
  const today = new Date().getDate();

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
