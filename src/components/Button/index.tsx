import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { S } from './style';
import { ButtonColor, ButtonSize, ButtonVariant } from './types';

interface Props extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  isLoading?: boolean;
}

/**
 * 공통 버튼 컴포넌트
 */
export default function Button({ variant = 'filled', size = 'full', color = 'primary', isLoading = false, children, ...p }: Props) {
  // TODO(성찬): 버튼 로딩 중 스타일 적용
  return (
    <S.Button {...p} $variant={variant} $size={size} $color={color} $isLoading={isLoading}>
      {children}
    </S.Button>
  );
}
