import { MEDIA_QUERY } from '@/constants';
import styled from '@emotion/styled';

export const S = {
  Container: styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    width: '100vw',
    height: '100vh',

    backgroundColor: 'gray',
  }),

  ContentContainer: styled.div`
    display: flex;
    width: 120rem;
    min-height: calc(100dvh - 6.4rem);
    max-height: calc(100dvh - 6.4rem);

    overflow-y: auto;
    background-color: white;

    @media (max-width: ${MEDIA_QUERY.DESKTOP_S}) {
      width: 100%;
    }
  `,
};
