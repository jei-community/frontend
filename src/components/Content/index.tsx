import { PropsWithChildren } from 'react';

import { useAsideCount } from '@/components/Content/hooks';
import { S } from '@/components/Content/style';

export default function Content({ children }: PropsWithChildren) {
  const asideCount = useAsideCount();

  return <S.Content $asideCount={asideCount}>{children}</S.Content>;
}
