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
    justify-content: center;

    flex: 1;
    width: 120rem;

    @media (max-width: ${MEDIA_QUERY.DESKTOP_S}) {
      width: 100%;
    }

    background-color: white;
  `,
};
