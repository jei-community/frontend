import { Square, SquareCheckBig, TreePalm } from 'lucide-react';
import { useState } from 'react';

import { postCellForUser } from '@/apis/dailyCheck';

import { STATUS } from '../../constant';
import { useCurrSheetStore } from '../../store';
import { DailyCheckStatus } from '../../type';
import { S } from './style';

interface Props {
  /** 일일점검 상태값 */ value: string;
  /** 현재 컬럼 */ col: string | number;
  /**선택된 유저의 이름 */ targetName: string;
  /** 툴팁을 닫는 함수 */ handleClose: () => void;
  /** 데이터를 업데이트하는 함수*/ handleUpdateData: (targetName: string, targetCol: string | number, value: string) => void;
}

/** 일일점검 체크박스 상태변경 툴팁 */
export default function Tooltip({ value, col, targetName, handleClose, handleUpdateData }: Props) {
  const { currSheet } = useCurrSheetStore();
  const [currentValue, setCurrentValue] = useState(value);

  const incomplete = currentValue !== 'COMPLETE' && currentValue !== 'VACATION';

  /** 일일점검 상태 버튼을 클릭하면 실행된다. */
  const handleCheckBoxClick = (key: DailyCheckStatus) => {
    const status = STATUS[key];
    setCurrentValue(value);
    postCellForUser(currSheet, targetName, col.toString(), status);
    handleUpdateData(targetName, col, status);
    handleClose();
  };

  return (
    <S.CheckBox.Wrapper>
      <S.CheckBox.Button $isSelected={currentValue === 'COMPLETE'} onClick={() => handleCheckBoxClick('COMPLETE')}>
        <SquareCheckBig />
      </S.CheckBox.Button>
      <S.CheckBox.Button $isSelected={incomplete} onClick={() => handleCheckBoxClick('INCOMPLETE')}>
        <Square />
      </S.CheckBox.Button>
      <S.CheckBox.Button $isSelected={currentValue === 'VACATION'} onClick={() => handleCheckBoxClick('VACATION')}>
        <TreePalm />
      </S.CheckBox.Button>
    </S.CheckBox.Wrapper>
  );
}
