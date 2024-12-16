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

  Wrapper: styled.div({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  }),

  ContentContainer: styled.div`
    display: flex;

    width: 120rem;
    min-height: calc(100dvh - ${HEADER_HEIGHT}rem);
    max-height: calc(100dvh - ${HEADER_HEIGHT}rem);

    overflow-y: auto;
    background-color: white;

    @media (max-width: ${MEDIA_QUERY.DESKTOP_S}px) {
      width: 100%;
    }
  `,
};
