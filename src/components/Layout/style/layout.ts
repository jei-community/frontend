import { HEADER_HEIGHT } from '@/components/Layout/constants/style';

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
    min-height: calc(100dvh - ${HEADER_HEIGHT}rem);
    max-height: calc(100dvh - ${HEADER_HEIGHT}rem);

    overflow-y: auto;
    background-color: white;

    @media (max-width: ${MEDIA_QUERY.DESKTOP_S}) {
      width: 100%;
    }
  `,
};
