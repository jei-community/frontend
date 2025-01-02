import { Suspense } from 'react';

import { getDailyCheck } from '@/apis/dailyCheck';
import { SHEET_CONFIG } from '@/apis/dailyCheck/constant';

import Aside from '@/components/Aside';
import Content from '@/components/Content';

import { useUserInfoStore } from '@/store';

import Loading from './components/Loading';
import MainContent from './components/MainContent';
import SideContent from './components/SideContent';
import { useCurrSheetStore } from './store';
import { S } from './style';

/** 일일점검 페이지 */
export default function DailyCheck() {
  const { name: userName } = useUserInfoStore();
  const { currSheet } = useCurrSheetStore();
  const dailyCheckPromise = getDailyCheck(currSheet, userName);

  return (
    <>
      <Content>
        <S.Container>
          <S.PageTitle>
            <S.SheetTitle>{SHEET_CONFIG[currSheet].title} </S.SheetTitle>
            일일점검
          </S.PageTitle>
          <Suspense fallback={<Loading />}>
            <MainContent dailyCheckPromise={dailyCheckPromise} userName={userName} />
          </Suspense>
        </S.Container>
      </Content>
      <Aside>
        <SideContent />
      </Aside>
    </>
  );
}
