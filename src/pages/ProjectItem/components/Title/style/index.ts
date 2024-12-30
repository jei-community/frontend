import styled from '@emotion/styled';

export const S = {
  Container: styled.div({
    display: 'flex',

    width: '100%',

    gap: '1.6rem',
    paddingBottom: '3.2rem',
  }),

  Thumbnail: styled.img({
    width: '10rem',
    height: '10rem',

    borderRadius: 8,
  }),

  RightContainer: styled.div({
    display: 'flex',
    flexDirection: 'column',

    flex: 1,

    gap: '1.2rem',
  }),

  TitleContainer: styled.div({
    display: 'flex',
    alignItems: 'center',

    gap: '1.6rem',
  }),

  Title: styled.h2(({ theme }) => ({
    color: theme.colors.gray[900],
    ...theme.typography.title,
  })),

  ButtonGroupWrapper: styled.div({
    width: '36rem',
  }),

  MemberAndDateContainer: styled.div({
    display: 'flex',
    justifyContent: 'space-between',
  }),

  MemberInfoContainer: styled.div({
    display: 'flex',

    alignItems: 'center',

    gap: '0.8rem',
  }),

  AvatarContainer: styled.ul({
    display: 'flex',

    gap: '0.4rem',
  }),

  Avatar: styled.img({
    width: '3.2rem',
    height: '3.2rem',

    borderRadius: 64,
  }),

  MemberCountText: styled.p(({ theme }) => ({
    color: theme.colors.gray[800],
    ...theme.typography.body4,
  })),

  DataContainer: styled.div({
    display: 'flex',
    gap: '0.4rem',
  }),

  DateText: styled.p(({ theme }) => ({
    color: theme.colors.gray[500],
    ...theme.typography.body1,
  })),
};
