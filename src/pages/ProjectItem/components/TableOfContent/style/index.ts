import { HEADER_HEIGHT } from '@/components/Layout/constants/style';

import styled from '@emotion/styled';

export const S = {
  TableContainer: styled.div({
    position: 'sticky',

    top: `${1.6 + HEADER_HEIGHT}rem`,
  }),

  TableOfContentTitle: styled.h4(({ theme }) => ({
    color: theme.colors.gray[800],
    ...theme.typography.body2,
  })),

  TableOfContentContainer: styled.div({
    display: 'flex',
    flexDirection: 'column',
  }),

  TableOfContentButton: styled.button({
    width: 'fit-content',
    height: 'fit-content',
    backgroundColor: 'transparent',
  }),

  TableOfContentText: styled.p<{ $isFocus: boolean }>(({ theme, $isFocus }) => ({
    color: $isFocus ? theme.colors.primary[500] : theme.colors.gray[800],
    cursor: $isFocus ? 'default' : 'pointer',
    ...($isFocus ? theme.typography.body4 : theme.typography.body3),
  })),
};
