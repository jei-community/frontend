import { ChangeEvent, InputHTMLAttributes, PropsWithChildren } from 'react';

import { S } from './style';

interface Props extends PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> {
  /** 토글 스위치의 `checked` 상태(`true`/`false`)가 바뀌었을 때 호출되는 함수 */
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
