import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { S } from './style';
import type { ButtonColor, ButtonSize, ButtonVariant } from './types';

interface Props extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  /** 버튼의 모양 */
  variant?: ButtonVariant;
  /** 버튼의 크기 (높이는 전부 `32px`) */
  size?: ButtonSize;
  /** 버튼의 색상 */
  color?: ButtonColor;
  /** 로딩 중인지 여부 */
  isLoading?: boolean;
}

/**
 * 공통 버튼 컴포넌트
 */
export default function Button({ variant = 'filled', size = 'full', color = 'primary', isLoading = false, children, ...p }: Props) {
  return (
    <S.Button {...p} $variant={variant} $size={size} $color={color} $isLoading={isLoading} disabled={isLoading || p.disabled}>
      {isLoading ? <S.LoadingSpinner $variant={variant} $color={color} /> : children}
    </S.Button>
  );
}
