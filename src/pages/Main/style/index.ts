import styled from '@emotion/styled';

export const S = {
  Container: styled.div({
    width: '100%',
    padding: '6.4rem',
  }),
  CategoryTitle: styled.div(({ theme }) => ({
    color: theme.colors.gray[900],
    ...theme.typography.subtitle,
    margin: '0 0 1rem 0',
  })),

  MyProject: {
    Wrapper: styled.div({
      display: 'flex',
      columnGap: '1.6rem',
      maxWidth: '100%',
    }),
    Item: styled.div(({ theme }) => ({
      flex: '0 0 auto',
      width: '20rem',
      height: '20rem',
      padding: '1rem',
      backgroundColor: theme.colors.gray[200],
    })),
  },

  Article: {
    Wrapper: styled.div({
      // display: 'flex',
      columnGap: '2rem',
      margin: '0 0 4rem 0',
    }),
    Item: styled.div(({ theme }) => ({
      flex: '0 0 auto',
      width: '40rem',
      height: '20rem',
      backgroundColor: theme.colors.gray[200],
    })),
  },

  Post: {
    Wrapper: styled.div({
      // display: 'flex',
      flexDirection: 'column',
      rowGap: '2rem',
      margin: '0 0 4rem 0',
    }),
    Item: styled.div(({ theme }) => ({
      // flex: '0 0 auto',
      width: '100%',
      height: '40rem',
      backgroundColor: theme.colors.gray[200],
    })),
  },
};
