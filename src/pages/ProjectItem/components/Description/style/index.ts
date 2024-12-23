import styled from '@emotion/styled';

export const S = {
  DescriptionText: styled.p<{ $isOpen: boolean }>(({ theme, $isOpen }) => ({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    WebkitLineClamp: $isOpen ? 'none' : 5,
    color: theme.colors.gray[800],
    userSelect: 'text',
    ...theme.typography.body1,
  })),
};
