import { Suspense } from 'react';

import { getDailyCheck } from '@/apis/dailyCheck';

import Aside from '@/components/Aside';
import Content from '@/components/Content';

import MainContent from './components/MainContent';

// TODO(지애) : 호출 어디서 처리할 지..
const userName = '김지애';
const dailyCheckPromise = getDailyCheck(userName);

/** 일일점검 페이지 */
export default function DailyCheck() {
  return (
    <>
      <Content>
        {/* TODO(지애) : 로딩 컴포넌트 */}
        <Suspense fallback={'loading...'}>
          <MainContent dailyCheckPromise={dailyCheckPromise} userName={userName} />
        </Suspense>
      </Content>
      <Aside />
    </>
  );
}
