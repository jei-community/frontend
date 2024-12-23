import styled from '@emotion/styled';

interface ToggleSwitchStyleProps {
  $checked?: boolean;
  $disabled?: boolean;
}

export const S = {
  /** 토글 스위치 컴포넌트 스타일 */
  ToggleSwitchContainer: styled.label<ToggleSwitchStyleProps>`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.4rem;
    width: 6.4rem;
    height: 3.2rem;
    border-radius: 3.2rem;
    outline: none;
    cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
    transition: all 0.15s;

    background-color: ${({ theme, $checked, $disabled }) => {
      if ($disabled) return theme.colors.gray[$checked ? 300 : 100];

      return $checked ? theme.colors.success[300] : theme.colors.gray[200];
    }};

    &:hover {
      background-color: ${({ theme, $checked, $disabled }) => {
        if (!$disabled && $checked) return theme.colors.success[700];
      }};
    }
    &:hover > div {
      background-color: ${({ theme, $checked, $disabled }) => {
        if (!$disabled && !$checked) return theme.colors.gray[600];
      }};
    }
    &:active > div {
      scale: ${({ $disabled }) => ($disabled ? 1 : 0.9)};
    }
  `,
  /** 실제 체크박스 요소 (화면에는 보이지 않음) */
  ActualCheckbox: styled.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    margin: 0;
  `,
  /** 토글 스위치 노브(꼭지) */
  Knob: styled.div<ToggleSwitchStyleProps>`
    position: relative;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 100%;
    left: ${({ $checked }) => ($checked ? '3.2rem' : 0)};
    transition: all 0.15s;

    background-color: ${({ theme, $checked, $disabled }) => {
      if ($checked) return theme.colors.white;

      return theme.colors.gray[$disabled ? 200 : 400];
    }};
  `,
};
