import { PropsWithChildren } from 'react';

import { S } from '@/components/Content/style';

interface Props extends PropsWithChildren {
  asideCount?: number;
}

export default function Content({ asideCount = 2, children }: Props) {
  return <S.Content $asideCount={asideCount}>{children}</S.Content>;
}
