import { Suspense } from 'react';

import { getDailyCheck } from '@/apis/dailyCheck';
import { SHEET_CONFIG } from '@/apis/dailyCheck/constant';

import Aside from '@/components/Aside';
import Content from '@/components/Content';

import Loading from './components/Loading';
import MainContent from './components/MainContent';
import SideContent from './components/SideContent';
import { useCurrSheetStore } from './store';
import { S } from './style';

//TODO(지애) : 임시 데이터
const userName = '김지애'; //데이터가 있을 때
// const userName = '전증훈'; //데이터가 없을 때

/** 일일점검 페이지 */
export default function DailyCheck() {
  const { currSheet } = useCurrSheetStore();
  const dailyCheckPromise = getDailyCheck(currSheet, userName);

  return (
    <>
      <Content>
        <S.PageTitle>
          <S.SheetTitle>{SHEET_CONFIG[currSheet].title} </S.SheetTitle>
          일일점검
        </S.PageTitle>
        <Suspense fallback={<Loading />}>
          <MainContent dailyCheckPromise={dailyCheckPromise} userName={userName} />
        </Suspense>
      </Content>
      <Aside>
        <SideContent />
      </Aside>
    </>
  );
}
