import { useState } from 'react';

import { postCellForUser } from '@/apis/dailyCheck';
import { SHEET_CONFIG } from '@/apis/dailyCheck/constant';
import { SheetKey, TodayCheckResponse } from '@/apis/dailyCheck/type';

import Button from '@/components/Button';
import HtmlParser from '@/components/HtmlParser';

import { useUserInfoStore } from '@/store';

import { S } from './style';

interface Props {
  /** 일일점검 프로젝트 정보 */ item: TodayCheckResponse;
  /** 화면에 그려지는 데이터를 업데이트하는 함수 */ handleUpdateData: (title: string, col: string, value: string) => void;
}
/** 개별 일일점검 아이템 (프로젝트 단위) */
export default function Item({ item, handleUpdateData }: Props) {
  /** 오늘 날짜(일) */
  const today = new Date().getDate().toString();
  const [isChecked, setIsChecked] = useState(item.data[today] === 'O');
  const { name: userName } = useUserInfoStore();

  /** 체크 버튼을 클릭하면 동작한다. */
  const handleCheckBtnClick = () => {
    const value = isChecked ? '' : 'O';
    const sheetKey = Object.keys(SHEET_CONFIG).find((el) => SHEET_CONFIG[el as SheetKey].id === item.id) as SheetKey;

    if (!sheetKey) return;
    handleUpdateData(item.title, today, value);
    postCellForUser(sheetKey, userName, today, value);
    setIsChecked((prev) => !prev);
  };

  return (
    <S.Item.Container>
      <S.Item.Title>{item.title}</S.Item.Title>
      <S.Item.Description>
        <HtmlParser htmlString={item.data['구분']} />
      </S.Item.Description>
      <Button color={isChecked ? 'neutral' : 'primary'} size='full' onClick={handleCheckBtnClick}>
        {isChecked ? '🎉 점검 완료!' : '✅ 점검 완료하기'}
      </Button>
    </S.Item.Container>
  );
}
