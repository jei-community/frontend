import { Suspense } from 'react';

import { getDailyCheck } from '@/apis/dailyCheck';
import { SheetKey } from '@/apis/dailyCheck/type';

import Aside from '@/components/Aside';
import Content from '@/components/Content';

import MainContent from './components/MainContent';
import SideContent from './components/SIdeContent';
import { useCurrSheetStore } from './components/store';

// 임시 데이터
const userName = '김지애';

/** 일일점검 페이지 */
export default function DailyCheck() {
  const { currSheet } = useCurrSheetStore();
  const dailyCheckPromise = (currSheet: SheetKey, userName: string) => getDailyCheck(currSheet, userName);

  return (
    <>
      <Content>
        {/* TODO(지애) : 로딩 컴포넌트 */}
        <Suspense fallback={'loading...'}>
          <MainContent dailyCheckPromise={dailyCheckPromise(currSheet, userName)} userName={userName} />
        </Suspense>
      </Content>
      <Aside>
        <SideContent />
      </Aside>
    </>
  );
}
