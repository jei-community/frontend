import styled from '@emotion/styled';

export const S = {
  Container: styled.div({
    padding: '1.6rem',
  }),

  PageTitle: styled.h1(({ theme }) => ({
    ...theme.typography.title,
    color: theme.colors.gray[800],
    marginBottom: '1.6rem',
  })),
};
