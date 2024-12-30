import { PropsWithChildren } from 'react';

import { S } from './style';
import type { BadgeColor, BadgeSize } from './types';

interface Props extends PropsWithChildren {
  /** 뱃지의 크기 */
  size?: BadgeSize;
  /** 뱃지의 색상 */
  color?: BadgeColor;
}

/**
 * 공통 뱃지 컴포넌트
 */
export default function Badge({ size = 'medium', color = 'success', children }: Props) {
  return (
    <S.Badge $size={size} $color={color}>
      {children}
    </S.Badge>
  );
}
