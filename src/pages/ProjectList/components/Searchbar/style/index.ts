import styled from '@emotion/styled';

export const S = {
  SearchContainer: styled.div({
    display: 'flex',
    gap: '0.8rem',
  }),

  TextFieldWrapper: styled.div({
    width: '34rem',
  }),

  InputButton: styled.button(({ theme }) => ({
    width: '3.2rem',
    height: '3.2rem',

    backgroundColor: theme.colors.gray[200],
    border: 'none',
  })),
};
