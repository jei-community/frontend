import styled from '@emotion/styled';

import { ButtonColor, ButtonSize, ButtonVariant } from '../types';

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

export const S = {
  /** 공통 버튼 컴포넌트 스타일 */
  Button: styled.button<ButtonStyleProps>`
    width: ${({ $size }) => {
      if ($size === 'icon') return '3.2rem';
      if ($size === 'small') return '6.4rem';
      if ($size === 'medium') return '9.6rem';
      if ($size === 'large') return '12.8rem';

      return '100%';
    }};
    height: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${({ theme, $variant, $color }) => {
      if ($variant === 'filled') return '2px solid transparent';

      let strokeColor: string;
      if ($color === 'primary') strokeColor = theme.colors.primary[500];
      else if ($color === 'success') strokeColor = theme.colors.success[500];
      else if ($color === 'warning') strokeColor = theme.colors.warning[500];
      else if ($color === 'error') strokeColor = theme.colors.error[500];
      else strokeColor = theme.colors.gray[600];

      return `2px solid ${strokeColor}`;
    }};
    border-radius: 0.4rem;
    background-color: ${({ theme, $variant, $color }) => {
      if ($variant === 'outlined') return 'transparent';

      if ($color === 'primary') return theme.colors.primary[500];
      if ($color === 'success') return theme.colors.success[500];
      if ($color === 'warning') return theme.colors.warning[500];
      if ($color === 'error') return theme.colors.error[500];

      return theme.colors.gray[500];
    }};
    color: ${({ theme, $variant, $color }) => {
      if ($variant === 'filled') {
        if ($color === 'warning') return theme.colors.gray[900];
        else return theme.colors.white;
      }

      if ($color === 'primary') return theme.colors.primary[500];
      if ($color === 'success') return theme.colors.success[500];
      if ($color === 'warning') return theme.colors.warning[500];
      if ($color === 'error') return theme.colors.error[500];

      return theme.colors.gray[600];
    }};
    font-size: ${({ theme }) => theme.typography.body4};
    cursor: ${({ $isLoading }) => ($isLoading ? 'not-allowed' : 'pointer')};
    transition: all 0.15s;

    &:hover {
      background-color: ${({ theme, $variant, $color, $isLoading }) => {
        if ($isLoading) return;
        if ($variant === 'outlined') return 'transparent';

        if ($color === 'primary') return theme.colors.primary[300];
        if ($color === 'success') return theme.colors.success[300];
        if ($color === 'warning') return theme.colors.warning[300];
        if ($color === 'error') return theme.colors.error[300];

        return theme.colors.gray[300];
      }};
      border: ${({ theme, $variant, $color, $isLoading }) => {
        if ($isLoading) return;
        if ($variant === 'filled') return '2px solid transparent';

        let strokeColor: string;
        if ($color === 'primary') strokeColor = theme.colors.primary[300];
        else if ($color === 'success') strokeColor = theme.colors.success[300];
        else if ($color === 'warning') strokeColor = theme.colors.warning[300];
        else if ($color === 'error') strokeColor = theme.colors.error[300];
        else strokeColor = theme.colors.gray[400];

        return `2px solid ${strokeColor}`;
      }};
      color: ${({ theme, $variant, $color, $isLoading }) => {
        if ($isLoading) return;
        if ($variant === 'filled') {
          if ($color === 'warning') return theme.colors.gray[900];
          else return theme.colors.white;
        }

        if ($color === 'primary') return theme.colors.primary[300];
        if ($color === 'success') return theme.colors.success[300];
        if ($color === 'warning') return theme.colors.warning[300];
        if ($color === 'error') return theme.colors.error[300];

        return theme.colors.gray[400];
      }};
    }
    // TODO(성찬): 버튼 포커스 상태일 때 스타일이 안바뀌는 문제 수정
    &:focus {
      outline: '2px solid ${({ theme }) => theme.colors.error[700]}';
    }
    &:active {
      background-color: ${({ theme, $variant, $color, $isLoading }) => {
        if ($isLoading) return;
        if ($variant === 'outlined') {
          if ($color === 'primary') return theme.colors.primary[300];
          if ($color === 'success') return theme.colors.success[300];
          if ($color === 'warning') return theme.colors.warning[300];
          if ($color === 'error') return theme.colors.error[300];
          else return theme.colors.gray[200];
        }

        if ($color === 'primary') return theme.colors.primary[700];
        if ($color === 'success') return theme.colors.success[700];
        if ($color === 'warning') return theme.colors.warning[700];
        if ($color === 'error') return theme.colors.error[700];

        return theme.colors.gray[700];
      }};
      border: ${({ theme, $variant, $color, $isLoading }) => {
        if ($isLoading) return;
        if ($variant === 'filled') return '2px solid transparent';

        let strokeColor: string;
        if ($color === 'primary') strokeColor = theme.colors.primary[700];
        else if ($color === 'success') strokeColor = theme.colors.success[700];
        else if ($color === 'warning') strokeColor = theme.colors.warning[700];
        else if ($color === 'error') strokeColor = theme.colors.error[700];
        else strokeColor = theme.colors.gray[800];

        return `2px solid ${strokeColor}`;
      }};
      color: ${({ theme, $variant, $color, $isLoading }) => {
        if ($isLoading) return;
        if ($variant === 'filled') {
          if ($color === 'warning') return theme.colors.gray[900];
          else return theme.colors.white;
        }

        if ($color === 'primary') return theme.colors.primary[700];
        if ($color === 'success') return theme.colors.success[700];
        if ($color === 'warning') return theme.colors.warning[700];
        if ($color === 'error') return theme.colors.error[700];

        return theme.colors.gray[800];
      }};
    }
    &:disabled {
      background-color: ${({ theme, $variant, $isLoading }) => {
        if ($isLoading) return;
        if ($variant === 'outlined') return 'transparent';
        else return theme.colors.gray[100];
      }};
      border: ${({ theme, $variant, $isLoading }) => {
        if ($isLoading) return;
        if ($variant === 'outlined') return `2px solid ${theme.colors.gray[300]}`;
        else return '2px solid transparent';
      }};
      color: ${({ theme, $variant, $isLoading }) => {
        if ($isLoading) return;
        if ($variant === 'outlined') return theme.colors.gray[300];
        else return theme.colors.gray[400];
      }};
      cursor: not-allowed; // 사용 불가 커서 (UX적으로 더 직관적이라고 판단)
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

        if ($color === 'primary') return theme.colors.primary[500];
        if ($color === 'success') return theme.colors.success[500];
        if ($color === 'warning') return theme.colors.warning[500];
        if ($color === 'error') return theme.colors.error[500];

        return theme.colors.gray[600];
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
