import { Check } from 'lucide-react';

import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface CheckboxStyleProps {
  $checked?: boolean;
  $disabled?: boolean;
}

/**
 * 체크박스 기본 스타일 템플릿 리터럴을 반환하는 함수
 * @param theme 전역 테마 객체 (색상만 사용)
 * @param checked 체크 여부
 * @param disabled 비활성화 여부
 * @returns 조건에 따른 체크박스 기본 스타일 템플릿 리터털
 */
const getDefaultStyle = (theme: Theme, checked?: boolean, disabled?: boolean) => {
  if (disabled) {
    return `
      background-color: ${checked ? theme.colors.gray[200] : 'transparent'};
      border: 2px solid ${theme.colors.gray[200]};
    `;
  } else {
    return `
      background-color: ${checked ? theme.colors.primary[500] : 'transparent'};
      border: 2px solid ${checked ? 'transparent' : theme.colors.gray[900]};
    `;
  }
};

/**
 * 마우스 오버 시 체크박스 스타일 템플릿 리터럴을 반환하는 함수
 * @param theme 전역 테마 객체 (색상만 사용)
 * @param checked 체크 여부
 * @param disabled 비활성화 여부
 * @returns 조건에 따른 마우스 오버 시 체크박스 스타일 템플릿 리터털
 */
const getHoverStyle = (theme: Theme, checked?: boolean, disabled?: boolean) => {
  if (disabled) return;

  return `&:hover {
    transform: scale(1.1);
    background-color: ${checked ? theme.colors.primary[300] : 'transparent'};
    border: 2px solid ${checked ? 'transparent' : theme.colors.gray[500]};
  }`;
};

/**
 * 클릭 시 체크박스 스타일 템플릿 리터럴을 반환하는 함수
 * @param theme 전역 테마 객체 (색상만 사용)
 * @param checked 체크 여부
 * @param disabled 비활성화 여부
 * @returns 조건에 따른 버튼 클릭 시 체크박스 스타일 템플릿 리터털
 */
const getActiveStyle = (theme: Theme, checked?: boolean, disabled?: boolean) => {
  const activeColor = checked ? theme.colors.primary[700] : theme.colors.gray[900];

  return `
    &:active {
      transform: scale(1);
      background-color: ${disabled ? null : activeColor};
      border: 2px solid ${disabled ? null : activeColor};
    }
  `;
};

export const S = {
  /** 공통 체크박스 컴포넌트 스타일 */
  Checkbox: styled.label<CheckboxStyleProps>`
    position: relative;
    display: inline-block;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 0.4rem;
    outline: none;
    cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
    transition: all 0.15s;

    // 상태별 체크박스 모양 세팅
    ${({ theme, $checked, $disabled }) => {
      return getDefaultStyle(theme, $checked, $disabled) + getHoverStyle(theme, $checked, $disabled) + getActiveStyle(theme, $checked, $disabled);
    }}
    &:focus {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.gray[700]};
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
  /** 체크 아이콘 */
  CheckIcon: styled(Check)<CheckboxStyleProps>`
    width: 2rem;
    height: 2rem;
    stroke: ${({ theme, $disabled }) => ($disabled ? theme.colors.gray[300] : theme.colors.white)};
    stroke-width: 3;
    opacity: ${({ $checked }) => ($checked ? 1 : 0)};
    transform: translateY(${({ $checked }) => ($checked ? 0 : '4px')});
    transition: all 0.15s;
  `,
};
