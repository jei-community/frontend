import { Link } from 'react-router';

import { HEADER_HEIGHT } from '@/components/Layout/constants/style';

import styled from '@emotion/styled';

export const S = {
  Header: styled.header(({ theme }) => ({
    position: 'sticky',
    top: '0',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    minHeight: `${HEADER_HEIGHT}rem`,

    borderBottom: `1px solid ${theme.colors.gray[200]}`,

    backgroundColor: theme.colors.white,
    zIndex: 1,
  })),

  Content: styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    width: '120rem',
    height: '100%',

    padding: '0 1.6rem',
  }),

  LeftContainer: styled.div({
    display: 'flex',

    gap: '4.8rem',
  }),

  LinkContainer: styled.div({
    display: 'flex',

    gap: '2.4rem',
  }),

  CustomLink: styled(Link)<{ $isFocused: boolean }>(({ theme, $isFocused }) => ({
    color: $isFocused ? theme.colors.primary[500] : theme.colors.gray[800],
    ...theme.typography.body1,
  })),
};
