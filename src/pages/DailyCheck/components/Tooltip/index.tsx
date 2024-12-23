import { STATUS } from '../../constant';
import { DailyCheckStatus } from '../../type';
import CheckTooltip from './CheckTooltip';
import MemoTooltip from './MemoTooltip';

interface Props {
  /** 툴팁 타입 */ type: 'MEMO' | 'CHECK';
  /** 행 */ row: Record<string, string>;
  /** 열 */ col: string | number;
  /** 담당자 이름 */ targetName: string;
  /** 툴팁을 닫는 함수 */ handleClose: () => void;
  /** 데이터를 업데이트하는 함수 */ handleUpdateData: (targetName: string, targetCol: string | number, value: string) => void;
}

//TODO(지애) : userName 설정
/**
 * 툴팁 컴포넌트 (임시)
 * TODO(지애) : 추후 공통 컴포넌트로 툴팁컨테이너 교체
 */
export default function Tooltip({ type, row, col, targetName, handleClose, handleUpdateData }: Props) {
  const value = type === 'MEMO' ? row[col] : (Object.keys(STATUS).find((key) => STATUS[key as DailyCheckStatus] === row[col]) ?? 'INCOMPLETE');

  if (type === 'MEMO') return <MemoTooltip value={value} targetName={targetName} handleClose={handleClose} handleUpdateData={handleUpdateData} />;

  return <CheckTooltip value={value} targetName={targetName} col={col} handleClose={handleClose} handleUpdateData={handleUpdateData} />;
}
