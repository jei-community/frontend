import { CommonS } from '@/pages/Project/style';
import styled from '@emotion/styled';

export const S = {
  StackAndEnvContainer: styled.div({
    display: 'flex',
    flexDirection: 'column',

    gap: '1.6rem',
  }),

  PositionContainer: styled.div({
    display: 'flex',
    flexDirection: 'column',

    gap: '1.6rem',
  }),

  PositionTitle: styled.h4(({ theme }) => ({
    color: theme.colors.gray[800],
    ...theme.typography.body2,
  })),

  TechStackImgFlexList: styled.ul({
    display: 'flex',

    gap: '1.6rem',

    overflowX: 'auto',
  }),

  TechStackImgGridList: styled.ul({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(10rem, 1fr))',

    gap: '1.6rem',
  }),

  TechStackImg: styled.img({
    width: '10rem',
    height: '10rem',
  }),

  EnvBoard: styled.div<{ $isEnvOpen: boolean }>(({ theme, $isEnvOpen }) => ({
    display: $isEnvOpen ? 'block' : 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: $isEnvOpen ? 'fit-content' : '9.6rem',

    padding: $isEnvOpen ? '0.8rem 1.2rem' : 'none',

    backgroundColor: theme.colors.gray[100],
  })),

  EnvButton: styled.button(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '9.6rem',
    height: '3.2rem',

    borderRadius: 4,

    color: theme.colors.gray[900],
    backgroundColor: theme.colors.warning[500],
  })),

  EnvContentText: styled.p(({ theme }) => ({
    color: theme.colors.gray[800],
    ...theme.typography.body1,
  })),

  CommonS,
};
