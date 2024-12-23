import { InputHTMLAttributes, PropsWithChildren } from 'react';

import { S } from './style';
import type { TextFieldHeightSize } from './types';

interface Props extends PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> {
  heightSize?: TextFieldHeightSize;
  isError?: boolean;
}

/**
 * 공통 텍스트 필드 컴포넌트
 */
export default function TextField({ heightSize = 'medium', isError = false, ...p }: Props) {
  return <S.TextField {...p} $heightSize={heightSize} $isError={isError} />;
}
