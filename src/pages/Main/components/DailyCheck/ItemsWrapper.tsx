import { use, useMemo } from 'react';

import { TodayCheckResponse } from '@/apis/dailyCheck/type';

import EmptyContent from '@/components/EmptyContent';

import Item from './Item';
import { S } from './style';

interface Props {
  /** 당일 일일점검 항목 요청 함수 */ todayCheckPromise: Promise<TodayCheckResponse[]>;
}
/**
 * 일일점검 아이템들을 감싸는 컴포넌트
 */
export default function ItemsWrapper({ todayCheckPromise }: Props) {
  const originalData = use(todayCheckPromise);
  const data = useMemo<TodayCheckResponse[]>(() => {
    return JSON.parse(JSON.stringify(originalData));
  }, [originalData]); //화면에 바로 반영되도록 데이터 복사해서 사용

  /**
   * 일일점검 데이터를 업데이트한다.
   * @param title 타이틀
   * @param col 컬럼명
   * @param value 수정할 값
   * @returns
   */
  const handleUpdateData = (title: string, col: string, value: string) =>
    data.forEach((el) => {
      if (el.title === title) el.data[col] = value;
    });

  return (
    <S.ItemsWrapper>
      {data.length > 0 ? (
        data.map((item, index) => {
          return <Item item={item} key={index} handleUpdateData={handleUpdateData} />;
        })
      ) : (
        <S.EmptyContentWrapper>
          <EmptyContent size='small'>담당 중인 일일점검이 없어요</EmptyContent>
        </S.EmptyContentWrapper>
      )}
    </S.ItemsWrapper>
  );
}
