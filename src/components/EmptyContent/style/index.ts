import { Frown } from 'lucide-react';

import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

import type { EmptyContentSize } from '../types';

interface EmptyContentStyleProps {
  $size: EmptyContentSize;
}

/** `size` prop에 따른 아이콘 사이즈 */
const ICON_SIZE: Record<EmptyContentSize, string> = {
  small: '4rem',
  medium: '4.8rem',
  large: '6.4rem',
};

/** `size` prop에 따른 폰트 스타일을 반환하는 함수 */
const getFontStyle = (theme: Theme, size: EmptyContentSize) => {
  if (size === 'small') return theme.typography.body4;
  else if (size === 'medium') return theme.typography.body2;
  else return theme.typography.subtitle;
};

export const S = {
  /** 빈 내용 영역 컴포넌트를 감싸는 컨테이너 스타일 */
  EmptyContentContainer: styled.div<EmptyContentStyleProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    color: ${({ theme }) => theme.colors.gray[300]};
  `,
  /** 빈 내용 영역 컴포넌트의 아이콘 스타일 */
  EmptyContentIcon: styled(Frown)<EmptyContentStyleProps>`
    width: ${({ $size }) => ICON_SIZE[$size]};
    height: ${({ $size }) => ICON_SIZE[$size]};
  `,
  /** 빈 내용 영역 컴포넌트의 텍스트 스타일 */
  EmptyContentText: styled.div<EmptyContentStyleProps>`
    ${({ theme, $size }) => getFontStyle(theme, $size)};
  `,
};
