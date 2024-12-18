import styled from '@emotion/styled';

export const S = {
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
};
