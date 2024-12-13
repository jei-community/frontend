import { PropsWithChildren } from 'react';

import { S } from '@/components/Content/style';

export default function Content({ children }: PropsWithChildren) {
  return <S.Content>{children}</S.Content>;
}
