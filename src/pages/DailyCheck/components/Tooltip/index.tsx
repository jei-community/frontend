import { Square, SquareCheckBig, TreePalm } from 'lucide-react';
import { useState } from 'react';

import Button from '@/components/Button';
import TextArea from '@/components/TextArea';

import { STATUS } from '../../constant';
import { S } from './style';

interface Props {
  /** 툴팁 타입 */ type: 'MEMO' | 'CHECK';
  /** 콘텐츠 */ value: string;
}
/**
 * 툴팁 컴포넌트 (임시)
 * TODO(지애) : 추후 공통 컴포넌트로 툴팁컨테이너 교체
 */
export default function Tooltip({ type, value }: Props) {
  const [currentValue, setCurrentValue] = useState(value);

  const incomplete = currentValue !== 'COMPLETE' && currentValue !== 'VACATION';

  /** 메모 저장 버튼을 클릭하면 실행된다. */
  const handleSaveMemoClick = () => {
    //TODO(지애) : 메모 수정 API 호출
  };

  /** 메모 삭제 버튼을 클릭하면 실행된다. */
  const handleDeleteMemoClick = () => {
    //TODO(지애) : 메모 삭제 API 호출
  };

  /** 일일점검 상태 버튼을 클릭하면 실행된다. */
  const handleCheckBoxClick = (value: string) => {
    setCurrentValue(value);
    const statusKey = Object.keys(STATUS).find((key) => STATUS[key] === value) || '';
    //TODO(지애) : 일일점검 상태 수정 POST API 호출
    console.log(statusKey);
  };

  if (type === 'MEMO')
    return (
      <S.Memo.Container>
        <TextArea rows={4} value={value} />
        <S.Memo.ButtonWrapper>
          <Button color='success' onClick={handleSaveMemoClick} size='large' variant='filled'>
            저장
          </Button>
          <Button color='error' onClick={handleDeleteMemoClick} size='large' variant='filled'>
            삭제
          </Button>
        </S.Memo.ButtonWrapper>
      </S.Memo.Container>
    );

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
