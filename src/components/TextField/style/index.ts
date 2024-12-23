import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

import type { TextFieldHeightSize } from '../types';

interface TextFieldStyleProps {
  $heightSize: TextFieldHeightSize;
  $isError: boolean;
}

/** 텍스트 필드의 높이 사이즈 프로퍼티에 따른 리터럴 값 */
const HEIGHT: Record<TextFieldHeightSize, string> = {
  small: '3.2rem',
  medium: '4rem',
  large: '4.4rem',
};

/**
 * 공통 텍스트 필드의 폰트 스타일을 반환하는 함수
 * @param theme 전역 테마 객체 (색상만 사용)
 * @param heightSize 높이 사이즈 프로퍼티
 * @returns `heightSize`에 따른 폰트 스타일
 */
const getFontSize = (theme: Theme, heightSize: TextFieldHeightSize) => {
  if (heightSize === 'small') return theme.typography.body3;
  else if (heightSize === 'medium') return theme.typography.body1;
  else return theme.typography.subtitle;
};

export const S = {
  /** 공통 텍스트 필드 컴포넌트 스타일 */
  TextField: styled.input<TextFieldStyleProps>`
    width: 100%;
    height: ${({ $heightSize }) => HEIGHT[$heightSize]};
    padding: 0.8rem 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.4rem;
    outline: none;
    transition: all 0.15s;

    // 폰트 스타일
    ${({ theme, $heightSize }) => getFontSize(theme, $heightSize)}
    color: ${({ theme }) => theme.colors.gray[900]};

    // 배경 및 테두리 스타일
    background-color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme, $isError }) => ($isError ? theme.colors.error[500] : theme.colors.gray[300])};

    // 텍스트 필드 상태에 따른 스타일
    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[400]};
    }
    &:hover {
      border: 2px solid ${({ theme, $isError }) => ($isError ? theme.colors.error[500] : theme.colors.gray[500])};
    }
    &:active,
    &:focus {
      border: 2px solid ${({ theme, $isError }) => ($isError ? theme.colors.error[500] : theme.colors.primary[500])};
    }
    &:focus:hover {
      border: 2px solid ${({ theme, $isError }) => ($isError ? theme.colors.error[500] : theme.colors.primary[500])};
    }
    &:disabled {
      background-color: ${({ theme }) => theme.colors.gray[100]};
      border: 2px solid ${({ theme }) => theme.colors.gray[200]};
      color: ${({ theme }) => theme.colors.gray[400]};
      cursor: not-allowed;
    }
    &:disabled:hover {
      border: 2px solid ${({ theme }) => theme.colors.gray[200]};
    }
    &:disabled::placeholder {
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  `,
};
