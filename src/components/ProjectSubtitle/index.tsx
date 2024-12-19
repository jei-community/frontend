import { PropsWithChildren, RefObject } from 'react';

import { S } from '@/components/ProjectSubtitle/style';

interface Props extends PropsWithChildren {
  ref?: RefObject<HTMLHeadingElement | null>;
}

export default function ProjectSubtitle({ ref, children }: Props) {
  return <S.SubTitle ref={ref}>{children}</S.SubTitle>;
}
