import { useEffect } from 'react';

import { getDailyCheck } from '@/apis/dailyCheck';

import EmptyContent from '@/components/EmptyContent';

import { useUserInfoStore } from '@/store';
import { useSuspenseQuery } from '@tanstack/react-query';

import { useCurrSheetStore, useDailyCheckListStore } from '../../store';
import Table from '../Table';
import { S } from './style';

/**
 * 메인 컨텐츠
 */
export default function MainContent() {
  const { name: userName } = useUserInfoStore();
  const { currSheet } = useCurrSheetStore();

  const { data } = useSuspenseQuery({ queryKey: ['dailyCheck', userName, currSheet], queryFn: () => getDailyCheck(currSheet ?? 'MATH', userName) });
  const { dailyCheckData, setDailyCheckData } = useDailyCheckListStore();

  useEffect(() => {
    if (data) setDailyCheckData(data);
  }, [dailyCheckData, data, setDailyCheckData]);

  return (
    <>
      {dailyCheckData ? (
        <Table userName={userName} />
      ) : (
        <S.EmptyContentContainer>
          <EmptyContent size='large'>해야 할 일일점검이 없어요</EmptyContent>
        </S.EmptyContentContainer>
      )}
    </>
  );
}
