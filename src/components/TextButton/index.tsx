import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { S } from './style';
import type { TextButtonColor, TextButtonSize } from './types';

interface Props extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  /** 텍스트 버튼의 색상 */
  color?: TextButtonColor;
  /** 텍스트 버튼의 크기 */
  size?: TextButtonSize;
}

/**
 * 공통 텍스트 버튼 컴포넌트
 */
export default function TextButton({ color = 'primary', size = 'medium', ...p }: Props) {
  return <S.TextButton {...p} $color={color} $size={size} />;
}
