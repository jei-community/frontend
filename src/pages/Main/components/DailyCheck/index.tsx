import { Suspense } from 'react';

import { getTodayCheck } from '@/apis/dailyCheck';

import { useUserInfoStore } from '@/store';

import ItemsWrapper from './ItemsWrapper';
import Loading from './Loading';
import { S } from './style';

/** 메인페이지 내 일일점검 컴포넌트 */
export default function DailyCheck() {
  const { name: userName } = useUserInfoStore();
  /** 로그인한 유저의 당일 일일점검 데이터 요청 */
  const TodayCheckPromise = getTodayCheck(userName);

  return (
    <S.Container>
      <S.Title>일일점검</S.Title>
      <Suspense fallback={<Loading />}>
        <ItemsWrapper todayCheckPromise={TodayCheckPromise} />
      </Suspense>
    </S.Container>
  );
}
