import { ChangeEvent, InputHTMLAttributes, PropsWithChildren } from 'react';

import { S } from './style';

interface Props extends PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * 토글 스위치 컴포넌트
 */
export default function ToggleSwitch({ onChange, ...p }: Props) {
  return (
    <S.ToggleSwitchContainer $checked={p.checked} $disabled={p.disabled}>
      <S.ActualCheckbox {...p} type='checkbox' onChange={onChange} />
      <S.Knob $checked={p.checked} $disabled={p.disabled} />
    </S.ToggleSwitchContainer>
  );
}
