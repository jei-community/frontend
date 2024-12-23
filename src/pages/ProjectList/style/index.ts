import { MEDIA_QUERY } from '@/constants';
import styled from '@emotion/styled';

export const S = {
  Container: styled.div({
    display: 'flex',
    flexDirection: 'column',

    gap: '1.6rem',
    padding: '3.2rem 1.6rem',

    userSelect: 'none',
  }),

  HeaderContainer: styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    width: '100%',
  }),

  ProjectList: styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;

    gap: 4.4rem;

    @media (max-width: ${MEDIA_QUERY.DESKTOP_M}px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${MEDIA_QUERY.DESKTOP_S}px) {
      grid-template-columns: repeat(1, 1fr);
    }
  `,

  Pagination: styled.div({
    display: 'flex',
    justifyContent: 'center',

    width: '100%',

    gap: '0.8rem',
  }),

  PaginationNumberList: styled.ul({
    display: 'flex',

    gap: '0.8rem',
  }),

  PaginationButton: styled.button({
    width: '3.2rem',
    height: '3.2rem',

    border: 'none',
    backgroundColor: 'transparent',
  }),

  PaginationNumber: styled.p<{ $isClicked: boolean }>(({ theme, $isClicked }) => ({
    color: $isClicked ? theme.colors.white : theme.colors.gray[800],
    ...theme.typography.body2,
  })),
};
