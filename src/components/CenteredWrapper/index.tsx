import { PropsWithChildren } from 'react';

import { S } from '@/components/CenteredWrapper/style';

export default function CenteredWrapper({ children }: PropsWithChildren) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
