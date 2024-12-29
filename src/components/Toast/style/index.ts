import { X } from 'lucide-react';

import styled from '@emotion/styled';

import type { ToastColors } from '../types';

interface ToastStyleProps {
  $color?: ToastColors;
  $duration?: number;
}

export const S = {
  /** 토스트 컨테이너 스타일 */
  ToastContainer: styled.section<ToastStyleProps>`
    position: fixed;
    bottom: 2%;
    right: 2%;
    min-width: 32rem;
    height: 4.8rem;
    animation:
      popup 0.4s,
      fadeout 0.25s ${({ $duration }) => $duration}s forwards;

    @keyframes popup {
      0% {
        bottom: -10%;
      }
      100% {
        bottom: 2%;
      }
    }
    @keyframes fadeout {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  `,
  /** 토스트 메시지 컨테이너 스타일 */
  ToastMessageContainer: styled.div<ToastStyleProps>`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3.2rem;
    padding: 0 1.2rem 0 1.6rem;
    border-radius: 0.4rem 0.4rem 0 0;
    background-color: ${({ theme, $color }) => {
      return theme.colors[!$color || $color === 'neutral' ? 'gray' : $color][300];
    }};
  `,
  /** 토스트 메시지 텍스트 스타일 */
  Message: styled.p`
    ${({ theme }) => {
      return {
        color: theme.colors.gray[900],
        ...theme.typography.body2,
      };
    }};
  `,
  /** 닫기(X) 버튼 스타일 */
  CloseButton: styled(X)`
    width: 2.4rem;
    height: 2.4rem;
    color: ${({ theme }) => {
      return theme.colors.gray[900];
    }};
    cursor: pointer;
  `,
  /** 로딩 바 컨테이너 스타일 */
  LoadingBarContainer: styled.div`
    height: 0.4rem;
    background-color: ${({ theme }) => theme.colors.gray[200]};
  `,
  /** 로딩 바 스타일 */
  LoadingBar: styled.div<ToastStyleProps>`
    width: 0%;
    height: 100%;
    background-color: ${({ theme, $color }) => {
      return theme.colors[!$color || $color === 'neutral' ? 'gray' : $color][700];
    }};
    animation: leftToRight ${({ $duration }) => $duration}s linear forwards;

    @keyframes leftToRight {
      0% {
        width: 0%;
      }
      100% {
        width: 100%;
      }
    }
  `,
};
