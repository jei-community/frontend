import styled from '@emotion/styled';

import type { TextButtonColor, TextButtonSize } from '../types';

interface TextButtonStyleProps {
  $color: TextButtonColor;
  $size: TextButtonSize;
}

export const S = {
  /** 공통 텍스트 버튼 컴포넌트 스타일 */
  TextButton: styled.button<TextButtonStyleProps>`
    height: ${({ $size }) => ($size === 'small' ? '1.8rem' : '2.4rem')};
    cursor: pointer;
    outline: none;
    border-bottom: 2px solid transparent;
    transition: all 0.15s;

    // 폰트 스타일
    ${({ theme, $size }) => {
      if ($size === 'small') return theme.typography.body4;
      else return theme.typography.body2;
    }}
    color: ${({ theme, $color }) => {
      if ($color === 'neutral') return theme.colors.gray[500];
      else return theme.colors.primary[500];
    }};

    // 배경 및 테두리 스타일
    background-color: ${({ theme }) => theme.colors.white};

    // 텍스트 버튼 상태에 따른 스타일
    &:hover {
      color: ${({ theme, $color }) => theme.colors[$color === 'primary' ? 'primary' : 'gray'][300]};
    }
    &:active {
      color: ${({ theme, $color }) => theme.colors[$color === 'primary' ? 'primary' : 'gray'][700]};
    }
    &:focus {
      border-bottom: 2px solid ${({ theme, $color }) => theme.colors[$color === 'primary' ? 'primary' : 'gray'][500]};
    }
    &:disabled {
      color: ${({ theme }) => theme.colors.gray[200]};
      cursor: not-allowed;
    }
  `,
};
