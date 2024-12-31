import styled from '@emotion/styled';

import type { BadgeColor, BadgeSize } from '../types';

interface BadgeStyleProps {
  $size: BadgeSize;
  $color: BadgeColor;
}

export const S = {
  /** 공통 뱃지 컴포넌트 스타일 */
  Badge: styled.div<BadgeStyleProps>`
    display: inline-flex;
    border-radius: 4rem;
    padding: 0.3rem ${({ $size }) => ($size === 'small' ? '1.2rem' : '1.6rem')};
    background-color: ${({ theme, $color }) => theme.colors[$color][500]};
    color: ${({ theme, $color }) => ($color === 'warning' ? theme.colors.gray[900] : theme.colors.white)};

    ${({ theme, $size, $color }) => {
      if ($size === 'small') {
        return theme.typography[$color === 'warning' ? 'caption2' : 'caption1'];
      } else {
        return theme.typography[$color === 'warning' ? 'body4' : 'body3'];
      }
    }};
  `,
};
