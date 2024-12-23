import { PropsWithChildren } from 'react';

import { S } from './style';
import type { EmptyContentSize } from './types';

interface Props extends PropsWithChildren {
  size?: EmptyContentSize;
}

/**
 * 빈 내용 영역 컴포넌트
 */
export default function EmptyContent({ size = 'medium', children }: Props) {
  return (
    <S.EmptyContentContainer $size={size}>
      <S.EmptyContentIcon $size={size} />
      <S.EmptyContentText $size={size}>{children}</S.EmptyContentText>
    </S.EmptyContentContainer>
  );
}
