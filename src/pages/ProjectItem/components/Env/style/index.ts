import styled from '@emotion/styled';

export const S = {
  EnvBoard: styled.div(({ theme }) => ({
    position: 'relative',

    minHeight: '9.6rem',

    padding: '0.8rem 1.2rem',

    borderRadius: 8,

    backgroundColor: theme.colors.gray[100],
  })),

  EnvButton: styled.button(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '9.6rem',
    height: '3.2rem',

    borderRadius: 4,

    color: theme.colors.gray[900],
    backgroundColor: theme.colors.warning[500],
  })),

  EnvText: styled.p(({ theme }) => ({
    whiteSpace: 'pre-wrap',
    color: theme.colors.gray[800],
    ...theme.typography.body1,
  })),
};
