import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const S = {
  ButtonWithIcon: styled.button<{ $widthSize: string; $heightSize: string; $align: string }>`
    position: relative;
    background-color: transparent;

    width: ${({ $widthSize }) => $widthSize};
    height: ${({ $heightSize }) => $heightSize};

    cursor: pointer;

    ${({ $align }) => {
      if ($align !== 'center') return;

      return css`
        display: flex;
        justify-content: center;
        align-items: center;
      `;
    }}

    &:hover {
      div {
        opacity: 1;
      }

      li {
        filter: blur(2px);
      }

      span {
        background-color: ${({ theme }) => theme.colors.black};
        opacity: 0.3;
      }
    }
  `,

  IconWrapper: styled.div({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    opacity: 0.01,

    zIndex: 1,
  }),

  Background: styled.span({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    width: '100%',
    height: '100%',

    borderRadius: 8,
  }),
};
