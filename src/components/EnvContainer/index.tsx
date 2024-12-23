import { PropsWithChildren, RefObject } from 'react';

import { S } from '@/components/EnvContainer/style';
import ProjectSubtitle from '@/components/ProjectSubtitle';

interface Props extends PropsWithChildren {
  ref?: RefObject<HTMLHeadingElement | null>;
}

export default function EnvContainer({ ref, children }: Props) {
  return (
    <S.EnvContainer>
      <ProjectSubtitle ref={ref}>환경 변수</ProjectSubtitle>
      {children}
    </S.EnvContainer>
  );
}
