import { useEffect } from 'react';

import { getDailyCheck, getTodayCheck } from '@/apis/dailyCheck';

import { useDailyCheckListStore } from '@/pages/DailyCheck/store';
import { useUserInfoStore } from '@/store';
import { useQuery } from '@tanstack/react-query';

import ItemsWrapper from './ItemsWrapper';
import Loading from './Loading';
import { useTodayCheck } from './store';
import { S } from './style';

/** 메인페이지 내 일일점검 컴포넌트 */
export default function DailyCheck() {
  const { name: userName } = useUserInfoStore();
  const { dailyCheckData, setDailyCheckData } = useDailyCheckListStore();
  const { todayCheckData } = useTodayCheck();
  const { data, isLoading } = useQuery({ queryKey: ['todayCheck', userName], queryFn: () => getTodayCheck(userName), enabled: !todayCheckData });

  // 일일점검 리스트 데이터를 미리 받아온다.
  useEffect(() => {
    getDailyCheck('MATH', userName).then((data) => {
      if (!dailyCheckData) setDailyCheckData(data);
    });
  }, [dailyCheckData, setDailyCheckData, userName]);

  return (
    <S.Container>
      <S.Title>일일점검</S.Title>
      {isLoading ? <Loading /> : <ItemsWrapper data={data} />}
    </S.Container>
  );
}
