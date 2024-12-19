import { PropsWithChildren } from 'react';

import { S } from '@/components/ProjectContentContainer/style';

export default function ProjectContentContainer({ children }: PropsWithChildren) {
  return <S.Container>{children}</S.Container>;
}
