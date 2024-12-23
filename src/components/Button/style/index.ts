import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

import type { ButtonColor, ButtonSize, ButtonVariant } from '../types';

interface ButtonStyleProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $color: ButtonColor;
  $isLoading: boolean;
}

interface LoadingSpinnerStyleProps {
  $variant: ButtonVariant;
  $color: ButtonColor;
}

/** 버튼 사이즈 프로퍼티에 따른 너비 사이즈 리터럴 값 */
const WIDTH: { [key in ButtonSize]: string } = {
  icon: '3.2rem',
  small: '6.4rem',
  medium: '9.6rem',
  large: '12.8rem',
  full: '100%',
};

/**
 * 버튼 모양 & 색상에 따른 버튼 기본 스타일 템플릿 리터럴을 반환하는 함수
 * @param theme 전역 테마 객체 (색상만 사용)
 * @param variant 버튼 모양
 * @param color 버튼 색상
 * @returns 조건에 따른 버튼 기본 스타일 템플릿 리터털
 */
const getDefaultStyle = (theme: Theme, variant: ButtonVariant, color: ButtonColor) => {
  const _color = color === 'neutral' ? theme.colors.gray : theme.colors[color as keyof typeof theme.colors];

  const outlinedTextColor = color === 'neutral' ? theme.colors.gray[600] : _color[500];
  const filledTextColor = color === 'warning' ? theme.colors.gray[900] : theme.colors.white;

  return `
    background-color: ${variant === 'filled' ? _color[500] : 'transparent'};
    border: 2px solid ${variant === 'filled' ? 'transparent' : outlinedTextColor};
    color: ${variant === 'filled' ? filledTextColor : outlinedTextColor};
  `;
};

/**
 * 버튼 모양 & 색상에 따른 마우스 오버 시 버튼 스타일 템플릿 리터럴을 반환하는 함수
 * @param theme 전역 테마 객체 (색상만 사용)
 * @param variant 버튼 모양
 * @param color 버튼 색상
 * @returns 조건에 따른 마우스 오버 시 버튼 스타일 템플릿 리터털
 */
const getHoverStyle = (theme: Theme, variant: ButtonVariant, color: ButtonColor) => {
  const _color = color === 'neutral' ? theme.colors.gray : theme.colors[color as keyof typeof theme.colors];

  const outlinedTextColor = color === 'neutral' ? theme.colors.gray[400] : _color[300];
  const filledTextColor = color === 'warning' ? theme.colors.gray[900] : theme.colors.white;

  return `&:hover {
    background-color: ${variant === 'filled' ? _color[300] : 'transparent'};
    border: 2px solid ${variant === 'filled' ? 'transparent' : outlinedTextColor};
    color: ${variant === 'filled' ? filledTextColor : outlinedTextColor};
  }`;
};

/**
 * 버튼 모양 & 색상에 따른 버튼 클릭 시 스타일 템플릿 리터럴을 반환하는 함수
 * @param theme 전역 테마 객체 (색상만 사용)
 * @param variant 버튼 모양
 * @param color 버튼 색상
 * @returns 조건에 따른 버튼 클릭 시 스타일 템플릿 리터털
 */
const getActiveStyle = (theme: Theme, variant: ButtonVariant, color: ButtonColor) => {
  const _color = color === 'neutral' ? theme.colors.gray : theme.colors[color as keyof typeof theme.colors];

  const outlinedBackgroundColor = color === 'neutral' ? theme.colors.gray[200] : _color[300];
  const outlinedTextColor = color === 'neutral' ? theme.colors.gray[800] : _color[700];
  const filledTextColor = color === 'warning' ? theme.colors.gray[900] : theme.colors.white;

  return `&:active {
    background-color: ${variant === 'filled' ? _color[700] : outlinedBackgroundColor};
    border: 2px solid ${variant === 'filled' ? 'transparent' : outlinedTextColor};
    color: ${variant === 'filled' ? filledTextColor : outlinedTextColor};
  }`;
};

/**
 * 버튼 모양 & 로딩 상태에 따른 버튼 비활성화 스타일 템플릿 리터럴을 반환하는 함수
 * @param theme 전역 테마 객체 (색상만 사용)
 * @param variant 버튼 모양
 * @param isLoading 로딩 중 여부
 * @returns 조건에 따른 버튼 비활성화 스타일 템플릿 리터털
 */
const getDisabledStyle = (theme: Theme, variant: ButtonVariant, isLoading: boolean) => {
  const style = `
    background-color: ${variant === 'filled' ? theme.colors.gray[100] : 'transparent'};
    border: 2px solid ${variant === 'filled' ? 'transparent' : theme.colors.gray[300]};
    color: ${theme.colors.gray[variant === 'filled' ? 400 : 300]};
  `;

  return `&:disabled {
    cursor: not-allowed;
    ${isLoading ? '' : style}
  }`;
};

export const S = {
  /** 공통 버튼 컴포넌트 스타일 */
  Button: styled.button<ButtonStyleProps>`
    width: ${({ $size }) => WIDTH[$size]};
    height: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.4rem;
    font-size: ${({ theme }) => theme.typography.body4};
    outline: none;
    cursor: pointer;
    transition: all 0.15s;

    // 모양, 색상, 로딩 상태별 버튼 모양 세팅
    ${({ theme, $variant, $color, $isLoading }) => {
      return (
        getDefaultStyle(theme, $variant, $color) +
        ($isLoading ? '' : getHoverStyle(theme, $variant, $color) + getActiveStyle(theme, $variant, $color)) +
        getDisabledStyle(theme, $variant, $isLoading)
      );
    }}

    // 버튼 포커스 상태일 때 스타일
    &:focus {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.gray[700]};
    }
  `,
  /** 로딩 스피너 스타일 */
  LoadingSpinner: styled.div<LoadingSpinnerStyleProps>`
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    border: 2px solid
      ${({ theme, $variant, $color }) => {
        if ($variant === 'filled') return theme.colors.white;
        if ($color === 'neutral') return theme.colors.gray[600];
        else return theme.colors[$color][500];
      }};
    border-top: 2px solid transparent;
    border-radius: 50%;
    animation: spin 0.75s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `,
};
