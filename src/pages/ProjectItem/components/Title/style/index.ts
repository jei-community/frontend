import { Status } from '@/types/project';

import { Theme } from '@emotion/react';
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

  Badge: styled.div<{ $status: Status }>(({ theme, $status }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '9rem',
    height: '2.4rem',

    padding: '0.4rem 1.2rem',

    borderRadius: 40,

    backgroundColor: generateStatusColor($status, theme),
  })),

  BadgeText: styled.p(({ theme }) => ({
    color: theme.colors.white,
    ...theme.typography.body4,
  })),

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

const generateStatusColor = (status: Status, theme: Theme) => {
  switch (status) {
    case 'LIVE':
      return theme.colors.success[500];
    case 'DEVELOP':
      return theme.colors.warning[500];
    case 'STOP':
      return theme.colors.error[500];
  }
};
