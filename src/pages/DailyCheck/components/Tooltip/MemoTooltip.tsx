import { useState } from 'react';

import { postNoteForUser } from '@/apis/dailyCheck';

import Button from '@/components/Button';
import TextArea from '@/components/TextArea';

import { useCurrSheetStore } from '../../store';
import { S } from './style';

interface Props {
  value: string;
  /** 타겟이 되는 유저 이름 */ targetName: string;
  /** 툴팁을 닫는 함수 */ handleClose: () => void;
  /** 데이터를 업데이트 하는 함수 */ handleUpdateData: (targetName: string, targetCol: string, value: string) => void;
}

/** 메모 수정 툴팁 */
export default function MemoTooltip({ value, targetName, handleClose, handleUpdateData }: Props) {
  const { currSheet } = useCurrSheetStore();
  const [note, setNote] = useState(value);

  /** 메모 저장 버튼을 클릭하면 실행된다. */
  const handleSaveMemoClick = () => {
    postNoteForUser(currSheet, targetName, note);
    handleUpdateData(targetName, '메모', note);
    handleClose();
  };

  /** 메모 삭제 버튼을 클릭하면 실행된다. */
  const handleDeleteMemoClick = () => {
    postNoteForUser(currSheet, targetName, '');
    handleUpdateData(targetName, '메모', '');
    handleClose();
  };

  /** 노트영역 텍스트박스를 상태 관리한다. */
  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setNote(event.target.value);

  return (
    <S.Memo.Container>
      <TextArea rows={4} value={note} onChange={handleNoteChange} />
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
}
