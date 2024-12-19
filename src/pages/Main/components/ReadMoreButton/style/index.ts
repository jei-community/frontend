import styled from '@emotion/styled';

export const S = {
  ReadMoreButton: styled.button(({ theme }) => ({
    color: theme.colors.primary[500],
    ...theme.typography.body2,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  })),
};
