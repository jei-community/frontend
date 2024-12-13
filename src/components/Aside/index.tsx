import { PropsWithChildren } from 'react';

import { S } from '@/components/Aside/style';

interface Props extends PropsWithChildren {
  position: 'left' | 'right';
}

export default function Aside({ position, children }: Props) {
  return (
    <S.Aside $position={position}>
      <S.Content>{children}</S.Content>
    </S.Aside>
  );
}
