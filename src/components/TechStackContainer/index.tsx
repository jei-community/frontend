import { PropsWithChildren, RefObject } from 'react';

import ProjectSubtitle from '@/components/ProjectSubtitle';
import { S } from '@/components/TechStackContainer/style';

interface Props extends PropsWithChildren {
  ref?: RefObject<HTMLHeadingElement | null>;
}

export default function TechStackContainer({ ref, children }: Props) {
  return (
    <S.StackAndEnvContainer>
      <ProjectSubtitle ref={ref}>기술 스택</ProjectSubtitle>
      {children}
    </S.StackAndEnvContainer>
  );
}
