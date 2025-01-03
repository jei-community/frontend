import { useEffect } from 'react';

import { DailyCheckResponse } from '@/apis/dailyCheck/type';

import EmptyContent from '@/components/EmptyContent';

import { useUserInfoStore } from '@/store';

import { useDailyCheckListStore } from '../../store';
import Table from '../Table';
import { S } from './style';

interface Props {
  /** 일일점검 데이터 */
  data: DailyCheckResponse | undefined;
}

/**
 * 메인 컨텐츠
 */
export default function MainContent({ data }: Props) {
  const { name: userName } = useUserInfoStore();
  const { dailyCheckData, setDailyCheckData } = useDailyCheckListStore();
  useEffect(() => {
    if (data && !dailyCheckData) setDailyCheckData(data);
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
