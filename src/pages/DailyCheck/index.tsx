import { Suspense } from 'react';
import React from 'react';

import Aside from '@/components/Aside';
import Content from '@/components/Content';

import MainContent from './components/MainContent';

/** 일일점검 페이지 */
export default function DailyCheck() {
  return (
    <React.Fragment>
      <Content>
        <Suspense fallback={'loading...'}>
          <MainContent />
        </Suspense>
      </Content>
      <Aside />
    </React.Fragment>
  );
}
