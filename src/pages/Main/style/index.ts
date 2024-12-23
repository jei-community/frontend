import styled from '@emotion/styled';

export const S = {
  ContentContainer: styled.div({
    padding: '2.4rem',
  }),

  AsideContainer: styled.div({
    padding: '1.6rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2.4rem',
  }),

  Container: styled.div({
    width: '100%',
    padding: '6.4rem',
  }),
  CategoryTitle: styled.div(({ theme }) => ({
    color: theme.colors.gray[900],
    ...theme.typography.subtitle,
    margin: '0 0 1rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
      display: 'flex',
      columnGap: '1.6rem',
      maxWidth: '100%',
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
      display: 'flex',
      flexDirection: 'column',
      rowGap: '3.2rem',
    }),
  },

  Divider: styled.div(({ theme }) => ({
    height: '1px',
    backgroundColor: theme.colors.gray[200], // 구분선 색상 설정
    margin: '2.4rem 0', // 구분선의 위/아래 여백
  })),
};
