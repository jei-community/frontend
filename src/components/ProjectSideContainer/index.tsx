import { PropsWithChildren } from 'react';

import { S } from '@/components/ProjectSideContainer/style';

export default function ProjectSideContainer({ children }: PropsWithChildren) {
  return <S.SideContainer>{children}</S.SideContainer>;
}
