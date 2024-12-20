import { ChangeEvent, InputHTMLAttributes, PropsWithChildren } from 'react';

import { S } from './style';

interface Props extends PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * 공통 체크박스 컴포넌트
 */
export default function Checkbox({ onChange, ...p }: Props) {
  return (
    <S.Checkbox $checked={p.checked} $disabled={p.disabled}>
      <S.ActualCheckbox {...p} type='checkbox' onChange={onChange} />
      <S.CheckIcon $checked={p.checked} $disabled={p.disabled} />
    </S.Checkbox>
  );
}
