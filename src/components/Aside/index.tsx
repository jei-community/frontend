import { PropsWithChildren } from 'react';

import { S } from '@/components/Aside/style';

export default function Aside({ children }: PropsWithChildren) {
  return (
    <S.Aside>
      <S.Content>{children}</S.Content>
    </S.Aside>
  );
}
