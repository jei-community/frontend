import styled from '@emotion/styled';

export const S = {
  Container: styled.div(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    width: '36rem',
    height: '54rem',

    gap: '1.6rem',
    padding: '2.4rem',

    border: '1px solid',
    borderColor: theme.colors.gray[200],

    borderRadius: 16,
  })),

  Title: styled.h2(({ theme }) => ({
    color: theme.colors.gray[800],
    ...theme.typography.subtitle,
  })),

  Thumbnail: styled.img(({ theme }) => ({
    width: '100%',

    borderRadius: 8,

    backgroundColor: theme.colors.primary[300],
  })),

  ContentContainer: styled.div({
    display: 'flex',
    justifyContent: 'space-between',

    width: '100%',
  }),

  Date: styled.p(({ theme }) => ({
    color: theme.colors.gray[500],
    ...theme.typography.body3,
  })),

  ProjectState: styled.div(({ theme }) => ({
    width: '1.2rem',
    height: '1.2rem',
    backgroundColor: theme.colors.warning[500],
    borderRadius: 50,
  })),

  Description: styled.p(({ theme }) => ({
    color: theme.colors.gray[800],
    ...theme.typography.body3,
  })),
};
