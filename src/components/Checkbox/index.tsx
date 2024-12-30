import { ChangeEvent, InputHTMLAttributes, PropsWithChildren } from 'react';

import { S } from './style';

interface Props extends PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> {
  /** 체크박스 `checked` 상태(`true`/`false`)가 바뀌었을 때 호출되는 함수 */
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
