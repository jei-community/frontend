import { PropsWithChildren, RefObject } from 'react';

import { S } from '@/components/DescriptionContainer/style';
import ProjectSubtitle from '@/components/ProjectSubtitle';

interface Props extends PropsWithChildren {
  ref?: RefObject<HTMLHeadingElement | null>;
}

export default function DescriptionContainer({ ref, children }: Props) {
  return (
    <S.DescriptionContainer>
      <ProjectSubtitle ref={ref}>프로젝트 설명</ProjectSubtitle>
      {children}
    </S.DescriptionContainer>
  );
}

DescriptionContainer.Text = Text;
