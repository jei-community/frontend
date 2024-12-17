import { CommonS } from '@/pages/Project/style';
import styled from '@emotion/styled';

export const S = {
  DescribeContainer: styled.div({
    display: 'flex',
    flexDirection: 'column',

    gap: '1.6rem',
  }),

  DescribeContent: styled.p<{ $isOpen: boolean }>(({ theme, $isOpen }) => ({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    WebkitLineClamp: $isOpen ? 'none' : 5,
    color: theme.colors.gray[800],
    userSelect: 'text',
    ...theme.typography.body1,
  })),

  CommonS,
};
