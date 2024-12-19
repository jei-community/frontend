import styled from '@emotion/styled';

export const S = {
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
