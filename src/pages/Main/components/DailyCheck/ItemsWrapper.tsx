import { useEffect } from 'react';

import { getTodayCheck } from '@/apis/dailyCheck';

import EmptyContent from '@/components/EmptyContent';

import { useUserInfoStore } from '@/store';
import { useSuspenseQuery } from '@tanstack/react-query';

import Item from './Item';
import { useTodayCheck } from './store';
import { S } from './style';

/**
 * 일일점검 아이템들을 감싸는 컴포넌트
 */
export default function ItemsWrapper() {
  const { todayCheckData, setTodayCheckData } = useTodayCheck();
  const { name: userName } = useUserInfoStore();
  const { data } = useSuspenseQuery({ queryKey: ['todayCheck', userName], queryFn: () => getTodayCheck(userName) });

  /**
   * 일일점검 데이터를 업데이트한다.
   * @param title 타이틀
   * @param col 컬럼명
   * @param value 수정할 값
   * @returns
   */
  const handleUpdateData = (title: string, col: string, value: string) => {
    if (!todayCheckData) return;
    setTodayCheckData(
      todayCheckData.map((el) => {
        if (el.title === title) {
          return {
            ...el,
            data: {
              ...el.data,
              [col]: value,
            },
          };
        }

        return el;
      }),
    );
  };

  useEffect(() => {
    if (data) setTodayCheckData(data);
  }, [data, setTodayCheckData]);

  return (
    <S.ItemsWrapper>
      {todayCheckData && todayCheckData.length > 0 ? (
        todayCheckData.map((item, index) => {
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
