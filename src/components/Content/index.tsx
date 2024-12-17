import { PropsWithChildren } from 'react';

import { useAsideInfo } from '@/components/Content/hooks';
import { S } from '@/components/Content/style';

export default function Content({ children }: PropsWithChildren) {
  const { targetRef, asideCount, asidePosition } = useAsideInfo();

  return (
    <S.Article ref={targetRef} $asideCount={asideCount} $asidePosition={asidePosition}>
      {children}
    </S.Article>
  );
}
