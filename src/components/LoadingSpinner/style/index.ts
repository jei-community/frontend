import styled from '@emotion/styled';

import type { LoadingSpinnerSize } from '../types';

interface EmptyContentStyleProps {
  $size: LoadingSpinnerSize;
}

/** 로딩 스피너 컴포넌트의 사이즈 */
const SIZE: Record<LoadingSpinnerSize, string> = {
  small: '3.2rem',
  medium: '4.8rem',
  large: '6.4rem',
};

export const S = {
  /** 로딩 스피너 컴포넌트 스타일 */
  LoadingSpinner: styled.div<EmptyContentStyleProps>`
    width: ${({ $size }) => SIZE[$size]};
    height: ${({ $size }) => SIZE[$size]};
    border-radius: 100%;
    background: conic-gradient(transparent, ${({ theme }) => theme.colors.gray[500]});
    mask-image: radial-gradient(circle, transparent 50%, black 51%);
    -webkit-mask-image: radial-gradient(circle, transparent 50%, black 51%);
    animation: spin 0.75s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `,
};
