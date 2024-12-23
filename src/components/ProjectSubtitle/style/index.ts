import styled from '@emotion/styled';

export const S = {
  SubTitle: styled.h3(({ theme }) => ({
    color: theme.colors.gray[800],
    ...theme.typography.subtitle,
  })),
};
