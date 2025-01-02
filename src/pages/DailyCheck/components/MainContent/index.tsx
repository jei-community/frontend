import { use, useMemo } from 'react';

import { DailyCheckResponse } from '@/apis/dailyCheck/type';

import EmptyContent from '@/components/EmptyContent';

import Table from '../Table';
import { S } from './style';

interface Props {
  dailyCheckPromise: Promise<DailyCheckResponse | null>;
  userName: string;
}

/**
 * 메인 컨텐츠
 */
export default function MainContent({ dailyCheckPromise, userName }: Props) {
  /** 일일점검 데이터 */
  const originalData = use(dailyCheckPromise);
  const data = useMemo(() => {
    return JSON.parse(JSON.stringify(originalData));
  }, [originalData]); //화면에 바로 반영되도록 데이터 복사해서 사용

  return (
    <>
      {data ? (
        <Table data={data} userName={userName} />
      ) : (
        <S.EmptyContentContainer>
          <EmptyContent size='large'>해야 할 일일점검이 없어요</EmptyContent>
        </S.EmptyContentContainer>
      )}
    </>
  );
}
