import styled from '@emotion/styled';

export const S = {
  Container: styled.div({
    width: '100%',
  }),

  Title: styled.div(({ theme }) => ({
    ...theme.typography.subtitle,
    color: theme.colors.gray[800],
    marginBottom: '0.8rem',
  })),

  AuthorInfo: {
    Wrapper: styled.div({
      display: 'flex',
      alignItems: 'center',
    }),
    Avatar: styled.img({
      width: '3.2rem',
      height: '3.2rem',
      borderRadius: '999rem',
      objectFit: 'contain',
      marginRight: '2px',
    }),
    Name: styled.span(({ theme }) => ({
      ...theme.typography.body2,
    })),
    Position: styled.span(({ theme }) => ({
      ...theme.typography.body1,
      color: theme.colors.gray[500],
      marginLeft: '2px',
    })),
    Date: styled.span(({ theme }) => ({
      ...theme.typography.body3,
      color: theme.colors.gray[500],
    })),
  },

  MetaWrapper: styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1.6rem',
  }),

  Description: styled.div(({ theme }) => ({
    ...theme.typography.body1,
    color: theme.colors.gray[800],
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    lineClamp: 5,
    WebkitLineClamp: 5,
    WebkitBoxOrient: 'vertical',
  })),
};
