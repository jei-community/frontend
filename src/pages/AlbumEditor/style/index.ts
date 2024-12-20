import styled from '@emotion/styled';

export const S = {
  Container: styled.div({
    padding: '2.4rem',
  }),

  PageTitle: styled.h1(({ theme }) => ({
    ...theme.typography.title,
    color: theme.colors.gray[800],
    marginBottom: '0.8rem',
  })),

  PageSubTitle: styled.h2(({ theme }) => ({
    ...theme.typography.body1,
    color: theme.colors.gray[600],
  })),

  ImageUploadBox: styled.div(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: theme.colors.gray[100],
    borderRadius: '0.8rem',
    padding: '1.5rem',
    width: '100%',
    gap: '1.6rem',
    margin: '1.6rem 0',
  })),

  Image: styled.img({
    width: '16rem',
    height: '16rem',
    borderRadius: '0.8rem',
    position: 'relative',
  }),

  AsideContainer: styled.div({
    padding: '2.4rem 1.6rem',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '0.8rem',
  }),
};
