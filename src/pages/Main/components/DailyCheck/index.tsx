import { Suspense } from 'react';

import ItemsWrapper from './ItemsWrapper';
import Loading from './Loading';
import { S } from './style';

/** 메인페이지 내 일일점검 컴포넌트 */
export default function DailyCheck() {
  return (
    <S.Container>
      <S.Title>일일점검</S.Title>
      <Suspense fallback={<Loading />}>
        <ItemsWrapper />
      </Suspense>
    </S.Container>
  );
}
