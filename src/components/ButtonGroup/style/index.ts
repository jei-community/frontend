import styled from '@emotion/styled';

import { ButtonGroupColor } from '../types';

interface ButtonGroupStyleProps {
  $checked?: boolean;
  $color?: ButtonGroupColor;
  $offsetX?: number;
}

export const S = {
  /** 버튼 그룹 컨테이너 컴포넌트 스타일 */
  ButtonGroupContainer: styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    height: 3.2rem;
    padding: 0.4rem;
    border-radius: 3.2rem;

    background-color: ${({ theme }) => theme.colors.gray[100]};

    &:focus {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.gray[700]};
    }
  `,
  /** 버튼 그룹을 이루는 각 버튼의 레이블 스타일 (버튼을 감싸는 형식) */
  Label: styled.label<ButtonGroupStyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem 1.6rem;
    height: 2.4rem;
    border-radius: 2.4rem;
    z-index: 1;
    word-break: keep-all;
    cursor: pointer;
    transition: all 0.15s;

    ${({ theme, $checked, $color }) => {
      return {
        color: !$checked || $color === 'warning' ? theme.colors.gray[900] : theme.colors.white,
        ...theme.typography.body4,
      };
    }};
  `,
  /** 실제 라디오 버튼 요소 스타일 (화면에는 보이지 않음) */
  ActualRadioButton: styled.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    margin: 0;
  `,
  /** 선택된 버튼의 배경 컬러를 표시하는 요소 스타일 */
  ButtonBackground: styled.div<ButtonGroupStyleProps>`
    position: absolute;
    top: 0.4rem;
    // 선택된 버튼의 너비만큼 슬라이드
    left: ${({ $offsetX }) => `${($offsetX ?? 0) / 10 + 0.4}rem`};
    height: 2.4rem;
    border-radius: 2.4rem;
    transition: all 0.25s;

    background-color: ${({ theme, $color }) => theme.colors[!$color || $color === 'neutral' ? 'gray' : $color][500]};
  `,
};
