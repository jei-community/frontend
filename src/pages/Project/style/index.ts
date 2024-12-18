import { Link } from 'react-router';

import styled from '@emotion/styled';

export const CommonS = {
  SubTitle: styled.h3(({ theme }) => ({
    color: theme.colors.gray[800],
    ...theme.typography.subtitle,
  })),

  MoreButtonWrapper: styled.div({
    display: 'flex',
    justifyContent: 'end',
  }),

  MoreButton: styled.button(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '9.6rem',
    height: '3.2rem',

    border: '2px solid',
    borderColor: theme.colors.primary[500],
    borderRadius: 4,

    color: theme.colors.primary[500],
    backgroundColor: theme.colors.white,
  })),
};

export const S = {
  Container: styled.div({
    display: 'flex',
    flexDirection: 'column',

    gap: '3.2rem',
    padding: '3.2rem 1.6rem',

    userSelect: 'none',
  }),

  SideContainer: styled.div({
    display: 'flex',
    flexDirection: 'column',

    height: '100%',

    padding: '4rem 1.6rem',
    gap: '1.6rem',

    userSelect: 'none',
  }),

  EditLink: styled(Link)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    height: '3.2rem',

    borderRadius: 4,

    backgroundColor: theme.colors.gray[500],
  })),

  EditText: styled.p(({ theme }) => ({
    color: theme.colors.white,
    ...theme.typography.body4,
  })),

  CommonS,
};
