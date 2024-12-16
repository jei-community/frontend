import { Link } from 'react-router';

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

  TopContainer: styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    width: '100%',
  }),

  Title: styled.h1(({ theme }) => ({
    ...theme.typography.title,
  })),

  Button: styled.button(({ theme }) => ({
    width: '12.8rem',
    height: '3.2rem',
    backgroundColor: theme.colors.primary[500],
    color: theme.colors.white,
    border: 'none',

    ...theme.typography.body4,
  })),

  SearchWrapper: styled.div({
    display: 'flex',
    justifyContent: 'end',

    width: '100%',
  }),

  InputContainer: styled.div({
    display: 'flex',
    gap: '0.8rem',
  }),

  Input: styled.input(({ theme }) => ({
    width: '25.6rem',
    height: '3.2rem',

    padding: '0 1.2rem',

    border: '1px solid',
    borderColor: theme.colors.gray[300],
  })),

  InputButton: styled.button(({ theme }) => ({
    width: '3.2rem',
    height: '3.2rem',

    backgroundColor: theme.colors.gray[200],
    border: 'none',
  })),

  Projects: styled.ul`
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

  ProjectItem: styled.li({
    width: 'fit-content',
  }),

  CustomLink: styled(Link)({
    display: 'block',
    width: 'fit-content',
  }),

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
