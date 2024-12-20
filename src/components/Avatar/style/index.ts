import styled from '@emotion/styled';

import type { AvatarSize } from '../types';

interface AvatarStyleProps {
  $src?: string;
  $size: AvatarSize;
  $onClick?: () => void;
}

/**
 * 사이즈 props에 따른 아바타 크기
 */
const SIZE: { [key in AvatarSize]: string } = {
  small: '3.2rem',
  medium: '4.8rem',
  large: '6.4rem',
};

export const S = {
  /** 공통 아바타 컴포넌트 스타일 */
  Avatar: styled.button<AvatarStyleProps>`
    width: ${({ $size }) => SIZE[$size]};
    height: ${({ $size }) => SIZE[$size]};
    border-radius: 100%;
    cursor: ${({ $onClick }) => ($onClick ? 'pointer' : 'default')};
    background-color: ${({ theme }) => theme.colors.gray[300]};
    background-image: ${({ $src }) => ($src ? `url(${$src})` : 'none')};
    outline: none;
    transition: all 0.15s;
  `,
};
