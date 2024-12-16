import { HEADER_HIGHT } from '@/components/Layout/Header/style/header';

import { MEDIA_QUERY } from '@/constants';
import styled from '@emotion/styled';

export const S = {
  Container: styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    width: '100vw',
    height: '100vh',
  }),

  ContentContainer: styled.div`
    display: flex;
    justify-content: center;

    width: 100%;
    min-height: calc(100dvh - ${HEADER_HIGHT}rem);
    max-height: calc(100dvh - ${HEADER_HIGHT}rem);

    overflow-y: auto;
    background-color: white;

    @media (max-width: ${MEDIA_QUERY.DESKTOP_S}) {
      width: 100%;
    }
  `,
};
