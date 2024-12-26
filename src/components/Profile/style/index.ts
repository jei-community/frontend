import styled from '@emotion/styled';

export const S = {
  Container: styled.div({
    display: 'flex',
    flexDirection: 'column',
  }),

  FlexWrapper: styled.div({
    display: 'flex',
  }),

  InfoWrapper: styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '1.2rem',
  }),

  Title: styled.p(({ theme }) => ({
    ...theme.typography.body2,
    margin: '0.8rem 0 1.6rem 0',
  })),

  Name: styled.p(({ theme }) => ({
    ...theme.typography.body2,
  })),

  Position: styled.p(({ theme }) => ({
    ...theme.typography.body3,
    color: theme.colors.gray[500],
  })),
};
