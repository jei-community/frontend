import { PropsWithChildren, TextareaHTMLAttributes } from 'react';

import { S } from './style';

interface Props extends PropsWithChildren<TextareaHTMLAttributes<HTMLTextAreaElement>> {
  isError?: boolean;
}

/**
 * 공통 텍스트 에리어 컴포넌트
 */
export default function TextArea({ isError = false, ...p }: Props) {
  /** 텍스트 에리어 높이 자동 조절 */
  const adjustHeight = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const target = e.currentTarget;
    target.style.height = 'auto';
    target.style.height = `${target.scrollHeight + 4}px`;
  };

  return <S.TextArea {...p} $isError={isError} rows={p.rows ?? 1} onInput={adjustHeight} />;
}
