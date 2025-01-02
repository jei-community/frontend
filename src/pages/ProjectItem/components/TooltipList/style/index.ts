import { Link } from 'react-router';

import styled from '@emotion/styled';

export const S = {
  TooltipList: styled.ul({
    display: 'flex',
    justifyContent: 'space-between',

    maxHeight: '3.2rem',
  }),

  TooltipContainer: styled.div({}),

  TooltipImage: styled.img({
    width: '3.2rem',
    height: '3.2rem',
    maxWidth: '3.2rem',
    maxHeight: '3.2rem',
    cursor: 'pointer',
  }),

  LinkList: styled.ul({
    display: 'flex',
    flexDirection: 'column',

    gap: 4,
  }),

  CustomLink: styled(Link)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '12.8rem',
    height: '3.2rem',

    color: theme.colors.primary[500],
    border: '2px solid',
    borderColor: theme.colors.primary[500],
    borderRadius: 4,
    ...theme.typography.body4,
  })),
};
